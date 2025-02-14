const https = require('https');
const fs = require('fs');
const path = require('path');

const skillIcons = {
  'react': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  'javascript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  'typescript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  'html-css': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  'nextjs': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
  'nodejs': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
  'python': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  'mongodb': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
  'postgresql': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
  'graphql': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg',
  'docker': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
  'aws': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg',
  'git': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
  'linux': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
  'cicd': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg'
};

const downloadIcon = (name, url) => {
  const filePath = path.join(__dirname, '..', 'public', 'images', 'skills', `${name}.svg`);
  
  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      console.log(`Downloaded: ${name}`);
      fileStream.close();
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${name}:`, err.message);
  });
};

// Create skills directory if it doesn't exist
const skillsDir = path.join(__dirname, '..', 'public', 'images', 'skills');
if (!fs.existsSync(skillsDir)) {
  fs.mkdirSync(skillsDir, { recursive: true });
}

// Download all icons
Object.entries(skillIcons).forEach(([name, url]) => {
  downloadIcon(name, url);
});
