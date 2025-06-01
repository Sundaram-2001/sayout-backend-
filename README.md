<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sayout - Anonymous Messaging Platform</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            background: white;
            margin-top: 2rem;
            margin-bottom: 2rem;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .header {
            text-align: center;
            margin-bottom: 3rem;
            padding-bottom: 2rem;
            border-bottom: 3px solid #667eea;
        }
        
        .logo {
            font-size: 3rem;
            font-weight: bold;
            background: linear-gradient(45deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
        }
        
        .tagline {
            font-size: 1.2rem;
            color: #666;
            font-style: italic;
        }
        
        .section {
            margin-bottom: 2.5rem;
        }
        
        .section h2 {
            color: #667eea;
            font-size: 2rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .section h3 {
            color: #764ba2;
            font-size: 1.4rem;
            margin-bottom: 0.5rem;
            margin-top: 1.5rem;
        }
        
        .icon {
            width: 30px;
            height: 30px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
        }
        
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 1rem;
        }
        
        .feature-card {
            background: linear-gradient(135deg, #f5f7ff 0%, #e8ecff 100%);
            padding: 1.5rem;
            border-radius: 10px;
            border-left: 4px solid #667eea;
            transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
        }
        
        .feature-card h4 {
            color: #667eea;
            margin-bottom: 0.5rem;
        }
        
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 1rem;
        }
        
        .tech-badge {
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
        }
        
        .code-block {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            padding: 1rem;
            margin: 1rem 0;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            overflow-x: auto;
        }
        
        .warning-box {
            background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
            border-left: 4px solid #ffc107;
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 5px;
        }
        
        .info-box {
            background: linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%);
            border-left: 4px solid #17a2b8;
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 5px;
        }
        
        .step-list {
            counter-reset: step-counter;
        }
        
        .step-list li {
            counter-increment: step-counter;
            margin-bottom: 1rem;
            padding-left: 3rem;
            position: relative;
        }
        
        .step-list li::before {
            content: counter(step-counter);
            position: absolute;
            left: 0;
            top: 0;
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 0.8rem;
        }
        
        .footer {
            text-align: center;
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 2px solid #eee;
            color: #666;
        }
        
        @media (max-width: 768px) {
            .container {
                margin: 1rem;
                padding: 1rem;
            }
            
            .logo {
                font-size: 2rem;
            }
            
            .section h2 {
                font-size: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">🗨️ Sayout</div>
            <div class="tagline">Send Messages Anonymously</div>
        </div>

        <div class="section">
            <h2><span class="icon">📋</span>Overview</h2>
            <p>Sayout is a modern anonymous messaging platform that allows users to send and receive messages without revealing their identity. Built with a focus on privacy and simplicity, it provides a clean interface for anonymous communication.</p>
        </div>

        <div class="section">
            <h2><span class="icon">✨</span>Features</h2>
            <div class="feature-grid">
                <div class="feature-card">
                    <h4>🔒 Anonymous Messaging</h4>
                    <p>Send messages without revealing your identity</p>
                </div>
                <div class="feature-card">
                    <h4>📱 Responsive Design</h4>
                    <p>Works seamlessly on desktop, tablet, and mobile devices</p>
                </div>
                <div class="feature-card">
                    <h4>📖 Read Status</h4>
                    <p>Track which messages have been read</p>
                </div>
                <div class="feature-card">
                    <h4>🎨 Clean UI</h4>
                    <p>Modern and intuitive user interface</p>
                </div>
                <div class="feature-card">
                    <h4>⚡ Real-time</h4>
                    <p>Instant message delivery and updates</p>
                </div>
                <div class="feature-card">
                    <h4>🌐 Cross-platform</h4>
                    <p>Access from any device with a web browser</p>
                </div>
            </div>
        </div>

        <div class="section">
            <h2><span class="icon">🛠️</span>Technology Stack</h2>
            <h3>Frontend</h3>
            <div class="tech-stack">
                <span class="tech-badge">SvelteKit</span>
                <span class="tech-badge">JavaScript</span>
                <span class="tech-badge">CSS3</span>
                <span class="tech-badge">HTML5</span>
                <span class="tech-badge">Responsive Design</span>
            </div>
            
            <h3>Backend</h3>
            <div class="tech-stack">
                <span class="tech-badge">Node.js</span>
                <span class="tech-badge">Express.js</span>
                <span class="tech-badge">RESTful API</span>
                <span class="tech-badge">JSON</span>
            </div>
        </div>

        <div class="section">
            <h2><span class="icon">📁</span>Project Structure</h2>
            <div class="code-block">
sayout-website/
├── frontend/                # SvelteKit frontend application
│   ├── my-app/
│   │   ├── src/
│   │   │   ├── routes/      # SvelteKit routes
│   │   │   │   ├── sawaal/  # Anonymous messaging page
│   │   │   │   └── +page.svelte
│   │   │   └── app.html
│   │   ├── package.json
│   │   └── vite.config.js
│   └── .gitignore
├── backend/                 # Node.js backend server
│   ├── server.js           # Main server file
│   ├── package.json
│   └── .gitignore
├── .gitignore              # Root gitignore
└── README.html             # This documentation
            </div>
        </div>

        <div class="section">
            <h2><span class="icon">🚀</span>Getting Started</h2>
            
            <h3>Prerequisites</h3>
            <ul>
                <li>Node.js (version 16 or higher)</li>
                <li>npm or yarn package manager</li>
                <li>Git</li>
            </ul>

            <h3>Installation</h3>
            <ol class="step-list">
                <li>Clone the repository
                    <div class="code-block">git clone https://github.com/yourusername/sayout-website.git
cd sayout-website</div>
                </li>
                <li>Install backend dependencies
                    <div class="code-block">cd backend
npm install</div>
                </li>
                <li>Install frontend dependencies
                    <div class="code-block">cd ../frontend/my-app
npm install</div>
                </li>
                <li>Start the backend server
                    <div class="code-block">cd ../../backend
npm start</div>
                </li>
                <li>Start the frontend development server
                    <div class="code-block">cd ../frontend/my-app
npm run dev</div>
                </li>
            </ol>

            <div class="info-box">
                <strong>📌 Default URLs:</strong><br>
                • Frontend: http://localhost:5173<br>
                • Backend API: http://localhost:3000<br>
                • Anonymous messaging: http://localhost:5173/sawaal
            </div>
        </div>

        <div class="section">
            <h2><span class="icon">📱</span>Mobile Testing</h2>
            <p>To test the application on mobile devices connected to the same WiFi network:</p>
            
            <ol class="step-list">
                <li>Find your computer's IP address
                    <div class="code-block"># Windows
ipconfig

# Mac/Linux
ifconfig</div>
                </li>
                <li>Start servers with host binding
                    <div class="code-block"># Frontend
npm run dev -- --host

# Backend (modify server.js to bind to 0.0.0.0)</div>
                </li>
                <li>Access from mobile using your IP
                    <div class="code-block">http://YOUR_IP_ADDRESS:5173
http://YOUR_IP_ADDRESS:3000</div>
                </li>
            </ol>

            <div class="warning-box">
                <strong>⚠️ Note:</strong> Make sure your firewall allows connections on ports 3000 and 5173, and both devices are on the same WiFi network.
            </div>
        </div>

        <div class="section">
            <h2><span class="icon">🔧</span>Configuration</h2>
            
            <h3>Environment Variables</h3>
            <p>Create <code>.env</code> files in both frontend and backend directories:</p>
            
            <div class="code-block"># Backend .env
PORT=3000
NODE_ENV=development

# Frontend .env
VITE_API_URL=http://localhost:3000</div>

            <h3>CORS Configuration</h3>
            <p>The backend is configured to accept requests from the frontend. Update CORS settings in server.js if needed.</p>
        </div>

        <div class="section">
            <h2><span class="icon">🤝</span>Contributing</h2>
            <ol class="step-list">
                <li>Fork the repository</li>
                <li>Create a feature branch: <code>git checkout -b feature-name</code></li>
                <li>Make your changes and commit: <code>git commit -m 'Add feature'</code></li>
                <li>Push to branch: <code>git push origin feature-name</code></li>
                <li>Submit a pull request</li>
            </ol>
        </div>

        <div class="section">
            <h2><span class="icon">🐛</span>Troubleshooting</h2>
            
            <h3>Common Issues</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h4>Port Already in Use</h4>
                    <p>Kill existing processes or change port numbers in configuration</p>
                </div>
                <div class="feature-card">
                    <h4>CORS Errors</h4>
                    <p>Check backend CORS configuration and ensure frontend URL is allowed</p>
                </div>
                <div class="feature-card">
                    <h4>Mobile Access Issues</h4>
                    <p>Verify firewall settings and ensure both devices are on same network</p>
                </div>
                <div class="feature-card">
                    <h4>Dependencies Issues</h4>
                    <p>Delete node_modules and package-lock.json, then run npm install</p>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>Built with ❤️ using SvelteKit and Node.js</p>
            <p>© 2024 Sayout - Anonymous Messaging Platform</p>
        </div>
    </div>
</body>
</html>
