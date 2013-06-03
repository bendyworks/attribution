(function() {
  var ribbonContent,
      scripts = document.getElementsByTagName('script'),
      thisScript = scripts[scripts.length - 1],
      githubUrl = thisScript.getAttribute('data-gh'),
      gravatarHash = thisScript.getAttribute('data-gr'),
      authorUrl = thisScript.getAttribute('data-au');

  ribbonContent = '<div class=\"bw-attribution\">' +
      '<div class=\"bw-ribbon\">' +
      '<div class=\"ribbon-content\">';

  if (gravatarHash) {
    var img = 'http://www.gravatar.com/avatar/' + gravatarHash + '.jpg?s=30',
        content = '<img src=\"' + img + '\" />';

    if (authorUrl) {
      content = '<a href=\"' + authorUrl + '\">' + content + '</a>';
    }

    ribbonContent += content;
  }

  ribbonContent += '<a class=\"bw-github\" href=\"' + githubUrl + '\" />' +
      '<a class=\"bw-logo\" href=\"http://bendyworks.com\" />' +
      '<a class=\"bw-made\" href=\"http://bendyworks.com\" />' +
      '</div></div></div>';

  document.write('<link href=\"http://d2xzi4fir1vmdf.cloudfront.net/bw-ribbon.css\" media=\"screen\" rel=\"stylesheet\" />');
  document.write(ribbonContent);
})()
