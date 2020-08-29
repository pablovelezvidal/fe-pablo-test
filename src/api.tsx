export const fetchData = async () => {
  try {
    const response = await fetch(
      "http://ec2-18-209-100-121.compute-1.amazonaws.com:3333/numbers",
      {
        method: "GET",
        redirect: "follow",
        headers: {
          "Content-Type": "application/json",
          cache: "default",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
