# 高等数学

## 函数、极限和连续
### 函数的概念和性质
1. 性质
   1. 有界性
   2. 奇偶性：
      - 奇函数 -> 定义域$D$关于原点对称, $f(-x)=-f(x)$
      - 偶函数 -> $f(x)=f(-x)$
        - 积分:
          - $f(x)$为奇函数, 则$\int_{-a}^a f(x)dx=0$
          - $f(x)$为偶函数, 则$\int_{-a}^a f(x)dx=2\int_0^af(x)dx$
   3. 周期性: 如$f(x+T)=f(x)$, 则函数f(x)是以$T$为周期的函数
   4. 单调性:
      1. 函数: 
         1. 当$f'(x) > 0 (<0)$时, 函数单调递增(减); 
         2. 当$f'(x) \geq 0 (\leq 0)$且等号有限个点处成立的话, $f(x)$单调递增(减)
      2. 数列: $X_{n+1}-X_n>0(<0)$, 数列单调递增(减)
--- 

2. 基本初等函数
   1. 幂函数$y=x^a(a \in \mathbb{R})$
   2. 指数函数$y=a^x(a是常数, 且a>0, a \ne 1)$
      | a的范围 | $a>1$ | $0<a<1$ |
      | :--------- | :-------: | ----------: |
      | 单调性 | 单调递增 | 单调递减 |
      | 奇偶性 | 非奇非偶 | 非奇非偶 |
      | 定义域 | $(-\infty, +\infty)$ | $(-\infty, +\infty)$ |
      | 值域 | $(0,+\infty)$ | $(0,+\infty)$ |
   3. 对数函数: $y=log_ax(a是常数, 且a>0, a \ne 1)$
      | a的范围 | $a>1$ | $0<a<1$ |
      | :--------- | :-------: | ----------: |
      | 单调性 | 单调递增 | 单调递减 |
      | 奇偶性 | 非奇非偶 | 非奇非偶 |
      | 定义域 | $(0,+\infty)$ | $(0,+\infty)$ |
      | 值域 | $(-\infty, +\infty)$ | $(-\infty, +\infty)$ |
   4. 三角函数:
      1. 正弦函数: $y=\sin x$
      2. 余弦函数: $y=\cos x$
      3. 正切函数: $y=\tan x$
      4. 余切函数: $y=\cot x$
      5. 正割函数: $y=\sec x= \frac{1}{\cos x}(偶函数, 周期T=2\pi)$
      6. 余割函数: $y=\csc x= \frac{1}{\sin x}(奇函数, 周期T=2\pi)$
   5. 反三角函数:
      1. 反正弦函数: $y=\arcsin x, y \in [-\frac{\pi}{2}, \frac{\pi}{2}]$
      2. 反余弦函数: $y=\arccos x, y \in [0, \pi]$
      3. 反正切函数: $y=\arctan x, y \in (-\frac{\pi}{2}, \frac{\pi}{2})$
      4. 反余切函数: $y=\arcctg x, y \in (0, \pi)$
---

