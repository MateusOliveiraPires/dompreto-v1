function setMeta(name, content, type = 'name') {
  let meta = document.querySelector(`meta[${type}="${name}"]`);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(type, name);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

export function applySeo({ title, description }) {
  document.title = title;

  setMeta('description', description);
  setMeta('og:title', title, 'property');
  setMeta('og:description', description, 'property');
  setMeta('og:type', 'website', 'property');
}
