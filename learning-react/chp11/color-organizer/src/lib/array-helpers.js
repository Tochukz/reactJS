const sortBy = (type, field) => {
    switch (type) {
        case "date" : 
          return (a, b) => new Date(b[field]) - new Date(a[field]);
        case "string" :
          return (a, b) => (a[field] < b[field]) ? -1 : 1;
        default: 
          return (a, b) => b[field] - a[field];
    }
}

const sortMap = {
  title: "SORT_BY_TITLE",
  rating: "SORT_BY_RATING",
  date: "SORT_BY_DATE"
}

export const sortFunction = sort => {
    if (sortMap[sort] === "SORT_BY_TITLE") {
      return sortBy("string", "title")
    } else if (sortMap[sort] === "SORT_BY_RATING") {
      return sortBy("number", "rating");  
    } else {
      return sortBy("date", "timestamp");
    }
}