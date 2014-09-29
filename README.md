## How to Use

Download `[jquery.fixedcontent.min.js](https://github.com/jeremychurch/FixedContent.js/blob/master/jquery.fixedcontent.min.js)` to your project folder and include it just before the closing `</body>` tag. Make sure to include the [jQuery library](https://developers.google.com/speed/libraries/devguide#jquery) as well.

`  <script src='jquery.min.js'></script>
  <script src='jquery.fixedcontent.min.js'></script>
</body>`

Nest `.js_fixedcontent` within a column (sidebar, etc.), then nest the desired fixed content within it (`.js_fixedcontent`) like so:

`<div class="sidebar-or-column-or-whatever">
  <div class="js_fixedcontent">
    <!-- content, nav, map, controls, etc. -->
  </div>
</div>`

### Suggestions

The plugin may not work well if `.js_fixedcontent` is added to an existing element or if CSS is applied to `.js_fixedcontent`.

Use this plugin sparingly. Most content should scroll naturally with the page. Determine whether it lends context or functionality as the page is scrolled.

## Custom Settings

Some of the settings can be customized:

`<script src='jquery.fixedcontent.min.js'></script>

<script>
  $('.js_fixedcontent').fixedcontent({
    marginTop: 24,
    minWidth: 767,
    zIndex: 500
  });
</script>`

### marginTop

The margin between the window and fixed element. The margin will remain as the page is scrolled. The default value is 24 (px).

### minWidth

The min-width value disables the plugin on mobile devices or narrow screens. If your columns become rows at a certain media query, then it can prevent `.js_fixedcontent` from overlapping other content. The default value is 767 (px).

### zIndex

The default value is 500, but a custom value can be defined if needed.

## Other Features

### Fluid Width

The `.js_fixedcontent` element will fill its parents width, both when the page is loaded and if the window is resized.

### Position on Load and Refresh

If the page is refreshed the fixed content will remain in its expected position, even if the page was scrolled to a lower position. The same is true if an anchor link from another page is clicked.

## Mobile-Friendly

### Min-Width

See `minWidth` section above.

### Height vs. Window Height

If the height of `.js_fixedcontent` is taller than the window, the plugin is disabled and the content will scroll with the page so nothing gets cut off.
