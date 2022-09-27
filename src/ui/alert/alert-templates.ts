export const alertTemplates = {"container":"<div id=\"beacon-alert-modal-{{id}}\" class=\"beacon-alert__base animated fadeIn\">\n  <div class=\"beacon-modal__wrapper\">\n    <div class=\"beacon-modal__header\">\n      <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        id=\"Guides\"\n        x=\"0\"\n        y=\"0\"\n        version=\"1.1\"\n        viewBox=\"0 0 179.2 43\"\n        xml:space=\"preserve\"\n        width=\"140\"\n        height=\"40\"\n      >\n        <style>\n          .st0 {\n            fill: #3880ff;\n          }\n          .st1 {\n            fill: #fff;\n          }\n        </style>\n        <path\n          d=\"M45 19v.9c0 .3-.2 7.5-3.4 13.2-3.3 5.6-9.4 9.3-9.7 9.5l-.8.4-1.3-.8-7.6-4.4c-.5-.3-.9-.6-1.4-.9-.4-.3-.7-.5-1.1-.8-.8-.7-1.5-1.4-2.1-2.2-.9-1.1-1.6-2.4-2.1-3.7-.9-2.3-1.3-4.8-1.2-7.5.8-.4 1.6-.6 2.4-.6h.6c-.2 2.4.1 4.6.8 6.6 1 2.8 2.9 5.1 5.5 6.6l7.4 4.3c.2-.1.4-.2.6-.4 1.9-1.3 5.3-4.1 7.3-7.6 2.2-3.9 2.8-8.9 3-10.8L38.8 19c.3-1 .4-2.1.5-3.2L45 19z\"\n          class=\"st0\"\n        />\n        <path\n          d=\"M36.3 4.1v10.3c0 .5 0 1.1-.1 1.6s-.1.9-.2 1.3c-.2 1-.5 2-.9 3-.5 1.3-1.3 2.6-2.2 3.7-1.5 1.9-3.5 3.6-5.9 4.8-.9-.6-1.6-1.3-2-2.4 2.1-1 3.9-2.3 5.2-4 1.9-2.3 3-5.1 3-8.1V5.9l-.6-.3c-2-1-6.1-2.6-10.1-2.6-4.5 0-9.1 2-10.9 2.9v3.6c-1 .3-2 .7-3 1.1V4.1l.8-.4C9.7 3.5 16 0 22.5 0s12.8 3.5 13.1 3.6l.7.5z\"\n          class=\"st0\"\n        />\n        <path\n          d=\"M10.5 16.5l-7.4 4.3v.7c.2 2.1.9 6.5 2.9 10 2.2 3.9 6.2 6.9 7.9 8l3.1-1.8c.8.7 1.6 1.4 2.5 2L13.8 43l-.8-.5c-.3-.2-6.4-3.9-9.7-9.5C.1 27.4 0 20.2 0 19.9V19l1.3-.8L9 13.9c.5-.3.9-.5 1.4-.7.4-.2.8-.4 1.3-.5 1-.4 2-.6 3-.7 1.4-.2 2.9-.2 4.3 0 2.4.3 4.8 1.2 7.1 2.7 0 1-.4 2-1 2.9-1.9-1.3-4-2.2-6-2.5-3.1-.6-6-.1-8.6 1.4z\"\n          class=\"st0\"\n        />\n        <g>\n          <path\n            d=\"M73.9 23c.9 1 1.3 2.3 1.3 3.7 0 1.9-.6 3.4-1.9 4.5-1.3 1.1-3.1 1.7-5.5 1.7h-8.6v-23h8.4c2.3 0 4.1.5 5.3 1.5 1.2 1 1.8 2.4 1.8 4.2 0 1.5-.4 2.7-1.2 3.6-.8.9-1.8 1.5-3.1 1.8 1.5.3 2.6 1 3.5 2zm-11.7-3h5c1.5 0 2.6-.3 3.4-1 .8-.7 1.2-1.6 1.2-2.8 0-1.2-.4-2.1-1.1-2.8-.8-.7-1.9-1-3.5-1h-4.8V20zm8.7 9.4c.9-.7 1.3-1.7 1.3-3s-.4-2.3-1.3-3c-.9-.7-2.1-1.1-3.7-1.1h-5v8.2h5c1.6-.1 2.8-.4 3.7-1.1zM95.3 24.6H81c.1 2.1.6 3.6 1.7 4.6s2.4 1.5 4 1.5c1.4 0 2.6-.4 3.6-1.1 1-.7 1.6-1.7 1.8-2.9h3.2c-.2 1.2-.7 2.4-1.5 3.3-.8 1-1.7 1.7-2.9 2.3-1.2.5-2.6.8-4.1.8-1.7 0-3.2-.4-4.6-1.1-1.3-.7-2.4-1.8-3.1-3.2-.8-1.4-1.1-3-1.1-4.9 0-1.9.4-3.5 1.1-4.9.8-1.4 1.8-2.5 3.1-3.2 1.3-.7 2.9-1.1 4.6-1.1 1.7 0 3.3.4 4.6 1.1 1.3.7 2.3 1.7 3 3 .7 1.2 1 2.6 1 4.1.1.7 0 1.2-.1 1.7zm-3.5-4.8c-.5-.9-1.2-1.6-2.1-2-.9-.4-1.8-.7-2.8-.7-1.6 0-3 .5-4.1 1.5-1.1 1-1.7 2.5-1.8 4.5h11.5c0-1.3-.2-2.4-.7-3.3zM111.2 16c1.2.9 2.1 2 2.5 3.5V15h3v18h-3v-4.6c-.5 1.5-1.3 2.6-2.5 3.5-1.2.9-2.7 1.3-4.4 1.3-1.6 0-3-.4-4.3-1.1-1.2-.7-2.2-1.8-2.9-3.2-.7-1.4-1.1-3-1.1-4.9 0-1.9.4-3.5 1.1-4.9.7-1.4 1.7-2.5 2.9-3.2 1.2-.7 2.7-1.1 4.3-1.1 1.7-.1 3.1.4 4.4 1.2zm-8 3.1c-1.1 1.2-1.7 2.8-1.7 4.8 0 2.1.5 3.7 1.7 4.8 1.1 1.2 2.6 1.8 4.4 1.8 1.2 0 2.2-.3 3.2-.8.9-.5 1.7-1.3 2.2-2.3.5-1 .8-2.1.8-3.5 0-1.3-.3-2.5-.8-3.5s-1.2-1.8-2.2-2.3c-.9-.5-2-.8-3.2-.8-1.9.1-3.3.7-4.4 1.8zM135 16.6c1.5 1.2 2.4 2.9 2.8 4.9h-3.1c-.2-1.3-.8-2.3-1.8-3-1-.7-2.2-1.1-3.6-1.1-1 0-2 .2-2.9.7-.9.5-1.6 1.2-2.1 2.2-.5 1-.8 2.2-.8 3.7s.3 2.7.8 3.7 1.2 1.7 2.1 2.2c.9.5 1.8.7 2.9.7 1.4 0 2.6-.4 3.6-1.1 1-.7 1.6-1.8 1.8-3h3.1c-.3 2.1-1.3 3.7-2.8 4.9-1.5 1.2-3.4 1.8-5.7 1.8-1.7 0-3.2-.4-4.6-1.1-1.3-.7-2.4-1.8-3.1-3.2-.8-1.4-1.1-3-1.1-4.9 0-1.9.4-3.5 1.1-4.9.8-1.4 1.8-2.5 3.1-3.2 1.3-.7 2.9-1.1 4.6-1.1 2.3-.1 4.2.6 5.7 1.8zM154.5 15.9c1.4.7 2.4 1.8 3.2 3.2.8 1.4 1.2 3 1.2 4.9 0 1.9-.4 3.5-1.2 4.9-.8 1.4-1.8 2.4-3.2 3.2-1.4.7-2.9 1.1-4.6 1.1-1.7 0-3.3-.4-4.6-1.1-1.4-.7-2.4-1.8-3.2-3.2-.8-1.4-1.2-3-1.2-4.9 0-1.9.4-3.5 1.2-4.9.8-1.4 1.9-2.5 3.2-3.2 1.4-.7 2.9-1.1 4.6-1.1 1.7-.1 3.2.3 4.6 1.1zm-7.6 2.2c-.9.5-1.6 1.2-2.2 2.2-.6 1-.8 2.2-.8 3.7 0 1.4.3 2.7.8 3.6.6 1 1.3 1.7 2.2 2.2.9.5 1.9.7 3 .7s2.1-.2 3-.7c.9-.5 1.6-1.2 2.2-2.2.6-1 .8-2.2.8-3.6 0-1.5-.3-2.7-.8-3.7-.6-1-1.3-1.7-2.2-2.2-.9-.5-1.9-.7-3-.7s-2.1.2-3 .7zM177.3 16.7c1.3 1.3 1.9 3.3 1.9 5.8v10.4h-3V22.8c0-1.8-.5-3.2-1.4-4.1-.9-1-2.2-1.4-3.7-1.4-1.6 0-2.9.5-3.9 1.6s-1.5 2.6-1.5 4.6V33h-3V15h3v4.3c.5-1.5 1.3-2.6 2.4-3.4 1.2-.8 2.5-1.2 4-1.2 2.2 0 3.9.6 5.2 2z\"\n            class=\"st1\"\n          />\n        </g>\n      </svg>\n      <div id=\"beacon-alert-{{id}}-close\" class=\"beacon-modal__close__wrapper\">\n        <div class=\"beacon-modal__close__icon\">\n          <div class=\"beacon-modal__close__line1\"></div>\n          <div class=\"beacon-modal__close__line2\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"beacon-modal__base\">\n      <div id=\"beacon-modal__content\">\n        <div>\n          <p class=\"beacon-alert__title\">\n            {{callToAction}}\n          </p>\n\n          {{main}}\n\n          <div class=\"beacon-action__container\">\n            {{buttons}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n","default":{"html":"<div id=\"beacon-main-text\" class=\"beacon-alert__text\">\n  {{body}}\n</div>\n","css":":host {\n  --animation-duration: 300ms;\n  all: initial;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n.beacon-modal__wrapper {\n  position: relative;\n  top: 0;\n  display: inline-block;\n  z-index: 2147483000;\n  max-width: 500px;\n  width: 80%;\n  padding: 24px;\n}\n\n@media (min-height: 700px) {\n  .beacon-modal__wrapper {\n    top: 50%;\n    transform: translateY(-50%);\n  }\n}\n\n.theme__light .beacon-modal__base,\n.theme__light .beacon-modal__close__wrapper {\n  background: #fff;\n}\n\n.theme__dark .beacon-modal__base,\n.theme__dark .beacon-modal__close__wrapper {\n  background: #27334c;\n}\n\n.beacon-modal__base,\n.beacon-modal__close__wrapper {\n  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.1);\n}\n\n.beacon-modal__base {\n  margin: 0 auto;\n  border-radius: 32px;\n  overflow: hidden;\n}\n\n.beacon-modal__header {\n  padding: 16px 0;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.beacon-modal__headerLogo {\n  width: 100%;\n  max-width: 320px;\n  margin: 20px auto;\n  height: 100%;\n}\n\na,\nbutton {\n  cursor: pointer;\n}\n\n.beacon-modal__close__wrapper {\n  position: absolute;\n  top: 44px;\n  right: 24px;\n  z-index: 10000;\n  cursor: pointer;\n  border-radius: 100%;\n}\n\n.beacon-modal__close__icon {\n  width: 16px;\n  height: 16px;\n  position: relative;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n  margin: 8px;\n}\n\n.beacon-modal__close__line1 {\n  position: absolute;\n  width: 90%;\n}\n\n.beacon-modal__close__line2 {\n  position: absolute;\n  width: 90%;\n  transform: rotate(90deg);\n}\n\n.theme__light .beacon-modal__close__line2,\n.theme__light .beacon-modal__close__line1 {\n  border: 1px solid #000;\n}\n\n.theme__dark .beacon-modal__close__line2,\n.theme__dark .beacon-modal__close__line1 {\n  border: 1px solid #fff;\n}\n\n.beacon-alert__base {\n  position: fixed;\n  overflow-y: scroll;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2147482999;\n  background-color: rgb(17 17 17 / 0.84);\n  text-align: center;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  font-family: Roboto, Helvetica, sans-serif;\n}\n\n.beacon-alert__base::-webkit-scrollbar {\n  display: none;\n}\n\n.beacon-alert__title {\n  text-align: center;\n}\n\n.beacon-alert__text,\n.beacon-alert__title {\n  margin: 0 auto;\n  padding: 0 0 24px;\n}\n\n.margin__bottom {\n  margin-bottom: 16px;\n}\n\n.beacon-alert__title {\n  font-size: 18px;\n}\n\n.theme__light .beacon-alert__title {\n  color: #3b3d40;\n}\n\n.theme__dark .beacon-alert__title,\n.theme__dark .beacon-alert__text {\n  color: #7c99d6;\n}\n\n.beacon-alert__text {\n  color: #000;\n  font-size: 14px;\n}\n\n.beacon-modal__button,\n.beacon-modal__button--outline {\n  height: 36px;\n  font-size: 14px;\n  letter-spacing: 0.84px;\n  margin-bottom: 4px;\n  margin-inline-end: 2px;\n  margin-inline-start: 2px;\n  margin-left: 2px;\n  margin-right: 2px;\n  margin-top: 4px;\n  padding-inline-end: 15.4px;\n  padding-inline-start: 15.4px;\n  padding-left: 15.4px;\n  padding-right: 15.4px;\n  overflow-wrap: break-word;\n  pointer-events: auto;\n  text-align: center;\n  border-radius: 4px;\n  border: 2px solid #3880ff;\n}\n\n.beacon-modal__button {\n  background: #3880ff;\n  color: #fff;\n}\n\n.beacon-modal__button--outline {\n  background: #fff;\n  color: #444444;\n  border: 1px solid #444444;\n}\n\n.beacon-alert__image {\n  width: 200px;\n  height: 200px;\n  box-sizing: border-box;\n  box-shadow: 0 10px 20px 0 rgba(17, 17, 17, 0.12);\n  border: 1px solid rgba(17, 17, 17, 0.04);\n  border-radius: 16px;\n}\n.connect__btn {\n  margin: 24px 0;\n  width: 100%;\n}\n\n#beacon-modal__content {\n  padding: 24px;\n}\n\n#beacon-switch {\n  margin-top: 24px;\n}\n\n#beacon-title {\n  margin: 0 0 24px;\n}\n\na {\n  text-decoration: none;\n}\n\npre {\n  white-space: pre-wrap; /* css-3 */\n  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */\n  white-space: -pre-wrap; /* Opera 4-6 */\n  white-space: -o-pre-wrap; /* Opera 7 */\n  word-wrap: break-word; /* Internet Explorer 5.5+ */\n  padding: 16px;\n  background: #ececec;\n  line-height: 1.25rem;\n}\n"},"pair":{"html":"<span id=\"pairing-container\"></span>\n\n<div id=\"beacon-main-text\" class=\"beacon-alert__text\">\n  <p id=\"beacon-title\" class=\"beacon-list__title\">\n    Scan QR code with a Beacon-compatible wallet.\n    <a href=\"https://docs.walletbeacon.io/supported-wallets\" target=\"_blank\">Learn more</a>\n  </p>\n  {{body}}\n</div>\n\n<div id=\"beacon--switch__container\">\n  <button id=\"beacon-switch\" class=\"beacon-modal__button--outline\"></button>\n</div>\n\n<div id=\"beacon--disclaimer\"></div>\n","css":"#beacon-main-text {\n  display: initial;\n}\n.beacon-selection__container {\n  padding: 16px 16px 0;\n}\n.beacon-selection__list {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  text-decoration: none;\n  padding-bottom: 12px;\n  align-items: center;\n}\n.beacon-list__title {\n  text-align: left;\n  font-size: 12px;\n}\n.beacon-list__wrapper:nth-child(-n + 3) {\n  padding: 0 0 1rem;\n}\n.theme__light .beacon-list__title {\n  color: #7c828b;\n}\n.theme__dark .beacon-list__title,\n.theme__dark #beacon--disclaimer {\n  color: #7c99d6;\n}\n\n.beacon-selection__name {\n  font-size: 1rem;\n  font-weight: 600;\n  text-align: left;\n}\n.theme__light .beacon-selection__name,\n.theme__light .beacon--selection__name__lg {\n  color: #3b3d40;\n}\n.theme__dark .beacon-selection__name,\n.theme__dark .beacon--selection__name__lg {\n  color: #6183ff;\n}\n.beacon-selection__img {\n  width: 48px;\n  height: 48px;\n  box-shadow: 0 4px 12px 0 rgba(17, 17, 17, 0.24);\n  border-radius: 16px;\n  background-color: #fff;\n}\n.beacon--selection__name__lg {\n  font-size: 1.5rem;\n  font-weight: 600;\n  text-align: center;\n  padding: 1rem 0;\n}\n.beacon--selected__container {\n  padding: 2rem 0 0;\n}\n#beacon--qr__copy__container {\n  height: 0;\n}\n#beacon--qr__copy {\n  display: none;\n  position: relative;\n  top: -190px;\n  left: 138px;\n  margin: 0;\n}\n#beacon--qr__container {\n  margin-left: auto;\n  margin-right: auto;\n}\n#beacon--qr__container:hover #beacon--qr__copy {\n  display: block;\n}\n.disabled {\n  cursor: initial;\n}\n.disabled span,\n.disabled img {\n  opacity: 0.48;\n}\n.disabled p {\n  text-align: left;\n  margin: 0;\n  font-size: 10px;\n  font-weight: 300;\n}\n.disabled img {\n  -webkit-filter: grayscale(100%);\n  -moz-filter: grayscale(100%);\n  -ms-filter: grayscale(100%);\n  -o-filter: grayscale(100%);\n  filter: grayscale(100%);\n  filter: gray;\n}\n\n#beacon--disclaimer {\n  text-align: left;\n  padding-top: 24px;\n  font-size: 0.875rem;\n}\n.progress-line,\n.progress-line:before {\n  height: 3px;\n  width: -webkit-fill-available;\n  margin-left: -24px;\n  margin-right: -24px;\n}\n.progress-line {\n  background-color: #a7c4f7;\n  display: -webkit-flex;\n  display: flex;\n}\n.progress-line:before {\n  background-color: #3880ff;\n  content: '';\n  -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n}\n@-webkit-keyframes running-progress {\n  0% {\n    margin-left: 0px;\n    margin-right: 100%;\n  }\n  50% {\n    margin-left: 25%;\n    margin-right: 0%;\n  }\n  100% {\n    margin-left: 100%;\n    margin-right: 0;\n  }\n}\n@keyframes running-progress {\n  0% {\n    margin-left: 0px;\n    margin-right: 100%;\n  }\n  50% {\n    margin-left: 25%;\n    margin-right: 0%;\n  }\n  100% {\n    margin-left: 100%;\n    margin-right: 0;\n  }\n}\n"}}