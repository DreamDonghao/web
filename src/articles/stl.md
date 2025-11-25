# STL

作者：Donghao ｜ 发布日期：2025-09-25

------

## 1. STL 简介

STL（Standard Template Library）是 C++ 标准库的重要组成部分，提供了一套通用的数据结构和算法模板。

核心组成：

- **容器（Container）**：存储数据
- **算法（Algorithm）**：操作数据
- **迭代器（Iterator）**：连接容器与算法

辅助组成：

- **函数对象（Functor）**
- **容器适配器（Container Adapter）**
- **分配器（Allocator）**

在算法竞赛或工程开发中，合理使用 STL 能显著提高效率与可靠性。

------

## 2. 相关概念

### 2.1 容器（Container）

容器负责元素的存储与管理，但不处理复杂运算。主要分类：

| 类别     | 示例                             | 特点                     |
| -------- | -------------------------------- | ------------------------ |
| 顺序容器 | `vector`, `deque`, `list`        | 按插入顺序存储           |
| 关联容器 | `set`, `map`                     | 基于平衡二叉树，自动排序 |
| 无序容器 | `unordered_set`, `unordered_map` | 基于哈希表，访问快速     |

> 设计思想：数据结构与算法解耦，实现泛型编程。

------

### 2.2 算法（Algorithm）

算法是针对迭代器区间 `[first, last)` 的函数模板，独立于容器类型。

常用分类：

- **非修改性**：`find`, `count`, `equal`
- **修改性**：`copy`, `remove`, `unique`
- **排序与排列**：`sort`, `stable_sort`, `binary_search`
- **数值计算**：`accumulate`, `inner_product`

> 特点：泛用性强，可组合性高，容器与算法完全解耦。

------

### 2.3 迭代器（Iterator）

迭代器是访问容器元素的抽象指针。分类：

| 类型           | 特性                   |
| -------------- | ---------------------- |
| 输入迭代器     | 只读，单向遍历         |
| 输出迭代器     | 只写，单向遍历         |
| 前向迭代器     | 读写，单向，可多次遍历 |
| 双向迭代器     | 支持正反向遍历         |
| 随机访问迭代器 | 支持下标访问，效率最高 |

> 注意：不同算法对迭代器有最低要求，例如 `sort` 需要随机访问迭代器。

------

### 2.4 函数对象（Functor）

函数对象是包含 `operator()` 的对象，可像函数一样调用。用途：

- 自定义算法比较规则：`sort(v.begin(), v.end(), cmp)`
- 容器排序规则：`std::set<T, Compare>`
- 数学运算：`std::plus<T>`, `std::greater<T>`

> 优势：可内联优化、携带状态、减少模板开销。

------

### 2.5 容器适配器（Container Adapter）

通过包装已有容器接口，实现特定行为：

| 适配器         | 默认底层容器 | 功能             |
| -------------- | ------------ | ---------------- |
| stack          | deque        | 后进先出（LIFO） |
| queue          | deque        | 先进先出（FIFO） |
| priority_queue | vector + 堆  | 优先级队列       |

> 适配器只改变接口，不改变底层容器。

------

### 2.6 分配器（Allocator）

分配器负责容器的内存分配与释放，默认为 `std::allocator<T>`：

- 分配/释放原始内存
- 构造/析构对象
- 控制内存对齐

自定义分配器可用于：

- 内存池优化
- 特殊硬件对齐
- 共享内存管理

> 设计原则：可替换，容器对内存管理完全抽象化。

------

## 3. 常用容器与适配器（竞赛实用）

- **顺序容器**：`string`, `vector`, `deque`
- **适配器**：`stack`, `queue`, `priority_queue`

