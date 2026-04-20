import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Alert, AlertDescription } from '../ui/alert';
import { ExternalLink, Copy, Check, Github, FileText, Download, Upload } from 'lucide-react';
import { useState } from 'react';

export default function EditingGuide() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, step: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(step);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  // UPDATE THIS WITH YOUR GITHUB USERNAME
  const githubUsername = 'ajaykumarkanna'; // <-- Replace with your actual GitHub username
  const githubRepoURL = `https://github.com/${githubUsername}/kannaajaykumar.com`;
  const directFileURL = `https://github.com/${githubUsername}/kannaajaykumar.com/edit/main/public/portfolio-content.json`;

  return (
    <div className="space-y-6">
      {/* Important Notice */}
      <Alert className="bg-blue-50 border-blue-200">
        <FileText className="h-5 w-5 text-blue-600" />
        <AlertDescription className="text-blue-900">
          <strong>How This Works:</strong> Your portfolio content is stored in <code className="bg-blue-100 px-2 py-1 rounded">portfolio-content.json</code> file in your GitHub repository. 
          To update your website, you edit this file on GitHub and commit the changes. GitHub Pages automatically deploys the updates in 1-2 minutes.
        </AlertDescription>
      </Alert>

      {/* Quick Start Guide */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-2">
          <Github className="w-6 h-6" />
          Step-by-Step: How to Update Your Portfolio
        </h2>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-slate-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Badge className="bg-indigo-600 text-white min-w-[30px] h-[30px] flex items-center justify-center">1</Badge>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Go to Your GitHub Repository</h3>
                <p className="text-slate-600 mb-3">Open your browser and navigate to your portfolio repository:</p>
                <div className="bg-white p-3 rounded border flex items-center justify-between">
                  <code className="text-sm text-slate-800 break-all">{githubRepoURL}</code>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    onClick={() => window.open(githubRepoURL, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Badge className="bg-indigo-600 text-white min-w-[30px] h-[30px] flex items-center justify-center">2</Badge>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Open portfolio-content.json</h3>
                <p className="text-slate-600 mb-3">Click the button below to go directly to the file editor:</p>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => window.open(directFileURL, '_blank')}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Open File in GitHub
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <p className="text-xs text-slate-500 mt-2">Or manually navigate to: <code className="bg-slate-200 px-1 rounded">portfolio-content.json</code> in your repository</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Badge className="bg-indigo-600 text-white min-w-[30px] h-[30px] flex items-center justify-center">3</Badge>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Edit the File</h3>
                <p className="text-slate-600 mb-3">Click the <strong>pencil icon</strong> (✏️) in the top-right corner to edit the file.</p>
                <div className="bg-white p-3 rounded border">
                  <p className="text-sm text-slate-700 mb-2">You'll see JSON content like this:</p>
                  <pre className="bg-slate-100 p-3 rounded text-xs overflow-x-auto">
{`{
  "contact": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your@email.com"
  },
  "projects": [
    {
      "title": "Project Name",
      "company": "Company Name"
    }
  ]
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-slate-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Badge className="bg-indigo-600 text-white min-w-[30px] h-[30px] flex items-center justify-center">4</Badge>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Make Your Changes</h3>
                <p className="text-slate-600 mb-3">Update any text you want to change. Common edits:</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>Contact Info:</strong> Find <code className="bg-slate-200 px-1 rounded">"contact"</code> section and update name, email, phone, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>Projects:</strong> Find <code className="bg-slate-200 px-1 rounded">"projects"</code> array and edit project details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>Experience:</strong> Find <code className="bg-slate-200 px-1 rounded">"experience"</code> array to update work history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>Skills/Testimonials:</strong> Edit respective sections similarly</span>
                  </li>
                </ul>
                <Alert className="mt-3 bg-yellow-50 border-yellow-200">
                  <AlertDescription className="text-yellow-900 text-sm">
                    <strong>⚠️ Important:</strong> Keep the JSON format valid! Don't delete commas, quotes, or brackets.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-slate-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Badge className="bg-green-600 text-white min-w-[30px] h-[30px] flex items-center justify-center">5</Badge>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Commit Changes</h3>
                <p className="text-slate-600 mb-3">Scroll to the bottom and click the green <strong>"Commit changes"</strong> button.</p>
                <div className="bg-white p-3 rounded border space-y-2">
                  <p className="text-sm text-slate-700">Optional: Add a commit message like:</p>
                  <div className="flex items-center gap-2">
                    <code className="text-xs bg-slate-100 p-2 rounded flex-1">Updated contact information and added new project</code>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => copyToClipboard('Updated contact information and added new project', 5)}
                    >
                      {copiedStep === 5 ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-slate-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Badge className="bg-green-600 text-white min-w-[30px] h-[30px] flex items-center justify-center">6</Badge>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Wait for Deployment</h3>
                <p className="text-slate-600 mb-3">GitHub Pages will automatically deploy your changes in <strong>1-2 minutes</strong>.</p>
                <div className="bg-white p-3 rounded border">
                  <p className="text-sm text-slate-700">Check your live site:</p>
                  <div className="flex items-center gap-2 mt-2">
                    <code className="text-xs bg-slate-100 p-2 rounded flex-1">https://kannaajaykumar.com</code>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => window.open('https://kannaajaykumar.com', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Alternative: Export/Import Method */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-2">
          <Upload className="w-6 h-6" />
          Alternative: Use Export/Import (Easier for Large Changes)
        </h2>
        
        <div className="space-y-4">
          <p className="text-slate-600">
            If you're making many changes, use this workflow:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Download className="w-4 h-4 text-indigo-600" />
                Step 1: Export from Admin
              </h3>
              <p className="text-sm text-slate-600">Click the <strong>"Export"</strong> button at the top of this panel to download the current JSON file.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-600" />
                Step 2: Edit Locally
              </h3>
              <p className="text-sm text-slate-600">Open the downloaded file in any text editor (VS Code, Notepad++, etc.) and make your changes.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Upload className="w-4 h-4 text-indigo-600" />
                Step 3: Upload to GitHub
              </h3>
              <p className="text-sm text-slate-600">Go to GitHub, open <code className="bg-slate-200 px-1 rounded">portfolio-content.json</code>, click edit, and paste your updated content.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                Step 4: Commit & Deploy
              </h3>
              <p className="text-sm text-slate-600">Click "Commit changes" and wait 1-2 minutes for your site to update automatically.</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Common JSON Editing Tips */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">📝 Quick JSON Reference</h2>
        
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">String Values (Text)</h3>
            <pre className="bg-white p-3 rounded text-xs border">
{`"name": "Your Name"
"title": "UI/UX Designer"
"summary": "A longer text..."`}
            </pre>
            <p className="text-xs text-slate-600 mt-2">Always use double quotes around text values</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Arrays (Lists)</h3>
            <pre className="bg-white p-3 rounded text-xs border">
{`"tags": ["Design", "UX", "Research"]
"deliverables": [
  "Wireframes",
  "Prototypes",
  "User Testing"
]`}
            </pre>
            <p className="text-xs text-slate-600 mt-2">Use square brackets, separate items with commas</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Special Characters</h3>
            <pre className="bg-white p-3 rounded text-xs border">
{`"quote": "He said \\"hello\\""  // Use \\" for quotes inside text
"summary": "Line 1\\nLine 2"      // Use \\n for new lines`}
            </pre>
            <p className="text-xs text-slate-600 mt-2">Escape special characters with backslash</p>
          </div>
        </div>
      </Card>

      {/* Video Tutorial Placeholder */}
      <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
        <h2 className="text-2xl font-bold mb-4 text-indigo-900">💡 Pro Tips</h2>
        <ul className="space-y-3 text-indigo-800">
          <li className="flex items-start gap-2">
            <span className="font-bold">✓</span>
            <span><strong>Use GitHub Mobile App:</strong> You can edit files directly from your phone!</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">✓</span>
            <span><strong>Preview Before Commit:</strong> GitHub shows a preview of your changes before committing</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">✓</span>
            <span><strong>Version History:</strong> Made a mistake? GitHub keeps all previous versions. Click "History" to restore.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">✓</span>
            <span><strong>Test First:</strong> Use the Admin panel to preview changes before updating GitHub</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">✓</span>
            <span><strong>Bookmark the File:</strong> Bookmark the direct link to portfolio-content.json for quick access</span>
          </li>
        </ul>
      </Card>

      {/* Need Help Section */}
      <Alert className="bg-slate-100 border-slate-300">
        <AlertDescription className="text-slate-800">
          <strong>Still have questions?</strong> You can always use the Admin panel to preview your changes locally, 
          then export the JSON and paste it into GitHub. The live site only updates when you commit changes to the repository.
        </AlertDescription>
      </Alert>
    </div>
  );
}
