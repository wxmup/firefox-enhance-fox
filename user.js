// 平滑滚动
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 300); // 250-400; adjust this number to your liking

// // 关闭pocket
user_pref("extensions.pocket.enabled", false);
//
// // 当这个选项设置为 true 时，在重新启动浏览器时，固定的标签页只有在用户点击时才会加载，而不是在浏览器启动时自动加载。
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
//
// // 禁用about:config警告
user_pref("browser.aboutConfig.showWarning", false);

// 禁用firefox自带的残废翻译
user_pref("browser.translations.automaticallyPopup", false);
user_pref("browser.translations.enable", false);

// canvads2d
// 助于提升图形渲染的速度，但会占用更多内存。
user_pref("gfx.canvas.accelerated.cache-items", 32768); // default=2048; Chrome=4096
// 该设置控制 Canvas 缓存的大小（单位为 MB）。较大的缓存有助于提高图形渲染的速度
user_pref("gfx.canvas.accelerated.cache-size", 256); // default=256; Chrome=512
// Skia 是一种图形库，Firefox 用它来渲染文本和图形。较大的缓存有助于提高文本渲染的速度。
user_pref("gfx.content.skia-font-cache-size", 80); // default=5; Chrome=20

// 禁用全屏提示横幅的显示('xxx已进入全屏模式')
user_pref("full-screen-api.warning.timeout", 0);
user_pref("full-screen-api.warning.delay", -1);
// 全屏切换是即时的，不会有动画延迟。
user_pref("full-screen-api.transition-duration.enter", "0 0");
// 退出全屏时没有动画。
user_pref("full-screen-api.transition-duration.leave", "0 0");

// 启用此设置，Firefox 会将 https:// 部分从地址栏中隐藏，只显示域名部分，这使得网址看起来更简洁。
user_pref("browser.urlbar.trimHttps", true);
// 启用此设置时，地址栏将在用户点击或编辑地址时恢复完整显示，包含 https:// 前缀。
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);

// Firefox 不会在地址栏中显示一些当前的热门搜索或流行趋势。
user_pref('browser.urlbar.trending.featureGate', false);
// 如果启用此设置，Firefox 会允许你从地址栏直接粘贴并识别剪贴板中的内容（如 URL、文本等）。此功能可以自动识别剪贴板中的内容，并根据其类型为用户提供相应的操作建议或提示。
user_pref('browser.urlbar.clipboard.featureGate', true);

// PDF
// 启用高亮浮动按钮：这个设置控制在 PDF 文件视图中是否显示一个浮动的高亮按钮。如果启用（设置为 true），在浏览 PDF 文件时，将显示一个按钮，允许你快速高亮文件中的文本。
user_pref('pdfjs.enableHighlightFloatingButton', true);

// 浏览器在弹出通知时显示网站的图标（favicon）
user_pref("alerts.showFavicons", true);

// tab设置
// 即使关闭最后一个标签页，浏览器窗口仍然会保持打开状态。默认情况下，关闭最后一个标签页时，浏览器窗口也会关闭
user_pref("browser.tabs.closeWindowWithLastTab", false);
// 禁止显示书签工具栏
user_pref('browser.toolbars.bookmarks.visibility', 'never');
// 当你在书签菜单中点击某个书签时，菜单不会自动关闭
user_pref("browser.bookmarks.openInTabClosesMenu", false);
// 当你右键单击网页上的图片时，会有一个“查看图像信息”的选项，可以查看图像的详细信息（例如尺寸、URL、格式等）。
user_pref("browser.menu.showViewImageInfo", true);

// 隐私
// 防止浏览器向服务发送用户的归因数据。
user_pref('dom.private-attribution.submission.enabled', false);

// Firefox 会允许通过加密媒体扩展播放受保护的视频或音频内容（如 Netflix 或其他需要 DRM 的流媒体服务）。
user_pref('media.eme.enabled', true);

