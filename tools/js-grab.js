// This will log a string with all the links to data sets on the page
t = document.getElementsByTagName('table')[0];
as = t.getElementsByTagName('a');
res = [];
for (var i=2; i<as.length; i += 2) {
  res.push(as[i].href);
}
console.log(res.join('\n'));
