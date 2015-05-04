module.exports = function(drawer) {
  var page2 = tabris.create("Page", {
    title: "Page 2 ¬¬",
    image: "images/octocat.png",
    topLevel: true
  });


  var label2 = tabris.create("TextView", {
    font: "20px",
    layoutData: {
      centerX: 0,
      top: 100
    },
    text: "This is a second page"
  }).appendTo(page2);

  var buttonDrawer = tabris.create("Button", {
    text: "Open Navigation",
    layoutData: {
      centerX: 0,
      bottom: 0
    }
  }).appendTo(page2);

  buttonDrawer.on("select", function() {
    drawer.open();
  });
};
