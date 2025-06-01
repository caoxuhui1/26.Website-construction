// 预约表单验证和提交
document.addEventListener('DOMContentLoaded', function() {
    // 设置日期限制
    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(today.getDate() + 1); // 最早可预约明天
    
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 30); // 最晚可预约30天后
    
    document.getElementById('date').min = minDate.toISOString().split('T')[0];
    document.getElementById('date').max = maxDate.toISOString().split('T')[0];
    
    // 表单提交处理
    const form = document.getElementById('appointmentForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const department = document.getElementById('department').value;
        const doctor = document.getElementById('doctor').value;
        const date = document.getElementById('date').value;
        
        // 简单验证
        if (!name || !phone || !department || !doctor || !date) {
            alert('请填写所有必填项');
            return;
        }
        
        // 手机号验证
        const phoneRegex = /^1[3-9]\d{9}$/;
        if (!phoneRegex.test(phone)) {
            alert('请输入有效的手机号码');
            return;
        }
        
        // 创建预约数据对象
        const appointmentData = {
            name,
            phone,
            department,
            doctor,
            date
        };
        
        // 在实际应用中，这里会发送数据到服务器
        console.log('预约数据:', appointmentData);
        
        // 显示成功消息
        alert('预约提交成功！我们将尽快与您确认预约信息。');
        
        // 重置表单
        form.reset();
    });
    
    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 导航菜单激活状态
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});