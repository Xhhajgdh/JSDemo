//查找字符串是否存在某个特定的模式
var re =/hello/;
console.log(re.test("hello world"));
//提取子字符串
var re1 =/\d+/;//匹配一个或多个数字
var math ="price:100".match(re1);//match方法返回一个包含匹配结果的数组，如果没有匹配项，则返回null
console.log(math[0]);
//字符串替换
var re2=/world/;
var sting="hello world";
var newStr=sting.replace(re2,"everyone");
console.log(newStr);
//字符串分割
var re3=/\s+/;//"\s"代表任何空白字符，如空格、制表符或换行符
var parts="hello  world".split(re3);//split方法，根据给定的分隔符来分割字符串
console.log(parts);
//数据验证，检查输入的文本是否为有效的电子邮箱地址、电话等
var emailParttern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
console.log(emailParttern.test("example@example.com"));