> 容器适配器的使用方式与普通容器基本一致。
>
> ------
>
> 
>
> #### 1. 顺序容器
>
> ### 1.1 `string`（字符串）
>
> **用途**：存储字符序列，像数组一样访问和修改字符。
>
> **构造方法**：
>
> ```cpp
> string s;               // 空字符串
> string s2("hello");     // 用文字初始化
> string s3(5, 'x');      // 创建 "xxxxx"
> string s4(s2);          // 拷贝已有字符串
> ```
>
> **访问与读取**：
>
> - `s[i]`：下标访问第 i 个字符（从 0 开始）
> - `s.at(i)`：安全访问，越界会抛异常
> - `front()`：第一个字符
> - `back()`：最后一个字符
>
> **修改方法**：
>
> - `push_back(c)`：在末尾加字符
> - `pop_back()`：删除末尾字符
> - `append(str)`：在末尾追加字符串
> - `insert(pos, str)`：在指定位置插入
> - `erase(pos, len)`：删除指定长度
> - `replace(pos, len, str)`：替换子串
>
> **信息获取**：
>
> - `size()`, `length()`：长度
> - `empty()`：是否为空
> - `capacity()`：当前容量
>
> **查找与切片**：
>
> - `find(str)`：查找子串
> - `rfind(str)`：从后查找
> - `substr(pos, len)`：截取子串
>
> **示例**：
>
> ```cpp
> string s = "abc";
> s.push_back('d');      // s = "abcd"
> s.insert(1, "xx");     // s = "axxbcd"
> cout << s.substr(1,3); // 输出 "xxb"
> ```
>
> ------
>
> ### 1.2 `vector`（动态数组）
>
> **用途**：存储一组同类型元素，可动态扩展，像数组一样访问。
>
> **构造方法**：
>
> ```cpp
> vector<int> v;             // 空向量
> vector<int> v2(5);         // 5 个元素，默认值 0
> vector<int> v3(5, 10);     // 5 个元素，每个值为 10
> vector<int> v4(v3);        // 拷贝
> ```
>
> **访问与读取**：
>
> - `v[i]`：下标访问
> - `v.at(i)`：安全访问
> - `front()`：第一个元素
> - `back()`：最后一个元素
>
> **修改方法**：
>
> - `push_back(val)`：末尾添加
> - `pop_back()`：删除末尾
> - `insert(it, val)`：迭代器位置插入
> - `erase(it)`：删除指定位置
> - `clear()`：清空向量
> - `resize(n)`：改变大小
> - `swap(v2)`：交换两个向量内容
>
> **信息获取**：
>
> - `size()`：元素个数
> - `empty()`：是否为空
> - `capacity()`：当前容量
> - `reserve(n)`：预留容量
>
> **迭代器**：
>
> - `begin()`, `end()`：正向遍历
> - `rbegin()`, `rend()`：反向遍历
>
> **示例**：
>
> ```cpp
> vector<int> v = {1,2,3};
> v.push_back(4);             // v = {1,2,3,4}
> sort(v.begin(), v.end());   // 排序
> for(auto x : v) cout << x;  // 输出 1234
> ```
>
> ------
>
> ### 1.3 `deque`（双端队列）
>
> **用途**：可从头尾快速插入和删除，比 `vector` 灵活。
>
> **构造方法**：
>
> ```cpp
> deque<int> d;
> deque<int> d2(5);        // 5 个默认元素
> deque<int> d3(5, 10);    // 5 个元素，值为 10
> deque<int> d4(d3);       // 拷贝
> ```
>
> **访问与读取**：
>
> - `d[i]`, `at(i)`, `front()`, `back()`
>
> **修改方法**：
>
> - `push_back(val)`, `push_front(val)`
> - `pop_back()`, `pop_front()`
> - `insert(it, val)`
> - `erase(it)`
> - `clear()`
>
> **迭代器**：
>
> - `begin()`, `end()`, `rbegin()`, `rend()`
>
> ------
>
> #### 2. 容器适配器
>
> ### 2.1 `stack`（栈，后进先出）
>
> **用途**：只能操作栈顶元素，典型的“先进后出”结构。
>
> **构造方法**：
>
> ```cpp
> stack<int> s;                 // 默认底层 deque
> stack<int, vector<int>> s2;   // 可指定底层容器
> ```
>
> **方法**：
>
> - `push(val)`：入栈
> - `pop()`：出栈
> - `top()`：查看栈顶
> - `empty()`：是否为空
> - `size()`：元素个数
> - `swap(s2)`：交换栈
>
> ------
>
> ### 2.2 `queue`（队列，先进先出）
>
> **用途**：只能操作队头和队尾，典型的“先进先出”结构。
>
> **构造方法**：
>
> ```cpp
> queue<int> q;
> queue<int, deque<int>> q2;
> ```
>
> **方法**：
>
> - `push(val)`：入队尾
> - `pop()`：出队头
> - `front()`：队头元素
> - `back()`：队尾元素
> - `empty()`, `size()`, `swap(q2)`
>
> ------
>
> ### 2.3 `priority_queue`（优先级队列）
>
> **用途**：总是可以快速访问最大或最小元素（默认最大堆）。
>
> **构造方法**：
>
> ```cpp
> priority_queue<int> pq;                       // 大顶堆
> priority_queue<int, vector<int>, greater<int>> pq_min; // 小顶堆
> ```
>
> **方法**：
>
> - `push(val)`：加入元素
> - `emplace(args...)`：原地构造元素
> - `pop()`：删除堆顶
> - `top()`：查看堆顶
> - `empty()`, `size()`, `swap(pq2)`
>
> **示例**：
>
> ```cpp
> priority_queue<int> pq;
> pq.push(3); pq.push(5); pq.push(1);
> cout << pq.top(); // 输出 5
> pq.pop();
> cout << pq.top(); // 输出 3
> ```
>
> 

------

© 2025 Donghao 的博客 ｜ [返回首页](https://dreamdonghao.github.io/web/#)
