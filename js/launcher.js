  
class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.launche1 = Constraint.create(options);
        World.add(world, this.launche1);
    }

    display(){
        if (this.launche1.bodyA != null) {
            var pointA = this.launche1.bodyA.position
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);    
        }
    }
    fly(){
    this.launche1.bodyA = null;
    }

    attach(body){
        this.launche1.bodyA = body;
    }

}