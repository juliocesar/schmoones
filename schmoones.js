var Schmoones = Class.create();

Schmoones.prototype = {  
  initialize: function() {
    this.container = new Element('div', { id: 'schmoones', style: 'position: absolute; left: 0; right: 0; bottom: 0; background-color: #000; color: #fff; filter:alpha(opacity=85); -moz-opacity: 0.85; opacity: 0.85; display: none; height: 70px' });
    this.container.update('<div><h3></h3><p></p></div>');
    document.body.appendChild(this.container);
    this.queue = [];
    this.expanded = false;
    this.stylize();
    this.startEngine();
    document.observe('scroll', this.scrollingHandler);
  },
  
  stylize: function() {
    this.container.down('div h3').setStyle({margin: '10px', padding: 0});
    this.container.down('div p').setStyle({margin: '5px 10px 10px', padding: 0});
  },
  
  scrollingHandler: function() {    
    var clip = document.viewport.getScrollOffsets()[1];
    $('schmoones').setStyle({bottom: '-' + clip + 'px'});
  },
  
  message: function(msg) {
    this.queue.push({ dispatcher: function() {
      if(!SCHMOONES.expanded) {
        new Effect.BlindDown('schmoones', { duration: 0.4, queue: { position: 'front', scope: 'schmoones' } } );
        SCHMOONES.expanded = true;
      }
      new Effect.Fade(SCHMOONES.container.down('div'), { duration: 0.2 });
      setTimeout(function() {
        $$('#schmoones div h3')[0].update(msg.title);
        $$('#schmoones div p')[0].update(msg.message);              
        new Effect.Appear($$('#schmoones div')[0], { duration: 0.2 });
      }, 200)
    }, duration: msg.duration})
  },
  
  vacant: function() {
    if (!this.executing || (this.executing && ( (new Date().getTime() - this.started) > (this.executing.duration || 5000) ))) {
      return true;
    } else {
      return false;
    }
  },
  
  tick: function(schmoones) {
    if (schmoones.vacant()) {
      if (schmoones.queue.size() == 0) {
        if (schmoones.expanded) new Effect.BlindUp('schmoones', { duration: 0.3, queue: { position: 'front', scope: 'schmoones' } } );
        schmoones.expanded = false;
        return false;
      }
      schmoones.executing = schmoones.queue.shift();
      schmoones.started = new Date().getTime();
      schmoones.executing.dispatcher();
    } else {
      return false;
    }
  },
    
  startEngine: function() {
    var proxy = this;
    this.engine = new PeriodicalExecuter(function() { proxy.tick(proxy) }, 1);
  }
}

$(document).observe('dom:loaded', function() { window.SCHMOONES = new Schmoones() })