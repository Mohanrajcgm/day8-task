class Car{
    constructor(name,wheels,door,engine,cc,speed){
        this.name=name
        this.wheels=wheels;
        this.door=door;
        this.engine=engine;
        this.cc=cc;
        this.speed=speed;
    }
}
const ferrari =  new Car("ferrari",4,4,"v8",3000,300);
console.log(ferrari);

class Account{
    constructor(name, accountNo, balance){
        this.name=name;
        this.accountNo=accountNo;
        this.balance=balance;
    }
    getBalance(){
        return this.balance;
    }
    getWithdraw(amount){
        if (this.balance>=amount) {
        this.balance=this.balance-amount;
        return this.getBalance();
        }
        else{
            return `insuffient balance${this.balance};`
        }

    }
    
    getDeposit(amount){
        this.balance=this.balance + amount;
        return this.getBalance();
    }
}

const salaryAccount=new Account("mohanraj", 12345678, 10_00_000);
console.log(salaryAccount);
console.log(salaryAccount.getBalance());
console.log(salaryAccount.getWithdraw(10000));
console.log(salaryAccount.getWithdraw(10_00_000));  
console.log(salaryAccount.getDeposit(10000));    
console.log(salaryAccount.getDeposit(1000000)); 



//person
class Person{
    constructor(name,age,gender,designation,organization,location){
        this.name=name
        this.age=age;
        this.gender=gender;
        this.designation=designation;
        this.organization=organization;
        this.location=location;
    }
}
const Mohanraj = new Person("mohanraj", 23, "male", "complaince engineering", "RNTBCI", "mahindera city");
console.log(Mohanraj);


// uber price
class Uber{
    constructor(price){
        this.price= price;
    }
    getPrice(kilometer){
        return this.price = this.price * 13;//assume 13rs per km
    }
}
const Sunil = new Uber(10);
console.log(Sunil.getPrice());

class Circle{
    constructor(radius,colour){
        this.radius=radius;
        this.colour=colour;
    }
    getDouble(double){
        return this.radius=this.radius*2;
}
getRadius(){
    const radius=this.radius;
    return radius;
}
getColour(){
    return this.colour;

}
setRadius(rad){;
    return rad;
}
setColour(colour){
    return colour;
}
getString(radius, colour){
    // let radius=5;
    // let colour="green"; 
    return "circle: " + radius +", "+ colour ;
}
getArea(r){
return r*r*Math.PI;
}
getCircumference(r){
    return 2*Math.PI*r;
}
}


const Round= new Circle(1.0, "red")
console.log(Round);

console.log(Round.getDouble());
console.log(Round.getRadius());
console.log(Round.getColour());
console.log(Round.setRadius(4));
console.log(Round.setColour("yellow"));
console.log(Round.getString(5, "green"));
console.log(Round.getArea(2));
console.log(Round.getCircumference(10));



