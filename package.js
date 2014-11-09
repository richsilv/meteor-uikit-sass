Package.describe({
    name: 'richsilv:uikit-sass',
    summary: 'A lightweight and modular front-end framework for developing fast and powerful web interfaces. SCSS version.',
    git: 'https://github.com/richsilv/meteor-uikit-sass',
    version: '1.0.0'
});

Package.on_use(function(api) {
    /* Use or imply other packages.
     
     * Example:
     *  api.use('ui', 'client');
     *  api.use('iron-router', ['client', 'server']);
     */

    /*
     * Add files that should be used with this
     * package.
     */
    api.use('fourseven:scss@1.0.0', ['client', 'server']);
    api.imply('fourseven:scss@1.0.0', ['client', 'server']);
    api.use(['ui', 'jquery', 'templating'], 'client');

    var assets = [
      'assets/js/uikit.min.js',
      'assets/js/components/autocomplete.min.js',
      'assets/js/components/cover.min.js',
      'assets/js/components/datepicker.min.js',
      'assets/js/components/form-password.min.js',
      'assets/js/components/form-select.min.js',
      'assets/js/components/htmleditor.min.js',
      'assets/js/components/nestable.min.js',
      'assets/js/components/notify.min.js',
      'assets/js/components/pagination.min.js',
      'assets/js/components/search.min.js',
      'assets/js/components/sortable.min.js',
      'assets/js/components/sticky.min.js',
      'assets/js/components/timepicker.min.js',
      'assets/js/components/upload.min.js',
      'assets/fonts/FontAwesome.otf',
      'assets/fonts/fontawesome-webfont.eot',
      'assets/fonts/fontawesome-webfont.ttf',
      'assets/fonts/fontawesome-webfont.woff'
    ]

    // api.add_files('assets/scss/uikit-mixins.scss', 'client');
    // api.add_files('assets/scss/uikit-variables.scss', 'client');
    // api.add_files('assets/scss/uikit.scss','client');

    assets.forEach(function(asset) {
      api.add_files(asset, 'client');
    });

    /*
     * Export global symbols.
     *
     * Example:
     *  api.export('GlobalSymbol');
     */
});

Package.on_test(function(api) {
    api.use('richsilv:uikit-sass');
    api.use('tinytest');

    api.add_files('richsilv:uikit-sass_tests.js');
});
