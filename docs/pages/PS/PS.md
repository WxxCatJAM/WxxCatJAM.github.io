# 概率论与数理统计

## 概率论基本概念
### 1. 事件的关系和运算
1. 事件的关系
   1. 包含: $\subset$
   2. 覆盖: $\supset$
   3. 交集(积): $A \cap B(AB)$ ---> AB事件都发生
   4. 并集(和): $A \cup B(A+B)$ ---> AB至少发生一个
   5. 差:$A\overset{-}B(A-B)$ ---> A发生，B不发生
   6. 互斥(互不相容): AB都不发生---> $AB= \emptyset$
   7. 对立: AB必然发生一个,且仅有一个发生 ---> $A \cup B =\Omega 且 A \cap B=\emptyset$, $A$的对立事件记为$\overset{-}{A}$
2. 事件的运算律
   1. 交换律: $A \cap B = B \cap A, AB=BA$
   2. 结合律:$A \cap (B \cap C) = (A \cap B) \cap C, (AB)C=A$
   3. 分配律:$A+BC=(A+B)(A+C), (AB)C=A(BC)$
   4. 德·摩根律(对偶律):$\overline{A \cup B}=\overline{A} \cap \overline{B} \Leftrightarrow \overline{A+B}=\overline{A} * \overline{B}$, $\overline{A B}=\overline{A} + \overline{B} $(交与并的转换)
   5. $A \supset B \Leftrightarrow A+B=B, AB=A$
   6. $A=AB+A\overline{B}$
   7. $A+\Omega=\Omega, A\omega=A,A+\empty=A, A\empty=\empty$
3. 常见的事件
   1. 基本事件
   2. 必然事件:每次实验中都会发生,记为$\Omega$
   3. 不可能事件: $\empty$
--- 

### 2. 概率的性质及公式
1. 定义
   1. 随机事件A发生的可能性大小称为概率,记为$P(A)$, 规定$P(A)$满足下列条件
      1. 非负性:对任意时间A, 均有$P(A)\geq 0$
      2. 规范性: 必然事件$\Omega$, 有$P(\Omega)=1$
      3. 可列可加性: 设$A_1,A_2,...$是不相容事件,$A_iA_j=\empty$,则有:$P(A_1 \cup A_2 \cup ...) = P(A_1)+P(A_2)+...$
2. 概率的性质与公式
   1. $P{\empty}=0, P{\Omega}=1$
   2. 单调不见,若$A \subset B$,则$P(A)\leq P(B)$
   3. 有限可加减,$P(A_1 \cup A_2 \cup ...) = P(A_1)+P(A_2)+...$
   4. 加法公式:
      1. $P(A+B)=P(A)+P(B)-P(AB)=P(A)+P(\overline{A}B)=P(B)+P(A\overline{B})$
      2. $P(A+B+C)=P(A)+P(B)+P(C)-P(AB)-P(AC)-P(BC)+P(ABC)$
   5. 减法公式:
      1. $P(A-B)=P(A)-P(AB)=P(A\overline{B})$
      2. 若$B \subset A$,有AB=B,则$P(A-B)=P(A)-P(B)$
   6. 逆事件的概率:
      1. $P(\overline{A}) = P(\Omega-A) =P(\Omega-A)= 1-P(A)$ (有"至少","至多"可以考虑使用)
      2. $P(\overline{A}\overline{B})=P(\overline{A \cup B})=1-P(A\cup B)$
      3. $P(\overline{AB})=1-P(AB)=P(\overline{A} \cup \overline{B})$
   7. 乘法公式
      1. $P(AB)=P(A)P(B|A)=P(B)P(A|B)$
   8. 概率不等式
      1. 对任一事件A,有$0 \leq P(A) \leq 1, P(A \cup B) \leq 1$
      2. 若$B \subset A$,则$P(B) \leq P(A)$
      3. $P(AB) \leq \min{P(A),P(B)} \leq P(A \cup B) \leq P(A) + P(B)$
3. 注: P(A)=0, 或者P(A)=1时, 不能直接判断A为不可能事件或必然事件
### 3. 三大概型
1. 古典概型(等可能概型)
   1. 随机事件E满足以下两个条件:
      1. 样本空间$\Omega$只包含有限个基本事件
      2. 每次实验中每个基本时间的发生可能性相同
      3. 则称其概率模型为古典概型
      4. 若随机事件A包含m个基本事件, 样本空间基本事件总数为n, 则A发生的概率为:
      $$ P(A)=\frac{m}{n} $$

2. 几何概型
   1. 随机试验E满足两个条件
      1. 样本空间$\Omega$是一个可度量的有界区域
      2. 每个样本点可能发生, 即样本点落入样本空间的某一刻度子域可能性大小与A的集合度量成正比, 称其集合概型
      3. 设事件A: "样本点落入样本空间$\Omega$的某一可度量子域A内", 则
      $$ P(A)=\frac{A的度量}{\Omega的度量}$

3. n重伯努利概型
   1. 将每次实验只有两个结果的伯努利试验独立重复n次, 称为n重伯努利试验
   2. 设每次实验中事件A发生的概率为p(0<p<1), 则n重伯努利实验中事件A发生k次的概率为P(A_k)=C_n^kp^k(1-p)^{n-k}
--- 

