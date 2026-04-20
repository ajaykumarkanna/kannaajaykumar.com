import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { 
  Play, 
  TrendingUp, 
  User, 
  Mail, 
  ArrowRight, 
  ChevronLeft, 
  Store, 
  Calendar, 
  CreditCard 
} from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

export default function WebsitesWithAjay() {
  const navigate = useNavigate();
  const contactSectionRef = useRef<HTMLElement>(null);
  const { websitesWithAjay } = usePortfolioData();

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Default fallback if data is missing (e.g. initial load or empty JSON)
  const videoContent = websitesWithAjay?.welcomeVideo || {
    title: "How a Website Transforms Your Local Business",
    videoUrl: ""
  };
  
  const stories = websitesWithAjay?.successStories || [];
  const featuredStory = stories.length > 0 ? stories[0] : null;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Navigation */}
      <nav className="p-4 flex items-center justify-between border-b border-border/50 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Home
        </button>
        <span className="font-bold text-lg tracking-tight">Ajay Kumar</span>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-12 md:py-20 flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          <span className="flex h-2 w-2 relative mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Helping Local Businesses Grow
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
          Your Business Deserves <br className="hidden md:block" />
          <span className="text-primary">A 24/7 Salesperson</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          I build websites that don't just sit there—they bring you customers, book appointments, and tell your story while you sleep.
        </p>
      </header>

      {/* Video Section */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden shadow-2xl border border-border group cursor-pointer">
            {videoContent.videoUrl ? (
               <iframe 
                 src={videoContent.videoUrl} 
                 title={videoContent.title}
                 className="absolute inset-0 w-full h-full"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
               />
            ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5 hover:bg-black/10 transition-colors">
                  <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                  </div>
                  <p className="mt-6 text-lg font-medium text-muted-foreground bg-background/80 px-4 py-2 rounded-lg backdrop-blur-md">
                    Watch: {videoContent.title}
                  </p>
                </div>
            )}
          </div>
        </div>
      </section>

      {/* 3 Key Actions Section */}
      <section className="px-6 py-16 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Action 1: Value Proposition */}
            <div className="bg-card p-8 rounded-2xl border border-border flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Grow Your Business</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                A website increases credibility and reach. Learn how digital presence converts locals into loyal customers.
              </p>
              <Button variant="outline" className="w-full">
                See the Benefits
              </Button>
            </div>

            {/* Action 2: Personal Branding */}
            <div className="bg-card p-8 rounded-2xl border border-border flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 transform md:-translate-y-4">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-6">
                <User className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Meet Ajay</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                I'm a local developer passionate about helping neighbors succeed. No big agency fees, just personal service.
              </p>
              <Button variant="outline" className="w-full" onClick={() => navigate('/')}>
                My Portfolio
              </Button>
            </div>

            {/* Action 3: Contact */}
            <div className="bg-card p-8 rounded-2xl border border-border flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Start a Project</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Ready to take the next step? Let's chat about your goals and how we can achieve them together.
              </p>
              <Button className="w-full" onClick={scrollToContact}>
                Contact Me
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Example Story Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
        {featuredStory ? (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium rounded-full">
                Success Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">{featuredStory.title}</h2>
              <p className="text-lg text-muted-foreground">
                {featuredStory.description}
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Before</h4>
                    <p className="text-muted-foreground text-sm">{featuredStory.before}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">The Solution</h4>
                    <p className="text-muted-foreground text-sm">{featuredStory.after}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">The Result</h4>
                    <p className="text-muted-foreground text-sm">{featuredStory.result}</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-2xl transform rotate-3 scale-105 opacity-70"></div>
              <div className="bg-card border border-border rounded-2xl p-6 relative shadow-xl">
                {/* Mockup of a website card */}
                <div className="space-y-4">
                  <div className="h-8 bg-muted rounded-md w-3/4 animate-pulse"></div>
                  <div className="h-32 bg-muted rounded-md w-full animate-pulse"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-muted rounded-md animate-pulse"></div>
                    <div className="h-20 bg-muted rounded-md animate-pulse"></div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div className="text-sm font-medium">Metric</div>
                    <div className="text-green-600 font-bold">{featuredStory.metrics}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ) : (
            <div className="text-center text-muted-foreground">No success stories added yet.</div>
          )}
        </div>
      </section>

      {/* Final Contact / CTA Section */}
      <section ref={contactSectionRef} className="px-6 py-20 bg-primary/5 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Ready to Write Your Success Story?</h2>
          <p className="text-muted-foreground text-lg">
            You don't need to know technical jargon. You just need a partner who cares about your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8 h-12"
              onClick={() => window.location.href = 'mailto:contact@kannaajaykumar.com?subject=I%20want%20a%20website'}
            >
              Email Me Directly
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 h-12 bg-background"
              onClick={() => window.location.href = 'tel:+919876543210'} 
            >
              Call / WhatsApp
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Based locally. Available for coffee meetings.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>&copy; {new Date().getFullYear()} Kanna Ajay Kumar. Building digital bridges for local businesses.</p>
      </footer>
    </div>
  );
}