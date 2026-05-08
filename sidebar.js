(function () {
  function setupSidebarGroups() {
    var parents = document.querySelectorAll('.sidebar-nav > ul > li > ul > li');

    parents.forEach(function (item) {
      var childList = item.querySelector(':scope > ul');
      var link = item.querySelector(':scope > a');

      if (!childList || !link) {
        item.classList.remove('has-children', 'is-expanded');
        return;
      }

      item.classList.add('has-children');
      var hasActiveSelf = item.classList.contains('active');
      var hasActiveChild = !!item.querySelector(':scope > ul li.active');
      var isCurrentGroup = hasActiveSelf || hasActiveChild;

      item.classList.toggle('is-current-group', isCurrentGroup);

      if (isCurrentGroup) {
        item.classList.add('is-expanded');
      } else {
        item.classList.remove('is-expanded');
      }

      link.onclick = function (event) {
        event.preventDefault();
        var isExpanded = item.classList.contains('is-expanded');
        var targetHash = link.getAttribute('href');
        var activeItems = document.querySelectorAll('.sidebar-nav li.active');

        activeItems.forEach(function (activeItem) {
          activeItem.classList.remove('active');
        });

        parents.forEach(function (otherItem) {
          if (otherItem !== item) {
            otherItem.classList.remove('is-expanded', 'is-current-group');
          }
        });

        item.classList.add('is-expanded', 'is-current-group');

        if (targetHash && targetHash.charAt(0) === '#' && window.location.hash !== targetHash) {
          window.location.hash = targetHash;
          return;
        }

        if (isExpanded) {
          item.classList.remove('is-expanded', 'is-current-group');
        }
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
