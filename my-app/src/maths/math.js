const add = (a) => {
  if (a.trim() === "") {
    return "guest";
  }
  return a;
};

export default add;