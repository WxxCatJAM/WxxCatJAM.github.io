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
      $$ P(A)=\frac{A的度量}{\Omega的度量}$$

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
   3. 若有$P(A_1A_2...A_{n-1}) > 0$, 有$P(A_1A_2...A_n)=P(A_1)P(A_2|A_1)P(A_3|A_1A_2)...P(A_n|A_1A_2...A_{n-1})$
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
   1. $ P{X=x_k}=p_k, k=1,2,...,n$
3. 分布律性质
   1. $p_k \geq 0, 且\sum_{k=1}^n p_k=1$
4. 分布函数(离散性的分布函数图像为条约阶梯形的)
   1. $F(x)=P{X \leq x}=P{X=x_1}+P{X=x_2}+...+P{X=x_n} \Leftrightarrow \sum_{x_k \leq x }=p_1+p_2+...+p_n \Leftrightarrow \sum_{\leq x }^n p_k=1$
---

### 3. 连续型随机变量
1. 定义
   1. 设随机变量X,分布函数F(x), 若存在非负可积函数f(x), 都有$F(x)=\int_{-\infty}^x f(t)dt$, 则称X为连续性随机变量,f(x)为概率密度函数
2. 概率密度的性质
   1. 非负性:$f(x) \geq 0$
   2. 规范性: $\int_{-\infty}^{+\infty} f(x)dx=1$
   3. 对$\forall x_1 \leq x_2$,有$P{x_1 \leq X \leq x_2}=F(x_2)-F(x_1)=\int_{x_1}^{x_2} f(t)dt$
   4. 若f(x)在点x处连续,则$F'(x)=f(x)$

--- 

### 4. 常见的随机变量分布
1. 离散型随机变量
   1. 0-1分布: 
   $$ P{X=1}=p, P{X=0}=1-p, 0<p<1 $$
   2. 二项分布B(n,p):
   $$ P{X=k}=C_n^kp^k(1-p)^{n-k}, 0<p<1, k=0,1,2...n $$ 
   3. 几何分布G(p):
   $$ P{X=k}=p(1-p)^{k-1}, 0<p<1, k=1,2,3... $$
   4. 超几何分布:
   $$ P{X=k}=\frac{C_M^kC_{N-M}^{n-k}}, \max(0,n-N+1)\leq k\leq \min(M,n), (M,N,N \in \mathbb{N_+},为正整数且M \leq N, n \leq N) $$
   5. 泊松分布($\lambda$):
   $$ P{X=k}=\frac{\lambda^k}{k!}e^{-\lambda}, k=0,1,2... $$

