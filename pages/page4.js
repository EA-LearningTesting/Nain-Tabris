module.exports = (function() {
  var page4 = tabris.create("Page", {
    title: "Tabs",
    topLevel: true
  });

  var tabFolder = tabris.create("TabFolder", {
    layoutData: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    },
    paging: true // enables swiping. To still be able to open the developer console in iOS, swipe from the bottom right.
  }).appendTo(page4);

  var createTab = function(title, image) {
    var tab = tabris.create("Tab", {
      title: title, // converted to upper-case on Android
      image: {
        src: image,
        scale: 2
      } // image only used by iOS
    }).appendTo(tabFolder);
    tabris.create("TextView", {
      layoutData: {
        centerX: 0,
        centerY: 0
      },
      text: "Content of Tab " + title
    }).appendTo(tab);
  };

  createTab("Github", "images/octocat.png");
  createTab("Backtract", "images/backtract.png");
})();
