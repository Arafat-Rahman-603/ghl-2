const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to localhost where dev server is supposedly running
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 10000 });
    console.log("Page loaded");
    
    // Evaluate progress values
    const data = await page.evaluate(() => {
      const swiperEl = document.querySelector('.services-swiper');
      if (!swiperEl || !swiperEl.swiper) return "Swiper not found";
      
      const sw = swiperEl.swiper;
      const results = [];
      sw.slides.forEach((slide, index) => {
        results.push({
          index,
          isActive: slide.classList.contains('swiper-slide-active'),
          progress: slide.progress,
          tier: slide.getAttribute('data-tier'),
          opacity: slide.style.opacity
        });
      });
      return {
        activeIndex: sw.activeIndex,
        slides: results
      };
    });
    
    console.log(JSON.stringify(data, null, 2));
  } catch (e) {
    console.log("Error:", e.message);
  }
  
  await browser.close();
})();
