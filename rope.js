class Chain{
constructor(bodyA,pointB){


    var options={
bodyA:bodyA,
pointB:pointB,
length:200,
stiffness:1,
angulrStiffness:1,

 }
this.pointB=pointB
this.pointX=bodyA.x
this.pointY=bodyA.y
this.body=Constraint.create(options)
World.add(world,this.body)

}
display(){
    if(this.body.bodyA)
{var posA =this.body.bodyA.position
var posB=this.pointB
push()
strokeWeight(3.5)
line(posA.x,posA.y,posB.x,posB.y)


}
}}