---
title: 'Lightning Network Channel Balancing with ThunderHub'
excerpt: 'How to use ThunderHub to do circular rebalancing of your Lightning Network Channels.'
coverImage: '/assets/blog/thunderhub-balancing/cover.png'
date: '2020-02-23T05:35:07.322Z'
isDraft: false
---

With LND v0.9.0-beta being released around a month ago, we saw some great features being released such as multi-path payments and keysend, features highly awaited by me and many more lightning network fanatics. Within this release, there was also a smaller feature that caught my eye which was the added support for circular payments to yourself. This meant that you could now rebalance your channels directly with LND without the need of additional scripts.

Thanks to this addition, balancing your channels is now easier than ever and you don’t need to go through the process of installing scripts or researching about pathfinding algorithms to keep your channels in equilibrium. It was also easier to implement a channel balancing feature into ThunderHub and give the LND command line a nice UI.

To show you how easy it is to balance channels with ThunderHub I will guide you through the process of balancing some incoming and outgoing channels, effectively making them bi-directional.

## What is ThunderHub?

First of all, a quick introduction of ThunderHub before getting into the serious stuff. ThunderHub is an open-source LND node manager where you can manage your node on any device or browser. It allows you to take control of the lightning network with a simple and intuitive UX. From channel management to forwarding reports and paying invoices, it has many features with more to come. If you have an LND node, it is definitely a tool you should check out.

![ThunderHub](/assets/blog/thunderhub-balancing/1.png)

## Balancing your Channels

Now to show you the network in a more visual way, we will be using Polar. This network will consist of 5 nodes with multiple channels between themselves.

![Lightning Network](/assets/blog/thunderhub-balancing/2.png)

All these channels are one-sided meaning they can only be used in one direction and for a network that relies on finding the shortest/least expensive paths to other nodes, this isn’t of much help since it reduces the number of paths you will find.

We will now balance these channels with the use of ThunderHub. Beforehand we connect to Alice and go to the balance section in ThunderHub.

![Initial View](/assets/blog/thunderhub-balancing/3.png)

ThunderHub automatically fetches all your channels and shows you how balanced they are along with a color indicator that gets greener the more balanced the channel is. You can see that all the channels are completely unbalanced right now with 2 having only local balance and 3 only remote balance.

First you must choose the outgoing channel you want to balance. ThunderHub sorts them by how balanced they are in increasing order from -1 to 1, with 0 being a perfectly balanced channel. After selecting Bob’s channel we now have to choose the incoming channel. See how the channels are now sorted in decreasing order. This is because ideally, you want to pass funds from a < 0 balanced channel to a > 0 balanced channel.

We choose Carol’s channel since it has the same amount but in the opposite direction as Bob’s channel.

![Chosen Channels](/assets/blog/thunderhub-balancing/4.png)

Now we must define how much we want to pass from one channel to the other and what is the maximum fee we are willing to pay. If you want to search for paths regardless of the fee you have to pay, you can leave the max fee field empty.

To balance these channels we will pass half of the amount available in Bob’s channel (about 495,000 sats) to Carol’s channel and search for all paths regardless of the fee. Once we click on Get Route we are shown with a possible path to use and the fee needed.

![Route](/assets/blog/thunderhub-balancing/5.png)

With this path, we need to do 3 hops and pay a total of 2 satoshis to complete the circular payment. Now if you want to look for another possible route click on Get Another Route (If it can’t find another one, you will receive the exact route again) but if you are satisfied with this one click on Balance Channel.

ThunderHub will now make the circular payment and you should see a green confirmation on the top-right if the payment was successful. Your channels should now look like this:

![Final Result](/assets/blog/thunderhub-balancing/6.png)

If we repeat the same process with Carol’s other channel and Dave’s channel it should now look like this:

![Final Balancing](/assets/blog/thunderhub-balancing/7.png)

With this, we have now successfully balanced 3 of Alice’s channels and they can now be used in a bi-directional way to receive or send payments.

Alice’s node currently doesn’t have enough local balance to balance all of it’s channels so Alice would need to either open new channels or use LND’s Loop service, but this is a topic for another post.

If we now look at the network we can see all the balances on the different channels.

![Final Network](/assets/blog/thunderhub-balancing/8.png)

## Resume

In short, to balance your channels you must:

1. Choose the outgoing channel
2. Choose the incoming channel
3. Choose the amount to balance (and a maximum fee limit if you want)
4. Balance the channels

## Conclusion

With ThunderHub you can start balancing your channels with a nicer interface than the command line and have a more visual experience of how balanced they are. It’s simple and easy to use interface and I’m excited to have more people try it out and get some opinions. So if you have an LND node go test it out and keep that node balanced!

If you want to check out the project head on over to ThunderHub or directly see the code on Github. If you have any questions or comments feel free to reach out to me on Twitter.

I hope you enjoyed this small tutorial and until next time!
