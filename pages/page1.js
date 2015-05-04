module.exports = (function() {
  var page = tabris.create("Page", {
    title: "Hello, World!",
    topLevel: true
  });


  var button = tabris.create("Button", {
    text: "Button",
    background: "#1a1a1a",
    textColor: "#eeeeee",
    layoutData: {
      centerX: 0,
      top: 100
    }
  }).appendTo(page);

  var label = tabris.create("TextView", {
    font: "24px",
    layoutData: {
      centerX: 0,
      top: [button, 50]
    }
  }).appendTo(page);



  button.on("select", function() {
    label.set('text', 'button working!');
  });

  tabris.create("Slider", {
    layoutData: {
      left: 50,
      top: [button, 20],
      right: 50
    },
    minimum: -50,
    selection: 50,
    maximum: 150
  }).on("change:selection", function(slider, selection) {
    textView.set("text", selection);
  }).appendTo(page);

  page.open();
})();
