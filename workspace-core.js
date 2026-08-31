/**
 * Forex Pro Workspace Core Engine (No Voice / Clean Navigation)
 * จัดการเมนูสารบัญเชื่อมโยง 5 หน้าอัตโนมัติ
 */

document.addEventListener('DOMContentLoaded', () => {
  injectUniversalSidebar();
});

/* ================= เมนูสารบัญเชื่อม 5 หน้า ================= */
function injectUniversalSidebar() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  const pages = [
    { file: 'index.html', title: '1. เริ่มเรียน 4 เสา & บันทึกเทรด', icon: 'bi-mortarboard-fill', color: '#f97316' },
    { file: 'indicator-lab.html', title: '2. ห้องแล็บ Indicator 20 ตัว', icon: 'bi-sliders', color: '#3b82f6' },
    { file: 'candlestick-lab.html', title: '3. จิตวิทยาแท่งเทียน 15 รูปแบบ', icon: 'bi-fire', color: '#ef4444' },
    { file: 'news-radar.html', title: '4. เรดาร์ข่าวกล่องแดง 8 ข่าวใหญ่', icon: 'bi-broadcast', color: '#dc2626' },
    { file: 'session-clock.html', title: '5. นาฬิการอบตลาดโลก & Killzones', icon: 'bi-clock-history', color: '#10b981' }
  ];

  const sidebarBody = document.querySelector('#sidebarMenu .offcanvas-body');
  if (sidebarBody) {
    sidebarBody.innerHTML = `
      <div class="mb-3">
        <small class="text-muted fw-bold d-block mb-2">🧭 สารบัญบทเรียน & เครื่องมือ (5 หมวด):</small>
        <div class="list-group list-group-flush border rounded-3 overflow-hidden shadow-sm">
          ${pages.map(p => `
            <a href="${p.file}" class="list-group-item list-group-item-action d-flex align-items-center gap-2 py-2.5 ${currentPath === p.file ? 'active bg-warning border-warning text-dark fw-bold' : 'text-dark'}" style="font-size: 0.78rem;">
              <i class="bi ${p.icon}" style="color: ${currentPath === p.file ? '#000' : p.color}"></i>
              <span>${p.title}</span>
            </a>
          `).join('')}
        </div>
      </div>
      <div class="p-2.5 rounded-3 bg-light border text-muted small" style="font-size: 0.72rem;">
        💡 <strong>Tip:</strong> กดเลือกสลับหน้าบทเรียนและเครื่องมือวิเคราะห์กราฟได้ทันที
      </div>
    `;
  }
}
