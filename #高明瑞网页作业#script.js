// 产品数据
const products = [
    {
        id: 1,
        name: "有机西红柿",
        price: 5.99,
        image: "https://img95.699pic.com/photo/50430/3958.jpg_wh860.jpg",
        farmer: "张大叔农场",
        origin: "山东",
        category: "有机蔬菜",
        description: "自然成熟，无农药残留，酸甜多汁。采用有机种植方法，富含维生素C和番茄红素，是健康餐桌的首选。"
    },
    {
        id: 5,
        name: "红富士苹果",
        price: 8.99,
        image: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/153089/27/29784/144651/6348fc2fEb3e6fc1f/cc485412aa399a1c.jpg",
        farmer: "刘家果园",
        origin: "陕西",
        category: "新鲜水果",
        description: "来自陕西的优质红富士苹果，果肉脆甜多汁，果皮薄而光滑。自然生长，无催熟剂，保留苹果最原始的美味。"
    },
    {
        id: 6,
        name: "农家土鸡",
        price: 45.99,
        image: "https://tse1-mm.cn.bing.net/th/id/OIP-C.wRKQPEgLwDgAZBrVVHAr9wHaHW?rs=1&pid=ImgDetMain",
        farmer: "周家养殖场",
        origin: "湖北",
        category: "禽蛋肉类",
        description: "散养土鸡，自然生长120天以上，肉质紧实鲜美。无激素添加，富含优质蛋白质，是滋补养生的理想选择。"
    },
    {
        id: 7,
        name: "手工红薯粉",
        price: 12.99,
        image: "https://tse3-mm.cn.bing.net/th/id/OIP-C.rYr65zlj3XCpungVZgMOzgHaE3?rs=1&pid=ImgDetMain",
        farmer: "陈家作坊",
        origin: "河南",
        category: "农副加工",
        description: "传统工艺手工制作，无任何添加剂。口感Q弹爽滑，富含膳食纤维，是健康主食的优质选择。"
    },
    {
        id: 8,
        name: "有机黄瓜",
        price: 4.99,
        image: "https://img95.699pic.com/photo/50502/6713.jpg_wh860.jpg",
        farmer: "孙家菜园",
        origin: "江苏",
        category: "有机蔬菜",
        description: "自然种植，新鲜采摘，口感清脆多汁。无农药残留，富含维生素和矿物质，适合生食、凉拌或做沙拉。"
    },
    {
        id: 9,
        name: "有机西兰花",
        price: 6.99,
        image: "https://pic.52112.com/180404/180404_24/Z7EkLYaNmq_small.jpg",
        farmer: "绿色有机农场",
        origin: "云南",
        category: "有机蔬菜",
        description: "无农药种植，富含维生素C和膳食纤维，口感清脆，是健康饮食的绝佳选择。"
    },
    {
        id: 10,
        name: "新鲜蓝莓",
        price: 15.99,
        image: "https://pic.52112.com/180503/180503_31/IyH9RSccY2_small.jpg",
        farmer: "蓝莓果园",
        origin: "辽宁",
        category: "新鲜水果",
        description: "自然成熟，果实饱满，酸甜适中，富含花青素，对眼睛健康特别有益。"
    },
    {
        id: 11,
        name: "土鸡蛋",
        price: 18.99,
        image: "https://n.sinaimg.cn/sinakd10121/160/w1080h680/20200829/7fc7-iyhvyvc0868249.jpg",
        farmer: "王家养鸡场",
        origin: "河北",
        category: "禽蛋肉类",
        description: "散养土鸡产的蛋，蛋黄颜色深，营养丰富，口感香醇。"
    },
    {
        id: 12,
        name: "野生蜂蜜",
        price: 49.99,
        image: "https://p1.ssl.qhimg.com/t01bbf1e3872ddb0581.jpg",
        farmer: "深山蜂场",
        origin: "秦岭",
        category: "农副加工",
        description: "采集深山野花酿造，无添加，纯天然，具有独特的芳香和丰富的营养价值。"
    },
    {
        id: 13,
        name: "有机土豆",
        price: 3.99,
        image: "https://img95.699pic.com/photo/50640/0998.jpg_wh860.jpg",
        farmer: "李家菜园",
        origin: "内蒙古",
        category: "有机蔬菜",
        description: "沙地种植，日照充足，口感粉糯，无农药残留，是家庭餐桌的常备食材。"
    }
];

