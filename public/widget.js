(function () {
  var script = document.currentScript;
  if (!script) return;

  var storeId = script.getAttribute("data-id") || "store_01";
  var lang = script.getAttribute("data-lang") || document.documentElement.lang || "ar";
  var isAr = lang.toLowerCase().indexOf("ar") !== -1;

  var reviews = [
    { name: "سارة المنصور", rating: 5, text: "جودة ممتازة وتوصيل سريع جداً، أنصح بالتعامل معهم!", date: "منذ ساعتين" },
    { name: "أحمد العلي", rating: 5, text: "منتج رائع مطابق للوصف تماماً وتجربة شراء سلسة.", date: "منذ يوم" },
    { name: "Sarah Jenkins", rating: 5, text: "Exceptional quality and super fast shipping!", date: "2d ago" }
  ];

  var container = document.createElement("div");
  container.id = "vouchly-widget-" + storeId;
  container.setAttribute("dir", isAr ? "rtl" : "ltr");
  container.style.cssText =
    "font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:16px auto;padding:16px;border-radius:16px;border:1px solid #e2e8f0;background:#ffffff;color:#0f172a;box-shadow:0 4px 20px rgba(0,0,0,0.04);box-sizing:border-box;";

  var header =
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid #f1f5f9;">' +
    '<div><div style="font-weight:800;font-size:15px;">' +
    (isAr ? "آراء العملاء الموثقة" : "Verified Customer Reviews") +
    '</div><div style="font-size:12px;color:#f59e0b;font-weight:700;margin-top:2px;">★★★★★ 5.0 / 5.0</div></div>' +
    '<a href="https://vercel.app" target="_blank" translate="no" style="text-decoration:none;font-size:11px;background:#eef2ff;color:#4f46e5;padding:4px 10px;border-radius:20px;font-weight:700;">Powered by Vouchly ★</a>' +
    "</div>";

  var listHtml = reviews
    .map(function (r) {
      return (
        '<div style="padding:10px 0;border-bottom:1px solid #f8fafc;">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">' +
        '<span style="font-weight:700;font-size:13px;">' +
        r.name +
        ' <span style="color:#10b981;font-size:11px;">✓</span></span>' +
        '<span style="color:#f59e0b;font-size:12px;">' +
        "★".repeat(r.rating) +
        "</span></div>" +
        '<p style="margin:0;font-size:12.5px;color:#475569;line-height:1.5;">' +
        r.text +
        "</p></div>"
      );
    })
    .join("");

  container.innerHTML = header + listHtml;
  script.parentNode.insertBefore(container, script);
})();

