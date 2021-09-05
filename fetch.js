const fetchData = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ user: "Ashwin" });
    }, 3000);
  });
};

export { fetchData };