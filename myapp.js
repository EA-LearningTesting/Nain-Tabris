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

var drawer = tabris.create("Drawer").append(tabris.create("PageSelector"));


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
  font:"30px",
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




var page4 = tabris.create("Page", {
  title: "Tabs",
  topLevel: true
});

var tabFolder = tabris.create("TabFolder", {
  layoutData: {left: 0, top: 0, right: 0, bottom: 0},
  paging: true // enables swiping. To still be able to open the developer console in iOS, swipe from the bottom right.
}).appendTo(page4);

var createTab = function(title, image) {
  var tab = tabris.create("Tab", {
    title: title, // converted to upper-case on Android
    image: {src: image, scale: 2} // image only used by iOS
  }).appendTo(tabFolder);
  tabris.create("TextView", {
    layoutData: {centerX: 0, centerY: 0},
    text: "Content of Tab " + title
  }).appendTo(tab);
};

createTab("Github", "images/octocat.png");
createTab("Backtract", "images/backtract.png");

page.open();
