# 矩阵

## 行列式
1. 逆序数(大数在前,小数在后,就构成一个逆序)
2. 奇偶排列(逆序为偶数,则称偶排列,反之称为奇排列)
### 1. 行列式的概念
1. 一阶行列式:
$$ |a_{11}|=a_{11} $$
2. 二阶行列式:
$$ \begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix}=a_{11}a_{22}-a_{12}a_{21} $$
3. 三阶行列式:
$$ \begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix}=a_{11}(a_{22}a_{33}-a_{23}a_{32})-a_{12}(a_{21}a_{33}-a_{23}a_{31})+a_{13}(a_{21}a_{32}-a_{22}a_{31}) $$
4. n-阶行列式:
$$ D_n =\begin{vmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn} \end{vmatrix} = \sum(-1)^ta_{1_{\rho_{1}}}a_{2_{\rho_{2}}}...a_{n_{\rho_{n}}} $$
- 注:
--- 

### 2. 行列式性质
1. 行列式与其转置行列式相等: $D_n=D_n^T$
2. 交换行列式的两行(列), 行列式的值变号
3. 如果行列式有两行(列)的值完全相同, 则行列式的值=0
4. 两行(列)元素成比例, 则行列式的值=0
5. 某行(列)元素全为0, 行列式的值=0
6. 把行列式的一行(列)的k倍加至另一行(列),行列式值不变
7. 行列式某行(列)有公因子k,可提到行列式外:
$$ \begin{vmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ \vdots & \vdots &   & \vdots \\ ka_{i1} & ka_{i2} & \cdots & ka_{in} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn} \end{vmatrix} =k\begin{vmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ \vdots & \vdots &   & \vdots \\ a_{i1} & a_{i2} & \cdots & a_{in} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn} \end{vmatrix} $$
8. 将行列式某一行(列)*k倍, 行列式变为原来的k倍
9. 如果行列式某一行(列)的元素都是两束之和,则行列式等于两个行列式之和. 例:
$$ \begin{vmatrix} a_{11}+a'_{11} & a_{12} & a_{13} \\ a_{21}+a'_{21} & a_{22} & a_{23} \\ a_{31}+a'_{31} & a_{32} & a_{33} \end{vmatrix}= \begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix}+\begin{vmatrix} a'_{11} & a_{12} & a_{13} \\ a'_{21} & a_{22} & a_{23} \\ a'_{31} & a_{32} & a_{33} \end{vmatrix}$$
--- 

### 3. 行列式展开定理
1. 余子式
   1. 在n阶行列式, 划去元素$a_{ij}$, i行和j列去掉后的行列式被记为$M_{ij}$
2. 代数余子式
   1. 记$A_{ij}=(-1)^{i+j}M_{ij}$, 为$a_{ij}$的代数余子式
3. 行列式按行(列)展开定理
   1. 行列式某一行元素与其对应的代数余子式乘积之和
   $$ D=a_{i1}A_{i1}+a_{i2}A_{i2}+...+a_{in}A_{in}$$
   $$ D=a_{1j}A_{1j}+a_{2j}A_{2j}+...+a_{nj}A_{nj}$$
4. 展开定理的推论
   1. 行列式的某一行(列)元素与其与另一行(列)的对应元素的代数余子式的乘积之和等于0,即
   $$ a_{i1}A_{i1}+a_{i2}A_{i2}+...+a_{in}A_{in} = 0$$
   $$ a_{1j}A_{1j}+a_{2j}A_{2j}+...+a_{nj}A_{nj} = 0$$
--- 

### 4. 几种特殊的行列式
1. 主对角行列式与上三角形, 下三角形行列式
   $$ \begin{vmatrix} a_{11} & 0 & \cdots & 0 \\ 0 & a_{22} & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & a_{nn} \end{vmatrix} = \begin{vmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ 0 & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & a_{nn} \end{vmatrix} = \begin{vmatrix} a_{11} & 0 & \cdots & 0 \\ a_{21} & a_{22} & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn} \end{vmatrix}= a_{11}a_{22}...a_{nn}$$

