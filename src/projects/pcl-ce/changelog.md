---
layout: doc
---

# PCL CE 版本更新日志

---

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