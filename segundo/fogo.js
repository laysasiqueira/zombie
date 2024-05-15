class Fire extends Entidade
{
  constructor(spriteSheet, x, y) {
    super();
    this.states = {
      ACTIVE: 'ACTIVE'
    };

    this.spriteSheet = spriteSheet;
    this.x = x;
    this.y = y;
    this.currentState = this.states.ACTIVE;
    this.currentFrame = 0;
    this.vx = 10;
    this.vy = 0.05;
    this.setup();
  }

  update() {
    if (this.killed)
      return;

	  this.currentFrame = this.currentFrame < this.frames.length - 1 ? this.currentFrame + 1 : this.currentFrame; 
    this.width = this.frames[this.currentFrame].width;
    this.height = this.frames[this.currentFrame].height;

    if(this.currentFrame === this.frames.length - 1)
      this.killed = true; 
  }
  
  getSprite() {
	  return this.frames[this.currentFrame];
  }
  
  setup() {
	  this.eStates.ACTIVE = this.spriteSheet.getStats('FOGO');
    this.frames = this.eStates[this.currentState];
    this.width = this.frames[0].width;
    this.height = this.frames[0].height;
  } 
}
