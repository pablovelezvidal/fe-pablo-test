export const fetchData = async () => {
  try {
    const response = await fetch(
      "http://ec2-18-209-100-121.compute-1.amazonaws.com:3333/numbers",
      {
        method: "GET",
        redirect: "follow",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, "Error catched and returning local numbers");
    let randomsNums = () => {
      let arr = [];
      while (arr.length < 20) {
        let r = Math.floor(Math.random() * 100) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
      }
      return arr;
    };

    return randomsNums();
  }
};
