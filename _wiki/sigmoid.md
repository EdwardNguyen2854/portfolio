---
title: Sigmoid Activation Function
category: Deep Learning
description: Understanding the Sigmoid activation function and its properties.
---

## Activation Function — Sigmoid (EN)

**Sigmoid** is an activation function that maps any real value to a range **$(0, 1)$**, often interpreted as a probability.

**Formula**
$$
\sigma(x) = \frac{1}{1 + e^{-x}}
$$

**Derivative (useful for backprop)**
$$
\sigma'(x) = \sigma(x) \bigl(1 - \sigma(x)\bigr)
$$

**Pros**
* Smooth, differentiable
* Output in $(0, 1)$ → useful for **binary classification output layer** (with BCE loss)

**Cons**
* **Vanishing gradients** for large $|x|$ (outputs near 0 or 1)
* Not zero-centered → can slow learning
* Often avoided in hidden layers (ReLU-family is more common)

**Common use**
* Final layer for **binary classification** (1 neuron + sigmoid)

---

## Hàm kích hoạt — Sigmoid (VN)

**Sigmoid** là hàm kích hoạt đưa mọi giá trị thực về khoảng **$(0, 1)$**, hay được hiểu như xác suất.

**Công thức**
$$
\sigma(x) = \frac{1}{1 + e^{-x}}
$$

**Đạo hàm (dùng trong lan truyền ngược)**
$$
\sigma'(x) = \sigma(x) \bigl(1 - \sigma(x)\bigr)
$$

**Ưu điểm**
* Trơn, khả vi
* Đầu ra $(0, 1)$ → phù hợp cho **tầng output bài toán nhị phân** (kèm BCE)

**Nhược điểm**
* **Mất gradient** khi $|x|$ lớn (bão hòa gần 0 hoặc 1)
* Không “zero-centered” → có thể học chậm
* Ít dùng ở hidden layer (thường dùng ReLU và biến thể)

**Dùng phổ biến**
* Tầng cuối cho **phân loại nhị phân** (1 neuron + sigmoid)
