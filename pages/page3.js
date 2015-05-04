module.exports = (function() {
  var page3 = tabris.create("Page", {
    title: "Page 3 - Collection",
    topLevel: true
  });

  var people = [
    ["Holger", "Staudacher", "holger.jpg"],
    ["Ian", "Bull", "ian.jpg"],
    ["Jochen", "Krause", "jochen.jpg"],
    ["Jordi", "Böhme López", "jordi.jpg"],
    ["Markus", "Knauer", "markus.jpg"],
    ["Moritz", "Post", "moritz.jpg"],
    ["Ralf", "Sternberg", "ralf.jpg"],
    ["Tim", "Buschtöns", "tim.jpg"]
  ].map(function(element) {
    return {
      firstName: element[0],
      lastName: element[1]
    };
  });

  var labelPage3 = tabris.create("TextView", {
    layoutData: {
      centerX: 0,
      top: 5
    },
    font: "30px",
    textColor: "#cdcdcd",
    text: "Select item"
  }).appendTo(page3);

  tabris.create("CollectionView", {
    layoutData: {
      left: 0,
      top: [labelPage3, 10],
      right: 0,
      bottom: 0
    },
    items: people,
    itemHeight: 30,
    initializeCell: function(cell) {
      var nameTextView = tabris.create("TextView", {
        layoutData: {
          left: 30,
          top: 10,
          right: 30
        },
        alignment: "center"
      }).appendTo(cell);
      cell.on("change:item", function(widget, person) {
        nameTextView.set("text", person.firstName);
      });
    }
  }).on("select", function(target, value) {
    console.log("selected", value.firstName);
    labelPage3.set("text", value.firstName);
  }).appendTo(page3);
})();
