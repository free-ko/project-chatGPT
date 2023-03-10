export const defaultStyle = `
  /*! sanitize.css v7.0.3 | CC0 License | github.com/csstools/sanitize.css */

  /* Document
     * ========================================================================== */

  /**
     * 1. Remove repeating backgrounds in all browsers (opinionated).
     * 2. Add border box sizing in all browsers (opinionated).
     */

  *,
  ::before,
  ::after {
    background-repeat: no-repeat; /* 1 */
    box-sizing: border-box; /* 2 */
  }

  /**
     * 1. Add text decoration inheritance in all browsers (opinionated).
     * 2. Add vertical alignment inheritance in all browsers (opinionated).
     */

  ::before,
  ::after {
    text-decoration: inherit; /* 1 */
    vertical-align: inherit; /* 2 */
  }

  /**
     * 1. Use the default cursor in all browsers (opinionated).
     * 2. Use the default user interface font in all browsers (opinionated).
     * 3. Correct the line height in all browsers.
     * 4. Use a 4-space tab width in all browsers (opinionated).
     * 5. Prevent adjustments of font size after orientation changes in
     *    IE on Windows Phone and in iOS.
     * 6. Breaks words to prevent overflow in all browsers (opinionated).
     */

  html {
    cursor: default; /* 1 */
    font-family: 'Spoqa Han Sans', sans-serif !important;

    line-height: 1.15; /* 3 */
    -moz-tab-size: 4; /* 4 */
    tab-size: 4; /* 4 */
    -ms-text-size-adjust: 100%; /* 5 */
    -webkit-text-size-adjust: 100%; /* 5 */
    word-break: break-word; /* 6 */
  }

  /* Sections
     * ========================================================================== */

  /**
     * Remove the margin in all browsers (opinionated).
     */

  body {
    margin: 0;
  }

  h1 {
    font-size: 2em;
    margin: 0;
  }
  
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  /* Grouping content
     * ========================================================================== */

  /**
     * 1. Add the correct sizing in Firefox.
     * 2. Show the overflow in Edge and IE.
     */

  hr {
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
     * Add the correct display in IE.
     */

  main {
    display: block;
  }

  /**
     * Remove the list style on navigation lists in all browsers (opinionated).
     */

  nav ol,
  nav ul {
    list-style: none;
  }

  pre {
    font-family: 'Spoqa Han Sans', sans-serif !important;
    font-size: 1em; /* 2 */
  }

  /* Text-level semantics
     * ========================================================================== */

  /**
     * Remove the gray background on active links in IE 10.
     */

  a {
    background-color: transparent;
    text-decoration: none;
    color: unset;
  }

  /**
     * Add the correct text decoration in Edge, IE, Opera, and Safari.
     */

  abbr[title] {
    text-decoration: underline dotted;
  }

  code,
  kbd,
  samp {
    font-family: 'Spoqa Han Sans', sans-serif !important;
    font-size: 1em; /* 2 */
  }

  /**
     * Add the correct font size in all browsers.
     */

  small {
    font-size: 80%;
  }

  /*
     * Remove the text shadow on text selections in Firefox 61- (opinionated).
     * 1. Restore the coloring undone by defining the text shadow
     *    in all browsers (opinionated).
     */

  ::-moz-selection {
    background-color: #b3d4fc; /* 1 */
    color: #000; /* 1 */
    text-shadow: none;
  }

  ::selection {
    background-color: #b3d4fc; /* 1 */
    color: #000; /* 1 */
    text-shadow: none;
  }

  /* Embedded content
     * ========================================================================== */

  /*
     * Change the alignment on media elements in all browers (opinionated).
     */

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  /**
     * Add the correct display in IE 9-.
     */

  audio,
  video {
    display: inline-block;
  }

  /**
     * Add the correct display in iOS 4-7.
     */

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  /**
     * Remove the border on images inside links in IE 10-.
     */

  img {
    border-style: none;
  }

  /**
     * Change the fill color to match the text color in all browsers (opinionated).
     */

  svg:not([fill]) {
    fill: currentColor;
  }

  /**
     * Hide the overflow in IE.
     */

  svg:not(:root) {
    overflow: hidden;
  }

  /* Tabular data
     * ========================================================================== */

  /**
     * Collapse border spacing in all browsers (opinionated).
     */

  table {
    border-collapse: collapse;
  }

  /* Forms
     * ========================================================================== */

  /**
     * Inherit styling in all browsers (opinionated).
     */

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    padding: 0;
    border: 0;
  }

  /**
     * Remove the margin in Safari.
     */

  button,
  input,
  select {
    margin: 0;
  }

  /**
     * 1. Show the overflow in IE.
     * 2. Remove the inheritance of text transform in Edge, Firefox, and IE.
     */

  button {
    background-color: transparent;
    overflow: visible; /* 1 */
    text-transform: none; /* 2 */
  }

  /**
     * Correct the inability to style clickable types in iOS and Safari.
     */

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  /**
     * Correct the padding in Firefox.
     */

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
     * Show the overflow in Edge and IE.
     */

  input {
    overflow: visible;
  }

  legend {
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    white-space: normal; /* 1 */
  }

  /**
     * 1. Add the correct display in Edge and IE.
     * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
     */

  progress {
    display: inline-block; /* 1 */
    vertical-align: baseline; /* 2 */
  }

  /**
     * Remove the inheritance of text transform in Firefox.
     */

  select {
    text-transform: none;
  }

  /**
     * 1. Remove the margin in Firefox and Safari.
     * 2. Remove the default vertical scrollbar in IE.
     * 3. Change the resize direction on textareas in all browsers (opinionated).
     */

  textarea {
    margin: 0; /* 1 */
    overflow: auto; /* 2 */
    resize: vertical; /* 3 */
  }

  /**
     * Remove the padding in IE 10-.
     */

  [type='checkbox'],
  [type='radio'] {
    padding: 0;
  }

  /**
     * 1. Correct the odd appearance in Chrome and Safari.
     * 2. Correct the outline style in Safari.
     */

  [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
     * Correct the cursor style of increment and decrement buttons in Safari.
     */

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  /**
     * Correct the text style of placeholders in Chrome, Edge, and Safari.
     */

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 1;
  }

  /**
     * Remove the inner padding in Chrome and Safari on macOS.
     */

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /**
     * Remove the inner border and padding of focus outlines in Firefox.
     */

  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
     * Restore the focus outline styles unset by the previous rule in Firefox.
     */

  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /* Interactive
     * ========================================================================== */

  /*
     * Add the correct display in Edge and IE.
     */

  details {
    display: block;
  }

  /*
     * Add the correct styles in Edge, IE, and Safari.
     */

  dialog {
    background-color: white;
    border: solid;
    color: black;
    display: block;
    height: fit-content;
    left: 0;
    margin: auto;
    padding: 1em;
    position: absolute;
    right: 0;
    width: -moz-fit-content;
    width: fit-content;
  }

  dialog:not([open]) {
    display: none;
  }

  /*
     * Add the correct display in all browsers.
     */

  summary {
    display: list-item;
  }

  /* Scripting
     * ========================================================================== */

  /**
     * Add the correct display in IE 9-.
     */

  canvas {
    display: inline-block;
  }

  /**
     * Add the correct display in IE.
     */

  template {
    display: none;
  }

  /* User interaction
     * ========================================================================== */

  /*
     * 1. Remove the tapping delay in IE 10.
     * 2. Remove the tapping delay on clickable elements
          in all browsers (opinionated).
     */

  a,
  area,
  button,
  input,
  label,
  select,
  summary,
  textarea,
  [tabindex] {
    -ms-touch-action: manipulation; /* 1 */
    touch-action: manipulation; /* 2 */
  }

  /**
     * Add the correct display in IE 10-.
     */

  [hidden] {
    display: none;
  }

  /* Accessibility
     * ========================================================================== */

  /**
     * Change the cursor on busy elements in all browsers (opinionated).
     */

  [aria-busy='true'] {
    cursor: progress;
  }

  /*
     * Change the cursor on control elements in all browsers (opinionated).
     */

  [aria-controls] {
    cursor: pointer;
  }

  /*
     * Change the cursor on disabled, not-editable, or otherwise
     * inoperable elements in all browsers (opinionated).
     */

  [aria-disabled='true'],
  [disabled] {
    cursor: not-allowed;
  }

  /*
     * Change the display on visually hidden accessible elements
     * in all browsers (opinionated).
     */

  [aria-hidden='false'][hidden]:not(:focus) {
    clip: rect(0, 0, 0, 0);
    display: inherit;
    position: absolute;
  }
  
  input[type=range] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type=range]:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  input[type=range]::-ms-track {
    width: 100%;
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent; 
    border-color: transparent;
    color: transparent;
  }
`;
