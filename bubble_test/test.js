var main = {
    
    init: function () {
        this.vars();
        this.initContainer();
        this.events();
        this.draw();
        return this;
    },


    vars: function () {
        //called by this.init
//        this.S = 1;
//        this.loadCnt = 0;
//        this.maxLoadCnt = 8;
//        this.BLOB_DURATION = 500;
//        this.progressStep = (150/this.maxLoadCnt)*(1/16);

        this.getDOMElements();
        
        this.particleRadius  = parseInt(getComputedStyle(this.particles[0]).width, 10)/2;
        this.particlesLength = this.particles.length;
        this.particleBuffer = null;
        console.log("particleRadius: ", this.particleRadius);
        console.log("particlesLength: ", this.particlesLength);
        
        this.blobBase = 1.6;
        this.blob = this.blobBase;
        this.blobShift = this.blobBase;
        
//        this.xOffset = this.particleRadius+25;
//        this.yOffset = 1.4*this.particleRadius;
		this.xOffset = 0;
		this.yOffset = 0;
        
        console.log("xOffset: ", this.xOffset);
        console.log("yOffset: ", this.yOffset);
        
        var styles = getComputedStyle(this.particlesContainer);
        this.width = parseInt(styles.width, 10);
        this.height = parseInt(styles.height, 10);
        
        this.calcDimentions();
        
        var i = this.particlesLength;
        while(i--) {
            var particle = this.particles[i];
            particle.x = parseInt(particle.getAttribute('data-left'), 10);
            particle.y = parseInt(particle.getAttribute('data-top'), 10);
        }
    },


    getDOMElements: function () {
        //called by this.vars
        this.particlesContainer = document.querySelector('#scroller');
        this.particles = document.querySelectorAll('.particle');
        this.blobCircle = document.querySelector('#js-blob-circle');
        this.content = document.querySelector('#js-content');
    },
    
    
    draw: function () {
        //called by this.init
        var origin = `${this.bubbleCenter.x}px ${this.bubbleCenter.y}px`,
            h = mojs.h, 
            inEasing = mojs.easing.cubic.in, 
            i = this.particlesLength;
        
        //css property with vendor prefixes
        h.setPrefixedStyle(this.particlesContainer, 'perspective-origin', origin);
        
        while(i--) {
          this.particleBuffer = this.particles[i];
          var x      = Math.abs(this.bubbleCenter.x-this.particleBuffer.x),
              y      = Math.abs(this.bubbleCenter.y-this.particleBuffer.y),
              radius = Math.sqrt(x*x + y*y),
              a      = this.blob - (2*radius)/this.size,
              b      = this.blobShift - (2*radius)/this.size, scaleMax = 1;

          var delta = mojs.helpers.clamp(inEasing(a), 0.03, scaleMax),
              deltaShift = h.clamp((inEasing(b)), 0.03, scaleMax),
              isDeltaChanged = this.particleBuffer.prevDelta !== delta;

          if (isDeltaChanged || this.particleBuffer.prevDeltaShift !== deltaShift) {
          var translateZ = -150*(inEasing(1-deltaShift)),
              transform  = `scale(${delta}) translateZ(${translateZ}px)`;
          h.setPrefixedStyle(this.particleBuffer, 'transform', transform);
          this.particleBuffer.prevDelta      = delta;
          this.particleBuffer.prevDeltaShift = deltaShift;
          }
        }
        
        requestAnimationFrame(this.draw.bind(this));
    },
    

    initContainer: function () {
        this.iscroll = new IScroll('#js-wrapper', {
            scrollX: true,
            freeScroll: true,
            mouseWheel: true,
            probeType: 3
        });
        var x = -this.centerX +  this.wWidth/2 + this.xOffset;
        var y = -this.centerY + this.wHeight/2 +this.yOffset;
        this.iscroll.scrollTo(x,y,10);
    },


    calcDimentions: function () {
        //called by this.vars
        this.wWidth = window.innerWidth;
        this.wHeight = window.innerHeight;
        
        console.log("wWidth: %d, wHeight: %d", this.wWidth, this.wHeight);
        
        this.centerX = this.width/2 - this.wWidth/2;
        this.centerY = this.height/2 - this.wHeight/2;
        
        console.log("centerX: %d, centerY: %d", this.centerX, this.centerY);
        
        this.bubbleCenter = {x: this.centerX, y: this.centerY};
        var x = Math.sqrt(this.wHeight*this.wHeight);
        var y = Math.sqrt(this.wWidth*this.wWidth);
        this.size = Math.min(x,y);
    },
    
    
    events: function () {
        //called by this.init
        window.addEventListener('resize', () => {
            this.calcDimentions();
            this.setBubblePosition();
        });
        this.iscroll.on('scroll', this.setBubblePosition.bind(this));
    },
    
    setBubblePosition: function () {
        this.bubbleCenter.x = -this.iscroll.x + this.wWidth/2 +this.xOffset;
        this.bubbleCenter.y = -this.iscroll.y + this.wHeight/2 +this.yOffset;
        
//        console.log("bubbleCenter.x: %d, bubbleCenter.y: %d", this.bubbleCenter.x, this.bubbleCenter.y);
    }
};

main.init();