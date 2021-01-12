class Rope {
    constructor(bodyA,pointB){
        var o = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:250
        }
        this.pointB = pointB;
        this.rope  = Constraint.create(o);
        World.add(world,this.rope);
    }
    attach(body){
        this.rope.bodyA = body;

    }
    fly(){
        this.rope.bodyA = null;

    }
    display (){
        if (this.rope.bodyA){
            var A = this.rope.bodyA.position;
            var B = this.pointB;
            push ();
            
            stroke ("white");
            strokeWeight (3);
            line (B.x,B.y,A.x,A.y);
            pop ();
        }
    }
}