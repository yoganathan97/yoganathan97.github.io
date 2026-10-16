(function () {
  var IMG = 'img/projects/';

  /* keyword marquee */
  var words = ['Embedded C', 'NVMe SSD', 'UEFI', 'FreeRTOS', 'Bootloaders', 'LoRaWAN', 'OCPP 1.6', 'Device Drivers', 'FOTA', 'MQTT', 'ARM', 'PCIe'];
  var track = document.getElementById('track');
  var one = words.map(function (w) { return '<span>' + w + '</span>'; }).join('');
  track.innerHTML = one + one;

  /* projects */
  var P = [
    { name: 'EV Charger', kind: 'Firmware', img: 'ev.jpg', short: 'Firmware for 3.5 kW to 22 kW chargers, including the full OCPP 1.6 stack.',
      intro: 'Firmware for electric vehicle chargers in 3.5 kW and 7 kW single phase, and 11 kW and 22 kW three phase. Multiple connectors let owners charge from both single-phase and three-phase outlets. As the sole senior firmware developer in the R&D team, I worked with the hardware designers to turn their requirements into a software design.',
      actsTitle: 'What I did',
      acts: ['Specified, developed and debugged a hardware-independent OCPP application layer.', 'Designed and implemented the bootloader that enables FOTA (firmware over the air).', 'Built APIs to bring up Ethernet, LTE, Wi-Fi and RFID.', 'Designed the program architecture from project requirements and hardware specs.', 'Supported teammates and supervised junior developers.', 'Maintained and improved existing code toward a modular structure.'],
      hl: ['Developed the entire OCPP 1.6 protocol on my own.'],
      link: { t: 'About OCPP 1.6', u: 'https://www.openchargealliance.org/protocols/ocpp-16/' } },
    { name: 'LoRa', kind: 'Wireless', img: 'lora.jpg', short: 'Low-power LoRaWAN sensors for meters, solar and water monitoring.',
      intro: 'LoRa is a spread spectrum modulation technique and the physical layer of a long-range, low-power wireless platform that has become the de facto choice for IoT. I have working experience with LoRaWAN on battery-powered devices.',
      actsTitle: 'What I did',
      acts: ['Developed and debugged APIs that connect sensors to the LoRaWAN stack.', 'Read design documents and workflows, then modified the program to match client requirements.', 'Implemented low-power operation for long-life battery devices.', 'Adapted designs to the different needs of a wide range of applications.'],
      extraTitle: 'Products built on LoRa',
      extra: ['Smart water meter', 'Gas meter', 'Occupancy sensor module', 'Solar plant monitoring', 'Solar street lights', 'Water level monitoring'],
      link: { t: 'How LoRa and LoRaWAN work', u: 'https://circuitdigest.com/article/introduction-to-lora-and-lorawan-what-is-lora-and-how-does-it-work' } },
    { name: 'UEFI / BIOS', kind: 'Firmware', img: 'LegacyUEFI.jpg', short: 'BIOS Connect, FOTA and UEFI DXE drivers ported from x86 to ARM.',
      intro: 'UEFI is the modern replacement for the traditional BIOS. I worked in the BIOS Connect team on FOTA and on automated factory tools, and improved existing UEFI DXE drivers.',
      actsTitle: 'What I did',
      acts: ['Ported UEFI DXE drivers from Intel x86/x64 to ARM.', 'Found and fixed security vulnerabilities using code analysis tools.', 'Studied existing DXE drivers and enhanced their functionality.', 'Contributed to the design and functionality of the product.'],
      hl: ['Optimised wireless driver integration and enabled HTTPS boot on ARM platforms.', 'Diagnosed and fixed a UEFI tool issue fast enough to ship the tool release on time.'] },
    { name: 'FreeRTOS', kind: 'RTOS', img: 'rtos.jpg', short: 'Task design, scheduling and drivers for vehicle tracking and occupancy sensors.',
      intro: 'In-depth working experience with FreeRTOS, which provides a scheduler and multi-threading primitives including threads, mutexes, semaphores and thread-safe heap allocation. Comfortable with inter-process communication, scheduling, context switching and multitasking.',
      actsTitle: 'What I did',
      acts: ['Imported and integrated the FreeRTOS stack for the target microcontroller.', 'Designed program architecture and wrote drivers for the required peripherals.', 'Created tasks and handled application code to requirements.', 'Improved efficiency, stability and scalability of embedded code.'],
      extraTitle: 'Completed with FreeRTOS', extra: ['Vehicle tracking system', 'Occupancy sensor module'],
      link: { t: 'freertos.org', u: 'https://www.freertos.org/index.html' } },
    { name: 'IoT', kind: 'Protocols', img: 'iot.jpg', short: 'Wireless and networking protocols I have worked with.',
      intro: 'IoT protocols give connected nodes a structured way to talk to each other. As use cases have changed quickly, so have the protocols. These are the ones I have worked with.',
      extraTitle: 'Wireless', extra: ['Bluetooth', 'LoRaWAN', 'NFC', 'Wi-Fi'],
      extraTitle2: 'Networking', extra2: ['MQTT', 'TCP', 'UDP', 'WebSocket', 'IP', 'Ethernet'] },
    { name: 'Thermal Printer', kind: 'Product', img: 'tp.png', short: 'A complete 3 inch thermal printer, built by me from firmware to product.',
      intro: 'Six months of work to deliver a complete 3 inch thermal printer. It prints images, text and barcodes, and takes data over USB from a laptop or over UART from a mobile app.',
      actsTitle: 'What I did',
      acts: ['Developed and tested firmware APIs for the printer head and Wi-Fi module.', 'Wrote the driver API for the stepper motor driver IC.', 'Implemented a ring buffer so the MCU handles more than 100 KB of continuous data from an ESP over UART.', 'Monitored voltage with a resistor divider and current with a sense resistor.', 'Integrated the USB driver.', 'Worked closely with hardware designers to define software requirements.'],
      hl: ['Developed the 3 inch thermal printer firmware independently.'] }
  ];

  var cards = document.getElementById('cards');
  var dlg = document.getElementById('dlg');
  var body = document.getElementById('dlg-body');

  function ul(a) { return '<ul>' + a.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul>'; }
  function chips(a) { return '<div class="chips">' + a.map(function (t) { return '<span class="chip">' + t + '</span>'; }).join('') + '</div>'; }

  P.forEach(function (p, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'card';
    b.innerHTML = '<img src="' + IMG + p.img + '" alt="" loading="lazy">' +
      '<span class="c"><small>' + p.kind + '</small><h3>' + p.name + '</h3><p>' + p.short + '</p><span class="more">Read more →</span></span>';
    b.addEventListener('click', function () { open(i); });
    cards.appendChild(b);
  });

  function open(i) {
    var p = P[i];
    var h = '<img class="hd" src="' + IMG + p.img + '" alt="">' +
      '<div class="in"><small class="label" style="display:block;margin:0">' + p.kind + '</small>' +
      '<h3 id="dlg-title">' + p.name + '</h3><p class="intro">' + p.intro + '</p>';
    if (p.acts) h += '<h4>' + p.actsTitle + '</h4>' + ul(p.acts);
    if (p.hl) h += '<h4>Highlights</h4><div class="hl">' + ul(p.hl) + '</div>';
    if (p.extra) h += '<h4>' + p.extraTitle + '</h4>' + chips(p.extra);
    if (p.extra2) h += '<h4>' + p.extraTitle2 + '</h4>' + chips(p.extra2);
    if (p.link) h += '<a class="dlink" href="' + p.link.u + '" target="_blank" rel="noopener">' + p.link.t + ' →</a>';
    h += '</div>';
    body.innerHTML = h;
    if (typeof guardAll === 'function') guardAll(body);
    dlg.scrollTop = 0;
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
  }
  document.getElementById('dlg-x').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });

  /* copy email */
  var copy = document.getElementById('copy');
  copy.addEventListener('click', function () {
    var addr = 'arulyogan97@gmail.com';
    function done(t) { copy.textContent = t; setTimeout(function () { copy.textContent = 'Copy address'; }, 1800); }
    try {
      navigator.clipboard.writeText(addr).then(function () { done('Copied'); }, function () { done('Select the address above'); });
    } catch (e) { done('Select the address above'); }
  });

  /* theme toggle */
  var root = document.documentElement, tb = document.getElementById('theme');
  function dark() { var t = root.getAttribute('data-theme'); return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; }
  function label() { tb.textContent = dark() ? 'Light' : 'Dark'; }
  try { var s = localStorage.getItem('yv-theme'); if (s) root.setAttribute('data-theme', s); } catch (e) {}
  label();
  tb.addEventListener('click', function () {
    var n = dark() ? 'light' : 'dark';
    root.setAttribute('data-theme', n);
    try { localStorage.setItem('yv-theme', n); } catch (e) {}
    label();
  });

  document.getElementById('yr').textContent = new Date().getFullYear();

  /* placeholder for any image that is missing */
  var PH = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#C9D0E6"/><stop offset="1" stop-color="#9AA6CF"/></linearGradient></defs><rect width="160" height="100" fill="url(#g)"/><rect x="62" y="30" width="36" height="40" rx="4" fill="none" stroke="#fff" stroke-width="3" opacity=".85"/><path d="M70 22v8M80 22v8M90 22v8M70 70v8M80 70v8M90 70v8M54 40h8M54 50h8M54 60h8M98 40h8M98 50h8M98 60h8" stroke="#fff" stroke-width="3" opacity=".85"/></svg>');
  function guard(img) {
    function swap() { if (!img.dataset.fallback) { img.dataset.fallback = '1'; img.src = PH; } }
    img.addEventListener('error', swap);
    if (img.complete && img.naturalWidth === 0) swap();
  }
  function guardAll(scope) { Array.prototype.forEach.call(scope.querySelectorAll('img'), guard); }
  guardAll(document);
})();
