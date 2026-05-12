  <script>
    (function () {
      var RATIO = 0.63;

      function init() {
        var group = document.querySelector('.hero-name-group');
        var h1    = document.querySelector('.hero-name-group h1');
        if (!group || !h1) return;

        var fullH = h1.getBoundingClientRect().height;
        if (fullH < 1) return; // fonts not rendered yet

        var clipH = Math.round(fullH * RATIO);

        group.style.setProperty('--name-full-h', Math.ceil(fullH) + 'px');

        // Only apply clip height if not already expanded
        if (!group.classList.contains('expanded') &&
            !group.matches(':hover') &&
            !group.matches(':focus-within')) {
          group.style.height = clipH + 'px';
        }

        // Update on hover/focus listeners to use exact values
        function expand() {
          group.style.height = Math.ceil(fullH) + 'px';
          group.style.borderBottomColor = 'transparent';
        }
        function collapse() {
          if (!group.classList.contains('expanded')) {
            group.style.height = clipH + 'px';
            group.style.borderBottomColor = '';
          }
        }

        group.addEventListener('mouseenter', expand);
        group.addEventListener('mouseleave', collapse);
        group.addEventListener('focusin',    expand);
        group.addEventListener('focusout',   collapse);
      }

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(init);
      } else {
        setTimeout(init, 250);
      }

      var timer;
      window.addEventListener('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(init, 80);
      });
    })();
  </script>

