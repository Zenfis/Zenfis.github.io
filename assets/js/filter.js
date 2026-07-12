(function () {
  var groups = document.querySelectorAll('.filter-bar[data-filter-group]');
  var cards = document.querySelectorAll('.project-card');
  var emptyState = document.querySelector('.empty-state');

  if (!groups.length || !cards.length) return;

  var state = {};
  var params = new URLSearchParams(window.location.search);

  groups.forEach(function (group) {
    var key = group.dataset.filterGroup;
    var fromUrl = params.get(key);
    state[key] = fromUrl || 'all';
  });

  function setActiveButtons() {
    groups.forEach(function (group) {
      var key = group.dataset.filterGroup;
      group.querySelectorAll('.filter-btn').forEach(function (btn) {
        var active = btn.dataset.filter === state[key];
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', active);
      });
    });
  }

  function applyFilters() {
    var visibleCount = 0;

    cards.forEach(function (card) {
      var matches = true;

      groups.forEach(function (group) {
        var key = group.dataset.filterGroup;
        if (state[key] === 'all') return;
        var values = (card.dataset[key] || '').split(' ');
        if (values.indexOf(state[key]) === -1) matches = false;
      });

      card.hidden = !matches;
      if (matches) visibleCount++;
    });

    if (emptyState) emptyState.classList.toggle('is-visible', visibleCount === 0);
  }

  groups.forEach(function (group) {
    var key = group.dataset.filterGroup;

    group.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state[key] = btn.dataset.filter;
        setActiveButtons();
        applyFilters();

        var url = new URL(window.location.href);
        if (state[key] === 'all') {
          url.searchParams.delete(key);
        } else {
          url.searchParams.set(key, state[key]);
        }
        window.history.replaceState({}, '', url);
      });
    });
  });

  setActiveButtons();
  applyFilters();
})();
