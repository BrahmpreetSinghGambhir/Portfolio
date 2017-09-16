(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[1476,1230,22,17],[1476,1211,22,17],[1302,1211,18,18],[1282,1211,18,18],[1702,0,331,569],[1702,571,279,595],[1512,686,113,551],[1627,1168,350,120],[1282,1159,201,50],[0,0,1280,720],[0,722,1280,720],[1282,1239,192,47],[1282,1290,382,93],[1282,0,418,684],[1282,686,228,289],[1282,977,124,180]]}
];


// symbols:



(lib.browser = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.browser2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.call = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.call2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.chair = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.chair2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.chair3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.cloud = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.cloud2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.finalscreen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.grains = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.logo_colored = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.man = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.thumb = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.window = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.yellowbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFBB15").s().p("Eho/hAdMDSLgAMMAAAA25MjSYBKag");
	this.shape.setTransform(673.3,413.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.yellowbg, new cjs.Rectangle(0,0,1346.5,827.7), null);


(lib.yellowbar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AD7C01").s().p("AP8CjIAAlEIEYAAIAAFEgALaCjIAAlEIEYAAIAAFEgAG4CjIAAlEIEYAAIAAFEgACWCjIAAlEIEYAAIAAFEgAiLCjIAAlEIEXAAIAAFEgAmtCjIAAlEIEYAAIAAFEgArPCjIAAlEIEYAAIAAFEgAvxCjIAAlEIEYAAIAAFEgA0TCjIAAlEIEYAAIAAFEg");
	this.shape.setTransform(155.6,58.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AD7C01").s().p("ASPCiIAAlEIEYAAIAAFEgANpCiIAAlEIEYAAIAAFEgAJHCiIAAlEIEYAAIAAFEgAElCiIAAlEIEYAAIAAFEgAADCiIAAlEIEYAAIAAFEgAkeCiIAAlEIEYAAIAAFEgApACiIAAlEIEYAAIAAFEgAtiCiIAAlEIEYAAIAAFEgAyECiIAAlEIEYAAIAAFEgA2mCiIAAlEIEYAAIAAFEg");
	this.shape_1.setTransform(631.1,59.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AD7C01").s().p("AgfAwQgMgNAAgUQAAgSAMgMQALgNAQAAQAIAAAGADQAHACAGAHIAAgrIAVAAIAAB1IgVAAIAAgJQgGAGgHACQgGADgHAAQgQAAgMgMgAgPgCQgHAHAAAKQAAAMAHAGQAHAIAIgBQAKABAHgIQAGgGAAgMQAAgKgGgHQgHgGgKAAQgJAAgGAGg");
	this.shape_2.setTransform(528.8,28.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AD7C01").s().p("AgfAfQgNgMAAgTQAAgTAPgNQANgLAQAAQALgBALAHQALAGAGAJQAGALAAALQAAAMgGAKQgGALgLAGQgKAFgMABQgSgBgNgNgAgQgQQgGAGAAAKQAAALAGAHQAHAHAJAAQAKAAAGgHQAHgHAAgLQAAgKgHgGQgGgIgKAAQgJAAgHAIg");
	this.shape_3.setTransform(518.5,30.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AD7C01").s().p("AgKA8IAAhUIAVAAIAABUgAgJgkQgDgDAAgHQAAgFADgEQAFgEAEAAQAGAAAEAEQADAEABAGQgBAFgDAEQgEAFgGAAQgEAAgFgFg");
	this.shape_4.setTransform(511.5,28.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AD7C01").s().p("AgWAsIAAhVIASAAIAAALQADgGAEgEQAFgCAGAAQAEAAAFABIgHATIgGgCQgFAAgDAGQgDAGAAARIAAAEIAAAjg");
	this.shape_5.setTransform(507.3,30.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AD7C01").s().p("AgfAgQgMgNAAgSQAAgTAMgNQAMgMATAAQATAAANAMQANANAAAUIAAAEIhEAAQABAJAHAFQAGAGAKAAQAMAAAIgIIASAIQgHAJgKAFQgIAEgNABQgUAAgMgNgAgPgVQgDAEgEAIIAtAAQgCgIgGgEQgHgEgHAAQgIAAgIAEg");
	this.shape_6.setTransform(499.4,30.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AD7C01").s().p("AghA6IAAhyIAXAAQASgBAIAEQAIAEAFAHQAFAIAAALQAAAMgGAIQgGAHgLADQgHACgPAAIAAAxgAgLgLIAHAAIAKgBIAFgFQACgCAAgEQAAgHgFgDQgEgCgJAAIgGAAg");
	this.shape_7.setTransform(490,29);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AD7C01").s().p("AgLA6IAAhBIgLAAIAAgTIALAAIAAgfIAVAAIAAAfIAMAAIAAATIgMAAIAABBg");
	this.shape_8.setTransform(140,28.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AD7C01").s().p("AARArIAAglQAAgOgBgFQgCgFgEgDQgDgCgFAAQgFAAgFAEQgFAFgCAHQgBAEAAANIAAAhIgUAAIAAhTIAUAAIAAAJQAIgHAGgCQAFgCAGAAQANgBAIAJQAIAIgBAOIAAA3g");
	this.shape_9.setTransform(132.7,30.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AD7C01").s().p("AgWAmQgIgHgEgLQgCgHAAgUIAAgjIAWAAIAAAoQAAALABAFQACAEADADQAEADAEAAQAGAAADgDQAEgCABgFQACgEAAgLIAAgpIAWAAIAAAkQgBAVgDAIQgEAKgJAGQgIAEgNABQgNgBgJgFg");
	this.shape_10.setTransform(123.1,30.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AD7C01").s().p("AgfAfQgNgNAAgSQAAgTAPgNQANgLAQAAQALAAALAFQALAGAGAKQAGALAAALQAAAMgGAKQgGALgLAGQgKAGgMAAQgSAAgNgOgAgQgQQgGAGAAAKQAAALAGAHQAHAHAJAAQAKAAAGgHQAHgHAAgLQAAgKgHgGQgGgIgKABQgJgBgHAIg");
	this.shape_11.setTransform(113.1,30.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AD7C01").s().p("AgeAfQgNgNAAgRQAAgMAHgLQAGgKALgGQALgFANAAQAMAAAKAEQAKAGAHAJIgSAKQgFgGgFgCQgFgCgGAAQgLAAgIAIQgHAGAAALQAAAKAHAIQAHAGALAAQAOAAAIgKIARAMQgOARgZABQgVAAgNgOg");
	this.shape_12.setTransform(102.8,30.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AD7C01").s().p("AgeAfQgNgNAAgRQAAgMAHgLQAGgKALgGQALgFANAAQAMAAAKAEQAKAGAHAJIgSAKQgFgGgFgCQgFgCgGAAQgLAAgIAIQgHAGAAALQAAAKAHAIQAHAGALAAQAOAAAIgKIARAMQgOARgZABQgVAAgNgOg");
	this.shape_13.setTransform(92.5,30.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AD7C01").s().p("AAhA5IgJgXIguAAIgKAXIgWAAIAshxIAVAAIAsBxgAgOAMIAeAAIgQgmg");
	this.shape_14.setTransform(81.6,28.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AD7C01").s().p("AAQA7IAAglIgBgVQgBgEgEgCQgDgDgFAAQgFAAgFAFQgFADgBAHQgCAEAAAOIAAAiIgVAAIAAh1IAVAAIAAApQAHgFAGgDQAFgCAHAAQANAAAJAIQAGAIAAAOIAAA4g");
	this.shape_15.setTransform(66.4,28.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AD7C01").s().p("AgeAfQgNgNAAgRQAAgMAHgLQAGgKALgGQALgFANAAQAMAAAKAEQAKAGAHAJIgSAKQgFgGgFgCQgFgCgGAAQgLAAgIAIQgHAGAAALQAAAKAHAIQAHAGALAAQAOAAAIgKIARAMQgOARgZABQgVAAgNgOg");
	this.shape_16.setTransform(56.3,30.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AD7C01").s().p("AgJA8IAAhUIAUAAIAABUgAgIgkQgFgEAAgFQAAgGAFgEQAEgEAEAAQAGAAAEAEQAEAEgBAGQABAGgEADQgEAEgFABQgGgBgDgEg");
	this.shape_17.setTransform(49.4,28.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AD7C01").s().p("AgWArIAAhTIASAAIAAAKQADgGAEgDQAFgDAGAAQAEAAAFACIgHASIgGgCQgFAAgDAGQgDAGAAARIAAAEIAAAig");
	this.shape_18.setTransform(45.2,30.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AD7C01").s().p("AAQArIAAglQAAgOgBgFQgBgFgEgDQgDgCgFAAQgFAAgFAEQgFAFgBAHQgCAEAAANIAAAhIgVAAIAAhTIAVAAIAAAJQAIgHAGgCQAEgCAHAAQANgBAJAJQAGAIAAAOIAAA3g");
	this.shape_19.setTransform(37.6,30.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AD7C01").s().p("AgfA5IAAhxIA+AAIAAAVIgnAAIAAAVIAnAAIAAAUIgnAAIAAAeIAnAAIAAAVg");
	this.shape_20.setTransform(28.9,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFBB15").s().p("Eg+/AHsIAAvXMB9/AAAIAAPXg");
	this.shape_21.setTransform(403.2,49.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AD7C01").s().p("Eg7ZABcIjmi3MB9/AAAIjhC3g");
	this.shape_22.setTransform(403.2,107.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.yellowbar, new cjs.Rectangle(0,0,806.4,116.8), null);


(lib.window_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.window();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.window_1, new cjs.Rectangle(0,0,124,180), null);


(lib.visitwebsite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.browser();
	this.instance.parent = this;
	this.instance.setTransform(0,6);

	this.instance_1 = new lib.browser2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#994D00").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape.setTransform(180.8,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#994D00").s().p("AgOBJIAAhTIgNAAIAAgWIANAAIAAgoIAaAAIAAAoIAQAAIAAAWIgQAAIAABTg");
	this.shape_1.setTransform(171.5,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#994D00").s().p("AgNBLIAAhpIAaAAIAABpgAgLgsQgFgFAAgIQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_2.setTransform(166,14.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#994D00").s().p("AglAmIARgSQAEAFAHAEQAGADAEAAQAFAAADgCQAEgDAAgDQAAgGgMgGIgIgFQgagMAAgTQAAgNAKgJQAKgJAOAAQAKAAAJAFQAJAEAHAJIgRAQQgKgKgIAAQgDAAgDACQgDACAAADQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAIAHAFIAKAFQAPAHAGAHQAGAIAAALQAAAOgLAKQgKAJgRAAQgXAAgOgSg");
	this.shape_3.setTransform(159.1,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#994D00").s().p("AgMBIQgIgEgHgGIAAALIgbAAIAAiTIAbAAIAAA1QAGgIAJgDQAJgEAIABQAVAAAOAPQAPAQAAAYQAAAYgPAPQgPAQgVAAQgIAAgIgDgAgUgDQgIAIAAAOQAAAOAIAJQAIAJAMAAQAMAAAIgJQAIgJAAgNQAAgOgIgIQgIgJgMAAQgMAAgIAIg");
	this.shape_4.setTransform(148.5,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#994D00").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_5.setTransform(135.2,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#994D00").s().p("AAWA1IgWg7IgXA7IgQAAIgmhpIAaAAIAVA7IAXg7IAPAAIAWA6IAWg6IAaAAIgnBpg");
	this.shape_6.setTransform(120.8,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#994D00").s().p("AgcA3IAAhpIAXAAIAAAMQAEgIAFgEQAGgDAIAAQAFAAAGADIgJAWQgEgCgEAAQgGAAgEAHQgDAIAAAVIAAAFIAAAsg");
	this.shape_7.setTransform(104.4,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#994D00").s().p("AgbAvQgLgIgFgOQgCgKAAgYIAAgsIAbAAIAAAzQAAAOACAFQACAGAEADQAEAEAHAAQAGAAAEgDQAFgEADgGQABgEAAgOIAAg0IAaAAIAAAtQAAAagDALQgGAMgKAHQgLAGgQAAQgRAAgKgHg");
	this.shape_8.setTransform(94.8,16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#994D00").s().p("AgmAoQgRgRABgXQAAgYASgQQAPgPAVAAQAOAAANAIQAOAHAHANQAIANgBAOQABAPgIANQgHANgNAIQgNAHgPAAQgXAAgPgQgAgUgVQgIAJAAAMQAAAOAIAJQAIAIAMAAQAMAAAIgJQAJgIAAgOQAAgNgJgIQgIgJgMAAQgLAAgJAJg");
	this.shape_9.setTransform(82.4,16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#994D00").s().p("AgNBJIAAhTIgOAAIAAgWIAOAAIAAgoIAaAAIAAAoIAPAAIAAAWIgPAAIAABTg");
	this.shape_10.setTransform(67.5,14.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#994D00").s().p("AgMBLIAAhpIAZAAIAABpgAgLgsQgFgFAAgIQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_11.setTransform(62,14.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#994D00").s().p("AglAmIARgSQAEAFAHAEQAGADAEAAQAFAAADgCQAEgDAAgDQAAgGgMgGIgIgFQgagMAAgTQAAgNAKgJQAKgJAOAAQAKAAAJAFQAJAEAHAJIgRAQQgKgKgIAAQgDAAgDACQgDACAAADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAHAFIAKAFQAPAHAGAHQAGAIAAALQAAAOgLAKQgKAJgRAAQgXAAgOgSg");
	this.shape_12.setTransform(55.1,16.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#994D00").s().p("AgMBLIAAhpIAZAAIAABpgAgLgsQgFgFAAgIQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_13.setTransform(48.4,14.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#994D00").s().p("AgNBIIgyiPIAcAAIAjBlIAlhlIAcAAIg0CPg");
	this.shape_14.setTransform(39,14.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_15.setTransform(180.8,16.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOBJIAAhTIgNAAIAAgWIANAAIAAgoIAaAAIAAAoIAQAAIAAAWIgQAAIAABTg");
	this.shape_16.setTransform(171.5,14.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgNBLIAAhpIAaAAIAABpgAgLgsQgFgFAAgIQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_17.setTransform(166,14.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglAmIARgSQAEAFAHAEQAGADAEAAQAFAAADgCQAEgDAAgDQAAgGgMgGIgIgFQgagMAAgTQAAgNAKgJQAKgJAOAAQAKAAAJAFQAJAEAHAJIgRAQQgKgKgIAAQgDAAgDACQgDACAAADQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAIAHAFIAKAFQAPAHAGAHQAGAIAAALQAAAOgLAKQgKAJgRAAQgXAAgOgSg");
	this.shape_18.setTransform(159.1,16.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMBIQgIgEgHgGIAAALIgbAAIAAiTIAbAAIAAA1QAGgIAJgDQAJgEAIABQAVAAAOAPQAPAQAAAYQAAAYgPAPQgPAQgVAAQgIAAgIgDgAgUgDQgIAIAAAOQAAAOAIAJQAIAJAMAAQAMAAAIgJQAIgJAAgNQAAgOgIgIQgIgJgMAAQgMAAgIAIg");
	this.shape_19.setTransform(148.5,14.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_20.setTransform(135.2,16.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAWA1IgWg7IgXA7IgQAAIgmhpIAaAAIAVA7IAXg7IAPAAIAWA6IAWg6IAaAAIgnBpg");
	this.shape_21.setTransform(120.8,16.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgcA3IAAhpIAXAAIAAAMQAEgIAFgEQAGgDAIAAQAFAAAGADIgJAWQgEgCgEAAQgGAAgEAHQgDAIAAAVIAAAFIAAAsg");
	this.shape_22.setTransform(104.4,16.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbAvQgLgIgFgOQgCgKAAgYIAAgsIAbAAIAAAzQAAAOACAFQACAGAEADQAEAEAHAAQAGAAAEgDQAFgEADgGQABgEAAgOIAAg0IAaAAIAAAtQAAAagDALQgGAMgKAHQgLAGgQAAQgRAAgKgHg");
	this.shape_23.setTransform(94.8,16.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgmAoQgRgRABgXQAAgYASgQQAPgPAVAAQAOAAANAIQAOAHAHANQAIANgBAOQABAPgIANQgHANgNAIQgNAHgPAAQgXAAgPgQgAgUgVQgIAJAAAMQAAAOAIAJQAIAIAMAAQAMAAAIgJQAJgIAAgOQAAgNgJgIQgIgJgMAAQgLAAgJAJg");
	this.shape_24.setTransform(82.4,16.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNBJIAAhTIgOAAIAAgWIAOAAIAAgoIAaAAIAAAoIAPAAIAAAWIgPAAIAABTg");
	this.shape_25.setTransform(67.5,14.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgMBLIAAhpIAZAAIAABpgAgLgsQgFgFAAgIQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_26.setTransform(62,14.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AglAmIARgSQAEAFAHAEQAGADAEAAQAFAAADgCQAEgDAAgDQAAgGgMgGIgIgFQgagMAAgTQAAgNAKgJQAKgJAOAAQAKAAAJAFQAJAEAHAJIgRAQQgKgKgIAAQgDAAgDACQgDACAAADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAHAFIAKAFQAPAHAGAHQAGAIAAALQAAAOgLAKQgKAJgRAAQgXAAgOgSg");
	this.shape_27.setTransform(55.1,16.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMBLIAAhpIAZAAIAABpgAgLgsQgFgFAAgIQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_28.setTransform(48.4,14.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNBIIgyiPIAcAAIAjBlIAlhlIAcAAIg0CPg");
	this.shape_29.setTransform(39,14.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#994D00").s().p("Au8CLIAAkVId5AAIAAEVg");
	this.shape_30.setTransform(94,13.9,1.039,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_30}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189.4,28.3);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.username = new cjs.Text("MR BROWN", "60px 'Century Gothic'", "#FFFFFF");
	this.username.name = "username";
	this.username.textAlign = "center";
	this.username.lineHeight = 73;
	this.username.lineWidth = 745;
	this.username.parent = this;
	this.username.setTransform(0,-35.7);

	this.timeline.addTween(cjs.Tween.get(this.username).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.4,-37.7,748.9,75.5);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AD7C01").s().p("AhRHkQgigiABgwQgBgwAighQAigiAvAAQAvAAAjAiQAhAhAAAwQAAAvghAjQgjAigvAAQgvAAgigigAhdDOIAArSIC6AAIAALSg");
	this.shape.setTransform(194.8,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AD7C01").s().p("AlvFuQiTiaAAjUQAAiOBEh3QBFh3B5hFQB4hHCKABQDSgBCXCZQCYCYAADaQAADZiWCWQiUCWjVAAQjfAAiUiagAjnjvQhdBgAACSQAAClB2BfQBbBLB3AAQCGAABehhQBehhAAiOQAAiNhfhiQhfhiiIAAQiJAAheBgg");
	this.shape_1.setTransform(117.5,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AD7C01").s().p("AjnHwIAAveIC9AAIAAMqIESAAIAAC0g");
	this.shape_2.setTransform(33.4,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AD7C01").s().p("AjnHwIAAveIC9AAIAAMqIESAAIAAC0g");
	this.shape_3.setTransform(-27.3,3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AD7C01").s().p("AkOHwIAAveIIcAAIAAC4IlhAAIAACzIFhAAIAAC0IlhAAIAAEFIFhAAIAAC6g");
	this.shape_4.setTransform(-95.1,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AD7C01").s().p("ACmHwIAAmzIlKAAIAAGzIi/AAIAAveIC/AAIAAF1IFKAAIAAl1IC+AAIAAPeg");
	this.shape_5.setTransform(-180.5,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.4,-85.6,459,171.3);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AD7C01").s().p("AhRHkQgigiABgwQgBgwAighQAigiAvAAQAvAAAjAiQAhAhAAAwQAAAvghAjQgjAigvAAQgvAAgigigAhdDOIAArSIC6AAIAALSg");
	this.shape.setTransform(194.8,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AD7C01").s().p("AlvFuQiTiaAAjUQAAiOBEh3QBFh3B5hFQB4hHCKABQDSgBCXCZQCYCYAADaQAADZiWCWQiUCWjVAAQjfAAiUiagAjnjvQhdBgAACSQAAClB2BfQBbBLB3AAQCGAABehhQBehhAAiOQAAiNhfhiQhfhiiIAAQiJAAheBgg");
	this.shape_1.setTransform(117.5,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AD7C01").s().p("AjnHwIAAveIC9AAIAAMqIESAAIAAC0g");
	this.shape_2.setTransform(33.4,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AD7C01").s().p("AjnHwIAAveIC9AAIAAMqIESAAIAAC0g");
	this.shape_3.setTransform(-27.3,3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AD7C01").s().p("AkOHwIAAveIIcAAIAAC4IlhAAIAACzIFhAAIAAC0IlhAAIAAEFIFhAAIAAC6g");
	this.shape_4.setTransform(-95.1,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AD7C01").s().p("ACmHwIAAmzIlKAAIAAGzIi/AAIAAveIC/AAIAAF1IFKAAIAAl1IC+AAIAAPeg");
	this.shape_5.setTransform(-180.5,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.4,-85.6,459,171.3);


(lib.thumb_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.thumb();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.thumb_1, new cjs.Rectangle(0,0,228,289), null);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#994D00").s().p("AgHAIQgDgEAAgEQAAgDADgDQAEgEADAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgDAAgEgDg");
	this.shape.setTransform(440.7,63.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#994D00").s().p("AgkAjQgMgPAAgUQAAgRALgOQAOgSAXAAQAYAAAOASQALANABATIhWAAQABARAKAKQAKALAPAAQAHAAAHgDQAHgCAEgEQAFgFAFgJIALAFQgFAKgGAHQgIAGgIADQgIADgLAAQgWAAgOgPgAgYgdQgHAHgEANIBGAAQgBgKgGgFQgEgGgIgEQgIgEgIAAQgNAAgLAJg");
	this.shape_1.setTransform(432.2,59.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#994D00").s().p("AgPAvQgIgEgFgGIAIgJQAKALAKAAQAHAAAFgFQAFgFAAgGQAAgGgDgEQgEgEgLgGQgNgGgFgGQgEgHAAgIQAAgLAHgHQAIgHAKAAQANAAAOANIgIAIQgKgKgKAAQgFAAgEAEQgEAEAAAFQAAAFADAEQAEAFAKAFQAOAGAFAHQAFAHAAAIQAAAMgJAIQgIAIgMAAQgIAAgHgDg");
	this.shape_2.setTransform(422.6,59.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#994D00").s().p("AgiAkQgPgPAAgVQAAgUAPgPQAOgOAUAAQALAAAKAFQAJAFAIAKIAAgSIAMAAIAABfIgMAAIAAgRQgIAKgKAEQgJAFgLAAQgUAAgOgOgAgRggQgJAFgFAJQgFAJAAAJQAAAKAFAJQAFAKAJAFQAIAFAKAAQAKAAAJgFQAJgFAFgJQAEgJAAgLQAAgPgLgLQgKgLgQAAQgKAAgIAFg");
	this.shape_3.setTransform(412.9,59.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#994D00").s().p("AgkAjQgNgPABgUQgBgRAMgOQAOgSAXAAQAYAAAPASQAKANABATIhWAAQABARAKAKQAKALAPAAQAGAAAIgDQAGgCAFgEQAFgFAFgJIALAFQgFAKgHAHQgGAGgJADQgIADgLAAQgWAAgOgPgAgXgdQgIAHgEANIBGAAQgBgKgGgFQgEgGgIgEQgIgEgIAAQgOAAgJAJg");
	this.shape_4.setTransform(401.2,59.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#994D00").s().p("AAeBCIAAgtQAAgRgCgEQgCgKgGgFQgGgEgKAAQgKAAgJAHQgJAHgCAKQgCAHAAATIAAAjIgNAAIAAiDIANAAIAAA2QAHgKAJgFQAJgFAKAAQAKAAAJAGQAIAFAEAJQAEAJAAATIAAAxg");
	this.shape_5.setTransform(384.9,57.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#994D00").s().p("AgHBCIAAhVIgQAAIAAgKIAQAAIAAgkIAMAAIAAAkIATAAIAAAKIgTAAIAABVg");
	this.shape_6.setTransform(376.5,57.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#994D00").s().p("AgFBEIAAhfIALAAIAABfgAgGgxQgDgDAAgEQAAgFADgCQADgDADAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_7.setTransform(371.5,57.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#994D00").s().p("AAeAwIgehEIgeBEIgDAAIgohfIAMAAIAeBFIAfhFIAAAAIAfBFIAehFIANAAIgpBfg");
	this.shape_8.setTransform(362.2,59.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#994D00").s().p("AgPAvQgIgEgFgGIAIgJQAKALAKAAQAHAAAFgFQAFgFAAgGQAAgGgDgEQgEgEgLgGQgNgGgFgGQgEgHAAgIQAAgLAHgHQAIgHAKAAQANAAAOANIgIAIQgKgKgKAAQgFAAgEAEQgEAEAAAFQAAAFADAEQAEAFAKAFQAOAGAFAHQAFAHAAAIQAAAMgJAIQgIAIgMAAQgIAAgHgDg");
	this.shape_9.setTransform(346,59.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#994D00").s().p("AgXAxIAAhfIAMAAIAAAOQAGgIAFgEQAGgEAHAAQAFAAAGADIgGALIgHgCQgGAAgFAFQgFAFgDALQgDAIAAAXIAAAhg");
	this.shape_10.setTransform(340.6,59.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#994D00").s().p("AgjAjQgOgPAAgUQAAgRAMgOQAOgSAXAAQAYAAAOASQALANAAATIhVAAQABARAKAKQAKALAPAAQAGAAAHgDQAHgCAGgEQAEgFAGgJIAKAFQgFAKgGAHQgHAGgJADQgIADgKAAQgXAAgNgPgAgYgdQgHAHgDANIBGAAQgDgKgEgFQgFgGgIgEQgHgEgJAAQgNAAgLAJg");
	this.shape_11.setTransform(331.5,59.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#994D00").s().p("AgJBEIAAhVIgNAAIAAgKIANAAIAAgPQAAgLABgDQADgFAEgDQAEgCAGAAQAFAAAJACIAAAMQgHgDgFAAQgDAAgCACQgBAAgBAAQAAABgBAAQAAABAAAAQAAABgBAAIAAAKIAAANIAUAAIAAAKIgUAAIAABVg");
	this.shape_12.setTransform(323.1,57.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#994D00").s().p("AgJBEIAAhVIgNAAIAAgKIANAAIAAgPQAAgLACgDQACgFAEgDQADgCAHAAQAGAAAIACIAAAMQgHgDgEAAQgEAAgDACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABgBAAIAAAKIAAANIAUAAIAAAKIgUAAIAABVg");
	this.shape_13.setTransform(317.5,57.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#994D00").s().p("AgjAjQgOgPAAgUQAAgTANgOQAPgQAVAAQAWAAAPAQQANAOAAATQAAAUgOAPQgOAPgWAAQgVAAgOgPgAgZgaQgLALAAAPQAAALAEAJQAGAJAIAFQAJAFAJAAQAKAAAJgFQAJgFAEgJQAGgJgBgLQABgPgLgLQgMgLgPAAQgOAAgLALg");
	this.shape_14.setTransform(308.6,59.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#994D00").s().p("AAeAxIAAguQAAgPgCgFQgCgKgGgFQgGgFgKAAQgKABgJAGQgJAIgCALQgCAHAAASIAAAjIgNAAIAAhfIANAAIAAARQAHgJAJgFQAJgFAKAAQAKAAAJAGQAIAFAEAJQAEAKAAASIAAAxg");
	this.shape_15.setTransform(292.2,59.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#994D00").s().p("AgjAjQgOgPAAgUQAAgTANgOQAPgQAVAAQAWAAAOAQQAOAOAAATQAAAUgOAPQgOAPgWAAQgVAAgOgPgAgZgaQgMALABAPQAAALAEAJQAGAJAIAFQAJAFAJAAQAKAAAJgFQAIgFAGgJQAEgJAAgLQABgPgLgLQgMgLgPAAQgOAAgLALg");
	this.shape_16.setTransform(280.8,59.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#994D00").s().p("AgFBEIAAhfIALAAIAABfgAgGgxQgDgDAAgEQAAgFADgCQADgDADAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_17.setTransform(273.1,57.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#994D00").s().p("AgHBCIAAhVIgRAAIAAgKIARAAIAAgkIAMAAIAAAkIAUAAIAAAKIgUAAIAABVg");
	this.shape_18.setTransform(268.4,57.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#994D00").s().p("AgxBCIAAiBIAMAAIAAASQAIgKAJgGQAKgEAKAAQAVAAAOAOQAPAPAAAUQAAAVgPAOQgOAPgUAAQgLAAgJgFQgKgFgIgJIAAAzgAgbgrQgKAMAAAQQAAALAEAHQAFAKAJAFQAJAEAKABQAJgBAJgEQAJgFAFgKQAFgIAAgKQAAgKgFgKQgFgJgJgEQgIgGgKAAQgQAAgLALg");
	this.shape_19.setTransform(259.2,61.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#994D00").s().p("AA7AxIAAgzQAAgQgCgFQgDgGgFgDQgFgEgHAAQgJAAgHAFQgIAFgDAJQgEAJAAAUIAAAlIgLAAIAAgxQAAgRgCgGQgCgFgGgEQgFgEgIAAQgIAAgHAFQgIAFgEAJQgDAIAAASIAAAoIgMAAIAAhfIAMAAIAAARQAHgJAGgEQAKgGAKAAQAGAAAHACQAGADAEAFQADAFADAIQAGgLAKgGQAIgGALAAQAKAAAIAFQAHAFAEAJQAEAJAAASIAAAzg");
	this.shape_20.setTransform(244.5,59.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#994D00").s().p("AgjAjQgNgPgBgUQABgRAKgOQAPgSAXAAQAYAAAPASQAKANAAATIhVAAQABARAKAKQAKALAPAAQAHAAAGgDQAIgCAFgEQAEgFAGgJIAKAFQgFAKgGAHQgIAGgHADQgJADgKAAQgXAAgNgPgAgYgdQgHAHgDANIBGAAQgCgKgFgFQgFgGgIgEQgIgEgIAAQgNAAgLAJg");
	this.shape_21.setTransform(230.2,59.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#994D00").s().p("AgiA1QgPgPAAgVQAAgTAPgPQAOgPAUAAQAMAAAJAFQAKAFAHAKIAAg3IAMAAIAACEIgMAAIAAgRQgIAKgKAFQgJAEgLAAQgUAAgOgOgAgRgPQgJAFgFAJQgFAIAAALQAAAKAFAJQAFAJAJAFQAJAFAJAAQAKAAAJgFQAJgFAFgJQAFgIAAgLQAAgRgLgKQgLgLgQAAQgKAAgIAFg");
	this.shape_22.setTransform(217.9,57.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#994D00").s().p("AgjAjQgNgPAAgUQAAgRALgOQAOgSAXAAQAYAAAOASQALANABATIhWAAQAAARALAKQAKALAPAAQAHAAAHgDQAHgCAFgEQAEgFAFgJIALAFQgFAKgGAHQgIAGgIADQgIADgLAAQgWAAgNgPgAgYgdQgHAHgEANIBGAAQgBgKgGgFQgEgGgIgEQgIgEgIAAQgOAAgKAJg");
	this.shape_23.setTransform(206.2,59.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#994D00").s().p("AgXAxIAAhfIAMAAIAAAOQAGgIAFgEQAGgEAHAAQAFAAAGADIgGALIgHgCQgGAAgFAFQgFAFgDALQgDAIAAAXIAAAhg");
	this.shape_24.setTransform(198.2,59.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#994D00").s().p("AgiA1QgPgPAAgVQAAgTAPgPQAOgPAUAAQAMAAAJAFQAKAFAHAKIAAg3IAMAAIAACEIgMAAIAAgRQgIAKgKAFQgJAEgLAAQgUAAgOgOgAgRgPQgJAFgFAJQgFAIAAALQAAAKAFAJQAFAJAJAFQAJAFAJAAQAKAAAJgFQAJgFAFgJQAFgIAAgLQAAgRgLgKQgLgLgQAAQgKAAgIAFg");
	this.shape_25.setTransform(183.5,57.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#994D00").s().p("AAeAxIAAguQAAgPgCgFQgCgKgGgFQgGgFgKAAQgKABgJAGQgJAIgCALQgCAHAAASIAAAjIgNAAIAAhfIANAAIAAARQAHgJAJgFQAJgFAKAAQAKAAAJAGQAIAFAEAJQAEAKAAASIAAAxg");
	this.shape_26.setTransform(172.1,59.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#994D00").s().p("AgiAkQgPgPAAgVQAAgUAPgPQAOgOAUAAQALAAAKAFQAJAFAIAKIAAgSIAMAAIAABfIgMAAIAAgRQgIAKgKAEQgJAFgLAAQgUAAgOgOgAgRggQgJAFgFAJQgFAJAAAJQAAAKAFAJQAFAKAJAFQAIAFAKAAQAKAAAJgFQAJgFAFgJQAEgJAAgLQAAgPgLgLQgKgLgQAAQgKAAgIAFg");
	this.shape_27.setTransform(160.2,59.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#994D00").s().p("AgPAvQgIgEgFgGIAIgJQAKALAKAAQAHAAAFgFQAFgFAAgGQAAgGgDgEQgEgEgLgGQgNgGgFgGQgEgHAAgIQAAgLAHgHQAIgHAKAAQANAAAOANIgIAIQgKgKgKAAQgFAAgEAEQgEAEAAAFQAAAFADAEQAEAFAKAFQAOAGAFAHQAFAHAAAIQAAAMgJAIQgIAIgMAAQgIAAgHgDg");
	this.shape_28.setTransform(145.6,59.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#994D00").s().p("AgFBCIAAiDIALAAIAACDg");
	this.shape_29.setTransform(140.5,57.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#994D00").s().p("AgFBEIAAhfIALAAIAABfgAgGgxQgDgDAAgEQAAgFADgCQADgDADAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_30.setTransform(136.9,57.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#994D00").s().p("AgiAkQgPgPAAgVQAAgUAPgPQAOgOAUAAQALAAAKAFQAJAFAIAKIAAgSIAMAAIAABfIgMAAIAAgRQgIAKgKAEQgJAFgLAAQgUAAgOgOgAgRggQgJAFgFAJQgFAJAAAJQAAAKAFAJQAFAKAJAFQAIAFAKAAQAKAAAJgFQAJgFAFgJQAEgJAAgLQAAgPgLgLQgKgLgQAAQgKAAgIAFg");
	this.shape_31.setTransform(128.7,59.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#994D00").s().p("AgHBCIAAhVIgRAAIAAgKIARAAIAAgkIAMAAIAAAkIAUAAIAAAKIgUAAIAABVg");
	this.shape_32.setTransform(119.9,57.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#994D00").s().p("AgkAjQgMgPAAgUQAAgRALgOQAOgSAXAAQAYAAAOASQALANABATIhWAAQABARAKAKQAKALAPAAQAHAAAHgDQAHgCAFgEQAEgFAFgJIALAFQgFAKgHAHQgHAGgIADQgIADgLAAQgWAAgOgPgAgYgdQgHAHgEANIBGAAQgBgKgGgFQgEgGgIgEQgIgEgIAAQgNAAgLAJg");
	this.shape_33.setTransform(110.9,59.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#994D00").s().p("AgiA1QgPgPAAgVQAAgTAPgPQAOgPAUAAQAMAAAJAFQAKAFAHAKIAAg3IAMAAIAACEIgMAAIAAgRQgIAKgKAFQgJAEgLAAQgUAAgOgOgAgRgPQgJAFgFAJQgFAIAAALQAAAKAFAJQAFAJAJAFQAJAFAJAAQAKAAAJgFQAJgFAFgJQAFgIAAgLQAAgRgLgKQgLgLgQAAQgKAAgIAFg");
	this.shape_34.setTransform(98.6,57.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#994D00").s().p("AgHBCIAAhVIgRAAIAAgKIARAAIAAgkIAMAAIAAAkIAUAAIAAAKIgUAAIAABVg");
	this.shape_35.setTransform(84.8,57.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#994D00").s().p("AAeAxIAAguQAAgPgCgFQgCgKgGgFQgGgFgKAAQgKABgJAGQgJAIgCALQgCAHAAASIAAAjIgNAAIAAhfIANAAIAAARQAHgJAJgFQAJgFAKAAQAKAAAJAGQAIAFAEAJQAEAKAAASIAAAxg");
	this.shape_36.setTransform(76.1,59.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#994D00").s().p("AgWArQgKgFgEgLQgFgJAAgUIAAguIAMAAIAAAtQAAAPACAGQADAJAIAFQAGAFAKAAQAKAAAIgFQAHgFADgIQABgFAAgRIAAgtIANAAIAAAvQAAATgFAJQgEALgKAFQgJAGgOAAQgNAAgJgGg");
	this.shape_37.setTransform(65,59.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#994D00").s().p("AgjAjQgOgPAAgUQAAgTANgOQAPgQAVAAQAWAAAOAQQAOAOAAATQAAAUgOAPQgOAPgWAAQgVAAgOgPgAgagaQgLALABAPQgBALAGAJQAEAJAJAFQAIAFAKAAQAKAAAIgFQAJgFAGgJQAEgJAAgLQAAgPgLgLQgLgLgPAAQgOAAgMALg");
	this.shape_38.setTransform(53.7,59.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#994D00").s().p("AghAkQgPgPAAgUQAAgNAIgMQAGgMANgHQAMgGAOAAQAJAAAJADQAJACAGAFQAGAFAFAHIgKAGQgNgRgWAAQgQAAgMAMQgLALAAAPQAAAKAFAJQAGAKAJAFQAJAFALAAQAVAAANgRIAKAHQgHAKgMAFQgLAGgPAAQgWAAgPgOg");
	this.shape_39.setTransform(41.9,59.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#994D00").s().p("AghAkQgPgPAAgUQAAgNAIgMQAGgMANgHQAMgGAOAAQAJAAAJADQAJACAGAFQAGAFAFAHIgKAGQgNgRgWAAQgQAAgMAMQgLALAAAPQAAAKAFAJQAGAKAJAFQAJAFALAAQAVAAANgRIAKAHQgHAKgMAFQgLAGgPAAQgWAAgPgOg");
	this.shape_40.setTransform(30.3,59.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#994D00").s().p("AgiAkQgPgPAAgVQAAgUAPgPQAOgOAUAAQALAAAKAFQAJAFAIAKIAAgSIAMAAIAABfIgMAAIAAgRQgIAKgKAEQgJAFgLAAQgUAAgOgOgAgRggQgJAFgFAJQgFAJAAAJQAAAKAFAJQAFAKAJAFQAIAFAKAAQAKAAAJgFQAJgFAFgJQAEgJAAgLQAAgPgLgLQgKgLgQAAQgKAAgIAFg");
	this.shape_41.setTransform(18.1,59.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#994D00").s().p("AgXAxIAAhfIAMAAIAAAPQAGgJAFgEQAGgEAHAAQAFAAAGADIgGAKIgHgBQgGAAgFAFQgFAFgDAKQgDAJAAAYIAAAgg");
	this.shape_42.setTransform(421.7,37.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#994D00").s().p("AgWAsQgKgHgEgKQgFgJAAgUIAAguIAMAAIAAAsQAAAQACAGQADAJAIAFQAGAFAKAAQAKAAAIgFQAHgFADgIQABgFAAgSIAAgsIANAAIAAAvQAAATgFAJQgEAKgKAHQgJAFgOAAQgNAAgJgFg");
	this.shape_43.setTransform(412.9,37.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#994D00").s().p("AgjAjQgOgPAAgUQAAgTANgOQAPgQAVAAQAWAAAOAQQAOAOAAATQAAAUgOAPQgOAPgWAAQgVAAgOgPgAgagaQgLALAAAPQAAALAGAJQAEAJAJAFQAIAFAKAAQAKAAAIgFQAJgFAGgJQAEgJAAgLQAAgPgLgLQgLgLgPAAQgOAAgMALg");
	this.shape_44.setTransform(401.6,37.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#994D00").s().p("AgYBBIASgqIgmhXIAMAAIAhBIIAfhIIAOAAIg4CBg");
	this.shape_45.setTransform(390.9,38.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#994D00").s().p("AAWBCIgwgrIAAArIgMAAIAAiDIAMAAIAABKIArglIATAAIg0AsIA3Ayg");
	this.shape_46.setTransform(377.3,35.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#994D00").s().p("AghAkQgPgPAAgUQAAgNAIgMQAGgMANgHQAMgGAOAAQAJAAAJADQAJACAGAFQAGAFAFAHIgKAGQgNgRgWAAQgQAAgMAMQgLALAAAPQAAAKAFAJQAGAKAJAFQAJAFALAAQAVAAANgRIAKAHQgHAKgMAFQgLAGgPAAQgWAAgPgOg");
	this.shape_47.setTransform(366.1,37.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#994D00").s().p("AgjAjQgOgPAAgUQAAgRAMgOQAOgSAXAAQAYAAAOASQALANAAATIhVAAQAAARALAKQAKALAPAAQAGAAAHgDQAHgCAGgEQAEgFAGgJIAKAFQgFAKgGAHQgIAGgIADQgIADgKAAQgXAAgNgPgAgYgdQgHAHgEANIBHAAQgDgKgFgFQgEgGgIgEQgHgEgJAAQgOAAgKAJg");
	this.shape_48.setTransform(354.6,37.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#994D00").s().p("AAeBCIAAgtQAAgRgCgEQgCgKgGgFQgGgEgKAAQgKAAgJAHQgJAHgCAKQgCAHAAATIAAAjIgNAAIAAiDIANAAIAAA2QAHgKAJgFQAJgFAKAAQAKAAAJAGQAIAFAEAJQAEAJAAATIAAAxg");
	this.shape_49.setTransform(343.2,35.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#994D00").s().p("AghAkQgPgPAAgUQAAgNAIgMQAGgMANgHQAMgGAOAAQAJAAAJADQAJACAGAFQAGAFAFAHIgKAGQgNgRgWAAQgQAAgMAMQgLALAAAPQAAAKAFAJQAGAKAJAFQAJAFALAAQAVAAANgRIAKAHQgHAKgMAFQgLAGgPAAQgWAAgPgOg");
	this.shape_50.setTransform(331.8,37.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#994D00").s().p("AgjAjQgOgPAAgUQAAgTANgOQAPgQAVAAQAWAAAOAQQAOAOAAATQAAAUgOAPQgOAPgWAAQgVAAgOgPgAgagaQgLALAAAPQAAALAGAJQAEAJAJAFQAIAFAKAAQAKAAAIgFQAJgFAGgJQAEgJAAgLQAAgPgLgLQgLgLgPAAQgOAAgMALg");
	this.shape_51.setTransform(315.2,37.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#994D00").s().p("AgGBBIAAhTIgRAAIAAgLIARAAIAAgjIALAAIAAAjIATAAIAAALIgTAAIAABTg");
	this.shape_52.setTransform(306.4,35.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#994D00").s().p("AgWAsQgKgHgEgKQgFgJAAgUIAAguIAMAAIAAAsQAAAQACAGQADAJAIAFQAGAFAKAAQAKAAAIgFQAGgFAEgIQABgFAAgSIAAgsIANAAIAAAvQAAATgFAJQgEAKgKAHQgJAFgOAAQgNAAgJgFg");
	this.shape_53.setTransform(292.6,37.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#994D00").s().p("AgjAjQgOgPAAgUQAAgTANgOQAPgQAVAAQAWAAAOAQQAOAOAAATQAAAUgOAPQgOAPgWAAQgVAAgOgPgAgagaQgLALABAPQAAALAEAJQAGAJAIAFQAJAFAJAAQAKAAAIgFQAJgFAGgJQAEgJAAgLQABgPgMgLQgLgLgPAAQgPAAgLALg");
	this.shape_54.setTransform(281.3,37.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#994D00").s().p("AgYBBIATgqIgnhXIAMAAIAhBIIAfhIIAOAAIg5CBg");
	this.shape_55.setTransform(270.7,38.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#994D00").s().p("AgPAvQgIgEgFgGIAIgJQAKALAKAAQAHAAAFgFQAFgFAAgGQAAgGgDgEQgEgEgLgGQgNgGgFgGQgEgHAAgIQAAgLAHgHQAIgHAKAAQANAAAOANIgIAIQgKgKgKAAQgFAAgEAEQgEAEAAAFQAAAFADAEQAEAFAKAFQAOAGAFAHQAFAHAAAIQAAAMgJAIQgIAIgMAAQgIAAgHgDg");
	this.shape_56.setTransform(257.1,37.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#994D00").s().p("AgkAjQgNgPABgUQgBgRALgOQAPgSAXAAQAYAAAPASQAKANAAATIhVAAQAAARALAKQAKALAPAAQAGAAAIgDQAHgCAEgEQAFgFAFgJIALAFQgFAKgHAHQgHAGgHADQgJADgKAAQgXAAgOgPgAgXgdQgIAHgDANIBFAAQgCgKgEgFQgFgGgIgEQgHgEgJAAQgNAAgKAJg");
	this.shape_57.setTransform(248,37.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#994D00").s().p("AgFBCIAAiDIALAAIAACDg");
	this.shape_58.setTransform(240.3,35.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#994D00").s().p("AgUA+QgJgFgHgJIAAARIgNAAIAAiDIANAAIAAA1QAHgJAKgGQAJgEALAAQAUAAAPAOQAOAPAAAUQAAAVgPAPQgOAPgUAAQgLAAgKgGgAgTgPQgJAEgEAJQgFAIAAAKQAAASALAKQAKAMAQAAQAKgBAIgFQAJgEAFgKQAFgJAAgKQAAgKgFgJQgFgJgJgEQgIgGgKAAQgJAAgKAGg");
	this.shape_59.setTransform(232.6,35.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#994D00").s().p("AgiAkQgPgPAAgVQAAgUAPgPQAOgOAUAAQALAAAKAFQAJAFAIAKIAAgSIAMAAIAABfIgMAAIAAgRQgIAKgKAEQgJAFgLAAQgUAAgOgOgAgRggQgJAFgFAJQgFAJAAAJQAAAKAFAJQAFAKAJAFQAIAFAKAAQAKAAAJgFQAJgFAFgJQAEgJAAgLQAAgPgLgLQgKgLgQAAQgKAAgIAFg");
	this.shape_60.setTransform(219.8,37.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#994D00").s().p("AAeAxIAAgtQAAgQgCgGQgCgJgGgFQgGgEgKgBQgKAAgJAIQgJAHgCALQgCAHAAASIAAAjIgNAAIAAhfIANAAIAAASQAHgLAJgEQAJgFAKAAQAKAAAJAFQAIAGAEAJQAEAJAAATIAAAxg");
	this.shape_61.setTransform(208.4,37.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#994D00").s().p("AgkAjQgNgPAAgUQAAgRALgOQAPgSAXAAQAYAAAPASQAKANABATIhWAAQAAARALAKQAKALAPAAQAGAAAHgDQAIgCAEgEQAFgFAFgJIALAFQgFAKgHAHQgHAGgHADQgJADgKAAQgXAAgOgPgAgXgdQgIAHgDANIBFAAQgCgKgEgFQgFgGgIgEQgHgEgJAAQgNAAgKAJg");
	this.shape_62.setTransform(197.1,37.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#994D00").s().p("AgGBBIAAhTIgSAAIAAgLIASAAIAAgjIAKAAIAAAjIAUAAIAAALIgUAAIAABTg");
	this.shape_63.setTransform(183.4,35.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#994D00").s().p("AgiAkQgPgPAAgVQAAgUAPgPQAOgOAUAAQALAAAKAFQAJAFAIAKIAAgSIAMAAIAABfIgMAAIAAgRQgIAKgKAEQgJAFgLAAQgUAAgOgOgAgRggQgJAFgFAJQgFAJAAAJQAAAKAFAJQAFAKAJAFQAIAFAKAAQAKAAAJgFQAJgFAFgJQAEgJAAgLQAAgPgLgLQgKgLgQAAQgKAAgIAFg");
	this.shape_64.setTransform(173.8,37.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#994D00").s().p("AAeBCIAAgtQAAgRgCgEQgCgKgGgFQgGgEgKAAQgKAAgJAHQgJAHgCAKQgCAHAAATIAAAjIgNAAIAAiDIANAAIAAA2QAHgKAJgFQAJgFAKAAQAKAAAJAGQAIAFAEAJQAEAJAAATIAAAxg");
	this.shape_65.setTransform(162.4,35.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#994D00").s().p("AgHBBIAAhTIgRAAIAAgLIARAAIAAgjIAMAAIAAAjIAUAAIAAALIgUAAIAABTg");
	this.shape_66.setTransform(154,35.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#994D00").s().p("AgFBCIAAiDIALAAIAACDg");
	this.shape_67.setTransform(144,35.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#994D00").s().p("AgkAjQgNgPAAgUQAAgRALgOQAPgSAXAAQAYAAAPASQAKANABATIhWAAQAAARALAKQAKALAPAAQAGAAAHgDQAIgCAEgEQAFgFAFgJIALAFQgFAKgHAHQgHAGgHADQgJADgKAAQgXAAgOgPgAgXgdQgIAHgDANIBFAAQgCgKgEgFQgFgGgIgEQgHgEgJAAQgNAAgKAJg");
	this.shape_68.setTransform(136.4,37.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#994D00").s().p("AgkAjQgMgPAAgUQAAgRALgOQAOgSAXAAQAYAAAOASQALANABATIhWAAQAAARALAKQAKALAPAAQAHAAAHgDQAHgCAFgEQAEgFAFgJIALAFQgFAKgGAHQgIAGgIADQgIADgLAAQgWAAgOgPgAgYgdQgHAHgEANIBGAAQgBgKgGgFQgEgGgIgEQgHgEgJAAQgOAAgKAJg");
	this.shape_69.setTransform(124.7,37.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#994D00").s().p("AgKBDIAAhTIgMAAIAAgLIAMAAIAAgPQABgKABgFQACgEAFgDQAEgCAGgBQAGABAIACIAAAMQgGgDgGAAQgDAAgCACQgBAAgBAAQAAABgBAAQAAABAAAAQAAAAgBABIAAAKIAAANIAUAAIAAALIgUAAIAABTg");
	this.shape_70.setTransform(116.3,35.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#994D00").s().p("AgiA1QgPgPAAgVQAAgUAPgPQAOgOAUAAQAMAAAJAFQAKAFAHAKIAAg2IAMAAIAACDIgMAAIAAgQQgIAJgKAEQgJAGgLAAQgUAAgOgPgAgRgPQgJAFgFAJQgFAIAAAKQAAALAFAIQAFAKAJAFQAJAFAJAAQAKAAAJgFQAJgFAFgJQAFgJAAgLQAAgQgLgKQgLgLgQAAQgKAAgIAFg");
	this.shape_71.setTransform(101.8,35.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#994D00").s().p("AAeAxIAAgtQAAgQgCgGQgCgJgGgFQgGgEgKgBQgKAAgJAIQgJAHgCALQgCAHAAASIAAAjIgNAAIAAhfIANAAIAAASQAHgLAJgEQAJgFAKAAQAKAAAJAFQAIAGAEAJQAEAJAAATIAAAxg");
	this.shape_72.setTransform(90.4,37.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#994D00").s().p("AgiAkQgPgPAAgVQAAgUAPgPQAOgOAUAAQALAAAKAFQAJAFAIAKIAAgSIAMAAIAABfIgMAAIAAgRQgIAKgKAEQgJAFgLAAQgUAAgOgOgAgRggQgJAFgFAJQgFAJAAAJQAAAKAFAJQAFAKAJAFQAIAFAKAAQAKAAAJgFQAJgFAFgJQAEgJAAgLQAAgPgLgLQgKgLgQAAQgKAAgIAFg");
	this.shape_73.setTransform(78.5,37.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#994D00").s().p("AAVBCIgugrIAAArIgNAAIAAiDIANAAIAABKIArglIASAAIg0AsIA3Ayg");
	this.shape_74.setTransform(63.9,35.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#994D00").s().p("AgjAjQgOgPAAgUQAAgTANgOQAPgQAVAAQAWAAAOAQQAOAOAAATQAAAUgOAPQgOAPgWAAQgVAAgOgPgAgagaQgLALABAPQAAALAEAJQAGAJAIAFQAJAFAJAAQAKAAAIgFQAJgFAGgJQAEgJAAgLQABgPgMgLQgLgLgPAAQgPAAgLALg");
	this.shape_75.setTransform(52.7,37.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#994D00").s().p("AgjAjQgOgPAAgUQAAgTANgOQAPgQAVAAQAWAAAOAQQAOAOAAATQAAAUgOAPQgOAPgWAAQgVAAgOgPgAgZgaQgMALABAPQAAALAEAJQAGAJAIAFQAJAFAJAAQAKAAAJgFQAIgFAGgJQAEgJAAgLQABgPgLgLQgMgLgPAAQgOAAgLALg");
	this.shape_76.setTransform(40.9,37.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#994D00").s().p("AgFBCIAAiDIALAAIAACDg");
	this.shape_77.setTransform(33.2,35.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#994D00").s().p("AAeAwIgehEIgeBEIgDAAIgohfIAMAAIAeBFIAfhFIAAAAIAgBFIAdhFIANAAIgpBfg");
	this.shape_78.setTransform(441.1,14.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#994D00").s().p("AgkAjQgNgPABgUQgBgRALgOQAPgSAXAAQAYAAAPASQAKANABATIhWAAQABARAKAKQAKALAPAAQAGAAAIgDQAGgCAFgEQAFgFAFgJIALAFQgFAKgHAHQgGAGgJADQgIADgLAAQgWAAgOgPgAgXgdQgIAHgEANIBGAAQgBgKgGgFQgEgGgIgEQgIgEgIAAQgOAAgJAJg");
	this.shape_79.setTransform(427.8,14.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#994D00").s().p("AAeAxIAAguQAAgPgCgFQgCgKgGgFQgGgFgKABQgKAAgJAGQgJAIgCALQgCAHAAASIAAAjIgNAAIAAheIANAAIAAAQQAHgJAJgFQAJgFAKAAQAKAAAJAGQAIAFAEAJQAEAKAAASIAAAxg");
	this.shape_80.setTransform(416.4,14.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#994D00").s().p("AgkAjQgMgPAAgUQAAgRALgOQAOgSAXAAQAYAAAOASQALANABATIhWAAQAAARALAKQAKALAPAAQAHAAAHgDQAHgCAFgEQAEgFAFgJIALAFQgFAKgGAHQgIAGgIADQgIADgLAAQgWAAgOgPgAgYgdQgHAHgEANIBGAAQgBgKgGgFQgEgGgIgEQgIgEgIAAQgOAAgKAJg");
	this.shape_81.setTransform(400.1,14.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#994D00").s().p("AAeBCIAAgtQAAgRgCgEQgCgKgGgFQgGgEgKAAQgKAAgJAHQgJAHgCAKQgCAHAAATIAAAjIgNAAIAAiDIANAAIAAA2QAHgKAJgFQAJgFAKAAQAKAAAJAGQAIAFAEAJQAEAJAAATIAAAxg");
	this.shape_82.setTransform(388.8,12.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#994D00").s().p("AgGBCIAAhVIgRAAIAAgKIARAAIAAgkIAKAAIAAAkIAUAAIAAAKIgUAAIAABVg");
	this.shape_83.setTransform(380.4,13);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#994D00").s().p("AgkAjQgMgPAAgUQAAgRALgOQAOgSAXAAQAYAAAOASQALANABATIhWAAQAAARALAKQAKALAPAAQAHAAAHgDQAHgCAFgEQAEgFAFgJIALAFQgFAKgGAHQgIAGgIADQgIADgLAAQgWAAgOgPgAgYgdQgHAHgEANIBGAAQgBgKgGgFQgEgGgIgEQgIgEgIAAQgOAAgKAJg");
	this.shape_84.setTransform(366.4,14.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#994D00").s().p("AghAkQgPgPAAgUQAAgNAIgMQAGgMANgHQAMgGAOAAQAJAAAJADQAJACAGAFQAGAFAFAHIgKAGQgNgRgWAAQgQAAgMAMQgLALAAAPQAAAKAFAJQAGAKAJAFQAJAFALAAQAVAAANgRIAKAHQgHAKgMAFQgLAGgPAAQgWAAgPgOg");
	this.shape_85.setTransform(354.6,14.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#994D00").s().p("AAeAxIAAguQAAgPgCgFQgCgKgGgFQgGgFgKABQgKAAgJAGQgJAIgCALQgCAHAAASIAAAjIgNAAIAAheIANAAIAAAQQAHgJAJgFQAJgFAKAAQAKAAAJAGQAIAFAEAJQAEAKAAASIAAAxg");
	this.shape_86.setTransform(343.4,14.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#994D00").s().p("AgjAjQgOgPAAgUQAAgRAMgOQAOgSAXAAQAYAAAOASQALANAAATIhVAAQAAARALAKQAKALAPAAQAGAAAHgDQAHgCAGgEQAEgFAGgJIAKAFQgFAKgGAHQgIAGgIADQgIADgKAAQgXAAgNgPgAgYgdQgHAHgEANIBHAAQgDgKgFgFQgEgGgIgEQgHgEgJAAQgOAAgKAJg");
	this.shape_87.setTransform(332.1,14.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#994D00").s().p("AgFBEIAAhfIALAAIAABfgAgGgxQgDgDAAgEQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_88.setTransform(324.4,12.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#994D00").s().p("AgXAxIAAheIAMAAIAAANQAGgIAFgEQAGgEAHAAQAFAAAGADIgGALIgHgCQgGAAgFAFQgFAFgDALQgDAIAAAYIAAAgg");
	this.shape_89.setTransform(320.5,14.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#994D00").s().p("AgkAjQgNgPAAgUQAAgRALgOQAPgSAXAAQAYAAAPASQAKANABATIhWAAQAAARALAKQAKALAPAAQAGAAAIgDQAHgCAEgEQAFgFAFgJIALAFQgFAKgHAHQgHAGgHADQgJADgKAAQgXAAgOgPgAgXgdQgIAHgDANIBFAAQgCgKgEgFQgFgGgIgEQgHgEgJAAQgNAAgKAJg");
	this.shape_90.setTransform(311.4,14.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#994D00").s().p("AgxBDIAAiCIAMAAIAAARQAIgJAJgGQAKgEAKAAQAVAAAOAOQAPAPAAAUQAAAVgPAOQgOAPgUAAQgLAAgJgFQgKgEgIgKIAAA0gAgbgrQgKAMAAAQQAAALAEAIQAFAIAJAFQAJAFAKABQAJgBAJgFQAJgEAFgKQAFgIAAgKQAAgKgFgKQgFgIgJgFQgIgGgKAAQgQABgLAKg");
	this.shape_91.setTransform(299.6,16.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#994D00").s().p("AAdAwIgdgoIgcAoIgPAAIAkgyIgggtIAOAAIAZAjIAZgjIAPAAIghAtIAlAyg");
	this.shape_92.setTransform(288.9,14.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#994D00").s().p("AgkAjQgNgPABgUQgBgRALgOQAPgSAXAAQAYAAAPASQAKANABATIhWAAQABARAKAKQAKALAPAAQAHAAAHgDQAGgCAFgEQAFgFAFgJIALAFQgFAKgHAHQgGAGgJADQgIADgLAAQgWAAgOgPgAgXgdQgIAHgEANIBGAAQgBgKgGgFQgEgGgIgEQgIgEgIAAQgOAAgJAJg");
	this.shape_93.setTransform(278.8,14.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#994D00").s().p("AgjAjQgOgPAAgUQAAgTANgOQAPgQAVAAQAWAAAOAQQAOAOAAATQAAAUgOAPQgOAPgWAAQgVAAgOgPgAgagaQgLALAAAPQAAALAGAJQAEAJAJAFQAIAFAKAAQAKAAAIgFQAJgFAGgJQAEgJAAgLQAAgPgLgLQgLgLgPAAQgOAAgMALg");
	this.shape_94.setTransform(262.1,14.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#994D00").s().p("AgGBCIAAhVIgRAAIAAgKIARAAIAAgkIALAAIAAAkIATAAIAAAKIgTAAIAABVg");
	this.shape_95.setTransform(253.3,13);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#994D00").s().p("AAeAwIgehEIgeBEIgCAAIgphfIANAAIAdBFIAehFIACAAIAfBFIAdhFIANAAIgqBfg");
	this.shape_96.setTransform(237.6,14.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#994D00").s().p("AgjAjQgOgPAAgUQAAgTANgOQAPgQAVAAQAWAAAPAQQANAOAAATQAAAUgOAPQgOAPgWAAQgVAAgOgPgAgZgaQgMALAAAPQABALAEAJQAFAJAJAFQAJAFAJAAQAKAAAJgFQAIgFAFgJQAGgJAAgLQgBgPgKgLQgMgLgPAAQgPAAgKALg");
	this.shape_97.setTransform(224.2,14.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#994D00").s().p("AAeAxIAAguQAAgPgCgFQgCgKgGgFQgGgFgKABQgKAAgJAGQgJAIgCALQgCAHAAASIAAAjIgNAAIAAheIANAAIAAAQQAHgJAJgFQAJgFAKAAQAKAAAJAGQAIAFAEAJQAEAKAAASIAAAxg");
	this.shape_98.setTransform(212.8,14.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#994D00").s().p("AgjAjQgOgPAAgUQAAgRAMgOQAOgSAXAAQAYAAAOASQALANAAATIhVAAQABARAKAKQAKALAPAAQAGAAAHgDQAHgCAGgEQAEgFAGgJIAKAFQgFAKgGAHQgHAGgJADQgIADgKAAQgXAAgNgPgAgYgdQgHAHgDANIBGAAQgDgKgFgFQgEgGgIgEQgHgEgJAAQgNAAgLAJg");
	this.shape_99.setTransform(196.5,14.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#994D00").s().p("AgGBCIAAhVIgRAAIAAgKIARAAIAAgkIAKAAIAAAkIAUAAIAAAKIgUAAIAABVg");
	this.shape_100.setTransform(187.8,13);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#994D00").s().p("AgFBEIAAhfIALAAIAABfgAgGgxQgDgDAAgEQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_101.setTransform(182.8,12.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#994D00").s().p("AgPAvQgIgEgFgGIAIgJQAKALAKAAQAHAAAFgFQAFgFAAgGQAAgGgDgEQgEgEgLgGQgNgGgFgGQgEgHAAgIQAAgLAHgHQAIgHAKAAQANAAAOANIgIAIQgKgKgKAAQgFAAgEAEQgEAEAAAFQAAAFADAEQAEAFAKAFQAOAGAFAHQAFAHAAAIQAAAMgJAIQgIAIgMAAQgIAAgHgDg");
	this.shape_102.setTransform(177.3,14.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#994D00").s().p("AgUA/QgJgFgHgLIAAASIgNAAIAAiEIANAAIAAA2QAHgKAKgEQAJgFALAAQAUAAAPAPQAOAOAAAVQAAAUgPAPQgOAOgUAAQgLAAgKgEgAgTgQQgJAFgEAJQgFAIAAALQAAAQALAMQAKALAQgBQAKAAAIgEQAJgGAFgJQAFgJAAgKQAAgKgFgIQgFgKgJgFQgIgFgKAAQgJAAgKAFg");
	this.shape_103.setTransform(168.1,13);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#994D00").s().p("AgkAjQgMgPAAgUQAAgRALgOQAOgSAXAAQAYAAAOASQALANABATIhWAAQABARAKAKQAKALAPAAQAHAAAHgDQAHgCAEgEQAFgFAFgJIALAFQgFAKgGAHQgIAGgIADQgIADgLAAQgWAAgOgPgAgYgdQgHAHgEANIBGAAQgBgKgGgFQgEgGgIgEQgIgEgIAAQgNAAgLAJg");
	this.shape_104.setTransform(155.9,14.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#994D00").s().p("AAeAwIgehEIgeBEIgCAAIgphfIANAAIAdBFIAehFIABAAIAgBFIAdhFIANAAIgpBfg");
	this.shape_105.setTransform(142.6,14.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#994D00").s().p("AAeBCIAAgtQAAgRgCgEQgCgKgGgFQgGgEgKAAQgKAAgJAHQgJAHgCAKQgCAHAAATIAAAjIgNAAIAAiDIANAAIAAA2QAHgKAJgFQAJgFAKAAQAKAAAJAGQAIAFAEAJQAEAJAAATIAAAxg");
	this.shape_106.setTransform(124.6,12.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#994D00").s().p("AghAkQgPgPAAgUQAAgNAIgMQAGgMANgHQAMgGAOAAQAJAAAJADQAJACAGAFQAGAFAFAHIgKAGQgNgRgWAAQgQAAgMAMQgLALAAAPQAAAKAFAJQAGAKAJAFQAJAFALAAQAVAAANgRIAKAHQgHAKgMAFQgLAGgPAAQgWAAgPgOg");
	this.shape_107.setTransform(113.2,14.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#994D00").s().p("AgFBEIAAhfIALAAIAABfgAgGgxQgDgDAAgEQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_108.setTransform(105.6,12.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#994D00").s().p("AgXAxIAAheIAMAAIAAANQAGgIAFgEQAGgEAHAAQAFAAAGADIgGALIgHgCQgGAAgFAFQgFAFgDALQgDAIAAAYIAAAgg");
	this.shape_109.setTransform(101.7,14.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#994D00").s().p("AAeAxIAAguQAAgPgCgFQgCgKgGgFQgGgFgKABQgKAAgJAGQgJAIgCALQgCAHAAASIAAAjIgNAAIAAheIANAAIAAAQQAHgJAJgFQAJgFAKAAQAKAAAJAGQAIAFAEAJQAEAKAAASIAAAxg");
	this.shape_110.setTransform(92.9,14.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#994D00").s().p("AgkBBIAAiBIBJAAIAAANIg8AAIAAApIA7AAIAAALIg7AAIAAAzIA7AAIAAANg");
	this.shape_111.setTransform(83.1,13);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#994D00").s().p("AgXAxIAAheIAMAAIAAANQAGgIAFgEQAGgEAHAAQAFAAAGADIgGALIgHgCQgGAAgFAFQgFAFgDALQgDAIAAAYIAAAgg");
	this.shape_112.setTransform(70.7,14.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#994D00").s().p("AgWArQgKgGgEgJQgFgLAAgTIAAguIANAAIAAAsQgBAQACAGQADAJAHAFQAIAFAJAAQAKAAAHgFQAIgFACgIQACgFAAgSIAAgsIANAAIAAAvQAAASgFALQgFAJgIAGQgKAGgOAAQgNAAgJgGg");
	this.shape_113.setTransform(61.8,14.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#994D00").s().p("AgjAjQgOgPAAgUQAAgTANgOQAPgQAVAAQAWAAAPAQQANAOAAATQAAAUgOAPQgOAPgWAAQgVAAgOgPgAgZgaQgMALAAAPQABALAEAJQAFAJAJAFQAJAFAJAAQAKAAAJgFQAIgFAFgJQAGgJAAgLQgBgPgKgLQgMgLgPAAQgPAAgKALg");
	this.shape_114.setTransform(50.5,14.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#994D00").s().p("AgHBCIAAhVIgQAAIAAgKIAQAAIAAgkIAMAAIAAAkIATAAIAAAKIgTAAIAABVg");
	this.shape_115.setTransform(36.7,13);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#994D00").s().p("AgFBEIAAhfIALAAIAABfgAgGgxQgDgDAAgEQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_116.setTransform(31.7,12.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#994D00").s().p("AgPAvQgIgEgFgGIAIgJQAKALAKAAQAHAAAFgFQAFgFAAgGQAAgGgDgEQgEgEgLgGQgNgGgFgGQgEgHAAgIQAAgLAHgHQAIgHAKAAQANAAAOANIgIAIQgKgKgKAAQgFAAgEAEQgEAEAAAFQAAAFADAEQAEAFAKAFQAOAGAFAHQAFAHAAAIQAAAMgJAIQgIAIgMAAQgIAAgHgDg");
	this.shape_117.setTransform(26.2,14.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#994D00").s().p("AgFBEIAAhfIALAAIAABfgAgGgxQgDgDAAgEQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_118.setTransform(21.1,12.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#994D00").s().p("AgBBBIg3iBIAOAAIAqBjIArhjIAOAAIg4CBg");
	this.shape_119.setTransform(13,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(0,0,455.2,70.4), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#994D00").s().p("AAiBdIgih3IghB3IgiAAIgqi5IAjAAIAbB2IAhh2IAdAAIAiB2IAah2IAjAAIgqC5g");
	this.shape.setTransform(371.4,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#994D00").s().p("AhEBFQgcgdAAgoQAAgaANgWQANgXAWgNQAYgNAZAAQAnAAAcAcQAdAeAAAoQAAApgcAcQgcAcgoAAQgqAAgbgdgAgqgsQgSASAAAbQAAAfAWARQARAPAWAAQAZAAASgSQARgTAAgaQABgagTgSQgRgTgaAAQgZAAgRASg");
	this.shape_1.setTransform(348.8,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#994D00").s().p("AApBdIhPh5IAAB5IgkAAIAAi5IAiAAIBPB5IAAh5IAkAAIAAC5g");
	this.shape_2.setTransform(328.2,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#994D00").s().p("AggBZQgPgKgLgWIAegSQAOAaAQAAQAKgBAGgFQAGgFAAgHQAAgHgFgGQgEgGgPgOQgfgXgJgOQgJgOAAgNQAAgTAPgOQAPgOAVAAQAOAAAMAHQANAGAPARIgbAYQgOgUgOAAQgGAAgEAEQgFAEAAAEQAAAFADAEQAFAGAUASIAZAUQALAMAEAJQAFALAAAMQAAAWgQAPQgQAPgZAAQgTAAgPgJg");
	this.shape_3.setTransform(304.2,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#994D00").s().p("AgSBdIAAiWIggAAIAAgjIBlAAIAAAjIgiAAIAACWg");
	this.shape_4.setTransform(292.4,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#994D00").s().p("AApBdIhPh5IAAB5IgkAAIAAi5IAiAAIBPB5IAAh5IAkAAIAAC5g");
	this.shape_5.setTransform(277.3,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#994D00").s().p("AgQBdIAAi5IAiAAIAAC5g");
	this.shape_6.setTransform(264.1,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#994D00").s().p("AhEBFQgcgdAAgoQAAgaANgWQANgXAWgNQAYgNAZAAQAnAAAcAcQAdAeAAAoQAAApgcAcQgcAcgoAAQgpAAgcgdgAgqgsQgSASAAAbQAAAfAWARQASAPAVAAQAZAAASgSQARgTABgaQAAgagSgSQgSgTgaAAQgZAAgRASg");
	this.shape_7.setTransform(249.5,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#994D00").s().p("Ag2BdIAAi5IAlAAQAeAAAOAFQANAGAIAMQAHANAAASQABATgKANQgLAMgRAFQgLADgaAAIAABPgAgTgTIALAAQANAAAFgCQAGgCADgFQACgEAAgGQABgLgJgFQgGgEgPAAIgLAAg");
	this.shape_8.setTransform(231.7,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#994D00").s().p("AAVBdIgphPIgDAAIAABPIgkAAIAAi5IAmAAQAeAAANAFQANAGAIAMQAIANAAASQAAASgJANQgJALgSAGIAtBTgAgXgTIALAAQAQAAAHgFQAFgEAAgLQAAgGgCgEQgDgFgGgCQgFgCgNAAIgKAAg");
	this.shape_9.setTransform(210.1,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#994D00").s().p("AgiBWQgPgJgHgOQgGgOAAgiIAAhtIAjAAIAAB3QAAAQADAGQADAHAGAEQAHADAIAAQAJABAHgFQAGgEADgHQADgGAAgTIAAhzIAjAAIAABtQAAAdgDALQgDAKgJALQgJAKgMAFQgLAEgQAAQgTABgPgKg");
	this.shape_10.setTransform(193.4,25.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#994D00").s().p("AhEBFQgcgdAAgoQAAgaANgWQANgXAXgNQAWgNAZAAQAoAAAdAcQAcAeAAAoQAAApgcAcQgcAcgoAAQgqAAgbgdgAgrgsQgRASAAAbQAAAfAWARQARAPAWAAQAZAAASgSQASgTAAgaQgBgagRgSQgSgTgaAAQgZAAgSASg");
	this.shape_11.setTransform(174.1,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#994D00").s().p("AgRBdIAAhRIg3hoIAmAAIAiBDIAjhDIAmAAIg3BoIAABRg");
	this.shape_12.setTransform(155.2,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#994D00").s().p("ABMBdIgUh1IgoB1IgeAAIgoh1IgUB1IgjAAIAhi5IAiAAIAqCBIAsiBIAiAAIAgC5g");
	this.shape_13.setTransform(128.2,25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#994D00").s().p("AgyBdIAAi5IBlAAIAAAiIhCAAIAAAiIBCAAIAAAhIhCAAIAAAxIBCAAIAAAjg");
	this.shape_14.setTransform(110.2,25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#994D00").s().p("AgyBdIAAi5IBlAAIAAAiIhCAAIAAAiIBCAAIAAAhIhCAAIAAAxIBCAAIAAAjg");
	this.shape_15.setTransform(96.7,25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#994D00").s().p("AhJBdIAAi5IAqAAQAoAAATAKQAVAKAMAWQANAXAAAdQAAAWgHASQgHASgNAMQgMAMgQAFQgOAEgjAAgAgmA7IARAAQAXAAALgGQALgGAHgNQAHgNAAgTQAAgdgQgQQgPgPghAAIgMAAg");
	this.shape_16.setTransform(80.8,25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#994D00").s().p("AgyBdIAAi5IBlAAIAAAiIhCAAIAAAiIBCAAIAAAhIhCAAIAAAxIBCAAIAAAjg");
	this.shape_17.setTransform(65,25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#994D00").s().p("AAVBdIgphPIgDAAIAABPIgkAAIAAi5IAmAAQAeAAANAFQANAGAIAMQAIANAAASQAAASgIANQgKALgRAGIAsBTgAgXgTIALAAQAQAAAGgFQAHgEgBgLQAAgGgCgEQgEgFgFgCQgFgCgNAAIgKAAg");
	this.shape_18.setTransform(51,25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF8533").s().p("EghRADtIAAnfMBCiAAAIAAHlg");
	this.shape_19.setTransform(213,24.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#994D00").s().p("A9gBaIjwi7MBChAAGIjeC9g");
	this.shape_20.setTransform(212.9,57.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#AD7C01").s().p("AAiBdIgih3IghB3IgiAAIgqi5IAjAAIAbB2IAhh2IAdAAIAiB2IAah2IAjAAIgqC5g");
	this.shape_21.setTransform(371.4,25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AD7C01").s().p("AhEBFQgcgdAAgoQAAgaANgWQANgXAWgNQAYgNAZAAQAnAAAcAcQAdAeAAAoQAAApgcAcQgcAcgoAAQgqAAgbgdgAgqgsQgSASAAAbQAAAfAWARQARAPAWAAQAZAAASgSQARgTAAgaQABgagTgSQgRgTgaAAQgZAAgRASg");
	this.shape_22.setTransform(348.8,25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AD7C01").s().p("AApBdIhPh5IAAB5IgkAAIAAi5IAiAAIBPB5IAAh5IAkAAIAAC5g");
	this.shape_23.setTransform(328.2,25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AD7C01").s().p("AggBZQgPgKgLgWIAegSQAOAaAQAAQAKgBAGgFQAGgFAAgHQAAgHgFgGQgEgGgPgOQgfgXgJgOQgJgOAAgNQAAgTAPgOQAPgOAVAAQAOAAAMAHQANAGAPARIgbAYQgOgUgOAAQgGAAgEAEQgFAEAAAEQAAAFADAEQAFAGAUASIAZAUQALAMAEAJQAFALAAAMQAAAWgQAPQgQAPgZAAQgTAAgPgJg");
	this.shape_24.setTransform(304.2,25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AD7C01").s().p("AgSBdIAAiWIggAAIAAgjIBlAAIAAAjIgiAAIAACWg");
	this.shape_25.setTransform(292.4,25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AD7C01").s().p("AApBdIhPh5IAAB5IgkAAIAAi5IAiAAIBPB5IAAh5IAkAAIAAC5g");
	this.shape_26.setTransform(277.3,25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AD7C01").s().p("AgQBdIAAi5IAiAAIAAC5g");
	this.shape_27.setTransform(264.1,25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AD7C01").s().p("AhEBFQgcgdAAgoQAAgaANgWQANgXAWgNQAYgNAZAAQAnAAAcAcQAdAeAAAoQAAApgcAcQgcAcgoAAQgpAAgcgdgAgqgsQgSASAAAbQAAAfAWARQASAPAVAAQAZAAASgSQARgTABgaQAAgagSgSQgSgTgaAAQgZAAgRASg");
	this.shape_28.setTransform(249.5,25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AD7C01").s().p("Ag2BdIAAi5IAlAAQAeAAAOAFQANAGAIAMQAHANAAASQABATgKANQgLAMgRAFQgLADgaAAIAABPgAgTgTIALAAQANAAAFgCQAGgCADgFQACgEAAgGQABgLgJgFQgGgEgPAAIgLAAg");
	this.shape_29.setTransform(231.7,25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#AD7C01").s().p("AAVBdIgphPIgDAAIAABPIgkAAIAAi5IAmAAQAeAAANAFQANAGAIAMQAIANAAASQAAASgJANQgJALgSAGIAtBTgAgXgTIALAAQAQAAAHgFQAFgEAAgLQAAgGgCgEQgDgFgGgCQgFgCgNAAIgKAAg");
	this.shape_30.setTransform(210.1,25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#AD7C01").s().p("AgiBWQgPgJgHgOQgGgOAAgiIAAhtIAjAAIAAB3QAAAQADAGQADAHAGAEQAHADAIAAQAJABAHgFQAGgEADgHQADgGAAgTIAAhzIAjAAIAABtQAAAdgDALQgDAKgJALQgJAKgMAFQgLAEgQAAQgTABgPgKg");
	this.shape_31.setTransform(193.4,25.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AD7C01").s().p("AhEBFQgcgdAAgoQAAgaANgWQANgXAXgNQAWgNAZAAQAoAAAdAcQAcAeAAAoQAAApgcAcQgcAcgoAAQgqAAgbgdgAgrgsQgRASAAAbQAAAfAWARQARAPAWAAQAZAAASgSQASgTAAgaQgBgagRgSQgSgTgaAAQgZAAgSASg");
	this.shape_32.setTransform(174.1,25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#AD7C01").s().p("AgRBdIAAhRIg3hoIAmAAIAiBDIAjhDIAmAAIg3BoIAABRg");
	this.shape_33.setTransform(155.2,25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AD7C01").s().p("ABMBdIgUh1IgoB1IgeAAIgoh1IgUB1IgjAAIAhi5IAiAAIAqCBIAsiBIAiAAIAgC5g");
	this.shape_34.setTransform(128.2,25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AD7C01").s().p("AgyBdIAAi5IBlAAIAAAiIhCAAIAAAiIBCAAIAAAhIhCAAIAAAxIBCAAIAAAjg");
	this.shape_35.setTransform(110.2,25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#AD7C01").s().p("AgyBdIAAi5IBlAAIAAAiIhCAAIAAAiIBCAAIAAAhIhCAAIAAAxIBCAAIAAAjg");
	this.shape_36.setTransform(96.7,25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#AD7C01").s().p("AhJBdIAAi5IAqAAQAoAAATAKQAVAKAMAWQANAXAAAdQAAAWgHASQgHASgNAMQgMAMgQAFQgOAEgjAAgAgmA7IARAAQAXAAALgGQALgGAHgNQAHgNAAgTQAAgdgQgQQgPgPghAAIgMAAg");
	this.shape_37.setTransform(80.8,25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#AD7C01").s().p("AgyBdIAAi5IBlAAIAAAiIhCAAIAAAiIBCAAIAAAhIhCAAIAAAxIBCAAIAAAjg");
	this.shape_38.setTransform(65,25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#AD7C01").s().p("AAVBdIgphPIgDAAIAABPIgkAAIAAi5IAmAAQAeAAANAFQANAGAIAMQAIANAAASQAAASgIANQgKALgRAGIAsBTgAgXgTIALAAQAQAAAGgFQAHgEgBgLQAAgGgCgEQgEgFgFgCQgFgCgNAAIgKAAg");
	this.shape_39.setTransform(51,25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFE7AC").s().p("EghRADtIAAnfMBCiAAAIAAHlg");
	this.shape_40.setTransform(213,24.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AD7C01").s().p("A9gBaIjwi7MBChAAGIjeC9g");
	this.shape_41.setTransform(212.9,57.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AD7C01").s().p("AAgBYIgghxIgfBxIggAAIgoivIAhAAIAZBvIAghvIAbAAIAgBvIAZhvIAhAAIgoCvg");
	this.shape_42.setTransform(362.9,25.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#AD7C01").s().p("AhBBBQgagbAAgmQAAgYAMgWQANgVAVgMQAWgNAXAAQAmAAAbAbQAbAbAAAmQAAAngbAbQgaAbgmAAQgnAAgbgcgAgogqQgRARAAAZQAAAeAVARQAQANAVAAQAYAAAQgRQARgRAAgaQAAgYgRgRQgRgSgYAAQgYAAgQARg");
	this.shape_43.setTransform(341.4,25.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#AD7C01").s().p("AAmBYIhKhzIAABzIgiAAIAAivIAgAAIBLBzIAAhzIAiAAIAACvg");
	this.shape_44.setTransform(322,25.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#AD7C01").s().p("AgeBTQgOgJgLgUIAcgRQANAYAQAAQAJAAAFgFQAHgFAAgHQgBgGgEgGQgFgGgOgMQgdgXgIgNQgJgMAAgNQAAgTAPgNQAOgNATAAQAOAAALAGQAMAGAOARIgYAWQgNgTgOAAQgGAAgEAEQgEADAAAFQAAAEACAEQAFAGAUARIAXATQAKALAEAJQAFAJAAAMQAAAVgQAPQgPAOgXAAQgTAAgNgKg");
	this.shape_45.setTransform(299.3,25.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#AD7C01").s().p("AgRBYIAAiOIgfAAIAAghIBhAAIAAAhIghAAIAACOg");
	this.shape_46.setTransform(288.1,25.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#AD7C01").s().p("AAmBYIhKhzIAABzIgiAAIAAivIAgAAIBLBzIAAhzIAiAAIAACvg");
	this.shape_47.setTransform(273.8,25.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#AD7C01").s().p("AgQBYIAAivIAhAAIAACvg");
	this.shape_48.setTransform(261.3,25.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#AD7C01").s().p("AhBBBQgagbAAgmQAAgYAMgWQANgVAVgMQAWgNAXAAQAmAAAbAbQAbAbAAAmQAAAngbAbQgaAbgmAAQgnAAgbgcgAgogqQgRARAAAZQAAAeAVARQAQANAVAAQAYAAAQgRQARgRAAgaQAAgYgRgRQgRgSgYAAQgYAAgQARg");
	this.shape_49.setTransform(247.5,25.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#AD7C01").s().p("Ag0BYIAAivIAkAAQAcAAANAFQAMAFAIAMQAHAMAAARQAAASgJANQgKALgRAFQgJACgZAAIAABLgAgSgSIALAAQAMAAAEgCQAFgCADgEQADgEAAgGQAAgKgIgFQgGgEgPAAIgJAAg");
	this.shape_50.setTransform(230.7,25.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AD7C01").s().p("AAUBYIgnhLIgDAAIAABLIgiAAIAAivIAkAAQAcAAANAFQAMAFAHAMQAJAMAAARQAAARgJAMQgIALgRAGIAqBOgAgWgSIAKAAQAPAAAHgFQAGgEAAgJQAAgGgDgFQgEgEgFgCQgEgCgMAAIgKAAg");
	this.shape_51.setTransform(210.2,25.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#AD7C01").s().p("AggBSQgPgJgGgOQgGgNAAggIAAhoIAiAAIAABxQAAAPADAGQACAGAGAFQAGADAIAAQAIAAAHgEQAGgEADgHQACgGAAgRIAAhuIAiAAIAABoQAAAbgDAKQgDALgJAJQgIAKgLAFQgLAFgPAAQgSgBgOgIg");
	this.shape_52.setTransform(194.4,25.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#AD7C01").s().p("AhBBBQgagbAAgmQAAgYAMgWQANgVAVgMQAWgNAXAAQAmAAAbAbQAbAbAAAmQAAAngbAbQgaAbgmAAQgnAAgbgcgAgogqQgRARAAAZQAAAeAVARQAQANAVAAQAYAAAQgRQARgRAAgaQAAgYgRgRQgRgSgYAAQgYAAgQARg");
	this.shape_53.setTransform(176.2,25.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#AD7C01").s().p("AgQBYIAAhMIg0hjIAkAAIAgA/IAhg/IAkAAIg0BjIAABMg");
	this.shape_54.setTransform(158.2,25.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#AD7C01").s().p("ABHBYIgShuIgmBuIgcAAIglhuIgUBuIghAAIAfivIAhAAIAnB6IAqh6IAhAAIAdCvg");
	this.shape_55.setTransform(132.7,25.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#AD7C01").s().p("AgvBYIAAivIBfAAIAAAgIg+AAIAAAgIA+AAIAAAgIg+AAIAAAuIA+AAIAAAhg");
	this.shape_56.setTransform(115.7,25.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#AD7C01").s().p("AgvBYIAAivIBfAAIAAAgIg+AAIAAAgIA+AAIAAAgIg+AAIAAAuIA+AAIAAAhg");
	this.shape_57.setTransform(102.9,25.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#AD7C01").s().p("AhFBYIAAivIAoAAQAlAAATAJQATAKAMAVQAMAWAAAbQAAAVgHARQgHARgMALQgMAMgOAEQgOAEggAAgAgkA3IAQAAQAWAAALgFQAJgFAHgNQAHgMAAgSQAAgcgQgPQgOgOgfAAIgLAAg");
	this.shape_58.setTransform(87.9,25.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#AD7C01").s().p("AgvBYIAAivIBfAAIAAAgIg+AAIAAAgIA+AAIAAAgIg+AAIAAAuIA+AAIAAAhg");
	this.shape_59.setTransform(73,25.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#AD7C01").s().p("AAUBYIgnhLIgDAAIAABLIghAAIAAivIAjAAQAcAAANAFQAMAFAHAMQAJAMgBARQAAARgIAMQgJALgQAGIApBOgAgWgSIAKAAQAQAAAGgFQAGgEAAgJQAAgGgDgFQgDgEgGgCQgEgCgNAAIgJAAg");
	this.shape_60.setTransform(59.7,25.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFE7AC").s().p("A/dDgIAAnFMA+7AAAIAAHLg");
	this.shape_61.setTransform(213,24.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#AD7C01").s().p("A76BWIjjixMA+7AAFIjSCyg");
	this.shape_62.setTransform(212.9,56.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,425.9,67.5);


(lib.seek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EhU1AAgIAAg/MCprAAAIAAA/g");
	this.shape.setTransform(543,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.seek, new cjs.Rectangle(0,0,1086,6.5), null);


(lib.sectors_earned = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AD7C01").ss(0.5,1,1).p("AyEAAMAkJAAA");
	this.shape.setTransform(115.7,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.accoun_number = new cjs.Text("6", "bold 30px 'Century Gothic'", "#FFFFFF");
	this.accoun_number.name = "accoun_number";
	this.accoun_number.lineHeight = 38;
	this.accoun_number.lineWidth = 228;
	this.accoun_number.parent = this;
	this.accoun_number.setTransform(4.4,2);

	this.timeline.addTween(cjs.Tween.get(this.accoun_number).wait(1));

}).prototype = getMCSymbolPrototype(lib.sectors_earned, new cjs.Rectangle(-1,0,235.3,40.4), null);


(lib.replay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AA4hMIAACYAg3hMIAACY");
	this.shape.setTransform(35.4,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(3,1,1).p("AA4hMIAACYAg3hMIAACY");
	this.shape_1.setTransform(35.4,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.6)").s().p("AlJClQgyAAAAgyIAAjlQAAgyAyAAIKTAAQAyAAAAAyIAADlQAAAygyAAg");
	this.shape_2.setTransform(38,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,33);


(lib.Redeemed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AD7C01").ss(0.5,1,1).p("AyEAAMAkJAAA");
	this.shape.setTransform(115.7,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.accoun_number = new cjs.Text("0", "bold 30px 'Century Gothic'", "#FFFFFF");
	this.accoun_number.name = "accoun_number";
	this.accoun_number.lineHeight = 38;
	this.accoun_number.lineWidth = 228;
	this.accoun_number.parent = this;
	this.accoun_number.setTransform(4.4,2);

	this.timeline.addTween(cjs.Tween.get(this.accoun_number).wait(1));

}).prototype = getMCSymbolPrototype(lib.Redeemed, new cjs.Rectangle(-1,0,235.3,40.4), null);


(lib.redbar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2EDFF").s().p("AAnBsIgniLIgmCLIgoAAIgwjXIAoAAIAgCJIAliJIAiAAIAnCJIAfiJIAoAAIgwDXg");
	this.shape.setTransform(214.3,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2EDFF").s().p("AhPBQQgggiAAguQAAgeAPgaQAPgaAagPQAagPAdAAQAuAAAhAhQAhAhAAAvQAAAvggAhQghAggvAAQgvAAggghgAgygzQgUAVAAAfQAAAjAaAVQAUAQAYAAQAeAAAVgVQAUgVAAgfQAAgdgVgWQgUgVgeAAQgdAAgVAVg");
	this.shape_1.setTransform(188.2,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2EDFF").s().p("AAvBsIhbiNIAACNIgpAAIAAjXIAnAAIBbCNIAAiNIApAAIAADXg");
	this.shape_2.setTransform(164.5,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2EDFF").s().p("AAdBsIhBhgIAABgIgpAAIAAjXIApAAIAABLIA6hLIAxAAIhKBhIBRB2g");
	this.shape_3.setTransform(136.7,25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2EDFF").s().p("AhPBQQgggiAAguQAAgeAPgaQAPgaAagPQAagPAdAAQAuAAAhAhQAhAhAAAvQAAAvggAhQghAggvAAQgvAAggghgAgygzQgUAVAAAfQAAAjAaAVQAUAQAYAAQAeAAAVgVQAUgVAAgfQAAgdgVgWQgUgVgeAAQgdAAgVAVg");
	this.shape_4.setTransform(113.8,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D2EDFF").s().p("AhPBQQgggiAAguQAAgeAPgaQAPgaAagPQAagPAeAAQAtAAAhAhQAhAhAAAvQAAAvghAhQggAgguAAQgwAAggghgAgxgzQgVAVAAAfQAAAjAaAVQAUAQAZAAQAdAAAUgVQAVgVAAgfQAAgdgVgWQgVgVgdAAQgdAAgUAVg");
	this.shape_5.setTransform(88.7,25.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2EDFF").s().p("AhCBsIAAjXIAiAAQAdAAAMAEQAUAFAMAOQALAOAAATQAAAMgFAKQgGAKgLAJQATAJAKANQAJAOAAATQAAASgKAPQgJAPgPAHQgPAIgZAAgAgaBFIALAAQAZAAAIgHQAJgGAAgNQAAgNgKgJQgKgIgYAAIgJAAgAgagWIAJAAQAQAAAGgHQAHgGAAgLQAAgKgGgGQgHgGgOAAIgLAAg");
	this.shape_6.setTransform(67.9,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF3333").s().p("A2VDtIAAnfMAsrAAAIAAHlg");
	this.shape_7.setTransform(143.3,24.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("AykBaIjwi7MAspAAGIjeC9g");
	this.shape_8.setTransform(143.2,57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.redbar, new cjs.Rectangle(0.3,0,286,67.5), null);


(lib.Playbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBdIAAhRIg3hoIAmAAIAiBDIAjhDIAmAAIg3BoIAABRg");
	this.shape.setTransform(101.2,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA1BdIgPgmIhLAAIgPAmIglAAIBIi5IAjAAIBIC5gAgYAUIAxAAIgZg/g");
	this.shape_1.setTransform(68.5,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqBdIAAi5IAjAAIAACXIAzAAIAAAig");
	this.shape_2.setTransform(38.9,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3BdIAAi5IAmAAQAeAAANAFQAOAGAIAMQAIANgBASQAAATgKANQgKAMgSAFQgKADgaAAIAABPgAgTgTIALAAQANAAAFgCQAFgCADgFQADgEABgGQAAgLgJgFQgGgEgQAAIgKAAg");
	this.shape_3.setTransform(10.5,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOBOIAAhDIguhYIAgAAIAcA4IAdg4IAgAAIguBYIAABDg");
	this.shape_4.setTransform(94.6,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAsBOIgMggIg/AAIgNAgIgeAAIA8ibIAdAAIA8CbgAgUARIApAAIgVg1g");
	this.shape_5.setTransform(67.2,25.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjBOIAAibIAdAAIAAB/IArAAIAAAcg");
	this.shape_6.setTransform(42.5,25.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBOIAAibIAhAAQAYAAAMAFQALAEAGALQAHALgBAOQABARgJALQgIAJgPAFQgJACgWAAIAABCgAgQgQIAKAAQAKAAAEgCQAFgBACgEQADgDAAgGQAAgJgHgEQgFgDgNAAIgJAAg");
	this.shape_7.setTransform(18.7,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#994D00").s().p("AE5ClIAAlJIESAAIAAFJgAAMClIAAlJIEUAAIAAFJgAkeClIAAlJIESAAIAAFJgApKClIAAlJIESAAIAAFJg");
	this.shape_8.setTransform(55.7,24.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AD7C01").s().p("AE5ClIAAlJIESAAIAAFJgAAMClIAAlJIEUAAIAAFJgAkeClIAAlJIESAAIAAFJgApKClIAAlJIESAAIAAFJg");
	this.shape_9.setTransform(55.7,24.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AD7C01").s().p("AEGCKIAAkTIDmAAIAAETgAALCKIAAkTIDmAAIAAETgAjwCKIAAkTIDnAAIAAETgAnrCKIAAkTIDmAAIAAETg");
	this.shape_10.setTransform(56.5,25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF8533").s().p("AvwDtIAAnfIfiAAIAAHlg");
	this.shape_11.setTransform(61,24.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#994D00").s().p("AsABaIjwi7IfhAGIjeC9g");
	this.shape_12.setTransform(60.9,57.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE7AC").s().p("AvwDtIAAnfIfiAAIAAHlg");
	this.shape_13.setTransform(61,24.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AD7C01").s().p("AsABaIjwi7IfhAGIjeC9g");
	this.shape_14.setTransform(60.9,57.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE7AC").s().p("AtMDHIAAmRIaZAAIAAGVg");
	this.shape_15.setTransform(61,25.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AD7C01").s().p("AqCBMIjKidIaZAFIi6Cdg");
	this.shape_16.setTransform(60.9,53.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,0,201.9,67.5);


(lib.Play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7hKIB3BNIh3BIg");
	this.shape.setTransform(38.6,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag7hKIB3BNIh3BIg");
	this.shape_1.setTransform(38.6,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.6)").s().p("AlJClQgyAAAAgyIAAjlQAAgyAyAAIKTAAQAyAAAAAyIAADlQAAAygyAAg");
	this.shape_2.setTransform(38,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,33);


(lib.Period = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AD7C01").ss(0.5,1,1).p("A2WAAMAstAAA");
	this.shape.setTransform(143.1,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBdQgTgUAAgbQAAgKADgKQACgKALgUIA3hsIAiARIgmBKQAcAAATATQAUATAAAdQgBAcgTAUQgUATgcAAQgcAAgTgUgAgTAZQgHAIgBAMQAAANAJAIQAHAJALAAQALAAAIgJQAIgIAAgNQABgMgJgIQgHgJgMAAQgLAAgIAJg");
	this.shape_1.setTransform(270.5,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AACBsIAAiwIgrAAIAXgnIA8AAIAADXg");
	this.shape_2.setTransform(239.9,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAdIAbhCIAcAPIgjA8g");
	this.shape_3.setTransform(210.7,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/BsIAAjXIArAAQAjAAAQAHQAPAGAJAPQAJAOAAAVQAAAWgMAPQgMAOgUAGQgLADgfAAIAABcgAgWgWIANAAQAOAAAHgDQAFgCAEgFQAEgFgBgHQABgNgLgFQgGgFgTAAIgLAAg");
	this.shape_4.setTransform(182.7,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BsIAAjXIB1AAIAAAoIhMAAIAAAnIBMAAIAAAnIhMAAIAAA4IBMAAIAAApg");
	this.shape_5.setTransform(153.6,21);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglBmQgSgLgMgZIAjgUQAPAcAUAAQAKAAAHgGQAHgGAAgIQAAgHgFgIQgFgHgSgPQgjgcgKgPQgLgQAAgQQAAgWASgQQAQgQAZAAQAQAAAOAHQAPAIARAUIgeAaQgQgWgRAAQgHAAgFAFQgFAEAAAFQAAAGADAEQAFAHAYAVIAdAYQAMAMAFAMQAGALAAAOQAAAbgTARQgSARgdAAQgWAAgRgLg");
	this.shape_6.setTransform(124.6,21);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBmQgRgLgJgXQgKgXABgrQgBg6ATgbQAUgdAkAAQAXAAARALQARAMAKAYQAIAYABApQgBArgIAYQgKAYgQALQgQALgZAAQgXAAgQgLgAgRhCQgIAGgEAQQgFARAAAeQAAApAKAQQAKAPAOAAQAPAAAJgPQAKgSABgpQgBgqgJgQQgJgQgQAAQgJAAgIAHg");
	this.shape_7.setTransform(96.5,21);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0BeQgTgTgCggIAoAAQADAQAJAIQAJAJANAAQAOAAAKgKQAJgJAAgNQAAgPgNgKQgNgKgXAAIAAgjQAPgBAHgDQAHgEAEgGQAEgGAAgGQAAgJgGgGQgHgGgJAAQgIAAgHAGQgIAFgCAIIgoAAQADgXAOgPQAUgUAdAAQAaAAASARQASARAAAXQAAAOgIAMQgHAMgPAHQATAGALAOQALAOAAAUQAAAdgVAUQgVAUghAAQgfAAgUgTg");
	this.shape_8.setTransform(66.6,21);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkASIAAgjIBJAAIAAAjg");
	this.shape_9.setTransform(37.5,23.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AACBsIAAiwIgrAAIAXgnIA9AAIAADXg");
	this.shape_10.setTransform(8.8,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Period, new cjs.Rectangle(-1,0,306.6,40.4), null);


(lib.pause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAZgeIAvAAIAFgxAAuBAQgUAQgaAAQggAAgWgXQgWgWAAggQgBgeAXgWQAWgWAggBQAeABAXAVQAEAFAEAE");
	this.shape.setTransform(34.8,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(3,1,1).p("AAZgeIAvAAIAFgxAAuBAQgUAQgaAAQggAAgWgXQgWgWAAggQgBgeAXgWQAWgWAggBQAeABAXAVQAEAFAEAE");
	this.shape_1.setTransform(34.8,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.6)").s().p("AlJClQgyAAAAgyIAAjlQAAgyAyAAIKTAAQAyAAAAAyIAADlQAAAygyAAg");
	this.shape_2.setTransform(38,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,33);


(lib.orangebar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.text = new cjs.Text(" ", "bold 24px 'Century Gothic'", "#FFFFFF");
	this.text.lineHeight = 31;
	this.text.parent = this;
	this.text.setTransform(203.1,134.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#994D00").s().p("AgfAgQgMgNAAgSQAAgTAMgNQAMgMATAAQATAAANAMQANANAAAUIAAAEIhEAAQABAJAHAFQAGAGAKAAQAMAAAIgIIASAIQgHAJgKAFQgIAEgNABQgUAAgMgNgAgPgVQgDAEgEAIIAtAAQgCgIgGgEQgHgEgHAAQgIAAgIAEg");
	this.shape.setTransform(77.3,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#994D00").s().p("AgeAfQgNgNAAgRQAAgMAHgLQAGgKALgFQALgHANABQAMAAAKAEQAKAGAHAIIgSAKQgFgFgFgCQgFgCgGAAQgLAAgIAIQgHAGAAALQAAAKAHAIQAHAGALAAQAOAAAIgJIARALQgOASgZAAQgVgBgNgNg");
	this.shape_1.setTransform(66.9,30.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#994D00").s().p("AgJA8IAAhUIAUAAIAABUgAgIgkQgEgDAAgHQAAgFAEgEQADgEAFAAQAFAAAFAEQAEAEAAAGQAAAFgEAEQgEAFgGAAQgEAAgEgFg");
	this.shape_2.setTransform(59.9,28.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#994D00").s().p("AgfAfQgNgMAAgTQAAgTAPgNQANgLAQAAQALgBALAHQALAGAGAJQAGALAAALQAAAMgGAKQgGALgLAGQgKAFgMABQgSgBgNgNgAgQgQQgGAGAAAKQAAALAGAHQAHAHAJAAQAKAAAGgHQAHgHAAgLQAAgKgHgGQgGgIgKAAQgJAAgHAIg");
	this.shape_3.setTransform(52.9,30.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#994D00").s().p("AgGArIgkhVIAWAAIAUAyIAWgyIAVAAIgkBVg");
	this.shape_4.setTransform(43.3,30.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#994D00").s().p("AARAsIAAgmQAAgOgBgFQgCgFgEgDQgDgCgFAAQgFAAgFAEQgFAEgCAIQgBAEAAANIAAAiIgUAAIAAhVIAUAAIAAAJQAIgGAFgDQAGgBAGAAQANAAAIAIQAIAIgBAOIAAA4g");
	this.shape_5.setTransform(34.1,30.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#994D00").s().p("AgKA6IAAhyIAVAAIAAByg");
	this.shape_6.setTransform(27,29);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#994D00").ss(1,1,1).p("Eg1yAAAMBrmAAA");
	this.shape_7.setTransform(431.9,32.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#994D00").s().p("Eg6hALIIAAhEMAjyAAAIAABEgEg6ZAHaIAAhEMB0zAAAIAABEgEg6QAD9IAAhEMB0yAAAIAABEgEg6QAApIAAhDMB0yAAAIAABDgEg6QgCzIAAhEMB0yAAAIAABEgEg6ZgGQIAAhEMB0zAAAIAABEgEg6YgKDIAAhEMB0yAAAIAABEg");
	this.shape_8.setTransform(397.4,143.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#994D00").s().p("Eg7kABbIjYi1MB95AAAIjlC1g");
	this.shape_9.setTransform(402.9,360.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF8533").s().p("Eg+8AbcMAAAg23MB95AAAMAAAA23g");
	this.shape_10.setTransform(402.9,175.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.orangebar2, new cjs.Rectangle(0,0,805.9,369.6), null);


(lib.orangebar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#994D00").s().p("ANrCiIAAlEIEYAAIAAFEgAJJCiIAAlEIEYAAIAAFEgAEnCiIAAlEIEYAAIAAFEgAAFCiIAAlEIEYAAIAAFEgAkcCiIAAlEIEYAAIAAFEgAo+CiIAAlEIEYAAIAAFEgAtgCiIAAlEIEYAAIAAFEgAyCCiIAAlEIEYAAIAAFEg");
	this.shape.setTransform(659.4,309);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#994D00").s().p("ANrCiIAAlEIEYAAIAAFEgAJJCiIAAlEIEYAAIAAFEgAEnCiIAAlEIEYAAIAAFEgAAFCiIAAlEIEYAAIAAFEgAkcCiIAAlEIEYAAIAAFEgAo+CiIAAlEIEYAAIAAFEgAtgCiIAAlEIEYAAIAAFEgAyCCiIAAlEIEYAAIAAFEg");
	this.shape_1.setTransform(140.5,309);

	this.text = new cjs.Text(" ", "bold 24px 'Century Gothic'", "#FFFFFF");
	this.text.lineHeight = 31;
	this.text.parent = this;
	this.text.setTransform(203.1,134.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#994D00").s().p("ANrCjIAAlEIEYAAIAAFEgAJJCjIAAlEIEYAAIAAFEgAEnCjIAAlEIEYAAIAAFEgAAFCjIAAlEIEYAAIAAFEgAkcCjIAAlEIEYAAIAAFEgAo+CjIAAlEIEYAAIAAFEgAtgCjIAAlEIEYAAIAAFEgAyCCjIAAlEIEYAAIAAFEg");
	this.shape_2.setTransform(659.4,191.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#994D00").s().p("AgYAyQgLgIgDgOIAWAAQADAFAFADQAEACAFABQAGAAAFgGQAGgFAAgIQgBgIgEgFQgFgGgGABQgDAAgEACIgHAFIgRgEIANg/IA1AAIAAAUIglAAIgEAVIAEgBIADAAQAQAAAKALQAKAKAAAQQAAARgLAMQgMALgQAAQgOAAgKgJg");
	this.shape_3.setTransform(610.1,161.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#994D00").s().p("AABA5IAAhdIgXAAIANgVIAgAAIAAByg");
	this.shape_4.setTransform(600.4,161);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#994D00").s().p("AgUA3QgJgHgFgMQgFgMAAgXQAAgeAJgOQALgQATgBQAMABAJAGQAJAGAFANQAFANAAAVQAAAXgFANQgFAMgIAHQgJAFgNABQgMgBgIgFgAgJgjQgEAEgCAIQgCAJAAAPQAAAXAFAIQAFAIAHAAQAIAAAFgIQAGgJAAgWQAAgWgGgJQgFgJgIAAQgEAAgFAEg");
	this.shape_5.setTransform(592.3,161);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#994D00").s().p("AgnA7IAAgKIAkgkQAMgNAEgIQAEgHAAgHQAAgGgEgFQgFgEgHAAQgGAAgEAFQgFAFAAAJIgWAAQABgTALgKQALgLAQAAQAKAAAIAEQAIAFAFAJQAFAIAAAIQAAAKgGANQgGAKgPAQIgMAOIAoAAIAAAUg");
	this.shape_6.setTransform(583.2,160.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#994D00").s().p("AgeAfQgNgNAAgRQAAgMAHgLQAGgKALgGQALgFANAAQAMAAAKAEQAKAFAHAKIgSAKQgFgGgFgCQgFgCgGAAQgLAAgIAIQgHAGAAALQAAAKAHAIQAHAGALAAQAOAAAIgKIARAMQgOARgZAAQgVAAgNgNg");
	this.shape_7.setTransform(569.2,162.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#994D00").s().p("AgfAgQgNgMAAgTQAAgTANgNQANgMASAAQAUAAAMAMQAMANAAAUIAAAEIhDAAQABAJAHAGQAGAFAJAAQAMAAAJgJIASAJQgHAKgJAEQgKAFgNgBQgSAAgNgMgAgPgVQgEAEgDAHIAtAAQgCgGgGgFQgGgFgJABQgHAAgIAEg");
	this.shape_8.setTransform(559.1,162.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#994D00").s().p("AgtA5IAAhyIAaAAQAYAAANAHQAMAGAIAOQAIAOAAARQAAAOgFALQgEALgIAIQgIAHgJADQgJACgVAAgAgXAkIAKAAQAOAAAHgEQAHgDAEgIQAEgIAAgMQAAgRgKgKQgJgKgTABIgIAAg");
	this.shape_9.setTransform(548.6,161);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#994D00").s().p("ANrCjIAAlEIEYAAIAAFEgAJJCjIAAlEIEYAAIAAFEgAEnCjIAAlEIEYAAIAAFEgAAFCjIAAlEIEYAAIAAFEgAkcCjIAAlEIEYAAIAAFEgAo+CjIAAlEIEYAAIAAFEgAtgCjIAAlEIEYAAIAAFEgAyCCjIAAlEIEYAAIAAFEg");
	this.shape_10.setTransform(400,191.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#994D00").s().p("AgYAyQgLgIgDgOIAXAAQADAFAEADQAEACAEABQAHAAAGgGQAEgFAAgIQABgIgFgFQgFgGgGABQgDAAgDACIgIAFIgRgEIAOg/IA1AAIAAAUIgmAAIgDAVIADgBIADAAQAPAAALALQAKAKAAAQQAAARgMAMQgLALgQAAQgOAAgKgJg");
	this.shape_11.setTransform(350,161.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#994D00").s().p("AABA5IAAhdIgXAAIANgVIAgAAIAAByg");
	this.shape_12.setTransform(340.4,161);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#994D00").s().p("AgUA3QgJgHgFgMQgFgMAAgXQAAgeAJgOQALgQATgBQAMABAJAGQAJAGAFANQAFANAAAVQAAAXgFANQgFAMgIAHQgJAFgNABQgMgBgIgFgAgJgjQgEAEgCAIQgCAJAAAPQAAAXAFAIQAFAIAHAAQAIAAAFgIQAGgJAAgWQAAgWgGgJQgFgJgIAAQgEAAgFAEg");
	this.shape_13.setTransform(332.3,161);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#994D00").s().p("AgnA7IAAgKIAkgkQAMgNAEgIQAEgHAAgHQAAgGgEgFQgFgEgHAAQgGAAgEAFQgFAFAAAJIgWAAQABgTALgKQALgLAQAAQAKAAAIAEQAIAFAFAJQAFAIAAAIQAAAKgGANQgGAKgPAQIgMAOIAoAAIAAAUg");
	this.shape_14.setTransform(323.2,160.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#994D00").s().p("AgGAqIgkhTIAWAAIAUAwIAWgwIAVAAIgkBTg");
	this.shape_15.setTransform(309.9,162.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#994D00").s().p("AgfAfQgNgNAAgSQAAgTAPgNQANgMAQABQALAAALAFQALAHAGAJQAGALAAALQAAAMgGAKQgGALgLAGQgKAGgMgBQgSAAgNgNgAgQgQQgGAGAAAKQAAALAGAHQAHAHAJAAQAKAAAGgHQAHgHAAgLQAAgKgHgGQgGgIgKABQgJgBgHAIg");
	this.shape_16.setTransform(300.3,162.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#994D00").s().p("AAZA5IgwhKIAABKIgWAAIAAhyIAVAAIAxBLIAAhLIAVAAIAAByg");
	this.shape_17.setTransform(289.2,161);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#994D00").s().p("ANrCjIAAlEIEYAAIAAFEgAJJCjIAAlEIEYAAIAAFEgAEnCjIAAlEIEYAAIAAFEgAAFCjIAAlEIEYAAIAAFEgAkcCjIAAlEIEYAAIAAFEgAo+CjIAAlEIEYAAIAAFEgAtgCjIAAlEIEYAAIAAFEgAyCCjIAAlEIEYAAIAAFEg");
	this.shape_18.setTransform(140.5,191.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#994D00").s().p("AgYAyQgLgIgDgOIAXAAQADAFAEADQAEACAFABQAGAAAFgGQAFgFABgIQAAgIgFgFQgFgGgGABQgDAAgEACIgHAFIgRgEIAOg/IA1AAIAAAUIgmAAIgEAVIAEgBIADAAQAQAAAKALQAKAKAAAQQAAARgLAMQgMALgQAAQgOAAgKgJg");
	this.shape_19.setTransform(88,161.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#994D00").s().p("AABA5IAAhdIgXAAIANgVIAgAAIAAByg");
	this.shape_20.setTransform(78.3,161);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#994D00").s().p("AgUA3QgJgHgFgMQgFgMAAgXQAAgeAJgOQALgQATgBQAMABAJAGQAJAGAFANQAFANAAAVQAAAXgFANQgFAMgIAHQgJAFgNABQgMgBgIgFgAgJgjQgEAEgCAIQgCAJAAAPQAAAXAFAIQAFAIAHAAQAIAAAFgIQAGgJAAgWQAAgWgGgJQgFgJgIAAQgEAAgFAEg");
	this.shape_21.setTransform(70.2,161);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#994D00").s().p("AgnA7IAAgKIAkgkQAMgNAEgIQAEgHAAgHQAAgGgEgFQgFgEgHAAQgGAAgEAFQgFAFAAAJIgWAAQABgTALgKQALgLAQAAQAKAAAIAEQAIAFAFAJQAFAIAAAIQAAAKgGANQgGAKgPAQIgMAOIAoAAIAAAUg");
	this.shape_22.setTransform(61.1,160.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#994D00").s().p("AgKA6IAAhBIgLAAIAAgTIALAAIAAgfIATAAIAAAfIAOAAIAAATIgOAAIAABBg");
	this.shape_23.setTransform(50,160.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#994D00").s().p("AgeAfQgNgNAAgRQAAgMAHgLQAGgKALgGQALgFANAAQAMAAAKAEQAKAFAHAKIgSAKQgFgGgFgCQgFgCgGAAQgLAAgIAIQgHAGAAALQAAAKAHAIQAHAGALAAQAOAAAIgKIARAMQgOARgZAAQgVAAgNgNg");
	this.shape_24.setTransform(42.3,162.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#994D00").s().p("AgqArQgRgTAAgYQAAgQAIgOQAIgNAOgIQAOgJAPAAQAZABARARQASASAAAZQAAAZgSARQgRARgZABQgZAAgRgSgAgagbQgLAMAAAQQAAASAOALQALAJAMAAQAQAAALgLQALgLAAgRQAAgPgLgLQgLgMgQAAQgPAAgLALg");
	this.shape_25.setTransform(30.5,161);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgvBGQgSgSAAgdQAAgdASgSQAQgUAaAAQAKAAAKAFQAKAFAJAIIAAg/IAgAAIAACvIggAAIAAgNQgKAJgJAEQgKAEgJAAQgZAAgSgUgAgXgDQgLAJAAARQAAAQALALQAJAKAOAAQAPAAAKgKQAKgKAAgRQAAgRgKgJQgKgLgPABQgOAAgJAKg");
	this.shape_26.setTransform(758.5,264.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgcQAAgcATgUQATgTAcAAQAeAAASATQATAUAAAeIAAAGIhmAAQACAOAKAIQAKAIANAAQATAAANgNIAbANQgLAOgOAHQgOAHgTAAQgdAAgTgTgAgVgfQgHAEgGAMIBFAAQgDgLgJgGQgKgHgMAAQgNAAgJAIg");
	this.shape_27.setTransform(743.2,266.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAZBBIAAg3QAAgWgCgIQgCgHgFgEQgFgEgIAAQgJAAgHAGQgGAHgDALQgCAHAAASIAAAzIggAAIAAh+IAgAAIAAANQALgJAJgDQAIgEAJgBQATAAANAOQAMALAAAWIAABTg");
	this.shape_28.setTransform(728.4,266.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AghBBIAAh+IAbAAIAAAQQAFgKAGgEQAIgFAIgBQAHAAAGAEIgKAcQgFgDgEAAQgHgBgFAKQgEAJAAAaIAAAGIAAAzg");
	this.shape_29.setTransform(717.7,266.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgvAwQgSgTAAgdQAAgcASgTQAQgTAZAAQALAAAKAEQAKAFAJAIIAAgOIAgAAIAAB/IggAAIAAgOQgJAJgKAEQgKAEgKAAQgYAAgSgTgAgYgaQgJAKgBAQQABAQAJALQALALANAAQAQAAAJgLQAKgKAAgRQAAgQgKgKQgJgKgQAAQgOAAgKAKg");
	this.shape_30.setTransform(705.2,266.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AguBWIAAirIBdAAIAAAgIg8AAIAAAfIA8AAIAAAfIg8AAIAAAtIA8AAIAAAgg");
	this.shape_31.setTransform(691.8,264.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgsAtIAUgVQAFAGAIAEQAHAEAFAAQAGAAAEgDQAEgDAAgEQAAgHgOgHIgKgFQgegPAAgXQAAgQALgKQAMgLARAAQAMAAALAFQALAGAIAKIgUAUQgMgMgKAAQgEAAgDACQgDACAAAEQAAACACADIAIAGIAMAFQASAKAHAIQAHAKAAAMQAAARgMAMQgNALgUAAQgcAAgQgWg");
	this.shape_32.setTransform(673,266.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AghBBIAAh+IAbAAIAAAQQAFgKAGgEQAIgFAIgBQAHAAAGAEIgKAcQgFgDgEAAQgHgBgFAKQgEAJAAAaIAAAGIAAAzg");
	this.shape_33.setTransform(664.4,266.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AguAwQgUgUAAgcQAAgdAWgUQATgRAZAAQARAAAQAJQAQAJAJAPQAJAQAAARQAAASgJAQQgJAPgPAJQgQAJgSAAQgbAAgTgTgAgYgZQgKAKAAAPQAAARAKAKQAKAKAOAAQAPAAAKgKQAKgLAAgQQAAgPgKgLQgKgKgPAAQgOAAgKALg");
	this.shape_34.setTransform(652.5,266.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgQBXIAAhjIgRAAIAAgbIARAAIAAgvIAfAAIAAAvIATAAIAAAbIgTAAIAABjg");
	this.shape_35.setTransform(641.3,264);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AguAvQgSgUAAgbQgBgRAJgQQAKgPARgJQAQgJAUAAQASAAAQAIQAPAHAKAOIgbAPQgHgIgIgDQgIgDgJAAQgRAAgLAKQgMALABAQQAAAQALAKQAKALARAAQAVAAAMgPIAZARQgVAbglAAQggAAgUgUg");
	this.shape_36.setTransform(629.8,266.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgcQAAgcATgUQATgTAcAAQAeAAASATQATAUAAAeIAAAGIhmAAQACAOAKAIQAJAIAOAAQATAAANgNIAbANQgLAOgOAHQgOAHgTAAQgdAAgTgTgAgVgfQgHAEgFAMIBEAAQgDgLgJgGQgKgHgMAAQgMAAgKAIg");
	this.shape_37.setTransform(614.6,266.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgeBRQgOgJgJgTIAbgRQANAXAPAAQAIAAAGgFQAGgEAAgHQAAgGgFgGQgDgGgOgMQgcgWgJgMQgIgNAAgMQAAgSANgNQAOgMATAAQANgBAMAHQALAFAOAQIgYAVQgNgSgNAAQgFAAgFAEQgEADAAAFQAAAEADAEQAEAFATASIAXASQAKAKAEAJQAEAKAAALQAAAUgPAOQgOAOgYAAQgRABgOgKg");
	this.shape_38.setTransform(600.4,264.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgcQAAgcATgUQATgTAcAAQAeAAASATQATAUAAAeIAAAGIhmAAQACAOAKAIQAKAIANAAQASAAAOgNIAbANQgKAOgOAHQgPAHgTAAQgdAAgTgTgAgVgfQgHAEgGAMIBFAAQgDgLgJgGQgKgHgMAAQgNAAgJAIg");
	this.shape_39.setTransform(580.1,266.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgQBXIAAhjIgRAAIAAgbIARAAIAAgvIAfAAIAAAvIATAAIAAAbIgTAAIAABjg");
	this.shape_40.setTransform(568.9,264);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgPBaIAAh/IAfAAIAAB/gAgNg2QgGgGAAgIQAAgJAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAJQAAAJgGAFQgGAHgIgBQgHABgGgHg");
	this.shape_41.setTransform(562.3,263.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgPBYIAAivIAfAAIAACvg");
	this.shape_42.setTransform(556.6,263.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AguBWIAAirIBdAAIAAAgIg9AAIAAAfIA9AAIAAAfIg9AAIAAAtIA9AAIAAAgg");
	this.shape_43.setTransform(548,264.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgvBGQgSgSAAgdQAAgdARgSQARgUAaAAQAKAAAKAFQAKAFAJAIIAAg/IAgAAIAACvIggAAIAAgNQgKAJgJAEQgJAEgKAAQgZAAgSgUgAgXgDQgLAJABARQgBAQALALQAKAKAOAAQAOAAAKgKQAKgKAAgRQAAgRgKgJQgKgLgPABQgNAAgKAKg");
	this.shape_44.setTransform(216.1,264.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgcQAAgcATgUQATgTAcAAQAdAAATATQATAUAAAeIAAAGIhmAAQADAOAJAIQAKAIAOAAQARAAANgNIAbANQgKAOgOAHQgNAHgUAAQgdAAgTgTgAgWgfQgGAEgFAMIBEAAQgDgLgKgGQgJgHgMAAQgMAAgLAIg");
	this.shape_45.setTransform(200.8,266.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAZBBIAAg3QAAgWgCgIQgCgHgFgEQgFgEgIAAQgJAAgHAGQgGAHgDALQgCAHAAASIAAAzIggAAIAAh+IAgAAIAAANQALgJAJgDQAIgEAJgBQATAAANAOQAMALAAAWIAABTg");
	this.shape_46.setTransform(186,266.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AghBBIAAh+IAbAAIAAAQQAFgKAGgEQAIgFAIgBQAHAAAGAEIgKAcQgFgDgEAAQgHgBgFAKQgEAJAAAaIAAAGIAAAzg");
	this.shape_47.setTransform(175.3,266.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgvAwQgSgTAAgdQAAgcARgTQARgTAaAAQAKAAAKAEQAKAFAJAIIAAgOIAgAAIAAB/IggAAIAAgOQgKAJgJAEQgJAEgKAAQgZAAgSgTgAgXgaQgKAKAAAQQAAAQAKALQAJALAOAAQAQAAAJgLQAKgKAAgRQAAgQgKgKQgKgKgPAAQgOAAgJAKg");
	this.shape_48.setTransform(162.8,266.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AguBWIAAirIBdAAIAAAgIg8AAIAAAfIA8AAIAAAfIg8AAIAAAtIA8AAIAAAgg");
	this.shape_49.setTransform(149.4,264.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgsAtIAUgVQAFAGAIAEQAHAEAFAAQAGAAAEgDQAEgDAAgEQAAgHgOgHIgKgFQgegPAAgXQAAgQALgKQAMgLARAAQAMAAALAFQALAGAIAKIgUAUQgMgMgKAAQgEAAgDACQgDACAAAEQAAACACADIAIAGIAMAFQASAKAHAIQAHAKAAAMQAAARgMAMQgNALgUAAQgcAAgQgWg");
	this.shape_50.setTransform(130.6,266.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgcQAAgcATgUQATgTAcAAQAeAAASATQATAUAAAeIAAAGIhmAAQADAOAJAIQAJAIAOAAQATAAANgNIAbANQgLAOgOAHQgOAHgTAAQgdAAgTgTgAgVgfQgHAEgFAMIBEAAQgDgLgJgGQgKgHgMAAQgMAAgKAIg");
	this.shape_51.setTransform(117.8,266.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgPBYIAAivIAfAAIAACvg");
	this.shape_52.setTransform(107.2,263.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgPBaIAAh/IAfAAIAAB/gAgNg2QgGgGAAgIQAAgJAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAJQAAAJgGAFQgGAHgIgBQgHABgGgHg");
	this.shape_53.setTransform(101.5,263.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("ABGBWIgShsIglBsIgcAAIglhsIgTBsIgfAAIAdirIAhAAIAmB3IAph3IAfAAIAdCrg");
	this.shape_54.setTransform(87.8,264.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgcQAAgcATgUQATgTAcAAQAdAAATATQATAUAAAeIAAAGIhmAAQADAOAJAIQAKAIAOAAQARAAANgNIAbANQgKAOgOAHQgNAHgUAAQgdAAgTgTgAgWgfQgGAEgFAMIBEAAQgDgLgKgGQgJgHgMAAQgMAAgLAIg");
	this.shape_55.setTransform(62.7,266.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgQBXIAAhjIgRAAIAAgbIARAAIAAgvIAfAAIAAAvIATAAIAAAbIgTAAIAABjg");
	this.shape_56.setTransform(51.5,264);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgPBaIAAh/IAfAAIAAB/gAgNg2QgGgGAAgIQAAgJAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAJQAAAJgGAFQgGAHgIgBQgHABgGgHg");
	this.shape_57.setTransform(44.9,263.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgPBYIAAivIAfAAIAACvg");
	this.shape_58.setTransform(39.1,263.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AguBWIAAirIBdAAIAAAgIg8AAIAAAfIA8AAIAAAfIg8AAIAAAtIA8AAIAAAgg");
	this.shape_59.setTransform(30.5,264.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgUBaIAAhkIgMAAIAAgbIAMAAIAAgdQACgLAHgGQAIgGANAAQAKAAAMAEIAAAZQgGgCgFAAQgGAAgCADQgCABAAAGIAAAPIAUAAIAAAbIgUAAIAABkg");
	this.shape_60.setTransform(372.4,123.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AguAwQgUgUAAgcQAAgdAWgUQATgRAZAAQARAAAQAJQAQAJAJAPQAJAQAAARQAAASgJAQQgJAPgPAJQgQAJgSAAQgbAAgTgTgAgYgZQgKAKAAAPQAAARAKAKQAKAKAOAAQAPAAAKgKQAKgLAAgQQAAgPgKgLQgKgKgPAAQgOAAgKALg");
	this.shape_61.setTransform(361.3,126.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgvBGQgSgSAAgdQAAgdARgSQARgUAaABQAKgBAKAFQAKAEAJAJIAAg/IAgAAIAACvIggAAIAAgNQgKAJgJAEQgJAEgKAAQgZAAgSgUgAgXgDQgKAJAAAQQAAARAKALQAJAKAOAAQAQAAAJgKQAKgLAAgRQAAgQgKgJQgKgLgPABQgOAAgJAKg");
	this.shape_62.setTransform(338.8,124.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAZBBIAAg3QAAgWgCgHQgCgIgFgEQgFgEgIAAQgJAAgHAHQgGAGgDAMQgCAGAAASIAAAzIggAAIAAh+IAgAAIAAANQALgJAJgDQAIgEAJAAQATAAANANQAMALAAAWIAABTg");
	this.shape_63.setTransform(324,126.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgcQAAgcATgUQATgTAcAAQAeAAASATQATAUAAAeIAAAGIhmAAQADAOAJAIQAJAIAOAAQATAAANgNIAbANQgLAOgOAHQgOAHgTAAQgdAAgTgTgAgVgfQgHAEgFAMIBEAAQgDgLgJgGQgKgHgMAAQgMAAgKAIg");
	this.shape_64.setTransform(309.1,126.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgsBXIAag4Igwh1IAgAAIAhBQIAkhQIAhAAIhPCtg");
	this.shape_65.setTransform(287.7,128.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgOBWQgKgEgJgJIAAANIggAAIAAivIAgAAIAAA/QAIgJAKgEQALgFAKABQAZgBARAUQASASAAAdQAAAdgSASQgSAUgYAAQgLAAgJgEgAgZgDQgKAJAAAQQAAARAKALQALAKAOAAQAOAAALgKQAJgLABgRQgBgQgJgJQgLgKgOAAQgOgBgLALg");
	this.shape_66.setTransform(273.1,124.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgeBVQgNgEgJgJQgIgJgFgNIAkAAQAEAFAHADQAIADAKAAQAMAAAHgEQAIgEAEgGQADgHAAgQQgJAJgJAEQgJADgLAAQgZAAgSgSQgSgTAAgbQAAgeATgTQARgQAYAAQAJgBALAFQAJAEAKAJIAAgOIAgAAIAABsQAAAhgNAPQgSAUgjABQgSgBgMgFgAgXgxQgKAKAAAPQAAAQAKAKQAKAKAOAAQAPAAAKgKQAJgKAAgPQAAgQgJgLQgKgKgQABQgNAAgKAKg");
	this.shape_67.setTransform(250,128.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAZBBIAAg3QAAgWgCgHQgCgIgFgEQgFgEgIAAQgJAAgHAHQgGAGgDAMQgCAGAAASIAAAzIggAAIAAh+IAgAAIAAANQALgJAJgDQAIgEAJAAQATAAANANQAMALAAAWIAABTg");
	this.shape_68.setTransform(235.2,126.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgPBaIAAh/IAfAAIAAB/gAgNg1QgGgHAAgIQAAgJAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAJQAAAIgGAHQgGAFgIAAQgHAAgGgFg");
	this.shape_69.setTransform(225.1,123.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AghBBIAAh+IAbAAIAAAQQAFgJAGgGQAIgEAIAAQAHAAAGADIgKAbQgFgCgEAAQgHAAgFAJQgEAJAAAaIAAAGIAAAzg");
	this.shape_70.setTransform(218.8,126.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgPBaIAAh/IAfAAIAAB/gAgNg1QgGgHAAgIQAAgJAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAJQAAAIgGAHQgGAFgIAAQgHAAgGgFg");
	this.shape_71.setTransform(211.6,123.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AhBBZIAAitIAgAAIAAAOQAIgJAKgEQALgFAKAAQAZAAARATQASATAAAeQAAAbgSATQgSAUgYAAQgLAAgJgEQgKgEgJgJIAAA8gAgZgwQgKALABAQQgBARAKAKQALAKAOAAQAOAAALgKQAJgKABgRQgBgQgJgKQgLgLgOAAQgOAAgLAKg");
	this.shape_72.setTransform(201.1,128.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAeBAIgegqIgeAqIgkAAIAwhCIgsg9IAmAAIAYAjIAZgjIAkAAIgrA8IAxBDg");
	this.shape_73.setTransform(186.2,126.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AguBWIAAirIBdAAIAAAgIg8AAIAAAfIA8AAIAAAfIg8AAIAAAtIA8AAIAAAgg");
	this.shape_74.setTransform(173.7,124.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgsAtIAUgVQAFAGAIAEQAHAEAFAAQAGAAAEgDQAEgDAAgEQAAgHgOgHIgKgFQgegPAAgXQAAgQALgKQAMgLARAAQAMAAALAFQALAGAIAKIgUAUQgMgMgKAAQgEAAgDACQgDACAAAEQAAACACADIAIAGIAMAFQASAKAHAIQAHAKAAAMQAAARgMAMQgNALgUAAQgcAAgQgWg");
	this.shape_75.setTransform(154.9,126.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgcQAAgcATgUQATgTAcAAQAeAAASATQATAUAAAeIAAAGIhmAAQADAOAJAIQAJAIAOAAQATAAANgNIAbANQgLAOgOAHQgOAHgTAAQgdAAgTgTgAgVgfQgHAEgFAMIBEAAQgDgLgJgGQgKgHgMAAQgMAAgKAIg");
	this.shape_76.setTransform(142.1,126.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgPBYIAAivIAfAAIAACvg");
	this.shape_77.setTransform(131.5,124);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgPBaIAAh/IAfAAIAAB/gAgNg1QgGgHAAgIQAAgJAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAJQAAAIgGAHQgGAFgIAAQgHAAgGgFg");
	this.shape_78.setTransform(125.8,123.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("ABGBWIgShsIglBsIgcAAIglhsIgTBsIgfAAIAdirIAhAAIAmB3IAph3IAfAAIAdCrg");
	this.shape_79.setTransform(112.1,124.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAYBYIAAg4QAAgWgCgIQgBgGgGgEQgFgEgHAAQgJAAgHAGQgHAGgDALQgBAGAAAUIAAAzIggAAIAAivIAgAAIAAA+QAKgIAJgEQAIgFAKAAQATAAANAOQAMALAAAVIAABUg");
	this.shape_80.setTransform(87.5,124);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgtAvQgUgUABgbQAAgRAJgQQAJgPARgJQAQgJAUAAQASAAAQAIQAPAHAJAOIgaAPQgHgIgIgDQgHgDgKAAQgRAAgLAKQgMALAAAQQABAQAKAKQALALARAAQAVAAAMgPIAZARQgVAbglAAQggAAgTgUg");
	this.shape_81.setTransform(72.4,126.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgPBaIAAh/IAfAAIAAB/gAgNg1QgGgHAAgIQAAgJAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAJQAAAIgGAHQgGAFgIAAQgHAAgGgFg");
	this.shape_82.setTransform(62,123.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AghBBIAAh+IAbAAIAAAQQAFgJAGgGQAIgEAIAAQAHAAAGADIgKAbQgFgCgEAAQgHAAgFAJQgEAJAAAaIAAAGIAAAzg");
	this.shape_83.setTransform(55.7,126.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAZBBIAAg3QAAgWgCgHQgCgIgFgEQgFgEgIAAQgJAAgHAHQgGAGgDAMQgCAGAAASIAAAzIggAAIAAh+IAgAAIAAANQALgJAJgDQAIgEAJAAQATAAANANQAMALAAAWIAABTg");
	this.shape_84.setTransform(44.3,126.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AguBWIAAirIBdAAIAAAgIg9AAIAAAfIA9AAIAAAfIg9AAIAAAtIA9AAIAAAgg");
	this.shape_85.setTransform(31.3,124.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#994D00").s().p("ANrCiIAAlEIEYAAIAAFEgAJJCiIAAlEIEYAAIAAFEgAEnCiIAAlEIEYAAIAAFEgAAFCiIAAlEIEYAAIAAFEgAkcCiIAAlEIEYAAIAAFEgAo+CiIAAlEIEYAAIAAFEgAtgCiIAAlEIEYAAIAAFEgAyCCiIAAlEIEYAAIAAFEg");
	this.shape_86.setTransform(660.3,59.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#994D00").s().p("AgfAgQgMgNAAgSQAAgTAMgNQAMgMATAAQATAAANAMQANANAAAUIAAAEIhEAAQABAJAHAFQAGAGAKAAQAMAAAIgIIASAIQgHAJgKAFQgIAEgNABQgUAAgMgNgAgPgVQgDAEgEAIIAtAAQgCgIgGgEQgHgEgHAAQgIAAgIAEg");
	this.shape_87.setTransform(602.9,30.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#994D00").s().p("AgeAfQgNgNAAgRQAAgMAHgLQAGgKALgFQALgHANABQAMAAAKAEQAKAGAHAIIgSAKQgFgFgFgCQgFgCgGAAQgLAAgIAIQgHAGAAALQAAAKAHAIQAHAGALAAQAOAAAIgJIARALQgOASgZAAQgVgBgNgNg");
	this.shape_88.setTransform(592.5,30.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#994D00").s().p("AARAsIAAgmQAAgOgBgFQgCgFgEgDQgDgCgFAAQgFAAgFAEQgFAEgCAIQgBAEAAANIAAAiIgUAAIAAhVIAUAAIAAAJQAIgGAGgDQAFgBAGAAQANAAAIAIQAIAIgBAOIAAA4g");
	this.shape_89.setTransform(582.7,30.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#994D00").s().p("AgfAgQgMgNAAgTQAAgSAMgNQALgMARAAQAHgBAGADQAHADAFAGIAAgKIAWAAIAABVIgWAAIAAgJQgFAGgHACQgGACgHABQgQAAgMgNgAgPgRQgHAHAAAKQAAALAHAHQAHAHAIAAQAKAAAHgHQAGgHAAgLQAAgKgGgHQgHgHgKAAQgJAAgGAHg");
	this.shape_90.setTransform(572.4,30.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#994D00").s().p("AgKA7IAAh1IAVAAIAAB1g");
	this.shape_91.setTransform(565.4,28.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#994D00").s().p("AgfAgQgMgNAAgTQAAgSAMgNQALgMAQAAQAIgBAGADQAHADAGAGIAAgKIAVAAIAABVIgVAAIAAgJQgGAGgHACQgGACgHABQgQAAgMgNgAgPgRQgHAHAAAKQAAALAHAHQAHAHAIAAQAKAAAHgHQAGgHAAgLQAAgKgGgHQgHgHgKAAQgJAAgGAHg");
	this.shape_92.setTransform(558,30.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#994D00").s().p("AgjA6IAAhyIASAAQAQAAAGABQALADAFAIQAHAHAAAKQgBAHgCAFQgDAGgGAEQALAFAEAHQAFAHAAAKQAAAJgFAJQgFAHgIAEQgHAEgNABgAgNAkIAFAAQANABAFgEQAFgDAAgHQAAgHgGgFQgFgEgMAAIgFAAgAgNgLIAFAAQAIAAACgEQAEgDABgGQAAgFgEgEQgDgDgIAAIgFAAg");
	this.shape_93.setTransform(548.5,29);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#994D00").s().p("ANrCiIAAlEIEYAAIAAFEgAJJCiIAAlEIEYAAIAAFEgAEnCiIAAlEIEYAAIAAFEgAAFCiIAAlEIEYAAIAAFEgAkcCiIAAlEIEYAAIAAFEgAo+CiIAAlEIEYAAIAAFEgAtgCiIAAlEIEYAAIAAFEgAyCCiIAAlEIEYAAIAAFEg");
	this.shape_94.setTransform(400.9,59.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#994D00").s().p("AgfAwQgMgNAAgUQAAgSAMgMQALgNARAAQAGAAAHADQAHACAGAHIAAgrIAVAAIAAB1IgVAAIAAgJQgHAGgGACQgHADgFAAQgRAAgMgMgAgQgCQgGAHAAAKQAAAMAHAGQAGAIAJgBQALABAGgIQAGgGABgMQgBgKgGgHQgGgGgLAAQgJAAgHAGg");
	this.shape_95.setTransform(365.2,28.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#994D00").s().p("AgfAgQgMgNgBgSQABgTAMgNQAMgMATAAQATAAANAMQANANAAAUIAAAEIhEAAQABAJAHAFQAGAGAJAAQAMAAAJgIIASAIQgHAJgKAFQgIAEgOABQgSAAgNgNgAgPgVQgEAEgDAIIAtAAQgCgIgGgEQgGgEgJAAQgHAAgIAEg");
	this.shape_96.setTransform(355,30.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#994D00").s().p("AAsAsIAAgrQAAgOgEgFQgEgFgHgBQgFABgFADQgEADgCAFQgCAGAAALIAAAnIgVAAIAAgpQAAgLgBgFQgCgGgDgCQgEgCgEgBQgGABgEADQgEADgDAFQgCAHAAAKIAAAnIgVAAIAAhVIAVAAIAAAKQAGgGAGgDQAHgCAIAAQAIAAAGADQAGAEAEAIQAFgIAHgEQAIgDAIAAQAJAAAHADQAHAFADAHQADAGAAAPIAAAyg");
	this.shape_97.setTransform(342.4,30.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#994D00").s().p("AgfAgQgMgNAAgSQAAgTAMgNQAMgMATAAQATAAANAMQANANAAAUIAAAEIhEAAQABAJAHAFQAGAGAKAAQAMAAAIgIIASAIQgHAJgKAFQgIAEgNABQgUAAgMgNgAgPgVQgDAEgEAIIAtAAQgCgIgGgEQgHgEgHAAQgIAAgIAEg");
	this.shape_98.setTransform(329.7,30.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#994D00").s().p("AgfAgQgNgNABgSQgBgTANgNQAMgMATAAQATAAANAMQANANAAAUIAAAEIhEAAQABAJAHAFQAGAGAKAAQALAAAJgIIASAIQgHAJgKAFQgIAEgNABQgUAAgMgNgAgPgVQgEAEgDAIIAtAAQgCgIgGgEQgGgEgIAAQgJAAgHAEg");
	this.shape_99.setTransform(319.5,30.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#994D00").s().p("AgfAwQgMgNAAgUQAAgSAMgMQALgNARAAQAGAAAHADQAHACAGAHIAAgrIAVAAIAAB1IgVAAIAAgJQgHAGgGACQgHADgFAAQgRAAgMgMgAgQgCQgGAHAAAKQAAAMAHAGQAGAIAJgBQAKABAHgIQAGgGABgMQgBgKgGgHQgHgGgKAAQgJAAgHAGg");
	this.shape_100.setTransform(308.9,28.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#994D00").s().p("AgfAgQgMgNAAgSQAAgTAMgNQAMgMATAAQATAAANAMQANANAAAUIAAAEIhEAAQABAJAHAFQAGAGAKAAQAMAAAIgIIASAIQgHAJgKAFQgIAEgNABQgUAAgMgNgAgPgVQgDAEgEAIIAtAAQgCgIgGgEQgHgEgHAAQgIAAgIAEg");
	this.shape_101.setTransform(298.7,30.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#994D00").s().p("AANA6IgZgxIgCAAIAAAxIgWAAIAAhyIAXAAQASgBAIAEQAJAEAEAHQAGAIgBALQAAAMgFAHQgGAHgKAEIAbAzgAgOgLIAHAAQAJgBAEgCQAEgDAAgHQAAgDgCgDIgFgEIgLgBIgGAAg");
	this.shape_102.setTransform(289.4,29);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#994D00").s().p("ANrCiIAAlEIEYAAIAAFEgAJJCiIAAlEIEYAAIAAFEgAEnCiIAAlEIEYAAIAAFEgAAFCiIAAlEIEYAAIAAFEgAkcCiIAAlEIEYAAIAAFEgAo+CiIAAlEIEYAAIAAFEgAtgCiIAAlEIEYAAIAAFEgAyCCiIAAlEIEYAAIAAFEg");
	this.shape_103.setTransform(141.4,59.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#994D00").s().p("AgfAwQgMgNAAgUQAAgSAMgMQALgNARAAQAGAAAHADQAHACAGAHIAAgrIAVAAIAAB1IgVAAIAAgJQgHAGgGACQgHADgFAAQgRAAgMgMgAgQgCQgGAHAAAKQAAAMAHAGQAGAIAJgBQALABAGgIQAGgGABgMQgBgKgGgHQgGgGgLAAQgJAAgHAGg");
	this.shape_104.setTransform(73.6,28.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#994D00").s().p("AgfAgQgNgNABgSQgBgTANgNQAMgMATAAQATAAANAMQANANAAAUIAAAEIhEAAQABAJAHAFQAGAGAKAAQALAAAJgIIASAIQgHAJgKAFQgIAEgNABQgTAAgNgNgAgPgVQgEAEgDAIIAtAAQgCgIgGgEQgGgEgIAAQgJAAgHAEg");
	this.shape_105.setTransform(63.4,30.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#994D00").s().p("AARAsIAAgmQAAgOgBgFQgCgFgEgDQgDgCgFAAQgFAAgFAEQgFAEgCAIQgBAEAAANIAAAiIgUAAIAAhVIAUAAIAAAJQAIgGAGgDQAFgBAGAAQANAAAIAIQAIAIgBAOIAAA4g");
	this.shape_106.setTransform(53.5,30.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#994D00").s().p("AgWAsIAAhVIASAAIAAALQADgGAEgEQAFgCAGAAQAEAAAFABIgHATIgGgCQgFAAgDAGQgDAGAAARIAAAEIAAAjg");
	this.shape_107.setTransform(46.4,30.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#994D00").s().p("AgfAgQgMgNAAgTQAAgSALgNQAMgMAQAAQAIgBAGADQAHADAFAGIAAgKIAWAAIAABVIgWAAIAAgJQgFAGgHACQgGACgHABQgQAAgMgNgAgPgRQgHAHAAAKQAAALAHAHQAHAHAIAAQALAAAGgHQAHgHgBgLQABgKgHgHQgGgHgLAAQgJAAgGAHg");
	this.shape_108.setTransform(38.1,30.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#994D00").s().p("AgeA6IAAhyIA+AAIAAAVIgpAAIAAAVIApAAIAAAUIgpAAIAAAeIApAAIAAAWg");
	this.shape_109.setTransform(29.2,29);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#994D00").ss(1,1,1).p("EgqTAK5MAslAAAAyIq4MA8dAAA");
	this.shape_110.setTransform(505.4,195.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#994D00").s().p("Eg7kABbIjYi1MB95AAAIjlC1g");
	this.shape_111.setTransform(402.9,360.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF8533").s().p("Eg+8AbcMAAAg23MB95AAAMAAAA23g");
	this.shape_112.setTransform(402.9,175.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_112},{t:this.shape_111}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.orangebar, new cjs.Rectangle(0,0,805.9,369.6), null);


(lib.oct = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AD7C01").ss(0.5,1,1).p("AyEAAMAkJAAA");
	this.shape.setTransform(115.7,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.accoun_number = new cjs.Text("0", "bold 30px 'Century Gothic'", "#FFFFFF");
	this.accoun_number.name = "accoun_number";
	this.accoun_number.lineHeight = 38;
	this.accoun_number.lineWidth = 228;
	this.accoun_number.parent = this;
	this.accoun_number.setTransform(5,2);

	this.timeline.addTween(cjs.Tween.get(this.accoun_number).wait(1));

}).prototype = getMCSymbolPrototype(lib.oct, new cjs.Rectangle(-1,0,235.9,40.4), null);


(lib.Nov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AD7C01").ss(0.5,1,1).p("AyEAAMAkJAAA");
	this.shape.setTransform(115.7,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBmQgQgLgKgXQgJgXAAgrQABg6ARgbQAVgdAkAAQAXAAARALQARAMAKAYQAJAYAAApQAAArgJAYQgKAYgQALQgQALgYAAQgYAAgRgLgAgRhCQgIAGgFAQQgDARAAAeQAAApAJAQQAKAPAPAAQAOAAAJgPQAKgSAAgpQAAgqgJgQQgJgQgPAAQgKAAgIAHg");
	this.shape_1.setTransform(43.2,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhKBvIAAgUIBDhEQAYgXAHgPQAIgPAAgMQAAgNgIgIQgJgIgNAAQgMAAgIAKQgJAJAAASIgpAAQACgjAVgVQATgTAfgBQAUAAAPAJQAPAIAJAQQAJAPAAAQQAAAUgLAWQgLAVgdAeIgXAaIBLAAIAAAmg");
	this.shape_2.setTransform(13.7,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Nov, new cjs.Rectangle(-1,0,236.5,40.4), null);


(lib.Miles_earned = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AD7C01").ss(0.5,1,1).p("AyEAAMAkJAAA");
	this.shape.setTransform(115.7,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguBeQgVgPgFgbIArAAQAEAKAJAFQAIAGAIAAQAPgBAJgJQAKgKAAgPQgBgQgIgJQgKgKgMAAQgGAAgGADQgHAEgGAGIghgHIAah3IBkAAIAAAnIhHAAIgIAnIAIgCIAGAAQAcgBAUAVQATASAAAgQABAfgWAWQgVAWgfAAQgbgBgTgQg");
	this.shape_1.setTransform(72.1,21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0BeQgTgTgCggIAoAAQADAQAJAIQAJAJANAAQAOAAAKgKQAJgJAAgNQAAgPgNgKQgNgKgXAAIAAgjQAPgBAHgDQAHgEAEgGQAEgGAAgGQAAgJgGgGQgHgGgJAAQgIAAgHAGQgIAFgCAIIgoAAQADgXAOgPQAUgUAdAAQAaAAASARQASARAAAXQAAAOgIAMQgHAMgPAHQATAGALAOQALAOAAAUQAAAdgVAUQgVAUghAAQgfAAgUgTg");
	this.shape_2.setTransform(43.1,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARBvIAAgsIhdAAIAAgmIBdiLIApAAIAACLIATAAIAAAmIgTAAIAAAsgAgfAdIAwAAIAAhIg");
	this.shape_3.setTransform(13.9,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Miles_earned, new cjs.Rectangle(-1,0,236.5,40.4), null);


(lib.man_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.man_1, new cjs.Rectangle(0,0,418,684), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,192,47), null);


(lib.helpcenter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.call();
	this.instance.parent = this;
	this.instance.setTransform(0,5);

	this.instance_1 = new lib.call2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#994D00").s().p("AgcA3IAAhpIAXAAIAAAMQAEgIAFgEQAGgDAIAAQAFAAAGADIgJAWQgEgCgEAAQgGAAgEAHQgDAIAAAVIAAAFIAAAsg");
	this.shape.setTransform(134,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#994D00").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_1.setTransform(124,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#994D00").s().p("AgOBJIAAhTIgNAAIAAgWIANAAIAAgoIAaAAIAAAoIAQAAIAAAWIgQAAIAABTg");
	this.shape_2.setTransform(114.7,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#994D00").s().p("AAVA3IAAgvQAAgSgCgGQgBgHgFgDQgEgDgGAAQgIAAgFAFQgGAGgCAKQgBAEgBAQIAAArIgaAAIAAhpIAaAAIAAAKQAKgIAHgCQAHgDAHAAQAQAAALALQAJAJAAASIAABGg");
	this.shape_3.setTransform(105.7,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#994D00").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_4.setTransform(93.2,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#994D00").s().p("AgmAnQgPgQAAgWQgBgPAIgNQAIgNAOgHQAOgIAPAAQARAAAMAHQAMAGAJALIgXANQgGgHgGgCQgGgDgJAAQgOAAgIAJQgKAJAAANQAAANAJAJQAJAJANAAQATAAAJgNIAWAPQgSAWgfAAQgbAAgQgRg");
	this.shape_5.setTransform(80.3,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#994D00").s().p("Ag2BKIAAiQIAbAAIAAAMQAGgIAJgDQAJgEAIAAQAVAAAOAQQAPAPAAAZQAAAXgPAQQgPAPgVABQgIgBgIgDQgIgDgHgHIAAAygAgUgoQgIAJAAANQAAAPAIAIQAIAJAMAAQAMAAAIgJQAIgJAAgNQAAgOgIgIQgIgKgMABQgMAAgIAIg");
	this.shape_6.setTransform(62.1,18.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#994D00").s().p("AgMBKIAAiTIAZAAIAACTg");
	this.shape_7.setTransform(52.8,14.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#994D00").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_8.setTransform(44,16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#994D00").s().p("AAYBIIAAg/IgvAAIAAA/IgcAAIAAiPIAcAAIAAA2IAvAAIAAg2IAbAAIAACPg");
	this.shape_9.setTransform(30.8,14.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcA3IAAhpIAXAAIAAAMQAEgIAFgEQAGgDAIAAQAFAAAGADIgJAWQgEgCgEAAQgGAAgEAHQgDAIAAAVIAAAFIAAAsg");
	this.shape_10.setTransform(134,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_11.setTransform(124,16.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOBJIAAhTIgNAAIAAgWIANAAIAAgoIAaAAIAAAoIAQAAIAAAWIgQAAIAABTg");
	this.shape_12.setTransform(114.7,14.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVA3IAAgvQAAgSgCgGQgBgHgFgDQgEgDgGAAQgIAAgFAFQgGAGgCAKQgBAEgBAQIAAArIgaAAIAAhpIAaAAIAAAKQAKgIAHgCQAHgDAHAAQAQAAALALQAJAJAAASIAABGg");
	this.shape_13.setTransform(105.7,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_14.setTransform(93.2,16.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgmAnQgPgQAAgWQgBgPAIgNQAIgNAOgHQAOgIAPAAQARAAAMAHQAMAGAJALIgXANQgGgHgGgCQgGgDgJAAQgOAAgIAJQgKAJAAANQAAANAJAJQAJAJANAAQATAAAJgNIAWAPQgSAWgfAAQgbAAgQgRg");
	this.shape_15.setTransform(80.3,16.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag2BKIAAiQIAbAAIAAAMQAGgIAJgDQAJgEAIAAQAVAAAOAQQAPAPAAAZQAAAXgPAQQgPAPgVABQgIgBgIgDQgIgDgHgHIAAAygAgUgoQgIAJAAANQAAAPAIAIQAIAJAMAAQAMAAAIgJQAIgJAAgNQAAgOgIgIQgIgKgMABQgMAAgIAIg");
	this.shape_16.setTransform(62.1,18.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMBKIAAiTIAZAAIAACTg");
	this.shape_17.setTransform(52.8,14.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_18.setTransform(44,16.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAYBIIAAg/IgvAAIAAA/IgcAAIAAiPIAcAAIAAA2IAvAAIAAg2IAbAAIAACPg");
	this.shape_19.setTransform(30.8,14.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#994D00").s().p("ApjCuIAAlbITHAAIAAFbg");
	this.shape_20.setTransform(74.5,13.2,1.268,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_20}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139,28.3);


(lib.finalscreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.finalscreen();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.finalscreen_1, new cjs.Rectangle(0,0,1280,720), null);


(lib.Earned = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AD7C01").ss(0.5,1,1).p("AyEAAMAkJAAA");
	this.shape.setTransform(115.7,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARBvIAAgsIhdAAIAAgmIBdiLIApAAIAACLIATAAIAAAmIgTAAIAAAsgAgfAdIAwAAIAAhIg");
	this.shape_1.setTransform(43.1,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnBgIAnhKQgcAAgUgTQgSgTgBgdQABgcATgUQAUgTAbAAQAdAAATAUQAUAUgBAbQABAKgDAKQgDAKgLAUIg3BsgAgShBQgJAIABANQAAAMAIAIQAHAJAMAAQALAAAIgJQAIgIAAgMQgBgNgHgIQgJgJgKAAQgLAAgIAJg");
	this.shape_2.setTransform(14.2,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Earned, new cjs.Rectangle(-1,0,236.5,40.4), null);


(lib.dec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AD7C01").ss(0.5,1,1).p("AyEAAMAkJAAA");
	this.shape.setTransform(115.7,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARBvIAAgsIhdAAIAAgmIBdiLIApAAIAACLIATAAIAAAmIgTAAIAAAsgAgfAdIAwAAIAAhIg");
	this.shape_1.setTransform(41.9,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvBdQgTgUAAgbQAAgKADgKQACgKALgUIA3hsIAiARIgmBKQAcAAATATQAUATAAAdQgBAcgTAUQgUATgcAAQgcAAgTgUgAgTAZQgHAIgBAMQAAANAJAIQAHAJALAAQALAAAIgJQAIgIAAgNQABgMgJgIQgHgJgMAAQgLAAgIAJg");
	this.shape_2.setTransform(12.7,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dec, new cjs.Rectangle(-1,0,235.3,40.4), null);


(lib.cloud2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud2_1, new cjs.Rectangle(0,0,201,50), null);


(lib.cloud1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud1, new cjs.Rectangle(0,0,350,120), null);


(lib.chair3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.chair3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.chair3_1, new cjs.Rectangle(0,0,113,551), null);


(lib.chair2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.chair2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.chair2_1, new cjs.Rectangle(0,0,279,595), null);


(lib.chair1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.chair();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.chair1, new cjs.Rectangle(0,0,331,569), null);


(lib.brown_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AD7C01").ss(1,1,1).p("EgZVg6/Mgt6B1yMBluAAmMAoxh2xMg+8AAQg");
	this.shape.setTransform(456,380.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE7AC").s().p("EhHPA6zMAt6h1yMAhpgAJMA+8gAQMgoxB2xg");
	this.shape_1.setTransform(456,380.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.brown_bg, new cjs.Rectangle(-1,-1,914.1,762.2), null);


(lib.bluebg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30818D").s().p("EhpMAkcMDSYhKbMgAMBLzMjSMAAMg");
	this.shape.setTransform(673.3,243.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bluebg, new cjs.Rectangle(0,0,1346.5,486.4), null);


(lib.bluebar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2EDFF").s().p("AglBmQgSgLgMgZIAjgUQAPAcAUAAQAKAAAHgGQAHgGAAgIQAAgHgFgIQgFgHgSgPQgjgcgKgPQgLgQAAgQQAAgWASgQQAQgQAZAAQAQAAAOAHQAPAIARAUIgeAaQgQgWgRAAQgHAAgFAFQgFAEAAAFQAAAGADAEQAFAHAYAVIAdAYQAMAMAFAMQAGALAAAOQAAAbgTARQgSARgdAAQgWAAgRgLg");
	this.shape.setTransform(505.9,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2EDFF").s().p("AgUBsIAAiuIgnAAIAAgpIB3AAIAAApIgoAAIAACug");
	this.shape_1.setTransform(492.3,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2EDFF").s().p("AAvBsIhbiNIAACNIgpAAIAAjXIAnAAIBbCNIAAiNIApAAIAADXg");
	this.shape_2.setTransform(474.9,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2EDFF").s().p("AgUBsIAAjXIApAAIAADXg");
	this.shape_3.setTransform(459.6,25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2EDFF").s().p("AhPBQQgggiAAguQAAgeAPgaQAPgaAagPQAagPAeAAQAtAAAhAhQAhAhAAAvQAAAvghAhQggAgguAAQgwAAggghgAgxgzQgVAVAAAfQAAAjAaAVQAUAQAZAAQAdAAAUgVQAVgVAAgfQAAgdgVgWQgVgVgdAAQgdAAgUAVg");
	this.shape_4.setTransform(442.8,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D2EDFF").s().p("Ag/BsIAAjXIAsAAQAiAAAQAHQAPAGAJAPQAJAOAAAVQAAAWgLAPQgNAOgUAGQgMADgeAAIAABcgAgWgWIANAAQAPAAAFgDQAHgCADgFQADgFABgHQAAgNgKgFQgIgFgRAAIgMAAg");
	this.shape_5.setTransform(422.3,25.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2EDFF").s().p("ABXBsIgXiHIgtCHIgkAAIgtiHIgYCHIgoAAIAmjXIAnAAIAyCWIAyiWIAoAAIAkDXg");
	this.shape_6.setTransform(391.5,25.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2EDFF").s().p("Ag6BsIAAjXIB1AAIAAAoIhMAAIAAAnIBMAAIAAAnIhMAAIAAA4IBMAAIAAApg");
	this.shape_7.setTransform(370.8,25.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D2EDFF").s().p("Ag6BsIAAjXIB1AAIAAAoIhMAAIAAAnIBMAAIAAAnIhMAAIAAA4IBMAAIAAApg");
	this.shape_8.setTransform(355.2,25.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D2EDFF").s().p("AhUBsIAAjXIAwAAQAuAAAXAMQAXAMAPAaQAOAaAAAiQAAAZgIAVQgIAVgPANQgOAOgRAFQgRAGgpAAgAgsBEIATAAQAbAAANgHQANgGAIgPQAIgQAAgWQAAghgTgTQgSgRglAAIgOAAg");
	this.shape_9.setTransform(336.8,25.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D2EDFF").s().p("Ag6BsIAAjXIB1AAIAAAoIhMAAIAAAnIBMAAIAAAnIhMAAIAAA4IBMAAIAAApg");
	this.shape_10.setTransform(318.6,25.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D2EDFF").s().p("AAYBsIgwhcIgDAAIAABcIgpAAIAAjXIArAAQAjAAAPAHQAPAGAKAPQAJAPAAAUQAAAVgLAOQgJAOgVAHIAzBggAgbgWIANAAQASAAAIgGQAHgFAAgMQAAgHgDgFQgEgFgGgCQgGgDgQAAIgLAAg");
	this.shape_11.setTransform(302.5,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006BB3").s().p("Eg/BADtIAAnfMB+DAAAIAAHlg");
	this.shape_12.setTransform(403.6,24.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#063B5B").s().p("Eg7OABYIjvi1MB97gABIjfC9g");
	this.shape_13.setTransform(403.6,57.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bluebar3, new cjs.Rectangle(0.2,0,806.8,66.9), null);


(lib.bluebar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2EDFF").s().p("AglBmQgSgLgMgZIAjgUQAPAcAUAAQAKAAAHgGQAHgGAAgIQAAgHgFgIQgFgHgSgPQgjgcgKgPQgLgQAAgQQAAgWASgQQAQgQAZAAQAQAAAOAHQAPAIARAUIgeAaQgQgWgRAAQgHAAgFAFQgFAEAAAFQAAAGADAEQAFAHAYAVIAdAYQAMAMAFAMQAGALAAAOQAAAbgTARQgSARgdAAQgWAAgRgLg");
	this.shape.setTransform(493,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2EDFF").s().p("Ag6BsIAAjXIB1AAIAAAoIhMAAIAAAnIBMAAIAAAnIhMAAIAAA4IBMAAIAAApg");
	this.shape_1.setTransform(478.4,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2EDFF").s().p("AgyBsIAAjXIAqAAIAACwIA7AAIAAAng");
	this.shape_2.setTransform(464.4,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2EDFF").s().p("AgTBsIAAjXIAnAAIAADXg");
	this.shape_3.setTransform(452.7,25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2EDFF").s().p("ABXBsIgXiHIguCHIgjAAIgtiHIgYCHIgoAAIAljXIApAAIAwCWIAziWIAnAAIAlDXg");
	this.shape_4.setTransform(435,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D2EDFF").s().p("AAkBsIAAhfIhHAAIAABfIgpAAIAAjXIApAAIAABSIBHAAIAAhSIApAAIAADXg");
	this.shape_5.setTransform(402.9,25.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2EDFF").s().p("AhHBRQggggAAgxQAAggAOgZQAPgZAbgPQAbgPAfAAQAaAAAZALQAZALARAVIgcAbQgegegkAAQgeAAgVAVQgVAVAAAeQAAAVAJARQAJARASAJQARAKAUAAQARAAAPgHQAPgHASgRIAcAdQgYAXgWAJQgVAJgbAAQgxAAggggg");
	this.shape_6.setTransform(381.1,25.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2EDFF").s().p("AgTBsIAAjXIAnAAIAADXg");
	this.shape_7.setTransform(365.1,25.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D2EDFF").s().p("AAYBsIgvhcIgEAAIAABcIgpAAIAAjXIAsAAQAiAAAPAHQAPAGAKAPQAJAPAAAUQAAAVgKAOQgLAOgUAHIAzBggAgbgWIANAAQATAAAHgGQAHgFAAgMQAAgHgEgFQgDgFgHgCQgFgDgQAAIgLAAg");
	this.shape_8.setTransform(353.2,25.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D2EDFF").s().p("AAvBsIhbiNIAACNIgpAAIAAjXIAnAAIBbCNIAAiNIApAAIAADXg");
	this.shape_9.setTransform(332.4,25.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D2EDFF").s().p("Ag6BsIAAjXIB1AAIAAAoIhMAAIAAAnIBMAAIAAAnIhMAAIAAA4IBMAAIAAApg");
	this.shape_10.setTransform(314.1,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006BB3").s().p("Eg/BADtIAAnfMB+DAAAIAAHlg");
	this.shape_11.setTransform(403.6,24.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#063B5B").s().p("Eg7OABYIjvi1MB97gABIjfC9g");
	this.shape_12.setTransform(403.6,57.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bluebar2, new cjs.Rectangle(0.2,0,806.8,66.9), null);


(lib.bluebar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2EDFF").s().p("AAYBsIgvhcIgEAAIAABcIgpAAIAAjXIAsAAQAiAAAPAHQAPAGAJAPQAKAPAAAUQAAAVgKAOQgLAOgUAHIAzBggAgbgWIANAAQATAAAHgGQAHgFAAgMQAAgHgEgFQgDgFgHgCQgFgDgQAAIgLAAg");
	this.shape.setTransform(617,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2EDFF").s().p("Ag6BsIAAjXIB1AAIAAAoIhMAAIAAAnIBMAAIAAAnIhMAAIAAA4IBMAAIAAApg");
	this.shape_1.setTransform(600.1,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2EDFF").s().p("AhDBsIAAjXIAiAAQAeAAANAEQATAFALAOQAMAOAAATQAAAMgGAKQgEAKgNAJQAVAJAIANQAJAOAAATQAAASgJAPQgJAPgPAHQgPAIgZAAgAgZBFIAKAAQAYAAAKgHQAIgGAAgNQAAgNgKgJQgLgIgXAAIgIAAgAgZgWIAJAAQAOAAAHgHQAHgGAAgLQAAgKgHgGQgFgGgPAAIgKAAg");
	this.shape_2.setTransform(583.5,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2EDFF").s().p("ABXBsIgXiHIgtCHIgkAAIgtiHIgYCHIgoAAIAmjXIAnAAIAyCWIAyiWIAoAAIAkDXg");
	this.shape_3.setTransform(560.8,25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2EDFF").s().p("Ag6BsIAAjXIB1AAIAAAoIhMAAIAAAnIBMAAIAAAnIhMAAIAAA4IBMAAIAAApg");
	this.shape_4.setTransform(540.1,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D2EDFF").s().p("AgVBsIAAiuIgmAAIAAgpIB2AAIAAApIgnAAIAACug");
	this.shape_5.setTransform(525.5,25.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2EDFF").s().p("Ag/BsIAAjXIArAAQAjAAAQAHQAPAGAJAPQAJAOAAAVQAAAWgMAPQgMAOgUAGQgLADgfAAIAABcgAgWgWIANAAQAOAAAHgDQAFgCAEgFQAEgFgBgHQAAgNgKgFQgGgFgTAAIgLAAg");
	this.shape_6.setTransform(511.2,25.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2EDFF").s().p("Ag6BsIAAjXIB1AAIAAAoIhMAAIAAAnIBMAAIAAAnIhMAAIAAA4IBMAAIAAApg");
	this.shape_7.setTransform(495.1,25.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D2EDFF").s().p("AglBmQgSgLgMgZIAjgUQAPAcAUAAQAKAAAHgGQAHgGAAgIQAAgHgFgIQgFgHgSgPQgjgcgKgPQgLgQAAgQQAAgWASgQQAQgQAZAAQAQAAAOAHQAPAIARAUIgeAaQgQgWgRAAQgHAAgFAFQgFAEAAAFQAAAGADAEQAFAHAYAVIAdAYQAMAMAFAMQAGALAAAOQAAAbgTARQgSARgdAAQgWAAgRgLg");
	this.shape_8.setTransform(478.5,25.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D2EDFF").s().p("AgPBNQgHgHAAgJQAAgKAHgGQAHgHAIAAQAKAAAGAHQAHAGAAAKQAAAJgHAHQgGAHgKAAQgIAAgHgHgAgPgrQgHgHAAgKQAAgJAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAJQAAAKgHAGQgGAHgKAAQgIAAgHgGg");
	this.shape_9.setTransform(458.6,27.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D2EDFF").s().p("AgUBsIAAiuIgnAAIAAgpIB3AAIAAApIgoAAIAACug");
	this.shape_10.setTransform(439.7,25.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D2EDFF").s().p("AAvBsIhbiNIAACNIgpAAIAAjXIAnAAIBbCNIAAiNIApAAIAADXg");
	this.shape_11.setTransform(422.3,25.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D2EDFF").s().p("AgoBjQgRgKgIgQQgHgQAAgnIAAh/IApAAIAACKQAAASAEAHQADAIAHAFQAHADAKAAQAKABAIgGQAIgEADgIQADgIAAgVIAAiFIApAAIAAB/QAAAggEANQgDANgKAMQgLALgOAGQgNAGgSgBQgWAAgSgLg");
	this.shape_12.setTransform(401.6,25.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D2EDFF").s().p("AhPBQQgggiAAguQAAgeAPgaQAPgaAagPQAagPAeAAQAtAAAhAhQAhAhAAAvQAAAvghAhQggAgguAAQgwAAggghgAgygzQgUAVAAAfQAAAjAaAVQAUAQAZAAQAdAAAUgVQAVgVAAgfQAAgdgVgWQgVgVgdAAQgdAAgVAVg");
	this.shape_13.setTransform(379.5,25.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D2EDFF").s().p("AhHBRQggggAAgxQAAggAOgZQAPgZAbgPQAbgPAfAAQAaAAAZALQAZALARAVIgcAbQgegegkAAQgeAAgVAVQgVAVAAAeQAAAVAJARQAJARASAJQARAKAUAAQARAAAPgHQAPgHASgRIAcAdQgYAXgWAJQgVAJgbAAQgxAAggggg");
	this.shape_14.setTransform(355.3,25.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D2EDFF").s().p("AhHBRQggggAAgxQAAggAOgZQAPgZAbgPQAbgPAfAAQAaAAAZALQAZALARAVIgcAbQgegegkAAQgeAAgVAVQgVAVAAAeQAAAVAJARQAJARASAJQARAKAUAAQARAAAPgHQAPgHASgRIAcAdQgYAXgWAJQgVAJgbAAQgxAAggggg");
	this.shape_15.setTransform(332,25.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D2EDFF").s().p("AA9BsIgRgtIhXAAIgRAtIgrAAIBTjXIApAAIBTDXgAgcAXIA5AAIgdhJg");
	this.shape_16.setTransform(309.1,25.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D2EDFF").s().p("AAkBsIAAhfIhHAAIAABfIgpAAIAAjXIApAAIAABSIBHAAIAAhSIAqAAIAADXg");
	this.shape_17.setTransform(279.4,25.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D2EDFF").s().p("AhHBRQggggAAgxQAAggAOgZQAPgZAbgPQAbgPAfAAQAaAAAZALQAZALARAVIgcAbQgegegkAAQgeAAgVAVQgVAVAAAeQAAAVAJARQAJARASAJQARAKAUAAQARAAAPgHQAPgHASgRIAcAdQgYAXgWAJQgVAJgbAAQgxAAggggg");
	this.shape_18.setTransform(257.6,25.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D2EDFF").s().p("AgTBsIAAjXIAnAAIAADXg");
	this.shape_19.setTransform(241.6,25.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D2EDFF").s().p("AAYBsIgwhcIgDAAIAABcIgpAAIAAjXIArAAQAjAAAPAHQAQAGAJAPQAJAPAAAUQAAAVgKAOQgLAOgUAHIAzBggAgbgWIANAAQASAAAIgGQAHgFAAgMQAAgHgDgFQgEgFgGgCQgGgDgQAAIgLAAg");
	this.shape_20.setTransform(229.7,25.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D2EDFF").s().p("AAvBsIhbiNIAACNIgpAAIAAjXIAnAAIBbCNIAAiNIApAAIAADXg");
	this.shape_21.setTransform(208.9,25.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D2EDFF").s().p("Ag6BsIAAjXIB1AAIAAAoIhMAAIAAAnIBMAAIAAAnIhMAAIAAA4IBMAAIAAApg");
	this.shape_22.setTransform(190.6,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006BB3").s().p("Eg/BADtIAAnfMB+DAAAIAAHlg");
	this.shape_23.setTransform(403.6,24.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#063B5B").s().p("Eg7OABfIjvi1MB97gAIIjfC9g");
	this.shape_24.setTransform(403,58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bluebar, new cjs.Rectangle(0,0,807,67.5), null);


(lib.Balance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AD7C01").ss(0.5,1,1).p("AyEAAMAkJAAA");
	this.shape.setTransform(115.7,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBmQgRgLgJgXQgJgXAAgrQgBg6ATgbQAUgdAkAAQAXAAARALQARAMAJAYQAJAYAAApQAAArgJAYQgJAYgQALQgQALgZAAQgXAAgQgLgAgRhCQgIAGgEAQQgFARAAAeQAAApAKAQQAKAPAOAAQAPAAAJgPQALgSAAgpQAAgqgKgQQgJgQgQAAQgJAAgIAHg");
	this.shape_1.setTransform(100.4,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhJBvIAAgUIBChEQAXgXAIgPQAIgPAAgMQAAgNgIgIQgIgIgNAAQgMAAgKAKQgIAJgBASIgnAAQABgjAUgVQAVgTAfgBQATAAAPAJQAPAIAJAQQAJAPAAAQQAAAUgLAWQgLAVgdAeIgXAaIBMAAIAAAmg");
	this.shape_2.setTransform(70.9,20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARBvIAAgsIhdAAIAAgmIBdiLIApAAIAACLIATAAIAAAmIgTAAIAAAsgAgfAdIAwAAIAAhIg");
	this.shape_3.setTransform(41.9,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AACBsIAAiwIgsAAIAZgnIA8AAIAADXg");
	this.shape_4.setTransform(11.2,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Balance, new cjs.Rectangle(-1,0,235.3,40.4), null);


(lib.account_num = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AD7C01").ss(0.5,1,1).p("A0NAAMAobAAA");
	this.shape.setTransform(129.4,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBmQgQgLgKgXQgIgXgBgrQABg6ARgbQAVgdAkAAQAXAAARALQARAMAJAYQAKAYAAApQAAArgKAYQgJAYgQALQgQALgYAAQgYAAgRgLgAgRhCQgIAGgFAQQgDARAAAeQAAApAJAQQAKAPAPAAQAOAAAJgPQALgSgBgpQABgqgKgQQgKgQgOAAQgKAAgIAHg");
	this.shape_1.setTransform(244,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhJBvIAAgUIBChEQAXgXAJgPQAHgPAAgMQAAgNgIgIQgJgIgNAAQgMAAgIAKQgJAJAAASIgpAAQACgjAVgVQATgTAfgBQAUAAAPAJQAPAIAJAQQAJAPAAAQQAAAUgLAWQgLAVgdAeIgXAaIBLAAIAAAmg");
	this.shape_2.setTransform(214.5,20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvBdQgTgUAAgbQAAgKADgKQACgKALgUIA3hsIAiARIgmBKQAcAAATATQAUATAAAdQgBAcgTAUQgUATgcAAQgcAAgTgUgAgTAZQgHAIgBAMQAAANAJAIQAHAJALAAQALAAAIgJQAIgIAAgNQABgMgJgIQgHgJgMAAQgLAAgIAJg");
	this.shape_3.setTransform(185.5,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhJBvIAAgUIBChEQAXgXAJgPQAHgPAAgMQAAgNgIgIQgJgIgNAAQgMAAgIAKQgJAJAAASIgpAAQACgjAVgVQATgTAggBQATAAAPAJQAPAIAJAQQAJAPAAAQQAAAUgLAWQgLAVgdAeIgXAaIBLAAIAAAmg");
	this.shape_4.setTransform(156.1,20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoBpQgQgHgIgQQgKgPAAgUQAAgRAHgOQAIgOAPgKQgKgKgFgLQgEgLAAgMQAAgRAIgOQAHgOAPgIQAPgHASAAQATAAAPAIQAOAHAIAPQAIAOAAAQQAAAMgEAKQgEAKgMAMQAPAIAIAPQAIAPAAARQAAATgKAPQgJAQgQAIQgPAIgYAAQgZAAgQgIgAgYAWQgKAJABAMQAAANAJAJQAJAJAPAAQAPAAAKgIQAJgIAAgOQAAgNgJgJQgKgJgOAAQgOAAgLAJgAgRhCQgGAHgBAKQAAAKAIAHQAGAHAKAAQAKAAAHgGQAGgHAAgLQAAgLgGgGQgHgHgKAAQgLAAgGAHg");
	this.shape_5.setTransform(127.2,21);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvBdQgUgUAAgbQAAgKAEgKQADgKAKgUIA2hsIAjARIglBKQAbAAATATQAUATgBAdQAAAcgTAUQgUATgbAAQgdAAgTgUgAgTAZQgIAIABAMQAAANAIAIQAHAJALAAQALAAAIgJQAJgIAAgNQgBgMgHgIQgJgJgLAAQgLAAgIAJg");
	this.shape_6.setTransform(97.9,21);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AARBvIAAgsIhdAAIAAgmIBdiLIApAAIAACLIATAAIAAAmIgTAAIAAAsgAgfAdIAwAAIAAhIg");
	this.shape_7.setTransform(68.7,20.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AACBsIAAiwIgsAAIAZgnIA7AAIAADXg");
	this.shape_8.setTransform(38,21);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag0BeQgTgTgCggIAoAAQADAQAJAIQAJAJANAAQAOAAAKgKQAJgJAAgNQAAgPgNgKQgNgKgXAAIAAgjQAPgBAHgDQAHgEAEgGQAEgGAAgGQAAgJgGgGQgHgGgJAAQgIAAgHAGQgIAFgCAIIgoAAQADgXAOgPQAUgUAdAAQAaAAASARQASARAAAXQAAAOgIAMQgHAMgPAHQATAGALAOQALAOAAAUQAAAdgVAUQgVAUghAAQgfAAgUgTg");
	this.shape_9.setTransform(10.3,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.account_num, new cjs.Rectangle(-1,0,275.8,40.4), null);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// viewfinder
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// create global alias to main timeline for event handler  
		_main = this;  
		
		//var sndInstance;
		
		this.stop();
		this.pause.visible = false;
		this.replay.visible = false;
		createjs.Sound.stop();
		
		
		
		this.start.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame() {
			this.gotoAndPlay(1);
			playSound1();	
			console.log("first time play");
		}
		
		
		
		this.start2.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3() {
			this.stop();
			this.start2.visible = false;
			this.pause.visible = true;	
			_main.sndInstance.paused = true; // pause  
		}
		
		
		this.pause.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4() {
			this.play();
			this.start2.visible = true;
			this.pause.visible = false;	
			_main.sndInstance.paused = false;
		}
		
		
		
		/* ------------------------------------------- AUDIO ----------------------------  */
		
		
		
		
		// wait for sound to preload  
		
		
		createjs.Sound.addEventListener("fileload", handleFileLoad);
		createjs.Sound.alternateExtensions = ["mp3"];
		createjs.Sound.registerSounds(
		    [{id:"slide1", src:"bg.mp3"}]
		, "assets/audio/");
		 
		 
		function handleFileLoad(event) {
		    // A sound has been preloaded. This will fire TWICE
		   // console.log("Preloaded:", event.id, event.src);
			
			//if(event.id == "slide5"){	
				//playSound1();		
			//}
		}
		
		function playSound1(){
			createjs.Sound.stop();
			_main.sndInstance = createjs.Sound.play("slide1");	
			console.log("--- play slide 1 sound ");
		}
	}
	this.frame_617 = function() {
		this.stop();
		this.replay.visible = true;
		this.start2.visible = false;
		this.pause.visible = false;
		
		this.Btn.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("https://www.enrich.malaysiaairlines.com/EnrichWebsite/index", "_blank");
		}
		
		
		
		this.visitwebsite.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		
		function fl_MouseClickHandler_6()
		{
			window.open("http://www.malaysiaairlines.com/in/en.html", "_blank");
		}
		
		
		
		this.helpcenter.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		
		function fl_MouseClickHandler_7()
		{
			window.open("http://www.malaysiaairlines.com/in/en/contact.html", "_blank");
		}
		
		
		
		this.replay.addEventListener("click", fl_MouseClickHandler_8.bind(this));
		
		function fl_MouseClickHandler_8()
		{
			this.gotoAndPlay(1);
			this.replay.visible = false;
			this.start2.visible = true;
			this.pause.visible = false;
			createjs.Sound.stop();
			_main.sndInstance.play('slide1');
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(617).call(this.frame_617).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(618));

	// Replay
	this.replay = new lib.pause();
	this.replay.parent = this;
	this.replay.setTransform(50.9,690.5,1,1,0,0,0,38,16.5);
	this.replay._off = true;
	new cjs.ButtonHelper(this.replay, 0, 1, 2, false, new lib.pause(), 3);

	this.timeline.addTween(cjs.Tween.get(this.replay).wait(1).to({_off:false},0).wait(617));

	// Play
	this.start2 = new lib.replay();
	this.start2.parent = this;
	this.start2.setTransform(50.9,690.5,1,1,0,0,0,38,16.5);
	this.start2._off = true;
	new cjs.ButtonHelper(this.start2, 0, 1, 2, false, new lib.replay(), 3);

	this.timeline.addTween(cjs.Tween.get(this.start2).wait(1).to({_off:false},0).wait(617));

	// Pause
	this.pause = new lib.Play();
	this.pause.parent = this;
	this.pause.setTransform(50.8,690.5,1,1,0,0,0,38,16.5);
	this.pause._off = true;
	new cjs.ButtonHelper(this.pause, 0, 1, 2, false, new lib.Play(), 3);

	this.timeline.addTween(cjs.Tween.get(this.pause).wait(1).to({_off:false},0).wait(617));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EhU1AAgIAAg/MCprAAAIAAA/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:659.9,y:691.4}).wait(617));

	// Layer 1
	this.instance = new lib.seek();
	this.instance.parent = this;
	this.instance.setTransform(-426.1,691.4,1,1,0,0,0,543,3.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:659.9},616).wait(1));

	// Pause
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EhVGgAvMCqNAAAIAABfMiqNAAAg");
	this.shape.setTransform(660.2,691.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.6)").s().p("EhaNAClQgyAAAAgyIAAjlQAAgyAyAAMC0bAAAQAyAAAAAyIAADlQAAAygyAAgEhY6AA4MCqLAAAIAAheMiqLAAAMCqLAAAIAABeMiqLAAAIAAheIAABeg");
	this.shape_1.setTransform(684.7,690.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(617));

	// Layer 9
	this.instance_1 = new lib.grains();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(618));

	// Layer 10
	this.visitwebsite = new lib.visitwebsite();
	this.visitwebsite.parent = this;
	this.visitwebsite.setTransform(264.6,490.8,1,1,0,0,0,79,13.9);
	this.visitwebsite.alpha = 0;
	this.visitwebsite._off = true;
	new cjs.ButtonHelper(this.visitwebsite, 0, 1, 2, false, new lib.visitwebsite(), 3);

	this.timeline.addTween(cjs.Tween.get(this.visitwebsite).wait(562).to({_off:false},0).to({y:478.3,alpha:1},13,cjs.Ease.get(1)).wait(43));

	// Layer 8
	this.helpcenter = new lib.helpcenter();
	this.helpcenter.parent = this;
	this.helpcenter.setTransform(507.5,490.8,1,1,0,0,0,59,13.9);
	this.helpcenter.alpha = 0;
	this.helpcenter._off = true;
	new cjs.ButtonHelper(this.helpcenter, 0, 1, 2, false, new lib.helpcenter(), 3);

	this.timeline.addTween(cjs.Tween.get(this.helpcenter).wait(562).to({_off:false},0).to({y:478.3,alpha:1},13,cjs.Ease.get(1)).wait(43));

	// Button
	this.Btn = new lib.Symbol1();
	this.Btn.parent = this;
	this.Btn.setTransform(398.6,410.8,0.033,0.033,0,0,0,213,34.5);
	this.Btn._off = true;
	new cjs.ButtonHelper(this.Btn, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Btn).wait(548).to({_off:false},0).to({regY:33.8,scaleX:1.07,scaleY:1.07,y:410.9},11,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:410.8},3,cjs.Ease.get(-1)).wait(56));

	// Text
	this.instance_2 = new lib.text();
	this.instance_2.parent = this;
	this.instance_2.setTransform(398.6,316.7,1,1,0,0,0,227.6,35.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(546).to({_off:false},0).to({alpha:1},8).wait(64));

	// Logo
	this.instance_3 = new lib.logo_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(400,233.5,0.082,0.082,0,0,0,96,23.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(541).to({_off:false},0).to({regY:23.6,scaleX:1.12,scaleY:1.12,x:400.1,y:233.7},11,cjs.Ease.get(1)).to({regY:23.5,scaleX:1,scaleY:1,x:400,y:233.5},3).wait(63));

	// man
	this.instance_4 = new lib.man_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1511.5,397,1,1,0,0,0,222,355);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(367).to({_off:false},0).to({x:1027},12,cjs.Ease.get(1)).wait(128).to({x:-508.5},19,cjs.Ease.get(-1)).to({_off:true},1).wait(91));

	// Bg
	this.instance_5 = new lib.brown_bg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1624.4,370.1,1,1,0,0,0,341.3,380.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(362).to({_off:false},0).to({x:963.9},12,cjs.Ease.get(1)).wait(133).to({x:-571.6},19,cjs.Ease.get(-1)).to({_off:true},1).wait(91));

	// Layer 7
	this.instance_6 = new lib.finalscreen_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1922.1,360,1,1,0,0,0,640,360);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(507).to({_off:false},0).to({x:640},15,cjs.Ease.get(-1)).wait(96));

	// Thumb
	this.instance_7 = new lib.thumb_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-103.4,868.7,1,1,0,0,0,114,144.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(489).to({_off:false},0).to({x:45.1,y:736.7},5).to({x:53.1,y:745.2},3).to({x:45.1,y:736.7},3).to({x:-103.4,y:868.7},5).to({_off:true},1).wait(112));

	// Red Bar
	this.instance_8 = new lib.redbar();
	this.instance_8.parent = this;
	this.instance_8.setTransform(208.5,634.4,0.033,0.033,0,0,0,143,33.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(448).to({_off:false},0).to({regX:143.3,regY:33.8,scaleX:1.1,scaleY:1.1,x:208.6,y:634.5},13,cjs.Ease.get(0.97)).to({scaleX:1,scaleY:1},2,cjs.Ease.get(-1)).wait(31).to({scaleX:0.96,scaleY:0.96},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).to({_off:true},26).wait(92));

	// orangebar
	this.instance_9 = new lib.orangebar2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(443.9,324.8,0.012,0.012,0,0,0,407.5,189.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(424).to({_off:false},0).to({regX:402.9,regY:184.8,scaleX:1.06,scaleY:1.06,x:443.7,y:463.7},13,cjs.Ease.get(0.99)).to({scaleX:1,scaleY:1,y:462},2,cjs.Ease.get(-0.95)).to({_off:true},87).wait(92));

	// blue bar2
	this.instance_10 = new lib.bluebar3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(443.9,310.3,0.012,0.012,0,0,0,407.5,37.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(427).to({_off:false},0).to({regX:403.5,regY:33.8,scaleX:1.06,scaleY:1.06,x:443.8,y:241},13,cjs.Ease.get(0.99)).to({regX:403.4,scaleX:1,scaleY:1,x:443.7,y:252},2,cjs.Ease.get(-0.95)).to({_off:true},84).wait(92));

	// Sector Data
	this.instance_11 = new lib.sectors_earned();
	this.instance_11.parent = this;
	this.instance_11.setTransform(897.8,585.4,1,1,0,0,0,115.8,20.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(314).to({_off:false},0).to({alpha:1},9).wait(39).to({x:701.4},12,cjs.Ease.get(1)).wait(28).to({alpha:0},7).to({_off:true},1).wait(208));

	// Miles data
	this.instance_12 = new lib.Miles_earned();
	this.instance_12.parent = this;
	this.instance_12.setTransform(377.6,585.4,1,1,0,0,0,115.8,20.2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(311).to({_off:false},0).to({alpha:1},9).wait(42).to({x:181.3},12,cjs.Ease.get(1)).wait(28).to({alpha:0},7).to({_off:true},1).wait(208));

	// Dec data
	this.instance_13 = new lib.dec();
	this.instance_13.parent = this;
	this.instance_13.setTransform(897.8,468.3,1,1,0,0,0,115.8,20.2);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(297).to({_off:false},0).to({alpha:1},10).wait(55).to({x:701.4},12,cjs.Ease.get(1)).wait(28).to({alpha:0},7).to({_off:true},1).wait(208));

	// Nov data
	this.instance_14 = new lib.Nov();
	this.instance_14.parent = this;
	this.instance_14.setTransform(636.2,468.3,1,1,0,0,0,115.8,20.2);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(294).to({_off:false},0).to({alpha:1},10).wait(58).to({x:439.8},12,cjs.Ease.get(1)).wait(28).to({alpha:0},7).to({_off:true},1).wait(208));

	// Oct data
	this.instance_15 = new lib.oct();
	this.instance_15.parent = this;
	this.instance_15.setTransform(377.6,468.3,1,1,0,0,0,115.8,20.2);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(291).to({_off:false},0).to({alpha:1},10).wait(61).to({x:181.3},12,cjs.Ease.get(1)).wait(28).to({alpha:0},7).to({_off:true},1).wait(208));

	// Balance data
	this.instance_16 = new lib.Balance();
	this.instance_16.parent = this;
	this.instance_16.setTransform(897.8,335.8,1,1,0,0,0,115.8,20.2);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(277).to({_off:false},0).to({alpha:1},10).wait(75).to({x:701.4},12,cjs.Ease.get(1)).wait(28).to({alpha:0},7).to({_off:true},1).wait(208));

	// Redeemed data
	this.instance_17 = new lib.Redeemed();
	this.instance_17.parent = this;
	this.instance_17.setTransform(638.8,335.8,1,1,0,0,0,115.8,20.2);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(274).to({_off:false},0).to({alpha:1},10).wait(78).to({x:442.5},12,cjs.Ease.get(1)).wait(28).to({alpha:0},7).to({_off:true},1).wait(208));

	// Earned data
	this.instance_18 = new lib.Earned();
	this.instance_18.parent = this;
	this.instance_18.setTransform(393.5,335.8,1,1,0,0,0,131.7,20.2);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(271).to({_off:false},0).to({alpha:1},10).wait(81).to({x:197.2},12,cjs.Ease.get(1)).wait(28).to({alpha:0},7).to({_off:true},1).wait(208));

	// orangebar
	this.instance_19 = new lib.orangebar();
	this.instance_19.parent = this;
	this.instance_19.setTransform(640.1,408.4,0.028,0.028,0,0,0,402.9,184.5);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(249).to({_off:false},0).to({regY:184.8,scaleX:1.04,scaleY:1.04,x:640,y:463.3},12,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:640.1,y:462},3,cjs.Ease.get(-1)).wait(98).to({x:443.7},12,cjs.Ease.get(1)).wait(33).to({scaleX:1.06,scaleY:1.06,y:463.7},2,cjs.Ease.get(1)).to({regX:407.5,regY:189.1,scaleX:0.01,scaleY:0.01,x:443.9,y:324.8},13,cjs.Ease.get(-1)).to({_off:true},104).wait(92));

	// blue bar2
	this.instance_20 = new lib.bluebar2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(640.1,252,0.028,0.028,0,0,0,403.6,34.1);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(244).to({_off:false},0).to({regX:403.4,regY:33.8,scaleX:1.04,scaleY:1.04,x:640,y:253},12,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:252},3,cjs.Ease.get(-1)).wait(103).to({x:443.7},12,cjs.Ease.get(1)).wait(36).to({regX:403.5,scaleX:1.06,scaleY:1.06,x:443.8,y:241},2,cjs.Ease.get(0.9)).to({regX:407.5,regY:37.8,scaleX:0.01,scaleY:0.01,x:443.9,y:310.3},13,cjs.Ease.get(-1)).to({_off:true},101).wait(92));

	// Date
	this.instance_21 = new lib.Period();
	this.instance_21.parent = this;
	this.instance_21.setTransform(858.3,170.3,1,1,0,0,0,131.7,20.2);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(183).to({_off:false},0).to({alpha:1},12).wait(167).to({x:661.9},12,cjs.Ease.get(1)).to({_off:true},152).wait(92));

	// Number
	this.Account_num = new lib.account_num();
	this.Account_num.parent = this;
	this.Account_num.setTransform(394.8,170.3,1,1,0,0,0,131.8,20.2);
	this.Account_num.alpha = 0;
	this.Account_num._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Account_num).wait(180).to({_off:false},0).to({alpha:1},12).wait(170).to({x:198.4},12,cjs.Ease.get(1)).to({_off:true},152).wait(92));

	// Yellowbar
	this.instance_22 = new lib.yellowbar();
	this.instance_22.parent = this;
	this.instance_22.setTransform(640.5,155.4,0.027,0.027,0,0,0,403.1,57.6);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(161).to({_off:false},0).to({regX:403.4,regY:58.5,scaleX:1.03,scaleY:1.03,y:169.5},11,cjs.Ease.get(1)).to({regY:58.4,scaleX:1,scaleY:1,y:170.5},3,cjs.Ease.get(-1)).wait(187).to({x:444.2},12,cjs.Ease.get(1)).to({_off:true},152).wait(92));

	// blue bar
	this.instance_23 = new lib.bluebar();
	this.instance_23.parent = this;
	this.instance_23.setTransform(640.1,123.4,0.028,0.028,0,0,0,403.5,34.3);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(156).to({_off:false},0).to({regX:403.6,regY:33.9,scaleX:1.03,scaleY:1.03,x:640.2,y:86.3},11,cjs.Ease.get(1)).to({regX:403.4,regY:33.8,scaleX:1,scaleY:1,x:640,y:85.9},3,cjs.Ease.get(-1)).wait(192).to({x:443.7},12,cjs.Ease.get(1)).to({_off:true},152).wait(92));

	// Name
	this.instance_24 = new lib.Tween3("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(404.5,334.1,0.037,0.037);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(33).to({_off:false},0).to({scaleX:1,scaleY:1,y:391.6},10,cjs.Ease.get(1)).to({startPosition:0},2,cjs.Ease.get(-1)).wait(68).to({startPosition:0},0).to({scaleX:14.09,scaleY:14.09,x:-5095,y:2900},30,cjs.Ease.get(-1)).to({scaleX:21.79,scaleY:21.79,x:-8330.1,y:4375.6,alpha:0},10).to({_off:true},1).wait(464));

	// Hello!
	this.instance_25 = new lib.Tween1("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(399.5,317.1,0.025,0.025);
	this.instance_25._off = true;

	this.instance_26 = new lib.Tween2("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(420.6,285.5,1.024,1.023,0,0,0,0.3,0.1);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(28).to({_off:false},0).to({_off:true,regX:0.3,regY:0.1,scaleX:1.02,scaleY:1.02,x:420.6,y:285.5},10,cjs.Ease.get(1)).wait(580));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(28).to({_off:false},10,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:420.5,y:285.6},2,cjs.Ease.get(-1)).wait(73).to({startPosition:0},0).to({scaleX:14.09,scaleY:14.09,x:-4869.5,y:1406.7},30,cjs.Ease.get(-1)).to({scaleX:21.79,scaleY:21.79,x:-7981.4,y:2066.1,alpha:0},10).to({_off:true},1).wait(464));

	// Window
	this.instance_27 = new lib.window_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(827.2,202.3,0.006,0.006,0,0,0,65.5,90.1);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(7).to({_off:false},0).to({regX:62.1,regY:90,scaleX:1.1,scaleY:1.1,x:827.4},9,cjs.Ease.get(1)).to({regX:62,scaleX:1,scaleY:1,x:827.2,y:202.2},2,cjs.Ease.get(-1)).wait(95).to({scaleX:14.09,scaleY:14.09,x:860.1,y:232.7},30,cjs.Ease.get(-1)).to({scaleX:21.79,scaleY:21.79,x:879.5,y:250.6,alpha:0},10).to({_off:true},1).wait(464));

	// Chair3
	this.instance_28 = new lib.chair3_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(1224.5,867.5,1,1,0,0,0,56.5,275.5);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(14).to({_off:false},0).to({y:405},8,cjs.Ease.get(1)).to({y:423.5},2,cjs.Ease.get(-1)).wait(89).to({scaleX:14.09,scaleY:14.09,x:6457.8,y:3350.6},30,cjs.Ease.get(-1)).to({scaleX:21.79,scaleY:21.79,x:9536.2,y:5072.3,alpha:0},10).to({_off:true},1).wait(464));

	// Chair2
	this.instance_29 = new lib.chair2_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(1141.5,1103.5,1,1,0,0,0,139.5,297.5);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(12).to({_off:false},0).to({y:382},8,cjs.Ease.get(1)).to({y:400.5},2,cjs.Ease.get(-1)).wait(91).to({scaleX:14.09,scaleY:14.09,x:5288.3,y:3026.6},30,cjs.Ease.get(-1)).to({scaleX:21.79,scaleY:21.79,x:7727.6,y:4571.3,alpha:0},10).to({_off:true},1).wait(464));

	// Chair1
	this.instance_30 = new lib.chair1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(1001.5,1091,1,1,0,0,0,165.5,284.5);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(10).to({_off:false},0).to({y:351},8,cjs.Ease.get(1)).to({y:369.5},2,cjs.Ease.get(-1)).wait(93).to({scaleX:14.09,scaleY:14.09,x:3315.7,y:2589.7},30,cjs.Ease.get(-1)).to({scaleX:21.79,scaleY:21.79,x:4677.1,y:3895.6,alpha:0},10).to({_off:true},1).wait(464));

	// Bluebg
	this.instance_31 = new lib.bluebg();
	this.instance_31.parent = this;
	this.instance_31.setTransform(644.6,969.5,1,1,0,0,0,673.3,243.2);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(3).to({_off:false},0).to({y:566.2},7,cjs.Ease.get(1)).wait(103).to({scaleX:14.09,scaleY:14.09,x:-1713,y:5360.8},30,cjs.Ease.get(-1)).to({scaleX:21.79,scaleY:21.79,x:-3099.8,y:8181.3,alpha:0},10).to({_off:true},1).wait(464));

	// Yellow bg
	this.instance_32 = new lib.yellowbg();
	this.instance_32.parent = this;
	this.instance_32.setTransform(645.8,-414.2,1,1,0,0,0,673.3,413.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({y:381.3},10,cjs.Ease.get(1)).wait(103).to({scaleX:14.09,scaleY:14.09,x:-1695.3,y:2755.9},30,cjs.Ease.get(-1)).to({scaleX:21.79,scaleY:21.79,x:-3072.5,y:4152.7,alpha:0},10).to({_off:true},1).wait(464));

	// Cloud2
	this.instance_33 = new lib.cloud2_1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(1373.4,224.6,1,1,0,0,0,100.5,25);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(113).to({_off:false},0).to({x:1050.9},408).to({_off:true},1).wait(96));

	// Cloud
	this.instance_34 = new lib.cloud1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-77,44,1,1,0,0,0,175,60);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(113).to({_off:false},0).to({x:476.5},408).to({_off:true},1).wait(96));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#994D00").s().p("AgMBBIAAhoIgXAAIAAgZIBHAAIAAAZIgYAAIAABog");
	this.shape_2.setTransform(875.4,450.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#994D00").s().p("AAcBBIg2hUIAABUIgZAAIAAiBIAYAAIA2BVIAAhVIAZAAIAACBg");
	this.shape_3.setTransform(865,450.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#994D00").s().p("AgiBBIAAiBIBFAAIAAAZIgtAAIAAAXIAtAAIAAAXIgtAAIAAAiIAtAAIAAAYg");
	this.shape_4.setTransform(854,450.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#994D00").s().p("AA1BBIgPhRIgbBRIgUAAIgchRIgOBRIgYAAIAXiBIAYAAIAdBaIAdhaIAZAAIAVCBg");
	this.shape_5.setTransform(840.9,450.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#994D00").s().p("AgiBBIAAiBIBFAAIAAAZIgtAAIAAAXIAtAAIAAAXIgtAAIAAAiIAtAAIAAAYg");
	this.shape_6.setTransform(828.5,450.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#994D00").s().p("AgMBBIAAhoIgXAAIAAgZIBHAAIAAAZIgYAAIAABog");
	this.shape_7.setTransform(819.7,450.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#994D00").s().p("AAlBBIgLgbIgzAAIgLAbIgZAAIAxiBIAYAAIAyCBgAgQAOIAhAAIgRgrg");
	this.shape_8.setTransform(809.3,450.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#994D00").s().p("AgMBBIAAhoIgXAAIAAgZIBHAAIAAAZIgYAAIAABog");
	this.shape_9.setTransform(798.8,450.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#994D00").s().p("AgWA9QgKgHgIgOIAVgNQAJARAMAAQAGAAAEgDQAEgEAAgFQAAgEgDgEQgDgFgKgJQgVgRgGgJQgHgJAAgKQAAgNALgJQAKgKAOAAQAKAAAIAEQAJAFAKAMIgSAQQgJgOgKAAQgEABgDACQgDACAAAEQAAADACADQADAEAOANIARANQAHAIADAHQAEAHAAAIQAAAQgLALQgLAKgSAAQgNAAgKgHg");
	this.shape_10.setTransform(790.1,450.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#994D00").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape_11.setTransform(781.9,452.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#994D00").s().p("AgiBBIAAiBIBFAAIAAAZIgtAAIAAAXIAtAAIAAAXIgtAAIAAAiIAtAAIAAAYg");
	this.shape_12.setTransform(773.8,450.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#994D00").s().p("AAPBBIgdg3IgCAAIAAA3IgZAAIAAiBIAaAAQAVAAAJAEQAJAEAFAJQAGAJAAAMQAAANgGAIQgGAIgNAEIAgA6gAgQgNIAIAAQAKAAAFgDQAFgDgBgHQABgFgDgDQgCgDgEgBQgDgCgJAAIgHAAg");
	this.shape_13.setTransform(759.1,450.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#994D00").s().p("AgiBBIAAiBIBFAAIAAAZIgtAAIAAAXIAtAAIAAAXIgtAAIAAAiIAtAAIAAAYg");
	this.shape_14.setTransform(749,450.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#994D00").s().p("AgnBBIAAiBIAUAAQASAAAHADQALADAHAIQAHAJAAALQAAAHgDAGQgDAGgHAGQAMAFAFAHQAFAJAAALQAAALgFAJQgGAJgJAEQgJAFgOAAgAgPApIAGAAQAPAAAFgEQAFgDAAgIQAAgIgGgFQgGgFgOAAIgFAAgAgPgNIAFAAQAKAAADgEQAEgDAAgHQAAgGgEgDQgDgEgJAAIgGAAg");
	this.shape_15.setTransform(739,450.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#994D00").s().p("AA0BBIgNhRIgcBRIgVAAIgbhRIgOBRIgYAAIAXiBIAXAAIAeBaIAehaIAYAAIAVCBg");
	this.shape_16.setTransform(725.4,450.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#994D00").s().p("AgiBBIAAiBIBFAAIAAAZIgtAAIAAAXIAtAAIAAAXIgtAAIAAAiIAtAAIAAAYg");
	this.shape_17.setTransform(713,450.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#994D00").s().p("AgMBBIAAhoIgXAAIAAgZIBHAAIAAAZIgYAAIAABog");
	this.shape_18.setTransform(704.2,450.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#994D00").s().p("AgmBBIAAiBIAbAAQAUAAAJAEQAJAEAGAJQAGAJAAAMQgBAOgGAIQgIAIgMAEQgHACgRAAIAAA3gAgMgNIAHAAQAIAAAEgBQAEgCACgDQACgDgBgEQAAgIgFgDQgEgDgLAAIgGAAg");
	this.shape_19.setTransform(695.6,450.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#994D00").s().p("AgiBBIAAiBIBFAAIAAAZIgtAAIAAAXIAtAAIAAAXIgtAAIAAAiIAtAAIAAAYg");
	this.shape_20.setTransform(686,450.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#994D00").s().p("AgWA9QgKgHgIgOIAVgNQAJARAMAAQAGAAAEgDQAEgEAAgFQAAgEgDgEQgDgFgKgJQgVgRgGgJQgHgJAAgKQAAgNALgJQAKgKAOAAQAKAAAIAEQAJAFAKAMIgSAQQgJgOgKAAQgEABgDACQgDACAAAEQAAADACADQADAEAOANIARANQAHAIADAHQAEAHAAAIQAAAQgLALQgLAKgSAAQgNAAgKgHg");
	this.shape_21.setTransform(676,450.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#994D00").s().p("AAPBBIgdg3IgCAAIAAA3IgZAAIAAiBIAaAAQAVAAAJAEQAJAEAFAJQAGAJAAAMQAAANgGAIQgGAIgNAEIAgA6gAgQgNIAIAAQALAAAEgDQAEgDAAgHQABgFgDgDQgCgDgEgBQgDgCgJAAIgHAAg");
	this.shape_22.setTransform(661.9,450.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#994D00").s().p("AgXA8QgLgHgEgJQgFgKAAgXIAAhNIAZAAIAABUQAAAKACAEQACAFAEADQAEADAGAAQAGgBAFgDQAEgDACgEQACgFAAgNIAAhQIAZAAIAABNQAAATgDAIQgCAHgGAIQgGAGgIAEQgIAEgLgBQgNAAgKgGg");
	this.shape_23.setTransform(650.4,450.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#994D00").s().p("AgvAvQgTgTAAgcQAAgRAJgRQAJgPAPgJQAQgJASAAQAbAAATAUQAUAUAAAbQAAAdgUATQgSAUgcAAQgdAAgTgVgAgdgeQgNAMAAASQAAAVAQANQAMAKAPAAQARAAAMgMQANgNAAgTQAAgSgNgMQgMgNgSAAQgRAAgMANg");
	this.shape_24.setTransform(637.1,450.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#994D00").s().p("AgLBBIAAg4IgmhJIAaAAIAXAvIAYgvIAbAAIgmBJIAAA4g");
	this.shape_25.setTransform(624,450.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#994D00").s().p("AAYBBIgYhTIgXBTIgXAAIgdiBIAYAAIATBSIAXhSIATAAIAYBSIAShSIAYAAIgdCBg");
	this.shape_26.setTransform(605.2,450.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#994D00").s().p("AgiBBIAAiBIBFAAIAAAZIgtAAIAAAXIAtAAIAAAXIgtAAIAAAiIAtAAIAAAYg");
	this.shape_27.setTransform(592.8,450.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#994D00").s().p("AgLBBIAAiBIAXAAIAACBg");
	this.shape_28.setTransform(585.2,450.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#994D00").s().p("AgLBBIguiBIAZAAIAgBbIAhhbIAZAAIgvCBg");
	this.shape_29.setTransform(576.4,450.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#994D00").s().p("AgvAvQgTgTAAgcQAAgRAJgRQAJgPAPgJQAQgJARAAQAcAAATAUQAUAUAAAbQAAAdgUATQgSAUgdAAQgbAAgUgVgAgdgeQgNAMAAASQAAAVAQANQAMAKAOAAQASAAAMgMQANgNAAgTQAAgSgNgMQgMgNgSAAQgRAAgMANg");
	this.shape_30.setTransform(557.5,450.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#994D00").s().p("AgMBBIAAhoIgXAAIAAgZIBHAAIAAAZIgYAAIAABog");
	this.shape_31.setTransform(546.2,450.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#994D00").s().p("AgvAvQgTgTAAgcQAAgRAJgRQAJgPAPgJQAQgJARAAQAcAAATAUQAUAUAAAbQAAAdgUATQgTAUgcAAQgbAAgUgVgAgdgeQgNAMAAASQAAAVAQANQAMAKAOAAQASAAANgMQALgNABgTQAAgSgNgMQgMgNgSAAQgRAAgMANg");
	this.shape_32.setTransform(529.8,450.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#994D00").s().p("AgiBBIAAiBIBFAAIAAAZIgtAAIAAAXIAtAAIAAAXIgtAAIAAAiIAtAAIAAAYg");
	this.shape_33.setTransform(517.9,450.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#994D00").s().p("AgyBBIAAiBIAdAAQAbAAAOAHQANAHAJAQQAJAQAAAUQAAAPgFAMQgFANgJAIQgIAIgLAEQgKADgYAAgAgaApIALAAQAQAAAIgEQAIgEAEgJQAFgJAAgOQAAgTgLgMQgLgKgWAAIgIAAg");
	this.shape_34.setTransform(506.9,450.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#994D00").s().p("AgLBBIAAiBIAXAAIAACBg");
	this.shape_35.setTransform(497.8,450.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#994D00").s().p("AgLBBIguiBIAZAAIAgBbIAhhbIAZAAIguCBg");
	this.shape_36.setTransform(489,450.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#994D00").s().p("AgiBBIAAiBIBFAAIAAAZIgtAAIAAAXIAtAAIAAAXIgtAAIAAAiIAtAAIAAAYg");
	this.shape_37.setTransform(473.3,450.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#994D00").s().p("AAWBBIAAg5IgqAAIAAA5IgZAAIAAiBIAZAAIAAAxIAqAAIAAgxIAYAAIAACBg");
	this.shape_38.setTransform(462.1,450.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#994D00").s().p("AgMBBIAAhoIgXAAIAAgZIBHAAIAAAZIgYAAIAABog");
	this.shape_39.setTransform(452.2,450.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#994D00").s().p("AgMBBIAAg4IglhJIAaAAIAXAvIAYgvIAaAAIglBJIAAA4g");
	this.shape_40.setTransform(437.9,450.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#994D00").s().p("AAlBBIgLgbIgzAAIgLAbIgZAAIAxiBIAYAAIAyCBgAgQAOIAhAAIgRgrg");
	this.shape_41.setTransform(425.6,450.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#994D00").s().p("AgdBBIAAiBIAYAAIAABpIAjAAIAAAYg");
	this.shape_42.setTransform(415.6,450.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#994D00").s().p("AgmBBIAAiBIAbAAQAUAAAJAEQAJAEAGAJQAGAJAAAMQgBAOgGAIQgIAIgMAEQgHACgRAAIAAA3gAgMgNIAHAAQAIAAAEgBQAEgCACgDQABgDAAgEQAAgIgFgDQgEgDgLAAIgGAAg");
	this.shape_43.setTransform(406.3,450.6);

	this.instance_35 = new lib.logo_colored();
	this.instance_35.parent = this;
	this.instance_35.setTransform(449,194);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_35},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[]},10).wait(608));

	// Play button
	this.start = new lib.Playbtn();
	this.start.parent = this;
	this.start.setTransform(572.1,356.8);
	new cjs.ButtonHelper(this.start, 0, 1, 2, false, new lib.Playbtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.start).to({_off:true},10).wait(608));

	// Layer 2
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape_44.setTransform(640,360);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#67BFC9").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape_45.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44}]}).to({state:[{t:this.shape_45}]},143).to({state:[]},379).wait(96));

	// Actions
	this.textField_1 = new cjs.Text("this.", "bold 26px 'Century Gothic'");
	this.textField_1.name = "textField_1";
	this.textField_1.lineHeight = 34;
	this.textField_1.lineWidth = 144;
	this.textField_1.parent = this;
	this.textField_1.setTransform(449.5,380);
	this.textField_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.textField_1).wait(617).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(612.5,-468,1346.5,1549);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1479900527928", id:"index_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;