# 预备知识

 
此章针对一些基础运算所撰写（如：对数，指数运算等）

---- 

## 指数运算
a,b 为常数， a,b > 0 且 a,b $\neq$ 1时，有: 
1. $a^0 = 1$;
 2. $(\frac{a}{b})^k = (\frac{a^k}{b^k})$
 3. $\quad \sqrt[n]{a^k}$
 4. $a^ka^l=a^{k+l}$
 5. $(ab)^k=a^k \cdot b^k$
 6. $(a^k)^l=a^{kl}$
 7. $\frac{a^k}{a^l} = a^{k-l}$

## 对数运算
a为常数，$a > 0$ 且 a $\neq$ 1时，有:
 1. $\log_a \frac{1}{M}=-\log_aM$
 2. $\log_a(MN)=\log_aM+\log_aN$
 3. $\log_a(M_1M_2\dotsb M_n )= \log_a M_1 + \log_a M_2 + \dots + \log_a M_n$
 4. $\log_a \frac{M}{N} = \log_a M - \log_aN$
 5. $\log_a M^b = b \log_a M$
 6. $\log_a \quad \sqrt[n]{M^b} = \log_a M^{\frac{b}{n}} = \frac{b}{n}\log_a M$
 7. 换底公式：$\log_a M = \frac{\log_b M}{\log_b a}$
 8. $\log_a a^N = a^{\log_a N}=N$

## 常用不等式
 1. $\frac{1} {1+x} < \ln(1+\frac{1}{x})<\frac{1}{x} (x>0)$
 2. 当$0<x<\frac{\pi}{2}$, $\sin x < x < \tan x$
 3. $\arctan x \leq x \leq \arcsin x(0\leq x \leq1)$
 4. 当$x>0$时，有$x>\ln(1+x)$
 5. 当$x \in \mathbb{R}时，有e^x-1\geq x$
 6. 当$x>0$时，有$x > \sin x; 当x<0时，有x < \sin x$
 7. 当$a>0，b>0$时，$a+b\geq 2\sqrt{ab}$, 当且仅当a=b时等号成立
 8. $ab \leq (\frac{a+b}{2})^2$, 当且仅当a=b时等号成立
 9. 当$a>0, b>0, c>0 时，a+b+c \geq 3\sqrt[3]{abc}$
 10. $||a|-|b|| \leq |a\pm b| \leq |a|+|b|$
 11. $x-1<[x]\leq x, [x]表示不超过x的最大整数$
    例：$x=3.4, [x]=3, x=[2.63]=2, x=[-2.63]=-3$
    
## 等差数列
 1. $a_{n+1}-a_n=d$
 2. 通项公式：$a_n=a_1+(n-1)d=a_m+(n-m)d$  
 3. 等差求和公式: $S_n=\frac{n(a_1+a_n)}{2}=na_1+\frac{n(n-1)d}{2}$

## 等比数列
 1. $\frac{a_{n+1}}{a_n}=q(q\neq 0)$
 2. 通项公式：$a_n=a_1q^{n-1}=a_mq^{n-m}$
 3. 等比求和公式：
    $$S_n\left\{
    \begin{aligned}
    na_1, q=1, \\
    \frac{a_1(1-q^n)}{1-q}, q\neq 1 
    \end{aligned}
    \right.$$

## 排列组合
 1. 从$n$个不同元素中，任取$m(m\leq n)$ 个元素照一定顺序排成一列，称为从$n$个不同元素中取出$m$个元素的一个排列, 所有不同的排列的个数记作$A_n^m$
 2. 重要公式
   - $A_n^0=1$
   - $A_n^n=A_n^{n-1}=n!$
 3. 从$n$个元素中任取$m(m\leq n)$个元素，无放回，且无序，称为从$n$个元素中取出$m$个元素的一个组合，所有不同的组合的个数记作$C_n^m$
 4. 重要公式
   - $C_n^0=C_n^n1$
   - $C_n^m=C_n^{n-m}$
   - $C_n^m = \frac{n!}{m!(n-m)!}$

## 同角三角函数的基本关系式
 - $\sin^2\alpha+\cos^2\alpha=1, 1+\tan^2\alpha=\sec^2\alpha, 1+\cot^2\alpha=\csc^2\alpha$
 - $\sin\alpha \cdot \csc\alpha=1, \cos\alpha \cdot \sec\alpha=1, \tan\alpha \cdot \cot\alpha=1$
 - $\tan\alpha = \frac{\sin\alpha}{\cos\alpha}, \cot\alpha=\frac{\cos\alpha}{\sin\alpha}$
  

## 三角函数的二倍角公式
- $\sin(2\alpha)=2\sin\alpha\cos\alpha, \cos2\alpha = \cos^2\alpha-\sin^2\alpha = 1-2\sin^2\alpha = 2\cos^2\alpha-1$
- $\tan\alpha = \frac{\sin2\alpha}{1+\cos2\alpha}=\frac{1-\cos2\alpha}{\sin2\alpha}$

## 三角函数的万能公式
- $\sin2\alpha=\frac{2\tan\alpha}{1+\tan^2\alpha}$
- $\cos2\alpha=\frac{1-\tan^2\alpha}{1+\tan^2\alpha}$
- $\tan2\alpha=\frac{2\tan\alpha}{1-\tan^2\alpha}$
- $\cot2\alpha=\frac{1-\tan^2\alpha}{\tan2\alpha}$

## 三角函数的和(差)角公式
- $\tan(\alpha+\beta)=\frac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta}$
- $\tan(\alpha-\beta)=\frac{\tan\alpha-\tan\beta}{1+\tan\alpha\tan\beta}$
- $sin(\alpha \pm \beta)=\sin\alpha\cos\beta \pm \cos\alpha\sin\beta$
- $cos(\alpha \pm \beta)=\cos\alpha\cos\beta \mp \sin\alpha\sin\beta$

