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
      
      // 移动端点击后自动关闭侧边栏
      if (window.innerWidth <= 768) {
        closeMobileSidebar();
      }
    });
  });
  
  // 增强分组标题点击效果
  document.querySelectorAll('.nav-section-title').forEach(title => {
    title.addEventListener('click', () => {
      const section = title.parentElement;
      const navItems = section.querySelectorAll('.nav-item');
      
      if (title.classList.contains('active')) {
        // 折叠
        title.classList.remove('active');
        navItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.display = 'none';
          }, index * 30);
        });
      } else {
        // 展开
        title.classList.add('active');
        navItems.forEach((item, index) => {
          item.style.display = 'flex';
          item.style.opacity = '0';
          item.style.transform = 'translateX(-10px)';
          setTimeout(() => {
            item.style.transition = 'all 0.3s var(--ease-premium)';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
          }, index * 50);
        });
      }
    });
  });
  
  // 侧边栏折叠增强
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.style.transition = 'all 0.4s var(--ease-premium)';
    
    // 添加折叠状态管理
    const toggleBtn = document.getElementById('sidebar-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        toggleSidebarWithAnimation();
      });
    }
  }
}

/* ===== 侧边栏折叠动画增强 ===== */
function toggleSidebarWithAnimation() {
  const sidebar = document.getElementById('sidebar');
  const contentArea = document.getElementById('content-area');
  
  if (!sidebar) return;
  
  const isCollapsed = sidebar.classList.contains('collapsed');
  
  if (isCollapsed) {
    // 展开
    sidebar.classList.remove('collapsed');
    if (contentArea) {
      contentArea.style.marginLeft = '240px';
      contentArea.style.transition = 'margin-left 0.4s var(--ease-premium)';
    }
    
    // 显示文本内容的延迟动画
    setTimeout(() => {
      const texts = sidebar.querySelectorAll('.nav-text, .section-text, .section-arrow, .toggle-text');
      texts.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.width = '';
        }, index * 20);
      });
    }, 150);
    
    Toast.show('已展开侧边栏', 'info', 1500);
  } else {
    // 折叠
    const texts = sidebar.querySelectorAll('.nav-text, .section-text, .section-arrow, .toggle-text');
    texts.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '0';
        el.style.width = '0';
      }, index * 15);
    });
    
    setTimeout(() => {
      sidebar.classList.add('collapsed');
      if (contentArea) {
        contentArea.style.marginLeft = '68px';
        contentArea.style.transition = 'margin-left 0.4s var(--ease-premium)';
      }
    }, 200);
    
    Toast.show('已折叠侧边栏', 'info', 1500);
  }
}

/* ===== 移动端侧边栏 ===== */
function closeMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  
  if (window.innerWidth <= 768) {
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.add('hidden');
  }
}

function toggleMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  
  if (!sidebar) return;
  
  const isOpen = sidebar.classList.contains('open');
  
  if (isOpen) {
    sidebar.classList.remove('open');
    if (overlay) overlay.classList.add('hidden');
  } else {
    sidebar.classList.add('open');
    if (overlay) overlay.classList.remove('hidden');
  }
}

// 导出函数供 HTML 调用
window.toggleMobileSidebar = toggleMobileSidebar;
window.closeMobileSidebar = closeMobileSidebar;
window.toggleSidebarWithAnimation = toggleSidebarWithAnimation;

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

/* ===== 数据表格增强功能 ===== */

/**
 * 表格排序功能
 * 用法：点击表头即可排序
 */
class TableSorter {
  constructor(table) {
    this.table = table;
    this.headers = table.querySelectorAll('thead th');
    this.tbody = table.querySelector('tbody');
    this.currentSort = { column: -1, ascending: true };
    
    this.init();
  }
  
  init() {
    this.headers.forEach((header, index) => {
      header.addEventListener('click', () => this.sort(index));
      header.style.cursor = 'pointer';
    });
  }
  
  sort(columnIndex) {
    const rows = Array.from(this.tbody.querySelectorAll('tr'));
    const ascending = this.currentSort.column === columnIndex ? !this.currentSort.ascending : true;
    
    // 更新排序指示器
    this.headers.forEach((h, i) => {
      h.classList.remove('sorted-asc', 'sorted-desc');
      if (i === columnIndex) {
        h.classList.add(ascending ? 'sorted-asc' : 'sorted-desc');
      }
    });
    
    // 排序
    rows.sort((a, b) => {
      const cellA = a.cells[columnIndex]?.textContent.trim() || '';
      const cellB = b.cells[columnIndex]?.textContent.trim() || '';
      
      // 尝试数字排序
      const numA = parseFloat(cellA);
      const numB = parseFloat(cellB);
      if (!isNaN(numA) && !isNaN(numB)) {
        return ascending ? numA - numB : numB - numA;
      }
      
      // 字符串排序
      return ascending ? cellA.localeCompare(cellB, 'zh-CN') : cellB.localeCompare(cellA, 'zh-CN');
    });
    
    // 添加动画
    rows.forEach((row, index) => {
      row.style.opacity = '0';
      row.style.transform = 'translateY(10px)';
      setTimeout(() => {
        this.tbody.appendChild(row);
        row.style.transition = 'all 0.3s var(--ease-premium)';
        row.style.opacity = '1';
        row.style.transform = 'translateY(0)';
      }, index * 30);
    });
    
    this.currentSort = { column: columnIndex, ascending };
  }
}

