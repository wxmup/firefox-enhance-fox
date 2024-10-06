user_pref("content.notify.interval", 50000); // 增加响应速度，将间隔降低至50ms

// PREF: Webrender tweaks
user_pref("gfx.webrender.all", true); // 启用WebRender和附加功能
user_pref("gfx.webrender.precache-shaders", true); // 预缓存着色器，可能导致初次启动时间较长
user_pref("gfx.webrender.compositor", true); // 启用WebRender合成器
user_pref("gfx.webrender.compositor.force-enabled", true); // 强制启用WebRender合成器

// PREF: GPU-accelerated Canvas2D
user_pref("gfx.canvas.accelerated", true); // 使用GPU加速Canvas2D
user_pref("gfx.canvas.accelerated.cache-items", 8192); // 提高缓存项目数，默认2048
user_pref("gfx.canvas.accelerated.cache-size", 1024); // 提高缓存大小，默认256
user_pref("gfx.content.skia-font-cache-size", 20); // 提高字体缓存大小，默认5

// PREF: prefer GPU over CPU
user_pref("layers.gpu-process.enabled", true); // 启用GPU进程
user_pref("layers.gpu-process.force-enabled", true); // 强制启用GPU进程
user_pref("layers.mlgpu.enabled", true); // 启用多层GPU处理
user_pref("media.hardware-video-decoding.enabled", true); // 启用硬件视频解码
user_pref("media.hardware-video-decoding.force-enabled", true); // 强制启用硬件视频解码
user_pref("media.gpu-process-decoder", true); // 使用GPU进程解码视频
user_pref("media.ffmpeg.vaapi.enabled", true); // 启用FFmpeg VAAPI硬件加速解码

// PREF: disable AV1 for hardware decodeable videos
user_pref("media.av1.enabled", false); // 禁用AV1解码，确保使用硬件支持的视频编码格式

// 禁用磁盘缓存
user_pref("browser.cache.disk.enable", false);
// 启用内存缓存
user_pref("browser.cache.memory.enable", true);
// 设置内存缓存大小为2GB（2097152KB）
// 如果您想设置为4GB，请将值改为4194304
user_pref("browser.cache.memory.capacity", 4194304);

/*
// PREF: disk cache size
user_pref("browser.cache.disk.smart_size.enabled", false); // 禁用智能大小管理
user_pref("browser.cache.disk.capacity", 1024000); // 设置磁盘缓存大小为1GB
user_pref("browser.cache.disk.max_entry_size", 51200); // 最大缓存对象大小为50MB*/

// PREF: Race Cache With Network (RCWN) [FF59+]
user_pref("network.http.rcwn.enabled", true); // 启用RCWN

// PREF: cache memory pool
user_pref("browser.cache.disk.metadata_memory_limit", 500); // 提高元数据内存限制到500KB
// 副作用：占用更多内存资源，但会加快缓存元数据的访问速度。

// PREF: enforce free space checks
user_pref("browser.cache.disk.free_space_soft_limit", 10240); // 提高软限制到10MB
user_pref("browser.cache.disk.free_space_hard_limit", 2048); // 提高硬限制到2MB
// 副作用：占用更多磁盘空间，但有助于避免缓存填满磁盘。

user_pref("browser.cache.memory.max_entry_size", 10240);// 增加最大内存缓存条目大小到10MB
// 副作用：增加内存使用，但对你的32GB内存配置影响较小，提升性能。

// PREF: media memory cache
user_pref("media.memory_cache_max_size", 65536); // 增加内存缓存大小到64MB
user_pref("media.memory_caches_combined_limit_kb", 1048576); // 增加内存缓存上限到1GB
user_pref("media.memory_caches_combined_limit_pc_sysmem", 10); // 使用系统内存的10%作为媒体缓存
// 副作用：占用更多内存资源，但能提升媒体播放性能。

// PREF: adjust video buffering periods when not using MSE (in seconds)
user_pref("media.cache_readahead_limit", 7200); // 提高读取提前限制到120分钟
user_pref("media.cache_resume_threshold", 3600); // 提高恢复阈值到60分钟
// 副作用：占用更多内存资源，但能提升视频缓冲性能。

user_pref("image.mem.decode_bytes_at_a_time", 32768); // 增加解码块大小到32KB
// 副作用：占用更多内存资源，但能提升图片加载性能。

// PREF: use bigger packets
user_pref("network.buffer.cache.size", 262144); // 增加缓冲区大小到256KB
user_pref("network.buffer.cache.count", 128); // 增加缓冲区数量到128
// 副作用：可能导致无法打开大于4MB的HTML文件，但能减少CPU使用，提高网络性能。

// PREF: increase the absolute number of HTTP connections
user_pref("network.http.max-connections", 1800); // 增加最大HTTP连接数到1800
user_pref("network.http.max-persistent-connections-per-server", 10); // 增加每个服务器的最大持久连接数到10
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5); // 增加每个主机的最大紧急启动连接数到5
// 副作用：增加内存和带宽使用，但能提高并发下载和网页加载性能。

