$(document).click((e) => {
  let container = $("#sidebar-wrapper")
  if (!container.is(e.target) && container.has(e.target).length === 0 && e.target != $("#menu-toggle")[0]) {
    $("#wrapper").removeClass("toggled");
  } else if (e.target == $("#menu-toggle")[0]) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  }
})
$('a').click(function(e) {
  let target = $($(this).attr("href"))[0]
  console.log(222222, target)
  $('body').scrollTo(target);
})