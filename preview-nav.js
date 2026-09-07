/* DEMO 预览导航器：展开/收起联动（侧栏宽度与页面预留空位） */
(function () {
  var side = document.getElementById('demoSide');
  if (!side || !document.getElementById('sideToggle')) return;
  var toggle = document.getElementById('sideToggle');
  toggle.addEventListener('click', function () {
    var collapsed = side.classList.toggle('collapsed');
    document.body.classList.toggle('side-collapsed', collapsed);
    toggle.textContent = collapsed ? '展开' : '收起';
  });
})();