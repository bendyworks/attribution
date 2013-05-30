(function() {
  var scripts = document.getElementsByTagName('script'),
      thisScript = scripts[scripts.length - 1],
      githubLink = thisScript.dataset.github;

  document.write('<link href=\"ribbon.css\" media=\"screen\" rel=\"stylesheet\" />')
  document.write('<div class=\"ribbon\"><div class=\"ribbon-content\">Made @ Bendyworks')
  document.write('<a href=\"' + githubLink + '\">github</a></div></div>')
})()
