var drawer = tabris.create("Drawer").append(tabris.create("PageSelector"));

require("./pages/page1.js");
require("./pages/page2.js")(drawer);
require("./pages/page3.js");
require("./pages/page4.js");