2. 连续型随机变量
   1. 均匀分布U(a,b):
   $$ f(x)=\left\{\begin{array}{l} \frac{1}{b-a}, a<x<b, \\ 0, \text{ 其他} \end{array}\right. F(x)=\left\{\begin{array}{l} 0, x<a \\ \frac{x-a}{b-a}, a \leq x < b\\ 1, x \geq b \end{array}\right. $$
   2. 指数分布E($\lambda$)($\lambda>0$):
   $$ f(x)=\left\{\begin{array}{l} \lambda e^{-\lambda x}, x>0, \\ 0, x \leq 0 \end{array}\right. F(x)=\left\{\begin{array}{l} 0, x<0 \\ 1-e^{-\lambda x}, x \geq 0 \end{array}\right. $$
   - 性质: (无记忆性)$P{X>s+t|X>s}=P{X>t}(s \geq 0, t \geq 0)$
   3. 正态分布N($\mu$,$\sigma^2$):
   $$ f(x)=\frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(x-\mu)^2}{2\sigma^2}}, F(x)=\int_{-\infty}^{x}f(t)dt=\frac{1}{\sqrt{2\pi}\sigma}\int_{-\infty}^{x} e^{-\frac{(t-\mu)^2}{2\sigma^2}}dt$$
   - 性质:
       1. 当$\mu=0,\\sigma^2=1$时, $X \sim N(\mu,\sigma^2),(\sigma > 0), 则Y=\frac{X-\mu}{\sigma} \sim N(0,1), 有F(x)=\Phi(\frac{x-\mu}{\sigma})$
       2. 对称性:
          1. $\varphi(x)= \varphi(-x), \Phi(x)+\Phi(-x)=1$
          2. $\Phi(0)=\frac{1}{2},P{|X| \leq a}=2\Phi(a)-1$
          3. $P(X \leq \mu-a)=P{X \geq \mu+a}$
       3. 若$X \sim N(\mu,\sigma^2)$则$Y=aX+b \sim N(a\mu+b,a^2\sigma^2), a \neq 0$
--- 

### 5. 一维随机变量函数分布
1. 离散型随机变量函数的分布
   1. 已知随机变量X的分布律为$P{X=x_i}=p_i$, 则$Y=g(X)$是离散型随机变量,其分布律为$P{Y=g(x_i))}=p_i$, 若g(x_i)出现相等的函数值,将各概率之和作为$Y=g(X)$取该值的概率。
2. 连续性随机变量函数的分布
   -  已知随机变量X的概率密度为f(x)
    1. 分布函数法
        1. 若$Y=g(X)$为连续型随机变量或既非连续型也非离散型的随机变量,可由分布函数法求解:
        $$ F_Y(y)=P{Y=g(x) \leq y}=\int_{g(x) \leq y}f(x)dx. $$ 若$Y=g(X)$为连续型随机变量,则概率密度$f_Y(y)=F'_y(y)$
    2. 公式法
       1. 若y=g(x) 可导且严格单调,则存在反函数x=g^{-1}(y),故概率密度为:
       $$ f_Y(y)=\left\{\begin{array}{l} f[g^{-1}(y)]|[g^{-1}(y)]'|, y \in (\alpha, \beta), \\ 0, 其他 \end{array}\right. $$
       - 其中$\alpha = \min{g(-\infty),g(+\infty)},\beta = \max{g(-\infty),g(+\infty)}$
--- 


## 多维随机变量及其分布
### 1. 二维随机变量的分布函数
1. 定义
   1. 已知二维随机变量$(X,Y)$, 对任意$x,y \in \mathbb{R}$, 有F(x,y)=P{X \leq x, Y \leq y}, 则称:
      1. $F(x,y)$为二维随机变量$(X,Y)$的(联合)分布函数, 
      2. $F_X(x)=P{X \leq x, Y < +\infty}=\lim\limits_{y \to +\infty}F(x,y)$为随机变量$X$的边缘分布函数,
      3. $F_Y(y)=P{X < + \infty, Y \leq y} = \lim\limits_{x \to +\infty}F(x,y)$为随机变量$Y$的边缘分布函数
2. 性质
   1. F(x,y)分别关于x和y单调不减
   2. $$ 0 \leq F(x,y) \leq 1 $$
   $$ F(-\infty,y) = \lim\limits_(x \to -\infty)=0, F(x,-\infty)=\lim\limits_(y \to -\infty)=0 $$
   $$ F(-\infty,-\infty) = \lim\limits_(x,y \to -\infty)=0, F(+\infty,+\infty)=\lim\limits_(y \to -\infty)=0 $$
   3. F(x,y)关于x和y右连续: 
   $$ \lim\limits_{x \to x_0^+}F(x,y)=F(x_0,y), \lim\limits_{y \to y_0^+}F(x,y)=F(x,y_0) $$
   4. 对任意$(x_1,y_1),(x_2,y_2), x_1<x_2,y_1<y_2$
   $$ F(x_2,y_2)-F(x_2,y_1)+F(x_1,y_1)-F(x_1,y_2) \geq 0 $$
--- 

### 2. 二维离散型随机变量
1. 定义
   1. 若二维随机变量(X,Y)全部可能取值为有限对或无限多对,则称(X,Y)是离散型随机变量,记$P{X=x_i, Y=y_j}=p_{ij}$,则:
   $$ p_{ij} \geq 0, \sum\limits_{i=1}^{\infty} \sum\limits_{j=1}^{\infty} p_{ij}=1 $$

2. 边缘分布律
   $$ P{X=x_i}=\sum\limits_{j=1}^{\infty}P{X=x_i, Y=y_j} =\sum\limits_{j=1}^{\infty}p_{ij} = \sum\limits_{j=1}^{\infty} p_{i\cdot} $$
   $$ P{Y=y_i}=\sum\limits_{i=1}^{\infty}P{X=x_i, Y=y_j} =\sum\limits_{j=1}^{\infty}p_{ij} = \sum\limits_{i=1}^{\infty} p_{\cdot j} $$
3. 边缘分布函数
   $$ F_x(x)=\lim\limits_{y \to +\infty} F(x,y) = P{X \leq x}=\sum\limits_{x_i \leq x} P{X = x_i}=\sum\limits_{x_i \leq x} \sum\limits_{j=1}^{\infty}p_{ij}$$
   $$ F_y(y)=\lim\limits_{y \to +\infty} F(x,y) = P{Y \leq y}=\sum\limits_{y_i \leq y} P{Y = y_i}=\sum\limits_{y_j \leq y} \sum\limits_{i=1}^{\infty}p_{ij}$$
4. 条件分布
   1. 对固定的$y_j$, 
      1. 若$P{Y=y_j}>0$，则$P{X=x_i|Y=y_j}=\frac{P{X=x_i,Y=y_j}}{P{Y=y_j}} = \frac{p_{ij}}{p_{\cdot j}}$表示在事件${Y=y_j}$发生的条件下事件${X=x_i}$发生的概率, 也成为在$Y=y_j$发生的条件下随机变量**X的条件分布律**.
   2. 对固定的$x_i$,
      1. 若$P{X=x_i}>0$，则$P{Y=y_j|X=x_i}=\frac{P{X=x_i,Y=y_j}}{P{X=x_i}} = \frac{p_{ij}}{p_{i\cdot}}$表示在事件${X=x_i}$发生的条件下事件${Y=y_j}$发生的概率, 也成为在$X=x_i$发生的条件下随机变量**Y的条件分布律**.
5. 独立性
   1. 设$F(x,y), F_x(x), F_y(y)$分别为二维随机变量(X,Y)的联合分布函数和边缘分布函数,则随机变量X和Y是互独立的充分必要条件是对$\forall x,y\in R$,有
   $$ P{X \leq x, Y \leq y}= P{X \leq x}P{Y \leq y} $$
   $$ F(x,y)=F_x(x)F_y(y) $$
   - 即: 二维离散型随机变量X和Y相互独立的充分必要条件是
   $$ P{X =x_i, Y =y_j}=P{X=x_i}P{Y=y_j} $$
   - 即: $p_{ij}=p_{i\cdot}p_{\cdot j}$
### 3. 二维连续型随机变量
1. 定义
   1. 设二维随机变量(X,Y)的分布函数为F(x,y), 如果存在非负可积函数f(x,y), 有:
   $$ F(x,y)= \int_{-\infty}^{x} \int_{-\infty}^{y} f(u,v)dudv $$
   - 则称f(x,y)为(X,Y)的联合概率密度
2. 性质
   1. $f(x,y) \geq 0, \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(x,y) dxdy=1 $
   2. 若f(x,y)连续, 则有: $f(x,y)=\frac{\partial^2 F(x,y)}{\partial x \partial y}$ 
   3. 设D是 $xOy$ 平面上的区域, 则点(X,Y)落在区域D内的概率为: 
   $$ P{(X,Y) \in D} =\iint_{D} f(x,y)dxdy $$
3. 边缘概率密度
   1. 设连续型随机变量(X,Y)的联合概率密度为f(x,y), 则X,Y的边缘概率密度分别为:
   $$ f_x(x)=\int_{-\infty}^{\infty}f(x,y)dy, f_y(y)=\int_{-\infty}^{\infty}f(x,y)dx $$ 
4. 边缘分布函数
   $$ F_X(x)=\lim\limits_{y=+\infty}F(x,y) =\int_{-\infty}^{x}f(u)du$$
   $$ F_Y(y)=\lim\limits_{x=+\infty}F(x,y) =\int_{-\infty}^{y}f(v)dv$$

5. 条件概率密度
   - 对固定的y, 若$f_Y(y) > 0$, 则称$f_{X|Y}(x|y)=\frac{f(x,y)}{f_Y(y)}$为Y=y条件下X的条件概率密度
   - 对固定的x, 若$f_x(x) > 0$, 则称$f_{Y|X}(y|x)=\frac{f(x,y)}{f_X(x)}$为X=x条件下Y的条件概率密度
   - 条件分布函数:
   $$ F_{X|Y}(x|y)=P{X \leq x|Y=y}=\int_{-\infty}^{x}f_{X|Y}(x|y)dx $$
   $$ F_{Y|X}(y|x)=P{Y \leq y|X=x}=\int_{-\infty}^{x}f_{Y|X}(y|x)dx $$

6. 独立性
   1. 二维连续随机变量俩变量相互独立的充要条件:
      1. f(x,y)=f_X(x)f_Y(y), 其中f(x,y)为联合概率密度函数, f_X(x)和f_Y(y)为边缘概率密度函数
--- 

### 4. 常见二维随机变量分布
1. 二维均匀分布
   1. X,Y的联合概率密度$f(x,y)=\left\{\begin {array}{l} \frac{1}{S_D}, (x,y) \in D \\ 0, 其他 \end {array} \right.$, 其中$S_D$为平面有界区域D的面积
2. 二维正态分布
   1. (X,Y)的联合概率密度
   $$ f(x,y)=\frac{1}{2\pi\sigma_1 \sigma_2 \sqrt{1-\rho^2}} exp{\frac{-1}{2(1-\rho^2)}[\frac{(x-\mu_1)^2}{\sigma_1^2}-2\rho\frac{(x-\mu_1)(y-\mu_2)}{\sigma_1\sigma_2}+\frac{(y-\mu_2)^2}{\sigma_2^2}]}, {x,y \in R}  $$
    1. 若$(X,Y) \sim N(\mu_1,\mu_2,\sigma_1^2,\sigma_2^2,\rho)$
            1. $X \sim N (\mu_1,\sigma_1^2), Y \sim N(\mu_2,\sigma_2^2)$
            2. X 与Y的非零线性组合服从正态分布, 特别的, 当X与Y相互独立式有:
            $$ aX+bY \sim N(a\mu_1+b\mu_2,a^2\sigma_1^2+b^2\sigma_2^2+2ab\rho\sigma_1\sigma_2)$$
            3. 记$X_1=k_1X+k_2Y,Y_1=l_1X+l_2Y$, 则$(X_1,Y_1)$也服从二维正态分布
            4. X,Y相互独立的充要条件为$\rho = 0$
    2. 若$X \sim N(\mu,\sigma_1^2), Y \sim N(\mu,\sigma_2^2)$,则:
       1. $aX+b \sim N(a\mu_1 + b,a^2\sigma^2\sigma_1^2)$, $cY+d \sim N(c\mu_2+d,c^2\sigma^2\sigma_2^2)$, 但kX+lY不一定服从正态分布
       2. 若X和Y相互独立,则(X,Y)服从二维正态分布,此时$kX+lY$服从正态分布
       3. 若X和Y相互独立,则(X,Y)不一定服从二维正态分布,此时$kX+lY$不一定服从正态分布
--- 
### 5. 二维随机变量函数分布
1. 离散型
   1. 随机变量g(X,Y)的分布律为:
   $$ P{Z=z_k}=P{g(X,Y)=z_k}=\sum_{g(x_i,y_j)=z_k}P{X=x_i,Y=y_j}$$
2. 连续型
   1. 分布函数法: 概率密度:f(x,y),随机变量Z=g(X,Y)
      1. $F_Z(z)=P{Z\leq z}= \iint_{g(x_i,y_j) \leq z} f(x,y)dxdy$, 
      2. 概率密度为: $f_z(z)=F'_z(z)$
   2. 卷积分布: 概率密度: $f_X(x)=f_Y(y), 随机变量Z=aX+bY$
      1. $f_Z(z)=\frac{1}{|b|}\int_{-\infty}^{+\infty}f_X(x)f_Y\frac{(z-ax)}{b}dx = \frac{1}{|a|}\int_{-\infty}^{+\infty}f_X(\frac{(z-by)}{a})f_Y(y)dy$
3. 最值分布: 
   - 设$X_1,X_2,...X_n$相互独立,其分布函数分别为$F_{X_1}(x_1),F_{X_2}(x_2),...,F_{X_n}(x_n)$,记:
     - $ U=\max_{l \leq r \leq n}(X_i), V=\min_{l \leq r \leq n}(X_i)$
     - 则: $F_U(u)=P{\max{X_1,\dots,X_n}\leq u}=P{X_1 \leq u,X_2 \leq u,...,X_n \leq u}=P{X_1 \leq u}\cdots P{X_n \leq u}=F_{X_1}(u),\dots,F_{X_n}(u)$
     - $F_V(v)=P{\min{X_1,\dots,X_n}\leq v}=1- P{X_1 \geq v,X_2 \geq v,...,X_n \geq v}=1-P{X_1 \geq v}\cdots P{X_n \geq v}=1-[1-F_{X_1}(v)],\dots,[1-F_{X_n}(v)]$
   - 当$X_1,X_2,...,X_n$独立分布, 即$X_i \sim F(x)$时:
     - $F_U(u)=F^n(u), F_V(v)=[1-F(v)]^n$
4. 分布的可加性
   - 设X,Y相互独立
     1. 若$X \sim B(n,p), Y \sim B(m,p)$, 则$X+Y \sim B(m+n,p)$
     2. 若$X \sim P(\lambda_1), Y \sim P(\lambda_2)$, 则$X+Y \sim P(\lambda_1+\lambda_2)$
     3. 若$X \sim E(\lambda_1), Y \sim E(\lambda_2)$, 则$\min {X+Y} \sim E(\lambda_1+\lambda_2)$
     4. 若$X \sim N(\mu_1,\sigma_2^2), Y \sim N(\mu_2,\sigma_2^2)$, 则$X\pm Y \sim N(\mu_1 \pm \mu_2, \sigma_1^2 \pm \sigma_2^2)$
--- 


## 随机变量的数字特征
### 1. 数学期望
1. 定义
   1. 离散型随机变量分布律$P{X=x_i}=p_k$, 则数学期望$EX=\sum_{k=1}^{\infty}x_kp_k$
   2. 设连续型随机变量X的概率密度f(x), 则数学期望为$EX=\inf_{-\infty}^{+\infty}xf(x)dx$(要求反常积分绝对收敛)
   3. 随即变量函数的期望
      1. 一维随机变量函数Y=g(X)
         1. 当X为离散型, 有$EY=\sum_{k=1}^{\infty}g(x_k)p_k$
         2. X为连续型,有$EY=\int_{-\infty}^{+\infty}g(x)f(x)dx$
      2. 二维随机变量函数Z=g(X,Y)
         1. 若(X,Y)为二维离散型随机变量,则$EZ=\sum_{i=1}^{\infty}\sum_{j=1}^{\infty}g(x_i,y_j)p_{ij}$
         2. X,Y为二维连续型随机变量,则$EZ=\int_{-\infty}^{+\infty}\int_{-\infty}^{+\infty}g(x,y)f(x,y)dxdy$
         3. 特别的: $EX=\int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} xf(x,y)dxdy$, $EY = \int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} yf(x,y)dxdy$

2. 性质
   1. $EC=C$(C为常数)
   2. $E(aX+b)=aEX+b$
   3. $E(X \pm Y)=E(X) \pm E(Y)$
   4. 若X与Y不相关, 则$E(XY)=EXEY$
---

### 2. 方差
1. 定义
   $$ DX=E[(X-EX)^2]=E[X^2]-(EX)^2 $$
2. 性质
   1. DC=0(C为常数)
   2. $D(aX+b)=a^2DX$
   3. $D(aX \pm bY)=a^2DX+b^2DY+2abCov(X,Y)$
   4. 若X与Y不相关, 则$D(aX \pm bY)=a^2DX+b^2DY$
3. 常见随机变量的数学期望和方差(表)

|               分布               | 分布律或概率密度                                                                                               | 数学期望            | 方差                  |
| :------------------------------: | -------------------------------------------------------------------------------------------------------------- | ------------------- | --------------------- |
|             0-1分布              | $P{X=k}=p^k(1-p)^{1-k},k=0,1; 0<p<1$                                                                           | $p $                | $p(1-p)$              |
|     二项分布$X \sim B(n,p)$      | $P{X=k}=C_n^k p^k(1-p)^{1-k},k=0,1,...,n; 0<p<1$                                                               | $np$                | $np(1-p)$             |
|      几何分布$X \sim G(p)$       | $P{X=k}=(1-p)^{1-k}p,k=0,1,...; 0<p<1$                                                                         | $\frac{1}{p}$       | $\frac{1-p}{p^2}$     |
|   泊松分布$X \sim P(\lambda)$    | $P{X=k}=\frac{\lambda^k}{k!}e^{-\lambda},k=0,1,...,n; \lambda >0$                                              | $\lambda$           | $\lambda$             |
|     均匀分布$X \sim U(a,b)$      | $f(x)=\left\{\begin{array}{l} \frac{1}{b-a} & a < x < b \\ 0 & 其他 \end{array} \right.$                       | $\frac{a+b}{2}$     | $\frac{(b-a)^2}{12}$   |
|   指数分布$X \sim E(\lambda)$    | $f(x)=\left\{\begin{array}{l} \lambda e^{-\lambda x} & x >0 \\ 0 & x \leq 0 \end{array} \right. (\lambda >0)$ | $\frac{1}{\lambda}$ | $\frac{1}{\lambda^2}$ |
| 正态分布$X \sim N(\mu,\sigma^2)$ | $ f(x)=\frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(x-\mu)^2}{2\sigma^2}}, (-\infty,+\infty)$                         | $\mu$               | $\sigma^2$            |
|                                  |                                                                                                                |                     |                       |
--- 

### 3. 协方差
1. 定义
   $$ Cov(X,Y)= E[(X-EX)(Y-EY)]=E(XY)-EXEY $$
2. 性质
   1. $Cov(X,X)=DX$
   2. $Cov(aX,bY)=abCov(X,Y); Cov(X,C)=0$
   3. $Cov(X_1 \pm X_2,Y)=Cov(X_1,Y) \pm Cov(X_2,Y)$
   4. 若随机变量$X,Y$不相关,则$Cov(X,Y)=0$
---

### 4. 相关系数
1. 定义
   $$ \rho XY=\frac{Cov(X,Y)}{\sqrt{DXDY}}=\frac{E(XY)-EXEY}{\sqrt{DXDY}}$$
2. 性质
   1. $|\rho XY| \leq 1$
   2. X,Y不相关,$\rho XY=0$
   3. $|\rho XY| = 1 \Leftrightarrow \exist a,b 且a \neq 0, 使得P\{Y=aX+b\}=1,且\rho XY= \left\{\begin {array}{l} 1, &a >0 \\ -1, & a<0 \end {array} \right.$
--- 

### 5, 矩
1. k阶原点矩
    $$ E(X^k)(k=1,2,...),\text{(期望EX为一阶原点矩)}$$
2. k阶中心矩
   $$ E[(X-EX)^k](k=2,3,...), \text{(方差DX为二阶中心矩)}$$
3. k+l阶混合矩
   $$ E(X^kY^l)(k,l=1,2,...)$$
4. k+l阶混合中心矩
    $$ E[(X-EX)^k(Y-EY)^l](k,l=1,2,...), \text{(协方差Cov(X,Y)为二阶混合中心矩)}$$
--- 


## 大数定理与中心极限定理
### 1. 基本理论
1. 切比雪夫不等式:
   1. 设随机变量:$X$,数学期望:$EX$,方差:$DX$,则对$\forall_\epsilon >0$,有:
   $$ P\{|X-EX|\geq \epsilon\} \leq \frac{DX}{\epsilon^2}, 或者 $$
   $$ P\{|X-EX|< \epsilon\} \geq \frac{DX}{\epsilon^2}$$
 
2. 依概率收敛
   1. 设$Y_n$为随机变量序列, 有$\lim\limits_{n \to \infty}\{|Y_n-a|< \epsilon\}$, a为常数,则称$Y_n$序列收敛与a,记为$Y_n \overset{P}\rightarrow a$
   2. 性质: 设$X_n \overset{P}\rightarrow a, Y_n \overset{P}\rightarrow b$ , 且函数g(x,y)连续, 则$g(X_n,Y_n)\overset{P}\rightarrow g(a,b)$
--- 

### 2. 大数定律
1. 切比雪夫大数定律
   1. 设随机变量序列$X_n$相互独立,期望:$EX$存在, 方差:$DX_i(i \geq 1)$存在且有上界, 则$\forall_\epsilon>0$,有:
    $$ \lim\limits_{n \to \infty}P\{|\frac{1}{n}\sum\limits_{i=1}^nX_i-\frac{1}{n}\sum\limits_{i=1}^nEX|<\epsilon\}=1$$
2. 辛钦大数定理
   1. 设随机变量序列$X_n$相互独立,期望:$EX_i=\mu(i=1,2,\dots)$
   $$ \lim\limits_{n \to \infty}P\{|\frac{1}{n}\sum\limits_{i=1}^nX_i- \mu|<\epsilon\}=1 , $$
 即,   $$ \frac{1}{n}\sum\limits_{i=1}^nX_i \overset{p}\to \mu = EX_i $$
3. 伯努利大数定律
   1. 设$f_A$是n次独立重复实验中事件A发生的次数, $p(0<p<1)$是A发生的概率,则:
   $$ \lim\limits_{n \to \infty}P\{|\frac{f_A}{n}- p|<\epsilon\}=1 , $$
---

### 3. 中心极限定理
1. 列维-林德伯格定理
   1. 设随机变量$X_n$, 期望$EX_i=\mu$, 方差$DX_i=\sigma^2 >0$, 则有:
$$ \lim\limits_{n \to \infty}P\{ \frac{\sum_{i=0}^nX_i-n\mu}{\sqrt{n}\sigma} \leq x\}=\frac{1}{\sqrt{2\pi}} \int_{-\infty}^xe^{-\frac{t^2}{2}}dt=\Phi$$ 
2. de 莫弗-拉普拉斯定理
   1. 设随机变量$X_n \sim B(n,p)(0<p<1, n \geq 1)$, 则有:
   $$\lim\limits_{n \to \infty}P\{ \frac{X_n-np}{\sqrt{np(1-p)}} \leq x\}=\frac{1}{\sqrt{2\pi}} \int_{-\infty}^xe^{-\frac{t^2}{2}}dt=\Phi$$ 
---


## 数理统计的基本概念
### 1. 常用统计量及数字特征
1. 样本均值
$$ \bar{X} = \frac{1}{n}\sum_{i=1}^nX_i$$
$$ E\bar{X} = EX, D\bar{X}=\frac{1}{n}DX$$
2. 样本方差
$$ S^2 = \frac{1}{n-1}\sum_{i=0}^n(X_i-\bar{X})^2,$$
$$ E(S^2) = DX$$
3. 样本标准差
$$ S=\sqrt{\frac{1}{n-1}\sum_{i=1}^n(X_i-\bar{X})^2}$$
4. 样本k阶(原点)矩
$$ A_k=\frac{1}{n}\sum_{i=1}^nX_i^k, k=1,2,...$$
5. 样本k阶中心矩
$$ A_k=\frac{1}{n}\sum_{i=1}^n(X_i-\bar{X})^k, k=2,3,...$$
---

### 2. 三大抽样分布
1. $\chi^2$分布
   1. 定义
      1. 设$X_1,X_2,...X$相互独立且服从N(0,1), 则称$X=X_1^2+X_2^2+...+X_n^2$服从自由度维n的$\chi^2$分布,记为: $X \sim \chi^2$
   2. 性质
      1. 可加性, 设$X_1 \sim \chi^2(n_1), X_2 \sim \chi^2(n_2)$, X_1X_2相互独立,有:$X_1+X_2 \sim \chi^2(n_1+n_2)
      2. 期望与方差,若$X \sim \chi^2, 则EX=n, DX=2n$
      3. 若满足$P\{\chi^2>\chi_a^2(n)\}=a$的点$\chi_a^2(n)$为$\chi^2(n)$分布的上a分为点
2. t分布
   1. 定义
      1. XY互相独立,且$X \sim N(0,1),Y \sim \chi^2(n)$, 则随机变量$t=\sqrt{X}{\sqrt{\frac{Y}{n}}}$,服从自由度为n的t分布,记为$t \sim t(n)$
   2. 性质
      1. t分布的概率密度为**偶函数**,当n充分大时,t分布近似于N(0,1)分布
      2. 上$a$分位点.$P\{t > t_a(n)\}=\int_{t_a(n)^{+\infty}}f(t)dt=a(0<a<1), t_{1-a}(n)=-t_a(n), P\{|t|>t_{\frac{a}{2}\}=a$
3. F分布
   1. 定义
      1. XY互相独立,且$X \sim \chi^2(n_1), Y \sim \chi^2(n_2), 则F=\frac{X/n_1}{Y/n_2} \sim F(n_1,n_2)$
   2. 性质
      1. 若$F \sim F(n_1,n_2), 则\frac{1}{F} \sim F(n_2,n_1)$
      2. 上a分位点.$P\{F>F_a(n_1,n_2)\}=\int_{F_a(n_1,n_2)^{+\infty}f(t)dt=a, F_a(n_1,n_2)^{+\infty}=\frac{1}{F_a(n_2,n_1)}$
      3. 若t~t(n),则$t \sim F(1,n), \frac{1}{t^2} \sim F(n,1)$
--- 

### 3. 单个正态总体
- 设$X_n$是来自正态总体$X \sim N(\mu,\sigma^2)$的一个样本, 有样本均值: $\bar{X}$, 样本方差$S^2$,则
  1. $\bar{X} \sim N(\mu,\frac{\sigma^2}{n}), \frac{\bar{X}-\mu}{\sigma\sqrt{n}} \sim N(0,1) $
  2. $\frac{1}{\sigma^2}\sum_{i=1}^n(X_i-\mu)^2, (\frac{\bar{X}-\mu}{\sigma\sqrt{n}} )^2 \sim \chi^2(1) $
  3. $\frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)$
  4. $\bar{X}和S^2相互独立, \frac{\bar{X}-\mu}{S\sqrt{n}} \sim t(n-1)$
--- 

### 4. 两个正态总体
- 设$X_n$,$Y_n$是来自正态总体$X \sim N(\mu_1,\sigma_1^2), Y \sim N(\mu_2,\sigma_2^2)$的样本,记样本均值: $\bar{X},\bar{Y}$, 方差:$S_1^2,S_2^2$,
  1. $\bar{X}-\bar{Y} \sim N(\mu_1-\mu_2,\frac{\sigma_1^2}{n}+\frac{\sigma_2^2}{n}), U=\frac{\bar{X}-\bar{Y}-(\mu_1-\mu_2)}{\sigma\sqrt{\frac{\sigma_1^2}{n}+\frac{\sigma_2^2}{n}}} \sim N(0,1) $
  2. $V=\frac{(n_1-1)S_1^2}{\sigma_1^2} + \frac{(n_2-1)S_2^2}{\sigma_2^2}\sim \chi^2(n_1+n_2-2)
  3. $\frac{U}{\sqrt{V/(n_1+n_2-2)}} \sim t(n_1+n_2-2)$
  4. ...
--- 


## 参数估计
### 1. 矩估计求解
1. 求出总体$X$的k(k=1,2,...)阶原点矩
2. 令样本矩=总体矩
3. 求解上述方程组得到矩估计量(值)
4. 注: 
   1. 总体$X,的期望EX的矩估量:\widehat{EX}=\bar{X}$
   2. 方差$DX,的矩估量: \widehat{DX}=\frac{1}{n}\sum_{i=0}^n(X_i-\bar{X})^2$
### 2. 最大似然估计求解
1. 写出似然数
   1. 离散型: $L(x_1,x_2,...,x_n; \theta_1,...\theta_m)= \prod_{i=1}^np(x_i;\theta_1,\dots \theta_m)\$
   2. 连续型: $L(x_1,x_2,...,x_n; \theta_1,...\theta_m)= \prod_{i=1}^nf(x_i;\theta_1,\dots \theta_m)\$
2. 取对数得$\ln L$  
3. 求(偏)导
### 3. 估计量的评价标准
### 4. 区间估计

## 假设检验
### 1.两类错误
### 2. 显著性检验
### 3. 显著性水平$\alpha$
### 4. 显著性检验的一般步骤
### 5. 假设检验对照表