// 禁用崩溃报告
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// Network
// 紧急连接是指请求优先处理的连接，比如用户点击链接时，浏览器会尽量优先加载相关资源。将此设置为 5 表示每个主机最多允许 5 个紧急连接。
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
// DNS 查询的结果将缓存 1 小时。超出该时间，缓存会被刷新，重新进行 DNS 查询。
user_pref("network.dnsCacheExpiration", 3600);
// 持久连接是指在一个 TCP 连接上发送多个 HTTP 请求，以提高效率。默认值为 32，设置为 48 会增加每个代理的最大持久连接数，从而提高网络性能（特别是在代理服务器上进行大量请求时）。
user_pref("network.http.max-persistent-connections-per-proxy", 48); // default=32
// 设置为 400 表示 Firefox 允许最多 400 个 WebSocket 连接。默认值为 200，增加此值有助于处理更多的实时连接。
user_pref("network.websocket.max-connections", 400); // default=200
// SSL 令牌缓存用于存储与 SSL/TLS 连接相关的信息，以减少重复的 SSL 握手过程，从而提高性能。设置为 32768 表示缓存容量为 32768 个条目。
user_pref("network.ssl_tokens_cache_capacity", 32768);

// 下载
// 阻止下载完成后弹出的提示，可能会简化用户体验
user_pref("extensions.postDownloadThirdPartyPrompt", false);
// 每当下载一个新类型的文件时，Firefox 会弹出提示询问用户如何处理该文件类型（例如选择是保存还是打开）
user_pref("browser.download.always_ask_before_handling_new_types", true);

// 字节码缓存策略 是 Firefox 为提高 JavaScript 脚本加载速度而引入的一种优化机制。2的意思是：启用优化缓存策略
user_pref('dom.script_loader.bytecode_cache.strategy', 2);

// 同站点 Cookie 不必一定只通过 HTTPS 发送
user_pref("network.cookie.sameSite.noneRequiresSecure", false);

// JPEG XL 是一种新型的图像编码格式，提供更高的压缩率和更好的图像质量。此设置默认启用，有助于浏览器支持最新的图像格式，提高加载速度和图片质量。
user_pref('image.jxl.enabled', true);

// 当鼠标悬停在 HTTPS 链接上时，Firefox 会预加载这些链接的内容（即使未点击链接）。
user_pref("network.predictor.enable-hover-on-ssl", true);
// 可以在同一时间并行预获取最多 10 个请求。
user_pref("network.http.speculative-parallel-limit", 10);

// 此设置启用访问浏览器的“Chrome”级别的调试工具，使开发者能够查看和修改 Firefox 浏览器的 UI 元素、扩展和其他内部部分。
user_pref("devtools.chrome.enabled", true);

// 启用 WebRender GPU 加速。提高浏览器渲染性能，尤其在处理图形密集型内容（例如视频、动画等）时，可以提供更流畅的体验。
user_pref('gfx.webrender.all', true);

// // Linux 系统上设置视频硬件加速
// user_pref('media.ffmpeg.vaapi.enabled', true);
// user_pref('media.ffmpeg.encoder.enabled', true);

// 禁用代理服务器，直接连接到互联网。tun模式需要
user_pref("network.proxy.type", 0);

// 浏览器会显示由 Unicode 字符转换过来的 Punycode 形式（例如，显示域名中的非 ASCII 字符）。这是防止恶意域名欺骗用户的安全措施。
user_pref("network.IDN_show_punycode", true);

// 处理遥测
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("datareporting.usage.uploadEnabled", false);

// 禁用私密浏览模式中的 VPN 推广 URL
user_pref("browser.privatebrowsing.vpnpromourl", "");
// 禁用扩展推荐功能
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
// Firefox 不在新标签页中展示 Mozilla 的“发现页面”内容，该页面包含新闻、广告和其他推荐内容。禁用此设置可以让浏览器更简洁，避免显示这些推荐内容。
user_pref("browser.discovery.enabled", false);
// 禁用新标签页上的扩展推荐。
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
// 禁用这些推荐内容。
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
// 禁用“更多来自 Mozilla”的推荐
user_pref("browser.preferences.moreFromMozilla", false);

