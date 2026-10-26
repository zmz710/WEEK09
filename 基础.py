#  用【字面量】方式声明数组Array 【中括号】
team = ['张三', '李四', '王五', '赵六'];
print(type(team));
print(team);
numbers = [1, 2, 3, 4, 5];
print(numbers);
elements = ['niewei', 18, True];#三种数据类型
print(elements);

#  分支结构：条件语句-if语句  判断成绩是否及格
score = 60
if (score >= 60) :
    print(f"成绩{score},及格");
else :
    print(f"成绩{score},不及格");