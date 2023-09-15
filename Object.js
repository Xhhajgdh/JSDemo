var Sales = "Toyota";
function CarTypes(name){
    return name === "Honda" ? name: "sorry,we don't sell" + name + ".";
}//这个函数检查name是否等于"Honda"。如果是，则返回"Honda"；如果不是，则返回"Sorry, we don't sell " + name + "."。
var car ={myCar:"Saturn",getCar:CarTypes("Honda"),special:Sales};
console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);
//////////////////////////
var car1={manyCars:{a:"saab",b:"jeep"},7:"Mazda"};//嵌套了一个manyCars对象
var unusualPropertyNames ={
    "":"An empty string",//对象属性名可以是空字符串
    "!":"Bang!"//属性名不是合法js标识符时，需用""包裹
};
console.log(car1.manyCars.b);
console.log(car1[7]);//访问一个数字属性名时，最好使用[]
console.log(unusualPropertyNames[""]);
console.log(unusualPropertyNames["!"]);//访问属性值时需用[]访问和赋值
//////////////////////////
//增强的对象字面量
var handler ="simplize";
var theProtoObj = {
    greet:"hello",
    toString(){
        return "This is theProtoObj's toString method."
    }
};
var obj = {
    __proto__: theProtoObj,//设置了obj的[[Prototype]](原型属性)为theProtoObj,这意味着新创建的obj对象会从theProtoObj继承属性，需要先定义theProtoObj
    handler,//属性简写，相当于handler:handler,使用前需要先定义
    toString(){
        return "d "+super.toString();//在方法内部使用super关键字，在当前对象obj方法内部调用其原型中的同名方法，会调用theProtoObj的toString方法
    },//对象字面量的方法简写，之前为toSring:function(){...}
    ["prop_" + (() => 42)()]:42,//(() => 42)(),为一个箭头函数，返回数字42，因此这个属性表达了：prop_42:42
};
console.log(obj.greet);
console.log(obj.handler);
console.log(obj.toString());
console.log(obj["prop_42"]);
