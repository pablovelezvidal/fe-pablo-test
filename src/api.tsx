export const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3333/numbers", {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        cache: "default",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
