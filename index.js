// const formatter = new Intl.DateTimeFormat(undefined, { year: "2 digit" });
// console.log(formatter.format(new Date()));

// Display Names

const name1 = new Intl.DisplayNames(["en"], { type: "region" });
console.log(name1.of("US"));

// DateTimeFormat

date = new Date();
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(new Intl.DateTimeFormat("de-DE", options).format(date));

// Duration Convert the input duration in required format

//Only works in Safari

// duration = {
//   hours: 1,
//   minutes: 25,
// };
// const duration_user = new Intl.DurationFormat("en", { style: "long" });
// duration_user.format(duration);

// const duration = {
//   hours: 1,
//   minutes: 46,
//   seconds: 40,
// };

// // With style set to "long" and locale "fr-FR"
// new Intl.DurationFormat("fr-FR", { style: "long" }).format(duration);
// // "1 heure, 46 minutes et 40 secondes"

// // With style set to "short" and locale "en"
// new Intl.DurationFormat("en", { style: "short" }).format(duration);
// // "1 hr, 46 min and 40 sec"

// // With style set to "short" and locale "pt"
// new Intl.DurationFormat("pt", { style: "narrow" }).format(duration);
// // "1h 46min 40

//List Format

const vehicles = ["Motorcycle", "Bus", "Car"];

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
console.log(formatter.format(vehicles));

const formatter2 = new Intl.ListFormat("de", {
  style: "short",
  type: "disjunction",
});
console.log(formatter2.format(vehicles));

// NumberFormat

const number = new Intl.NumberFormat("ja-jp", {
  style: "currency",
  currency: "JPY",
});
console.log(number.format(12345));

// Plural Rules

const enOrdinalRules = new Intl.PluralRules("en-US", { type: "ordinal" }); //Type can be cardinal or ordinal
console.log(enOrdinalRules.select(0)); // "other" (0th)
console.log(enOrdinalRules.select(1)); // "one"   (1st)
console.log(enOrdinalRules.select(2)); // "two"   (2nd)
console.log(enOrdinalRules.select(3)); // "few"   (3rd)
console.log(enOrdinalRules.select(4)); // "other" (4th)
console.log(enOrdinalRules.select(21)); // "one"  (21st)

const nums = new Intl.PluralRules("en", { type: "ordinal" });
const obj = new Map([
  ["one", "st"],
  ["two", "nd"],
  ["three", "rd"],
  ["four", "th"],
]);

const function_rule = (p) => {
  const a = nums.select(p);
  const suffix = obj.get(a);
  console.log(`${p}${suffix}`);
};

function_rule(2);

// Relative Time

const rtf1 = new Intl.RelativeTimeFormat("en", { style: "short" });

console.log(rtf1.format(-1, "day"));
console.log(rtf1.format(3, "quarter"));

const rtf2 = new Intl.RelativeTimeFormat("us", { numeric: "auto" });

console.log(rtf2.format(2, "day"));
