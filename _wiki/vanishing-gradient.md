---
title: Vanishing Gradient
category: Machine Learning
tags: [neural networks, deep learning, optimization, backpropagation]
description: A common training problem in deep neural networks where gradients become very small, slowing or stopping learning.
---


## Vanishing Gradient (EN)

The **vanishing gradient** problem happens when training deep neural networks and the gradients become **extremely small** as they are backpropagated to earlier layers.
As a result, those layers learn very slowly or stop learning at all.



### Core Idea

During backpropagation, gradients are multiplied many times.
If these values are smaller than 1, they shrink rapidly:

$$
\frac{\partial L}{\partial w_1}
= \frac{\partial L}{\partial w_n}
\prod_{i=1}^{n-1} \frac{\partial a_{i+1}}{\partial a_i}
$$

When the product → 0, learning **vanishes**.



### Why It Happens

* Deep networks with many layers
* Activation functions like **sigmoid** or **tanh**
* Poor weight initialization



### Effects

* Early layers barely update
* Training becomes very slow
* Model underfits the data



### Common Solutions

* Use **ReLU** or its variants (Leaky ReLU, GELU)
* Apply **Batch Normalization**
* Use **residual connections** (skip connections)
* Careful **weight initialization** (e.g., He, Xavier)



### Quick Facts

* **Occurs in**: Deep neural networks
* **Main cause**: Repeated gradient shrinking
* **Opposite problem**: Exploding gradient
* **Most affected**: Early layers



<figure>
  <img src="{{ '/assets/images/wiki/vanishing-gradient/fig-1.png' | relative_url }}" alt="Vanishing gradient illustration">
  <figcaption>Gradients shrinking as they move backward through layers. Source: <a href="https://medium.com/@rekalantar/vanishing-gradient-problem-in-deep-neural-networks-43871d2ef2e9" target="_blank">Vanishing Gradient Problem in Deep Neural Networks</a></figcaption>
</figure>



## Vanishing Gradient (VN)

**Vanishing Gradient (gradient biến mất)** là hiện tượng xảy ra khi huấn luyện mạng nơ-ron sâu, trong đó gradient trở nên **rất nhỏ** khi lan truyền ngược về các lớp đầu.
Điều này khiến các lớp đó học **rất chậm** hoặc **không học được**.



### Ý Tưởng Cốt Lõi

Trong quá trình lan truyền ngược, gradient bị nhân lặp lại nhiều lần.
Nếu các giá trị này nhỏ hơn 1, chúng sẽ giảm nhanh:

$$
\frac{\partial L}{\partial w_1}
= \frac{\partial L}{\partial w_n}
\prod_{i=1}^{n-1} \frac{\partial a_{i+1}}{\partial a_i}
$$

Khi tích → 0, việc học **biến mất**.



### Nguyên Nhân

* Mạng quá nhiều lớp
* Hàm kích hoạt như **sigmoid** hoặc **tanh**
* Khởi tạo trọng số không phù hợp



### Hậu Quả

* Các lớp đầu không được cập nhật
* Huấn luyện rất chậm
* Mô hình bị underfitting



### Cách Khắc Phục

* Dùng **ReLU** và các biến thể
* Áp dụng **Batch Normalization**
* Sử dụng **residual / skip connections**
* Khởi tạo trọng số đúng cách (He, Xavier)



### Thông Tin Nhanh

* **Xảy ra trong**: Mạng nơ-ron sâu
* **Nguyên nhân chính**: Gradient nhỏ dần
* **Vấn đề ngược lại**: Exploding Gradient
* **Ảnh hưởng nhiều nhất**: Các lớp đầu
