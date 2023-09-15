//在引号前加入'\'可以在字符串中插入引号
var quote ="He read \"The Cremation of Sam MGee\" by R.W. Service.";
console.log(quote);
//要在字符串中插入'\',必须转义反斜杠
var home ="c:\\temp";//把文件路径c:\temp赋值给一个字符串
console.log(home);
//在换行之前加上'\'以转义换行，即将一条语句拆成多行书写，但是'\'和换行都不会出现在字符串的值中
var str=
    "this string \
    is broken \
    across multiple\
    lines.";
console.log(str);
//用行末的换行转义符和转义的换行来近似实现"heredoc"语法
var poem =
    "Roses are red,\n\
    Violets are blue.\n\
    Sugar is sweet,\n\
    and so is foo";
console.log(poem);
//使用反引号``(ES6的模版字面量)，可以直接跨多行书写字符串，无需添加任何特殊的转义字符
var poem1 =`
    Roses are red,
    Violets are blue.
    Sugar is sweet,
    and so is foo
`;
console.log(poem1);