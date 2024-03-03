// EXAMPLE 1 - Merge Set Objects using JavaScript

const set1 = new Set(['bobby', 'hadz']);
const set2 = new Set(['com']);

const set3 = new Set([...set1, ...set2]);
console.log(set3); // 👉️ Set(3) { 'bobby', 'hadz', 'com' }

// ------------------------------------------------------------------

// // EXAMPLE 2 - Merge `Set` objects using a `for...of` loop

// function mergeSetObjects(...sets) {
//   const set = new Set();

//   for (const s of sets) {
//     for (const element of s) {
//       set.add(element);
//     }
//   }

//   return set;
// }

// const set1 = new Set(['bobby', 'hadz']);
// const set2 = new Set(['com']);

// const set3 = mergeSetObjects(set1, set2);
// console.log(set3); // 👉️ Set(3) { 'bobby', 'hadz', 'com' }