/**
 * 表格筛选功能
 * 用法：传入输入框和表格，自动筛选
 */
class TableFilter {
  constructor(input, table) {
    this.input = input;
    this.table = table;
    this.rows = table.querySelectorAll('tbody tr');
    
    this.init();
  }
  
  init() {
    this.input.addEventListener('input', () => {
      const keyword = this.input.value.toLowerCase().trim();
      let visibleCount = 0;
      
      this.rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        const visible = text.includes(keyword);
        row.style.display = visible ? '' : 'none';
        
        if (visible) {
          row.style.opacity = '0';
          row.style.transform = 'translateY(5px)';
          setTimeout(() => {
            row.style.transition = 'all 0.2s var(--ease-premium)';
            row.style.opacity = '1';
            row.style.transform = 'translateY(0)';
          }, visibleCount * 20);
          visibleCount++;
        }
      });
      
      // 显示/隐藏空状态
      const emptyState = this.table.querySelector('.empty-state');
      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? '' : 'none';
      }
    });
  }
}

/**
 * 行点击效果增强
 */
function enhanceTableRows(table) {
  const rows = table.querySelectorAll('tbody tr');
  
  rows.forEach(row => {
    // 添加悬停音效（可选）
    row.addEventListener('mouseenter', () => {
      row.style.transition = 'all 0.25s var(--ease-premium)';
    });
    
    // 点击效果
    row.addEventListener('click', () => {
      // 移除其他行的活跃状态
      table.querySelectorAll('tbody tr.active').forEach(r => {
        r.classList.remove('active');
        r.style.background = '';
      });
      
      // 添加当前行的活跃状态
      row.classList.add('active');
      row.style.background = 'linear-gradient(135deg, rgba(24, 95, 165, 0.08) 0%, rgba(79, 70, 229, 0.04) 100%)';
      
      // 添加点击动画
      row.style.transform = 'scale(1.01)';
      setTimeout(() => {
        row.style.transform = 'scale(1)';
      }, 150);
    });
  });
}

/**
 * 自动为页面中所有 .data-table 添加增强功能
 */
function initTableEnhancements() {
  const tables = document.querySelectorAll('.data-table:not([data-enhanced])');
  
  tables.forEach(table => {
    // 标记已增强，避免重复初始化
    table.setAttribute('data-enhanced', 'true');
    
    // 给现有行添加动画 class
    table.querySelectorAll('tbody tr').forEach((row, index) => {
      if (!row.classList.contains('row-animate')) {
        row.classList.add('row-animate');
      }
    });
    
    // 添加排序功能
    new TableSorter(table);
    
    // 添加行点击效果
    enhanceTableRows(table);
    
    // 添加表格容器滚动阴影效果
    const wrapper = table.closest('.table-wrap');
    if (wrapper) {
      wrapper.addEventListener('scroll', () => {
        const scrollLeft = wrapper.scrollLeft;
        const scrollWidth = wrapper.scrollWidth - wrapper.clientWidth;
        
        if (scrollLeft > 0) {
          wrapper.style.boxShadow = 'inset 10px 0 10px -10px rgba(0,0,0,0.1), 0 2px 15px rgba(0,0,0,0.06)';
        } else if (scrollLeft < scrollWidth) {
          wrapper.style.boxShadow = 'inset -10px 0 10px -10px rgba(0,0,0,0.1), 0 2px 15px rgba(0,0,0,0.06)';
        } else {
          wrapper.style.boxShadow = '0 2px 15px rgba(0,0,0,0.06)';
        }
      });
    }
  });
  
  if (tables.length > 0) {
    console.log(`📊 已为 ${tables.length} 个数据表格添加 Premium 增强`);
  }
}

// 导出供全局使用
window.TableSorter = TableSorter;
window.TableFilter = TableFilter;
window.initTableEnhancements = initTableEnhancements;

// 初始加载时初始化
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initTableEnhancements, 500);
});

// 当模块内容加载后也初始化
const moduleContent = document.getElementById('module-content');
if (moduleContent) {
  const moduleObserver = new MutationObserver(() => {
    setTimeout(initTableEnhancements, 100);
  });
  moduleObserver.observe(moduleContent, { childList: true, subtree: true });
}