// PREF: pacing requests [FF23+]
user_pref("network.http.pacing.requests.enabled", false); // 禁用请求节奏控制
user_pref("network.http.pacing.requests.min-parallelism", 10); // 增加最小并行请求数到10
user_pref("network.http.pacing.requests.burst", 14); // 增加突发请求数到14
// 副作用：可能增加网络负载，但能提升页面加载速度，特别是对于快速网络连接。

// PREF: increase DNS cache
user_pref("network.dnsCacheEntries", 1000); // 增加DNS缓存条目到1000
// 副作用：占用更多内存资源，但能减少DNS查询次数，提升网页访问速度。

// PREF: adjust DNS expiration time
user_pref("network.dnsCacheExpiration", 3600); // DNS缓存条目保持1小时
user_pref("network.dnsCacheExpirationGracePeriod", 240); // 增加到期宽限期到4分钟
// 副作用：占用更多内存资源，但能减少频繁的DNS查询。

// PREF: increase TLS token caching
user_pref("network.ssl_tokens_cache_capacity", 10240); // 增加TLS令牌缓存容量到10240
// 副作用：占用更多内存资源，但能加快安全连接的重建速度。

// PREF: link-mouseover opening connection to linked server
user_pref("network.http.speculative-parallel-limit", 20); // 增加预测连接数到20
// 副作用：增加网络负载和内存使用，但能加快网页加载速度，特别是预加载链接时。

user_pref("network.fetchpriority.enabled", true);
// 副作用：启用Fetch Priority API，可以提升关键资源的加载优先级，减少延迟。可能增加对某些资源的优先级管理复杂性，但总体上提升性能。

// PREF: early hints [FF120+]
user_pref("network.early-hints.enabled", true);
// 副作用：启用早期提示可以加快页面加载速度，但可能增加服务器负载。

// PREF: `Link: rel=preconnect` in 103 Early Hint response [FF120+]
user_pref("network.early-hints.preconnect.enabled", true);
// 副作用：启用预连接可以加快跨域资源的连接速度，减少延迟。可能增加网络负载。

user_pref("network.predictor.max-resources-per-entry", 250); // 增加最大资源数到250
user_pref("network.predictor.max-uri-length", 1000); // 增加最大URI长度到1000
// 副作用：增加最大资源数和URI长度，提高网络预测的覆盖范围，但可能增加内存使用和带宽消耗。

// PREF: CSS Masonry Layout [NIGHTLY]
user_pref("layout.css.grid-template-masonry-value.enabled", true);
// 副作用：启用CSS Masonry Layout，可以提升布局性能，但可能会遇到不完全兼容的情况。

// PREF: Prioritized Task Scheduling API [NIGHTLY]
user_pref("dom.enable_web_task_scheduling", true);
// 副作用：启用优先任务调度API，可以提升网页的任务调度性能，但可能存在实验性功能的不稳定性。

// PREF: WebGPU [HIGHLY EXPERIMENTAL!]
user_pref("dom.webgpu.enabled", true);
user_pref("gfx.webgpu.force-enabled", true); // enforce
user_pref("dom.webgpu.indirect-dispatch.enabled", true);
// 副作用：启用WebGPU可以大幅提升图形性能，但目前为实验性功能，可能导致不稳定性和兼容性问题。

// PREF: determine when tabs unload [WINDOWS] [LINUX]
user_pref("browser.low_commit_space_threshold_mb", 21120); // 32GB内存的2/3
// 副作用：设置较高的内存阈值，可以更早地卸载不活跃的标签页，节省内存，但可能增加标签页重新加载的频率。

// PREF: determine when tabs unload [LINUX]
user_pref("browser.low_commit_space_threshold_percent", 33); // 增加到33%
// 副作用：在内存使用超过33%时卸载标签页，可以节省内存，但可能增加标签页重新加载的频率。

// PREF: determine how long (in ms) tabs are inactive before they unload
user_pref("browser.tabs.min_inactive_duration_before_unload", 300000); // 5分钟
// 副作用：设置为5分钟不活跃后卸载标签页，可以节省内存，但可能导致重新加载标签页时的延迟。

// PREF: process count
user_pref("dom.ipc.processCount", 8); // 设置为8个进程
// 副作用：增加进程数可以提升多任务处理性能，但可能增加内存和CPU使用。

// 顺滑的火狐滑动
// 适用于240hz刷新率
///  NATURAL SMOOTH SCROLLING V4 "SHARP" - AveYo, 2020-2022             preset     [default]
///  copy into firefox/librewolf profile as user.js, add to existing, or set in about:config
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS",   12);//NSS    [120]
user_pref("general.smoothScroll.msdPhysics.enabled",                    true);//NSS  [false]
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant",   250);//NSS   [1250]
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",       250);//NSS   [1000]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS",           25);//NSS     [12]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio",     "2.0");//NSS    [1.3]
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant",      250);//NSS   [2000]
user_pref("general.smoothScroll.currentVelocityWeighting",             "1.0");//NSS ["0.25"]
user_pref("general.smoothScroll.stopDecelerationWeighting",            "1.0");//NSS  ["0.4"]

