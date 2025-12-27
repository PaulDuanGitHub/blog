hexo.extend.filter.register('after_render:html', function (html) {
    img_reg = /<img [^>]*src="([^"]+)"\s*alt="([^"]+)"[^>]*>/g;
  
    return html
      .replace(
        img_reg,
        (match, src, alt) => {
          return `<figure><img src="${src}" alt="${alt}"/><figcaption>${alt}</figcaption></figure>`;
        });
  });
  