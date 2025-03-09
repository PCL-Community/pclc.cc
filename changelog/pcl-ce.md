---
layout: doc
---

# PCL CE 版本更新日志

## 2.10.12 362

**此版本基于主线版本 2.8.13**

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

### 技术性更改

- 统一了 Mod、资源包、光影包的管理实现 (PR @tangge233 / #299 )

---

完整记录: https://github.com/PCL-Community/PCL2-CE/compare/2.10.3...2.10.4

---

2.10.4（内部版本 362）

| 构建文件版本 | SHA-256 |
|----|----|
| x86_64 FR | 6528DCB24419ED9E4F8F313E3DEEBBE2DDD53C00B76FC414310B0DC84CDF2A43 |
| ARM64 FR | 1BA578E8779070320F14D06CACFF8C0B331BE550168B6E725E948F019DFD5026 |