function showMenu() {
  var element = document.getElementsByClassName('why-attend-menu');
  if (element[0].style.visibility === 'visible') {
    element[0].style.visibility = 'hidden';
  } else {
    element[0].style.visibility = 'visible';
  }
}