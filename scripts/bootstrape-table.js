hexo.extend.filter.register('after_render:html', function (html) {
  ingore_code_block_reg = /(?<!<figure class="highlight.*">)/;
  match_table_reg = /<table(?![^>]*class=)/;

  return html
    .replace(
      new RegExp(ingore_code_block_reg.source + match_table_reg.source, 'g'),
      '<table class="table table-striped table-bordered"'
    )
    .replace(
      /<table class="table table-striped table-bordered">([\s\S]*?)<\/table>/g,
      '<div class="table-responsive">$&</div>'
    );
});
