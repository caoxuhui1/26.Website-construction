document.addEventListener('DOMContentLoaded', function() {
    // 导航切换功能
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const homeSection = document.getElementById('home');
    
    // 默认显示首页
    homeSection.style.display = 'block';
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            
            // 隐藏所有内容区
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // 显示目标内容区
            if (target !== 'home') {
                const targetSection = document.getElementById(target);
                targetSection.classList.add('active');
                
                // 滚动到目标区域
                targetSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                homeSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            // 更新活动导航
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 角色卡片悬停效果
    const cards = document.querySelectorAll('.character-card, .course-card, .event-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = this.classList.contains('character-card') ? 'translateY(-10px)' : 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 创建更多云朵
    function createClouds() {
        const body = document.querySelector('body');
        for (let i = 0; i < 8; i++) {
            const cloud = document.createElement('div');
            cloud.className = 'cloud';
            
            // 随机位置和大小
            const top = Math.random() * 80;
            const left = Math.random() * 90;
            const width = 80 + Math.random() * 100;
            const height = width * (0.3 + Math.random() * 0.2);
            
            cloud.style.top = `${top}%`;
            cloud.style.left = `${left}%`;
            cloud.style.width = `${width}px`;
            cloud.style.height = `${height}px`;
            cloud.style.animationDuration = `${20 + Math.random() * 40}s`;
            
            body.appendChild(cloud);
        }
    }
    
    createClouds();
});