// 用户评价数据
const reviews = [
    {
        id: 1,
        user: "张女士",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        rating: 5,
        date: "2023-05-15",
        content: "西红柿非常新鲜，味道纯正，比超市买的好吃多了！下次还会再来购买。"
    },
    {
        id: 2,
        user: "李先生",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 4,
        date: "2023-05-10",
        content: "草莓很甜，包装也很用心，送货速度快，唯一不足是个别草莓有点小。"
    },
    {
        id: 3,
        user: "王小姐",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5,
        date: "2023-05-08",
        content: "土鸡蛋真的很香，炒出来的颜色金黄，孩子特别爱吃，已经回购三次了！"
    },
    {
        id: 4,
        user: "赵先生",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5,
        date: "2023-05-05",
        content: "农家土鸡炖汤太鲜美了，肉质紧实有嚼劲，是小时候的味道，强烈推荐！"
    },
    {
        id: 5,
        user: "刘女士",
        avatar: "https://randomuser.me/api/portraits/women/53.jpg",
        rating: 4,
        date: "2023-05-01",
        content: "有机菠菜很嫩，没有农药残留的担忧，做沙拉特别合适，会继续支持绿色农场。"
    },
    {
        id: 6,
        user: "陈先生",
        avatar: "https://randomuser.me/api/portraits/men/76.jpg",
        rating: 5,
        date: "2023-04-28",
        content: "手工红薯粉口感Q弹，煮不烂，比超市买的强太多了，妈妈都说好！"
    }
];

// 购物车数据
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM元素
const userIcon = document.getElementById('user-icon');
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const reviewList = document.getElementById('review-list');
const reviewForm = document.getElementById('review-form');
const userNameInput = document.getElementById('user-name');
const userCommentInput = document.getElementById('user-comment');
const ratingStars = document.getElementById('rating-stars');
const musicControl = document.getElementById('music-control');
const backgroundMusic = document.getElementById('background-music');
const stars = ratingStars.querySelectorAll('i');

// 登录注册相关元素
const authModal = document.getElementById('auth-modal');
const closeModal = document.getElementById('close-modal');
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const switchToRegister = document.getElementById('switch-to-register');
const switchToLogin = document.getElementById('switch-to-login');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');

// 初始化页面
function init() {
    renderReviews();
    updateCart();
    setupEventListeners();
    setupStarRating();
    
    // 尝试播放背景音乐（需要用户交互）
    backgroundMusic.volume = 0.3;
}

// 渲染用户评价
function renderReviews() {
    reviewList.innerHTML = '';
    reviews.forEach(review => {
        const reviewEl = document.createElement('div');
        reviewEl.className = 'review animated';
        reviewEl.innerHTML = `
            <div class="review-header">
                <img src="${review.avatar}" alt="${review.user}" class="review-avatar">
                <div>
                    <div class="review-user">${review.user}</div>
                    <div class="review-date">${review.date}</div>
                </div>
                <div class="review-rating">
                    ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                </div>
            </div>
            <div class="review-content">${review.content}</div>
        `;
        reviewList.appendChild(reviewEl);
    });
}

// 更新购物车显示
function updateCart() {
    // 更新购物车数量
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // 更新购物车内容
    cartItemsContainer.innerHTML = '';
    let total = 0;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; padding: 20px;">购物车是空的</p>';
        cartTotal.textContent = '¥0.00';
        return;
    }
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <p class="cart-item-price">¥${item.price.toFixed(2)}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                </div>
            </div>
            <button class="remove-item" data-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });
    
    cartTotal.textContent = `¥${total.toFixed(2)}`;
    
    // 保存到本地存储
    localStorage.setItem('cart', JSON.stringify(cart));
}

// 设置星级评分
function setupStarRating() {
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            
            // 重置所有星星
            stars.forEach(s => s.classList.remove('fas', 'active'));
            stars.forEach(s => s.classList.add('far'));
            
            // 设置选中状态
            for (let i = 0; i < rating; i++) {
                stars[i].classList.remove('far');
                stars[i].classList.add('fas', 'active');
            }
        });
    });
}

// 设置事件监听器
function setupEventListeners() {
    // 打开购物车
    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
    });
    
    // 关闭购物车
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    overlay.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
        authModal.classList.remove('active');
    });
    
    // 添加产品到购物车
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
        
        // 增加数量
        if (e.target.classList.contains('plus')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            changeQuantity(productId, 1);
        }
        
        // 减少数量
        if (e.target.classList.contains('minus')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            changeQuantity(productId, -1);
        }
        
        // 移除商品
        if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
            const productId = parseInt(e.target.getAttribute('data-id') || 
                              e.target.closest('.remove-item').getAttribute('data-id'));
            removeFromCart(productId);
        }
    });
    
    // 手动输入数量
    document.addEventListener('change', (e) => {
        if (e.target.classList.contains('quantity-input')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const newQuantity = parseInt(e.target.value);
            
            if (newQuantity > 0) {
                const itemIndex = cart.findIndex(item => item.id === productId);
                if (itemIndex !== -1) {
                    cart[itemIndex].quantity = newQuantity;
                    updateCart();
                }
            } else {
                e.target.value = 1;
            }
        }
    });
    
    // 结算按钮
    checkoutBtn.addEventListener('click', checkout);
    
    // 搜索功能
    searchBtn.addEventListener('click', searchProducts);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
    
    // 评论提交
    reviewForm.addEventListener('submit', submitReview);
    
    // 音乐控制
    musicControl.addEventListener('click', toggleMusic);
    
    // 页面点击尝试播放音乐
    document.addEventListener('click', tryPlayMusic);
    
    // 用户登录/注册相关事件
    userIcon.addEventListener('click', () => {
        authModal.classList.add('active');
        overlay.classList.add('active');
    });
    
    closeModal.addEventListener('click', () => {
        authModal.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    loginTab.addEventListener('click', () => {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });
    
    registerTab.addEventListener('click', () => {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });
    
    switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });
    
    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });
    
    loginBtn.addEventListener('click', loginUser);
    registerBtn.addEventListener('click', registerUser);
}

