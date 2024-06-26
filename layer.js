// layer.js

class Layer {
    constructor(path, options, fn) {
      this.handle = fn;
      this.name = fn.name || '<anonymous>';
      this.params = undefined;
      this.path = path;
    }
  
    handle_request(req, res, next) {
      try {
        this.handle(req, res, next);
      } catch (err) {
        console.error(err);
      }
    }
  }
  
  module.exports = Layer;
  