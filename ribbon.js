(function() {
  var ribbonContent,
      scripts = document.getElementsByTagName('script'),
      thisScript = scripts[scripts.length - 1],
      githubLink = thisScript.getAttribute('data-github'),
      gravatarLink = thisScript.getAttribute('data-gravatar');

  ribbonContent = '<div class=\"ribbon\"><div class=\"ribbon-content\">' +
      '<a class=\"bw-github\" href=\"' + githubLink + '\" />' +
      '<a class=\"bw-logo\" href=\"http://bendyworks.com\" />' +
      '<a class=\"bw-made\" href=\"http://bendyworks.com\" />' +
      '</div></div>';

  document.write('<link href=\"ribbon.css\" media=\"screen\" rel=\"stylesheet\" />');
  document.write(ribbonContent);
})()
