const CALLOUT_ICONS = {
    note: 'fa-sticky-note',
    tip: 'fa-lightbulb-o',
    warning: 'fa-exclamation-triangle',
    danger: 'fa-times-circle',
    quote: 'fa-quote-left',
    info: 'fa-info-circle',
    success: 'fa-check-circle'
};

hexo.extend.filter.register('after_render:html', function (html) {
    return html.replace(
        /<blockquote>\s*<p>\[!(\w+)\]\s*((?:(?!<br>).)*?)(?:<br>\s*(.*?))?<\/p>([\s\S]*?)<\/blockquote>/g,
        (match, type, title, content, rest) => {
            const key = type.toLowerCase();
            const icon = CALLOUT_ICONS[key] || 'fa-info-circle';

            return `
  <div class="callout callout-${key}">
    <div class="callout-title">
      <i class="fa ${icon}"></i>
      <span>${title || key}</span>
    </div>
    <div class="callout-content">
      ${content??''}
      ${rest??''}
    </div>
  </div>
        `.trim();
        }
    );
});