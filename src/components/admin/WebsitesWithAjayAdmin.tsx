import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { FormInput } from '../forms/FormInput';
import { FormTextarea } from '../forms/FormTextarea';
import { AssetSelector } from '../forms/AssetSelector';
import { Plus, Trash2 } from 'lucide-react';
import { PortfolioData, WebsitesWithAjaySection, WebsiteProject } from '../../data/portfolio-data';

interface WebsitesWithAjayAdminProps {
  data: WebsitesWithAjaySection;
  onUpdate: (updates: Partial<WebsitesWithAjaySection>) => void;
  onAddStory: () => void;
  onUpdateStory: (id: number, updates: Partial<WebsiteProject>) => void;
  onDeleteStory: (id: number) => void;
}

export function WebsitesWithAjayAdmin({ 
  data, 
  onUpdate, 
  onAddStory, 
  onUpdateStory, 
  onDeleteStory 
}: WebsitesWithAjayAdminProps) {

  const handleVideoUpdate = (field: string, value: string) => {
    onUpdate({
      welcomeVideo: {
        ...data.welcomeVideo,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-8">
      {/* Welcome Video Section */}
      <Card className="p-8">
        <h2 className="text-2xl mb-6 text-slate-900">Welcome Video</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <FormInput
            id="video-title"
            label="Video Title"
            value={data.welcomeVideo?.title || ''}
            onChange={(value) => handleVideoUpdate('title', value)}
          />
          <FormInput
            id="video-url"
            label="Video URL (YouTube/Vimeo Embed)"
            value={data.welcomeVideo?.videoUrl || ''}
            onChange={(value) => handleVideoUpdate('videoUrl', value)}
            placeholder="https://www.youtube.com/embed/..."
          />
          {/* 
          <div className="md:col-span-2">
            <AssetSelector
              id="video-thumbnail"
              label="Video Thumbnail (Optional)"
              value={data.welcomeVideo?.thumbnail || ''}
              onChange={(value) => handleVideoUpdate('thumbnail', value)}
              assetType="thumbnail"
            />
          </div>
          */}
        </div>
      </Card>

      {/* Success Stories Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl text-slate-900">Success Stories</h2>
          <Button onClick={onAddStory} className="bg-indigo-600 hover:bg-indigo-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Success Story
          </Button>
        </div>

        {data.successStories?.map((story, index) => (
          <Card key={story.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <span className="text-sm text-slate-500">Story #{index + 1}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onDeleteStory(story.id)}
              >
                <Trash2 className="w-4 h-4 text-red-600" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormInput
                id={`story-title-${story.id}`}
                label="Business Name / Title"
                value={story.title}
                onChange={(value) => onUpdateStory(story.id, { title: value })}
              />
              <FormInput
                id={`story-metrics-${story.id}`}
                label="Key Metric (e.g., +340% Visitors)"
                value={story.metrics}
                onChange={(value) => onUpdateStory(story.id, { metrics: value })}
              />
              <div className="md:col-span-2">
                <FormTextarea
                  id={`story-desc-${story.id}`}
                  label="Description"
                  value={story.description}
                  onChange={(value) => onUpdateStory(story.id, { description: value })}
                  rows={2}
                />
              </div>
              
              <div className="md:col-span-2">
                <FormTextarea
                  id={`story-before-${story.id}`}
                  label="Before State"
                  value={story.before}
                  onChange={(value) => onUpdateStory(story.id, { before: value })}
                  rows={2}
                />
              </div>
              <div className="md:col-span-2">
                 <FormTextarea
                  id={`story-after-${story.id}`}
                  label="After Solution"
                  value={story.after}
                  onChange={(value) => onUpdateStory(story.id, { after: value })}
                  rows={2}
                />
              </div>
              <div className="md:col-span-2">
                 <FormTextarea
                  id={`story-result-${story.id}`}
                  label="Business Result"
                  value={story.result}
                  onChange={(value) => onUpdateStory(story.id, { result: value })}
                  rows={2}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