2. 副对角线行列式
   $$  \begin{vmatrix}0 &  &  & \lambda_1 \\  &  & \lambda_2 &  \\  & {\cdot^{\cdot^{\cdot}}} &  &  \\ \lambda_n &  &  & 0 \end{vmatrix}= \begin{vmatrix}0 &  &  & \lambda_1 \\  &  & \lambda_2 & * \\  & {\cdot^{\cdot^{\cdot}}} & \vdots & \vdots \\ \lambda_n & \cdots & * & * \end{vmatrix}=\begin{vmatrix}* & \cdots & * & \lambda_1 \\ * & \cdots & \lambda_2 &  \\ \vdots & {\cdot^{\cdot^{\cdot}}} &  &  \\ \lambda_n &  &  & 0 \end{vmatrix}= (-1)^{\frac{n-(n-1)}{2}}\lambda_1\lambda_2\cdots\lambda_n$$

3. 范德蒙德行列式
    $$ D_n = \begin{vmatrix} 1 & 1 & 1 &\cdots & 1 \\ x_1 & x_2 & x_3  & \cdots & x_n \\ x_1^2 & x_2^2 & x_3^2 &\cdots & x_n^2 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ x_1^{n-1} & x_2^{n-1} & x_3^{n-1} &\cdots & x_n^{n-1} \end{vmatrix} = \prod_{1<j<i<n}(x_i-x_j)$$
--- 

### 5. 行列式的相关公式
1. 方阵行列式
   1. 设A,B为n阶矩阵
      1. $|AB|=|BA|=|A||B|$
      2. $|kA|=k^n|A|\neq k|A|$
      3. $|A^T|=|A|$
      4. $|A^k|=|A|^{-k}$
      5. $|A^{-1}|=|A|^{-1}=\frac{1}{|A|}, (|A| \neq 0)$
      6. $|A^*|=|A|^{n-1}$
      7. $|A+B| \neq |A|+|B|$
      8. 若$\lambda_i(i=1,2,...,n)$为A的特征值, 则$|A|=\lambda_1\lambda_2\dots\lambda_n$
      9. 若矩阵A和B相似,即$ A \sim B$, 则$|A|=|B|$
      10. 若矩阵不可逆,则$|A|=0$
2.  拉普拉斯公式
    1. 若矩阵A是m阶矩阵, B是n阶矩阵,则:
    $$  \begin{vmatrix} A & O \\ O & B \end{vmatrix}=\begin{vmatrix} A & C \\ O & B \end{vmatrix}=\begin{vmatrix} A & C \\ O & B \end{vmatrix}=|A||B|, $$ 
    $$  \begin{vmatrix} O & A \\ B & O \end{vmatrix}=\begin{vmatrix} C & A \\ B & O \end{vmatrix}=\begin{vmatrix} O & A \\ B & C \end{vmatrix}=(-1)^{mn}|A||B|. $$ 
--- 


## 矩阵
### 1.矩阵定义及特殊矩阵
1. 定义
   - 有$m \times n$个数$a_{ij}(i=1,2,\cdots,m,j=1,2,\cdots,n),排成的m行n列的数表:
   $$ \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n}\\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots\\ a_{m1} & a_{m2} & \cdots & a_{mn}  \end{pmatrix} $$

   - 称为$m \times n$阶矩阵, 记作$A_{m \times n}, (a_{ij})_{m \times n} 或 (a_{ij})$, $ a_{ij}$为矩阵A的(i,j)元
2. 同型矩阵
    1. 若AB的行数与列数相等----> 称为同型矩阵
3. 相等矩阵
    1. 若同型矩阵AB里的元素相等,----> 称为A与B相等,记A=B
4. 零矩阵
    1. 所有元素=0, 记为$O$
5. 方阵
    1. 形如: $ \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n}\\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots\\ a_{n1} & a_{n2} & \cdots & a_{nn}  \end{pmatrix} $----> 称为n阶矩阵/n阶方阵,记作$A$或$A_{n}$
