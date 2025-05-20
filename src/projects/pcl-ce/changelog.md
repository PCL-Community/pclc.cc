---
layout: doc
---

# PCL CE 版本更新日志

---

::: timeline 2.11.1

**此版本基于主线版本 2.10.0**

---

### 新功能

- 支持简单查询 Minecraft 服务器信息 (@tangge233 / #607 )

### 优化

- 重构资源下载界面的 UI (@tangge233 / #627 )
- 加入翻译缓存，减少 API 调用的同时提高响应速度 (@tangge233 / #628 )
- 离线登录档案优化 (@Pigeon0v0 ,@Harry-hq / #615 ,#626)
- 离线档案界面优化 (@xphost008 / #612 )
- 改进用户档案的部分功能 (@Pigeon0v0 / #600 )
- 错误报告加入独立的环境信息 (@Pigeon0v0 / #599 )
- 修正隐藏功能中的选项卡信息 (@SherkeyXD / #596 )
- 优化运行环境表述文本 (@tangge233 ,@MoYuan-CN / #636 ,#624 )
- 允许取消强制要求高性能显卡 (@tangge233 ,@FlameFire26 / #651 ,#496 )

### Bug 修复

- 版本资源跳转存在问题 (@Pigeon0v0 / #618 )
- 非模组资源的下载界面会不显示内容 (@Pigeon0v0 ,@magojohnji / #616 ,#603 )
- 未自定义 Log4j2 参数时会不输出 debug.log (@Pigeon0v0 / #613 )
- 标题栏居左时可能崩溃 (@Pigeon0v0 / #609 )
- 档案请求失败时可能会崩溃 (@shimoranla / #608 )
- 自动进服选项无效 (@tangge233 ,@fsfgrafb / #629 ,#602 )
- 档案描述错误 (@tangge233 ,@COPYFALSE / #635 ,#632)
- 可能由于数据同步问题导致的 null (@tangge233 ,@zhangzihan114514 / #647 ,#646 )
- Quilt 安装失败 (@tangge233 / #649 )
- 反馈时实时日志定位异常 (@CiiLu / #653 )
- 修复迁移时的 Uuid 获取问题 (@tangge233 )

### 技术性更改

- 换用 HttpClient 进行高性能的 Http 通信 (@tangge233 , @shimoranla / #584 , #611 )
- 加入可选的用户使用环境调查 (@Pigeon0v0 / #606 )

---

完整记录: https://github.com/PCL-Community/PCL2-CE/compare/2.11.0a...2.11.1a

:::

::: timeline 2.11.0

**此版本基于主线版本 2.10.0**

---

### 更新亮点

#### 账户系统重做 --- @Pigeon0v0 & @Hill23333 / #390 & #579
- 支持同时登录多个正版档案
- 正版验证现在可以调用系统 Web 账户管理器（WAM），直接使用已登录的微软账号进行验证（感谢 @Hill23333 / #579 ）
- 现在使用第三方验证不需要针对版本独立设置了
- 移除了统一通行证相关内容
- 支持针对版本设置验证方式要求并锁定
- 离线验证档案现在支持生成符合行业规范的 UUID，也可以自定义
- 暂时移除离线皮肤功能
- 支持导入 HMCL 全局档案或导出档案至 HMCL，部分档案将需要重新验证

<details>
<summary>截图预览</summary>

![image](https://github.com/user-attachments/assets/7311b0af-ec2b-4b7c-b408-35183a329bba)

![image](https://github.com/user-attachments/assets/49857d9a-10b4-4d00-8cdd-0a8b8aedd3ee)

![image](https://github.com/user-attachments/assets/e937b5e2-98ae-47e5-890f-1dc0ee6f2406)

![image](https://github.com/user-attachments/assets/9484aa6c-8d88-42ad-9eeb-274874f375cd)

</details>

### 支持 LabyMod 自动安装 --- @EncVar / #509 
- 支持在自动安装和版本修改界面安装 LabyMod
- 支持启动 LabyMod 版本

<details>
<summary>截图预览</summary>

![image](https://github.com/user-attachments/assets/9c6db713-d847-4470-80fa-c5c575a632f6)

</details>

---

以下为其他更改：

### 新功能

- 同步上游 2.10.0 代码（@shimoranla / #513 等，另请参阅 [上游更新日志](https://github.com/Hex-Dragon/PCL2/releases/tag/2.10.0)）
- 再次支持 MCIM 社区资源镜像（@shimoranla / #536 ）
- 使用 RetroWrapper 修复较旧版本 MC 的相关功能，如皮肤等（@zkitefly / #473 ）
- 实时日志界面支持导出游戏运行栈 (@Ciilu / #585 )
- 支持启动器公告功能（@tangge233 / #541 ）

### 优化

- 深色模式配色改进，现在标题栏不瞎眼了（@Hill23333 / #547 ）
- 版本修改界面允许进行版本重置 (@Pigeon0v0 / #548 )
- 允许启动器跟随系统代理设置（@wyc-26 / #481 ）
- 手动安装包增加 Cleanroom 图标（@wyc-26 / #506 ）
- 支持隐藏部分版本设置功能（@Pigeon0v0 / #546 ）
- 更换披风时自动选中当前使用的披风（@ruattd / #540 ）
- 安装新版本后自动选定该版本（@Pigeon0v0 / #550 ）
- 更改了导出资源列表的文本介绍（@tangge233 / #545 ）

### Bug 修复

- Cleanroom 和 LabyMod 版本分类错误（@Pigeon0v0 / #548 ）
- 不能正确读取 Cleanroom 版本信息（@Pigeon0v0 / #528 ）
- 重置个性化设置时可能抛出空指针异常（@ruattd / #527 ）
- 标题栏文本导致 CE 图标消失（@youzi-3222 / #460 ）
- 遇到无法加载的字体可能会崩溃（@tangge233 / #544 ）
- 版本修改重置 Forge 可能失败，NeoForge 和 Cleanroom 也存在同样问题，后两者暂时没修（@Pigeon0v0 / #553 ）
- 修改存在版本继承的版本时尝试备份并不存在的 JAR 文件（@Pigeon0v0 / #555 ）
- 系统代理的设置可能不正确 (@shimoranla / #593 )
- 单选按钮颜色渐变问题 (@Hill23333 / #549 )

### 技术性更改

- 改用 Webhook 处理 Issues（@SALTWOOD / #508 ）
- 重做了启动器本体更新（@tangge233 / #541 ）
- 使用了新的版本号规则，现在 CE 的版本号不再会和正式版重复了

---

完整记录: https://github.com/PCL-Community/PCL2-CE/compare/2.10.7...2.11.0a

:::

::: timeline 2.10.7

**此版本基于主线 2.9.2 制作**

---

### 新功能
- 支持 Mod 列表多选收藏 #443 by @youzi-3222 

### Bug 修复
- 资源管理查看存档崩溃 by @EncVar 
- 更新 UVMC 服务器地址 #465 by @zkitefly 

---

**完整记录**: https://github.com/PCL-Community/PCL2-CE/compare/2.10.6...2.10.7


:::

::: timeline 2.10.6

**此版本基于主线 2.9.2 制作**

---

### 新功能

- feat(CompExportInfo): 允许导出资源信息 #380 by @tangge233
- 支持启动游戏之后直接进入存档 #432 by @EncVar

### 优化

- 迁移配置文件，不再使用注册表，使用 AES 加密部分信息 #396 by @tangge233
- 标题栏 SVG 使用实心颜色 #444 by @youzi-3222 
- 资源列表排序现在忽略大小写了 #382 by @MoYuan-CN
- 改进了 SMTC 获取信息的方式 #445 by @Hill23333
- 系统版本过低警告；社区版提示现在开始每次更新总会弹出 #453 by @Pigeon0v0
- 尝试改进了实时日志的性能
- 更改反馈链接 #423 by @shimoranla

### Bug 修复

- HTTP 代理提示信息不正确 #399 by @ineptchan
- 某些字体无法正确显示 CE 标题 #409 by @youzi-3222
- 允许分享空收藏夹 #446 by @SALTWOOD
- 修改版本界面可能会因不支持的 Mod 加载器报错
- 版本修改的加载器选择可能不正确

### 技术性更改

- GitHub Action 产物现在会添加 Commit ID #452 by @z0z0r4

---

**完整记录**: https://github.com/PCL-Community/PCL2-CE/compare/2.10.5...2.10.6

:::

::: timeline 2.10.5 (365)

**此版本基于主线 2.9.2 制作**

### 修复

- 在 Java 列表上滚动鼠标会导致后方页面也滚动的问题 (@tangge233 / #369 )
- Cleanroom 选择后错误提示可添加 OptiFine (@tangge233 / #362 )
- 版本修改功能无法使用 (@tangge233 / #356 )
- Mod 更新会更新到不正确的版本 (@tangge233 / #319 )
- 深色模式下部分控件显示不正确 (@tangge233 / #375 )
- 大量实时日志下界面会假死 (@tangge233 / #363 )
- 资源排序按文件名称排序不应当区分大小写 (@MoYuan-CN / #381 )

### 新功能

- 支持切换程序字体 (@tangge233 )
- 支持导出资源详细信息 (@tangge233 )

### 小改动

- 修改了修改页面的风格以便与新 UI 统一 (@tangge233 )
- 同步资源下载预设版本选择 (@MoYuan-CN )

---

完整记录: https://github.com/PCL-Community/PCL2-CE/compare/2.10.4...2.10.5

:::

::: timeline 2.10.4 (363)

**此版本基于主线版本 2.9.1**

### 更新亮点

- 添加了 Cleanroom 自动安装及相关支持

![image](https://github.com/user-attachments/assets/263ff708-e95f-434a-8266-ac17f7bae546)

- 资源包、光影包的管理实现与 Mod 管理统一，现已支持更新等操作

![image](https://github.com/user-attachments/assets/56584005-2817-4133-a2b3-1af3222add62)

### 新功能

- Cleanroom 自动安装及相关支持 (PR @Pigeon0v0 / #310 )
- 资源包和光影包管理支持更多操作 (PR @tangge233 / #299 )
- 复活了内存优化功能 (PR @Hill23333 / #292 )
- 实验性：允许重置版本以补全部分 Libraries (PR @Pigeon0v0 / #287 )

### 优化

- 对排序算法进行了优化，现在 Mod 管理不卡了 (@JustQiyi / #285 ; PR @tangge233 / #286 )
- 自动安装修改现在会同时显示版本的修改前信息和修改后信息 (PR @Pigeon0v0 / #287 )

### Bug 修复

- 意外地将 Quilt Mod 更新为 NeoForge 版本 (@Lithum-12 / #296 ; PR @3gf8jv4dv / #298 )
- 在关闭文件校验选项开启时也始终校验 Libraries (PR @Pigeon0v0 / #310 )
- 在更新通道切换后误认为不是最新版本 (PR @tangge233 / #343 )
- 在浅色模式下实时日志的部分颜色显示不正确 (PR @tangge233 / #335 )
- 由于合并上游导致的默认选择高性能 Java 选项丢失 (PR @tangge233 / d580e422f83c1e553e3b9e2c637d9d1c3bf246ec)

### 技术性更改

- 修复更新服务器的链接错误 (PR @Pigeon0v0 / 5d7ac119bd95be7deeaaea1a044c4be411768edb )

---

完整记录: https://github.com/PCL-Community/PCL2-CE/compare/2.10.3...2.10.4

:::