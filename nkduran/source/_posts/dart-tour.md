---
title: Dart语言之旅
date: 2020-01-11 00:52:20
tags:
  - Dart
  - Programming Language
categories: 编程艺术
---

> <font size=3>该文章翻译自**[A tour of the Dart language](https://dart.dev/guides/language/language-tour#comments)**，仅供学习参考。</font>

<br>

这篇文章展示了Dart语言的主要特性，涉及的内容从变量、操作符直到类型和库，它假设读者已经了解了如何使用一种计算机语言进行编程。对于更简短的语言介绍可以参见**[语言示例](https://dart.dev/samples)**。

如果想要学习Dart核心库更多的内容，可以参见**[库介绍](https://dart.dev/guides/libraries/library-tour)**。想要了解语言特性更多的细节，可以参考**[Dart语言规范](https://dart.dev/guides/language/spec)**。

> <font size=2> 注：对于Dart语言的大多数特性都可以使用DartPad来体验（**[DartPad](https://dartpad.dev/)**），这个页面使用嵌入式DartPad展示了一些范例，如果打开后是空页面，请访问 [DartPad troubleshooting page](https://dart.dev/tools/dartpad/troubleshoot) </font>

<br>

### 一个基本的Dart程序

下面的代码用到了Dart很多基本特性：

```dart
// Define a function.
printInteger(int aNumber) {
  print('The number is $aNumber.'); // Print to console.
}

// This is where the app starts executing.
main() {
  var number = 42; // Declare and initialize a variable.
  printInteger(number); // Call a function.
}
```

其中，几乎所有app都会涉及到的特性内容有以下几个方面：

<font size=2>***//This is a comment.***</font>

单行注释。另外Dart也支持多行注释和文档注释，关于细节可参考**[Comments](https://dart.dev/guides/language/language-tour#comments)**.

<font size=2>***int***</font>

一种内建类型，其他**[内建类型](https://dart.dev/guides/language/language-tour#built-in-types)**还包括<font size=3>***String，List*，*bool***</font>

<font size=2>***42***</font>

一个数值字面量，数值字面量是一种编译时常量。

<font size=2>***print()***</font>

一种输出到屏幕的简便方法。

<font size=2>***'...' 或者 "..."***</font>

字符串字面量。

<font size=2>***$variableName 或者 $(expression)***</font>

字符串插值：可以在一个字符串字面量中插入一个字符串变量或者等价的字符串表达式。更多信息请参见**[Strings](https://dart.dev/guides/language/language-tour#strings)**。

<font size=2>***main()***</font>

在应用执行时必需的一个特殊的全局函数。更多信息参见**[The main() function](https://dart.dev/guides/language/language-tour#the-main-function)**。

<font size=2>***var***</font>

一种不用指定类型声明变量的方式。

> 注：这篇文章中的代码遵循了**[Dart风格指南](https://dart.dev/guides/language/effective-dart/style)**。

<br>

### 重要概念

在学习Dart语言时，以下的事实和概念需要牢记在心：

+ 赋给变量的任何值都是***对象***，而每个对象都是一个***class***的实例，甚至数字、函数以及null都是对象。所有的对象都继承自***[Object](https://api.dart.dev/stable/dart-core/Object-class.html)***类。

+ Dart是强类型语言，因为它同时支持类型推导，所以声明对象时的类型修饰符是可以略掉的。在上面的代码中，number可以被推导出为int类型。如果想显式地指定变量为无类型，要使用**[特殊类型dynamic](https://dart.dev/guides/language/effective-dart/design#do-annotate-with-object-instead-of-dynamic-to-indicate-any-object-is-allowed)**。

+ Dart支持泛型，如***List&lt;int&gt;***（整型对象列表）或者***List&lt;dynamic&gt;***（无类型对象列表）。

+ Dart支持全局函数（如**main()**），同时也支持与class或者object相关联的函数定义（也就是静态方法和实例方法）。另外也可以在函数中定义函数（嵌套函数或本地函数）。

+ 类似地，Dart支持全局变量，同时也支持与class或者object相关联的变量定义（也就是静态变量和实例变量）。实例变量也被称作字段或属性。

+ 与Java不同，Dart没有***public、protected、private***等关键字。如果一个标识符以下划线开头，则它的访问权限就是private。具体信息参见**[Libraries and visibility](https://dart.dev/guides/language/language-tour#libraries-and-visibility)**。

+ 标识符首字符必须是字母或者下划线，后面则可以跟任意字符或者数字。

+ Dart同时支持表达式（***expressions***，有运行时值）和语句（***statements***，无运行时值），例如条件表达式 ***condition ? expr1 : expr2***可以取值expr1或者expr2，而if-else语句则没有取值。一个语句经常包含多个表达式，而一个表达式不能直接包含语句。

+ Dart工具支持上报两类问题：***warnings*** 和 ***errors***。Warnings表明代码有可能不会正常工作，但不会妨碍程序运行。Errors又分编译时错误和运行时错误，编译时错误会造成程序无法运行，运行时错误会使程序在运行过程中抛出异常造成运行中断。

<!--more-->

<br>

### 关键字

下表列出了Dart语言中所有需要特殊处理的关键字

| [abstract](https://dart.dev/guides/language/language-tour#abstract-classes)<sup>2</sup> | [dynamic](https://dart.dev/guides/language/language-tour#important-concepts)<sup>2</sup> | [implements](https://dart.dev/guides/language/language-tour#implicit-interfaces)<sup>2</sup> | [show](https://dart.dev/guides/language/language-tour#importing-only-part-of-a-library)<sup>1</sup> | **[as](https://dart.dev/guides/language/language-tour#type-test-operators)**<sup>2</sup> | [else](https://dart.dev/guides/language/language-tour#if-and-else) | [import](https://dart.dev/guides/language/language-tour#using-libraries)<sup>2</sup> | [static](https://dart.dev/guides/language/language-tour#class-variables-and-methods)<sup>2</sup> |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **[assert](https://dart.dev/guides/language/language-tour#assert)** | **[enum](https://dart.dev/guides/language/language-tour#enumerated-types)** | **[in](https://dart.dev/guides/language/language-tour#for-loops)** | **[super](https://dart.dev/guides/language/language-tour#extending-a-class)** | **[async](https://dart.dev/guides/language/language-tour#asynchrony-support)**<sup>1</sup> | **[export](https://dart.dev/guides/libraries/create-library-packages)**<sup>2</sup> | **[interface](https://stackoverflow.com/questions/28595501/was-the-interface-keyword-removed-from-dart)**<sup>2</sup> | **[switch](https://dart.dev/guides/language/language-tour#switch-and-case)**<sup>1</sup> |
| **[await](https://dart.dev/guides/language/language-tour#asynchrony-support)**<sup>3</sup> | **[extends](https://dart.dev/guides/language/language-tour#extending-a-class)** | **[is](https://dart.dev/guides/language/language-tour#type-test-operators)** | **[sync](https://dart.dev/guides/language/language-tour#generators)**<sup>1</sup> | **[break](https://dart.dev/guides/language/language-tour#break-and-continue)** | **[external](https://stackoverflow.com/questions/24929659/what-does-external-mean-in-dart)**<sup>2</sup> | **[library](https://dart.dev/guides/language/language-tour#libraries-and-visibility)**<sup>2</sup> | **[this](https://dart.dev/guides/language/language-tour#constructors)** |
| **[case](https://dart.dev/guides/language/language-tour#switch-and-case)** | **[factory](https://dart.dev/guides/language/language-tour#factory-constructors)**<sup>2</sup> | **[mixin](https://dart.dev/guides/language/language-tour#adding-features-to-a-class-mixins)**<sup>2</sup> | **[throw](https://dart.dev/guides/language/language-tour#throw)** | **[catch](https://dart.dev/guides/language/language-tour#catch)** | **[false](https://dart.dev/guides/language/language-tour#booleans)** | **[new](https://dart.dev/guides/language/language-tour#using-constructors)** | **[true](https://dart.dev/guides/language/language-tour#booleans)** |
| **[class](https://dart.dev/guides/language/language-tour#instance-variables)** | **[final](https://dart.dev/guides/language/language-tour#final-and-const)** | **[null](https://dart.dev/guides/language/language-tour#default-value)** | **[try](https://dart.dev/guides/language/language-tour#catch)** | **[const](https://dart.dev/guides/language/language-tour#final-and-const)** | **[finally](https://dart.dev/guides/language/language-tour#finally)** | **[on](https://dart.dev/guides/language/language-tour#catch)**<sup>1</sup> | **[typedef](https://dart.dev/guides/language/language-tour#typedefs)**<sup>2</sup> |
| **[continue](https://dart.dev/guides/language/language-tour#break-and-continue)** | **[for](https://dart.dev/guides/language/language-tour#for-loops)** | **[operator](https://dart.dev/guides/language/language-tour#overridable-operators)**<sup>2</sup> | **[var](https://dart.dev/guides/language/language-tour#variables)** | **[covariant](https://dart.dev/guides/language/sound-problems#the-covariant-keyword)**<sup>2</sup> | **[Function](https://dart.dev/guides/language/language-tour#functions)**<sup>2</sup> | **[part](https://dart.dev/guides/libraries/create-library-packages#organizing-a-library-package)**<sup>2</sup> | **[void](https://medium.com/dartlang/dart-2-legacy-of-the-void-e7afb5f44df0)** |
| **[default](https://dart.dev/guides/language/language-tour#switch-and-case)** | **[get](https://dart.dev/guides/language/language-tour#getters-and-setters)**<sup>2</sup> | **[rethrow](https://dart.dev/guides/language/language-tour#catch)** | **[while](https://dart.dev/guides/language/language-tour#while-and-do-while)** | **[deferred](https://dart.dev/guides/language/language-tour#lazily-loading-a-library)**<sup>2</sup> | **[hide](https://dart.dev/guides/language/language-tour#importing-only-part-of-a-library)**<sup>1</sup> | **[return](https://dart.dev/guides/language/language-tour#functions)** | **[with](https://dart.dev/guides/language/language-tour#adding-features-to-a-class-mixins)** |
| **[do](https://dart.dev/guides/language/language-tour#while-and-do-while)** | **[if](https://dart.dev/guides/language/language-tour#if-and-else)** | **[set](https://api.dart.dev/stable/dart-core/Set-class.html)**<sup>2</sup> | **[yield](https://dart.dev/guides/language/language-tour#generators)**<sup>3</sup> |                                                              |                                                              |                                                              |                                                              |

Dart要求编程时避免将这些关键字用作标识符，实在需要的话，可以使用这些有***superscripts***标记号的关键字：

+ 标记为1类的关键字称为**上下文关键字**，它们仅在程序特殊的位置才表现出特殊的语义，其他地方都可以作为标识符来使用。

+ 标记为2类的关键字称为**内建标识符**，为了简化从js代码向Dart移植的任务，这些关键字大部分情况下都可以用作标识符，但是不能用在class名或者type名，以及import前缀上。

+ 标记为3类的关键字是在1.0 release之后新增的，主要与**[asynchrony support](https://dart.dev/guides/language/language-tour#asynchrony-support)**相关的限制保留字，在任何被标记为**async、async\*、sync***的函数体中都不允许使用**await**和**yield**作为标识符。

表中除以上几类之外的**保留字**都不允许作为标识符使用。

<br>

### 变量

下面是一个创建变量并初始化的例子

```dart
var name = 'Bob';
```

Dart中变量存储的是一个引用，如<font color=green>*name*</font>变量包含的是一个指向<font color=green>*String*</font>类型对象，且该对象值为'Bob'的引用。这里Dart推导出<font color=green>*name*</font>变量的类型为<font color=green>*String*</font>，但也可以为<font color=green>*name*</font>赋其他值来改变它的类型。如果一个对象不限于指向单一类型的话，可以遵照**design guidelines**为它指定<font color=green>*Object*</font>或者<font color=green>*dynamic*</font>类型。

```dart
dynamic name = 'Bob';
```

另一种方式就是显式地在变量声明中定义它的推导类型。

```dart
String name = 'Bob';
```

> 注：这篇文章沿用了**[style guide recommendation](https://dart.dev/guides/language/effective-dart/design#types)**的约定，对于本地变量使用var而不是显式类型声明。

<br>

#### 缺省值

对于未初始化的变量会缺省为它提供一个为<font color=green>*null*</font>的初始值。未初始化的数值类型的变量也会是null，因为在Dart中数值也是对象。

```dart
int lineCount;
assert(lineCount == null);
```

> 注：release版本的代码会忽略掉assert调用，而在debug版本中则相反，如果condition为false的话，<font color=green>***assert(condition)***</font>会抛出异常，具体参见**[Assert](https://dart.dev/guides/language/language-tour#assert)**。

<br>

#### Final & const

如果变量不想被改变的话，可以使用<font color=green>*final*</font>或者<font color=green>*const*</font>来替代<font color=green>*var*</font>以及其他类型声明。final变量只能被赋值一次，const变量实质上是编译时常量（const变量也是隐式的final变量）。final修饰的全局变量或者类变量会在第一次使用时初始化。

> 注：实例变量可以用<font color=green>*final*</font>修饰但不能用<font color=green>*const*</font>。final修饰的实例变量必须在构造函数执行之前初始化——或者在变量声明的位置，或者在构造函数的**[初始化列表](https://dart.dev/guides/language/language-tour#initializer-list)**中初始化。

<br>

下面是创建和设置final变量的一个例子：

```dart
final name = 'Bob'; // Without a type annotation 
final String nickname = 'Bobby';
```

不能改变final变量的值：

```dart
name = 'Alice'; // Error: a final variable can only be set once.
```

如果需要编译时常量，可以使用<font color=green>*const*</font>关键字。如果是const类变量，请使用<font color=green>*static const*</font>来修饰它。无论在哪里声明const常量，都要为它赋上编译时常量值，比如数值或字符串字面量，const变量，或者能够得到常量结果的数值算术式：

```dart
const bar = 1000000; // Unit of pressure (dynes/cm2)
const double atm = 1.01325 * bar; // Standard atmosphere
```

<font color=green>*const*</font>不仅仅能修饰变量，还可以用来定义常量值，也可以用来在声明构造函数时定义常量值。任何变量都可以赋常量值。

```dart
var foo = const [];
final bar = const [];
const baz = []; // Equivalent to `const []`
```

可以在声明<font color=green>*const*</font>变量的初始化表达式中省略掉<font color=green>*const*</font>，比如上面的<font color=green>*baz*</font>声明。具体细节可以参见**[DON’T use const redundantly](https://dart.dev/guides/language/effective-dart/usage#dont-use-const-redundantly)**。

对于一个非const、非final变量，即使给它赋了常量值，也可以修改它。

```dart
foo = [1, 2, 3]; // Was const []
```

而一个const变量的值不能被修改。

```dart
baz = [42]; // Error: Constant variables can't be assigned a value.
```

在Dart2.5版本中，可以使用**[type checks and casts](https://dart.dev/guides/language/language-tour#type-test-operators)**，**[collection if and collection for](https://dart.dev/guides/language/language-tour#collection-operators)**或者**[spread operators](https://dart.dev/guides/language/language-tour#spread-operator)**几种方式来定义常量。

```dart
// Valid compile-time constants as of Dart 2.5.
const Object i = 3; // Where i is a const Object with an int value...
const list = [i as int]; // Use a typecast.
const map = {if (i is int) i: "int"}; // Use is and collection if.
const set = {if (list is List<int>) ...list}; // ...and a spread.
```

关于使用const创建常量的更多信息参见**[Lists](https://dart.dev/guides/language/language-tour#lists)**，**[Maps](https://dart.dev/guides/language/language-tour#maps)**和**[Classes](https://dart.dev/guides/language/language-tour#classes)**。

<br>

### 内建类型

Dart语言支持以下类型：

+ numbers

+ strings

+ booleans

+ lists 

+ sets

+ maps

+ runes

+ symbols

对于以上类型的对象都可以使用字面量来初始化，比如像<font color=green>*'this is a string'*</font>这样的字符串字面量，或者<font color=green>*true*</font>这样的布尔字面量。

在Dart中，每个变量都关联一个对象——一个类的实例——通常使用构造函数来初始化。一些内建类型会有自己的构造函数，比如可以调用构造函数<font color=green>**Map()**</font>创建map对象。

<br>

#### Numbers 数值

Dart的数值类型包括两种：

<font color=green>**int**</font>

最长64bit的整数类型，具体位数依赖于平台。在Dart VM中，其取值范围为 -2<sup>63</sup> ~ 2<sup>63</sup>-1。如果Dart编译成Javascript的话，该类型会使用**[JavaScript numbers](https://stackoverflow.com/questions/2802957/number-of-bits-in-javascript-numbers/2803010#2803010)**定义，取值范围变为 -2<sup>53 </sup> ~ 2<sup>53</sup>-1。

<font color=green>**double**</font>

由IEEE 754标准定义的64bit双精度浮点数类型

不管是<font color=green>*int*</font>还是<font color=green>*double*</font>都是**[num](https://api.dart.dev/stable/dart-core/num-class.html)**的子类型。num类型支持+、-、\*、/等基本操作符，还支持<font color=green>*abs()*</font>、<font color=green>*ceil()*</font>和<font color=green>*floor()*</font>等方法。除此之外，在<font color=green>*int*</font>类中还定义了像>>这样的位操作符。如果期望的方法在num和它的子类中没有找到的话，可以去**[dart:math](https://api.dart.dev/stable/dart-math)**中看一看。

整数是不含小数点的数值类型，可以表示为以下的字面量形式：

```dart
var x = 1; var hex = 0xDEADBEEF;
```

包含小数点的属于double类型，可以表示为以下形式：

```dart
var y = 1.1;
var exponents = 1.42e5;
```

在Dart2.1中，整数字面量会根据需要自动转换成double类型。

```dart
double z = 1; // Equivalent to double z = 1.0.
```

> 注：在Dart2.1之前，在double上下文中使用整数字面量会报错。



下面这段是字符串和数值互转的范例代码：

```dart
// String -> int
var one = int.parse('1');
assert(one == 1);

// String -> double
var onePointOne = double.parse('1.1');
assert(onePointOne == 1.1);

// int -> String
String oneAsString = 1.toString();
assert(oneAsString == '1');

// double -> String
String piAsString = 3.14159.toStringAsFixed(2);
assert(piAsString == '3.14');
```

如下所示，int类型定义了位移（<<，>>）、AND（&）、OR（|）等操作符。

```dart
assert((3 << 1) == 6); // 0011 << 1 == 0110
assert((3 >> 1) == 1); // 0011 >> 1 == 0001
assert((3 | 4) == 7); // 0011 | 0100 == 0111
```

字面量数值会被处理成编译时常量。对于算术表达式，如果其中的操作符是常量的话，表达式会直接求值转换为编译时常量。

```dart
const msPerSecond = 1000;
const secondsUntilRetry = 5;
const msUntilRetry = secondsUntilRetry * msPerSecond;
```

<br>

#### Strings 字符串

Dart字符串是utf-16编码的字符序列，语法上可以用单引号或双引号来定义。

```dart
var s1 = 'Single quotes work well for string literals.';
var s2 = "Double quotes work just as well.";
var s3 = 'It\'s easy to escape the string delimiter.';
var s4 = "It's even easier to use the other delimiter.";
```

可以以<font color=green>*${expression}*</font>的形式在字符串中插入表达式的值。如果表达式只是一个简单的标识符，大括号可以直接省略掉。如果想得到object对应的字符串，可以调用object类的<font color=green>*toString()*</font>方法实现。

```dart
var s = 'string interpolation';

assert('Dart has $s, which is very handy.' ==
    'Dart has string interpolation, ' +
        'which is very handy.');
assert('That deserves all caps. ' +
        '${s.toUpperCase()} is very handy!' ==
    'That deserves all caps. ' +
        'STRING INTERPOLATION is very handy!');
```

> 注：<font color=green>*==*</font>操作符是判断两个对象是否相等，对字符串对象来讲，如果它们包含的字符序列相同则等式成立。



可以用<font color=green>*+*</font>操作符或者邻近定义的方式拼接字符串：

```dart
var s1 = 'String '
    'concatenation'
    " works even over line breaks.";
assert(s1 ==
    'String concatenation works even over '
        'line breaks.');

var s2 = 'The + operator ' + 'works, as well.';
assert(s2 == 'The + operator works, as well.');
```

另一种方式是使用三引号（'''或者"""）来创建多行的字符串：

```dart
var s1 = '''
You can create
multi-line strings like this one.
''';

var s2 = """This is also a
multi-line string.""";
```

还可以用<font color=green>*r*</font>前缀创建“raw”字符串：

```dart
var s = r'In a raw string, not even \n gets special treatment.';
```

阅读**[Runes and grapheme clusters](https://dart.dev/guides/language/language-tour#characters)**了解如何在字符串中表示unicode字符。

字符串字面量还会被处理成编译时常量。对于嵌入表达式的字符串，如果表达式求值后是null、数值、字符串或者布尔值，整个字符串会在求值后转换为编译时常量。

```dart
// These work in a const string. 
const aConstNum = 0; 
const aConstBool = true; 
const aConstString = 'a constant string'; 
// These do NOT work in a const string. 
var aNum = 0; 
var aBool = true; 
var aString = 'a string'; 
const aConstList = [1, 2, 3]; 

const validConstString = '$aConstNum $aConstBool $aConstString'; 
// const invalidConstString = '$aNum $aBool $aString $aConstList';
```

对于字符串相关的更多内容可以参考**[Strings and regular expressions](https://dart.dev/guides/libraries/library-tour#strings-and-regular-expressions)**。

<br>

#### Booleans 布尔量

为了表示布尔值，Dart支持名为<font color=green>*bool*</font>的布尔类型。布尔值字符量对象仅有两个：<font color=green>*true*</font>和<font color=green>*false*</font>，均为编译时常量。

考虑类型安全，像<font color=green>*if（nonbooleanValue）*</font>或者<font color=green>*assert（nonbooleanValue）*</font>这样的代码都不被允许，而需要显式地检查相应变量值，如下所示：

```dart
// Check for an empty string. 
var fullName = ''; 
assert(fullName.isEmpty); 

// Check for zero. 
var hitPoints = 0; 
assert(hitPoints <= 0); 

// Check for null. 
var unicorn; 
assert(unicorn == null); 

// Check for NaN. 
var iMeantToDoThis = 0 / 0; 
assert(iMeantToDoThis.isNaN);
```

<br>

#### Lists 列表

数组或者说有序对象，在几乎每个程序语言中都是最基本的集合类型。在Dart中，数组被定义为<font color=green>*List*</font>对象，大多数人称其为列表。Dart列表字面量看起来像javascript数组，下面是个简单的例子：

```dart
var list = [1, 2, 3];
```

> 注：对上面的list变量Dart会推导出类型List<int>，如果尝试给list插入非int类型的对象，运行时会抛出错误。更多内容可参考**[type inference](https://dart.dev/guides/language/sound-dart#type-inference)**。



列表使用从零开始的下标规则，0是第一个元素的下标，list.length - 1是最后一个元素的下标。与javascript类似，可以参考下面的例子获取list的长度和引用list元素：

```dart
var list = [1, 2, 3];
assert(list.length == 3);
assert(list[1] == 2);

list[1] = 1;
assert(list[1] == 1);
```

在列表前加上<font color=green>*const*</font>修饰符，可以定义一个列表编译时常量：

```dart
var constantList = const [1, 2, 3];
// constantList[1] = 1; // Uncommenting this causes an error.
```

Dart引入了 **spread operator**（<font color=green>*...*</font>）和 **null-aware spread operator**（<font color=green>*...?*</font>)，为向集合插入多个元素提供了一个简单的方法。

比如可以调用 spread operator（<font color=green>*...*</font>）把一个list的所有元素插入到另一个list中。

```dart
var list = [1, 2, 3]; var list2 = [0, ...list]; assert(list2.length == 4);
```

如果spread operator右边的表达式可能为空，为了避免出现异常可以使用null-aware spread operator（<font color=green>*...?*</font>）。

```dart
var list; var list2 = [0, ...?list]; assert(list2.length == 1);
```

关于spread operator细节用法，可参见**[spread operator proposal](https://github.com/dart-lang/language/blob/master/accepted/2.3/spread-collections/feature-specification.md)**。

另外Dart2.3引入了**collection if**和**collection for**语法，支持使用<font color=green>*if*</font>和<font color=green>*for*</font>生成collection。

下面是使用**collection if**创建一个包含3个或4个元素的list：

```dart
var nav = [  'Home',  'Furniture',  'Plants',  if (promoActive) 'Outlet' ];
```

下面这个例子是用**collection for**在将一个list的元素加入到另一个list前对每个元素循环处理：

```dart
var listOfInts = [1, 2, 3];
var listOfStrings = [
  '#0',
  for (var i in listOfInts) '#$i'
];
assert(listOfStrings[1] == '#1');
```

collection if和collection for的更多细节用法，可参见**[control flow collections proposal](https://github.com/dart-lang/language/blob/master/accepted/2.3/control-flow-collections/feature-specification.md)**。

list类型提供了很多处理列表的简便方法，具体可参考**[Generics](https://dart.dev/guides/language/language-tour#generics)**和**[Collections](https://dart.dev/guides/libraries/library-tour#collections)**。

<br>

#### Sets 集合

Dart中set定义为

包含一组无重复元素的无序集合，Dart提供了set字面量以及**[Set](https://api.dart.dev/stable/dart-core/Set-class.html)**类型支持。

> 注：虽然Set类型一直是Dart核心的一部分，但是直到Dart2.2才引入set字面量的支持。



下面给了一个使用set字面量定义Dart set的简单例子：

```dart
var halogens = {'fluorine', 'chlorine', 'bromine', 'iodine', 'astatine'};
```

> 注：其中<font color=green>*halogens*</font>推导类型是<font color=green>*Set&lt;String&gt;*</font>。如果在set中插入错误的类型数据，分析器或者运行时会抛出一个错误。详情可见**[type inference](https://dart.dev/guides/language/sound-dart#type-inference)**。



使用前面带有类型参数的<font color=green>*{}*</font>可以创建一个空的set，另外对<font color=green>*Set*</font>类型的变量也可以用<font color=green>*{}*</font>直接赋值。

```dart
var names = <String>{};
// Set<String> names = {}; // This works, too.
// var names = {}; // Creates a map, not a set.
```

**Set还是Map**？map字面量语法和set字面量语法相似，<font color=green>*{}*</font>也可以作为<font color=green>*Map*</font>类型缺省值使用。如果忘了给<font color=green>*{}*</font>或者变量加上类型描述，Dart会为Map变量创建一个类型为<font color=green>*Map&lt;dynamic, dynamic&gt;*</font>的对象。

可以用<font color=green>*add()*</font>或者<font color=green>*addAll()*</font>方法为已存在的set变量添加元素：

```dart
var elements = <String>{};
elements.add('fluorine');
elements.addAll(halogens);
```

访问<font color=green>*length*</font>属性获取set包含的元素个数：

```dart
var elements = <String>{};
elements.add('fluorine');
elements.addAll(halogens);
assert(elements.length == 5);
```

在set字面量前加上<font color=green>*const*</font>修饰，可以创建一个set编译时常量：

```dart
final constantSet = const {
  'fluorine',
  'chlorine',
  'bromine',
  'iodine',
  'astatine',
};
// constantSet.add('helium'); // Uncommenting this causes an error.
```

同样地，在Dart2.3中，set也支持spread operators（<font color=green>*...*</font>和<font color=green>*...?*</font>）以及collection ifs&fors，更多细节可参考**[list spread operator](https://dart.dev/guides/language/language-tour#spread-operator)**和**[list collection operator](https://dart.dev/guides/language/language-tour#collection-operators)**的讨论。

关于set的其他细节可参考**[Generics](https://dart.dev/guides/language/language-tour#generics)**和**[Sets](https://dart.dev/guides/libraries/library-tour#sets)**。

<br>

#### Maps 映射

通常map定义为包含若干相关联的key和value的对象。这里的key和value可以为任意类型。在一个map对象中，每个*key*只能出现一次，而相同的*value*可以出现多次。Dart提供了map字面量和<font color=green>*Map*</font>类型的支持。

下面是一对简单的Dart map对象，使用map字面量初始化：

```dart
var gifts = {
  // Key:    Value
  'first': 'partridge',
  'second': 'turtledoves',
  'fifth': 'golden rings'
};

var nobleGases = {
  2: 'helium',
  10: 'neon',
  18: 'argon',
};
```

> 注：Dart推导出<font color=green>*gifts*</font>的类型为<font color=green>*Map&lt;String, String&gt;*</font>，<font color=green>*nobleGases*</font>的类型为<font color=green>*Map&lt;int, String&gt;*</font>。如果在map中插入错误类型的值，分析器和运行时会抛出一个错误。详情可见**[type inference](https://dart.dev/guides/language/sound-dart#type-inference)**。



使用Map的构造函数可以为map变量创建拥有相同值的对象。

```dart
var gifts = Map();
gifts['first'] = 'partridge';
gifts['second'] = 'turtledoves';
gifts['fifth'] = 'golden rings';

var nobleGases = Map();
nobleGases[2] = 'helium';
nobleGases[10] = 'neon';
nobleGases[18] = 'argon';
```

> 注：有人可能习惯使用<font color=green>*new Map()*</font>而不是<font color=green>*Map()*</font>，而在Dart2.0中<font color=green>*new*</font>操作符是可选的，关于细节参见**[Using constructors](https://dart.dev/guides/language/language-tour#using-constructors)**。



可以用类似Javascript的语法为一个已存在的map对象添加一组新的键值对：

```dart
var gifts = {'first': 'partridge'};
gifts['fourth'] = 'calling birds'; // Add a key-value pair
```

同样地像js一样，从map对象中提取一个值：

```dart
var gifts = {'first': 'partridge'};
assert(gifts['first'] == 'partridge');
```

如果查询的key值在map中不存在，则会返回一个null：

```dart
var gifts = {'first': 'partridge'};
assert(gifts['fifth'] == null);
```

通过<font color=green>*length*</font>属性获取map中的键值对数量：

```dart
var gifts = {'first': 'partridge'};
gifts['fourth'] = 'calling birds';
assert(gifts.length == 2);
```

通过在map字面量前加上<font color=green>*const*</font>修饰，可以创建一个map编译时常量：

```dart
final constantMap = const {
  2: 'helium',
  10: 'neon',
  18: 'argon',
};

// constantMap[2] = 'Helium'; // Uncommenting this causes an error.
```

Dart2.3中，像list一样，map也支持spread operators（<font color=green>*...*</font> 和 <font color=green>*...?*</font>）以及collection if&for。细节内容可以参考**[spread operator proposal](https://github.com/dart-lang/language/blob/master/accepted/2.3/spread-collections/feature-specification.md)**和**[control flow collections proposal](https://github.com/dart-lang/language/blob/master/accepted/2.3/control-flow-collections/feature-specification.md)**。

关于map的其他信息参见**[Generics](https://dart.dev/guides/language/language-tour#generics)**和**[Maps](https://dart.dev/guides/libraries/library-tour#maps)**。

<br>

#### Runes和grapheme clusters

Dart中可以通过**[runes](https://api.dart.dev/stable/dart-core/Runes-class.html)**显示一个字串的unicode code point。Dart2.6中，可以使用**[characters package](https://pub.dev/packages/characters)**去查看或者处理*user-perceived characters*，其又被称作**[Unicode (extended) grapheme clusters](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)**。

Unicode为每个字母、每个数字和每个在世界书写体系中用到的字符都定义了唯一的数值，每个Dart字符串都是一个utf-16编码序列，而使用一个字串来表示unicode code point需要特殊的语法。通常的unicode code point表示法是<font color=green>*\uXXXX*</font>，其中XXXX是个4位的16进制数。例如桃心字符(♥)的unicode code point是<font color=green>*\u2665*</font>。如果要表示多于4位或少于4位的16进制数，则需要用大括号把值括起来，比如笑脸emoji是<font color=green>*\u{1f600}*</font>。

如果要读写特殊的unicode字符，要使用characters package中定义的<font color=green>*characters*</font>属性，它会返回一个<font color=green>*Characters*</font>对象，一组grapheme clusters定义的字串。下面是使用characters API的例子：

```dart
import 'package:characters/characters.dart';
...
var hi = 'Hi 🇩🇰';
print(hi);
print('The end of the string: ${hi.substring(hi.length - 1)}');
print('The last character: ${hi.characters.last}\n');
```

具体的执行结果依赖于运行环境，类似于以下输出：

```shell
$ dart bin/main.dart
Hi 🇩🇰
The end of the string: ???
The last character: 🇩🇰
```

关于使用characters package处理字符串的细节说明，请参考**[example](https://pub.dev/packages/characters#-example-tab-)**和characters pacakage的**[API reference](https://pub.dev/documentation/characters)**。

<br>

#### Symbols

**[Symbol](https://api.dart.dev/stable/dart-core/Symbol-class.html)**对象在Dart语言里体现为声明的操作符或者标识符。虽然有可能一直不会被用到，但对于按名称引用标识符的API来说，它是非常有价值的，因为minification会更改标识符名称，但不会更改标识符Symbol。如果要获取一个标识符的Symbol，可以使用Symbol字面量，只需要在标识符前加上'#'：

```dart
#radix
#bar
```

Symbol字面量是编译时常量。

<br>

### 函数

Dart是实实在在的面向对象语言，即使函数也是对象，类型为**[Function](https://api.dart.dev/stable/dart-core/Function-class.html)**。这就意味着函数可以赋值给变量，也可以作为参数传给其他函数使用。你还可以像调用函数一样调用一个Dart类的实例。具体内容参见**[Callable classes](https://dart.dev/guides/language/language-tour#callable-classes)**。

下面是一个函数实现的例子：

```dart
bool isNoble(int atomicNumber) {
  return _nobleGases[atomicNumber] != null;
}
```

虽然《Effective Dart》建议遵照 **[type annotations for public APIs](https://dart.dev/guides/language/effective-dart/design#prefer-type-annotating-public-fields-and-top-level-variables-if-the-type-isnt-obvious)** 规范来实现，但把所有类型说明略去也不会影响函数的运行。

```dart
isNoble(atomicNumber) {
  return _nobleGases[atomicNumber] != null;
}
```

如果函数体只包含了一个表达式，那么语法上可以略写为以下形式：

```dart
bool isNoble(int atomicNumber) => _nobleGases[atomicNumber] != null;
```

<font color=green>*=> expr*</font>是针对<font color=green>*{ return expr; }*</font>的一种语法缩写。<font color=green>*=>*</font>表示法有时也被称为箭头语法。

> 注：在箭头（=>）和分号（;）之间的只能是表达式（expression），不能是语句（statement）。比如这里不能用if-else语句（**[if statement](https://dart.dev/guides/language/language-tour#if-and-else)**），但可以使用条件表达式（**[conditional expression](https://dart.dev/guides/language/language-tour#conditional-expressions)**）。



函数的参数可以分为两类：必选参数（*required*）和可选参数（*optional*）。参数表中必选参数排在前面，可选参数列在后面。可选参数可以以命名（*named*）或者位置（*positional*）的方式来实现。

> 注：某些API——典型地是Flutter中widget的构造函数——只使用命名参数的方式，甚至对于那些强制提供的参数也是如此，详情可见下一章节。

<br>

#### Optional parameters 可选参数

可选参数可以以命名参数（*named*）或者位置参数（*positional*）的方式来实现，但不能同时使用这两种方式。

<br>

##### Named parameters 命名参数

在调用函数时，可以使用<font color=green>*paramName: value*</font>的方式来指定命名参数。比如：

```dart
enableFlags(bold: true, hidden: false);
```

在定义函数时，使用<font color=green>*{param1, param2, ...}*</font>的方式指定命名参数：

```dart
/// Sets the [bold] and [hidden] flags ...
void enableFlags({bool bold, bool hidden}) {...}
```

虽然命名参数是可选的，但可以通过给参数添加**[@required](https://pub.dev/documentation/meta/latest/meta/required-constant.html)**注解表明它是强制类型的，要求调用方必须给这个参数提供值，比如：

```dart
const Scrollbar({Key key, @required Widget child})
```

如果有人尝试在调用这个函数创建<font color=green>**Scrollbar**</font>时不给<font color=green>**child**</font>传参，分析器会报错。

**[@required](https://pub.dev/documentation/meta/latest/meta/required-constant.html)**注解依赖于**[meta](https://pub.dev/packages/meta)**包，需要 <font color=green>**import pacakge:meta/meta.dart**</font>。

<br>

##### Positional parameters 位置参数

可以使用 <font color=green>**[ ]**</font> 将一组函数参数括在一起，以表明它们是可选的位置参数。

```dart
String say(String from, String msg, [String device]) {
  var result = '$from says $msg';
  if (device != null) {
    result = '$result with a $device';
  }
  return result;
}
```

下面这个例子显示地是没有带可选参数的调用方式：

```dart
assert(say('Bob', 'Howdy') == 'Bob says Howdy');
```

这个是传入可选参数的调用方式：

```dart
assert(say('Bob', 'Howdy', 'smoke signal') ==
    'Bob says Howdy with a smoke signal');
```

<br>

#### 缺省参数值

在函数定义里，可以使用 <font color=green>**=**</font> 为可选参数或者必选参数赋缺省值。缺省值必须是编译时常量。如果没有赋值，则缺省值默认为null。

下面是一个给命名参数赋缺省值的例子：

```dart
/// Sets the [bold] and [hidden] flags ...
void enableFlags({bool bold = false, bool hidden = false}) {...}

// bold will be true; hidden will be false.
enableFlags(bold: true);
```

> 注：老版本代码可能会用 : 而不是 = 为命名参数赋值，是因为之前只支持使用 : 来赋值，最新版本这个支持已被废弃，建议**[统一使用 = 来指定缺省值](https://dart.dev/guides/language/effective-dart/usage#do-use--to-separate-a-named-parameter-from-its-default-value)**。



下面这个例子展示了如何为位置参数赋缺省值：

```dart
String say(String from, String msg,
    [String device = 'carrier pigeon', String mood]) {
  var result = '$from says $msg';
  if (device != null) {
    result = '$result with a $device';
  }
  if (mood != null) {
    result = '$result (in a $mood mood)';
  }
  return result;
}

assert(say('Bob', 'Howdy') ==
    'Bob says Howdy with a carrier pigeon');
```

还可以传入list或者map做为缺省值。在下面这个例子里，函数 <font color=green>*doStuff()*</font> 为<font color=green>*list*</font>参数指定了一个缺省的list对象，为<font color=green>*gifts*</font>参数指定了一个缺省的map对象。

```dart
void doStuff(
    {List<int> list = const [1, 2, 3],
    Map<String, String> gifts = const {
      'first': 'paper',
      'second': 'cotton',
      'third': 'leather'
    }}) {
  print('list:  $list');
  print('gifts: $gifts');
}
```

<br>

#### main主函数

每个app必须提供一个全局的 <font color=green>*main()*</font> 函数做为这个app的入口。<font color=green>*main*</font>主函数返回<font color=green>*void*</font>值，参数表为<font color=green>*List<String>*</font>类型的可选参数。

下面是一个web app的主函数例子：

```dart
void main() {
  querySelector('#sample_text_id')
    ..text = 'Click me!'
    ..onClick.listen(reverseText);
}
```

> 注：以上代码中用到的 <font color=green>*..*</font> 语法叫做**[cascade](https://dart.dev/guides/language/language-tour#cascade-notation-)**，使用cascade可以针对单一对象的成员做多重操作。



下面是一个命令行app的主函数例子：

```dart
// Run the app like this: dart args.dart 1 test
void main(List<String> arguments) {
  print(arguments);

  assert(arguments.length == 2);
  assert(int.parse(arguments[0]) == 1);
  assert(arguments[1] == 'test');
}
```

可以使用**[args library](https://pub.dev/packages/args)**来定义和解析命令行参数。

<br>

#### 做为一级对象的函数

可以将一个函数做为参数传给另一个函数。例如：

```dart
void printElement(int element) {
  print(element);
}

var list = [1, 2, 3];

// Pass printElement as a parameter.
list.forEach(printElement);
```

还可以用函数给变量赋值，比如：

```dart
var loudify = (msg) => '!!! ${msg.toUpperCase()} !!!';
assert(loudify('hello') == '!!! HELLO !!!');
```

这个例子使用了匿名函数，更多内容会在下个部分介绍。

<br>

#### Anonymous functions 匿名函数

像 <font color=green>*main()*</font> 或者 <font color=green>*printElement()*</font> 一样，大多数函数都会在定义时命名。在Dart中还可以定义一种没有名字的函数叫*匿名函数*，有时也叫*lambda*函数或闭包（*closure*）。可以把匿名函数赋值给一个变量进行其他操作，比如可以在collection中添加或者删除一个函数对象。

匿名函数看起来和命名函数很像，括号间包含0个或多个参数，通过逗号或者可选类型注释分隔开。

内部的代码块包含函数体：

<font color=green>( [ [ Type ] param1 [ , ... ] ] ) {<br>codeBlock;<br>};</font>

下面这个例子定义了一个带有一个无类型参数<font color=green>*item*</font>的匿名函数。这个函数遍历列表中的每一项，打印出该项的值以及它在列表中相应的下标值。

```dart
var list = ['apples', 'bananas', 'oranges'];
list.forEach((item) {
  print('${list.indexOf(item)}: $item');
});
```

如果函数只包含一个语句，可以使用箭头语法进行缩写。

```dart
list.forEach(
    (item) => print('${list.indexOf(item)}: $item'));
```

<br>

#### Lexical scope 词法作用域

Dart是一种支持词法作用域的语言，这就意味着变量的作用域是由代码布局静态决定的。你可以试试“调试跟踪一个变量到花括号外”看一下变量是否还在作用域内。

下面给出了一个嵌套函数的例子，每个作用域层级都有变量。

```dart
bool topLevel = true;

void main() {
  var insideMain = true;

  void myFunction() {
    var insideFunction = true;

    void nestedFunction() {
      var insideNestedFunction = true;

      assert(topLevel);
      assert(insideMain);
      assert(insideFunction);
      assert(insideNestedFunction);
    }
  }
}
```

注意<font color=green>*nestedFunction()*</font>是怎么引用到每个层级的变量，直到最外层。

<br>

#### Lexical closure 词法闭包

*闭包*是一个函数对象，它可以访问词法作用域内的变量，即使该函数在其原始作用域之外被调用时也是如此。

函数可以隐藏绑定在周边作用域中定义的变量。下面这个例子中，<font color=green>*makeAddr()* </font>绑定了变量 <font color=green>*addBy*</font>。而无论函数返回的位置在哪里，它都会记住<font color=green>*addBy*</font>。

```dart
/// Returns a function that adds [addBy] to the 
/// function's argument. 
Function makeAdder(num addBy) {  
  return (num i) => addBy + i; 
} 

void main() {  
  // Create a function that adds 2.  
  var add2 = makeAdder(2);   
  
  // Create a function that adds 4.  
  var add4 = makeAdder(4);   
  
  assert(add2(3) == 5);  
  assert(add4(3) == 7); 
}
```

<br>

#### 检验函数是否相等

下面这个例子检验了全局函数、静态方法、实例方法的相等性。

```dart
void foo() {} // A top-level function 

class A {  
  static void bar() {} // A static method  
  void baz() {} // An instance method 
} 

void main() {  
  var x;   
  
  // Comparing top-level functions.  
  x = foo;  
  assert(foo == x);   
  
  // Comparing static methods.  
  x = A.bar;  
  assert(A.bar == x);   
  
  // Comparing instance methods.  
  var v = A(); // Instance #1 of A  
  var w = A(); // Instance #2 of A  
  var y = w;  
  x = w.baz;   
  
  // These closures refer to the same instance (#2),  
  // so they're equal.  
  assert(y.baz == x);   
  
  // These closures refer to different instances,  
  // so they're unequal.  
  assert(v.baz != w.baz); 
}
```

<br>

#### Return value 返回值

所有函数都有返回值，如果返回值没有具体指定，则 <font color=green>*return null;*</font> 语句会被隐式地加到函数体最后。（返回null对象）

```dart
foo() {}

assert(foo() == null);
```

<br>

### Operators 运算符

下表列出了Dart定义的运算符，其中很多都可以被覆写。具体可参考**[Overridable operators](https://dart.dev/guides/language/language-tour#overridable-operators)**。

| **Description**          | **Operator**                                                 |
| ------------------------ | ------------------------------------------------------------ |
| unary postfix            | <font color=green>**expr++ &ensp;&ensp; expr-- &ensp;&ensp; ( ) &ensp;&ensp; [ ] &ensp;&ensp; . &ensp;&ensp; ?.**</font> |
| unary prefix             | <font color=green>**-expr &ensp;&ensp; !expr &ensp;&ensp; ~expr &ensp;&ensp; ++expr &ensp;&ensp; --expr &ensp;&ensp; await expr**</font> |
| multiplicative           | <font color=green>**\* &ensp;&ensp; / &ensp;&ensp; % &ensp;&ensp; ~/**</font> |
| additive                 | <font color=green>**+ &ensp;&ensp; - **</font>               |
| shift                    | <font color=green>**<< &ensp;&ensp; >> &ensp;&ensp;  >>>**</font> |
| bitwise AND              | <font color=green>**&**</font>                               |
| bitwise XOR              | <font color=green>**^**</font>                               |
| bitwise OR               | <font color=green>**\|**</font>                              |
| relational and type test | <font color=green>**>= &ensp;&ensp; > &ensp;&ensp; <= &ensp;&ensp; < &ensp;&ensp; as &ensp;&ensp; is &ensp;&ensp; is!**</font> |
| equality                 | <font color=green>**== &ensp;&ensp; !=**</font>              |
| logical AND              | <font color=green>**&&**</font>                              |
| logical OR               | <font color=green>**\|\|**</font>                            |
| if null                  | <font color=green>**??**</font>                              |
| conditional              | <font color=green>**expr1 ? expr2 : expr3**</font>           |
| cascade                  | <font color=green>**..**</font>                              |
| assignment               | <font color=green>**= &ensp;&ensp; *= &ensp;&ensp; /= &ensp;&ensp; += &ensp;&ensp; -= &ensp;&ensp; &= &ensp;&ensp; ^=**</font>  etc |

> 警告：这里的运算符优先级顺序是针对Dart解析器行为的近似，至于准确解释，请参考**[Dart language specification](https://dart.dev/guides/language/spec)**中的语法定义。



可以使用运算符构建表达式，下面是一些运算符表达式的例子：

```dart
a++
a + b
a = b
a == b
c ? a : b
a is T
```

在**[运算符表](https://dart.dev/guides/language/language-tour#operators)**中，每行的运算符优先级都高于后续行中运算符的优先级。比如multicative运算符<font color=green>**%**</font>比equality运算符<font color=green>**==**</font>的优先级要高，而<font color=green>**==**</font>的优先级要高于logical AND运算符 <font color=green>**&&**</font>。这种优先级定义意味着下面两行代码的执行过程是相同的：

```dart
// Parentheses improve readability. 
if ((n % i == 0) && (d % i == 0)) ... 
  
// Harder to read, but equivalent. 
if (n % i == 0 && d % i == 0) ...
```

> 警告：对于二元运算符来讲，左操作数决定了这次运算使用了哪个版本的实现。例如，一个Vector对象和一个Point对象相加，aVector+aPoint意味着是使用了Vector对+运算符的覆写实现。

<br>

#### Arithmetic operators 算术运算符

Dart支持常见的算术运算符，如下表所列：

| **Operator**                       | **Meaning**                                |
| ---------------------------------- | ------------------------------------------ |
| <font color=green>**+**</font>     | Add 加                                     |
| <font color=green>**-**</font>     | Subtract 减                                |
| <font color=green>**-expr**</font> | Unary minus 一元负号, 求负值（表达式反号） |
| <font color=green>**\***</font>    | Multiply 乘                                |
| <font color=green>**/**</font>     | Divide 除                                  |
| <font color=green>**~/**</font>    | Divide 整除，返回一个整数结果              |
| <font color=green>**%**</font>     | 取模求余                                   |

例子如下：

```dart
assert(2 + 3 == 5); 
assert(2 - 3 == -1); 
assert(2 * 3 == 6); 
assert(5 / 2 == 2.5); // Result is a double 
assert(5 ~/ 2 == 2); // Result is an int 
assert(5 % 2 == 1); // Remainder 

assert('5/2 = ${5 ~/ 2} r ${5 % 2}' == '5/2 = 2 r 1');
```

同时Dart还支持前缀、后缀的自增和自减运算符。

| **Operator**                       | **Meaning**                         |
| ---------------------------------- | ----------------------------------- |
| <font color=green>**++var**</font> | var = var + 1 (表达式值为 var + 1） |
| <font color=green>**var++**</font> | var = var + 1 (表达式值为 var）     |
| <font color=green>**--var**</font> | var = var - 1 (表达式值为 var - 1） |
| <font color=green>**var--**</font> | var = var - 1 (表达式值为 var）     |

例子如下：

```dart
var a, b;

a = 0;
b = ++a; // Increment a before b gets its value.
assert(a == b); // 1 == 1

a = 0;
b = a++; // Increment a AFTER b gets its value.
assert(a != b); // 1 != 0

a = 0;
b = --a; // Decrement a before b gets its value.
assert(a == b); // -1 == -1

a = 0;
b = a--; // Decrement a AFTER b gets its value.
assert(a != b); // -1 != 0
```

<br>

#### Equality and relational operators 关系运算符

下表列出了关系运算符的定义：

| **Operator**                    | **Meaning** |
| ------------------------------- | ----------- |
| <font color=green>**==**</font> | 相等        |
| <font color=green>**!=**</font> | 不相等      |
| <font color=green>**>**</font>  | 大于        |
| <font color=green>**<**</font>  | 小于        |
| <font color=green>**>=**</font> | 大于等于    |
| <font color=green>**<=**</font> | 小于等于    |

如果要判断两个对象x和y是否为同一值，使用 <font color=green>**==**</font> 运算符。（在极少数情况下，需要知道两个对象是否为同一对象，则需要调用<font color=green>**identical()**</font>函数来判断。）下面是<font color=green>**==**</font>的判断规则：

1. 如果x和y均为null则返回true，如果只有一个为null则返回false；

2. 调用<font color=green>**x.==(y)**</font>方法返回结果。（很多运算符都可以被覆写包括<font color=green>**==**</font>，而判断时调用的方法则取决于左操作数的实现，具体参考**[Overridable operators](https://dart.dev/guides/language/language-tour#overridable-operators)**）

下面是每个关系运算符的使用范例：

```dart
assert(2 == 2);
assert(2 != 3);
assert(3 > 2);
assert(2 < 3);
assert(3 >= 3);
assert(2 <= 3);
```

<br>

#### Type test operator 类型检测运算符

<font color=green>**as**</font>、<font color=green>**is**</font>和<font color=green>**is !**</font>是用来便于在运行时进行类型检测的运算符。

| **Operator**                      | **Meaning**                                                  |
| --------------------------------- | ------------------------------------------------------------ |
| <font color=green>**as**</font>   | 类型转换，也用来指定**[库前缀](https://dart.dev/guides/language/language-tour#specifying-a-library-prefix)** |
| <font color=green>**is**</font>   | 如果对象为指定的类型则为真                                   |
| <font color=green>**is !**</font> | 如果对象为指定的类型则为假                                   |

如果对象 <font color=green>*obj*</font>实现了类型<font color=green>*T*</font>指定的接口，则<font color=green>*obj is T*</font>的结果为真。比如，<font color=green>*obj is Object*</font>总是为真。

使用<font color=green>*as*</font>运算符可以将对象转换成期望类型，一般在调用某个对象的表达式前都会调用<font color=green>*is*</font>针对该对象做类型检测，使用<font color=green>*as*</font>运算符可以提供一个缩写方式。如下面的代码所示：

```dart
if (emp is Person) {
  // Type check
  emp.firstName = 'Bob';
}
//shorthand using as operator
(emp as Person).firstName = 'Bob';
```

> 注：以上代码并不完全等价，如果<font color=green>*emp*</font>为空或者不是Person对象，使用<font color=green>*is*</font>的代码块会什么也不做，而后面那个语句会抛出异常。

<br>

#### Assignment operators

使用<font color=green>*=*</font>运算符可以给变量赋值。仅当被赋值的变量可能为空时，才使用<font color=green>*??=*</font>运算符。

```dart
// Assign value to a 
a = value; 

// Assign value to b if b is null; otherwise, b stays the same 
b ??= value;
```

复合赋值运算符，比如<font color=green>*+=*</font>，把其他计算操作和赋值操作绑定在了一起。

| <font color=green>*=*</font>  | <font color=green>*-=*</font>  | <font color=green>*/=*</font>  | <font color=green>*%=*</font>  | <font color=green>*>>=*</font> | <font color=green>*^=*</font> |
| ----------------------------- | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ----------------------------- |
| <font color=green>*+=*</font> | <font color=green>*\*=*</font> | <font color=green>*~/=*</font> | <font color=green>*<<=*</font> | <font color=green>*&=*</font>  | <font color=green>*\          |

复合赋值运算符的计算规则：

| **Title**               | **Compound assignment**           | **Equivalent expression**             |
| ----------------------- | --------------------------------- | ------------------------------------- |
| **For an operator op:** | <font color=green>*a op=b*</font> | <font color=green>*a = a op b*</font> |
| 举例                    | <font color=green>*a += b*</font> | <font color=green>*a = a + b*</font>  |

赋值运算符和复合赋值运算符的应用举例：

```dart
var a = 2; // Assign using =
a *= 3; // Assign and multiply: a = a * 3
assert(a == 6);
```

<br>

#### Logical operators 逻辑运算符

可以使用逻辑运算符对布尔表达式进行组合或者反转。

| **Operator**                   | **Meaning**                             |
| ------------------------------ | --------------------------------------- |
| <font color=green>!expr</font> | 将布尔值反转 （True => False 或者相反） |
| <font color=green>\|\|</font>  | 逻辑 OR                                 |
| <font color=green>&&</font>    | 逻辑 AND                                |

下面是逻辑表达式应用的例子：

```dart
if (!done && (col == 0 || col == 3)) {
  // ...Do something...
}
```

<br>

#### Bitwise and shift operators 位操作符

Dart里可以对数值的每一bit进行单独的处理，一般使用以下运算符对整数进行操作。

| **Operator**                   | **Meaning**    |
| ------------------------------ | -------------- |
| <font color=green>&</font>     | AND            |
| <font color=green>\|</font>    | OR             |
| <font color=green>^</font>     | XOR            |
| <font color=green>~expr</font> | 1 => 0, 0 => 1 |
| <font color=green><<</font>    | 左移           |
| <font color=green>>></font>    | 右移           |



下面是位操作符的应用例子：

```dart
final value = 0x22;
final bitmask = 0x0f;

assert((value & bitmask) == 0x02); // AND
assert((value & ~bitmask) == 0x20); // AND NOT
assert((value | bitmask) == 0x2f); // OR
assert((value ^ bitmask) == 0x2d); // XOR
assert((value << 4) == 0x220); // Shift left
assert((value >> 4) == 0x02); // Shift right
```

<br>

#### Conditional expressions 条件表达式

Dart有两个操作符可以让你在不使用 <font color=green>*if-else*</font> 语句的前提下简洁地对表达式求值。

<font color=green>*condition ? expr1 : expr2*</font>

&ensp;&ensp; 如果condition为真，则求值expr1并返回，否则求值expr2并返回。

<font color=green>*expr1 ?? expr2*</font>

&ensp;&ensp; 如果expr1非空，返回它的值，否则求值expr2并返回。

当你基于一个布尔表达式为变量赋值的时候，可以考虑使用<font color=green>*?:*</font>：

```dart
var visibility = isPublic ? 'public' : 'private';
```

如果布尔表达式涉及到是否为空，可以使用<font color=green>*??*</font>：

```dart
String playerName(String name) => name ?? 'Guest';
```

上面的例子都可以用其他至少两种方式实现，但是都不够简洁：

```dart
// Slightly longer version uses ?: operator.
String playerName(String name) => name != null ? name : 'Guest';

// Very long version uses if-else statement.
String playerName(String name) {
  if (name != null) {
    return name;
  } else {
    return 'Guest';
  }
}
```

<br>

#### Cascade notation (..)

层叠表示法允许对同一对象执行一系列的运算符计算。除了函数调用外，还可以访问同一对象的字段。这种表示方式可以省去创建一系列临时变量的步骤，便于写出流畅的代码。

考虑以下代码：

```dart
querySelector('#confirm') // Get an object.
  ..text = 'Confirm' // Use its members.
  ..classes.add('important')
  ..onClick.listen((e) => window.alert('Confirmed!'));
```

第一个方法调用，<font color=green>*querySelector()*</font>，返回一个selector对象。这段代码遵循层叠表示法直接处理这个selector对象，而忽略了可能返回的任何后续值。

以上例子的等价形式：

```dart
var button = querySelector('#confirm');
button.text = 'Confirm';
button.classes.add('important');
button.onClick.listen((e) => window.alert('Confirmed!'));
```

另外，层叠也支持嵌套，例如：

```dart
final addressBook = (AddressBookBuilder()
      ..name = 'jenny'
      ..email = 'jenny@example.com'
      ..phone = (PhoneNumberBuilder()
            ..number = '415-555-0100'
            ..label = 'home')
          .build())
    .build();
```

在构建层叠的时候要注意函数返回的实际对象类型。例如，下面的代码运行会失败：

```dart
var sb = StringBuffer();
sb.write('foo')
  ..write('bar'); // Error: method 'write' isn't defined for 'void'.
```

<font color=green>*sb.write()*</font>调用会返回void，在<font color=green>*void*</font>类型上无法构建层叠。

> 注：严格来讲，层叠的“双点”表示法并不是运算符，它属于Dart语法的一部分。

<br>

#### 其他运算符

| **Operator**                     | **Name**         | **Meaning**                                                  |
| -------------------------------- | ---------------- | ------------------------------------------------------------ |
| <font color=green>**( )**</font> | 函数应用         | 表示函数调用                                                 |
| <font color=green>**[ ]**</font> | 列表访问         | 引用列表中指定索引对应的元素值                               |
| <font color=green>**.**</font>   | 成员访问         | 引用表达式的属性值，比如：<font color=green>**foo.bar**</font> 从表达式 <font color=green>**foo**</font>中提取属性<font color=green>**bar**</font>的值 |
| <font color=green>**?.**</font>  | 有条件地成员访问 | 类似<font color=green>**.**</font> ，只是左操作符可能为空；比如：<font color=green>**foo?.bar**</font>， 同样是从表达式 <font color=green>**foo**</font>中提取属性<font color=green>**bar**</font>的值，除非<font color=green>**foo**</font>的值为空（若为空则<font color=green>**foo?.bar**</font>整个值为空） |

关于<font color=green>**.**</font>、<font color=green>**?.**</font>、<font color=green>**..**</font>运算符的更多信息可以参考**[Classes](https://dart.dev/guides/language/language-tour#classes)**。

<br>

### Control flow statement 控制流语句

可以使用下面任何一种方法来控制Dart代码的流程：

+ <font color=green>**if**</font> 和 <font color=green>**else**</font> 

+ <font color=green>**for**</font> 循环

+ <font color=green>**while**</font> 和 <font color=green>**do-while**</font> 循环

+ <font color=green>**break**</font> 和 <font color=green>**continue**</font> 

+ <font color=green>**switch**</font> 和 <font color=green>**case**</font> 

+ <font color=green>**assert**</font> 

还可以使用<font color=green>*try-catch*</font> 和 <font color=green>*throw*</font>影响控制流，具体解释见**[Exceptions](https://dart.dev/guides/language/language-tour#exceptions)**。

<br>

#### if 和 else

Dart支持带有可选<font color=green>*else*</font>语句的<font color=green>*if*</font>语句，如下面例子所示，还可以参考**[conditional expressions](https://dart.dev/guides/language/language-tour#conditional-expressions)**。

```dart
if (isRaining()) {  
  you.bringRainCoat(); 
} else if (isSnowing()) {
  you.wearJacket(); 
} else {  
  car.putTopDown(); 
}
```

和Javascript不同，这里的条件判断只能使用布尔值，更多信息参考**[Booleans](https://dart.dev/guides/language/language-tour#booleans)**。

<br>

#### For循环

可以使用标准的for循环进行迭代，比如：

```dart
var message = StringBuffer('Dart is fun');
for (var i = 0; i < 5; i++) {
  message.write('!');
}
```

Dart循环中的闭包能够正常获取索引值，避免了Javascript中常见的一个陷阱。例如，看一下这段代码，

```dart
var callbacks = [];
for (var i = 0; i < 2; i++) {
  callbacks.add(() => print(i));
}
callbacks.forEach((c) => c());
```

结果会按预期先输出0，然后是1，而这个例子在Javascript中会输出2和2。

如果你要迭代的是一个可迭代的对象，可以使用**[forEach()](https://api.dart.dev/stable/dart-core/Iterable/forEach.html)**方法。如果不关心当前的迭代计数，使用<font color=green>*forEach()*</font>方法是个不错的选择。

```dart
candidates.forEach((candidate) => candidate.interview());
```

另外像List、Set这些可迭代类型，也支持<font color=green>*for-in*</font>的[迭代](https://dart.dev/guides/libraries/library-tour#iteration)形式：

```dart
var collection = [0, 1, 2]; 
for (var x in collection) {  
  print(x); // 0 1 2 
}
```

<br>

#### while和do-while

<font color=green>*while*</font>循环是在*循环前*对条件求值：

```dart
while (!isDone()) {  
  doSomething(); 
}
```

<font color=green>*do-while*</font>循环是在*循环后*对条件求值：

```dart
do {  
  printLine(); 
} while (!atEndOfPage());
```

<br>

#### break和continue

使用<font color=green>*break*</font>可以跳出循环：

```dart
while (true) {
  if (shutDownRequested()) break;
  processIncomingRequests();
}
```

使用<font color=green>*continue*</font>可以跳到下一次循环迭代：

```dart
for (int i = 0; i < candidates.length; i++) {
  var candidate = candidates[i];
  if (candidate.yearsExperience < 5) {
    continue;
  }
  candidate.interview();
}
```

如果操作的是List或者Set这种**[Iterable](https://api.dart.dev/stable/dart-core/Iterable-class.html)**对象，还可以像下面的例子这样实现：

```dart
candidates
    .where((c) => c.yearsExperience >= 5)
    .forEach((c) => c.interview());
```

<br>

#### switch 和 case

Dart的switch语句中，使用<font color=green>*==*</font>来比较整数、字符串，或者其他编译时常量。被比较的对象类型必须相同（不能是任何其他子类型），而该类型无需重写<font color=green>*==*</font>运算符。**[枚举类型](https://dart.dev/guides/language/language-tour#enumerated-types)**在<font color=green>*switch*</font>语句中会运行良好。

> 注：Dart中的switch语句适用于有限的环境，比如解释器和扫描器。



按规定每个非空的<font color=green>*case*</font>子句必须以<font color=green>*break*</font>结尾。结束非空case子句的其他有效方法是<font color=green>*continue*</font>、<font color=green>*throw*</font>或者<font color=green>*return*</font>语句。

当没有匹配的<font color=green>*case*</font>子句时，则执行<font color=green>*default*</font>子句的代码。

```dart
var command = 'OPEN';
switch (command) {
  case 'CLOSED':
    executeClosed();
    break;
  case 'PENDING':
    executePending();
    break;
  case 'APPROVED':
    executeApproved();
    break;
  case 'DENIED':
    executeDenied();
    break;
  case 'OPEN':
    executeOpen();
    break;
  default:
    executeUnknown();
}
```

下面这个例子中，<font color=green>*case*</font>子句中漏掉了一个<font color=green>*break*</font>语句，从而产生了一个error：

```dart
var command = 'OPEN';
switch (command) {
  case 'OPEN':
    executeOpen();
    // ERROR: Missing break

  case 'CLOSED':
    executeClosed();
    break;
}
```

然而，Dart支持空的<font color=green>*case*</font>子句，允许这种fall-through的形式：

```dart
var command = 'CLOSED'; 
switch (command) {  
  case 'CLOSED': // Empty case falls through.  
  case 'NOW_CLOSED':    // Runs for both CLOSED and NOW_CLOSED.    
    executeNowClosed();    
    break; 
}
```

如果想要真正地跳转，可以使用<font color=green>*continue*</font>语句结合标签来实现：

```dart
var command = 'CLOSED'; 
switch (command) {  
case 'CLOSED':    
    executeClosed();    
    continue nowClosed;  
    // Continues executing at the nowClosed label.   
    nowClosed:  
  case 'NOW_CLOSED':    // Runs for both CLOSED and NOW_CLOSED.    
    executeNowClosed();    
    break; 
}
```

<font color=green>*case*</font>子句可以支持local变量，且local变量只在该子句的作用范围内可见。

<br>

### Assert 断言

开发过程中，可以使用断言——<font color=green>*assert(condition, optionalMessage)*</font>——来中断正常的执行，如果condition参数为False的话。在这篇文章中可以找到很多应用assert语句的例子，下面再给出一些例子：

```dart
// Make sure the variable has a non-null value.
assert(text != null);

// Make sure the value is less than 100.
assert(number < 100);

// Make sure this is an https URL.
assert(urlString.startsWith('https'));
```

想要给断言附加消息，可以添加一个字符串作为<font color=green>*assert*</font>的第二个参数。

```dart
assert(urlString.startsWith('https'),
    'URL ($urlString) should start with "https".');
```

<font color=green>*assert*</font>的第一个参数可以是任意能够解析为布尔值的表达式，如果表达式为true，断言通过，执行后续代码。如果为false，断言失败，会抛出**[AssertionError](https://api.dart.dev/stable/dart-core/AssertionError-class.html)**异常。

什么情况下断言会生效？具体结果依赖于我们所使用的工具和框架：

+ 在**[debug mode](https://flutter.dev/docs/testing/debugging#debug-mode-assertions)**下，flutter会启用断言
+ 仅面向开发的工具，如**[dartdevc](https://dart.dev/tools/dartdevc)**通常默认启用断言
+ 一些工具，如**[dart](https://dart.dev/server/tools/dart-vm)**和**[dart2js](https://dart.dev/tools/dart2js)**，支持通过命令行参数<font color=green>*--enable-asserts*</font>启用断言

在产品代码中，断言会被忽略掉，针对<font color=green>*assert*</font>的启动参数也不会生效。

<br>

### Exception 异常

Dart代码可以抛出和捕获异常。异常表明一些期望之外的事情出现引发了错误。如果异常未被捕获，抛出异常的**[isolate](https://dart.dev/guides/language/language-tour#isolates)**将会被挂起，通常isolate和它所在的程序会被终止。

与Java相反，所有Dart异常都是unchecked异常，方法不会声明它们可能会抛出哪些异常，也不需要你捕获任何异常。

Dart提供了**[Exception](https://api.dart.dev/stable/dart-core/Exception-class.html)**和**[Error](https://api.dart.dev/stable/dart-core/Error-class.html)**类型，以及许多预定义的子类型。当然，你可以定义自己的异常，然而Dart程序可以把任何非空对象作为异常对象抛出，而不必一定是Exception和Error对象。

<br>

#### Throw

下面是抛出异常的例子：

```dart
throw FormatException('Expected at least 1 section');
```

你还可以抛出任意对象：

```dart
throw 'Out of llamas!';
```

> 注：生产质量代码通常会抛出实现了**[Exception](https://api.dart.dev/stable/dart-core/Exception-class.html)**和**[Error](https://api.dart.dev/stable/dart-core/Error-class.html)**的类型。



因为异常抛出是一个表达式，你可以在=>语句中，也可以在任何允许使用表达式的位置抛出异常：

```dart
void distanceTo(Point other) => throw UnimplementedError();
```

<br>

#### Catch

捕获异常可以防止异常向上层传播，除非你再次抛出。它给你提供了处理异常的机会：

```dart
try {
  breedMoreLlamas();
} on OutOfLlamasException {
  buyMoreLlamas();
}
```

对于那些可能会抛出多种类型异常的代码，你可以指定多个catch子句来处理。第一个匹配上所抛出对象类型的catch子句会处理相应的异常，如果catch子句没有指定类型，则它可以处理任何类型的被抛出的对象。

```dart
try {
  breedMoreLlamas();
} on OutOfLlamasException {
  // A specific exception
  buyMoreLlamas();
} on Exception catch (e) {
  // Anything else that is an exception
  print('Unknown exception: $e');
} catch (e) {
  // No specified type, handles all
  print('Something really unknown: $e');
}
```

从上面的代码可见，捕获异常时可以使用<font color=green>*on*</font>或者<font color=green>*catch*</font>，或者两者兼用。当你需要指定异常类型时可以用<font color=green>*on*</font>，当异常处理程序需要Exception对象时使用<font color=green>*catch*</font>。

你可以为<font color=green>*catch*</font>指定一或两个参数。第一个参数是所抛出的异常，第二个是栈trace（**[StackTrace](https://api.dart.dev/stable/dart-core/StackTrace-class.html)**对象）。

```dart
try {
  // ···
} on Exception catch (e) {
  print('Exception details:\n $e');
} catch (e, s) {
  print('Exception details:\n $e');
  print('Stack trace:\n $s');
}
```

如果处理部分异常的同时允许异常往外传播，可以使用<font color=green>*rethrow*</font>关键字。

```dart
void misbehave() {
  try {
    dynamic foo = true;
    print(foo++); // Runtime error
  } catch (e) {
    print('misbehave() partially handled ${e.runtimeType}.');
    rethrow; // Allow callers to see the exception.
  }
}

void main() {
  try {
    misbehave();
  } catch (e) {
    print('main() finished handling ${e.runtimeType}.');
  }
}
```

<br>

#### Finally

要确保一些代码无论是否有异常抛出都能运行，可以使用<font color=green>*finally*</font>子句。如果没有<font color=green>*catch*</font>子句匹配上异常，则异常会在<font color=green>*finally*</font>子句运行后继续向上层传播：

```dart
try {
  breedMoreLlamas();
} finally {
  // Always clean up, even if an exception is thrown.
  cleanLlamaStalls();
}
```

在任何匹配的<font color=green>*catch*</font>子句运行之后，<font color=green>*finally*</font>子句会继续运行。

```dart
try {
  breedMoreLlamas();
} catch (e) {
  print('Error: $e'); // Handle the exception first.
} finally {
  cleanLlamaStalls(); // Then clean up.
}
```

更多信息可以参考**[Exceptions](https://dart.dev/guides/libraries/library-tour#exceptions)**。

<br>

### Classes

Dart是一种支持类和基于mixin继承的面向对象语言。每个对象都是类的实例，所有类都派生自**[Object](https://api.dart.dev/stable/dart-core/Object-class.html)**。基于mixin的继承意味着虽然每个类（除了**[Object](https://api.dart.dev/stable/dart-core/Object-class.html)**）只有一个超类，但一个类主体可以在多个类层次结构中重用。**[Extension methods](https://dart.dev/guides/language/language-tour#extension-methods)**是可以不用改变类或者创建子类而为类添加功能的一种方法。

<br>

#### 使用类成员

对象的成员由函数和数据（分别是方法和实例变量）组成。当你访问一个方法时，可以基于对象来调用它：方法可以访问对象的函数和数据。

使用点（<font color=green>*.*</font>）来引用实例变量和方法：

```dart
var p = Point(2, 2);

// Set the value of the instance variable y.
p.y = 3;

// Get the value of y.
assert(p.y == 3);

// Invoke distanceTo() on p.
num distance = p.distanceTo(Point(4, 4));
```

使用<font color=green>*?.*</font>代替<font color=green>*.*</font>以避免左操作数为空引发异常：

```dart
// If p is non-null, set its y value to 4.
p?.y = 4;
```

<br>

#### 使用构造函数

你可以使用构造函数创建一个对象。构造函数名可以用<font color=green>*ClassName*</font>或者<font color=green>*ClassName.identifier*</font>。比如下面的代码中，使用<font color=green>*Point()*</font>和<font color=green>*Point.fromJson()*</font>构造函数创建了<font color=green>*Point*</font>对象：

```dart
var p1 = Point(2, 2);
var p2 = Point.fromJson({'x': 1, 'y': 2});
```

下面这段代码在构造函数名字前使用了可选的<font color=green>*new*</font>关键字，具有同样的效果：

```dart
var p1 = new Point(2, 2);
var p2 = new Point.fromJson({'x': 1, 'y': 2});
```

> 注：<font color=green>*new*</font>关键字在Dart2.0变为可选的。



一些类提供了**[constant constructors](https://dart.dev/guides/language/language-tour#constant-constructors)**，把<font color=green>*const*</font>关键字放在了构造函数名字前，可以用来创建一个编译时常量：

```dart
var p = const ImmutablePoint(2, 2);
```

构造两个相同的编译时常量会得到同一个规范化的对象实例：

```dart
var a = const ImmutablePoint(1, 1);
var b = const ImmutablePoint(1, 1);

assert(identical(a, b)); // They are the same instance!
```

在常量上下文中，可以略去构造函数或者字面量前面的<font color=green>*const*</font>。比如这段创建const map的代码：

```dart
// Lots of const keywords here.
const pointAndLine = const {
  'point': const [const ImmutablePoint(0, 0)],
  'line': const [const ImmutablePoint(1, 10), const ImmutablePoint(-2, 11)],
};
```

可以保留第一个略去其他的<font color=green>*const*</font>关键字：

```dart
// Only one const, which establishes the constant context.
const pointAndLine = {
  'point': [ImmutablePoint(0, 0)],
  'line': [ImmutablePoint(1, 10), ImmutablePoint(-2, 11)],
};
```

如果一个constant constructor在常量上下文之外，并且调用时没有使用<font color=green>*const*</font>，它会创建一个**非常量对象**：

```dart
var a = const ImmutablePoint(1, 1); // Creates a constant
var b = ImmutablePoint(1, 1); // Does NOT create a constant

assert(!identical(a, b)); // NOT the same instance!
```

>  注：常量上下文中<font color=green>*const*</font>关键字是在Dart2.0变为可选的。

<br>

#### 获取对象的类型

可以用对象的<font color=green>*runtimeType*</font>属性，在运行时获取一个对象的类型，它会返回一个**[Type](https://api.dart.dev/stable/dart-core/Type-class.html)**对象。

```dart
print('The type of a is ${a.runtimeType}');
```

到此为止，你已经了解了如何使用类。本节的其他部分会展示如何实现类。

<br>

#### Instance variables 实例变量

下面展示了如何声明实例变量：

```dart
class Point {
  num x; // Declare instance variable x, initially null.
  num y; // Declare y, initially null.
  num z = 0; // Declare z, initially 0.
}
```

所有未初始化的实例变量都会拥有<font color=green>*null*</font>值。

所有实例变量都会生成一个隐式的*getter*方法，非final实例变量还会生成一个隐式的*setter*方法。具体细节参见**[Getters and setters](https://dart.dev/guides/language/language-tour#getters-and-setters)**。

```dart
class Point {
  num x;
  num y;
}

void main() {
  var point = Point();
  point.x = 4; // Use the setter method for x.
  assert(point.x == 4); // Use the getter method for x.
  assert(point.y == null); // Values default to null.
}
```

如果你在声明实例变量的同时初始化（而不是在构造函数或方法中），则在构造函数和它的初始化列表执行前，实例对象创建的时候实例变量就会被赋值。

<br>

#### Constructors 构造函数

通过创建一个与类同名的函数来声明构造函数（另外，如**[Named constructors](https://dart.dev/guides/language/language-tour#named-constructors)**所述，还有一个可选的标识符）。最常见的构造函数形式是生成构造函数，它创建一个类的新实例：

```dart
class Point {
  num x, y;

  Point(num x, num y) {
    // There's a better way to do this, stay tuned.
    this.x = x;
    this.y = y;
  }
}
```

其中的<font color=green>*this*</font>关键字指向当前的实例。

> 注：仅当出现名字冲突的时候<font color=green>*this*</font>关键字是必要的，否则Dart的代码风格会略掉<font color=green>*this*</font>。

将构造函数参数赋值给实例变量的模式非常常见，Dart利用语法糖做了简化支持：

```dart
class Point {
  num x, y;

  // Syntactic sugar for setting x and y
  // before the constructor body runs.
  Point(this.x, this.y);
}
```

##### 缺省构造函数

如果没有声明构造函数，类会提供一个缺省的构造函数。缺省构造函数没有参数，且只支持调用superclass的无参构造函数。

##### 构造函数不可继承

子类不能从它的superclass继承构造函数。没有声明构造函数的子类只会提供一个没有参数没有名字的默认构造函数。

##### Named Constructors 命名构造函数

使用命名构造函数的方式可以为一个类提供多个构造函数实现，或者提供额外更清晰的信息。

```dart
class Point {
  num x, y;

  Point(this.x, this.y);

  // Named constructor
  Point.origin() {
    x = 0;
    y = 0;
  }
}
```

记住构造函数是不可继承的，这就意味着superclass的命名构造函数也不能被子类所继承。如果想要使用superclass中定义的命名构造函数来创建子类的对象，则必须在子类中实现该构造函数。

##### 调用superclass的非默认构造函数

默认情况下，子类的构造函数可以调用superclass的无名无参的构造函数。并且superclass的构造函数需要在子类的构造函数开头调用。而**[initializer list](https://dart.dev/guides/language/language-tour#initializer-list)**会在superclass的构造函数被调用前执行。综上所述，整个执行顺序如下：

1. 初始化列表
2. superclass的无参构造函数
3. 主类的无参构造函数

如果superclass没有定义无名无参的构造函数，那必须手动调用superclass的某个构造函数。而superclass的构造函数调用被指定写在构造函数体（如果有的话）之前，冒号（:）之后。

下面这个例子中，Employee类的构造函数调用了它的superclass “Person”的命名构造函数。

因为superclass的构造函数参数求值是先于构造函数调用，所以参数可以是一个表达式，就像函数调用那样：

```dart
class Employee extends Person {
  Employee() : super.fromJson(defaultData);
  // ···
}
```

> 警告：superclass的构造函数的参数没有访问<font color=green>*this*</font>的权限，例如，参数可以调用类的静态方法，但不可以调用实例方法。

##### Initializer list 初始化列表

除了调用superclass构造函数外，还可以在构造函数体运行前初始化实例变量。初始化器间用逗号分隔。

```dart
// Initializer list sets instance variables before
// the constructor body runs.
Point.fromJson(Map<String, num> json)
    : x = json['x'],
      y = json['y'] {
  print('In Point.fromJson(): ($x, $y)');
}
```

> 警告：初始化赋值语句右侧表达式没有访问<font color=green>*this*</font>的权限。

在开发过程中，可以在初始化列表中使用<font color=green>*assert*</font>来验证输入。

```dart
Point.withAssert(this.x, this.y) : assert(x >= 0) {
  print('In Point.withAssert(): ($x, $y)');
}
```

用初始化列表的方式来创建final字段很方便，后面的例子会有介绍。

<br>

#### Redirecting constructors

有时一个构造函数的唯一目的是重定向到同一个类中的另一个构造函数。重定向目标构造函数的函数体是空的，在冒号（:）后面跟着被重定向的构造函数。

```dart
class Point {
  num x, y;

  // The main constructor for this class.
  Point(this.x, this.y);

  // Delegates to the main constructor.
  Point.alongXAxis(num x) : this(x, 0);
}
```

<br>

#### Constant constructors

如果类中生成的对象从未被更改，可以将这些对象设置为编译时常量。针对这个需要，dart定义了<font color=green>*const*</font>构造函数，确保所有的实例变量都是<font color=green>*final*</font>的。

```dart
class ImmutablePoint {
  static final ImmutablePoint origin =
      const ImmutablePoint(0, 0);

  final num x, y;

  const ImmutablePoint(this.x, this.y);
}
```

Constant constructors不总是创建常量，详情可参见**[using constructors](https://dart.dev/guides/language/language-tour#using-constructors)**。

<br>

#### Factory constructors 工厂构造函数

在实现构造函数时使用<font color=green>*factory*</font>关键字并不总是创建一个类的新实例。比如工厂构造函数可能会从缓存返回已存在的实例对象，或者返回一个子类的对象。

下面这个例子演示了工厂构造函数从缓存返回对象：

```dart
class Logger {
  final String name;
  bool mute = false;

  // _cache is library-private, thanks to
  // the _ in front of its name.
  static final Map<String, Logger> _cache =
      <String, Logger>{};

  factory Logger(String name) {
    return _cache.putIfAbsent(
        name, () => Logger._internal(name));
  }

  Logger._internal(this.name);

  void log(String msg) {
    if (!mute) print(msg);
  }
}
```

> 注：工厂构造函数没有权限访问<font color=green>*this*</font>。

工厂构造函数的调用方式与其他构造函数相同：

```dart
var logger = Logger('UI');
logger.log('Button clicked');
```

<br>

#### Methods 方法

方法是为对象提供行为的函数。

<br>

#### 实例方法

对象的实例方法可以访问实例变量以及<font color=green>*this*</font>。下面代码中的<font color=green>*distanceTo()*</font>方法就是一个实例方法的例子：

```dart
import 'dart:math';

class Point {
  num x, y;

  Point(this.x, this.y);

  num distanceTo(Point other) {
    var dx = x - other.x;
    var dy = y - other.y;
    return sqrt(dx * dx + dy * dy);
  }
}
```

<br>

#### Getters and setters

Getters和setters是为对象属性提供读写访问的特殊方法。回想一下，每个实例变量都会有一个隐式的getter，如果适合的话还会有一个setter。可以通过使用<font color=green>*get*</font>以及<font color=green>*set*</font>关键字实现getter和setter，从而创建额外的属性：

```dart
class Rectangle {
  num left, top, width, height;

  Rectangle(this.left, this.top, this.width, this.height);

  // Define two calculated properties: right and bottom.
  num get right => left + width;
  set right(num value) => left = value - width;
  num get bottom => top + height;
  set bottom(num value) => top = value - height;
}

void main() {
  var rect = Rectangle(3, 4, 20, 15);
  assert(rect.left == 3);
  rect.right = 12;
  assert(rect.left == -8);
}
```

通过getters和setters，可以将实例变量用方法进行封装，而不会影响到客户代码。

> 注：无论getter是否显式定义，诸如increment（++）这样的操作符都会以预期的方式运行。为了避免任何意外的副作用，操作符只调用getter一次，并将值保存在一个临时变量中。

<br>

#### Abstract methods 抽象方法

实例方法、getters和setters都可以是抽象的，只定义接口而将其具体实现留给其他类。抽象方法只能存在于**[abstract classes](https://dart.dev/guides/language/language-tour#abstract-classes)**。

定义抽象方法，只需要使用分号（;）代替函数体。

```dart
abstract class Doer {
  // Define instance variables and methods...

  void doSomething(); // Define an abstract method.
}

class EffectiveDoer extends Doer {
  void doSomething() {
    // Provide an implementation, so the method is not abstract here...
  }
}
```

<br>

#### Abstract class 抽象类

可以使用<font color=green>*abstract*</font>修饰符来定义不能被实例化的抽象类。抽象类对于定义接口非常有用，通常带有一些实现。如果想要让抽象类看起来是可实例化的，需要定义**[factory constructor](https://dart.dev/guides/language/language-tour#factory-constructors)**。

抽象类通常包含抽象方法。下面这个例子声明了一个带有抽象方法的抽象类：

```dart
// This class is declared abstract and thus
// can't be instantiated.
abstract class AbstractContainer {
  // Define constructors, fields, methods...

  void updateChildren(); // Abstract method.
}
```

<br>

#### Implicit interfaces 隐式接口

每个类都隐式定义了一个接口，该接口包含了所有该类以及所有其实现的接口的实例变量。如果想要创建一个类A，它支持类B的API而不继承类B的实现，则类A应该实现类B的接口。

一个类如果要实现一个和多个接口，可以通过在<font color=green>*implements*</font>子句中声明这些接口，并提供它们所需的API实现。

```dart
// A person. The implicit interface contains greet().
class Person {
  // In the interface, but visible only in this library.
  final _name;

  // Not in the interface, since this is a constructor.
  Person(this._name);

  // In the interface.
  String greet(String who) => 'Hello, $who. I am $_name.';
}

// An implementation of the Person interface.
class Impostor implements Person {
  get _name => '';

  String greet(String who) => 'Hi $who. Do you know who I am?';
}

String greetBob(Person person) => person.greet('Bob');

void main() {
  print(greetBob(Person('Kathy')));
  print(greetBob(Impostor()));
}
```

下面是一个指定类实现多个接口的例子：

```dart
class Point implements Comparable, Location {...}
```

<br>

#### 扩展了一个类

可以使用<font color=green>*extends*</font>创建一个子类，其中<font color=green>*super*</font>指向superclass：

```dart
class Television {
  void turnOn() {
    _illuminateDisplay();
    _activateIrSensor();
  }
  // ···
}

class SmartTelevision extends Television {
  void turnOn() {
    super.turnOn();
    _bootNetworkInterface();
    _initializeMemory();
    _upgradeApps();
  }
  // ···
}
```

<br>

#### Overriding members 成员覆写

子类可以覆写实例成员、getters和setters。可以使用<font color=green>*@override*</font>来声明要覆写一个成员：

```dart
class SmartTelevision extends Television {
  @override
  void turnOn() {...}
  // ···
}
```

如果要在**[类型安全](https://dart.dev/guides/language/sound-dart)**的代码中缩小（ narrow）方法参数或者实例变量的类型，可以使用**[covariant关键字](https://dart.dev/guides/language/sound-problems#the-covariant-keyword)**。

<br>

#### Overridable operators 操作符重载

你可以重载下表中列出的操作符，比如，如果定义了一个Vector类，可以定义<font color=green>*+*</font>操作符方法来实现两个向量的求和计算。

| <font color=green>*<*</font>    | <font color=green>*+*</font>    | <font color=green>*\|*</font>   | <font color=green>**[ ]**</font>  |
| ------------------------------- | ------------------------------- | ------------------------------- | --------------------------------- |
| <font color=green>**>**</font>  | <font color=green>**/**</font>  | <font color=green>**^**</font>  | <font color=green>**[ ]=**</font> |
| <font color=green>**<=**</font> | <font color=green>**~/**</font> | <font color=green>**&**</font>  | <font color=green>**~**</font>    |
| <font color=green>**>=**</font> | <font color=green>**\***</font> | <font color=green>**<<**</font> | <font color=green>**==**</font>   |
| <font color=green>**-**</font>  | <font color=green>**%**</font>  | <font color=green>**>>**</font> |                                   |

> 注：你可能注意到 <font color=green>**!=**</font> 没有在表中，它不是可重载的操作符，因为表达式<font color=green>*e1 != e2*</font>只是<font color=green>*!(e1 == e2)*</font>的语法糖形式。

下面是一个类中<font color=green>*+*</font>和<font color=green>*-*</font>操作符重载的例子：

```dart
class Vector {
  final int x, y;

  Vector(this.x, this.y);

  Vector operator +(Vector v) => Vector(x + v.x, y + v.y);
  Vector operator -(Vector v) => Vector(x - v.x, y - v.y);

  // Operator == and hashCode not shown. For details, see note below.
  // ···
}

void main() {
  final v = Vector(2, 3);
  final w = Vector(2, 2);

  assert(v + w == Vector(4, 5));
  assert(v - w == Vector(0, 1));
}
```

如果你重载了<font color=green>*==*</font>操作符，你应该同时覆写对象的<font color=green>*hashCode*</font> getter方法。相关例子参见**[Implementing map keys](https://dart.dev/guides/libraries/library-tour#implementing-map-keys)**。

更多关于重载的内容可以参考**[Extending a class](https://dart.dev/guides/language/language-tour#extending-a-class)**。

<br>

#### noSuchMethod()

如果要检测或者反馈代码试图访问一个不存在的方法或者实例变量的情况，可以覆写<font color=green>*noSuchMethod()*</font>方法：

```dart
class A {
  // Unless you override noSuchMethod, using a
  // non-existent member results in a NoSuchMethodError.
  @override
  void noSuchMethod(Invocation invocation) {
    print('You tried to use a non-existent member: ' +
        '${invocation.memberName}');
  }
}
```

你**不能调用**一个未实现的方法除非下列条件之一成立：

+ 接收方拥有静态类型<font color=green>*dynamic*</font>
+ 接收方拥有一个静态类型，该类型定义了未实现的方法（比如abstract方法），同时接收方的动态类型包含一个不同于<font color=green>*Object*</font>类的<font color=green>*noSuchMethod()*</font>方法实现。

更多信息参见**[noSuchMethod forwarding specification](https://github.com/dart-lang/sdk/blob/master/docs/language/informal/nosuchmethod-forwarding.md)**。

<br>

#### Extension Methods 扩展方法

在Dart2.7引入的扩展方法是一种为已存在的库添加功能的方式。你可能在不知道的情况下已经使用了扩展方法。比如，当在IDE中使用代码补全时，IDE会在提示常规方法的同时显示扩展方法。

下面这个例子使用了<font color=green>*String*</font>类的名叫<font color=green>*parseInt()*</font>的扩展方法，该方法是在<font color=green>*string_apis.dart*</font>中定义的：

```dart
import string_apis.dart';
...
print('42'.padLeft(5)); // Use a String method.
print('42'.parseInt()); // Use an extension method.
```

使用和实现扩展方法的具体介绍可参考**[extension methods page](https://dart.dev/guides/language/extension-methods)**。

<br>

#### Enumerated types 枚举类型

枚举类型，通常称为 *enumerations* 或者 *enums*，是一种特殊的类型，用于表示固定数量的常量值。

<br>

#### Using enums 使用枚举

使用<font color=green>*enum*</font>关键字声明一个枚举类型：

```dart
enum Color { red, green, blue }
```

枚举类型中的每个值都有一个<font color=green>*index*</font> getter，它会返回该值在枚举声明中的下标位置。比如，第一个值的index为0，第二个值的index为1。

```dart
assert(Color.red.index == 0);
assert(Color.green.index == 1);
assert(Color.blue.index == 2);
```

使用枚举的<font color=green>*value*</font>常量，可以获得包含枚举中所有值的列表。

```dart
List<Color> colors = Color.values;
assert(colors[2] == Color.blue);
```

可以在**[switch语句](https://dart.dev/guides/language/language-tour#switch-and-case)**中使用枚举，如果没有处理完枚举包含的所有的值，你会得到一个警告：

```dart
var aColor = Color.blue;

switch (aColor) {
  case Color.red:
    print('Red as roses!');
    break;
  case Color.green:
    print('Green as grass!');
    break;
  default: // Without this, you see a WARNING.
    print(aColor); // 'Color.blue'
}
```

枚举类型有以下限制：

+ 不能子类化，mix in或者实现枚举
+ 不能显式地初始化枚举

更多信息参见**[Dart language specification](https://dart.dev/guides/language/spec)**。

<br>

#### Adding features to a class: mixins

mixins是在多类层次结构中复用类代码的一种方式。

如果要用mixins，需要使用<font color=green>*with*</font>关键字，后跟一个或多个mixin名。下面的例子展示了使用mixins的两个类：

```dart
class Musician extends Performer with Musical {
  // ···
}

class Maestro extends Person
    with Musical, Aggressive, Demented {
  Maestro(String maestroName) {
    name = maestroName;
    canConduct = true;
  }
}
```

如果要实现一个mixin，需要创建一个扩展自Object的类，且不要声明构造函数。除非要把mixin当做一个普通类来使用，否则就用<font color=green>*mixin*</font>关键字来代替<font color=green>*class*</font>。例子如下：

```dart
mixin Musical {
  bool canPlayPiano = false;
  bool canCompose = false;
  bool canConduct = false;

  void entertainMe() {
    if (canPlayPiano) {
      print('Playing piano');
    } else if (canConduct) {
      print('Waving hands');
    } else {
      print('Humming to self');
    }
  }
}
```

要指定只有某些类型可以使用mixin —— 这样mixin就可以调用它没有定义的方法 —— 使用<font color=green>*on*</font>来指定所需的superclass：

```dart
mixin MusicalPerformer on Musician {
  // ···
}
```

> 版本提示：<font color=green>*mixin*</font>关键字的支持是在Dart2.1的时候引入。而在早期release的代码中通常使用<font color=green>*abstract class*</font>来实现。关于2.1版本mixin相关变更内容可参考**[Dart SDK changelog](https://github.com/dart-lang/sdk/blob/master/CHANGELOG.md)**和**[2.1 mixin specification](https://github.com/dart-lang/language/blob/master/accepted/2.1/super-mixins/feature-specification.md#dart-2-mixin-declarations)**。

<br>

#### 类变量和方法

使用<font color=green>*static*</font>关键字可以实现类范围的变量和方法。

<br>

#### 静态变量

静态变量（类变量）对于类范围内的状态和常量非常有用：

```dart
class Queue {
  static const initialCapacity = 16;
  // ···
}

void main() {
  assert(Queue.initialCapacity == 16);
}
```

静态变量会在它们第一次被调用的时候才做初始化。

> 注：这篇文章遵循了**[style guide recommendation](https://dart.dev/guides/language/effective-dart/style#identifiers)**，使用<font color=green>*lowerCamelCase*</font>方式为常量命名。

<br>

#### 静态方法

静态方法（类方法）不会对单个实例进行操作，因此不能访问<font color=green>*this*</font>。例子如下：

```dart
import 'dart:math';

class Point {
  num x, y;
  Point(this.x, this.y);

  static num distanceBetween(Point a, Point b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    return sqrt(dx * dx + dy * dy);
  }
}

void main() {
  var a = Point(2, 2);
  var b = Point(4, 4);
  var distance = Point.distanceBetween(a, b);
  assert(2.8 < distance && distance < 2.9);
  print(distance);
}
```

> 注：考虑使用全局函数而不是静态方法，来实现通用或者广泛使用的实用程序库和功能。

可以使用静态方法作为编译时常量，比如，可以将静态方法作为参数传给常量构造函数。

<br>

### Generics 泛型

如果你看过基本数组类型 **[List](https://api.dart.dev/stable/dart-core/List-class.html)** 的API文档，你会发现实际类型是 <font color=green>*List<E>*</font>。<...>表示法将List标记为泛型（或参数化）类型——具有正式类型参数的类型。**[按照惯例](https://dart.dev/guides/language/effective-dart/design#do-follow-existing-mnemonic-conventions-when-naming-type-parameters)**，大多数类型参数都以单字母来表示，比如E、T、S、K或者V等。

<br>

#### 为什么使用泛型

 泛型常用于类型安全，但除了能让你的代码正常运行外还有更多的好处：

+ 正确指定泛型类型可以生成更好的代码
+ 使用泛型可以减少重复代码

如果你想要一个列表只包含字符串，可以用 <font color=green>*List<String>*</font>（读作字符串列表）来声明这个列表。这样你、你的同事还有你使用的工具都可以在给这个列表添加非字符串元素时，发现这可能是个错误。例子如下：

```dart
var names = List<String>();
names.addAll(['Seth', 'Kathy', 'Lars']);
names.add(42); // Error
```

使用泛型的另一个原因是减少代码重复。泛型可以让许多类型共享统一的接口和实现，同时还支持静态分析。比如，你为对象缓存创建了一个接口：

```dart
abstract class ObjectCache {
  Object getByKey(String key);
  void setByKey(String key, Object value);
}
```

当你发现需要这个接口的字符串版本时，你又创建了另一个接口：

```dart
abstract class StringCache {
  String getByKey(String key);
  void setByKey(String key, String value);
}
```

后来，你决定还要支持这个接口的数值类型版本，你产生了一个想法。。。

泛型可以省去所有创建这些接口的麻烦，你可以创建一个带有类型参数的统一接口：

```dart
abstract class Cache<T> {
  T getByKey(String key);
  void setByKey(String key, T value);
}
```

在这段代码里，T是一个替代类型（stand-in type），你可以把它看做是一个类型占位符，开发者会在使用时定义具体的类型。

<br>

#### 使用集合字面量

列表、集合和映射字面量支持参数化。参数化字面量和你之前看到的字面量很像，除了要在括号前加上<font color=green>*<type>*</font>（针对List和Set），或者<font color=green>*<keyType, valueType>*</font>（针对Map）。例子如下：

```dart
var names = <String>['Seth', 'Kathy', 'Lars'];
var uniqueNames = <String>{'Seth', 'Kathy', 'Lars'};
var pages = <String, String>{
  'index.html': 'Homepage',
  'robots.txt': 'Hints for web robots',
  'humans.txt': 'We are people, not machines'
};
```

<br>

#### 在构造函数中使用参数化类型

使用构造函数时可以指定一个或多个类型，要将类型放在类名后的尖括号中。例如：

```dart
var nameSet = Set<String>.from(names);
```

下面的代码创建了一个Map类，包含的key类型为整型，value类型为View：

```dart
var views = Map<int, View>();
```

<br>

#### 泛型集合以及它们包含的类型

Dart泛型是具体化的（refied），这意味着泛型在运行时携带着具体的类型信息。比如你可以检测集合的类型：

```dart
var names = List<String>();
names.addAll(['Seth', 'Kathy', 'Lars']);
print(names is List<String>); // true
```

> 注：相反地，在Java中泛型使用的是擦除机制，这意味着在运行时泛型类型参数会被删除。Java中你可以检测一个对象是不是List，但不能判断它是不是 <font color=green>*List<String>*</font>。

<br>

#### 对参数化类型的限定

在实现一个泛型时，你可以使用 <font color=green>*extends*</font> 对它的参数化类型做限定。

```dart
class Foo<T extends SomeBaseClass> {
  // Implementation goes here...
  String toString() => "Instance of 'Foo<$T>'";
}

class Extender extends SomeBaseClass {...}
```

这里可以使用 <font color=green>*SomeBaseClass*</font> 或者它的任何一个子类作为泛型的类型参数：

```dart
var someBaseClassFoo = Foo<SomeBaseClass>();
var extenderFoo = Foo<Extender>();
```

也可以不指定泛型参数：

```dart
var foo = Foo();
print(foo); // Instance of 'Foo<SomeBaseClass>'
```

指定任何一个非 <font color=green>*SomeBaseClass*</font> 类型都会导致错误：

```dart
var foo = Foo<Object>();
```

<br>

#### 使用泛型方法

最开始Dart泛型支持仅限于类。后来引入了新的语法叫 *generic methods*，允许方法和函数也支持类型参数：

```dart
T first<T>(List<T> ts) {
  // Do some initial work or error checking, then...
  T tmp = ts[0];
  // Do some additional checking or processing...
  return tmp;
}
```

其中, <font color=green>*first<T>*</font> 的泛型类型允许在以下几个地方使用类型参数 <font color=green>*T*</font> ：

+ 函数的返回值类型（<font color=green>*T*</font>）
+ 参数类型 （<font color=green>*List<T>*</font>）
+ 局部变量类型（<font color=green>*T tmp*</font>）

关于泛型的更多信息参见**[Using Generic Methods](https://github.com/dart-lang/sdk/blob/master/pkg/dev_compiler/doc/GENERIC_METHODS.md)**。

<br>

### Library and visibility 库和可见性

<font color=green>*import*</font> 和 <font color=green>*library*</font> 指令能帮你创建模块和共享代码库。库不仅是提供API，而且还是个私域单元：以下划线（<font color=green>*_*</font>）开头的标识符仅对库内可见。*每一个Dart app都是一个库*，即使你没有使用 <font color=green>*library*</font> 指令。

库可以通过**[packages](https://dart.dev/guides/packages)**来分发。

<br>

#### 关于库的使用

可以使用 <font color=green>*import*</font> 指定如何在一个库的范围内使用另一个库的命名空间。

比如，Dart web app通常会引用 **[dart:html](https://api.dart.dev/stable/dart-html)** 库，可以像下面这样来import：

```dart
import 'dart:html';
```

<font color=green>*import*</font> 需要的唯一参数是指向库的URI。对于内建库，URI会有一个特殊的scheme —— <font color=green>*dart:*</font>。对于其他的库，可以使用文件路径或者scheme <font color=green>*package:*</font>。scheme <font color=green>*package:*</font> 指定了所import的库是由包管理器（比如pub工具）提供的。例子如下：

```dart
import 'package:test/test.dart';
```

> 注：URI全称Uniform Resource Identifier，统一资源标识符。URL（Uniform Resource Locator，统一资源定位器）是一种常见的URI。

<br>

#### 指定库前缀

如果导入的多个库有标识符冲突，你可以为其中一个或多个指定前缀。比如，库1和库2都有一个Element类，解决冲突的代码如下：

```dart
import 'package:lib1/lib1.dart';
import 'package:lib2/lib2.dart' as lib2;

// Uses Element from lib1.
Element element1 = Element();

// Uses Element from lib2.
lib2.Element element2 = lib2.Element();
```

<br>

#### 导入库的一部分

如果只需要使用库中的一部分内容，你可以像下面代码这样有选择的导入：

```dart
// Import only foo.
import 'package:lib1/lib1.dart' show foo;

// Import all names EXCEPT foo.
import 'package:lib2/lib2.dart' hide foo;
```

<br>

#### 库的懒加载

延迟加载（也叫懒加载）允许web app按需加载库。下面是一些例子：

+ 减少web app的初始启动时间
+ 执行A/B测试时，尝试算法的一个替代实现
+ 加载很少使用的功能，比如可选的窗口和对话框

> 注：**只有dart2js支持延迟加载**。Flutter、Dart VM以及dartdevc都不支持。

使用延迟加载一个库时，必须首先使用 <font color=green>*deferred as*</font> 来导入它。

```dart
import 'package:greetings/hello.dart' deferred as hello;
```

当你需要库时，使用库的标识符来调用 <font color=green>*loadLibrary()*</font> 方法。 

```dart
Future greet() async {
  await hello.loadLibrary();
  hello.printGreeting();
}
```

在上面的代码中，<font color=green>*await*</font> 关键字会让函数暂停执行，直到库加载完成为止。关于 <font color=green>*async*</font> 和 <font color=green>*await*</font> 的更多信息参见**[asynchrony support](https://dart.dev/guides/language/language-tour#asynchrony-support)**。

针对同一个库你可以调用 <font color=green>*loadLibrary()*</font> 很多次，都不会有问题。库只会被加载一次。

在使用延迟加载时，要记住下面几点：

+ Deferred库的常量不是导入文件中的常量，这些常量在deferred库加载完成前是不存在的。
+ 不能在导入文件中使用来自deferred库的类型，相反，可以考虑将接口类型移到由deferred库和导入文件共同import的库中。
+ Dart隐式地将 <font color=green>*loadLibrary()*</font> 插入到使用 <font color=green>*deferred as namespace*</font> 定义的命名空间中。<font color=green>*loadLibrary()*</font> 调用会返回一个**[Future](https://dart.dev/guides/libraries/library-tour#future)**对象。

<br>

#### 关于库的实现

参考**[Create Library Packages](https://dart.dev/guides/libraries/create-library-packages)**中如何实现library package的建议，包括了以下几点：

+ 如何组织库源码
+ 如何使用 <font color=green>*export*</font> 指令
+ 何时使用 <font color=green>*part*</font> 指令
+ 何时使用 <font color=green>*library*</font> 指令
+ 如何使用条件导入、导出来实现支持多平台的库

<br>

#### Asynchrony support 异步支持

Dart库包含了很多函数，都是返回 **[Future](https://api.dart.dev/stable/dart-async/Future-class.html)** 和 **[Stream](https://api.dart.dev/stable/dart-async/Stream-class.html)** 对象。这些函数是*异步的*：它们在创建可能的耗时操作（比如I/O）之后，不用等待操作结束就即刻返回。

 关键字 <font color=green>*async*</font> 和 <font color=green>*await*</font> 用于支持异步编程，让你以同步代码的方式来编写异步代码。

<br>

#### Handling Future

当你需要获取一个Future对象的完成结果时，可以有两个选择：

+ 使用 <font color=green>*async*</font> 和 <font color=green>*await*</font> 
+ 使用Future API，具体描述见 **[in the library tour](https://dart.dev/guides/libraries/library-tour#future)**

使用 <font color=green>*async*</font> 和 <font color=green>*await*</font> 的代码是异步的，但看起来像同步代码。比如下面的代码使用了 <font color=green>*await*</font> 来等待异步函数的执行结果：

```dart
await lookUpVersion();
```

使用了 <font color=green>*await*</font> 的代码必须包含在 <font color=green>*async*</font> 函数中——以 <font color=green>*async*</font> 标记的函数：

```dart
Future checkVersion() async {
  var version = await lookUpVersion();
  // Do something with version
}
```

> 注：虽然 <font color=green>*async*</font> 函数可能执行耗时的操作，但是它不会等待这些操作执行，相反，<font color=green>*async*</font> 函数只执行到第一个 <font color=green>*await*</font> 表达式（**[细节介绍](https://github.com/dart-lang/sdk/blob/master/docs/newsletter/20170915.md#synchronous-async-start)**）为止。它会返回一个Future对象，仅在<font color=green>*await*</font> 表达式完成后再继续执行。

使用 <font color=green>*try*</font>、 <font color=green>*catch*</font>和 <font color=green>*finally*</font>来处理使用<font color=green>*await*</font>代码中产生的错误和清除工作：

```dart
try {
  version = await lookUpVersion();
} catch (e) {
  // React to inability to look up the version
}
```

在一个 <font color=green>*async*</font> 函数中，可能会多次调用 <font color=green>*await*</font>。比如，下面的代码中为了函数结果要等待三次：

```dart
var entrypoint = await findEntrypoint();
var exitCode = await runExecutable(entrypoint, args);
await flushThenExit(exitCode);
```

对于 <font color=green>*await*</font> 表达式（<font color=green>*await expression*</font>），<font color=green>*expression*</font>的值通常是一个Future对象。如果返回值是其他类型，则自动封装为一个Future对象。这个Future对象表明承诺返回一个对象，也就是整个<font color=green>*await*</font> 表达式（<font color=green>*await expression*</font>）的值。await表达式会使执行暂停，直到这个对象可用为止。

如果你在使用 <font color=green>*await*</font> 时得到了一个编译时错误，请检查 <font color=green>*await*</font> 是否被放到一个 <font color=green>*async*</font> 函数中。比如，如果在app的 <font color=green>*main()*</font> 函数中使用了 <font color=green>*await*</font> ，<font color=green>*main()*</font> 的函数体必须被标记为<font color=green>*async*</font>：

```dart
Future main() async {
  checkVersion();
  print('In main: version is ${await lookUpVersion()}');
}
```

<br>

#### 声明异步函数

函数体被<font color=green>*async*</font>修饰符标记的函数被称为<font color=green>*async*</font>函数。

给函数添加<font color=green>*async*</font>关键字可以使该函数返回一个Future对象，比如，考虑一个返回字符串的同步函数：

```dart
String lookUpVersion() => '1.0.0';
```

如果将其改为<font color=green>*async*</font>函数——因为未来的实现是一个耗时操作——则返回值为一个Future对象。

```dart
Future<String> lookUpVersion() async => '1.0.0';
```

注意这里的函数体不需要调用Future的API，Dart会在必要的时候自动创建Future对象。如果函数不会返回可用值，则返回值的类型为<font color=green>*Future<Void>*</font>。关于使用futures、 <font color=green>*async*</font> 和 <font color=green>*await*</font> 的交互介绍，可参考**[asynchronous programming codelab](https://dart.dev/codelabs/async-await)**。

<br>

#### Handling Streams

当需要从Stream中获取值时，可以有两个选择：

+ 使用<font color=green>*async*</font>和一个异步循环（<font color=green>*await for*</font>）
+ 使用Stream API，具体描述见 **[in the library tour](https://dart.dev/guides/libraries/library-tour#stream)**

> 注：在使用<font color=green>*await for*</font>前，要确保它能使代码更加清晰，并且确实希望等待所有流的结果。比如，通常<font color=green>*await for*</font>不会用于UI事件监听，因为UI框架的事件流会持续发送，不会结束。

异步for循环的形式如下：

```dart
await for (varOrType identifier in expression) {
  // Executes each time the stream emits a value.
}
```

其中<font color=green>*expression*</font>的值必须是Stream类型。执行过程如下：

1. 等待直到stream发出一个值
2. 将变量设置为stream发出的值，执行for-loop循环体
3. 重复1和2直到stream关闭

如果要停止对stream的监听，可以调用<font color=green>*break*</font>和<font color=green>*return*</font>语句跳出for循环，并取消对流的订阅。

如果你在实现异步循环时得到了一个编译时错误，请检查<font color=green>*await for*</font>是否被放到一个 <font color=green>*async*</font> 函数中。比如，如果要在app的<font color=green>*main()*</font> 函数中使用异步循环，<font color=green>*main()*</font> 的函数体必须被标记为<font color=green>*async*</font>：

```dart
Future main() async {
  // ...
  await for (var request in requestServer) {
    handleRequest(request);
  }
  // ...
}
```

关于异步编程的更多信息，可以参考**[dart:async](https://dart.dev/guides/libraries/library-tour#dartasync---asynchronous-programming)**部分。

<br>

### Generators 生成器

当需要延时创建一系列值时，可以考虑使用生成器函数（*generator function*）。Dart原生支持两种生成器函数：

+ 同步生成器（**Synchronous generator**）：返回一个**[Iterable](https://api.dart.dev/stable/dart-core/Iterable-class.html)**对象；
+ 异步生成器（**Asynchronous generator**）：返回一个**[Stream](https://api.dart.dev/stable/dart-async/Stream-class.html)**对象；

要实现一个同步生成器函数，需要将函数体标记为<font color=green>*sync\**</font>，并使用<font color=green>*yield*</font>语句返回值:

```dart
Iterable<int> naturalsTo(int n) sync* {
  int k = 0;
  while (k < n) yield k++;
}
```

要实现一个异步生成器函数，需要将函数体标记为<font color=green>*async\**</font>，并使用<font color=green>*yield*</font>语句返回值:

```dart
Stream<int> asynchronousNaturalsTo(int n) async* {
  int k = 0;
  while (k < n) yield k++;
}
```

如果生成器是递归式的，可以通过使用<font color=green>*yield\**</font>改进它的性能：

```dart
Iterable<int> naturalsDownFrom(int n) sync* {
  if (n > 0) {
    yield n;
    yield* naturalsDownFrom(n - 1);
  }
}
```

<br>

### Callable Classes

在Dart中，如果要允许类的实例能够像函数一样被调用，可以通过实现类的<font color=green>*call()*</font>来达到。

下面这个例子中，<font color=green>*WannabeFunction*</font>类定义了一个call函数，将三个字符串通过空格连接起来，并附加一个感叹号。（具体内容略）

<br>

### Isolates 隔离器

多数计算机，即使在移动平台上，都支持多核CPU。为了充分利用多核性能，开发人员通常使用并发运行的共享内存线程。然而，共享并发状态很容易出错，同时可能会导致代码过于复杂。而在Dart中，所有代码都运行在隔离器（*isolates*）内部，而不是线程中。每个隔离器都有它自己的存储堆，而确保隔离器的状态不会被其他隔离器访问到。

更多内容可以参考下面的链接：

+ **[Dart asynchronous programming: Isolates and event loops](https://medium.com/dartlang/dart-asynchronous-programming-isolates-and-event-loops-bffc3e296a6a)**；
+ **[dart:isolate API reference](https://api.dart.dev/stable/dart-isolate)**，包括**[Isolate.spawn()](https://api.dart.dev/stable/dart-isolate/Isolate/spawn.html)**和**[TransferableTypedData](https://api.dart.dev/stable/dart-isolate/TransferableTypedData-class.html)**；
+ flutter网站上的**[Background parsing](https://flutter.dev/docs/cookbook/networking/background-parsing)** cookbook；
+ **[Isolate sample app](https://github.com/flutter/samples/tree/master/isolate_example)**；

<br>

### Typedef

在Dart中，函数和字符串、数值一样都是对象。*typedef*或者函数类型别名，为函数提供了一个类型名，你可以在声明字段或者返回类型的时候使用。

当将函数类型赋值给变量时，typedef会保留相关的类型信息。

考虑下面这段代码，这里没有使用typedef：

```dart
class SortedCollection {
  Function compare;

  SortedCollection(int f(Object a, Object b)) {
    compare = f;
  }
}

// Initial, broken implementation.
int sort(Object a, Object b) => 0;

void main() {
  SortedCollection coll = SortedCollection(sort);

  // All we know is that compare is a function,
  // but what type of function?
  assert(coll.compare is Function);
}
```

类型信息在将<font color=green>*f*</font>赋值给<font color=green>*compare*</font>时丢掉了。这段代码中<font color=green>*f*</font>的类型是<font color=green>*(Object, Object)  → int*</font>（这里→意思是返回）， 而<font color=green>*compare*</font>的类型是Function。如果更改代码以使用显式命名并且保留类型信息，开发者和工具就可以使用这些信息了。

```dart
typedef Compare = int Function(Object a, Object b);

class SortedCollection {
  Compare compare;

  SortedCollection(this.compare);
}

// Initial, broken implementation.
int sort(Object a, Object b) => 0;

void main() {
  SortedCollection coll = SortedCollection(sort);
  assert(coll.compare is Function);
  assert(coll.compare is Compare);
}
```

> 注：当前typedef仅限用于函数，我们期待后面有所改变。

<br>

因为typedef只是简单的别名，它提供了一种检查任何函数类型的方法。比如：

```dart
typedef Compare<T> = int Function(T a, T b);

int sort(int a, int b) => a - b;

void main() {
  assert(sort is Compare<int>); // True!
}
```

<br>

### Metadata

可以使用metadata为你的代码添加附加信息。一个metadata注解以<font color=green>*@*</font>开头，后面跟着对编译时常量的引用（比如<font color=green>*deprecated*</font>），或者对常量构造函数的调用。

两个对所有Dart代码有效的注解：<font color=green>*@deprecated*</font>和<font color=green>*@override*</font>。比如**[Extending a class](https://dart.dev/guides/language/language-tour#extending-a-class)**章节中对<font color=green>*@override*</font>的使用，下面是使用<font color=green>*@deprecated*</font>注解的例子：

```dart
class Television {
  /// _Deprecated: Use [turnOn] instead._
  @deprecated
  void activate() {
    turnOn();
  }

  /// Turns the TV's power on.
  void turnOn() {...}
}
```

你可以定义自己的metadata注解，下面是一个带有两个参数的自定义注解@todo的例子：

```dart
library todo;

class Todo {
  final String who;
  final String what;

  const Todo(this.who, this.what);
}
```

这是使用@todo注解的例子：

```dart
import 'todo.dart';

@Todo('seth', 'make this do something')
void doSomething() {
  print('do something');
}
```

metadata可以放在库、类、typedef、类型参数、构造函数、factory、函数、字段、参数或者变量声明之前，也可以放在import和export指令之前。可以通过反射在运行时提取metadata信息。

<br>

### Comments 注释

Dart支持单行注释、多行注释，以及文档式注释。

#### 单行注释

单行注释以<font color=green>*//*</font>开头，自<font color=green>*//*</font>起到行末的所有字符都会被Dart编译器略掉。

```dart
void main() {
  // TODO: refactor into an AbstractLlamaGreetingFactory?
  print('Welcome to my Llama farm!');
}
```

<br>

#### 多行注释

多行注释以<font color=green>*/\**</font>开头，以<font color=green>*\*/*</font>结尾，这之间的字符都会被Dart编译器略掉（除非是文档式注释，具体看下一章节）。多行注释支持嵌套。

```dart
void main() {
  /*
   * This is a lot of work. Consider raising chickens.

  Llama larry = Llama();
  larry.feed();
  larry.exercise();
  larry.clean();
   */
}
```

<br>

#### 文档式注释

文档式注释可以是单行，也可以是多行，以<font color=green>*///*</font>或者<font color=green>*/\*\**</font>开头。使用<font color=green>*///*</font>对连续行注释，与多行doc注释有相同的效果。

在文档式注释中，Dart编译器会忽略掉所有文本，除非它被括在方括号中。使用方括号可以引用类、方法、字段、全局变量、函数以及参数。方括号中的名字会在文档化程序元素的词法范围内做解析。

下面这个文档化注释的例子引用了另外的类和参数：

```dart
/// A domesticated South American camelid (Lama glama).
///
/// Andean cultures have used llamas as meat and pack
/// animals since pre-Hispanic times.
class Llama {
  String name;

  /// Feeds your llama [Food].
  ///
  /// The typical llama eats one bale of hay per week.
  void feed(Food food) {
    // ...
  }

  /// Exercises your llama with an [activity] for
  /// [timeLimit] minutes.
  void exercise(Activity activity, int timeLimit) {
    // ...
  }
}
```

在生成的文档中，<font color=green>*[food]*</font>会转换为一个链接，指向Food类的API文档。

如果要解析Dart代码，生成HTML文档，可以使用SDK中的**[documentation generation tool](https://github.com/dart-lang/dartdoc#dartdoc)**。具体生成文档的例子可以参考**[Dart API documentation](https://api.dart.dev/stable)**。关于如何结构化注释的建议，可以参考**[Guidelines for Dart Doc Comments](https://dart.dev/guides/language/effective-dart/documentation)**。

<br>

### 总结

这篇文章总结了Dart语言中常用的特性，更多的新特性还在实现中，但我们希望新特性不会破坏现有的代码。更多内容可以参考**[Dart language specification](https://dart.dev/guides/language/spec)**和**[Effective Dart](https://dart.dev/guides/language/effective-dart)**。想要了解Dart核心库，可以参考**[A Tour of the Dart Libraries](https://dart.dev/guides/libraries/library-tour)**。