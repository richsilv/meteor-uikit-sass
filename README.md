meteor-uikit-sass
=================

A lightweight and modular front-end framework for developing fast and powerful web interfaces, packaged for Meteor - SCSS version.

Full details [here](http://getuikit.com/docs/components.html).

Usage
=====

```shell
meteor add richsilv:uikit-sass
```

Then somewhere in your SCSS, include this line:

```css
@import "[PROJECT_ROOT]/.meteor/local/build/programs/server/assets/packages/richsilv_uikit-sass/assets/scss/_uikit.scss";
```

So if you're including this from `client/app.scss`, the easiest way is to do:

```css
@import "../.meteor/local/build/programs/server/assets/packages/richsilv_uikit-sass/assets/scss/_uikit.scss";
```
