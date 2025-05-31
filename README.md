Skip to content
Navigation Menu
caoxuhui1
26.Website-construction

Type / to search
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
Commit a7030ae
caoxuhui1
caoxuhui1
authored
now
Verified
曹旭辉-2024303120086-电子商务网站建设
main
1 parent 
b5db81a
 commit 
a7030ae
File tree
Filter files…
曹旭辉-2024303120086-电子商务网站.html
1 file changed
+1270
-0
lines changed
Search within code
 
‎曹旭辉-2024303120086-电子商务网站.html
+1,270
Lines changed: 1270 additions & 0 deletions
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,1270 @@
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>阿哲科技小店 - 您的科技产品商城</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
    <style>
        /* 全局样式 */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            padding-top: 56px;
            background-color: #f8f9fa;
        }
        
        /* 导航栏 */
        .navbar {
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            background-color: #343a40 !important;
        }
        
        /* 英雄区域 */
        .hero-section {
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 120px 0;
            margin-bottom: 40px;
        }
        
        /* 产品卡片 */
        .product-card {
            transition: all 0.3s ease;
            margin-bottom: 20px;
            border: none;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            background: white;
        }
        .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        .product-img {
            height: 200px;
            object-fit: contain;
            padding: 20px;
            background: #f8f9fa;
        }
        
        /* 购物车 */
        .cart-item {
            border-bottom: 1px solid #eee;
            padding: 15px 0;
        }
        .cart-item:last-child {
            border-bottom: none;
        }
        
        /* 特色区域 */
        .feature-box {
            padding: 30px;
            text-align: center;
            border-radius: 10px;
            margin-bottom: 30px;
            background: #f8f9fa;
            transition: all 0.3s ease;
            height: 100%;
        }
        .feature-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
        .feature-icon {
            font-size: 2.5rem;
            margin-bottom: 15px;
            color: #0d6efd;
        }
        .feature-img {
            height: 100px;
            object-fit: contain;
            margin-bottom: 15px;
        }
        
        /* 页脚 */
        footer {
            background: #343a40;
            color: white;
            padding: 40px 0 20px;
        }
        .footer-links a {
            color: rgba(255,255,255,0.7);
            text-decoration: none;
            display: block;
            margin-bottom: 8px;
        }
        .footer-links a:hover {
            color: white;
        }
        
        /* 内容页面样式 */
        .content-section {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            margin-bottom: 30px;
        }
        .content-section h2 {
            border-bottom: 2px solid #0d6efd;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        
        /* 用户系统 */
        .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #0d6efd;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
        
        /* 配送时间 */
        .delivery-time {
            background: #e7f1ff;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        .delivery-time h5 {
            color: #0a58ca;
        }
        
        /* 响应式调整 */
        @media (max-width: 768px) {
            .hero-section {
                padding: 80px 0;
            }
            .product-img {
                height: 150px;
            }
        }
    </style>
</head>
<body>
    <!-- 导航栏 -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">
                <i class="bi bi-laptop"></i> 阿哲科技小店
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#home">首页</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#products">商品</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">关于我们</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">联系我们</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="shoppingGuide" role="button" data-bs-toggle="dropdown">
                            购物指南
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#shoppingProcessModal">购物流程</a></li>
                            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#membershipModal">会员介绍</a></li>
                            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#faqModal">常见问题</a></li>
                            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#contactServiceModal">联系客服</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="deliveryDropdown" role="button" data-bs-toggle="dropdown">
                            配送方式
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#pickupModal">上门自提</a></li>
                            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#campusDeliveryModal">校园配送</a></li>
                            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#deliveryQueryModal">配送服务查询</a></li>
                            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#deliveryAreaModal">配送范围</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="d-flex">
                    <a href="#cartModal" class="btn btn-outline-light me-2 position-relative" data-bs-toggle="modal">
                        <i class="bi bi-cart3"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="cartCount">0</span>
                    </a>
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle d-flex align-items-center" type="button" id="userDropdown" data-bs-toggle="dropdown">
                            <div class="user-avatar me-2">张</div>
                            <span>我的账户</span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#loginModal"><i class="bi bi-box-arrow-in-right"></i> 登录</a></li>
                            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#registerModal"><i class="bi bi-person-plus"></i> 注册</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#wishlistModal"><i class="bi bi-heart"></i> 我的收藏</a></li>
                            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#ordersModal"><i class="bi bi-list-check"></i> 我的订单</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <!-- 首页内容 -->
    <main>
        <!-- 英雄区域 -->
        <section id="home" class="hero-section text-center">
            <div class="container">
                <h1 class="display-4 fw-bold mb-4">探索最新科技产品</h1>
                <p class="lead mb-5">高品质电子产品，满足您的数字生活需求</p>
                <a href="#products" class="btn btn-primary btn-lg px-4 me-2"><i class="bi bi-search"></i> 浏览商品</a>
                <a href="#promotions" class="btn btn-outline-light btn-lg px-4"><i class="bi bi-tag"></i> 促销活动</a>
            </div>
        </section>
        <!-- 特色服务 -->
        <section class="container mb-5">
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="feature-box">
                        <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                             class="feature-img" alt="快速配送">
                        <h3>快速配送</h3>
                        <p>校园内2小时内送达，校外24小时内送达，支持货到付款</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="feature-box">
                        <img src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                             class="feature-img" alt="正品保障">
                        <h3>正品保障</h3>
                        <p>所有商品均为官方正品，提供正规发票和质保证书</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="feature-box">
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                             class="feature-img" alt="无忧退换">
                        <h3>无忧退换</h3>
                        <p>7天无理由退换货，15天质量问题换货，全程贴心服务</p>
                    </div>
                </div>
            </div>
            
            <!-- 校内配送时限 -->
            <div class="delivery-time mt-4">
                <div class="row">
                    <div class="col-md-8">
                        <h5>校内配送时限</h5>
                        <p class="mb-1">工作日配送时间：08:00 - 22:00</p>
                        <p class="mb-1">周末配送时间：09:00 - 20:00</p>
                        <p class="mb-0">校园区域下单后2小时内送达，宿舍区可预约配送时间</p>
                    </div>
                    <div class="col-md-4 text-md-end">
                        <button class="btn btn-outline-primary mt-2" data-bs-toggle="modal" data-bs-target="#campusDeliveryModal">
                            查看详情 <i class="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <!-- 促销活动 -->
        <section id="promotions" class="container mb-5">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="mb-0">限时促销</h2>
                <a href="#" class="btn btn-sm btn-outline-primary">查看全部</a>
            </div>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="row g-0">
                            <div class="col-md-5">
                                <img src="https://cbu01.alicdn.com/img/ibank/O1CN01MXumDA1ZjOGkBetzU_!!2218157793230-0-cib.310x310.jpg" 
                                     class="img-fluid rounded-start h-100" alt="智能手表套装" style="object-fit: cover;">
                            </div>
                            <div class="col-md-7">
                                <div class="card-body">
                                    <span class="badge bg-danger mb-2">限时折扣</span>
                                    <h5 class="card-title">智能手表套装</h5>
                                    <p class="card-text">购买智能手表+无线耳机套装，立省300元</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <span class="text-danger fw-bold fs-4">¥1599</span>
                                            <span class="text-decoration-line-through text-muted ms-2">¥1899</span>
                                        </div>
                                        <button class="btn btn-primary btn-sm">立即抢购</button>
                                    </div>
                                    <div class="mt-3">
                                        <div class="progress">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small class="text-muted">剩余库存: 15件</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="row g-0">
                            <div class="col-md-5">
                                <img src="https://consumer.huawei.com/content/dam/huawei-cbg-site/cn/mkt/pdp/phones/p60-pro/list/black.png" 
                                     class="img-fluid rounded-start h-100" alt="华为Pura X" style="object-fit: cover;">
                            </div>
                            <div class="col-md-7">
                                <div class="card-body">
                                    <span class="badge bg-success mb-2">新品上市</span>
                                    <h5 class="card-title">华为 Pura X</h5>
                                    <p class="card-text">最新款旗舰手机，首销期间赠送一年延保</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <span class="text-danger fw-bold fs-4">¥5999</span>
                                        </div>
                                        <button class="btn btn-primary btn-sm">立即购买</button>
                                    </div>
                                    <div class="mt-3">
                                        <div class="progress">
                                            <div class="progress-bar bg-success" role="progressbar" style="width: 90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small class="text-muted">已售: 90%</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- 商品列表 -->
        <section id="products" class="container mb-5">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="mb-0">热门商品</h2>
                <div>
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-outline-secondary btn-sm active">全部</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm">手机</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm">电脑</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm">配件</button>
                    </div>
                    <a href="#" class="btn btn-sm btn-outline-primary ms-2">查看全部</a>
                </div>
            </div>
            <div class="row g-4">
                <!-- 商品1 - 智能手机 -->
                <div class="col-md-4 col-6">
                    <div class="card product-card h-100">
                        <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.tJGDhL8BvTR4EJyquOU5bgHaE8?rs=1&pid=ImgDetMain" 
                             class="card-img-top product-img" alt="OPPO Ren14">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <h5 class="card-title mb-0">OPPO Ren14</h5>
                                <span class="badge bg-success">热销</span>
                            </div>
                            <p class="card-text text-muted small">6.7英寸AMOLED屏幕，1亿像素主摄，骁龙8 Gen2处理器</p>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                    <span class="text-danger fw-bold">¥5999</span>
                                    <span class="text-decoration-line-through text-muted small ms-2">¥6499</span>
                                </div>
                                <button class="btn btn-sm btn-outline-primary add-to-cart" data-id="1">
                                    <i class="bi bi-cart-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 商品2 - 无线耳机 -->
                <div class="col-md-4 col-6">
                    <div class="card product-card h-100">
                        <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.KL05_V3cIeJsnvbr6GoIcgHaFY?rs=1&pid=ImgDetMain" 
                             class="card-img-top product-img" alt="降噪无线耳机">
                        <div class="card-body">
                            <h5 class="card-title">降噪无线耳机</h5>
                            <p class="card-text text-muted small">主动降噪技术，30小时续航，Hi-Res音质认证</p>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                    <span class="text-danger fw-bold">¥899</span>
                                </div>
                                <button class="btn btn-sm btn-outline-primary add-to-cart" data-id="2">
                                    <i class="bi bi-cart-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 商品3 - 智能手表 -->
                <div class="col-md-4 col-6">
                    <div class="card product-card h-100">
                        <img src="https://img4.pconline.com.cn/pconline/images/product/20240920/22530239.jpg" 
                             class="card-img-top product-img" alt="华为 GT5">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <h5 class="card-title mb-0">华为 GT5</h5>
                                <span class="badge bg-info">新品</span>
                            </div>
                            <p class="card-text text-muted small">1.78英寸AMOLED屏，血氧心率监测，50米防水</p>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                    <span class="text-danger fw-bold">¥1299</span>
                                    <span class="text-decoration-line-through text-muted small ms-2">¥1499</span>
                                </div>
                                <button class="btn btn-sm btn-outline-primary add-to-cart" data-id="3">
                                    <i class="bi bi-cart-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 商品4 - 平板电脑 -->
                <div class="col-md-4 col-6">
                    <div class="card product-card h-100">
                        <img src="https://ts1.tc.mm.bing.net/th/id/R-C.6b226e7c2c77a55e0b2184dede6b5c38?rik=7GbGVNbL3f5OCA&riu=http%3a%2f%2fwww.zuyushop.com%2fProPic%2f20181%2f201801000933075376.jpg&ehk=ITNuTOAjtoiBQVJsDwGkaXA0%2fGFUL1hl402eMttTYMM%3d&risl=&pid=ImgRaw&r=0" 
                             class="card-img-top product-img" alt="荣耀平板">
                        <div class="card-body">
                            <h5 class="card-title">荣耀平板</h5>
                            <p class="card-text text-muted small">11英寸2.8K屏幕，8扬声器，骁龙870处理器</p>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                    <span class="text-danger fw-bold">¥2499</span>
                                </div>
                                <button class="btn btn-sm btn-outline-primary add-to-cart" data-id="4">
                                    <i class="bi bi-cart-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 商品5 - 蓝牙音箱 -->
                <div class="col-md-4 col-6">
                    <div class="card product-card h-100">
                        <img src="https://img.alicdn.com/bao/uploaded/i4/2214315093531/O1CN010HCzEu1bxFHDVJ0Ku_!!2214315093531.jpg" 
                             class="card-img-top product-img" alt="索爱 S35Plus">
                        <div class="card-body">
                            <h5 class="card-title">索爱 S35Plus</h5>
                            <p class="card-text text-muted small">360°环绕音效，IP67防水防尘，24小时续航</p>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                    <span class="text-danger fw-bold">¥399</span>
                                    <span class="text-decoration-line-through text-muted small ms-2">¥499</span>
                                </div>
                                <button class="btn btn-sm btn-outline-primary add-to-cart" data-id="5">
                                    <i class="bi bi-cart-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 商品6 - 笔记本电脑 -->
                <div class="col-md-4 col-6">
                    <div class="card product-card h-100">
                        <img src="https://imgservice.suning.cn/uimg1/b2c/image/LIT05tH4F65wHUDUebAm9g.jpg" 
                             class="card-img-top product-img" alt="REDMI BOOK 16">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <h5 class="card-title mb-0">REDMI BOOK 16</h5>
                                <span class="badge bg-warning text-dark">限时</span>
                            </div>
                            <p class="card-text text-muted small">14英寸2.5K屏，第12代i7处理器，16GB内存</p>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                    <span class="text-danger fw-bold">¥6999</span>
                                </div>
                                <button class="btn btn-sm btn-outline-primary add-to-cart" data-id="6">
                                    <i class="bi bi-cart-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- 关于我们 -->
        <section id="about" class="container mb-5 py-5 bg-light rounded-3">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h2 class="mb-4">关于 阿哲科技小店</h2>
                    <p class="lead">我们致力于为华农师生提供优质的科技产品和便捷的购物体验。</p>
                    <p>阿哲科技小店成立于2023年，专注于为华中农业大学师生提供高品质的电子产品和服务。我们与各大品牌厂商建立直接合作，确保所有商品均为正品行货，并提供完善的售后服务。</p>
                    <p>我们的使命是通过技术创新改善校园生活，让每位师生都能享受到科技带来的便利和乐趣。</p>
                    <a href="#" class="btn btn-primary mt-3">了解更多</a>
                </div>
                <div class="col-md-6">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                         class="img-fluid rounded" alt="关于我们">
                </div>
            </div>
        </section>
        <!-- 联系我们 -->
        <section id="contact" class="container mb-5">
            <h2 class="text-center mb-5">联系我们</h2>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body">
                            <h3 class="card-title"><i class="bi bi-geo-alt"></i> 公司地址</h3>
                            <p class="card-text">华中农业大学狮子山街道博园6楼601室</p>
                            <h3 class="card-title mt-4"><i class="bi bi-telephone"></i> 联系电话</h3>
                            <p class="card-text">客服热线: 18699302103<br>工作时间: 周一至周日 9:00-21:00</p>
                            <h3 class="card-title mt-4"><i class="bi bi-envelope"></i> 电子邮件</h3>
                            <p class="card-text">客服邮箱: 3072898438@qq.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body">
                            <h3 class="card-title mb-4">发送消息</h3>
                            <form>
                                <div class="mb-3">
                                    <label for="name" class="form-label">您的姓名</label>
                                    <input type="text" class="form-control" id="name" required>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">电子邮箱</label>
                                    <input type="email" class="form-control" id="email" required>
                                </div>
                                <div class="mb-3">
                                    <label for="subject" class="form-label">主题</label>
                                    <input type="text" class="form-control" id="subject" required>
                                </div>
                                <div class="mb-3">
                                    <label for="message" class="form-label">消息内容</label>
                                    <textarea class="form-control" id="message" rows="4" required></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">发送消息</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <!-- 购物车模态框 -->
    <div class="modal fade" id="cartModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="bi bi-cart3"></i> 我的购物车</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div id="cartItems">
                        <!-- 购物车商品会动态添加到这里 -->
                        <div class="text-center py-5">
                            <i class="bi bi-cart-x text-muted" style="font-size: 3rem;"></i>
                            <p class="text-muted mt-3">购物车是空的</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-4 border-top pt-3">
                        <h5>总计: <span id="cartTotal">¥0</span></h5>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">继续购物</button>
                    <button type="button" class="btn btn-primary">去结算</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 登录模态框 -->
    <div class="modal fade" id="loginModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="bi bi-box-arrow-in-right"></i> 用户登录</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="loginEmail" class="form-label">电子邮箱</label>
                            <input type="email" class="form-control" id="loginEmail" required>
                        </div>
                        <div class="mb-3">
                            <label for="loginPassword" class="form-label">密码</label>
                            <input type="password" class="form-control" id="loginPassword" required>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="rememberMe">
                            <label class="form-check-label" for="rememberMe">记住我</label>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">登录</button>
                    </form>
                    <div class="text-center mt-3">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#registerModal" data-bs-dismiss="modal">没有账号？立即注册</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 注册模态框 -->
    <div class="modal fade" id="registerModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="bi bi-person-plus"></i> 用户注册</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="registerName" class="form-label">姓名</label>
                            <input type="text" class="form-control" id="registerName" required>
                        </div>
                        <div class="mb-3">
                            <label for="registerEmail" class="form-label">电子邮箱</label>
                            <input type="email" class="form-control" id="registerEmail" required>
                        </div>
                        <div class="mb-3">
                            <label for="registerPassword" class="form-label">密码</label>
                            <input type="password" class="form-control" id="registerPassword" required>
                        </div>
                        <div class="mb-3">
                            <label for="registerConfirmPassword" class="form-label">确认密码</label>
                            <input type="password" class="form-control" id="registerConfirmPassword" required>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">注册</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- 我的收藏模态框 -->
    <div class="modal fade" id="wishlistModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="bi bi-heart"></i> 我的收藏</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-info">
                        您已收藏了 <strong>5</strong> 件商品
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="card">
                                <div class="row g-0">
                                    <div class="col-4">
                                        <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.tJGDhL8BvTR4EJyquOU5bgHaE8?rs=1&pid=ImgDetMain" 
                                             class="img-fluid rounded-start" alt="OPPO Ren14" style="height: 100px; object-fit: cover;">
                                    </div>
                                    <div class="col-8">
                                        <div class="card-body py-2">
                                            <h6 class="card-title mb-1">OPPO Ren14</h6>
                                            <p class="card-text text-danger mb-1">¥5999</p>
                                            <button class="btn btn-sm btn-outline-primary">查看商品</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="card">
                                <div class="row g-0">
                                    <div class="col-4">
                                        <img src="https://img4.pconline.com.cn/pconline/images/product/20240920/22530239.jpg" 
                                             class="img-fluid rounded-start" alt="华为 GT5" style="height: 100px; object-fit: cover;">
                                    </div>
                                    <div class="col-8">
                                        <div class="card-body py-2">
                                            <h6 class="card-title mb-1">华为 GT5</h6>
                                            <p class="card-text text-danger mb-1">¥1299</p>
                                            <button class="btn btn-sm btn-outline-primary">查看商品</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 我的订单模态框 -->
    <div class="modal fade" id="ordersModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="bi bi-list-check"></i> 我的订单</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-info">
                        您最近有 <strong>3</strong> 笔订单
                    </div>
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h6 class="mb-1">订单 #20240531001</h6>
                                <small class="text-success">已完成</small>
                            </div>
                            <p class="mb-1">OPPO Ren14 + 华为 GT5</p>
                            <small>2023-05-28 下单 | 总金额: ¥7298</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h6 class="mb-1">订单 #20240530002</h6>
                                <small class="text-warning">配送中</small>
                            </div>
                            <p class="mb-1">索爱 S35Plus × 2</p>
                            <small>2023-05-25 下单 | 总金额: ¥798</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h6 class="mb-1">订单 #20240528003</h6>
                                <small class="text-danger">已取消</small>
                            </div>
                            <p class="mb-1">REDMI BOOK 16</p>
                            <small>2023-05-20 下单 | 总金额: ¥6999</small>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 购物指南相关模态框 -->
    <div class="modal fade" id="shoppingProcessModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="bi bi-cart"></i> 购物流程</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <ol>
                        <li class="mb-2"><strong>浏览商品</strong> - 在网站中浏览您感兴趣的商品</li>
                        <li class="mb-2"><strong>加入购物车</strong> - 点击"加入购物车"按钮将商品添加到购物车</li>
                        <li class="mb-2"><strong>查看购物车</strong> - 点击右上角购物车图标查看已选商品</li>
                        <li class="mb-2"><strong>结算</strong> - 确认商品信息后点击"去结算"按钮</li>
                        <li class="mb-2"><strong>填写收货信息</strong> - 填写准确的收货地址和联系方式</li>
                        <li class="mb-2"><strong>选择支付方式</strong> - 支持微信支付、支付宝、校园卡支付</li>
                        <li class="mb-2"><strong>完成支付</strong> - 根据提示完成支付流程</li>
                        <li><strong>等待收货</strong> - 校园区域2小时内送达，校外24小时内送达</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="membershipModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="bi bi-person-badge"></i> 会员介绍</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p>阿哲科技小店会员分为三个等级：</p>
                    <ul>
                        <li class="mb-2"><strong>普通会员</strong> - 注册即可成为普通会员，享受9.5折优惠</li>
                        <li class="mb-2"><strong>高级会员</strong> - 累计消费满2000元，享受9折优惠，生日专属礼包</li>
                        <li><strong>尊享会员</strong> - 累计消费满5000元，享受8.5折优惠，优先配送，专属客服</li>
                    </ul>
                    <p class="mt-3">会员积分规则：每消费1元获得1积分，100积分可抵扣1元。</p>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="faqModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="bi bi-question-circle"></i> 常见问题</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="accordion" id="faqAccordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                    如何查询订单状态？
                                </button>
                            </h2>
                            <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    登录您的账户后，在"我的订单"页面可以查看所有订单状态，包括已下单、配送中、已完成等状态。
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                    退货政策是怎样的？
                                </button>
                            </h2>
                            <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    我们提供7天无理由退换货服务（特殊商品除外）。商品需保持完好，不影响二次销售。质量问题15天内可免费换货。
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                    如何联系客服？
                                </button>
                            </h2>
                            <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    您可以通过以下方式联系客服：<br>
                                    - 客服电话：18699302103<br>
                                    - 客服邮箱：3072898438@qq.com<br>
                                    - 在线客服：网站右下角在线客服图标
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="contactServiceModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="bi bi-headset"></i> 联系客服</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p>我们的客服团队随时为您提供帮助：</p>
                    <ul class="mb-3">
                        <li><strong>客服电话：</strong>18699302103</li>
                        <li><strong>客服邮箱：</strong>3072898438@qq.com</li>
                        <li><strong>在线客服：</strong>工作日 9:00-21:00</li>
                        <li><strong>实体店地址：</strong>华中农业大学狮子山街道博园6楼601室</li>
                    </ul>
                    <p>您也可以填写以下表单，我们会尽快回复：</p>
                    <div class="mb-3">
                        <label class="form-label">问题类型</label>
                        <select class="form-select">
                            <option>订单问题</option>
                            <option>商品咨询</option>
                            <option>退换货</option>
                            <option>支付问题</option>
                            <option>其他</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">问题描述</label>
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                    <button class="btn btn-primary w-100">提交问题</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 配送方式相关模态框 -->
    <div class="modal fade" id="pickupModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="bi bi-shop"></i> 上门自提</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p>选择上门自提服务，您可以：</p>
                    <ul>
                        <li class="mb-2">在支付完成后1小时内到店自提商品</li>
                        <li class="mb-2">现场验货，确保商品完好</li>
                        <li class="mb-2">享受自提专属优惠，满200减10元</li>
                        <li>获得专业技术人员现场指导</li>
                    </ul>
                    <p class="mt-3"><strong>自提点地址：</strong></p>
                    <p>华中农业大学狮子山街道博园6楼601室</p>
                    <p><strong>营业时间：</strong> 周一至周日 9:00-21:00</p>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="campusDeliveryModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="bi bi-bicycle"></i> 校园配送</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p>校园配送服务详情：</p>
                    <ul>
                        <li class="mb-2"><strong>配送范围：</strong> 华中农业大学所有校区</li>
                        <li class="mb-2"><strong>配送时间：</strong> 工作日 8:00-22:00 | 周末 9:00-20:00</li>
                        <li class="mb-2"><strong>配送时效：</strong> 下单后2小时内送达</li>
                        <li class="mb-2"><strong>配送费用：</strong> 满99元免配送费，不满99元收取5元配送费</li>
                        <li><strong>特殊要求：</strong> 可预约具体配送时间（如：下午3点到4点）</li>
                    </ul>
                    <p class="mt-3">宿舍区配送可直接送到宿舍楼下，教学楼区域可送到指定教室。</p>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="deliveryQueryModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="bi bi-search"></i> 配送服务查询</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p>查询您的订单配送状态：</p>
                    <div class="mb-3">
                        <label class="form-label">订单号</label>
                        <input type="text" class="form-control" placeholder="请输入您的订单号">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">手机号</label>
                        <input type="text" class="form-control" placeholder="请输入下单时使用的手机号">
                    </div>
                    <button class="btn btn-primary w-100">查询订单状态</button>
                    
                    <div class="mt-4">
                        <h6>最近配送状态示例：</h6>
                        <div class="card mt-2">
                            <div class="card-body p-3">
                                <div class="d-flex justify-content-between">
                                    <strong>订单 #20240531001</strong>
                                    <span class="badge bg-warning">配送中</span>
                                </div>
                                <p class="mb-0 mt-2">预计送达时间：今日 15:30-16:30</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="deliveryAreaModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="bi bi-map"></i> 配送范围</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p>阿哲科技小店配送范围覆盖：</p>
                    <ul>
                        <li><strong>核心区域（2小时内送达）：</strong> 华中农业大学所有校区</li>
                        <li><strong>周边区域（24小时内送达）：</strong> 狮子山街道、南湖大道沿线、珞狮南路沿线</li>
                    </ul>
                    
                    <div class="mt-4">
                        <h6>校园详细配送点：</h6>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <ul>
                                    <li>博园区（1-12栋）</li>
                                    <li>荟园区（1-10栋）</li>
                                    <li>学生综合服务中心</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul>
                                    <li>第一教学楼</li>
                                    <li>图书馆</li>
                                    <li>体育馆</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="alert alert-info mt-4">
                        <i class="bi bi-info-circle"></i> 如您不确定是否在配送范围内，请联系客服确认
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 页脚 -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 mb-4">
                    <h5 class="mb-4"><i class="bi bi-laptop"></i> 阿哲科技小店</h5>
                    <p>为华农师生提供优质科技产品的电子商务平台。</p>
                    <div class="mt-4">
                        <a href="#" class="text-white me-3"><i class="bi bi-facebook" style="font-size: 1.5rem;"></i></a>
                        <a href="#" class="text-white me-3"><i class="bi bi-twitter" style="font-size: 1.5rem;"></i></a>
                        <a href="#" class="text-white me-3"><i class="bi bi-instagram" style="font-size: 1.5rem;"></i></a>
                        <a href="#" class="text-white"><i class="bi bi-wechat" style="font-size: 1.5rem;"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <h5 class="mb-4">购物指南</h5>
                    <div class="footer-links">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingProcessModal">购物流程</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#membershipModal">会员介绍</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#faqModal">常见问题</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#contactServiceModal">联系客服</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <h5 class="mb-4">配送方式</h5>
                    <div class="footer-links">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#pickupModal">上门自提</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#campusDeliveryModal">校园配送</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#deliveryQueryModal">配送服务查询</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#deliveryAreaModal">配送范围</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <h5 class="mb-4">支付方式</h5>
                    <div class="footer-links">
                        <a href="#">货到付款</a>
                        <a href="#">在线支付</a>
                        <a href="#">校园卡支付</a>
                        <a href="#">微信支付</a>
                    </div>
                </div>
            </div>
            <hr class="mt-0 mb-4" style="border-color: rgba(255,255,255,0.1);">
            <div class="row">
                <div class="col-md-6 mb-3 mb-md-0">
                    <small>&copy; 2023 阿哲科技小店 版权所有</small>
                </div>
                <div class="col-md-6 text-md-end">
                    <small>
                        <a href="#" class="text-white">隐私政策</a> | 
                        <a href="#" class="text-white">使用条款</a> | 
                        <a href="#" class="text-white">法律声明</a>
                    </small>
                </div>
            </div>
        </div>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // 购物车功能
        let cart = [];
        
        // 添加商品到购物车
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                const productCard = this.closest('.card');
                const productName = productCard.querySelector('.card-title').textContent;
                const productPriceText = productCard.querySelector('.text-danger').textContent;
                const productPrice = parseFloat(productPriceText.replace('¥', '').replace(',', ''));
                
                // 检查是否已在购物车中
                const existingItem = cart.find(item => item.id === productId);
                
                if(existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({
                        id: productId,
                        name: productName,
                        price: productPrice,
                        quantity: 1,
                        image: productCard.querySelector('.product-img').src
                    });
                }
                
                updateCart();
                
                // 显示添加成功的提示
                const toastHtml = `
                    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
                        <div id="liveToast" class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                            <div class="toast-header bg-success text-white">
                                <strong class="me-auto"><i class="bi bi-check-circle"></i> 添加成功</strong>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
                            </div>
                            <div class="toast-body bg-light">
                                <div class="d-flex align-items-center">
                                    <img src="${productCard.querySelector('.product-img').src}" 
                                         class="rounded me-3" width="40" height="40" style="object-fit: cover;">
                                    <div>
                                        <strong>${productName}</strong><br>
                                        <small>已添加到购物车</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                const toastContainer = document.createElement('div');
                toastContainer.innerHTML = toastHtml;
                document.body.appendChild(toastContainer);
                
                // 3秒后移除提示
                setTimeout(() => {
                    toastContainer.remove();
                }, 3000);
            });
        });
        
        // 更新购物车显示
        function updateCart() {
            const cartItemsEl = document.getElementById('cartItems');
            const cartCountEl = document.getElementById('cartCount');
            const cartTotalEl = document.getElementById('cartTotal');
            
            // 更新购物车数量
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountEl.textContent = totalItems;
            
            // 计算总价
            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotalEl.textContent = `¥${totalPrice.toFixed(2)}`;
            
            // 清空购物车显示
            cartItemsEl.innerHTML = '';
            
            if(cart.length === 0) {
                cartItemsEl.innerHTML = `
                    <div class="text-center py-5">
                        <i class="bi bi-cart-x text-muted" style="font-size: 3rem;"></i>
                        <p class="text-muted mt-3">购物车是空的</p>
                    </div>
                `;
                return;
            }
            
            // 添加购物车商品
            cart.forEach(item => {
                const itemEl = document.createElement('div');
                itemEl.className = 'cart-item d-flex align-items-center';
                itemEl.innerHTML = `
                    <div class="flex-shrink-0">
                        <img src="${item.image}" 
                             class="rounded" width="60" height="60" style="object-fit: cover;">
                    </div>
                    <div class="flex-grow-1 ms-3">
                        <div class="d-flex justify-content-between">
                            <h6 class="mb-1">${item.name}</h6>
                            <button class="btn btn-sm btn-outline-danger remove-item" data-id="${item.id}">
                                <i class="bi bi-trash"></i>
                            </button>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <span class="text-muted small">单价: ¥${item.price.toFixed(2)}</span>
                                <div class="input-group input-group-sm mt-1" style="width: 120px;">
                                    <button class="btn btn-outline-secondary decrease-item" data-id="${item.id}">-</button>
                                    <input type="text" class="form-control text-center quantity-input" 
                                           value="${item.quantity}" data-id="${item.id}">
                                    <button class="btn btn-outline-secondary increase-item" data-id="${item.id}">+</button>
                                </div>
                            </div>
                            <span class="fw-bold">¥${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    </div>
                `;
                cartItemsEl.appendChild(itemEl);
            });
            
            // 添加移除商品事件
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = this.getAttribute('data-id');
                    cart = cart.filter(item => item.id !== productId);
                    updateCart();
                });
            });
            
            // 添加减少数量事件
            document.querySelectorAll('.decrease-item').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = this.getAttribute('data-id');
                    const item = cart.find(item => item.id === productId);
                    if(item.quantity > 1) {
                        item.quantity -= 1;
                        updateCart();
                    }
                });
            });
            
            // 添加增加数量事件
            document.querySelectorAll('.increase-item').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = this.getAttribute('data-id');
                    const item = cart.find(item => item.id === productId);
                    item.quantity += 1;
                    updateCart();
                });
            });
            
            // 添加输入数量变化事件
            document.querySelectorAll('.quantity-input').forEach(input => {
                input.addEventListener('change', function() {
                    const productId = this.getAttribute('data-id');
                    const item = cart.find(item => item.id === productId);
                    const newQuantity = parseInt(this.value) || 1;
                    item.quantity = newQuantity > 0 ? newQuantity : 1;
                    updateCart();
                });
            });
        }
        
        // 平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // 模拟登录功能
        document.getElementById('loginModal').addEventListener('shown.bs.modal', function() {
            document.getElementById('loginEmail').focus();
        });
        
        // 模拟注册功能
        document.getElementById('registerModal').addEventListener('shown.bs.modal', function() {
            document.getElementById('registerName').focus();
        });
        
        // 表单提交处理
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('表单提交成功！');
                const modal = bootstrap.Modal.getInstance(this.closest('.modal'));
                if(modal) modal.hide();
            });
        });
    </script>
</body>
</html>
0 commit comments
Comments
0
 (0)
Comment
You're receiving notifications because you're subscribed to this thread.

曹旭辉-2024303120086-电子商务网站建设 · caoxuhui1/26.Website-construction@a7030ae
