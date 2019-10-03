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

export const sortFunction = sort => {
    if (sort === "SORT_BY_TITLE") {
      return sortBy("string", "title")
    } else if (sort === "SORT_BY_RATING") {
      return sortBy("number", "rating");  
    } else {
      return sortBy("date", "timestamp");
    }
}