### 4. 条件概率
1. 条件概率: $P(B|A)= \frac{P(AB)}{P(A)}$, 为A发生的条件下B发生的条件概率(给定事件A下,事件B的条件概率)
2. 性质与公式
   1. $ 0 \leq P(B|A) \leq 1 $
   2. $ P(\Omega|A)=1, P(\emptyset|A)=0 $
   3. $P(A_1 \cup A_2 |B)=\frac{P((A_1 \cup A_2)B)}{P(B)}=\frac{P(A_1B \cup A_2B)}{P(B)}$
      1. $=P(A_1|B)+P(A_2|B)-P(A_1 \cap A_2|B)$
   4. $P(\overline{A}|B)=1-P(A|B)$
   5. 条件概率$P(B|A)=\left\{\begin {array}{l} \frac{P(AB)}{P(A)}, \\ 缩减样本空间 \end {array} \right.$
   6. $P(B|A)=\frac{P(AB)}{P(A)} \geq P(AB)$
3. 乘法公式
   1. 若$P(A)>0$,有$P(AB)=P(A)P(B|A)$
   2. 若$P(B)>0$,有$P(AB)=P(B)P(A|B)$
   3. 若有$P(A_1A_2...A_{n-1}) > 0, 有$P(A_1A_2...A_n)=P(A_1)P(A_2|A_1)P(A_3|A_1A_2)...P(A_n|A_1A_2...A_{n-1})$
4. 全概率公式
   1. 若随机事件满足$A_1,A_2,...,A_n$,满足:
      1. $A_iA_j= \emptyset, i\neq j$
      2. $A_1 \cup A_2...\cup A_n= \Omega$
      3. 则称事件$A_1,A_2,...,A_n$为完备事件组,对任一事件B,有$P(B)=\sum_{i=1}^nP(B|A_i)$
   
5. 贝叶斯公式
    1. 设$A_1,A_2,...,A_n$为完备事件组,$P(B)>0, P(A_i)>0, i=1,2,...,n$,则:
     $P(A_i|B)=\frac{P(A_i)P(B|A_i)}{\sum_{j=1}^nP(A_j)P(B|A_j)}$
--- 

### 5. 随机事件的独立性
1. 定义: 两个随机事件A,B满足P(AB)=P(A)P(B), 则称AB相互独立,简称事件A,B独立
2. 两个事件的独立性
   1. 事件$A,B独立 \Leftrightarrow P(AB)=P(A)P(B)$
            $ \Leftrightarrow P(B)=P(B|A)=P(B|\overline {A}), (0 < P(A) < 1)$
            $ \Leftrightarrow P(A)=P(A|B)=P(A|\overline {B}), (0 < P(B) < 1)$
3. 三个事件的独立性
   1. 设A,B,C是三个事件,有
    $$ \left. \begin{array}{l} P(AB)=P(A)P(B) \\ P(AC)=P(A)P(C)\\ P(BC)=P(B)P(C) \end{array} \right \} \Rightarrow A,B,C两两独立$$
    $$ \left. \begin{array}{l} P(AB)=P(A)P(B) \\ P(AC)=P(A)P(C)\\ P(BC)=P(B)P(C) \\ P(ABC)=P(A)P(B)P(C)\end{array} \right \} \Rightarrow A,B,C相互独立$$
---


## 一维随机变量及其分布
### 1. 分布函数
1. 定义: 
   1. 设$X$为随机变量,记$F(x)=P{X \leq x} (-\infty,+\infty)$, 则称F(x)为随机变量$X$的分布函数
2. 性质
   1. 非负性: $0 \leq F(x) \leq 1$
   2. 规范性: $\lim\limits_{x \to -\infty} F(x)=0, \lim\limits_{x \to +\infty} F(x)=1$
   3. 单调不减性: 对任意$x_1<x_2$, 有$F(x_1) \leq F(x_2)$
   4. 右连续性: $F(x_0)=\lim\limits_{x \to x_0^+} F(x)$
3. 利用分布函数求随机事件的概率
   1. $ P{X<a}=F(a-0)=\lim\limits_{x \to a^-} F(x)$
   2. $ P{X=a}=P{X \leq a}-P{X<a}=F(a)-F(a-0)$
   3. $ P{a < X \leq b}=P{X \leq b}-P{X \leq a}=F(b)-F(a)$
   4. $ P{a \leq X < b}=P{X < b}-P{X \leq a}=F(b-0)-F(a)$
   5. $ P{a \leq X \leq b}=P{X \leq b}-P{X < a}=F(b)-F(a-0)$
---

### 2. 离散型随机变量
1. 定义
   1. 随机变量$X$,可能取值为有限个或无限多个,则称$X$为离散型随机变量。
2. 分布律
3. 分布律性质
4. 分布函数
---

### 3. 连续型随机变量
### 4. 常见的随机变量分布
### 5. 一维随机变量函数分布

## 多维随机变量及其分布
### 1. 二维随机变量的分布函数
### 2. 二维离散型随机变量
### 3. 二维连续型随机变量
### 4. 常见二维随机变量分布
### 5. 二维随机变量函数分布

## 随机变量的数字特征
### 1. 数学期望
### 2. 方差
### 3. 协方差
### 4. 相关系数
### 5, 矩

## 大数定理与中心极限定理
### 1. 基本理论
### 2. 大数定理
### 3. 中心极限定理

## 数理统计的基本概念
### 1. 常用统计量及数字特征
### 2. 三大抽样分布
### 3. 单个正态总体
### 4. 两个正态总体

## 参数估计
### 1. 矩估计求解
### 2. 最大似然估计求解
### 3. 估计量的评价标准
### 4. 区间估计

## 假设检验
### 1.两类错误
### 2. 显著性检验
### 3. 显著性水平$\alpha$
### 4. 显著性检验的一般步骤
### 5. 假设检验对照表
