// Your code here

class Polygon{
  constructor(arrayZ){
    this.arrayZ = arrayZ
  }

  get countSides(){
    let numberOfsides = this.arrayZ.length 
    return numberOfsides
  }

  get perimeter(){
    let sum =this.arrayZ.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue
    }, 0)
    return sum
  }
}

class Triangle extends Polygon{
  get isValid(){
    if(this.countSides === 3){
        if(this.arrayZ[0] + this.arrayZ[1]<this.arrayZ[2]){
         return false
        }

        if(this.arrayZ[1] + this.arrayZ[2]<this.arrayZ[0]){
          return false
        }

        if(this.arrayZ[2] + this.arrayZ[0]<this.arrayZ[1]){
          return false
        }

        return true
        
      }
  
  } 
  }

  class Square extends Polygon{
    get isValid(){
      if(this.countSides !=4){
        return false
      } 
      if(this.arrayZ[0]===this.arrayZ[1]&&this.arrayZ[0]===this.arrayZ[2]&&this.arrayZ[0]===this.arrayZ[3]){
        return true
      }else{
        return false
      }
      }
    
    get area(){
      return this.arrayZ[0] * this.arrayZ[1]
    }
  }

let test1 = [1,1,1]

let newShape = new Polygon(test1)
let newTriangle = new Triangle(test1)
console.log(newTriangle.isValid)