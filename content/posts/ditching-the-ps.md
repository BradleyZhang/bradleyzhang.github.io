+++ 
draft = false
date = 2026-07-16T18:28:26+08:00
title = "逃离 PlayStation:尝试配置Bazzite 和 Windows获得主机体验"
description = ""
slug = ""
authors = []
tags = []
categories = []
externalLink = ""
series = []
toc = true
+++

万恶的索尼居然不再出盘了！自从宣布已半个月，官方博客都被骂9000楼索尼也没什么取消的迹象，看来是板上钉钉了。没有实体版，加上新游戏价格是 Steam 两倍的 PSN 商店，以及在可见未来一定关闭的旧主机商店。已经没什么理由在2028后留在 PS 了，那么来到 PC 用 Steam 怎么获得和游戏机一样的体验呢。

主机最吸引我的除了实体版外就只有待机功能和手柄唤醒了。用手上的拯救者Y7000P(2024) 尝试在 Bazzite 还有 Windows 配置这两个功能。
最终结论是我手上这个笔记本在 Bazzite 系统虽然蓝牙唤醒很好用但无法成功睡眠唤醒，而在Windows 虽然睡眠唤醒测试正常，但因为BIOS限制无法配置蓝牙唤醒。

## Bazzite

相比起 SteamOS，Bazzite 对 x86电脑支持更好，并且预先安装好GPU驱动和一些常用软件，比如 Sunshine，比较开箱即用。不过 Bazzite 是不可变（Immutable）系统，安装官方应用商店（Flatpak）里没有的软件比较麻烦。

### 配置蓝牙唤醒

[参考](https://www.reddit.com/r/Bazzite/s/nAVS8koCfe)

1.`lsusb -t` 找到 Driver=btusb 的 Bus-Port，比如我这里就是1-14

```bash
$ lsusb -t
/:  Bus 001.Port 001: Dev 001, Class=root_hub, Driver=xhci_hcd/16p, 480M
    |__ Port 006: Dev 002, If 0, Class=Video, Driver=uvcvideo, 480M
    |__ Port 006: Dev 002, If 1, Class=Video, Driver=uvcvideo, 480M
    |__ Port 006: Dev 002, If 2, Class=Application Specific Interface, Driver=[none], 480M
    |__ Port 012: Dev 003, If 0, Class=Human Interface Device, Driver=usbhid, 12M
    |__ Port 014: Dev 004, If 0, Class=Wireless, Driver=btusb, 12M
    |__ Port 014: Dev 004, If 1, Class=Wireless, Driver=btusb, 12M
/:  Bus 002.Port 001: Dev 001, Class=root_hub, Driver=xhci_hcd/9p, 20000M/x2
```

2.`sudo udevadm info -a -p /sys/bus/usb/devices/1-14 | grep -E "idVendor|idProduct"  ` （注意修改“1-14”）

```bash
brad@SteamBar:/var/home/brad$ sudo udevadm info -a -p /sys/bus/usb/devices/1-14 | grep -E "idVendor|idProduct"
    ATTR{idProduct}=="0026"
    ATTR{idVendor}=="8087"
    ATTRS{idProduct}=="0002"
    ATTRS{idVendor}=="1d6b"
    ATTRS{dbc_idProduct}=="0010"
    ATTRS{dbc_idVendor}=="1d6b"
```

复制其中`ATTR{idProduct}=="0026",ATTR{idVendor}=="8087"`

3.`sudo nano /etc/udev/rules.d/10-bluetooth-wakeup.rules` 写入

```bash
ACTION=="add|change", DRIVERS=="usb", SUBSYSTEM=="usb", ATTR{idProduct}=="0026",ATTR{idVendor}=="8087", TEST=="power/wakeup", ATTR{power/wakeup}="enabled"
```

（注意修改 idProduct和idVendor）

4.重新加载配置

```bash
sudo udevadm control --reload-rules
sudo udevadm trigger
```

验证(注意修改1-14)

```bash
cat /sys/bus/usb/devices/1-14/power/wakeup
```

若显示 enabled 那么就配置完成了

我使用的手柄是ds5。在事先配对好后，休眠下按ps键就能唤醒了。
之后在 系统设置-锁屏 配置不自动锁屏、关闭休眠唤醒后锁定屏幕。这样休眠唤醒体验就和主机基本一样了。

在 系统设置-登录屏幕，开启自动登录；在 steam-设置-界面 开启开机启动steam和大屏幕启动steam，虽然开机后需要在桌面等7-8秒自动启动steam，但也算接近主机的开机体验了。

### 睡眠/休眠

大概是 Nvidia 驱动的问题，在 Steam 的挂起系统（睡眠）后再唤醒，不仅游戏直接关闭Steam也直接关闭了。

而按照[官方文档](https://docs.bazzite.gg/Advanced/swapfile/)配置休眠（Hibernation）后，结果和睡眠一样也是驱动有问题。暂时是没法解决了

### 代理及更新

Bazzite 安装代理要么是 AppImage 要么是用[rpm-ostree](https://docs.bazzite.gg/Installing_and_Managing_Software/rpm-ostree/)，不过TUN模式都开不了，还是蛮麻烦的。

让 `ujust update` 更新走代理：

```bash
sudo mkdir -p /etc/systemd/system/rpm-ostreed.service.d
sudo nano /etc/systemd/system/rpm-ostreed.service.d/http-proxy.conf
```

写入（注意修改端口）

```bash
[Service]
Environment="http_proxy=http://127.0.0.1:7897"
Environment="https_proxy=http://127.0.0.1:7897"
```

加载配置

```bash
sudo systemctl daemon-reload
sudo systemctl restart rpm-ostreed.service
```

另外 `ujust update` 也会更新 Homebrew 安装的工具，需要在`.bashrc`也给终端配置代理

## Windows

### 蓝牙

我的笔记本BIOS里没有 USB 唤醒的选项，没法配置蓝牙唤醒，寄😡

感兴趣的可以参考[这个帖子](https://www.reddit.com/r/Bazzite/s/mDsbyzSMkh)的3.1

虽然还有插外置设备之类的方案，但暂时就折腾到这里吧💦
### 睡眠

Windows 的睡眠测试随便找了部，Death end re;Quest，在开场直接挂起系统再唤醒，效果和主机是一样的。长时间的睡眠稳定性没有测试，等哪天有必须在PC上玩的游戏再说吧。

## 最后

虽然我手上现有的笔记本没法配置出 PS 一样的体验，但距离2028还有几年，加上我除了特别喜欢的系列新作会第一时间玩外都至少等几年再玩（而且特别喜欢的系列也不到5个），所以至少2029前会留在 PS5。希望到时候现在的问题都已经解决并且AI热潮散去，让硬件价格回归正常吧🙏。

回头再看 Steam Machine，除了价格外可以说没有缺点了。再许愿硬件回归正常价格后V社贴钱做一个高性价比的 Steam Machine 🤤，哪怕加上限制阻止刷机其他系统也好啊（
