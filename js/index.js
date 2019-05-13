const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",

    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",

    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navigation = document.querySelectorAll('nav a');
navigation[0].textContent = siteContent['nav']["nav-item-1"];
navigation[1].textContent = siteContent['nav']["nav-item-2"];
navigation[2].textContent = siteContent['nav']["nav-item-3"];
navigation[3].textContent = siteContent['nav']["nav-item-4"];
navigation[4].textContent = siteContent['nav']["nav-item-5"];
navigation[5].textContent = siteContent['nav']["nav-item-6"];
// Need to refactor? Is there a way to loop through this instead? 
// See: https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes


let snippet = document.getElementById("cta-img");
snippet.setAttribute('src', siteContent['cta']['img-src']);

let headerBigText = document.querySelector('.cta-text h1');
headerBigText.textContent = siteContent['cta']['h1'];

let startButton = document.querySelector('.cta-text button');
startButton.textContent = siteContent['cta']['button'];

let topFirstHeading = document.querySelector('.top-content div:nth-child(1) h4');
topFirstHeading.textContent = siteContent['main-content']['features-h4'];

let topFirstPara = document.querySelector('.top-content div:nth-child(1) p');
topFirstPara.textContent = siteContent['main-content']['features-content'];

let topSecondHeading = document.querySelector('.top-content div:nth-child(2) h4');
topSecondHeading.textContent = siteContent['main-content']['about-h4'];

let topSecondPara = document.querySelector('.top-content div:nth-child(2) p');
topSecondPara.textContent = siteContent['main-content']['about-content'];

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

let bottomFirstHeading = document.querySelector('.bottom-content div:nth-child(1) h4');
bottomFirstHeading.textContent = siteContent['main-content']['services-h4'];

let bottomFirstPara = document.querySelector('.bottom-content div:nth-child(1) p');
bottomFirstPara.textContent = siteContent['main-content']['services-content'];

let bottomSecondHeading = document.querySelector('.bottom-content div:nth-child(2) h4');
bottomSecondHeading.textContent = siteContent['main-content']['product-h4'];

let bottomSecondPara = document.querySelector('.bottom-content div:nth-child(2) p');
bottomSecondPara.textContent = siteContent['main-content']['product-content'];

let bottomThirdHeading = document.querySelector('.bottom-content div:nth-child(3) h4');
bottomThirdHeading.textContent = siteContent['main-content']['product-h4'];

let bottomThirdPara = document.querySelector('.bottom-content div:nth-child(3) p');
bottomThirdPara.textContent = siteContent['main-content']['product-content'];

let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

let contactAddress = document.querySelector('.contact p:nth-of-type(1)');
contactAddress.textContent = siteContent['contact']['address'];  // needs a line break in middle

let contactPhone = document.querySelector('.contact p:nth-of-type(2)');
contactPhone.textContent = siteContent['contact']['phone'];

let contactEmail = document.querySelector('.contact p:nth-of-type(3)');
contactEmail.textContent = siteContent['contact']['email'];

let footerText = document.querySelector('footer p');
footerText.textContent = siteContent['footer']['copyright'];