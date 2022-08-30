// dates ::
/*
-> Intl.DateTimeFormat()
Sytx : 
new Intl.DateTimeFormat()
new Intl.DateTimeFormat(locales)
new Intl.DateTimeFormat(locales, options)

*/

const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "numeric",
  year: "numeric",
  // weekday: 'long',
};
console.log("----- Dates -----");
const locale = navigator.language;
console.log(locale);

const ans = new Intl.DateTimeFormat(locale, options).format(now);
console.log(ans);

// numbers

// Internationalizing Numbers (Intl)
const num = 3884764.23;

const options2 = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
  // useGrouping: false,
};

console.log("----- Numbers -----");
console.log("US:      ", new Intl.NumberFormat("en-US", options2).format(num));
console.log("Germany: ", new Intl.NumberFormat("de-DE", options2).format(num));
console.log("Syria:   ", new Intl.NumberFormat("ar-SY", options2).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options2).format(num)
);
