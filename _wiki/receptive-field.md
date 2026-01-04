---
title: Receptive Field
category: Deep Learning
description: Understanding the Receptive Field in Convolutional Neural Networks (CNNs).
---

## Receptive Field (CNN) — EN

**Receptive field** is the region in the **original input** (e.g., pixels in an image) that can influence **one neuron / one cell** in a feature map at a given layer.

<figure>
  <img src="{{ '/assets/images/wiki/receptive-field/fig-1.png' | relative_url }}" alt="Receptive Field Visualization">
  <figcaption>
    Receptive Field Visualization. Source: <a href="https://medium.com/@rekalantar/receptive-fields-in-deep-convolutional-networks-43871d2ef2e9" target="_blank">Receptive Fields in Deep Convolutional Networks</a>
  </figcaption>
</figure>

* **Early layers:** small receptive field → detects edges, corners, textures
* **Deeper layers:** larger receptive field → captures bigger patterns (object parts / whole objects)
* Receptive field grows with:
  * more convolution layers (stacking)
  * **pooling / stride** (grows faster but reduces spatial resolution)
  * **dilation** (grows without heavy downsampling)

---

## Trường thụ cảm (CNN) — VN

**Trường thụ cảm** là vùng trên **đầu vào gốc** (ví dụ: các pixel của ảnh) có thể ảnh hưởng đến **một neuron / một ô** trên feature map ở một tầng CNN.

* **Tầng đầu:** trường thụ cảm nhỏ → bắt cạnh, góc, texture
* **Tầng sâu:** trường thụ cảm lớn → hiểu cấu trúc lớn hơn (bộ phận vật thể / cả vật thể)
* Trường thụ cảm tăng nhờ:
  * chồng nhiều lớp convolution
  * **pooling / stride** (tăng nhanh nhưng giảm độ phân giải)
  * **dilation** (tăng vùng nhìn mà không cần downsample quá mạnh)