6. 单位矩阵
$$ E=\begin{pmatrix} 1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1 \end{pmatrix}$$
7. 数量矩阵
$$ \begin{pmatrix} k & 0 & \cdots & 0 \\ 0 & k & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & k \end{pmatrix}$$
8. 对角矩阵
$$ A=\begin{pmatrix} \lambda_1 & 0 & \cdots & 0 \\ 0 & \lambda_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \lambda_n \end{pmatrix}$$
9. 对称矩阵,反对称矩阵
- 设 $ A=\begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n}\\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots\\ a_{n1} & a_{n2} & \cdots & a_{nn}  \end{pmatrix} $ 是n阶矩阵,如果$a_{ij}=a_{ji}$, 则成为**对称矩阵**, 如果$$a_{ij}=-a_{ji}$, 则称A为**反对称矩阵**
10. 正交矩阵
满足$A^TA=AA^T=E(即A^{-1}=A^T)$的矩阵为正交矩阵
### 2. 矩阵的运算
1. 矩阵的加法
   1. 设:$A=(a_{ij})_{m \times n}, B=(b_{ij})_{m \times n}$,则:
   $$ A+B=(a_{ij}+b_{ij})_{m \times n} = A= \begin{pmatrix} a_{11}+b_{11} & \cdots & a_{1n}+b_{1n}\\  \vdots &   & \vdots\\ a_{n1}+b_{n1} &  \cdots & a_{nn}+b_{nn}  \end{pmatrix} $$
   2. 和正常加法一样,满足大部分运算规律(交换律,结合律等等)
2. 矩阵的数乘
   1. 设:$A=(a_{ij})_{m \times n}, \lambda \in \mathbb{R}$,则: \in \mathbb{R}$,则:
    $$ \lambda A=(a_{ij}\lambda)_{m \times n} = \begin{pmatrix} \lambda a_{11} & \cdots & \lambda a_{1n}\\  \vdots &   & \vdots\\ \lambda a_{n1} &  \cdots & \lambda a_{nn}  \end{pmatrix} $$
    2. 满足运算规律(比如和乘法交换律,结合律,分配律一样),还有$0A=O$
3. 矩阵的乘法
    1. $A=(a_{ij})_{m \times n}, B=(b_{ij})_{m \times n}$, 则:
    $$ C=AB=(c_{ij})_{m \times n}$$,
    - 其中, $c_{ij}=a_{i1}b_{1j}+a_{i2}b_{2j}+...+a_{in}b_{nj}$
    - 矩阵乘法页满足运算规律(交换律,结合律等等):
      - (AB)C=A(BC)
      - $\lambda (AB)=(\lambda A)B=A(\lambda B)$
      - $(A+B)+C=(AC)+(BC)$
      - $C(A+B)=(CA)+(CB)$
    - 注:
      - 一般$AB \neq BA$
      - $(A+B)^2 \neq A^2+2AB+B^2$
      - $AB = O, 无法推出 A=O, B=O$
      - 若n阶矩阵A,B满足$(A-\lambda_1 E)(B-\lambda_2 E)=\lambda_3 E,(\lambda_3 \neq 0)$, 则AB=BA
      - 若$m \times n$矩阵列满秩$(r(A))=n$, 则由$AB=O$可以推出$B=O$ 

