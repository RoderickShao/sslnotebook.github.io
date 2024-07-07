MathJax = {
    tex: {tags: 'ams', useLabelIds: true},
    options: {
      skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
      renderActions: {
        addTOCElement: [10, function(math) {
          if (math.display) {
            math.action.addTOC = math.root.Get('addTOC');
            if (math.action.addTOC) {
              math.toc = document.createElement('div');
              math.toc.classList.add('mjx-toc');
              math.display.insertBefore(math.toc, math.display.firstChild);
              math.tocUpdate = MathJax.startup.promise.then(() => {
                math.root.MathJax._updateTOC(math);
              });
            }
          }
        }]
      },
      locales: ['zh-CN'], // 这里替换为您需要的语言代码
      locale: 'zh-CN' // 设置默认语言
    }
  };