---
title: Active Learning
category: AI
tags: [ml, data]
description: Notes and links about active learning strategies.
---

Active learning is a special case of machine learning in which a learning algorithm can interactively query a user (or some other information source) to label new data points with the desired outputs. In statistics literature, it is sometimes also called optimal experimental design.

## Core Idea
The key hypothesis is that if the learning algorithm is allowed to choose the data from which it learns, it will perform better with less training compared to typical passive supervised learning.

## Scenarios
There are generally three scenarios in which the learner may be able to ask queries:
*   **Membership Query Synthesis:** The learner requests a label for any unlabeled instance in the input space, including queries that the learner generates de novo.
*   **Stream-Based Selective Sampling:** The key assumption is that obtaining an unlabeled instance is free (or inexpensive), so it can first be sampled from the actual distribution, and then the learner can decide whether to request a label for it.
*   **Pool-Based Sampling:** Instances are drawn from the entire data pool. The learner selects the best instance from the pool to be labeled.

## Query Strategy Frameworks
*   **Uncertainty Sampling:** Query the instances the model is least certain about.
*   **Query-By-Committee:** Train a committee of models and query instances where they disagree the most.
*   **Expected Model Change:** Query instances that would cause the greatest change to the model parameters.