4. 方阵的幂
   1. A为n阶矩阵,则$A^k=AAA\dots A(k个A相乘)$
   2. 满足以下运算规律:
      1. $A^kA^l=A^{k+l}$
      2. $(A^k)^l=A^{kl}$
      3. $(AB)^k \neq A^kB^k$(一般情况下)
   3. 例:(几种特殊矩阵求$A^n$)
        1. 记n维向量$\alpha=(a_1,a_2,\dots,a_n)^T, \beta=(b_1,b_2,\dots,b_n)^T$
            1. $\alpha \beta^T$为$n \times n$矩阵,记作$A:$
            $$A= \alpha \beta^T=\begin{pmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{pmatrix} \begin{pmatrix} b_1 & b_2 & \cdots & b_n \end{pmatrix}= \begin{pmatrix} a_1b_1 & a_1b_2 & \cdots & a_1b_n \\ a_2b_1 & a_2b_2 & \cdots & a_1b_n\\ \vdots & \vdots & \ddots & \vdots \\ a_nb_1 & a_nb_2 & \cdots & a_nb_n \end{pmatrix} $$
            2. $ \alpha ^T \beta = \beta^T \alpha$为一个数:($(1\times n)(n\times 1) $) (nn这连个位置的数字必须一样才可以)
            $$ \alpha^T \beta = \beta^T \alpha = (a_1,a_2,\dots,a_n)\begin{pmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{pmatrix} = a_1b_1+a_2b_2+\cdots+a_nb_n = \sum_{i=1}^n a_ib_i $$
            3. 矩阵$A=\alpha\beta^T$的迹(主对角元素之和)$tr(A)=\alpha^T \beta = \beta^T \alpha$
            4. 记$A=\alpha \beta^T, l = \alpha^T \beta, A^n=l^{n-1}A$
         2. A是m阶矩阵,B是n阶矩阵,则:
         $$ \begin{pmatrix} A & O \\ O & B \end{pmatrix}^n = \begin{pmatrix} A^n & O \\ O & B^n \end{pmatrix} $$
         3. n阶矩阵$A \sim \Lambda$, 则存在可逆矩阵P, 使得$A^n=P\Lambda^nP^{-1}$

5. 方阵的转置
- $(A^T)^T=A$
- $(A^T)^m=(A^m)^T$
- $(A+B)^T=A^T+B^T$
- $(\lambda A)^T=\lambda A^T$
- $(AB)^T=B^TA^T$
- $(A^{-1})^T=(A^T)^{-1}$
6. 方阵的多项式       
- 设x的多项式$f(x)=a_0x^m+a_1x^{m-1}+\dots+a_{m-1}x+a_mx^0$, 则方阵多项式为:
$$ f(A)=a_0A^m+a_1A^{m-1}+\dots+a_{m-1}A+a_mE$$
---

### 3. 伴随矩阵公式
- 设$A,B 均为n(n \geq 2)$阶可逆矩阵, 则:
  - $ AA^*=A^*A=|A|E $
  - $ A^{-1}=\frac 1{|A|}A^*, A^*=|A|A^{-1} ,(A^*)^{-1}=(A^{-1})^*=\frac 1{|A|}A$
  - $(A^*)^T=(A^T)^*, (A^*)^m=(A^m)^* $
  - $ (AB)^*=B^*A^*$
  - $(kA)^*=k^{n-1}A^*(k为非零常数)， (A^*)^*=|A|^{n-2}A(n \geq 2)$
  - $ |A^*|=|A|^{-1} $
  - $ \begin{pmatrix} A & O \\ O & B \end{pmatrix}^* = \begin{pmatrix} |B|A^* & O \\ O & |A|B^* \end{pmatrix} $
  - $ \begin{pmatrix} O& B \\ A  & O \end{pmatrix}^* = \begin{pmatrix} O & |B|A^* \\ |A|B^* & O \end{pmatrix} $
  - 注: 一般情况下:$(A+B)^* \neq A^*+B^*$
### 4. 逆矩阵
1. 定义:
   1. n阶矩阵A, 如存在一个n阶矩阵B, 使得$AB=BA=E$, 则称A为矩阵可逆, B为A的逆矩阵, 记作$A^{-1}=B$
2. 逆矩阵重要结论:
   1. $(A^{-1})^{-1}A=A,    (kA)^{-1}=\frac{1}{k}A^{-1}$
   2. $(A^T)^{-1}=(A^{-1})^T, (A^m)^{-1}=(A^{-1})^m$
   3. $(AB)^{-1}=B^{-1}A^{-1}$
   4. $|A^{-1}|=\frac{1}{|A|}$
   5. 若A可逆, 则$A=P_1,P_2,...P_i$,其中$P_i(i=1,2,...,l)$为初等矩阵
   6. $(A+B)^{-1} \neq (A^{-1}+B^{-1})$
3. n阶矩阵A可你的充要条件
   1. $|A| \neq 0 \Leftrightarrow r(A)=n \Leftrightarrow A$的行(列)向量线性无关
   2. $\Leftrightarrow Ax=0 $ 仅有0解
   3. $\Leftrightarrow Ax=b ,(b \neq 0) $ 有唯一解
   4. $\Leftrightarrow A $ 没有零特征值

### 5. 分块矩阵
1. 定义
   1. 用一些横线,竖线将矩阵A分成若干个小矩阵, 每个小矩阵称为A的子块, 以子块为元素的矩阵叫做分块矩阵
2. 加法
   $$ \begin{pmatrix} A_1 & A_2 \\ A_3 & A_4\end{pmatrix} + \begin{pmatrix} C_1 & C_2 \\ C_3 & C_4 \end{pmatrix} = \begin{pmatrix} A_1+C_1 & A_2+C_2 \\ A_3+C_3 & A_4+C_4 \end{pmatrix} $$
3. 数乘
   $$ k\begin{pmatrix} A_1 & A_2 \\ A_3 & A_4\end{pmatrix} =\begin{pmatrix} kA_1 & kA_2 \\ kA_3 & kA_4\end{pmatrix} $$
4. 乘法
   $$ \begin{pmatrix} A_1 & A_2 \\ A_3 & A_4\end{pmatrix} + \begin{pmatrix} C_1 & C_2 \\ C_3 & C_4 \end{pmatrix} = \begin{pmatrix} A_1C_1+A_2C_3 & A_1C_2+A_2C_4 \\ A_3C_1+A_4C_3 & A_3C_2+A_4C_4 \end{pmatrix} $$
5. 转置
   $$ \begin{pmatrix} A_1 & A_2 \\ A_3 & A_4\end{pmatrix}^T = \begin{pmatrix} A_1^T & A_3^T \\ A_2^T & A_4^T \end{pmatrix} $$
--- 
## 矩阵初等变换与矩阵的秩
### 1. 初等变换与初等矩阵
1. 初等变换
   1. 对换:  对换两行(列)
   2. 倍乘:  用数k乘以某一行(列)
   3. 倍加:  把某一行(列)的所有元素k倍加到另一行(列)上. 就和解二元一次方程一样
2. 初等矩阵
   - 由单位矩阵一次初等变换变到
     1. E 对换两行(列):$r_1 \leftrightarrow r_2(c_1 \leftrightarrow c_2)$得到初等矩阵$E_{ij}$
     2. E的某行(列)乘非零常数k:$k r_i \times k(c_i \times k)$得到初等矩阵$E_i(k)$
     3. E的某行(列)元素的k倍加到另外一行(列):$r_i+ kr_j(c_i + kc_i)$得到初等矩阵$E_{ij}(k)$
3. 初等矩阵的**重要结论**
   - $|E_{ij}|=-1,|E_i(k)|=k, |E_ij(k)|=1$
   - $E_i^n(k)=E_i(k^n), E_{ij}^n(k)=E_{ij}(nk),  E_{ij}^{2n}=E, E_{ij}^{2n+1}=E_{ij}$
   - $E_{ij}^{-1}=E_{ij}, E_i^{-1}(k)=E_i(1/k), E_{ij}^{-1}=E_{ij}(k)$
   - $(E_{ij})^*=-E_{ij}, [E_{i}(k)]^*=kE_i(\frac{1}{k}), [E_{ij}(k)]^*=E_{ij}(-k)$
### 2. 矩阵等价
A与B等价,记为$A \cong B$
### 3. 矩阵的秩
1. 矩阵A的k阶子式
   1. 在 $m \times n矩阵A中$, 任取k行和k列, 位于这行列交叉处的$k^2$个元素,不改变他们在矩阵A中所处的位置次序而得到k阶行列式, ----> A的k阶子式
2. 矩阵的秩
   1. 如果矩阵A中存在$r$阶子式, 而A的所有$r+1$阶子式全为0,那么叫做A的最高阶非零子式, 数r叫做A的秩, **记作**: $r(A)$
3. 矩阵秩的重要结论
   1. $r(A)=0$的充要条件是$A=0$
   2. $r(A)=1$的充要条件是$A \neq 0$, 且A的任意两行(列)成比例
   3. $0 \leq r(A_{m \times n}) \leq \min(m,n)$
   4. $r(A)=r(A^T)=r(A^TA)=r(AA^T)=r(kA), (k \neq 0)$
   5. $r(A \pm B) \leq r(A)+r(B)$
   6. $r(AB) \leq \min(r(A),r(B))$
   7. $\max(r(A),r(B)) \leq r(A,B) \leq r(A)+r(B)$
   8. $\max(r(A),r(B)) \leq r\begin{pmatrix}
    A \\ B
   \end{pmatrix} \leq r(A)+r(B)$
   9. $r \begin{pmatrix} A & O \\ O & B \end{pmatrix}=r(A)+r(B)$
   10. 若$(m \times n)$矩阵B列满秩, 即$r(B)=n$, 则$r(BA)=r(A)$, 若$n \times s$矩阵C行满秩, 即r(C)=s, 则$r(AC)=r(A)$
        - 特别的: 若A是$(m \times n)$矩阵,P和Q分别是m阶和n阶的可逆矩阵,则$r(A)=r(PA)=r(AQ)=r(PAQ)$ 
        - **口诀**: 左乘列满秩(右乘行满秩), 矩阵秩不变
    11. 若$A_{m \times n}B_{n \times s}=O$, 则$r(A)+r(B) \leq n$
    12. 若$A \cong B$. 则$r(A)=r(B)$, 则不改变矩阵的秩
    13. 设A的n阶矩阵,则$r(A^*)=\left\{\begin{array}{l} n, & r(A)=n \\ 1, & r(A)=n-1 \\ 0, & r(A) \leq n+1 \end{array} \right.$
    14. 设$\alpha = \begin{pmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{pmatrix}, \beta = \begin{pmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{pmatrix}$，为n为非0列向量,则$\alpha \beta ^T = \begin{pmatrix} a_1b_1 & a_1b_2 & \dots & a_1b_n \\ a_2b_1 & a_2b_2 & \dots & a_2b_n \\ \vdots & \vdots & \ddots & \vdots \\ a_nb_1 & a_nb_2 & \dots & a_nb_n \end{pmatrix}$, 可得$r(\alpha \beta ^T) =1$
--- 


## 向量
### 1. 向量的概念
1. 向量: n个数$a_1,a_2,...,a_n$组成的的有序数组
2. 向量组,若干个同为数的列向量(或行向量)所组成的集合
3. 线性组合: 设向量组$\alpha_m$和一组实数组$k_m$, 表达式:$k_1 \alpha_1 + ... + k_m \alpha_m$
4. 线性表示: 条件和3.一样,多给定一个向量$\beta$,则表达式为$\beta = k_1 \alpha_1 + ... + k_m \alpha_m$
5. 向量组等价: 俩向量,
   1. 向量组B的每个向量都能被向量组A的线性表示, 则称B能由A线性表示
   2. 若A和B**互相可以线性表示**, 被称为**俩向量组等价**
6. 极大线性无关组:
   - 若$a_{k1},a_{k2},...,a_{kn}$是向量组A:$a_1,a_2,...,a_n$的一个不分组,且满足:
        1. $a_{k1},a_{k2},...,a_{kn}$线性无关
        2. 向量A中的任一向量可由$a_{k1},a_{k2},...,a_{kn}$线性表示
   - 则称$a_{k1},a_{k2},...,a_{kn}$是向量组A的一个极大线性无关组
7. 向量组的秩
   1. *极大线性无关组*中所含**向量的个数**,称为向量组的秩
--- 

### 2. 向量组的相关无关性
1. 线性相关: 给定向量组\alpha_1 + ... +\alpha_m, 如果存在一组不全为0的数$k_1,k_2,...,k_m$使得
   $$k_1 \alpha_1 + ... + k_m \alpha_m = 0$$, 则称向量组\alpha_1 + ... +\alpha_m为线性相关
2. 
### 3. 线性表示的相关结论
### 4. 向量组
### 5. 向量组的秩
### 6. 向量空间
### 7. 内积与正交化

## 线性方程组
### 1. 方程组的表达方式
### 2. 方程组解的判定
### 3. 线性方程组的结构
### 4. 公共解与通解

## 特征值与特征向量
### 1. 特征值与特征向量的定义
### 2. 特征值与特征向量的性质
### 3. 矩阵的相似对角化

## 二次型
### 1. 二次型定义

