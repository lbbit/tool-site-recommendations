async function loadIndex() {
  const response = await fetch('./data/index.json', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('无法加载索引数据');
  }
  return response.json();
}

function createListItem(item) {
  const li = document.createElement('li');
  li.className = 'entry';
  li.dataset.title = item.title.toLowerCase();
  li.dataset.description = (item.description || '').toLowerCase();

  const link = document.createElement('a');
  link.href = item.path;
  link.textContent = item.title;

  const desc = document.createElement('p');
  desc.textContent = item.description || '暂无简介';

  li.append(link, desc);
  return li;
}

function renderSections(data) {
  const container = document.querySelector('#sections');
  const quickStats = document.querySelector('#quickStats');
  container.innerHTML = '';

  let total = 0;

  data.sections.forEach((section) => {
    total += section.items.length;
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset-section = section.key;

    const title = document.createElement('h2');
    title.textContent = `${section.title} · ${section.items.length}`;

    const list = document.createElement('ul');
    list.className = 'entry-list';
    section.items.forEach((item) => {
      list.appendChild(createListItem(item));
    });

    card.append(title, list);
    container.appendChild(card);
  });

  quickStats.textContent = `当前已整理 ${total} 篇内容，适合长期慢慢扩充。`;
}

function setupSearch() {
  const input = document.querySelector('#searchInput');
  input.addEventListener('input', () => {
    const keyword = input.value.trim().toLowerCase();
    const entries = document.querySelectorAll('.entry');
    let visibleCount = 0;

    entries.forEach((entry) => {
      const haystack = `${entry.dataset.title} ${entry.dataset.description}`;
      const visible = !keyword || haystack.includes(keyword);
      entry.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    document.querySelector('#searchHint').textContent = keyword
      ? `筛选后剩余 ${visibleCount} 条结果`
      : '支持按名称或简介关键字快速筛选';
  });
}

async function main() {
  try {
    const data = await loadIndex();
    renderSections(data);
    setupSearch();
    document.querySelector('#generatedAt').textContent = `索引更新时间：${new Date(data.generatedAt).toLocaleString('zh-CN')}`;
  } catch (error) {
    document.querySelector('#searchHint').textContent = error.message || '索引加载失败';
  }
}

main();
