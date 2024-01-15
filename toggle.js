function toggle() {
  var pages = document.getElementById('pages');
  if (pages.classList.contains('hidden')) {
    pages.classList.remove('hidden');
  } else {
    pages.classList.add('hidden');
  }
}