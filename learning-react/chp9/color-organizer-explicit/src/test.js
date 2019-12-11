// const colors = [
//     {
//       "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
//       "title": "ocean at dusk",
//       "color": "#00c4e2",
//       "rating": 5
//     },
//     {
//       "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
//       "title": "lawn",
//       "color": "#26ac56",
//       "rating": 0
//     },
//     {
//       "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
//       "title": "bright red",
//       "color": "#ff0000",
//       "rating": 3
//     }
// ];
// const sortBy = (type, field) => {
//     switch (type) {
//         case "date": 
//           return (a, b) => new Date(b[field]) - new Date(a[field]);
//         case "string":
//           return (a, b) => (a[field] < b[field]) ? -1 : 1;
//         case "number":
//           const myfunc = (x, y) => x.rating - y.rating;
//           return myfunc;
//         default: 
//           //ret
//           //return (a, b) => b[field] - a[field];
//     }
// }

// const sortFunction = sort => {
//     if (sort === "SORTED_BY_TITLE") {
//         sortBy("string", "title")
//     } else if (sort === "SORTED_BY_RATING") {
//         // const myfunc = (x, y) => x.rating - y.rating;
//         // return myfunc;
//       return sortBy("number", "rating");  
//     } else {
//         sortBy("date", "timestamp");
//     }
// }


// const sortedColors = [...colors].sort(sortFunction('SORTED_BY_RATING'));

// console.log(sortedColors);