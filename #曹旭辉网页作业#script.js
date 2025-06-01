// 购物车功能
document.addEventListener('DOMContentLoaded', function() {
    const cartCount = document.querySelector('.cart-count');
    const productCards = document.querySelectorAll('.product-card');
    let cartItems = 0;
    
    // 添加商品到购物车
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if(e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON') return;
            
            cartItems++;
            cartCount.textContent = cartItems;
            cartCount.style.display = 'block';
            
            // 添加动画效果
            cartCount.classList.add('pulse');
            setTimeout(() => {
                cartCount.classList.remove('pulse');
            }, 300);
            
            // 显示添加成功消息
            const productName = this.querySelector('.product-name').textContent;
            showNotification(`已添加 "${productName}" 到购物车`);
        });
    });
    
    // 显示通知
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: var(--success-color);
            color: white;
            padding: 15px 25px;
            border-radius: 4px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideIn 0.3s, fadeOut 0.3s 2s forwards;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2300);
    }
    
    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        .pulse {
            animation: pulse 0.3s;
        }
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
});