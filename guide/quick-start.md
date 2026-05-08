# 快速开始

## 1. 准备目录

Docsify 不需要编译 Markdown，它会在浏览器中读取 `.md` 文件并渲染成网页。

推荐目录：

```text
docs/
  index.html
  README.md
  _sidebar.md
  _navbar.md
  style.css
  guide/
    quick-start.md
  products/
    board.md
```

## 2. 本地预览

在 `docs` 目录中运行：

```bash
python -m http.server 3000
```

浏览器打开 `http://localhost:3000`。

## 3. 新增页面

例如新增 `products/module.md`，再到 `_sidebar.md` 加一行：

```markdown
- [模块资料](/products/module.md)
```

保存后刷新页面即可。
