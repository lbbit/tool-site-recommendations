# 冷门工具与网站推荐

一个用 **Markdown** 持续整理的仓库，专门收集那些**不算特别热门，但真的值得推荐**的网站和工具。

> 目标不是做“最全导航站”，而是做一个更像朋友私藏清单的推荐库：少一点堆砌，多一点真实感受和筛选。

[![GitHub Pages](https://img.shields.io/badge/site-online-brightgreen)](https://lbbit.github.io/tool-site-recommendations/)
[![Markdown](https://img.shields.io/badge/content-Markdown-blue)](./articles/)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](./LICENSE)

## 在线阅读

- GitHub Pages：<https://lbbit.github.io/tool-site-recommendations/>
- GitHub 仓库：<https://github.com/lbbit/tool-site-recommendations>

## 这个项目收什么

- 小众但实用的效率工具
- 冷门但惊艳的网站
- 独立开发者做的有趣产品
- 设计、学习、开发、AI 等方向的宝藏资源
- 不一定大火，但在某个场景里很好用的 niche 工具

## 推荐原则

- **不追求最全**，更看重是否值得讲
- 尽量不重复“所有人都知道”的大路货
- 每篇都尽量写清楚：**适合谁、为什么值得推荐、有什么不足**
- 优先保留带真实体验感的介绍，而不是纯参数罗列
- 如果一个工具只是“能用”，但没有特别推荐价值，就不收

## 快速导航

### 工具推荐

- [Raycast](./articles/tools/raycast.md)
- [Obsidian](./articles/tools/obsidian.md)
- [ShareX](./articles/tools/sharex.md)
- [Everything](./articles/tools/everything.md)
- [Ditto](./articles/tools/ditto.md)
- [LosslessCut](./articles/tools/losslesscut.md)
- [PicGo](./articles/tools/picgo.md)
- [LocalSend](./articles/tools/localsend.md)
- [Ventoy](./articles/tools/ventoy.md)
- [ScreenToGif](./articles/tools/screentogif.md)

### 网站推荐

- [FMHY](./articles/websites/fmhy.md)
- [AlternativeTo](./articles/websites/alternativeto.md)
- [LibRedirect](./articles/websites/libredirect.md)
- [Excalidraw](./articles/websites/excalidraw.md)
- [12ft Ladder](./articles/websites/12ft.md)
- [Photopea](./articles/websites/photopea.md)
- [Radio Garden](./articles/websites/radio-garden.md)
- [Ninite](./articles/websites/ninite.md)
- [TinyWow](./articles/websites/tinywow.md)
- [Archive.today](./articles/websites/archive-today.md)

### 专题整理

- [值得收藏的独立网站方向](./articles/collections/indie-websites.md)
- [适合开发者的冷门效率工具](./articles/collections/dev-tools.md)
- [免费但很好用的在线工具站](./articles/collections/free-online-tools.md)
- [适合长期收藏的设计资源网站](./articles/collections/design-resources.md)

## 目录结构

```text
articles/
├── tools/        # 工具推荐
├── websites/     # 网站推荐
└── collections/  # 专题整理

assets/
└── images/       # 文章配图（后续可加）

templates/
└── recommendation-template.md
```

## 如何继续补充

1. 复制模板：[`templates/recommendation-template.md`](./templates/recommendation-template.md)
2. 放到对应目录：
   - 工具：`articles/tools/`
   - 网站：`articles/websites/`
   - 专题：`articles/collections/`
3. 尽量补充：
   - 一句话介绍
   - 适合谁
   - 为什么值得推荐
   - 不足或注意点
   - 类似选择
   - 标签

## 投稿建议

如果后续你想把它做成长期维护仓库，建议加一条自己的筛选规则：

- “我自己愿意真心推荐给朋友吗？”
- “它是不是解决了一个很具体的问题？”
- “它有没有明显门槛或副作用，需要提前讲清楚？”

## GitHub Pages

仓库已经准备好静态首页入口与自动索引机制。

- 入口文件：`index.html`
- 页面样式：`styles.css`
- 页面脚本：`app.js`
- 索引数据：`data/index.json`（由 `scripts/generate-index.mjs` 自动生成）
- 自动部署：`.github/workflows/pages.yml`

## License

原创 Markdown 内容采用 [MIT License](./LICENSE)。
