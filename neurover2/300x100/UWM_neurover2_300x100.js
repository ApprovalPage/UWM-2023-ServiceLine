(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3eHRIAAuhMAu9AAAIAAOhg");
	mask.setTransform(150.25,46.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEBKQgYgdAAgqQAAgqAZgfQAcgjAtABQAmAAAXAYQAaAYAAAtIiYAAQAAARABAFQADAeAVASQATATAcgBQAWAAAUgLQAJgGARgPIAGAEQgJAQgFAFQgcAjgrAAQgsABgagggAghhJQgRAQgIAcIByAAQgBgcgRgRQgOgOgVABQgUgBgQAPg");
	this.shape.setTransform(260.3,51.85);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(251,41.3,18.600000000000023,21.1), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3eHRIAAuhMAu9AAAIAAOhg");
	mask.setTransform(150.25,46.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABlCZIAAgFQALgDAFgFQAHgHAAgNIgUjjIhrEEIgEAAIhvj/IgTDMIgBASQAAANAHAGQAFAFALAEIAAAFIhJAAIAAgFQAPgEAGgIQAEgIADgXIAUjgQAAgPgGgGQgEgEgNgDIAAgFIA/AAIBlDpIBkjoIA/AAIAAAFQgLACgFAEQgJAGAAANIACAYIAUDJQACAXAEAHQAGAJAQAFIAAAFg");
	this.shape.setTransform(127.225,46.175);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(108.3,30.9,37.89999999999999,30.6), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3eHRIAAuhMAu9AAAIAAOhg");
	mask.setTransform(150.25,46.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEBKQgYgdAAgqQAAgqAZgfQAcgjAtABQAmAAAXAYQAZAYABAtIiYAAQAAARABAFQADAeAUASQAVATAbgBQAWAAATgLQALgGAQgPIAGAEIgNAVQgRAUgSAIQgQAIgVgBQgsABgagggAgihJQgSAQgFAcIBwAAQgBgcgQgRQgPgOgTABQgWgBgQAPg");
	this.shape.setTransform(156.95,51.85);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(147.7,41.3,18.600000000000023,21.1), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3eHRIAAuhMAu9AAAIAAOhg");
	mask.setTransform(150.25,46.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA+CRQgEgGgEgLQgTAQgNAHQgSAHgTAAQgpAAgagcQgXgcAAgqQAAgvAagfQAdgiAtAAQAfAAAYAPIAAg6QAAgNgEgFQgEgJgQABIgCgEIA8ggIAAD0QAAAVAEAJQAEAHAMAEIACAEIgfAaQgJgIgEgFgAg3gJQgSAWAAAmQAAAlAUAXQAUAVAbAAQANAAALgFQALgFAJgIIAMgLIAAhLIABAAQAAgUgGgKQgFgPgNgIQgOgJgSAAQggAAgSAZg");
	this.shape.setTransform(179.25,46.575);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(168.7,30.8,21.200000000000017,31.599999999999998), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3eHRIAAuhMAu9AAAIAAOhg");
	mask.setTransform(150.25,46.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmCYIAAgEQAPgEADgKQADgGAAgVIAAhmIABAAQAAgLgDgEQgEgHgPABIgCgFIA5ghIAACjQAAAVADAFQAEAJARAEIAAAEgAgPhyQgGgGAAgJQAAgIAFgHQAGgHALAAQAIAAAGAFQAGAHAAAKQAAAJgGAHQgGAFgJAAQgKABgFgHg");
	this.shape.setTransform(195.3,46.35);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(191.2,31.1,8.200000000000017,30.5), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3eHRIAAuhMAu9AAAIAAOhg");
	mask.setTransform(150.25,46.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9BLQgVgcAAgqQAAgsAZgfQAbgiAqAAQAVAAASAIQAIADAQAKIgHAoIgFAAQgIgTgIgIQgPgQgXAAQgeAAgRAcQgNAXAAAeQAAAkAUAYQATAXAbAAQAdAAAhghIAGAEQgdA4g0AAQgnAAgYgeg");
	this.shape.setTransform(209.625,51.875);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(201.3,41.4,16.69999999999999,21), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3eHRIAAuhMAu9AAAIAAOhg");
	mask.setTransform(150.25,46.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmCYIAAgEQAPgEADgKQADgGAAgVIAAhmIABAAQAAgLgDgEQgEgHgPABIgCgFIA5ghIAACjQAAAVADAFQAEAJARAEIAAAEgAgOhyQgHgGAAgJQAAgIAGgHQAFgHAMAAQAIAAAGAFQAGAHAAAKQAAAJgGAHQgHAFgJAAQgIABgGgHg");
	this.shape.setTransform(223.2,46.35);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(219.1,31.1,8.200000000000017,30.5), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3eHRIAAuhMAu9AAAIAAOhg");
	mask.setTransform(150.25,46.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeBnIAAgEQAPgDADgLQADgHAAgVIAAhRQAAgMgCgIQgDgMgJgHQgNgLgVAAQgXAAgNAMQgLAJgDAKQgCAIgBANIAABPQAAAWAEAHQAFAIAQAEIAAAEIhQAAIAAgEQAPgDAEgLQADgHgBgVIAAhTQAAgYgCgFQgEgJgQAAIgDgFIA8ghIAAAjQANgOANgHQASgKAXAAQAkAAATAZQAIALADAOQACAKgBAVIAABLQABAWADAIQAEAIARAEIAAAEg");
	this.shape.setTransform(239.5,51.25);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(228.6,40.9,21.900000000000006,20.700000000000003), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3gEiIAApDMAvBAAAIAAJDg");
	mask.setTransform(150.5,29);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCE34").s().p("A3gEiIAApDMAvBAAAIAAJDg");
	this.shape.setTransform(150.5,29);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,301,58), null);


(lib.triangleR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32006E").s().p("AhKHXICVutIAAOtg");
	this.shape.setTransform(-7.45,-47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.triangleR, new cjs.Rectangle(-14.9,-94.2,14.9,94.2), null);


(lib.triangleL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32006E").s().p("AhKnWICVAAIiVOtg");
	this.shape.setTransform(7.45,47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.triangleL, new cjs.Rectangle(0,0,14.9,94.2), null);


(lib.skewbox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC700").s().p("A1iEcIBLmqIAAAAIAZiNMAphAAAIhkI3g");
	this.shape.setTransform(-22.075,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC700").s().p("A1iEcIBLmqIAAAAIAZiNMAphAAAIhkI3g");
	this.shape_1.setTransform(22.125,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.skewbox, new cjs.Rectangle(-159.9,-28.4,319.9,56.9), null);


(lib.HEAD2d = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32006E").s().p("AAdBGIg7hVIAABVIglAAIAAiLIAnAAIA7BVIAAhVIAlAAIAACLg");
	this.shape.setTransform(58.475,14.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("AgTBGIAAiLIAnAAIAACLg");
	this.shape_1.setTransform(46.9,14.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("AAlBGIgLgiIg0AAIgLAiIglAAIAuiLIA4AAIAvCLgAARAHIgRg3IgRA3IAiAAg");
	this.shape_2.setTransform(35.775,14.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("AAXBHIgjgxIgIAAIgGAAIAAAxIgmAAIAAiIIAZgEIAYgBQAiAAAQALQARAMAAAXQAAAPgHAJQgIAKgNAGIApA3gAgagqIAAAlIAQABQAMAAAHgEQAGgFABgLQgBgKgGgFQgHgFgMAAQgIAAgIACg");
	this.shape_3.setTransform(21.2,14.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AglBHIgXgCIAAiHIAZgEIAagBQAiAAAQAKQAQAJAAAVQAAAKgHAJQgGAIgLADQANABAHAJQAIAIAAANQAAAOgIAJQgIAJgQAFQgRAFgbAAgAgWAtIARABQALAAAHgCQAGgCADgEQADgDAAgGQAAgJgGgEQgGgEgNAAIgWAAgAgWgrIAAAdIATAAQAMAAAGgEQAFgDAAgIQAAgGgCgDQgDgEgFgBQgGgCgIAAIgSACg");
	this.shape_4.setTransform(6.525,14.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("AAXBHIgjgxIgIAAIgGAAIAAAxIgmAAIAAiIIAZgEIAZgBQAgAAARALQARAMAAAXQAAAPgHAJQgIAKgNAGIApA3gAgagqIAAAlIAPABQANAAAHgEQAGgFAAgLQAAgKgGgFQgHgFgMAAQgIAAgIACg");
	this.shape_5.setTransform(-13.25,14.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("AgxA4QgQgPAAggIAAhPIAnAAIAABTQAAAPAHAHQAHAGANAAQANAAAHgGQAHgHAAgPIAAhTIAmAAIAABPQAAAggQAPQgQAPghAAQgiAAgQgPg");
	this.shape_6.setTransform(-29.125,14.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32006E").s().p("AgmBAQgRgIgJgQQgJgQAAgYQAAgXAJgQQAJgQARgIQAQgIAWAAQAXAAARAIQAQAIAJAQQAJAQAAAXQAAAYgJAQQgJAQgQAIQgRAIgXAAQgWAAgQgIgAgYggQgJAKAAAWQAAAWAJAKQAJALAPAAQARAAAIgKQAJgLAAgVQAAgWgJgLQgIgKgRAAQgPAAgJAKg");
	this.shape_7.setTransform(-45.45,14.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32006E").s().p("AgSBGIAAg6Ig2hRIApAAIAhAzIAhgzIAmAAIg1BRIAAA6g");
	this.shape_8.setTransform(-60.225,14.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2d, new cjs.Rectangle(-185.3,0,370.6,27.8), null);


(lib.HEAD2c = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32006E").s().p("AgdBHIgVgFIAAgdQAJADAMABIAWACQAMAAAGgDQAGgEAAgGQAAgEgCgCQgCgCgEgCIgKgEIgNgDQgUgFgKgJQgKgKAAgQQAAgVAQgMQARgLAgAAIATABIARADIAAAdIgQgDIgSgBQgPAAgHADQgHAEAAAGQAAADACADQABACAEABIAJAEIAMADQAWAFALAJQAKAKAAAQQAAAOgHAKQgIAKgOAGQgOAFgTAAQgLAAgLgBg");
	this.shape.setTransform(43.075,14.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("AAlBGIgLgiIg0AAIgLAiIglAAIAuiLIA4AAIAvCLgAARAHIgRg3IgRA3IAiAAg");
	this.shape_1.setTransform(29.025,14.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("AAxBGIAAhcIghBIIgeAAIgihFIAABZIgkAAIAAiLIAwAAIAlBRIAlhRIAvAAIAACLg");
	this.shape_2.setTransform(11.25,14.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("AgmBAQgQgIgKgQQgJgQAAgYQAAgXAJgQQAKgQAQgIQAQgIAWAAQAXAAAQAIQARAIAJAQQAJAQAAAXQAAAYgJAQQgJAQgRAIQgQAIgXAAQgWAAgQgIgAgYggQgJAKAAAWQAAAWAJAKQAJALAPAAQARAAAIgKQAJgLAAgVQAAgWgJgLQgIgKgRAAQgPAAgJAKg");
	this.shape_3.setTransform(-7.1,14.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AgSBGIAAiLIAlAAIAACLg");
	this.shape_4.setTransform(-18.85,14.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("Ag0BGIAAiLIAnAAIAABtIBCAAIAAAeg");
	this.shape_5.setTransform(-27.825,14.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("AgpA2QgWgSAAgkQAAgiAXgTQAWgSAsAAQARAAAQADIAAAeQgPgDgPAAQgTAAgKAEQgMAFgFAJQgGAKABAOQAAAVALAKQALAKAWAAIAGAAIAAgoIAkAAIAABDQgVADgSAAQgsAAgWgSg");
	this.shape_6.setTransform(-42.375,14.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2c, new cjs.Rectangle(-125.1,0,250.2,27.8), null);


(lib.HEAD2b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32006E").s().p("AgdBHIgVgFIAAgdQAJADAMABIAWACQAMAAAGgDQAGgEAAgGQAAgEgCgCQgCgCgEgCIgKgEIgNgDQgUgFgKgJQgKgKAAgQQAAgVAQgMQARgLAgAAIATABIARADIAAAdIgQgDIgSgBQgPAAgHADQgHAEAAAGQAAADACADQABACAEABIAJAEIAMADQAWAFALAJQAKAKAAAQQAAAOgHAKQgIAKgOAGQgOAFgTAAQgLAAgLgBg");
	this.shape.setTransform(73.275,14.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("AAlBGIgLgiIg0AAIgLAiIglAAIAuiLIA4AAIAvCLgAARAHIgRg3IgRA3IAiAAg");
	this.shape_1.setTransform(59.275,14.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("AAwBGIAAhcIggBIIgeAAIgihFIAABZIgkAAIAAiLIAwAAIAlBRIAlhRIAvAAIAACLg");
	this.shape_2.setTransform(41.5,14.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("AgmBAQgRgIgIgQQgKgQAAgYQAAgXAKgQQAIgQARgIQARgIAVAAQAXAAAQAIQARAIAJAQQAJAQAAAXQAAAYgJAQQgJAQgRAIQgQAIgXAAQgVAAgRgIgAgYggQgJAKAAAWQAAAWAJAKQAJALAPAAQARAAAJgKQAIgLAAgVQAAgWgIgLQgJgKgRAAQgPAAgJAKg");
	this.shape_3.setTransform(23.15,14.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AgTBGIAAiLIAmAAIAACLg");
	this.shape_4.setTransform(11.4,14.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("AgpA2QgWgSAAgkQAAgiAXgTQAWgSAsAAQARAAAQADIAAAeQgPgDgPAAQgTAAgKAEQgMAFgFAJQgGAKABAOQAAAVALAKQALAKAWAAIAGAAIAAgoIAkAAIAABDQgVADgSAAQgsAAgWgSg");
	this.shape_5.setTransform(0.225,14.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("AAdBGIg7hVIAABVIglAAIAAiLIAnAAIA7BVIAAhVIAlAAIAACLg");
	this.shape_6.setTransform(-15.325,14.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32006E").s().p("AgTBGIAAiLIAnAAIAACLg");
	this.shape_7.setTransform(-26.9,14.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32006E").s().p("AAdBGIg7hVIAABVIglAAIAAiLIAnAAIA7BVIAAhVIAlAAIAACLg");
	this.shape_8.setTransform(-38.475,14.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32006E").s().p("Ag3BGIAAiLIBuAAIAAAdIhHAAIAAAZIA8AAIAAAcIg8AAIAAAcIBIAAIAAAdg");
	this.shape_9.setTransform(-53.125,14.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32006E").s().p("AAxBGIAAhcIghBIIgfAAIgghFIAABZIglAAIAAiLIAwAAIAkBRIAlhRIAwAAIAACLg");
	this.shape_10.setTransform(-70.05,14.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2b, new cjs.Rectangle(-125.1,0,250.2,27.8), null);


(lib.HEAD2a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32006E").s().p("AgdBHIgVgFIAAgdQAJADAMABIAWACQAMAAAGgDQAGgEAAgGQAAgEgCgCQgCgCgEgCIgKgEIgNgDQgUgFgKgJQgKgKAAgQQAAgVAQgMQARgLAgAAIATABIARADIAAAdIgQgDIgSgBQgPAAgHADQgHAEAAAGQAAADACADQABACAEABIAJAEIAMADQAWAFALAJQAKAKAAAQQAAAOgHAKQgIAKgOAGQgOAFgTAAQgLAAgLgBg");
	this.shape.setTransform(76.875,14.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("AAXBHIgjgxIgJAAIgEAAIAAAxIgnAAIAAiIIAYgEIAagBQAgAAARALQARAMAAAXQAAAPgHAJQgIAKgNAGIApA3gAgZgqIAAAlIAOABQAOAAAGgEQAGgFAAgLQAAgKgGgFQgGgFgNAAQgIAAgHACg");
	this.shape_1.setTransform(63.9,14.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("AgmBAQgRgIgJgQQgJgQAAgYQAAgXAJgQQAJgQARgIQAQgIAWAAQAXAAARAIQAQAIAJAQQAJAQAAAXQAAAYgJAQQgJAQgQAIQgRAIgXAAQgWAAgQgIgAgYggQgJAKAAAWQAAAWAJAKQAJALAPAAQARAAAIgKQAJgLAAgVQAAgWgJgLQgIgKgRAAQgPAAgJAKg");
	this.shape_2.setTransform(47.6,14.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("AAwBGIAAhcIggBIIgfAAIgghFIAABZIglAAIAAiLIAwAAIAkBRIAlhRIAwAAIAACLg");
	this.shape_3.setTransform(29.3,14.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AgxA4QgQgPAAggIAAhPIAnAAIAABTQAAAPAHAHQAHAGANAAQANAAAHgGQAHgHAAgPIAAhTIAmAAIAABPQAAAggQAPQgQAPghAAQgiAAgQgPg");
	this.shape_4.setTransform(11.375,14.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("AgTBGIAAhtIguAAIAAgeICDAAIAAAeIgvAAIAABtg");
	this.shape_5.setTransform(-3.45,14.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("AAdBGIg7hVIAABVIglAAIAAiLIAnAAIA7BVIAAhVIAlAAIAACLg");
	this.shape_6.setTransform(-24.175,14.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32006E").s().p("AgTBGIAAiLIAmAAIAACLg");
	this.shape_7.setTransform(-35.75,14.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32006E").s().p("AAlBGIgLgiIg0AAIgLAiIglAAIAuiLIA4AAIAvCLgAARAHIgRg3IgRA3IAiAAg");
	this.shape_8.setTransform(-46.875,14.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32006E").s().p("AAWBHIgigxIgJAAIgEAAIAAAxIgnAAIAAiIIAYgEIAZgBQAiAAAQALQARAMAAAXQAAAPgHAJQgHAKgOAGIApA3gAgZgqIAAAlIAOABQANAAAHgEQAHgFgBgLQABgKgHgFQgGgFgNAAQgIAAgHACg");
	this.shape_9.setTransform(-61.45,14.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32006E").s().p("AglBHIgXgCIAAiHIAZgEIAagBQAiAAAQAKQAQAJAAAVQAAAKgHAJQgGAIgLADQANABAHAJQAIAIAAANQAAAOgIAJQgIAJgQAFQgRAFgbAAgAgWAtIARABQALAAAHgCQAGgCADgEQADgDAAgGQAAgJgGgEQgGgEgNAAIgWAAgAgWgrIAAAdIATAAQAMAAAGgEQAFgDAAgIQAAgGgCgDQgDgEgFgBQgGgCgIAAIgSACg");
	this.shape_10.setTransform(-76.125,14.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2a, new cjs.Rectangle(-125.1,0,250.2,27.8), null);


(lib.HEAD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32006E").s().p("AASAsIgkg1IAAA1IgYAAIAAhXIAZAAIAlA1IAAg1IAXAAIAABXg");
	this.shape.setTransform(56.775,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("AgMAsIAAhXIAYAAIAABXg");
	this.shape_1.setTransform(49.35,9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("AgiAsIAAhXIBFAAIAAASIgtAAIAAAQIAmAAIAAARIgmAAIAAASIAtAAIAAASg");
	this.shape_2.setTransform(39.325,9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("AgkAsIAAgMIAog4IgoAAIAAgTIBIAAIAAAMIgoA4IApAAIAAATg");
	this.shape_3.setTransform(30.6,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AgLAsIAAhXIAYAAIAABXg");
	this.shape_4.setTransform(24.1,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("AghAsIAAhXIAZAAIAABEIAqAAIAAATg");
	this.shape_5.setTransform(18.275,9.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("AAYAsIgHgWIghAAIgHAWIgXAAIAdhXIAjAAIAdBXgAALAEIgLgiIgKAiIAVAAg");
	this.shape_6.setTransform(8.95,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32006E").s().p("AgLAsIAAhXIAXAAIAABXg");
	this.shape_7.setTransform(1.75,9.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32006E").s().p("AgXAiQgNgKABgXQAAgPAFgKQAHgKALgGQAMgEARgBQAKABAKACIAAASIgSgBQgLAAgGACQgGADgDAGQgDAGAAAIQAAAKADAFQAEAGAEADQAHACAKAAQAIAAALgCIAAATIgKACIgLABQgZAAgOgMg");
	this.shape_8.setTransform(-4.65,9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32006E").s().p("AgiAsIAAhXIBFAAIAAASIgtAAIAAAQIAmAAIAAARIgmAAIAAASIAtAAIAAASg");
	this.shape_9.setTransform(-13.175,9.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32006E").s().p("AgkAtIAAhWQAQgDAOAAQAWAAALAIQAKAIAAARQAAAPgKAIQgLAIgTAAIgGAAIgCAAIAAAZgAgLgaIAAAdIAIAAQAIABAEgEQAFgDAAgIQAAgJgFgDQgEgEgIAAg");
	this.shape_10.setTransform(-22.025,9.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#32006E").s().p("AgSAsIgOgCIAAgTIAOADIAOACQAHAAAEgDQADgCAAgEIAAgEIgEgCIgGgCIgIgDQgNgDgGgFQgHgHAAgJQAAgOAKgHQALgIAUAAIAMABIALACIAAATIgLgCIgLgBQgJAAgFACQgDACAAAEIABAEIACACIAGACIAIACQANADAHAGQAHAGAAAKQAAAJgFAGQgFAHgIADQgJADgMABIgOgCg");
	this.shape_11.setTransform(-30.75,9.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#32006E").s().p("AgiAsIAAhXIBFAAIAAASIgtAAIAAAQIAmAAIAAARIgmAAIAAASIAtAAIAAASg");
	this.shape_12.setTransform(-42.575,9.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#32006E").s().p("AASAsIgSg+IgRA+IgfAAIgZhXIAZAAIARBCIAThCIAaAAIASBDIAShDIAYAAIgZBXg");
	this.shape_13.setTransform(-54.725,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(-109,0,218,19), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBC700").s().p("AgogxIBRAuIhRA1g");
	this.shape.setTransform(80.075,9.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F1065").s().p("AgiAsIAAhXIBFAAIAAASIgtAAIAAAQIAmAAIAAARIgmAAIAAASIAtAAIAAASg");
	this.shape_1.setTransform(66.775,9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F1065").s().p("AAOAtIgVgfIgFAAIgDgBIAAAgIgZAAIAAhWIAQgCIAPgBQAVAAALAIQAKAGAAAPQAAAKgEAFQgFAGgJAEIAaAjgAgPgaIAAAYIAJAAQAHAAAFgDQAEgDAAgHQAAgGgEgDQgFgDgHAAIgJABg");
	this.shape_2.setTransform(57.95,9.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F1065").s().p("AAXAsIgGgWIggAAIgIAWIgYAAIAehXIAjAAIAdBXgAALAEIgLgiIgKAiIAVAAg");
	this.shape_3.setTransform(47.9,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2F1065").s().p("AgWAiQgOgKAAgXQABgPAFgKQAHgKALgGQAMgEAQgBQALABAKACIAAASIgSgBQgKAAgHACQgFADgDAGQgEAGAAAIQAAAKADAFQADAGAGADQAGACAJAAQAKAAAKgCIAAATIgLACIgLABQgZAAgMgMg");
	this.shape_4.setTransform(38.7,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F1065").s().p("AghAsIAAhXIAZAAIAABEIAqAAIAAATg");
	this.shape_5.setTransform(27.025,9.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2F1065").s().p("AAYAsIgHgWIghAAIgGAWIgYAAIAdhXIAjAAIAdBXgAALAEIgLgiIgKAiIAVAAg");
	this.shape_6.setTransform(17.7,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2F1065").s().p("AgXAiQgNgKABgXQgBgPAHgKQAGgKAMgGQALgEARgBQAKABAJACIAAASIgSgBQgKAAgGACQgGADgDAGQgDAGAAAIQAAAKADAFQAEAGAEADQAHACAKAAQAJAAAJgCIAAATIgJACIgLABQgaAAgNgMg");
	this.shape_7.setTransform(8.5,9.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2F1065").s().p("AgLAsIAAhXIAYAAIAABXg");
	this.shape_8.setTransform(1.95,9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2F1065").s().p("AgZAiQgOgLgBgWQABgWAOgMQAOgMAbAAQALABALACIAAATQgKgCgKAAQgLAAgHACQgHADgEAGQgDAGAAAJQAAANAHAHQAHAGANAAIAFAAIAAgZIAWAAIAAApQgNACgMABQgbAAgNgMg");
	this.shape_9.setTransform(-5.2,9.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2F1065").s().p("AgYAoQgKgEgGgLQgGgKAAgPQAAgOAGgKQAGgLAKgFQAKgEAOgBQAOABALAEQAKAFAGALQAGAKAAAOQAAAPgGAKQgGALgKAEQgLAFgOABQgOgBgKgFgAgPgUQgGAHAAANQAAAOAGAHQAFAGAKAAQAKAAAGgGQAFgGAAgOQAAgOgFgHQgGgGgKAAQgKAAgFAGg");
	this.shape_10.setTransform(-15.275,9.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2F1065").s().p("AghAsIAAhXIAZAAIAABEIAqAAIAAATg");
	this.shape_11.setTransform(-24.325,9.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2F1065").s().p("AgYAoQgKgEgGgLQgGgKAAgPQAAgOAGgKQAGgLAKgFQAKgEAOgBQAOABALAEQAKAFAGALQAGAKAAAOQAAAPgGAKQgGALgKAEQgLAFgOABQgOgBgKgFgAgPgUQgGAHAAANQAAAOAGAHQAFAGAKAAQAKAAAGgGQAFgGAAgOQAAgOgFgHQgGgGgKAAQgKAAgFAGg");
	this.shape_12.setTransform(-33.975,9.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2F1065").s().p("AAPAtIgWgfIgGAAIgDgBIAAAgIgYAAIAAhWIAPgCIARgBQAUAAAKAIQALAGAAAPQAAAKgFAFQgEAGgIAEIAZAjgAgQgaIAAAYIAKAAQAHAAAFgDQAEgDAAgHQAAgGgEgDQgFgDgHAAIgKABg");
	this.shape_13.setTransform(-43.7,9.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2F1065").s().p("AgfAkQgKgKAAgUIAAgyIAZAAIAAA1QAAAJAEAEQAFAEAHAAQAJAAAEgEQAFgEAAgJIAAg1IAXAAIAAAyQAAAUgKAKQgKAJgVAAQgUAAgLgJg");
	this.shape_14.setTransform(-53.8,9.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2F1065").s().p("AgiAsIAAhXIBFAAIAAASIgtAAIAAAQIAmAAIAAARIgmAAIAAASIAtAAIAAASg");
	this.shape_15.setTransform(-63.125,9.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2F1065").s().p("AASAsIgkg1IAAA1IgYAAIAAhXIAZAAIAlA1IAAg1IAXAAIAABXg");
	this.shape_16.setTransform(-72.825,9.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2F1065").s().p("AgMAsIAAhEIgdAAIAAgTIBSAAIAAATIgdAAIAABEg");
	this.shape_17.setTransform(-86.2,9.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2F1065").s().p("AgiAsIAAhXIBFAAIAAASIgtAAIAAAQIAmAAIAAARIgmAAIAAASIAtAAIAAASg");
	this.shape_18.setTransform(-94.825,9.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2F1065").s().p("AgZAiQgOgLgBgWQABgWAOgMQAOgMAbAAQALABALACIAAATQgKgCgKAAQgLAAgHACQgHADgEAGQgDAGAAAJQAAANAHAHQAHAGANAAIAFAAIAAgZIAWAAIAAApQgNACgMABQgaAAgOgMg");
	this.shape_19.setTransform(-104.3,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-111,0,227.4,19), null);


(lib.BKGDfooter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EggYAHCIB2qkIABAAIAmjfMA+UAAAIieODg");
	this.shape.setTransform(183.775,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGDfooter, new cjs.Rectangle(-23.5,-45,414.6,90), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1+EkIhepHMAu5AADIAAJEg");
	mask.setTransform(151.175,29.2);

	// Layer_3
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(150.5,29.3,1,1,0,0,0,150.5,29);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCE34").s().p("A3gEiIAApDMAvBAAAIAAJDg");
	this.shape.setTransform(150.5,29.3);

	var maskedShapeInstanceList = [this.instance,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(1.1,0.3,299.9,58), null);


(lib.UW_Color_HighDegree_Logoai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// UW_Color_HighDegree_Logo.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeAqQgOgQgBgZQAAgaANgOQANgPAUAAQAUAAANAOQAMANgBAVIAAAKIhJAAQAAAQAKAMQAJAKAQAAQASAAAQgHIAAAOIgQAFIgTABQgUAAgQgNgAgSgiQgHAJgCAPIA3AAQABgQgIgJQgGgHgNAAQgLAAgJAIg");
	this.shape.setTransform(292.65,101.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeA3IAAhqIAOAAIABAUIABAAQAFgJAJgHQAGgHAMAAIAMABIgBAPIgMgBQgNAAgJALQgJAKAAAQIAAA5g");
	this.shape_1.setTransform(283.7,101.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghAvQgJgHAAgQQAAgfAzgBIASgBIAAgHQAAgNgFgGQgGgHgLAAQgLAAgSAJIgFgMQAFgEAMgDQAGgCAMAAQATAAAJAJQAJAIAAATIAABIIgMAAIAAgBIgDgPIgBAAQgHAJgJAEQgKAFgJAAQgPAAgKgJgAALABQgSAAgJAGQgJAGAAALQAAAHAFAGQAEAEALAAQANAAAKgIQAJgKAAgNIAAgKg");
	this.shape_2.setTransform(272.975,101.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAqQgNgOgBgbQABgaANgPQANgPAXAAIAOACIANAEIgGAOIgLgEIgLgBQghAAABApQgBATAJALQAHALAPAAQANAAAOgGIAAAOQgHAGgSAAQgXAAgMgOg");
	this.shape_3.setTransform(263.15,101.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAdBMIAAhGQABgKgHgJQgFgFgNAAQgRgBgHAJQgJAKABATIAAA4IgRAAIAAiXIARAAIAAAuIgBAPIABAAQAEgIAJgEQAJgFALAAQATAAAKAJQAKAJgBAUIAABGg");
	this.shape_4.setTransform(252.05,99.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPAiIAAg/IgPAAIAAgHIAPgGIAHgYIAIAAIAAAZIAfAAIAAAOIgfAAIAAA+QAAAIAFAGQAEAGAJAAQAGgBABgBIAGgBIAAAMQgEACgDAAIgJABQgeAAAAghg");
	this.shape_5.setTransform(242.225,100.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHBMIAAiXIAPAAIAACXg");
	this.shape_6.setTransform(236.3,99.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghAvQgJgHAAgQQAAgfAzgBIASgBIAAgHQAAgNgFgGQgGgHgLAAQgLAAgSAJIgFgMIARgHQAGgCAMAAQASAAAKAJQAJAIAAATIAABIIgLAAIAAgBIgEgPIgBAAQgHAJgJAEQgKAFgJAAQgPAAgKgJgAALABQgSAAgJAGQgJAGAAALQAAAIAFAFQAEAEAMAAQANAAAJgIQAJgJAAgOIAAgKg");
	this.shape_7.setTransform(227.85,101.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAqQgOgQgBgZQAAgaANgOQAOgPATAAQAVAAAMAOQAMANgBAVIAAAKIhIAAQgBAQAKAMQAJAKAQAAQASAAAQgHIAAAOIgRAFIgRABQgWAAgPgNgAgSgiQgHAKgCAOIA3AAQABgRgIgIQgHgHgMAAQgLAAgJAIg");
	this.shape_8.setTransform(216.95,101.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAeBMIAAhGQAAgMgHgHQgFgFgOAAQgQgBgIAJQgHAKgBATIAAA4IgPAAIAAiXIAPAAIAAAuIgBAPIABAAQAFgIAKgEQAHgFALAAQAVAAAIAJQAKAJAAAUIAABGg");
	this.shape_9.setTransform(205.2,99.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRBNIAAheIgTAAIAAgHIATgGIAAgGQAAgoAiAAQAIAAAMADIgEANIgQgDQgKAAgEAGQgDAEAAAQIAAAHIAaAAIAAANIgbAAIAABeg");
	this.shape_10.setTransform(191.175,99.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZAxQgLgIgGgLQgGgMAAgSQAAgZANgPQANgPAWAAQAWAAAOAPQANARAAAXQAAAbgNAOQgOAPgWAAQgPAAgKgHgAgYgfQgIANAAASQAAAUAIALQAIALAQAAQAPAAAIgLQAIgIAAgXQAAgTgIgLQgKgLgNAAQgRAAgHAKg");
	this.shape_11.setTransform(181.075,101.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAqQgOgQAAgZQAAgaANgOQANgPAUAAQAUAAAMAOQALALAAAXIAAAKIhIAAQAAARAKALQAIAKAQAAQATAAAOgHIAAAOIgQAFIgRABQgVAAgQgNgAgSgiQgHAKgCAOIA4AAQAAgRgHgIQgIgHgMAAQgKAAgKAIg");
	this.shape_12.setTransform(164.125,101.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfAqQgOgQABgZQgBgaANgOQAOgPATAAQAVAAAMAOQAMANAAAVIAAAKIhJAAQgBAQALAMQAIAKAQAAQASAAAPgHIAAAOIgQAFIgRABQgVAAgRgNgAgSgiQgJALAAANIA2AAQABgRgIgIQgGgHgNAAQgKAAgJAIg");
	this.shape_13.setTransform(152.95,101.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdA3IAAhqIAMAAIACAUIABAAQAGgJAIgHQAHgHAKAAIANABIgCAPIgLgBQgNAAgJALQgIAKgBAQIAAA5g");
	this.shape_14.setTransform(143.95,101.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgmBIQgMgIAAgPQABgJAFgIQAGgGAMgEQgEgBgDgEQgCgFAAgEQAAgGACgDQAEgGAGgDQgHgDgGgKQgGgIAAgLQAAgRAMgKQALgKATABQAGgBAIACIAlAAIAAAPIgVACQACABAEAHQABAGAAAGQABARgLAIQgLAKgSgBIgJgBQgLAGAAAIQABAEAEACQAEACAHABIASAAQATAAAIAGQAJAIAAAOQAAARgNAKQgOAIgcABQgVgBgKgHgAgbAlQgHAEAAALQAAAJAHAEQAJAFAMAAQAUAAAJgGQAKgGAAgLQAAgJgFgDQgGgDgOAAIgSAAQgLAAgGAFgAgTg4QgGAGAAALQAAANAGAEQAHAHALAAQAXAAAAgYQAAgXgXAAQgMAAgGAGg");
	this.shape_15.setTransform(133.6,103.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfAqQgNgQAAgZQAAgbANgNQANgPATAAQAVAAALAOQAMANAAAVIAAAKIhJAAQAAAQAKAMQAKAKAOAAQAUAAAOgHIAAAOIgQAFIgSABQgVAAgQgNgAgTgiQgHAKgCAOIA4AAQAAgRgHgIQgIgHgMAAQgKAAgKAIg");
	this.shape_16.setTransform(122.525,101.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgiBAQgMgPAAgbQAAgYAMgPQAMgQAVABQAWgBAKARIABAAIgBg9IAQAAIAACYIgNAAIgBgOQgMARgWgBQgVABgMgOgAgWgHQgIAJAAAUQAAAVAIALQAIAKAOABQAQgBAIgIQAHgJAAgUIAAgEQAAgWgIgJQgJgLgOAAQgOAAgIAMg");
	this.shape_17.setTransform(110.375,99.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeA3IAAhqIAOAAIABAUIABAAQAGgJAIgHQAEgHAOAAIAMABIgCAPIgLgBQgNAAgJALQgIAKgBAQIAAA5g");
	this.shape_18.setTransform(96.15,101.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeAqQgOgPAAgaQAAgZANgPQAOgPATAAQAVAAALAOQAMAOAAAUIAAAKIhKAAQAAAQALAMQAIAKAPAAQATAAAPgHIAAAOIgQAFIgRABQgVAAgQgNgAgSgiQgIAKgBAOIA3AAQAAgRgHgIQgGgHgNAAQgLAAgJAIg");
	this.shape_19.setTransform(85.6,101.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAdBMIAAhGQAAgLgFgIQgHgFgMAAQgRgBgHAJQgJAKABATIAAA4IgRAAIAAiXIARAAIAAAuIgBAPIABAAQAEgIAJgEQAJgFALAAQATAAAKAJQAKAJgBAUIAABGg");
	this.shape_20.setTransform(73.85,99.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgmBIQgLgIAAgPQAAgJAGgIQAGgGAMgEQgEgBgDgEQgDgFAAgEQAAgGADgDQAEgGAGgDQgHgDgHgKQgFgIAAgLQAAgRALgKQAMgKASABQAGgBAIACIAkAAIAAAPIgUACQACABADAHIACAMQAAAQgLAJQgLAKgSgBIgJgBQgKAGAAAIQAAAEAEACQAEACAIABIATAAQASAAAJAGQAJAIAAAOQAAARgOAKQgOAIgbABQgVgBgLgHgAgbAlQgHAEAAALQAAAJAHAEQAIAFANAAQAUAAAJgGQAKgGAAgLQAAgJgFgDQgGgDgOAAIgSAAQgLAAgGAFgAgTg4QgGAHAAAKQAAAMAGAFQAGAHAMAAQAXAAAAgYQAAgXgXAAQgMAAgGAGg");
	this.shape_21.setTransform(62.175,103.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgIBKIAAhqIAPAAIAABqgAgGg2QgDgDAAgFQAAgFADgDQAEgDACAAQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_22.setTransform(54.3,99.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAeBMIAAhGQAAgLgHgIQgFgFgOAAQgQgBgIAJQgIAKAAATIAAA4IgPAAIAAiXIAPAAIgBA9IABAAQAFgIAKgEQAHgFALAAQAVAAAIAJQAKAKAAATIAABGg");
	this.shape_23.setTransform(45.45,99.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAuBIIgSgtIg4AAIgSAtIgQAAIA5iPIAMAAIA4CPgAgGggIgRArIAuAAIgXhAQgBAHgFAOg");
	this.shape_24.setTransform(27.775,99.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ADWCXQgEgTgdhRQgXhCgMgcIgkBcQgfBQgHAWQgBADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAIgBgCIgbhMIgohrIgghRQgJgWgPgEQgHAFAAAOIAACgQgBAugWAdQgeAmhCACQghABgcgKQgdgJgTgSQgdgdAAgoIAAiSQABgXgJgJQgFgGgLgCQgJgCgBgGIADgEQAEgEAcAEIAWACQAGAAAOgEQAVgDAEACIADAFQABAEgJACQgGACgEAEQgEAFgBAKIAAB8QABAkAEAXQAHAfASARQAYAYAvgBQArgBAYgWQAZgXAAgoIAAhlQAAg4gKgTQgGgLgNgBIgEAAQgMgDABgFIABgEQADgDAWACIAQABIANgBIAHgBQAFgBAUACIAgAAQAdgEAEAFIABADQABAGgIAAIgFACQgDACgBAHIAAAHIABAGIBIDCIA4iKIgdg/QgHgMgOgCIgFgCQgCgBgBgDIACgEQAHgFAZAEIAhAAQAdgEAEAFIABADQgBAGgFAAIgGACQgDACAAAHIACANIAZBVQAbBYAJAWQBDiogBgZIAAgBIgBgIQgCgLgNgEIgFgDQgDgCAAgDIADgFQACgCAJAAIASACIAdAAQAUgCACACIADAEQAAAGgIAAQgHAAgFAEQgKAHgIATIhhEGQABAEgGAAQgDAAgBgEg");
	this.shape_25.setTransform(81.15,46.0984);

	this.instance = new lib.ClipGroup_8();
	this.instance.setTransform(164.4,46.5,1,1,0,0,0,150.2,46.5);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(164.4,46.5,1,1,0,0,0,150.2,46.5);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.setTransform(164.4,46.5,1,1,0,0,0,150.2,46.5);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.setTransform(164.4,46.5,1,1,0,0,0,150.2,46.5);

	this.instance_4 = new lib.ClipGroup_4();
	this.instance_4.setTransform(164.4,46.5,1,1,0,0,0,150.2,46.5);

	this.instance_5 = new lib.ClipGroup_5();
	this.instance_5.setTransform(164.4,46.5,1,1,0,0,0,150.2,46.5);

	this.instance_6 = new lib.ClipGroup_6();
	this.instance_6.setTransform(164.4,46.5,1,1,0,0,0,150.2,46.5);

	this.instance_7 = new lib.ClipGroup_7();
	this.instance_7.setTransform(164.4,46.5,1,1,0,0,0,150.2,46.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#36246B").s().p("A3ZEkIAApHMAuzAAAIheJHg");
	this.shape_26.setTransform(168.875,47.15);

	this.instance_8 = new lib.ClipGroup();
	this.instance_8.setTransform(150.6,41.3,1,1,0,0,0,150.6,29.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCE34").s().p("A1+EkIhepHMAu5AADIAAJEg");
	this.shape_27.setTransform(151.175,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.instance_8},{t:this.shape_26},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,318.7,111.3);


(lib.UWMed_logomark = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.UW_Color_HighDegree_Logoai("synched",0);
	this.instance.setTransform(-1,-0.65,1.05,1.05,0,0,0,159.2,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UWMed_logomark, new cjs.Rectangle(-167,-46.2,333.5,104.2), null);


// stage content:
(lib.UWM_neurover2_300x100 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,248];
	// timeline functions:
	this.frame_0 = function() {
		//if(!this.alreadyyExecuted){
		//this.alreadyyExecuted=true;
		//	this.clickthru_btn.on("click", function(evt){
		//  window.open(clickTag, "_blank");
		//});
		//} else {
		//gotoAndPlay(2);
		//}
	}
	this.frame_248 = function() {
		//if(!this.alreadyExecuted){
		//this.alreadyExecuted=true;
		//this.loopNum=1;
		//} else {
		//this.loopNum++;
		//if(this.loopNum==2){
		this.stop();
		//}
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(248).call(this.frame_248).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3WnuMAutAAAIAAPdMgutAAAg");
	this.shape.setTransform(150,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(249));

	// triangle L
	this.instance = new lib.triangleL();
	this.instance.setTransform(9,52.45,1.2,1.2,0,0,0,7.5,47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(249));

	// triangle R
	this.instance_1 = new lib.triangleR();
	this.instance_1.setTransform(290.3,57.9,1.2,1.2,0,0,0,-7.4,-47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("AgFgoIALADIgLBNg");
	this.shape_1.setTransform(393.225,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1}]}).wait(249));

	// CTA
	this.instance_2 = new lib.CTA();
	this.instance_2.setTransform(386.05,26.8,1,1,0,0,0,0,15.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(222).to({_off:false},0).to({x:168.65},7,cjs.Ease.quadOut).wait(20));

	// HEAD1
	this.instance_3 = new lib.HEAD1();
	this.instance_3.setTransform(147,30);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(191).to({x:-155.9},8,cjs.Ease.quadIn).to({_off:true},1).wait(35));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_160 = new cjs.Graphics().p("APvEPMgngAAAIBHmWIABAAIAXiHIGlAAMAnfAAAIhfIdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(160).to({graphics:mask_graphics_160,x:150.0737,y:49.9999}).wait(54).to({graphics:null,x:0,y:0}).wait(35));

	// HEAD2d
	this.instance_4 = new lib.HEAD2d();
	this.instance_4.setTransform(-14.5,43.5);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(160).to({_off:false},0).to({x:147},7,cjs.Ease.quadOut).wait(38).to({x:-155.9},8,cjs.Ease.quadIn).to({_off:true},1).wait(35));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_112 = new cjs.Graphics().p("APvEPMgngAAAIBHmWIABAAIAXiHIGlAAMAnfAAAIhfIdg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(112).to({graphics:mask_1_graphics_112,x:150.0737,y:49.9999}).wait(48).to({graphics:null,x:0,y:0}).wait(89));

	// HEAD2c
	this.instance_5 = new lib.HEAD2c();
	this.instance_5.setTransform(-17,44);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(112).to({_off:false},0).to({x:147},7,cjs.Ease.quadOut).wait(33).to({x:-17},7,cjs.Ease.quadIn).to({_off:true},1).wait(89));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_64 = new cjs.Graphics().p("APvEPMgngAAAIBHmWIABAAIAXiHIGlAAMAnfAAAIhfIdg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(64).to({graphics:mask_2_graphics_64,x:150.0737,y:49.9999}).wait(48).to({graphics:null,x:0,y:0}).wait(137));

	// HEAD2b
	this.instance_6 = new lib.HEAD2b();
	this.instance_6.setTransform(-17,44);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(64).to({_off:false},0).to({x:149},7,cjs.Ease.quadOut).wait(33).to({x:-17},7,cjs.Ease.quadIn).to({_off:true},1).wait(137));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_16 = new cjs.Graphics().p("APvEPMgngAAAIBHmWIABAAIAXiHIGlAAMAnfAAAIhfIdg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_3_graphics_16,x:150.0737,y:49.9999}).wait(48).to({graphics:null,x:0,y:0}).wait(185));

	// HEAD2a
	this.instance_7 = new lib.HEAD2a();
	this.instance_7.setTransform(-17,44);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off:false},0).to({x:148},7,cjs.Ease.quadOut).wait(33).to({x:-17},7,cjs.Ease.quadIn).to({_off:true},1).wait(185));

	// skew box gold
	this.instance_8 = new lib.skewbox();
	this.instance_8.setTransform(-141.9,50.1,0.9511,0.9511,0,0,0,0.1,0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({x:150.15},10,cjs.Ease.quadOut).wait(194).to({x:-152.75},8,cjs.Ease.quadIn).to({_off:true},1).wait(35));

	// UWMed logo mark
	this.instance_9 = new lib.UWMed_logomark();
	this.instance_9.setTransform(146.75,46.9,0.5,0.5,0,0,0,0.5,0.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(205).to({_off:false},0).to({y:60.9},8,cjs.Ease.quadIn).wait(36));

	// BKGD footer
	this.instance_10 = new lib.BKGDfooter();
	this.instance_10.setTransform(461.2,50,0.7237,1.1111,0,0,0,613.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(249));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-155,46,657.4,68.3);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 100,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;