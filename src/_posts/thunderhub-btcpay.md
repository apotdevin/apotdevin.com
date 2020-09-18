---
title: 'Setting up BTCPay with ThunderHub in 5 minutes'
excerpt: 'BTCPay is one of the easiest ways to get your own Bitcoin and Lightning node running. Now with the ThunderHub integration you can quickly manage your nodes with a great UX.'
coverImage: '/assets/blog/thunderhub-btcpay/cover.png'
date: '2020-04-26T05:35:07.322Z'
update: '2020-09-18T05:35:07.322Z'
isDraft: false
---

The team over at BTCPay have made it extremely easy to deploy BTCPay to any cloud server or local machine in a matter of minutes. Thanks to their Docker deployment, with a few commands you can have a fully working Bitcoin full node with lightning functionality and a varied assortment of additional apps all tied together behind the great UI of BTCPay.

![BTCPay Home](/assets/blog/thunderhub-btcpay/1.png)

To go along with this great tech stack, ThunderHub was also integrated into their deployment, allowing you to get a great UX for managing and monitoring your node without complications.

In this post we will cover the process of getting a BTCPay instance up and running from zero (on DigitalOcean) with ThunderHub integrated.

**If you already have BTCPay running somewhere feel free to skip the first two parts and go directly to the “Adding ThunderHub to an existing BTCPay” section.**

## Starting a Server on DigitalOcean

1. Create an account on DigitalOcean here. This link will give you two full months to run a BTCPay instance completely for free. It’s a referral link so if you last long enough I also get a commission back.

2. Click on the big green button on the top right to start the process of creating a Droplet (Cloud Server).

3. Select Marketplace and look for Docker in the different options.

4. Chose the Standard plan and select the \$10/month server. This is enough to run a pruned Bitcoin node with lightning.

5. For the data center and authentication chose whatever you prefer.

6. Give the droplet any hostname you like (or don’t) and click on Create Droplet

## Installing BTCPay with ThunderHub

To install BTCPay and ThunderHub on this new server you need to login to your server with SSH. The simplest way is by using PUTTY. Once inside, copy and paste the following commands into the console.

```bash
sudo su -
mdkir btcpay
cd btcpay
git clone https://github.com/btcpayserver/btcpayserver-docker
cd btcpayserver-docker
```

With these commands you now have the BTCPay docker repository that will do the complete installation for you. So now let’s give it the correct parameters to start.

```bash
export BTCPAY_HOST="YOUROWNDOMAIN.com"
export NBITCOIN_NETWORK="mainnet"
export BTCPAYGEN_CRYPTO1="btc"
export BTCPAYGEN_REVERSEPROXY="nginx"
export BTCPAYGEN_LIGHTNING="lnd"
export BTCPAY_ENABLE_SSH=true
export BTCPAYGEN_ADDITIONAL_FRAGMENTS="opt-add-thunderhub;opt-save-storage-xs"
```

Remember to change the BTCPAY_HOST parameter to your website domain. Since we are running a small \$10/month server we also need to add opt-save-storage-xs to the additional fragments or the server will run out of space. If you have your own machine and enough space for the full blockchain, this is not needed and you can leave it like this:

```bash
export BTCPAYGEN_ADDITIONAL_FRAGMENTS="opt-add-thunderhub"
```

Finally run this command to start the installation. Don’t forget the dot at the beginning.

```bash
. ./btcpay-setup.sh -i
```

Once this is finished open the following ports so that your bitcoin and lightning nodes can communicate with other nodes.

```bash
sudo ufw allow 43782
sudo ufw allow 39388
sudo ufw allow 9735
```

And that’s it! If you go to your domain you should now see the awesome BTCPay welcome screen.

## Adding ThunderHub to an existing BTCPay

If you already have a BTCPay server running somewhere and just want to add ThunderHub it’s even easier! Two lines of code to copy and it should be up and running. First SSH into your server and paste these two lines:

```bash
export BTCPAYGEN_ADDITIONAL_FRAGMENTS="$BTCPAYGEN_ADDITIONAL_FRAGMENTS;opt-add-thunderhub"

. btcpay-setup.sh -i
```

And that’s it! After the setup finishes you can now access ThunderHub.

## Access ThunderHub

_If it's a new instance you will have to wait for the blockchain to sync. Depending on which sync method you chose you will have to wait between a couple of days to a week for the sync to finish._

After you have everything up and running you can now access ThunderHub by going in BTCPay to Server Settings and then into Services. You will find ThunderHub in the Other Services section.

![BTCPay Services](/assets/blog/thunderhub-btcpay/2.png)

After clicking on **See Information** you will arrive at this view where you can then press on **"clicking here"** to be redirected to you ThunderHub instance.

![ThunderHub Information](/assets/blog/thunderhub-btcpay/3.png)

## Connect ThunderHub to BTCPay

ThunderHub is already connected and secured with JSON web tokens and BTCPay's login system so once you arrive at the page you just need to click on **Connect** to access your dashboard.

![ThunderHub Connect](/assets/blog/thunderhub-btcpay/4.png)

## There's an Error!

If you get a warning message that says **"Unable to connect to node"** it is probably because the certificate used to communicate with LND doesn't have the correct domains. LND doesn't generate new ones unless the previous ones are deleted first.

To delete the old certificate and key and have LND generate new ones, apply the following:

```bash
docker exec btcpayserver_lnd_bitcoin rm /data/tls.cert
docker exec btcpayserver_lnd_bitcoin rm /data/tls.key
docker restart btcpayserver_lnd_bitcoin
docker restart generated_bitcoin_thub_1
```

This is not dangerous for your node. These certificates are only used to encrypt the gRPC connection.

## The End

You now have a fully working Bitcoin and Lightning node with a great UI to manage and monitor them at anytime and from anywhere.
Hope this helped you get setup and running.

**If you have any questions or suggestions feel free to hit me up on twitter at @tonyioi**