// 媒体缓存和性能优化
// 控制媒体内存缓存的最大大小。增加此缓存大小有助于提升媒体播放的性能，尤其是在播放大文件或高清视频时。
user_pref("media.memory_cache_max_size", 1048576);
// 控制媒体缓存预读取的限制。设置为 9000 表示最多预读取 9 MB 的数据。这有助于避免在播放过程中出现缓冲，尤其是在网络不稳定时。
user_pref("media.cache_readahead_limit", 9000);
// 控制媒体缓存恢复的阈值。3600 表示恢复播放时需要缓存至少 3600 秒（即 1 小时）的内容。
user_pref("media.cache_resume_threshold", 3600);
// 控制媒体内存缓存的总大小限制。设置为 2560000 表示最大缓存为 2.5 GB。更大的缓存可以提高媒体播放的性能，但也会消耗更多的内存。
user_pref("media.memory_caches_combined_limit_kb", 2560000);

// Firefox 解码图像时，一次解码多少字节的数据。这个设置会影响图像解码的性能，特别是在加载大图像时。较大的解码块可以提高解码速度，因为它减少了处理时间和 I/O 操作的次数。然而，较小的解码块可能有助于优化内存使用，避免占用过多的内存，尤其是在处理大量图像时。
user_pref("image.mem.decode_bytes_at_a_time", 32768);

// Enable GPU by default
// 启用 Canvas 加速
user_pref("gfx.canvas.accelerated", true);
// 启用硬件视频解码
user_pref("media.hardware-video-decoding.enabled", true);
// 启用 GPU 进程处理图层
user_pref("layers.gpu-process.enabled", true);

// 关闭自动禁用网站的声音
user_pref("media.autoplay.default", 0);

// whitesur fiefox theme主题设置
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.tabs.drawInTitlebar", true);
user_pref("browser.uidensity", 0);
user_pref("layers.acceleration.force-enabled", true);
user_pref("mozilla.widget.use-argb-visuals", true);
user_pref("widget.gtk.rounded-bottom-corners.enabled", true);
user_pref("svg.context-properties.content.enabled", true);


// 禁用掉脑残的按下‘/’键就启动‘快速搜索’
user_pref("accessibility.typeaheadfind.manual",
false);

// 干掉火狐脑瘫的页面保护
user_pref("extensions.webextensions.restrictedDomains", "");

// 访问网页时替代被阻止的脚本或嵌入式内容，以确保网页的功能性不受影响。
user_pref("extensions.webcompat.smartblockEmbeds.enabled", true);

// 禁用磁盘缓存
user_pref("browser.cache.disk.enable", false);

// 禁用浏览器自带ai对话
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.shortcuts", false);
user_pref("browser.ml.chat.shortcuts.custom", false);
user_pref("browser.ml.chat.sidebar", false);
user_pref("browser.ml.enable", false);

// 更改firefox打开标签页逻辑
user_pref("browser.tabs.loadInBackground", false);

// 禁用标签页内容预览
user_pref("browser.tabs.hoverPreview.enabled", false);

// 禁用cookie提示横幅
user_pref("cookiebanners.service.mode", 0);
user_pref("cookiebanners.service.mode.privateBrowsing", 0);

// 实验性提高性能
user_pref("javascript.options.baselinejit.threshold", 50);
user_pref("javascript.options.ion.threshold", 5000);
user_pref("network.buffer.cache.size", 65535);
user_pref("browser.display.auto_quality_min_font_size", 0);
user_pref("javascript.options.concurrent_multiprocess_gcs.cpu_divisor", 8);
user_pref("javascript.options.baselinejit.threshold", 50);
user_pref("dom.timeout.throttling_delay", 40);
user_pref("dom.timeout.budget_throttling_max_delay", 0);
user_pref("network.buffer.cache.count", 48); // default=24

// 启用kde自己的文件管理器，而不使用gtk自己的文件管理器，因为很难用。
user_pref("widget.use-xdg-desktop-portal.file-picker", 1);



