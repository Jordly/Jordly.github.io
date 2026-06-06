/* ========================================
   Premium Interactions & Enhancements
   增强交互效果和用户体验
   ======================================== */

/* ===== Toast 通知系统 ===== */
class ToastNotification {
  constructor() {
    this.container = this.createContainer();
    this.toasts = [];
  }
  
  createContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container';
    container.id = 'toast-container';
    document.body.appendChild(container);
    return container;
  }
  
  show(message, type = 'info', duration = 3000) {
    const toast = this.createToast(message, type);
    this.container.appendChild(toast);
    
    // 入场动画
    setTimeout(() => toast.classList.add('show'), 10);
    
    // 自动消失
    if (duration > 0) {
      setTimeout(() => this.dismiss(toast), duration);
    }
    
    return toast;
  }
  
  createToast(message, type) {
    const icons = {
      success: '✅',
      error: '❌',
      warning: '⚠️',
      info: 'ℹ️',
      loading: '⏳'
    };
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || icons.info}</span>
      <div class="toast-content">
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    `;
    
    return toast;
  }
  
  dismiss(toast) {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }
}

// 全局 Toast 实例
const Toast = new ToastNotification();

/* ===== 增强的登录/注册体验 ===== */
function enhanceAuthForms() {
  // 为所有密码输入框添加切换按钮增强
  document.querySelectorAll('.password-wrap').forEach(wrap => {
    const input = wrap.querySelector('input[type="password"], input[type="text"]');
    if (!input) return;
    
    // 添加浮动标签效果
    input.addEventListener('focus', () => {
      wrap.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
      wrap.classList.remove('focused');
    });
  });
  
  // 表单验证增强
  document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('blur', () => {
      validateField(input);
    });
    
    input.addEventListener('input', () => {
      clearFieldError(input);
    });
  });
}

function validateField(input) {
  const value = input.value.trim();
  const isRequired = input.hasAttribute('required');
  
  if (isRequired && !value) {
    showFieldError(input, '此项为必填项');
    return false;
  }
  
  if (input.type === 'email' && value && !isValidEmail(value)) {
    showFieldError(input, '邮箱格式不正确');
    return false;
  }
  
  if (input.type === 'tel' && value && !isValidPhone(value)) {
    showFieldError(input, '手机号格式不正确');
    return false;
  }
  
  clearFieldError(input);
  return true;
}

function showFieldError(input, message) {
  clearFieldError(input);
  
  input.classList.add('border-red-500');
  input.classList.remove('border-green-500');
  
  const error = document.createElement('div');
  error.className = 'field-error text-red-500 text-sm mt-1';
  error.textContent = message;
  input.parentElement.appendChild(error);
}

function clearFieldError(input) {
  input.classList.remove('border-red-500');
  input.classList.add('border-green-500');
  
  const error = input.parentElement.querySelector('.field-error');
  if (error) error.remove();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^1[3-9]\d{9}$/.test(phone);
}

/* ===== 键盘快捷键 ===== */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + S 保存
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      Toast.show('保存功能开发中', 'info');
    }
    
    // ESC 关闭弹窗
    if (e.key === 'Escape') {
      closeAllModals();
    }
    
    // Ctrl/Cmd + K 搜索
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      Toast.show('搜索功能开发中', 'info');
    }
  });
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    if (!modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  });
}

/* ===== 平滑滚动 ===== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ===== 导航增强 ===== */
function enhanceNavigation() {
  // 添加活跃状态指示器
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      // 移除所有活跃状态
      document.querySelectorAll('.nav-item').forEach(i => {
        i.classList.remove('active');
      });
      
      // 添加当前活跃状态
      item.classList.add('active');
      
      // 显示反馈
      const moduleName = item.getAttribute('data-module');
      if (moduleName) {
        Toast.show(`正在加载：${item.querySelector('.nav-text').textContent}`, 'info', 1500);
      }
    });
  });
  
  // 侧边栏折叠增强
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
  }
}

/* ===== 性能监控 ===== */
function initPerformanceMonitoring() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.timing;
      const metrics = {
        DNS: perfData.domainLookupEnd - perfData.domainLookupStart,
        TCP: perfData.connectEnd - perfData.connectStart,
        TTFB: perfData.responseStart - perfData.requestStart,
        DOMReady: perfData.domContentLoadedEventEnd - perfData.navigationStart,
        Load: perfData.loadEventEnd - perfData.navigationStart
      };
      
      console.log('⚡ Performance Metrics:', metrics);
      
      // 警告慢加载
      if (metrics.Load > 3000) {
        console.warn('⚠️ Page load time exceeds 3 seconds!');
      }
    }, 0);
  });
}

/* ===== 页面可见性优化 ===== */
function initVisibilityOptimization() {
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      console.log('⏸️ Page hidden, pausing animations');
      document.body.classList.add('paused');
    } else {
      console.log('▶️ Page visible, resuming animations');
      document.body.classList.remove('paused');
    }
  });
}

/* ===== 加载状态管理 ===== */
function showLoading(button) {
  const originalText = button.textContent;
  button.disabled = true;
  button.innerHTML = '<span class="spinner"></span> 加载中...';
  button.dataset.originalText = originalText;
}

function hideLoading(button) {
  button.disabled = false;
  button.textContent = button.dataset.originalText || '提交';
}

/* ===== 增强的登录函数（示例） ===== */
async function enhancedLogin() {
  const loginBtn = document.querySelector('#auth-login-form .btn-primary');
  if (!loginBtn) return;
  
  showLoading(loginBtn);
  
  try {
    // 模拟 API 调用
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    if (!username || !password) {
      Toast.show('请输入用户名和密码', 'error');
      return;
    }
    
    // 这里调用真实的登录 API
    Toast.show('登录成功！正在跳转...', 'success');
    
    setTimeout(() => {
      // 隐藏登录弹窗
      document.getElementById('login-modal').classList.add('hidden');
      // 显示主界面
      document.getElementById('main-container').classList.remove('hidden');
    }, 1000);
    
  } catch (error) {
    Toast.show('登录失败，请重试', 'error');
  } finally {
    hideLoading(loginBtn);
  }
}

/* ===== 初始化 ===== */
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Premium Enhancements Loaded');
  
  // 初始化所有增强功能
  enhanceAuthForms();
  initKeyboardShortcuts();
  initSmoothScroll();
  enhanceNavigation();
  initPerformanceMonitoring();
  initVisibilityOptimization();
  
  // 欢迎提示
  setTimeout(() => {
    if (document.getElementById('login-modal') && 
        !document.getElementById('login-modal').classList.contains('hidden')) {
      Toast.show('欢迎使用 Chanseen CS CloudHub！', 'success', 4000);
    }
  }, 500);
});

/* ===== 导出全局函数 ===== */
window.Toast = Toast;
window.showLoading = showLoading;
window.hideLoading = hideLoading;
window.enhancedLogin = enhancedLogin;
