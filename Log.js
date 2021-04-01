class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(700,50,20,height,angle);
    Matter.Body.setAngle(this.body, angle);
  }
}