Package.describe({
    name: 'richsilv:uikit-sass',
    summary: 'A lightweight and modular front-end framework for developing fast and powerful web interfaces. SCSS version.',
    git: 'https://github.com/richsilv/meteor-uikit-sass',
    version: '1.0.1'
});

Package.on_use(function(api) {

    api.use('fourseven:scss@1.0.0', ['client', 'server']);
    api.imply('fourseven:scss@1.0.0', ['client', 'server']);
    api.use(['ui', 'jquery', 'templating'], 'client');

    var otherAssets = [
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
        ],
        scssAssets = [
          'assets/scss/uikit-mixins.scss',
          'assets/scss/_uikit.scss',
          'assets/scss/uikit-variables.scss',
          'assets/scss/components/autocomplete.scss',
          'assets/scss/components/cover.scss',
          'assets/scss/components/datepicker.scss',
          'assets/scss/components/dotnav.scss',
          'assets/scss/components/flex.scss',
          'assets/scss/components/form-advanced.scss',
          'assets/scss/components/form-file.scss',
          'assets/scss/components/form-password.scss',
          'assets/scss/components/form-select.scss',
          'assets/scss/components/htmleditor.scss',
          'assets/scss/components/nestable.scss',
          'assets/scss/components/notify.scss',
          'assets/scss/components/placeholder.scss',
          'assets/scss/components/search.scss',
          'assets/scss/components/slidenav.scss',
          'assets/scss/components/sortable.scss',
          'assets/scss/components/sticky.scss',
          'assets/scss/components/upload.scss',
          'assets/scss/core/alert.scss',
          'assets/scss/core/animation.scss',
          'assets/scss/core/article.scss',
          'assets/scss/core/autocomplete.scss',
          'assets/scss/core/badge.scss',
          'assets/scss/core/base.scss',
          'assets/scss/core/breadcrumb.scss',
          'assets/scss/core/button.scss',
          'assets/scss/core/close.scss',
          'assets/scss/core/comment.scss',
          'assets/scss/core/cover.scss',
          'assets/scss/core/datepicker.scss',
          'assets/scss/core/description-list.scss',
          'assets/scss/core/dotnav.scss',
          'assets/scss/core/dropdown.scss',
          'assets/scss/core/flex.scss',
          'assets/scss/core/form-advanced.scss',
          'assets/scss/core/form-file.scss',
          'assets/scss/core/form-password.scss',
          'assets/scss/core/form.scss',
          'assets/scss/core/form-select.scss',
          'assets/scss/core/grid.scss',
          'assets/scss/core/htmleditor.scss',
          'assets/scss/core/icon.scss',
          'assets/scss/core/list.scss',
          'assets/scss/core/modal.scss',
          'assets/scss/core/navbar.scss',
          'assets/scss/core/nav.scss',
          'assets/scss/core/nestable.scss',
          'assets/scss/core/notify.scss',
          'assets/scss/core/offcanvas.scss',
          'assets/scss/core/overlay.scss',
          'assets/scss/core/pagination.scss',
          'assets/scss/core/panel.scss',
          'assets/scss/core/placeholder.scss',
          'assets/scss/core/print.scss',
          'assets/scss/core/progress.scss',
          'assets/scss/core/search.scss',
          'assets/scss/core/slidenav.scss',
          'assets/scss/core/sortable.scss',
          'assets/scss/core/sticky.scss',
          'assets/scss/core/subnav.scss',
          'assets/scss/core/switcher.scss',
          'assets/scss/core/table.scss',
          'assets/scss/core/tab.scss',
          'assets/scss/core/text.scss',
          'assets/scss/core/thumbnail.scss',
          'assets/scss/core/tooltip.scss',
          'assets/scss/core/uikit.scss',
          'assets/scss/core/upload.scss',
          'assets/scss/core/utility.scss',
          'assets/scss/core/variables.scss'
        ];

    otherAssets.forEach(function(asset) {
      api.add_files(asset, 'client');
    });

    scssAssets.forEach(function(asset) {
      api.add_files(asset, ['server']);
    });

});

Package.on_test(function(api) {
    api.use('richsilv:uikit-sass');
    api.use('tinytest');

    api.add_files('richsilv:uikit-sass_tests.js');
});
