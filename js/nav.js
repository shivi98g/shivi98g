

console.log("loaded nav js ");
$("nav.navbar   > div.container > div.collapse > ul.navbar-nav > li.nav-item  > a#home.nav-link").click(function() {
  
  console.log("started click");
  $("div#main > div.columnsContainer > div.leftColumn").load("home.html");
  console.log("ended click");
});



$("nav.navbar   > div.container > div.collapse > ul.navbar-nav > li.nav-item  > a#about.nav-link").click(function() {
  
  $("div#main > div.columnsContainer > div.leftColumn").load("about.html");
});



$("nav.navbar   > div.container > div.collapse > ul.navbar-nav > li.nav-item  > a#manag.nav-link").click(function() {
  
  $("div#main > div.columnsContainer > div.leftColumn").load("management.html");
});


$("nav.navbar   > div.container > div.collapse > ul.navbar-nav > li.nav-item  > a#land.nav-link").click(function() {
  
  $("div#main > div.columnsContainer > div.leftColumn").load("land.html");
});


$("nav.navbar   > div.container > div.collapse > ul.navbar-nav > li.nav-item  > a#contact.nav-link").click(function() {
  
  $("div#main > div.columnsContainer > div.leftColumn").load("contact.html");
});


$("nav.navbar   > div.container > div.collapse > ul.navbar-nav > li.nav-item  > a#login.nav-link").click(function() {
  
  $("div#main > div.columnsContainer > div.leftColumn").load("login.html");
});


console.log("ended nav js ");