### 极限的定义和性质
1. 极限的定义
   1. 数列极限: $\lim\limits_{n \to \infty} = A \iff \forall_\epsilon > 0 \exists N \in \mathbb{N}_+, 当n>N时, 有|x_n-A| < \epsilon$
   2. 函数极限: $\lim\limits_{n \to \infty} = A \iff \forall_\epsilon > 0 \exists X >0 , 当|x|>X时, 有|f(x)-A| < \epsilon$
   3. 函数极限: $\lim\limits_{n \to \infty} = A \iff \forall_\epsilon > 0 \exists \delta >0 , 当0 < |x-x_0|< \delta时, 有|f(x)-A| < \epsilon$
   - **注:**
      - 左极限 $\lim\limits_{x \to x_0^-} = A, 记为左极限f(x_0-0)=A$
      - 右极限 $\lim\limits_{x \to x_0^-} = A, 记为左极限f(x_0-0)=A$
      - 常见需区分左右极限的函数有:
      1. 指数函数: 
         $$ \lim\limits_{x \to \infty}e^x = +\infty, 
         \lim\limits_{x \to -\infty}e^x = 0, 
         \lim\limits_{x \to a^+}e^{\frac{1}{x-a}} = +\infty, 
         \lim\limits_{x \to a^-}e^{\frac{1}{x-a}} = 0$$
      2. 反正切函数:
         $$ \lim\limits_{x \to +\infty}\arctan x = \frac{\pi}{2},\lim\limits_{x \to -\infty}\arctan x = \frac{\pi}{2}$$  
         $$ \lim\limits_{x \to a^+}\arctan \frac{1}{x-a} = \frac{\pi}{2}, \lim\limits_{x \to a^-}\arctan \frac{1}{x-a} = -\frac{\pi}{2} $$      
      3. 绝对值函数: $\lim\limits_{x \to 0} \frac{|x|}{x}\left\{
         \begin{aligned}
        \lim\limits_{x \to 0^+} \frac{|x|}{x}=\lim\limits_{x \to 0^+} \frac{x}{x}=1, \\
         \lim\limits_{x \to 0^-} \frac{|x|}{x}=\lim\limits_{x \to 0^-} \frac{-x}{x}=-1
         \end{aligned}
         \right.$
      4. 取整函数: $\lim\limits_{x \to 0} [x] \left\{
         \begin{aligned}
         \lim\limits_{x \to 0^+} [x]=0, \\
         \lim\limits_{x \to 0^+} [x]=-1
         \end{aligned}
         \right.$
      5. 分段函数, 如$f(x)= \left\{
         \begin{aligned}
         f_1(x), x<a, \\
         f_2(x), x>a
         \end{aligned}
         \right.$  $f_1(x)\ne f_2(x)$
2. 函数极限性质
   1. 唯一性
   2. 局部有界性
   3. 局部保号性
3. 数列与子列的敛散性
   1. 若数列${x_n}$收敛于a(即$\lim\limits_{n \to \infty}x_n=a$), 则他的任一子列也收敛于a
   2. 
### 无穷小无穷大
1. 无穷小的运算
   1. 有限个无穷小的和差积仍是无穷小
   2. 有界变量与无穷小的乘积是无穷小
   3. 当 $x \to 0$, 有$o(x^m), o(x^n)分别为 x^m, x^n的高阶无穷小,且0<m<n$
      1. $o(x^m)\pm o(x^m) = o(x^m), o(x^m) \pm o(x^n) = o(x^m)$
      2. $x^m \cdot o(x^n) = o(x^{m+n}), 0(x^m) \cdot o(x^n) = o(x^m) $
2. 无穷小比阶
   1. 设两个函数$\alpha (x) 与 \beta (x)$满足$\lim\limits_{x \to \square} \alpha(x)= \lim\limits_{x \to \square} \beta(x)=0, 且\alpha(x) \neq 0$
      1. $\lim\limits_{x \to \square} \frac{\beta(x)}{\alpha(x)}=0, 称\beta(x)是比\alpha(x)高阶的无穷小, 记为\beta(x)=o(\alpha(x))$
      2. $\lim\limits_{x \to \square} \frac{\beta(x)}{\alpha(x)}=c(c\neq 0), 称\beta(x)和\alpha(x)是同阶无穷小$
         - **特别的:** , 若$\lim\limits_{x \to \square} \frac{\beta(x)}{\alpha(x)}=1, 称\beta(x)和\alpha(x)是等价无穷小$
      3. $\lim\limits_{x \to \square} \frac{\beta(x)}{\alpha(x)}=\infty, 称\beta(x)和\alpha(x)是低价无穷小$   
      4. $\lim\limits_{x \to \square} \frac{\beta(x)}{[\alpha(x)]^k}=c(c\neq 0, k>0), 称\beta(x)是关于\alpha(x)是低价无穷小$
3. 无穷小与无穷大
   1. 若$\lim\limits_{x \to \square}f(x)=\infty, 则\lim\limits_{x \to \square}\frac{1}{f(x)}=0$, 即无穷大的倒数为无穷小
   2. 若$\lim\limits_{x \to \square}f(x)=0, 且f(x)\ne 0, 则\lim\limits_{x \to \square}\frac{1}{f(x)}=\infty$, 即非零无穷小的倒数为无穷大
 --- 

### 极限运算
1. 四则运算
   1. 若$\lim\limits_{x \to \square}f(x)=A, \lim\limits_{x \to \square}g(x)=B(A,B \in \mathbb{R})$, 则:
      1. $\lim\limits_{x \to \square}[f(x)\pm g(x)]=f(x)\pm g(x)=A\pm B$
      2. $\lim\limits_{x \to \square}[f(x) \cdot g(x)]=\lim\limits_{x \to \square}f(x) \cdot \lim\limits_{x \to \square}g(x)=A\cdot B$
      3. $\lim\limits_{x \to \square}\frac{f(x)}{g(x)}=\frac{\lim\limits_{x \to \square}f(x)}{\lim\limits_{x \to \square}g(x)}=\frac{A}{B}$
2. "抓大头"思想
   1. $x \to 0$时, $x^{低}+x^{高} \sim x^{低}$
   2. 当x充分大时, $x^{低}+x^{高} \sim x^{高}$
   3. 当x充分大时, $(\ln x)^\beta < x^\alpha <e^{\gamma\alpha}$    
$$\lim\limits_{x \to \infty}\frac{a_m+x^m+a_{m-1}x^{m-1}+\cdots+a_1x+a_0}{b_nx^n+b_{n-1}x^{n-1}+\cdots+b_1x+b_0}= \left\{ \begin{array}{l} \infty, m>n \\ \frac{a_m}{a_n}, m=n, 其中a_mb_n \ne \\ a_3x + b_3y + c_3z = d_3\end{array}\right.$$
3. 常用等价无穷小替换
   - 当$x \to 0$时:
     - 等价于x的情况($\sim x$)：
       - $\sin x \sim \arcsin x \sim \tan x \sim \arctan x \sim e^x-1 \sim \ln(1+x) \sim  x$
     - 等价于$\alpha x$的情况($\sim \alpha x$):
       - $(1+x)^\alpha \sim \alpha x$
     - 等价于$\frac{1}{2}x^2$的情况($\sim \frac{1}{2}x^2$):
       - $1-\cos x \sim x-\ln(1+x) \sim \sec x-1 \sim e^x-1-x \sim \frac{1}{2}x^2$
     - 等价于$\frac{1}{6}x^3$的情况($\sim \frac{1}{6}x^3$):
       - $x-\sin x \sim \arcsin x -x \sim \frac{1}{6}x^3$
     - 等价于$\frac{1}{3}x^3$的情况($\sim \frac{1}{3}x^3$):
       - $\tan x - x \sim x-\arctan x \sim \frac{1}{3}x^3$
     - 等价于$\frac{1}{2}x^3$的情况($\sim \frac{1}{4}x^3$):
       - $\tan x - \sin x \sim \frac{1}{2}x^3$
4. 洛必达法则
   - 设：
      1. 当$x \to a$时, 函数$f(x)及g(x)$都趋于0
      2. 在点$a$的某去领域内, $f'(x), g'(x)$都存在, 且$g'(x) \ne 0$
      3. $\lim \limits_{x \to a}\frac{f'(x)}{g'(x)}$存在(或无穷大),则：
         1. $\lim \limits_{x \to a}\frac{f(x)}{g(x)} = \lim \limits_{x \to a}\frac{f'(x)}{g'(x)}$
   - 注：
     1. 当$x \to \infty$时, 相应条件下洛必达法仍成立
     2. $\frac{\infty}{\infty}$型:
        1. $\lim\limits_{x \to a} f(x) = \infty, \lim\limits_{x \to a} g(x) = \infty $
        2. 在点a的某去心领域内$f(x), g(x)$都可导
        3. $\lim \limits_{x \to a}\frac{f(x)}{g(x)}$ 存在(或无穷大), 则:
           1. $\lim \limits_{x \to a}\frac{f(x)}{g(x)} = \lim \limits_{x \to a}\frac{f'(x)}{g'(x)}$
        4. **注**: 数列不能使用洛必达法则(因为离散变量无法求导)
        5. $\frac{*}{\infty}$型"广义" 仍可以使用洛必达法则
5. 两个重要极限:
   1. $\lim\limits_{x \to 0} \frac{\sin x}{x}=1$
   2. $\lim\limits_{n \to \infty} (1+\frac{1}{n})^n = e$
   3. $\lim\limits_{x \to \infty} (1+\frac{1}{x})^\frac{1}{x} = e$
6. 常用泰勒公式(麦克劳林公式):
   - 当$x \to 0$时:
      - $e^x = 1 + x + \frac{x^2}{2!} + \cdots +\frac{x^n}{n!} + o(x^n)$
      - $\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots + (-1)^n \frac{x^{2n+1}}{(2n+1)!} + o(x^{2n+1})$
      - $\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots + (-1)^n \frac{x^{2n}}{(2n)!}+o(x^{2n})$
      - $\tan x = x + \frac{x^3}{3} + \frac{2x^5}{15} + \cdots + (-1)^{n-1} \frac{2^{2n}(2^{2n}-1)B_{2n}x^{2n-1}}{(2n)!} + o(x^{2n-1}), B_n$为第n个伯努利数
      - $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots + (-1)^{n-1} \frac{x^{n}}{n} + o(x^{n})$
      - $\arctan x = x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots + (-1)^{n} \frac{x^{2n+1}}{(2n+1)} + o(x^{2n+1})$
      - $\arcsin x = x + \frac{x^3}{6} + \frac{3x^5}{40} + \frac{5x^7}{112} + \frac{35x^9}{1152} + o(x^9) $
      - $\frac{1}{1-x} = 1 + x + x^2 + \cdots + x^n + o(x^n)$
      - $\frac{1}{1+x} = 1-x+x^2-\cdots +(-1)^nx^n + o(x^n)$
      - $(1+x)^\alpha=1+nx+\frac{\alpha(\alpha-1)}{2!}x^2+\cdots +\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}+o(x^n)$
7. 两个**重要准则**
   1. 夹逼定理
      1. 若**数列**${x_n},{y_n},{z_n}$满足条件:
         1. $\exists N \in \mathbb{{N_+}}时, 有x_n \leq y_n \leq z_n$
         2. $\lim\limits_{n \to \infty}x_n=\lim\limits_{n \to \infty}z_n=a$,则数列${y_n}的极限,\exist\lim\limits_{n \to \infty}y_n=a$
      2. 若**函数**$f(x),g(x),h(x)$满足条件:
         1. $\exists \delta >0, 当 0<|x-x_0|<\delta, 有g(x) \leq f(x) \leq h(x)$
         2. $\lim\limits_{x to x_0}g(x)= \lim\limits_{x to x_0}h(x)=A$, 则函数f(x)的极限存在, 且$\lim\limits_{x to x_0}f(x)=A(x \to \infty 时也类似)$
   2. 单调有界准则
   函数(或数列单调递增有上界, 或者单调递减有下界,  则极限必存在)
----
   
### 连续与间断


## 导数与微分

### 导数的定义几何意义

### 函数的求导法则和常见函数的导数

### 微分

## 微分中值定理与导数的应用

### 微分中值定理

### 导数的几何应用

## 不定积分

### 原函数与不定积分


### 不定积分的性质与不缠功的不定积分公式


### 不定积分的计算


## 定积分

### 定积分的概念和性质


### 微积分基本共识


### 定积分计算


### 反常积分


## 定积分应用

### 平面图形的面积


### 旋转体的体积


### 平面曲线的弧长


### 旋转曲面的表面积


### 曲线质量


### 曲线质心

## 微分方程
### 一阶微分方程

### 可降阶的微分方程及其解法


### 高阶线性微分方程的结构


### 常系数线性微分方程


### 欧拉方程


### 全微分方程


## 向量代数与空间解析几何
### 向量代数


### 平面与直线方程


### 空间曲面


### 空间曲线


## 多元函数微分学
### 多元函数的基本概念


### (偏)导数的计算


### 极值

### 多元函数微分学的几何应用

### 方向导数与梯度

## 二重积分
### 二重积分的概念和性质


### 二重积分的计算


### 二重积分的应用

## 无穷级数
### 常数项级数的概念与性质


### 正项级数

### 绝对收敛和条件收敛

### 交错级数

### 幂级数

### 泰勒级数

### 傅里叶级数

## 三重积分与曲线曲面积分
### 三重积分

### 三重积分的应用

### 第一类曲线积分

### 第二类曲线积分

### 第一类曲面积分

### 第二类曲面积分

### 曲线曲面积分的几何应用(曲线的弧长,曲面的面积与柱面的表面积)


