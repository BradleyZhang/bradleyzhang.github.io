+++ 
draft = true
date = 2026-07-09T18:02:56+08:00
title = ""
description = ""
slug = ""
authors = []
tags = []
categories = []
externalLink = ""
series = []
toc = true
+++

一张另类摇滚专辑，是我喜欢的风格。创作者 Mitski 的歌我之前只通过另一位翻唱歌手 Chloe Moriondo 听过，对她的《Nobody》印象很深刻。这张专辑我这周听了好几遍，最喜欢的歌是《Lightning》和《Instead of Here》，第二首《Where's My Phone》也很有个性。很奇妙，Mitski 的歌总给我这种感觉：这是来自金星的音乐。

> To feel like myself again,
>
> I won't be here. I'm where nobody can reach.
>
> I'm not here. I'm where nobody can reach.
>
> Instead of here, I'm where nobody can reach.

<!--more-->

## 连接

### 我有 ADHD 吗？

> [!note] 📜
> [35 岁确诊 ADHD - Alex Hsu](https://alexhsu.com/my-adhd)

其实我从未怀疑过自己有 ADHD，也就是俗称的多动症，但这个病在网络上的讨论在最近有所增加，确诊的人也不少——可能是因为人们对心理健康的关注更多了，是好事。也正因为近来讨论的人多了，听他们描述自己的症状，我自己也有些不确定了。之前听一期播客讲一个简单的 ADHD 判断方法：如果做家务的时候能做完一件再做下一件，不会把各个角落的各种事情都展开之后迟迟不收尾，那就不是 ADHD。在那之后，我每次做家务都会刻意地不让自己同时开始多件事情——尽管我后来发现我只是在进行合理的多线程并发，避免处理器空闲，比如给床单喷了除螨剂之后要等它干掉才能叠被子，这个时候我就会走出卧室去擦厨房。

我也偶尔会有在面对焦虑和压力时失去所有动力，什么也干不了的情况。不过一年前我也自我剖析过，一方面是自己的确有些抑郁的倾向在，另一方面，没办法好好应对压力也算人之常情，而且这种情况也不算常见。可是，我也经常在写文章写到一半的时候去查看社交媒体信息，或者上网冲浪的时候发现自己不知不觉地打开了十几个标签页，在同时探索各种不同的主题，这似乎是注意力没办法集中的体现吧？

无论如何，还是自检一下比较放心，我找到了一张[成人 ADHD 自检量表](https://qingshanasd.cn/quotients/adhd/)，只有 18 题，很快做完了。结果是：我不太可能有 ADHD。

做题的过程中我就猜到了，我有好几题都选择了「从来没有」。比如「在家里或是在工作时，你经常乱放东西或是找不到东西」和「你认为记住约会或是必须要做的事情很困难」，我虽然不算非常有条理，但这这两件事情还从来没有发生过，因为我非常害怕丢东西和忘记和别人的约定，这种警觉性让我从来没有遇到过这方面的问题。

做完之后还有一个感受：如果有人真的表现出这些症状，我好像是会生气的。比如这几条：

> - 有人面对你说话时，你很难专心地听完他说的内容
>
> - 当与他人交谈时，你会在别人还没把话讲完前就插嘴或接话替对方把话讲完
>
> - 你会在别人忙碌时打断别人

以前我认为这些人是没有教养，现在看来，他们有可能并不是想要这样做，而是因为觉得不这样做很困难。我想我可以多一些包容和理解吧。

### Org Mode 是最好的标记语言吗？

> [!note] 📜
> [Org Mode Syntax Is One of the Most Reasonable Markup Languages to Use for Text](https://karl-voit.at/2017/09/23/orgmode-as-markup-only/)

> I did not find any tool support for Markdown, AsciiDoc, Wikitext or reStructuredText anywhere that could compete with the cozy Org mode syntax support within Emacs.

_Well, look harder._

作者在这篇文章中对比了 Org Mode 和其他标记语言（Markdown、AsciiDoc、Wikitext 和 reStructuredText）的区别，以及为什么他认为 Org Mode 比这些标记语言更具优势、更合理。

文章前半部分的观点我很认同。首先，Org Mode 是规范化的，而 Markdown 却有很多不同的 Flavor，在不同的平台上输入 Markdown 得到的结果不总是一样的，比如 Markdown 很常见的表格就是拓展语法而非最初的标准。我自己也依赖一些并不常见的 Markdown 拓展语法，比如 Obsidan 里常用的 `==高亮标记==` 和 GitHub 上常用的 [Alert](https://github.blog/changelog/2023-12-14-new-markdown-extension-alerts-provide-distinctive-styling-for-significant-content/)，这两个语法都被 Hugo 支持，所以我在博客里也经常用，但是在其他地方就不一定了。这的确是 Markdown 的缺陷之一。

其次，Org Mode 的行内标记是符合直觉的，`*加粗*` `/斜体/` `_下划线_` `~代码~` 和 `=等宽字=` 都很容易记住，是唯一的语法，而且都是一前一后的单个字符，不像 Markdown 有 `_斜体_` 和 `*斜体*` 两种写法，而 `**加粗**` 和 `~~删除线~~` 居然需要一前一后的双字符进行标记，和其他行内标记不统一。说实话，我之前尝试 Org Mode 时，就挺搀它的行内标记语法的。

接下来是我不太赞同的部分。

作者说他认为 Markdown 的链接语法令人疑惑，它会忘记 `[文字]` 和 `(链接)` 哪个在前、哪个在后，并且它不理解为什么要用到两种括号。Org Mode 里的链接写作 `[[链接][文字]]`。我可以用相同的逻辑论述为什么 Org Mode 的链接语法令人疑惑。在 Markdown 里，`[]` 是用来包裹文字的，`()` 是用来包裹链接的，至少我永远不会搞错文字和链接各自的括号是什么；我相信大部分 Markdown 用户记住哪边是链接、哪边是文字的方式都是这样的，`[]()` 这样的形式看得多了，就会知道谁在前在后；如此一来，我就不会搞错链接和文字的位置了。反观 Org Mode，链接和文字都用 `[]` 包裹，谁在前在后就更难记住。

我认为「我容易忘记语法的顺序」并不是很有说服力的论据，因为我认为 Org Mode 用户能记住 `[[链接][文字]]`，和 Markdown 用户能记住 `[文字](链接)` 的方式一样：见多了就记住了，不是因为哪个语法更符合直觉。两边都有各自的优势和缺陷，仅仅是个人偏好和习惯问题。

我尝试过 Org Mode，其中一部分我很喜欢，另一部分则很不习惯。我最不能接受的是 Org Mode 对中日韩文字的支持，它不能解析 `这样的*加粗*文字`，因为 Org Mode 的行内标记前后必须有空格，这显然是欧洲语言的使用逻辑，中文里就是很少用空格。其次，标准化是好事，但拓展性差也是问题，我没办法用 `==高亮标记==` 这种拓展语法。再次，你们是怎么忍受 `#+BEGIN_SRC` `#+END_SRC` 这种写法的？这跟 Markdown 的 \`\`\` 比难道不是长得多吗？和 `~行内代码~` 也没有连贯性（反而 Markdown 可以写 `~~~` 标记代码块）。

不过，读完这篇文章过后，我的确产生了很多思考，其中之一是：标记语言本身真的有好坏之分吗？我认为，就和代码风格一样，有的风格固然是不好的，比如可读性很差的风格，但有的风格很难分个高下，比如 `{}` 应不应该换行写、缩进应该用空格还是制表符、文件末尾应该不应有空行，标记语言也有很难说是好是坏的语法。用于写配置的标记语言 YAML 和 TOML 也是一样，有人认为 [YAML 有诸多缺陷](https://www.arp242.net/yaml-config.html)，而 [TOML 的缺陷](https://hitchdev.com/strictyaml/why-not/toml/)也有人能列出来不少。

你猜怎么着？没有一门标记语言是完美的，包括 Org Mode 和 Markdown。

如何选择标记语言，应该由使用者自己尝试、权衡和决定，不存在「最合理且对所有人都同样合理」的语言。或许，可以开发一种自定义程度极高的标记语言，人们可以自己写配置调整语法，自己创造最适合自己的语言，就像配置编辑器一样。

### 「结果啊……」

> [!note] 📜
> [“It turns out”](https://jsomers.net/blog/it-turns-out)

作者表示他很喜欢「It turns out」这个表达，他常在 [Paul Graham](https://paulgraham.com/articles.html) 的文章里读到，这个表达应该可以对应中文里的「结果……」「最后发现……」。

如果把一句话直接说出来，尤其是那些稍微有些让人难以接受的观点，可能不会起到很好的效果，但如果作者自己在一开始就表达些许的质疑和不确定，然后再以「结果……」「最后发现……」来转折，语气中透露的些许惊讶就会让读者更容易接受这个没有论据支撑的观点。作者说这是一种很巧妙的偷懒技巧，或者说「黑客技巧」（Hack）。

在[第 43 期周刊](/weekly/43/#读着顺口与写得正确)中我分享了 Paul Graham 的另一篇文章，题为《Good Writing》。PG 表示他发现「读着顺口」和「写得正确」这两者之间存在联系，简单来说，如果把句子写得更通顺，这个句子表达的意思就更有可能是正确的，内部逻辑可能更连贯——不过前提是修改，PG 表示他经常修改一些句子，使之更顺口，这样就无意识地修正了一些错误表达。

我想「It turns out」可能也是 PG 的「顺口表达」之一吧。

### 死互联网已经不再是理论了

> [!note] 📜
> [The dead Internet is not a theory anymore.](https://www.adriankrebs.ch/blog/dead-internet/)

作者最近邀请了一个职位的申请者来参加第一轮面试，结果收到了这样的回复：

> hey sorry - my agent got a mind of its own and started applying for jobs for me. i'm not currently looking for a job 😅 <br/>
> 嘿不好意思 - 我的 Agent 有了自己的想法，开始帮我申请工作了，我现在没有在找工作。
>
> please ignore and sorry for that <br/>
> 请忽略，抱歉。

作者意识到「互联网已死」已经成现实了：Hacker News 开始限制新用户发表 ShowHN，因为最近出现了太多 Vibe Coded 且低质量的投稿； Reddit 上有很多机器人在评论区发帖宣传 SaaS 产品；LinkdIn 上的更新也是 AI 废料占大多数（作者贴的一条 LinkdIn 帖子的截图，帖子上全是些让人抓不住重点的车轱辘话，居然有两百多条评论和五千多个点赞）；GitHub 也逃不过，AI 生成的 Pull Request 下的代码审查和回复竟然也是 AI 生成的。

对此我的态度是，我就待在小互联网上好了，与大平台保持距离，和自己选择的真实的人社交。说实话，我一旦在 RSS 更新中看到了 AI 生成的内容，我就会直接把这个订阅源删掉。

不过，倒霉的是，我办法屏蔽现实中人类的声音。

### 因为 AI 错误，老奶奶被关进监狱半年

> [!note] 📜
> [AI error jails innocent grandmother for months in North Dakota fraud case](https://www.grandforksherald.com/news/north-dakota/ai-error-jails-innocent-grandmother-for-months-in-north-dakota-fraud-case)

美国北达科他州法戈的警察在调查一项银行诈骗案时使用了 AI 技术，用人脸识别锁定了位于田纳西州的 Angela Lipps 为主要嫌疑犯。在七月 14 日，警察在 Lipps 的家门口逮捕了他，那个时候她还在照看四个年轻的孩子。50 岁的 Lipps 从未去过北达科他州，甚至从未坐过飞机。她被关在田纳西州的监狱近四个月，法院为他指派的律师告诉她，如果要上诉，就要去北达科他州，于是她又被转移到了那边的监狱，直到第五个月的时候，逮捕她的警察才**第一次**和她谈话。

在法庭上，证据表明 Lipps 在被怀疑实施诈骗的时间在田纳西州还有银行记录，最终经过了六个月后被释放。时间已经来到了冬天，出狱的时候她穿着夏装，很冷，没有地方去，也不知道怎么回家。由于在监狱里没办法支付账单，她失去了她的房子、车，甚至她的狗。

> "Why did nobody from Fargo Police ever speak with Angela Lipps for the five months she was in jail?" Zibolski was asked. <br/>
> “为什么法戈的警察在 Angela Lipps 被关押的前五个月都没有人想过跟她交谈？”，Zibolski 被问到。
>
> "Thank you, Matt (Henson), for that question but we are not here to talk about that today," Zibolski replied. <br/>
> “谢谢你，马特（汉森），对于这个问题我们今天暂时不回答。”Zibolski 回复。

Lipps 现在回到了田纳西州，但从始至终，法戈警察没有跟她道过歉。

所以教训大概是，不要把 AI 技术交给*蠢蛋*。

## 星群

### Hugo 社交媒体卡片

Twitter 和 Mastodon 自带的嵌入卡片可能和网页的风格不统一，而且需要从外部加载资源，在这个过程中可能会暴露访客的 IP 地址和 Cookies 等信息给第三方。作者做了一个在 Hugo 构建过程从 API 拉取数据，静态展示社交媒体内容的卡片，和自己网站的风格更匹配，而且不会追踪任何用户数据。

我其实也想添加，但我一直不太能接受在静态网站的构建过程中，从网络加载资源，我认为这会拖慢*世界上最快的静态网站生成器*的构建速度。不过 Hugo 有构建缓存，兴许可以试试吧。

![](https://r2.eltr.ac/geedeapro/weekly/72/hugo-social-cards.png)

访问：[thumbsupdotme/social-cards](https://github.com/thumbsupdotme/social-cards)

### DNSControl

使用 Go 编写的通用 DNS 管理工具，使用简单的 JavaScript 代码管理 DNS 记录，而不是忍受 DNS 提供商难用且加载速度很慢的 Web 面板。DNSControl 还鼓励用户把 DNS 配置文件放在 Git 仓库里，这样 DNS 记录也有了 Git 历史，可以查看变更和随时回退。这个项目相当观点鲜明，以下是它自述的功能：

1. 使用高级语言维护 DNS 配置，可以使用宏和变量，便于更新；
2. 避免被提供商锁在平台上，可以随时切换提供商，并且非常简单；
3. 支持超过 35 个 DNS 提供商；
4. 可以使用插件支持更多的提供商；
5. 对 DNS 使用 CI/CD 原则：单元测试、系统测试、自动部署；
6. 可以开关 Cloudflare 的代理；

对我来说，这意味着我可以在本地打开我最喜欢的编辑器（Neovim）编辑 DNS 记录，然后推送到远程 Git 仓库并利用 Forgejo/GitHub Action 将变更的记录推送给 DNS 提供商，不用打开浏览器、登录，然后找到 DNS 控制面板，再等待加载。DNSControl 还有预览功能，`dnscontrol preview`，避免误操作。迁移也很方便，可以用 `dnscontrol get-zone` 获取已有的 DNS 记录。

如果你也想使用 DNSControl，可以参考 Sukka 大佬编写的《[用代码和 Git 管理 DNS 记录 —— DNSControl 和 GitHub Actions CI/CD 实践](https://blog.skk.moe/post/dns-as-code-via-dnscontrol/)》。如果你不介意读英文，也愿意忍受我的凌乱笔记结构的话，我有一个简练的版本：[DNSControl Setup](https://jar.geedea.pro/notes/dnscontrol/)。

_不过，未来有没有机会用 Lisp 写 DNS 记录呢？_

访问：[DNSControl](https://dnscontrol.org/)

### LibreSprite

想要画一个 [88x31](https://indieweb.org/88x31) 小按钮，所以第一步是从源代码编译绘图软件！[^1]然后 CMake 成功了，Ninja 编译失败了，不熟悉 C++ 的编译系统，照着 [aseprite](https://www.aseprite.org/) 的安装文档操作也难免做额外的功课，索性直接放弃。

_[狐工智能](https://blog.southfox.me/)：所以为什么不用 LibreSprite？_

_啊什么，居然有 Fork 吗？_

[LibreSprite](https://libresprite.github.io/) 是自由软件，是 aseprite 的分支，可以免费下载使用。不过最新的 1.1 版本和预发布的 1.2 版本对 macOS 的支持都有[问题](https://github.com/LibreSprite/LibreSprite/issues/594)，macOS 用户可以暂时使用 [1.0](https://github.com/LibreSprite/LibreSprite/releases/tag/v1.0) 版本。

访问：[LibreSprite](https://libresprite.github.io/)

[^1]: aseprite 是开源的商业软件，买断价格是 $19.99。如果不想花钱，也可以自己从源代码编译，可以合法地免费使用。不过，尽管开源，aseprite 并不是自由软件。
