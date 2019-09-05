// Subscribes to receive property changes
cwidget.on("index_html", function() {

   // Gets property value
   console.log(cwidget.index_html);

   // Sets property value
   cwidget.index_html = "./index.html"

   // Triggers an event
   cwidget.dispatchEvent("imput");

});