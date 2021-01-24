---
title: 'Rebalance your channels with ThunderHub'
excerpt: 'Move liquidity between your channels with circular payments'
coverImage: '/assets/blog/thunderhub-rebalance/cover.png'
date: '2021-01-24T05:35:07.322Z'
isDraft: false
---

### 1. Select the channels that will be rebalanced.

Select an outgoing channel and an incoming channel.

- The outgoing channel should have a **higher local balance** than remote balance
- The incoming channel should have a **higher remote balance** than local balance
- For the incoming channel you can see the fees your partner will charge you. Check to see they aren't to high.

### 2. Select the fee to look out for.

You can choose between an amount fee or a fee rate.

- **Amount fee**: The amount of satoshis you are willing to pay independant of how many sats you want to rebalance.
- **Fee rate**: The max rate (ppm: parts per million) you are willing to pay. The final fee paid will vary depending on how many sats you rebalance.

### 3. Select the amount you want to rebalance.

You can choose between a fixed amount to rebalance or a target incoming liquidity.

- **Fixed**: the amount of sats you want to rebalance independant of the current incoming liquidity.
- **Target**: the target amount of sats you want to have as incoming liquidity.

If you leave this field empty, ThunderHub will try to move all the local balance in the outgoing channel to the local balance in the incoming channel.

### 4. Select nodes that you want to avoid. (Optional)

You can select nodes that you want to avoid during the rebalancing but this option is not mandatory.
