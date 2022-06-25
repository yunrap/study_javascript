var self = function() {
  console.log("a");
  return function() {
    console.log("B");
  };
};

self = self();
self();