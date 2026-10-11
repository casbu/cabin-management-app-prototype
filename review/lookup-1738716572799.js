(function(window, undefined) {
  var dictionary = {
    "89d76cc3-b548-4231-a858-02f3f53a0967": "login_admin",
    "cf05df47-52a7-4757-86fc-f4f12ca4c0e6": "admin_menu",
    "f03c6d23-fa8f-4dd2-be7a-5da8e9f672db": "admin_customers",
    "23846c63-b5a1-431f-9079-71f37a83e213": "admin_inspections",
    "7fc653d3-41cb-4577-9772-880dbee97fef": "admin_orders",
    "c4860366-447f-46e1-bf56-610b95bd6c49": "welcome",
    "fe9c0dbc-bfae-4855-b96e-123eb88fafde": "admin_rent",
    "728c668d-38d2-40cf-bde5-dc03479711e2": "home",
    "ed353cb7-b09f-4110-9360-6d8af5e49c7a": "login_user",
    "1786e872-abb5-4409-993c-40cb3780a635": "admin_reservations",
    "be1b591e-96c5-45a7-be2a-23f4588d3dec": "admin_welcome",
    "e4c916da-e5ff-4281-a6d6-9b399ad64658": "admin_cabins",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "splash",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);