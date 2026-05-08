(function () {
  function setupSidebarGroups() {
    var parents = document.querySelectorAll('.sidebar-nav > ul > li > ul > li');

    parents.forEach(function (item) {
      var childList = item.querySelector(':scope > ul');
      var link = item.querySelector(':scope > a');

      if (!childList || !link) {
        return;
      }

      item.classList.add('has-children');

      link.onclick = function (event) {
        event.preventDefault();
        item.classList.toggle('is-expanded');
      };
    });
  }

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [].concat(window.$docsify.plugins || [], function (hook) {
    hook.doneEach(function () {
      setTimeout(setupSidebarGroups, 0);
    });
  });
})();
