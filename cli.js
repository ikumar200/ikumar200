#!/usr/bin/env node

console.clear();
console.log('\n\x1b[36m', 'Hi I am Indrakumar Naragude 👋', '\x1b[0m\n');

const greenStr = (str) => `\x1b[32m${str}\x1b[32m`;

const info = {
  status: 'B.Tech IT student',
  web: 'https://yourwebsite.com', // Replace with your website URL, if you have one
  gh: 'https://github.com/ikumar200',
  desc: 'A passionate full stack developer learning new technologies and contributing to open source.',
  skills: {
    langs: ['.js', '.ts', '.cpp', '.py', '.sh'], // Add or remove languages as per your skill set
    skills: ['vim', 'git', 'docker', 'networking', 'oss'],
  },
};

console.log(greenStr(JSON.stringify(info, null, 2)));
