const MyPromise = new Promise((resolve, reject) => {
  // const user = null;

  setTimeout(() => {
    resolve("success");
  }, 1000);
});

async function getData() {
  const res = await MyPromise;
  console.log(res);
}

getData();

fetch("")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

async function getUser() {
  const res = await fetch("");
  const user = await res.json();
  const res2 = await fetch("");
  const product = res2.json();

  console.log(user);
  console.log(product);
}
