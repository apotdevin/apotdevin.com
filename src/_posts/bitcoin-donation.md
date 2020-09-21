---
title: 'How to start receiving Bitcoin donations'
excerpt: 'If you are a content creator on the internet there will come the day when you want to receive donations from people that enjoy your work. With Bitcoin you can get donations easily from around the world.'
coverImage: '/assets/blog/bitcoin-donation/cover.png'
date: '2020-09-21T05:35:07.322Z'
isDraft: false
---

## The Problem

If you are a content creator on the internet there will come the day when you want to sell/offer services online or even receive donations from people that enjoy your work. Nowadays there are many services online that can help you with this. For example if you want to use a subscription model you can use [Patreon](https://www.patreon.com/), if you want to receive one time donations [Paypal](https://www.paypal.com/) might suffice and even if you want to do crowdfunding there are options such as [GivenGain](https://www.givengain.com/).

But all these options have one disadvantage and it's that they are physical companies with rules and in countries with laws. And this single point is a huge downside.

## The World Wide Web

When you connect to the internet you can consume content from every single corner of the planet which also means that when you create content online you are opening it up to a global audience. The companies mentioned before are available on the internet but they have internal rules and are physically based in a country with laws they have to follow. And it gets especially hard when the country where they are at, is different to the country where you live.

For example, if you live in a country that doesnt have Paypal available, this option is unavailable for you or if Patreon doesn't like the type of content you create they can block you from using their platform.

So, even though the internet is global and everyone has access to the World Wide Web, many people around the world are cut off from a big portion of this global economy.

## The Solution

The solution is simple, **for the global internet we need global money.** Content creators or anyone that want's to receive money online shouldn't be limited by country borders. There shouldn't be a middleman that takes a portion of your hard work or that can close you off from the rest of the world at the click of a button.

For this we have [Bitcoin](https://bitcoin.org/).

![Bitcoin Economy](/assets/blog/bitcoin-donation/1.png)

With Bitcoin you are placed in a global economy that is censorship-resistant, permissionless, borderless and free. You can receive payments from anyone in the world in minutes, with no middleman fees and without the need to ask for permission.

## Start Receiving Bitcoin

Finally, to the juicy part of this post.

I will show you, step by step, how to create your donation portal that accepts Bitcoin. It will be connected directly to your Bitcoin wallet so all payments will be received by you, directly from your customer, and not pass by any middleman. Each new payment will also be to a fresh new bitcoin address to avoid [privacy issues](https://en.bitcoin.it/wiki/Address_reuse).

### The Wallet

To start receiving Bitcoin payments you first need a Bitcoin wallet. Unfortunately not every Bitoin wallet will work since you need to be able to get the **Extended Public Key** from your wallet.

As a short explanation for Extended Public Key (also known as the **XPUB**), it is the key with which you can generate an indefinite amount of Bitcoin addresses, all of which will be under your control.

From most hardware wallets such as [Ledger](https://shop.ledger.com/pages/back-to-school?r=869c), [Trezor](https://trezor.io/) and [ColdCard](https://coldcardwallet.com/) you can get the XPUB but to keep things simple (and inexpensive) we will use one of the best bitcoin desktop wallets, [Electrum](https://electrum.org/).

![Electrum Wallet](/assets/blog/bitcoin-donation/2.png)

So head on over to their site, download, verify, install and get Electrum running on your computer.

When you open the app for the first time, you will be asked to create a wallet.

![Electrum Wallet](/assets/blog/bitcoin-donation/3.png)

Leave it as a standard wallet.

![Electrum Wallet](/assets/blog/bitcoin-donation/4.png)

Create a fresh new seed.

![Electrum Wallet](/assets/blog/bitcoin-donation/5.png)

Keep it as Segwit.

![Electrum Wallet](/assets/blog/bitcoin-donation/6.png)

Copy down your seed. **IMPORTANT** Write this down on a piece of paper or store it in a password manager such as [KeePass](https://keepass.info/). Anyone that gets access to this seed has access to your funds.

![Electrum Wallet](/assets/blog/bitcoin-donation/7.png)

After confirming your seed you now have to provide a password for your wallet. This will ensure that even if your computer gets stolen or someone gets access to your files, they wont be able to steal your funds.

![Electrum Wallet](/assets/blog/bitcoin-donation/8.png)

Finally, once you are inside, go to **Wallet > Information** to see your XPUB. Be carefull with who gets access to your XPUB, they won't be able to steal your funds but can monitor all the bitcoin adresses you ever create with this wallet.

![Electrum Wallet](/assets/blog/bitcoin-donation/9.png)

This is for example the XPUB that represents my wallet. Don't worry, this is a test wallet I will later delete.

```
zpub6nWSMSDFiDWdTfsc3cogpNrsCXKaVDKPoihCAsKtis5SWhX72yoQXTNpEwewMezRmuzxT6AewGjVv4uMGEnamu7pTVWGmD7JdnUKSoMpGJx
```

And this is all you need for this part! Now moving on to the donation portal.

### The Donation Portal

To create a website where users can donate to you, we will be using [BTCPay Server](https://btcpayserver.org/), and theres a couple of options for you here.

1. You can setup your own BTCPay instance (Check out [this tutorial](https://apotdevin.com/blog/thunderhub-btcpay) to set one up in 5 minutes on DigitalOcean) or
2. You can use a hosted instance such as [BTCPayJungle](https://btcpayjungle.com/Account/Login). Hosted instances always require a certain level of trust.

So choose the one you prefer and login. Once inside go to **Stores > Create a new store**, set a name for the store and **Create**.

Once created, in the settings for the store, scroll all the way down to the **Derivation Scheme** section.

![BTCPay Server Store](/assets/blog/bitcoin-donation/10.png)

Click on **Modify** in the **BTC** line and here is where you will need to add the XPUB that we previously got from Electrum. Paste it in and click on **Continue**.

BTCPay now shows you a list of addresses that you can use to verify this is the correct XPUB for your wallet. Generate some new addresses in Electrum and double check they are the same.

![BTCPay Server Store](/assets/blog/bitcoin-donation/11.png)

After you have verified, click on **Confirm** and go to the **Apps** section. Create a new app, give it a name, leave it as PointOfSale and select the store you created previously.

![BTCPay Server Store](/assets/blog/bitcoin-donation/12.png)

After you create the store you will see a huge amount of configurations which you can come back later and play around with. For now, delete all the default products you see, scroll all the way down and click on **Save Settings**. After it saves, click on **View App**.

And there you have it, a donation portal where the internets global audience can donate to you! Each user that arrives, inputs an amount and clicks on **Pay** will be shown a new unique Bitcoin address to which they can pay. And all this goes directly to your wallet!

![BTCPay Server Store](/assets/blog/bitcoin-donation/13.png)

## Problem Solved

Now you can start receiving payments from anywhere in the world, with no commissions, without asking for permission and in a secure manner. BTCPay has many other features (Such as crowdfunding) so I really encourage you to go back, explore and test everything it has to offer.

I hope you have enjoyed this tutorial and that it helps you join the Bitcoin revolution. If you have any questions or want to reach out, all my social links are down below 🤟
