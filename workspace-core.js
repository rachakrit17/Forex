/**
 * สคริปต์กลางควบคุมเมนูนำทาง Forex Cute Purple Workspace
 */

document.addEventListener('DOMContentLoaded', () => {
  injectUniversalSidebar();
});

function injectUniversalSidebar() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  const pages = [
    { file: 'index.html', title: '🌸 ศูนย์รวมวงล้อระบบ (หน้าหลัก)', icon: 'bi-compass-fill', color: '#8b5cf6' },
    { file: 'multi-chart.html', title: '1. ศูนย์บัญชาการ 10 สินทรัพย์โลก', icon: 'bi-grid-1x2-fill', color: '#6366f1' },
    { file: 'strength-meter.html', title: '2. เรดาร์ความแข็งแกร่ง 8 สกุลเงิน', icon: 'bi-speedometer2', color: '#10b981' },
    { file: 'forex-lessons.html', title: '3. ห้องเรียน 4 เสาหลัก & บันทึกเทรด', icon: 'bi-journal-bookmark-fill', color: '#a855f7' },
    { file: 'indicator-lab.html', title: '4. ห้องทดลอง 20 อินดิเคเตอร์', icon: 'bi-sliders2', color: '#38bdf8' },
    { file: 'candlestick-lab.html', title: '5. จิตวิทยา 23 รูปแบบแท่งเทียน', icon: 'bi-fire', color: '#f43f5e' },
    { file: 'news-radar.html', title: '6. เรดาร์ 12 ข่าวกล่องแดงโลก', icon: 'bi-broadcast-pin', color: '#f59e0b' },
    { file: 'session-clock.html', title: '7. นาฬิกา 4 ตลาดโลก & เขตสังหาร', icon: 'bi-clock-history', color: '#10b981' }
  ];

  const sidebarBody = document.querySelector('#sidebarMenu .offcanvas-body');
  if (sidebarBody) {
    sidebarBody.innerHTML = `
      <div class="mb-3">
        <small class="text-muted fw-bold d-block mb-2" style="font-size: 0.75rem;">🧭 สารบัญห้องเรียนและเครื่องมือทั้งหมด:</small>
        <div class="list-group list-group-flush border rounded-4 overflow-hidden shadow-sm" style="border-color: var(--purple-border) !important;">
          ${pages.map(p => `
            <a href="${p.file}" class="list-group-item list-group-item-action d-flex align-items-center gap-2 py-2.5 ${currentPath === p.file ? 'active border-0 fw-bold' : 'text-dark'}" 
               style="${currentPath === p.file ? 'background: linear-gradient(135deg, #a855f7, #7c3aed); color: #fff;' : 'background-color: #fff;'} font-size: 0.78rem;">
              <i class="bi ${p.icon}" style="color: ${currentPath === p.file ? '#ffffff' : p.color}"></i>
              <span>${p.title}</span>
            </a>
          `).join('')}
        </div>
      </div>
      <div class="p-3 rounded-4 border text-muted small" style="background-color: var(--purple-soft); border-color: var(--purple-border) !important; font-size: 0.72rem;">
        💜 <strong>คำแนะนำ:</strong> สามารถกดเปลี่ยนหน้าเครื่องมือวิเคราะห์ได้ตลอดเวลาผ่านเมนูนี้ หรือกดกลับหน้าหลักวงล้อได้เสมอค่ะ
      </div>
    `;
  }
}
