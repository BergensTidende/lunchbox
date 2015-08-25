// widths and padding
var canvasWidth = 1000; // this will be the exported width of the image
var elementPadding = 40; // padding around the logo and credit text

// logo configuration
// the name of the logo object should match the value of the corresponding radio button in the HTML.
var logos = {
    'bt': {
        whitePath: '../img/bt/bt_logo_small_white.svg', // path to white logo
        blackPath: '../img/bt/bt_logo_small_black.svg', // path to black logo
        w: 75, // width of logo
        h: 44, // height of logo
        display: 'BT'
    },
    'btbrif': {
        whitePath: '../img/bt/btbrif_logo_white.svg',
        blackPath: '../img/bt/btbrif_logo.svg',
        w: 176,
        h: 44,
        display: 'Bt Brif'
    }
};

// logo opacity for colors
var whiteLogoAlpha = '0.8';
var blackLogoAlpha = '0.6';

// type
var fontWeight = 'normal'; // font weight for credit
var fontSize = '16pt'; // font size for credit
var fontFace = "Helvetica"; // font family for credit
var fontShadow = 'rgba(0,0,0,0.7)'; // font shadow for credit
var fontShadowOffsetX = 0; // font shadow offset x
var fontShadowOffsetY = 0; // font shadow offset y
var fontShadowBlur = 10; // font shadow blur

// copyright options
var orgName = 'BT';
var freelanceString = 'for ' + orgName;

var copyrightOptions = {
    'internal': {
        showPhotographer: true, // show the photographer input box
        showSource: false, // show the source input box
        photographerRequired: true, // require a photographer
        sourceRequired: false, // require a source
        source: orgName, // How the source should appear on the image, e.g. 'NPR'
        display: orgName, // How the option will appear in the dropdown menu   
    },
    'scanpix': {
        showPhotographer: true,
        showSource: false,
        photographerRequired: false,
        sourceRequired: true,
        source: 'Scanpix',
        display: 'Scanpix'
    }
}

// app load defaults
var currentCrop = 'twitter'; // default crop size
var currentLogo = 'bt'; // default logo slug
var currentLogoColor = 'white'; // default logo color
var currentTextColor = 'white'; // default text color
var defaultImage = '../img/test-kitten.jpg'; // path to image to load as test image
var defaultLogo = logos[currentLogo]['whitePath'] // path to default logo