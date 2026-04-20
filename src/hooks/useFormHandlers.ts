import React, { useState, useEffect } from 'react';
import type { 
  PortfolioData, 
  Project, 
  Experience, 
  Skill, 
  Client, 
  Testimonial,
  Hobby,
  WebsitesWithAjaySection,
  WebsiteProject
} from '../data/portfolio-data';
import { 
  validateFormSection, 
  validateProject, 
  validateExperience, 
  validateSkill, 
  validateClient, 
  validateTestimonial,
  ValidationErrors
} from '../utils/validation';

export function useFormHandlers(initialData: PortfolioData) {
  const [data, setData] = useState<PortfolioData>(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState<Record<string, ValidationErrors>>({});

  // Load data from portfolio-content.json on mount
  useEffect(() => {
    const loadContent = async () => {
      try {
        // Add timestamp to prevent caching
        const response = await fetch(`/portfolio-content.json?t=${Date.now()}`);
        if (response.ok) {
          const contentData = await response.json();
          setData(contentData);
        }
      } catch (error) {
        console.warn('Could not load portfolio-content.json, using default data:', error);
        // Fallback to default data from portfolio-data.ts
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, []);

  // Save handler - now shows instructions instead of saving
  const handleSave = () => {
    alert('To save changes permanently:\n\n1. Export the JSON file\n2. Go to GitHub.com\n3. Edit portfolio-content.json\n4. Paste your changes\n5. Commit the changes\n\nCheck the Admin tab for detailed instructions!');
  };

  // Save to Server
  const saveToServer = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return { success: true, message: 'Data saved successfully to server!' };
      } else {
        const errData = await response.json();
        return { success: false, message: errData.message || 'Failed to save to server.' };
      }
    } catch (error) {
      console.error('Error saving to server:', error);
      return { success: false, message: 'Could not connect to backend server. Make sure "npm run server" is running.' };
    }
  };

  // Export JSON
  const handleExportJSON = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'portfolio-content.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  // Import JSON
  const handleImportJSON = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target?.result as string);
        setData(importedData);
      } catch (error) {
        alert('Failed to import JSON file. Please check the file format.');
      }
    };
    reader.readAsText(file);
  };

  // Project handlers
  const addProject = () => {
    const newProject: Project = {
      id: Date.now(),
      featured: false,
      title: "New Project",
      company: "Company",
      duration: "Duration",
      role: "Role",
      summary: "Project summary...",
      impact: "Impact...",
      deliverables: ["Deliverable 1"],
      tags: ["Tag 1"],
      image: "",
      category: "Category",
      problemStatement: "Problem statement..."
    };
    setData({ ...data, projects: [...data.projects, newProject] });
  };

  const deleteProject = (id: number) => {
    setData({ ...data, projects: data.projects.filter(p => p.id !== id) });
  };

  const updateProject = (id: number, updates: Partial<Project>) => {
    setData({
      ...data,
      projects: data.projects.map(p => p.id === id ? { ...p, ...updates } : p)
    });
  };

  // Experience handlers
  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now(),
      title: "Job Title",
      company: "Company",
      duration: "Duration",
      current: false,
      highlights: ["Highlight 1"]
    };
    setData({ ...data, experience: [...data.experience, newExp] });
  };

  const deleteExperience = (id: number) => {
    setData({ ...data, experience: data.experience.filter(e => e.id !== id) });
  };

  const updateExperience = (id: number, updates: Partial<Experience>) => {
    setData({
      ...data,
      experience: data.experience.map(e => e.id === id ? { ...e, ...updates } : e)
    });
  };

  // Skill handlers
  const addSkill = () => {
    const newSkill: Skill = {
      category: "New Category",
      icon: "Code",
      items: ["Skill 1"]
    };
    setData({ ...data, skills: [...data.skills, newSkill] });
  };

  const deleteSkill = (index: number) => {
    setData({ ...data, skills: data.skills.filter((_, i) => i !== index) });
  };

  const updateSkill = (index: number, updates: Partial<Skill>) => {
    setData({
      ...data,
      skills: data.skills.map((s, i) => i === index ? { ...s, ...updates } : s)
    });
  };

  // Client handlers
  const addClient = () => {
    const newClient: Client = {
      name: "Client Name",
      logo: ""
    };
    setData({ ...data, clients: [...data.clients, newClient] });
  };

  const deleteClient = (index: number) => {
    setData({ ...data, clients: data.clients.filter((_, i) => i !== index) });
  };

  const updateClient = (index: number, updates: Partial<Client>) => {
    setData({
      ...data,
      clients: data.clients.map((c, i) => i === index ? { ...c, ...updates } : c)
    });
  };

  // Testimonial handlers
  const addTestimonial = () => {
    const newTestimonial: Testimonial = {
      quote: "Testimonial quote...",
      author: "Author Name",
      role: "Role",
      company: "Company"
    };
    setData({ ...data, testimonials: [...data.testimonials, newTestimonial] });
  };

  const deleteTestimonial = (index: number) => {
    setData({ ...data, testimonials: data.testimonials.filter((_, i) => i !== index) });
  };

  const updateTestimonial = (index: number, updates: Partial<Testimonial>) => {
    setData({
      ...data,
      testimonials: data.testimonials.map((t, i) => i === index ? { ...t, ...updates } : t)
    });
  };

  // Hobby handlers
  const addHobby = () => {
    const newHobby: Hobby = {
      icon: "Sparkles",
      title: "New Hobby",
      description: "Description..."
    };
    setData({ ...data, hobbies: [...data.hobbies, newHobby] });
  };

  const deleteHobby = (index: number) => {
    setData({ ...data, hobbies: data.hobbies.filter((_, i) => i !== index) });
  };

  const updateHobby = (index: number, updates: Partial<Hobby>) => {
    setData({
      ...data,
      hobbies: data.hobbies.map((h, i) => i === index ? { ...h, ...updates } : h)
    });
  };

  // Website Section Handlers
  const updateWebsitesWithAjay = (updates: Partial<WebsitesWithAjaySection>) => {
    setData({ ...data, websitesWithAjay: { ...data.websitesWithAjay, ...updates } });
  };
  
  const addWebsiteSuccessStory = () => {
    const newStory: WebsiteProject = {
      id: Date.now(),
      title: "New Success Story",
      description: "Description...",
      before: "Before state...",
      after: "After state...",
      result: "Result...",
      metrics: "+100% Growth",
      image: ""
    };
    setData({
      ...data,
      websitesWithAjay: {
        ...data.websitesWithAjay,
        successStories: [...data.websitesWithAjay.successStories, newStory]
      }
    });
  };

  const updateWebsiteSuccessStory = (id: number, updates: Partial<WebsiteProject>) => {
    const updatedStories = data.websitesWithAjay.successStories.map(s => 
      s.id === id ? { ...s, ...updates } : s
    );
    setData({
      ...data,
      websitesWithAjay: {
        ...data.websitesWithAjay,
        successStories: updatedStories
      }
    });
  };

  const deleteWebsiteSuccessStory = (id: number) => {
    setData({
      ...data,
      websitesWithAjay: {
        ...data.websitesWithAjay,
        successStories: data.websitesWithAjay.successStories.filter(s => s.id !== id)
      }
    });
  };

  // File upload handler (placeholder for future implementation)
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Future implementation for file uploads
    console.log('File upload not yet implemented');
  };

  return {
    data,
    setData,
    errors,
    handleSave,
    saveToServer,
    handleExportJSON,
    handleImportJSON,
    // Project handlers
    addProject,
    deleteProject,
    updateProject,
    // Experience handlers
    addExperience,
    deleteExperience,
    updateExperience,
    // Skill handlers
    addSkill,
    deleteSkill,
    updateSkill,
    // Client handlers
    addClient,
    deleteClient,
    updateClient,
    // Testimonial handlers
    addTestimonial,
    deleteTestimonial,
    updateTestimonial,
    // Hobby handlers
    addHobby,
    deleteHobby,
    updateHobby,
    // Website Section Handlers
    updateWebsitesWithAjay,
    addWebsiteSuccessStory,
    updateWebsiteSuccessStory,
    deleteWebsiteSuccessStory,
    // File upload handler
    handleFileUpload,
    // Loading state
    isLoading
  };
}