## 三角函数的积化和差(和差化积)公式
- $\sin\alpha \cdot \cos\beta = \frac{1}{2}(\sin(\alpha+\beta)+\sin(\alpha-\beta)$
- $\cos\alpha \cdot \sin\beta = \frac{1}{2}(\sin(\alpha+\beta)-\sin(\alpha-\beta))$
- $\sin\alpha \cdot \sin\beta = \frac{1}{2}(\cos(\alpha-\beta)-\cos(\alpha+\beta))$
- $\cos\alpha \cdot \cos\beta = \frac{1}{2}(\cos(\alpha+\beta)+\cos(\alpha-\beta)$
- $\sin\alpha + \sin\beta = 2\sin \frac{\alpha+1}{2} \cdot \cos\frac{\alpha+\beta}{2}$
- $\sin\alpha - \sin\beta = 2\cos\frac{\alpha+\beta}{2} \cdot \sin \frac{\alpha-\beta}{2}$
- $\cos\alpha + \cos\beta = 2\cos \frac{\alpha+\beta}{2} \cdot \cos\frac{\alpha-\beta}{2}$
- $\cos\alpha - \cos\beta = 2\sin \frac{\alpha+\beta}{2} \cdot \sin \frac{\alpha-\beta}{2}$


## 三角函数的辅助角公式
- $a\sin x + b\cos x = \sqrt{a^2+b^2}sin(x+t), 其中\sin t = \frac{b}{\sqrt{a^2+b^2}}, \cos t = \frac{a}{\sqrt{a^2+b^2}}, \tan t = \frac{b}{a}, cot t = \frac{a}{b}$


## 常用乘法公式和因式分解
 1. $a^2-b^2 = (a+b)(a-b)$
 2. $a^3-b^3 = (a-b)(a^2+ab+b^2)$
 3. $a^3+b^3 = (a+b)(a^2-ab+b^2)$
 4. $a^n-b^n = (a-b)(a^{n-1}+a^{n-2}b+a^{n-3}b^2+\cdots+ab^{n-2}+b^{n-1}) (n是正整数)$
 5. $(a\pm b)^2 = a^2\pm 2ab+b^2$
 6. $(a \pm b)^3 = a^3 \pm 3ab(a+b) \pm b^3$
 7. $(a+b)^n = C_n^0a^nb^0+C_n^1a^{n-1}b^1+C_n^2a^{n-2}b^2+\cdots+C_n^{n-1}a^1b^{n-1}+C_n^na^0b^n$
 8. $(a+b+c)^2 = a^2+b^2+c^2+2ab+2bc+2ca$

## 一元二次方程
  （$ax^2 + bx +c = 0, a\neq 0$)
  1. 判别式：$\Delta = b^2 -ac $
     1. $\Delta > 0$, 方程有两个不相等的实根
     2. $\Delta = 0$, 方程有两个相等的实根
     3. $\Delta < 0$, 方程无实根
  2. 求根公式$x_{1,2}=\frac{-b \pm \sqrt{b^2-4ac}}{2a}$
  3. 根与系数的关系(韦达定理)$x_1+x_2= \frac{-b}{a}, x_1x_2=\frac{c}{a}$

## 平面(空间)几何
  1. 扇形: $\theta$为扇形角的弧度, $r$为扇形半径, 则弧长$l=\theta r $, 扇形面积为:
     $$ S=\frac{1}{2}lr=\frac{1}{2}\theta r^2$$
  2. 三角形: $\triangle ABC的三边, AB=a,AC=b,BC=c, AB对应的高为h$,则:
     $$ S=\frac{1}{2}ah=\frac{1}{2}ab\sin\angle A=\frac{1}{2}ac\cos\angle B = \frac{1}{2}bc\sin\angle C$$
  3. 球体: 半径为r, 表面积, $S=4\pi r^2$体积为: $V=\frac{4}{3}\pi r^3$
  4. 圆柱: 半径为r, 高度为h, 则: $S=2\pi rh+2\pi r^2$, 体积: $V=2\pi r^2h$
  5. 椭圆的标准方程: $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$(焦点在$x$轴)或$\frac{y^2}{a^2}+\frac{x^2}{b^2}=1$(焦点在$y$轴),其中a>b>0
  6. 双曲线标准方程: $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$ 或 $\frac{y^2}{a^2}-\frac{x^2}{b^2}=1$
  7. 抛物线:
     1. 右开口:$y^2=2ax$
     2. 上开口:$x^2=2ax$
     3. 左开口:$y^2=-2ax$
     4. 下开口:$x^2=-2ax$
     5. 其中a>0
  8. 圆的标准方程:圆心为$A(x_0,y_0)$, 半径为$r$的圆的标准方程$(x-x_0)^2+(y-y_0)^2=r^2$. 设$r$是半径,则面积 $S=\pi r^2 $, 周长 $C=2\pi r$