// 尝试播放音乐
function tryPlayMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play().catch(e => {
            console.log("需要用户交互才能播放音乐");
        });
    }
}

// 切换音乐播放状态
function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicControl.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        backgroundMusic.pause();
        musicControl.innerHTML = '<i class="fas fa-pause"></i>';
    }
}

// 搜索产品
function searchProducts() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        // 显示所有产品
        document.querySelectorAll('.product').forEach(product => {
            product.style.display = 'flex';
        });
        return;
    }
    
    // 隐藏不匹配的产品
    document.querySelectorAll('.product').forEach(product => {
        const title = product.querySelector('.product-title').textContent.toLowerCase();
        const description = product.querySelector('.product-description').textContent.toLowerCase();
        const farmer = product.querySelector('.product-farmer').textContent.toLowerCase();
        const origin = product.querySelector('.product-origin').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || 
            description.includes(searchTerm) || 
            farmer.includes(searchTerm) || 
            origin.includes(searchTerm)) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });
}

// 添加到购物车
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    
    // 显示添加成功提示
    alert(`${product.name} 已添加到购物车`);
}

// 修改商品数量
function changeQuantity(productId, change) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        const newQuantity = cart[itemIndex].quantity + change;
        
        if (newQuantity > 0) {
            cart[itemIndex].quantity = newQuantity;
        } else {
            cart.splice(itemIndex, 1);
        }
        
        updateCart();
    }
}

// 从购物车移除商品
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// 结算
function checkout() {
    if (cart.length === 0) {
        alert('购物车是空的，请先添加商品');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderDetails = cart.map(item => 
        `${item.name} x${item.quantity} = ¥${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    alert(`订单提交成功！\n\n${orderDetails}\n\n总计: ¥${total.toFixed(2)}\n\n感谢您的购买！`);
    
    // 清空购物车
    cart = [];
    localStorage.removeItem('cart');
    updateCart();
    
    // 关闭购物车
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// 提交评论
function submitReview(e) {
    e.preventDefault();
    
    const userName = userNameInput.value.trim();
    const userComment = userCommentInput.value.trim();
    let rating = 0;
    
    // 获取评分
    stars.forEach(star => {
        if (star.classList.contains('active')) {
            rating = parseInt(star.getAttribute('data-rating'));
        }
    });
    
    if (!userName || !userComment || rating === 0) {
        alert('请填写所有字段并选择评分');
        return;
    }
    
    // 创建新评论
    const newReview = {
        id: reviews.length + 1,
        user: userName,
        avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'women' : 'men'}/${Math.floor(Math.random() * 100)}.jpg`,
        rating: rating,
        date: new Date().toISOString().split('T')[0],
        content: userComment
    };
    
    // 添加到评论列表
    reviews.unshift(newReview);
    renderReviews();
    
    // 重置表单
    userNameInput.value = '';
    userCommentInput.value = '';
    stars.forEach(star => {
        star.classList.remove('fas', 'active');
        star.classList.add('far');
    });
    
    // 显示成功消息
    alert('感谢您的评价！您的评论已成功提交。');
}

// 登录功能
function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        alert('请输入邮箱和密码');
        return;
    }
    
    // 模拟登录成功
    alert('登录成功！欢迎回来');
    authModal.classList.remove('active');
    overlay.classList.remove('active');
}

// 注册功能
function registerUser() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    if (!username || !email || !password || !confirmPassword) {
        alert('请填写所有必填字段');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('两次输入的密码不一致');
        return;
    }
    
    if (password.length < 6) {
        alert('密码长度至少为6位');
        return;
    }
    
    // 模拟注册成功
    alert('注册成功！欢迎加入绿色农场');
    authModal.classList.remove('active');
    overlay.classList.remove('active');
}

// 初始化应用
init();