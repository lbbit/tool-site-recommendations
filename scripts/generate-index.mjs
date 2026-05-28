import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const articlesRoot = path.join(root, 'articles');
const outputFile = path.join(root, 'data', 'index.json');

const sections = [
  { key: 'tools', title: '工具推荐' },
  { key: 'websites', title: '网站推荐' },
  { key: 'collections', title: '专题推荐' }
];

function readMarkdownTitle(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : path.basename(filePath, '.md');
}

function readDescription(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/## 一句话介绍\n([^#\n].+)/);
  if (match) return match[1].trim();
  const fallback = content.split('\n').find((line) => line.trim() && !line.startsWith('#'));
  return (fallback || '').trim();
}

function listEntries(section) {
  const dir = path.join(articlesRoot, section.key);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((name) => name.endsWith('.md'))
    .sort((a, b) => a.localeCompare(b, 'zh-CN'))
    .map((name) => {
      const filePath = path.join(dir, name);
      return {
        title: readMarkdownTitle(filePath),
        path: `./articles/${section.key}/${name}`,
        slug: name.replace(/\.md$/, ''),
        description: readDescription(filePath)
      };
    });
}

const generatedAt = new Date().toISOString();
const data = {
  generatedAt,
  sections: sections.map((section) => ({
    ...section,
    items: listEntries(section)
  }))
};

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, JSON.stringify(data, null, 2) + '\n');
console.log(`Generated ${path.relative(root, outputFile)}`);