/// adjust multiply factor for mousewheel - or set to false if scrolling is way too fast
user_pref("mousewheel.system_scroll_override.horizontal.factor",         200);//NSS    [200]
user_pref("mousewheel.system_scroll_override.vertical.factor",           200);//NSS    [200]
user_pref("mousewheel.system_scroll_override_on_root_content.enabled",  true);//NSS   [true]
user_pref("mousewheel.system_scroll_override.enabled",                  true);//NSS   [true]

/// adjust pixels at a time count for mousewheel - cant do more than a page at once if <100
user_pref("mousewheel.default.delta_multiplier_x",                       100);//NSS    [100]
user_pref("mousewheel.default.delta_multiplier_y",                       100);//NSS    [100]
user_pref("mousewheel.default.delta_multiplier_z",                       100);//NSS    [100]

///  this preset will reset couple extra variables for consistency
user_pref("apz.allow_zooming",                                          true);//NSS   [true]
user_pref("apz.force_disable_desktop_zooming_scrollbars",              false);//NSS  [false]
user_pref("apz.paint_skipping.enabled",                                 true);//NSS   [true]
user_pref("apz.windows.use_direct_manipulation",                        true);//NSS   [true]
user_pref("dom.event.wheel-deltaMode-lines.always-disabled",           false);//NSS  [false]
user_pref("general.smoothScroll.durationToIntervalRatio",                200);//NSS    [200]
user_pref("general.smoothScroll.lines.durationMaxMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.lines.durationMinMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.other.durationMaxMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.other.durationMinMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.pages.durationMaxMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.pages.durationMinMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.pixels.durationMaxMS",                   150);//NSS    [150]
user_pref("general.smoothScroll.pixels.durationMinMS",                   150);//NSS    [150]
user_pref("general.smoothScroll.scrollbars.durationMaxMS",               150);//NSS    [150]
user_pref("general.smoothScroll.scrollbars.durationMinMS",               150);//NSS    [150]
user_pref("general.smoothScroll.mouseWheel.durationMaxMS",               200);//NSS    [200]
user_pref("general.smoothScroll.mouseWheel.durationMinMS",                50);//NSS     [50]
user_pref("layers.async-pan-zoom.enabled",                              true);//NSS   [true]
user_pref("layout.css.scroll-behavior.spring-constant",                "250");//NSS    [250]
user_pref("mousewheel.transaction.timeout",                             1500);//NSS   [1500]
user_pref("mousewheel.acceleration.factor",                               10);//NSS     [10]
user_pref("mousewheel.acceleration.start",                                -1);//NSS     [-1]
user_pref("mousewheel.min_line_scroll_amount",                             5);//NSS      [5]
user_pref("toolkit.scrollbox.horizontalScrollDistance",                    5);//NSS      [5]
user_pref("toolkit.scrollbox.verticalScrollDistance",                      3);//NSS      [3]
///

// 关闭pocket
user_pref("extensions.pocket.enabled", false);

// 关闭Firefox 的标签管理器功能
user_pref("browser.tabs.tabmanager.enabled", false);

// 当这个选项设置为 true 时，在重新启动浏览器时，固定的标签页只有在用户点击时才会加载，而不是在浏览器启动时自动加载。
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);

user_pref("network.http.max-persistent-connections-per-proxy", 48);
user_pref("network.websocket.max-connections", 400);
user_pref("browser.urlbar.trimHttps", true);
// 禁用分类标签
user_pref("browser.urlbar.groupLabels.enabled", false);

//禁用遥测和崩溃报告
/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false, locked);
user_pref("datareporting.healthreport.uploadEnabled", false, locked);
user_pref("toolkit.telemetry.unified", false, locked);
user_pref("toolkit.telemetry.enabled", false, locked);
user_pref("toolkit.telemetry.server", "data:,", locked);
user_pref("toolkit.telemetry.archive.enabled", false, locked);
user_pref("toolkit.telemetry.newProfilePing.enabled", false, locked);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false, locked);
user_pref("toolkit.telemetry.updatePing.enabled", false, locked);
user_pref("toolkit.telemetry.bhrPing.enabled", false, locked);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false, locked);
user_pref("toolkit.telemetry.coverage.opt-out", true, locked);
user_pref("toolkit.coverage.opt-out", true, locked);
user_pref("toolkit.coverage.endpoint.base", "", locked);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false, locked);
user_pref("browser.newtabpage.activity-stream.telemetry", false, locked);
user_pref("app.shield.optoutstudies.enabled", false, locked);
user_pref("app.normandy.enabled", false, locked);
user_pref("app.normandy.api_url", "", locked);
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("dom.private-attribution.submission.enabled", false);

// 禁用about:config警告
user_pref("browser.aboutConfig.showWarning", false);

// Enable SVG context-propertes
user_pref("svg.context-properties.content.enabled", true);

// edge-friefox setting
// Enables the userChrome.css and userContent.css files.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
// Allows colours used in the theme to be mixed with others.
user_pref("layout.css.color-mix.enabled", true);
// Allows theme to use different colours for light/dark mode.
user_pref("layout.css.light-dark.enabled", true);
// Enables the CSS :has() selector, required for hide tabs toolbar tweak.
user_pref("layout.css.has-selector.enabled", true);
