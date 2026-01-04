---
title: Convolutional Neural Network (CNN)
category: Deep Learning
description: Architecture, Kernels, and Mathematical Foundations
---

A Convolutional Neural Network (CNN) is a type of neural network designed to work especially well with grid-like data such as images (H×W×C), audio spectrograms, and videos. CNNs learn local patterns (edges, textures, shapes) using convolution layers, then combine them into higher-level features.

## Why CNNs are useful
*   **Local connectivity:** each neuron looks at a small region (not the whole input).
*   **Weight sharing:** the same kernel is used across many positions → fewer parameters than fully-connected layers.
*   **Translation equivariance:** if an object shifts in the image, the feature map shifts similarly.

## Typical CNN pipeline
`Input → Convolution → Activation (ReLU) → (BatchNorm) → Pooling → … → Flatten/GlobalAvgPool → Dense → Output`

Output can be classification, detection, segmentation, etc.

## Key terms
*   **Feature map:** output of a convolution layer (one per kernel).
*   **Stride:** step size when sliding the kernel.
*   **Padding:** adding borders (usually zeros) to control output size.
*   **Receptive field:** region of input that affects a neuron in deeper layers.

## Kernel (Filter)
A kernel (also called a filter) is a small matrix of learnable weights used in a convolution operation. It slides over the input and produces a feature map that highlights certain patterns.

### In images
*   Kernel size examples: 3×3, 5×5, 7×7
*   For RGB input, a kernel is typically k×k×C (C = channels), e.g. 3×3×3
*   A convolution layer usually has many kernels → many feature maps (output channels).

### Intuition
Each kernel becomes a “pattern detector” during training:
*   early layers: edges, corners
*   middle layers: textures, shapes
*   deeper layers: object parts, concepts

### Hyperparameters related to kernels
*   Kernel size (k)
*   Number of kernels (output channels)
*   Stride (s)
*   Padding (p)
*   Dilation (d) (spreads kernel elements out to see a wider area)

## Convolution
Convolution is an operation that combines an input (like an image) with a kernel to produce a feature map. In deep learning, “convolution” is often implemented as cross-correlation (same idea, without flipping the kernel).

### 2D convolution (deep learning form)
For an input `X` and kernel `K`, the output `Y` at location `(i,j)` is:

    Y[i,j] = sum( u=0 to k-1 ) sum( v=0 to k-1 ) sum( c=0 to C-1 ) K[u,v,c] * X[i+u, j+v, c] + b

Then an activation (e.g., ReLU) is usually applied.

### Output size (common formula)
Given input size `H×W`, kernel `k`, stride `s`, padding `p`:

    H_out = floor( (H + 2p - k) / s ) + 1
    W_out = floor( (W + 2p - k) / s ) + 1

## What convolution “does”
*   Detects patterns locally (because kernel covers a small patch).
*   Builds spatial feature maps that preserve relative position.
*   Allows stacking many layers to learn hierarchical features.
