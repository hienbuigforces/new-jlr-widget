// 'use strict';

// let defaultHash = '5ab642bd8d72b7e4a0a12c479c9ac4ee1d8b807f';
// const markets = {
//     uk: {
//         jaguar: '5ab642bd8d72b7e4a0a12c479c9ac4ee1d8b807f',
//         lr: '3f4bc2735acfd53e9d694080fddd2f195e04b13a',
//     },
//     mena: {
//         jaguar: 'b2b638408285deda59476992bbf4788c869c7fb0',
//         lr: '934c151e11698fe854e3b0289bd400faea5680c2',
//     },
//     japan: {
//         jaguar: '321302dca2eeeebc7db50d6ecaf6c2ae0e41f824',
//         lr: 'cd95f5a2ddca4e0f50fa776d822e198e13488d5d',
//     },
//     korea: {
//         jaguar: 'b0ec590b77f3e9b3ed11fc4649071aa21818efea',
//         lr: '9d62e98b202172638b40bec8da10e1997862d165',
//     },
//     australia: {
//         jaguar: '9ac682ea9432143c0e33b1ac02c41400ec79ea7b',
//         lr: '5a487b3d63afecf43c743037c3abaaf8f2d915f6',
//     },
//     ireland: {
//         jaguar: '8e12468180009bc60b97d1835a600f9d2ab34a3b',
//         lr: '9b3539df8c088949e364a4cfd8f518484cd3fd05',
//     },
//     india: {
//         jaguar: 'c37b3dcb6149aac0b9cc087fb8af297402d3e7ea',
//         lr: '65d4e87766d2117936ca2c1b0edb1c903c703b10',
//     },
//     germany: {
//         jaguar: '20c223346b124f941adac6bbb09c26f2920a8025',
//         lr: 'ffa2e3e81f82812a001b2ee20dd73a6940a2d8ca',
//     },
// };

// const jlrWidget = document.querySelector('.nd-service-booking-widget');
// const ddMarkets = document.querySelector('#ddMarkets');
// const ddMakes = document.querySelector('#ddMakes');
// const btnOpen = document.querySelector('#btnOpenWidget');

// const loadMarkets = function () {
//     let dropdownHtml = '';
//     Object.keys(markets).map(data => {
//         dropdownHtml += `<option value="${data}">${data[0].toUpperCase() + data.slice(1)}</option>`;
//     });
//     ddMarkets.insertAdjacentHTML('beforeend', dropdownHtml);
//     loadManufactures(ddMarkets.value);
// };

// const loadManufactures = function (market) {
//     let dropdownHtml = '';
//     Object.entries(markets[market]).map(data => {
//         dropdownHtml += `<option value="${data[1]}">${data[0][0].toUpperCase() + data[0].slice(1)}</option>`;
//     });
//     ddMakes.insertAdjacentHTML('beforeend', dropdownHtml);
// };

// const loadWidget = function (hash) {
//     let scriptEmbeded = `<script type="text/javascript">
//         var nd = nd || {};
//         nd.widget = nd.widget || {};
//         nd.widget.serviceCentreV2 = nd.widget.serviceCentreV2 || {};
//         nd.widget.serviceCentreV2.retailerBooking = 0;
//         nd.widget.serviceCentreV2.dropcode = ["https://ndservicecentrev2.testing.docker.gforcesinternal.co.uk/", 'build/', ["${hash}"]];
//         window.nd = nd;
//         var s = 'script',
//         o = document.createElement(s);
//         o.type = 'text/javascript';
//         o.src = nd
//         .widget
//         .serviceCentreV2
//         .dropcode[0] + nd
//         .widget
//         .serviceCentreV2
//         .dropcode[1] + 'widget.js';
//         document
//         .getElementsByTagName(s)[0]
//         .parentNode
//         .appendChild(o);
//         </script>`;

//     jlrWidget.insertAdjacentHTML('afterend', scriptEmbeded);
// };

// btnOpen.addEventListener('click', function () {
//     loadWidget(ddMakes.value);
// });

// window.addEventListener('load', function () {
//     loadMarkets();
//     loadWidget(ddMakes.value);
// });

// ddMarkets.addEventListener('change', function () {
//     loadManufactures(ddMarkets.value);
// });
