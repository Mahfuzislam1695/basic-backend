// pending

//resolve

//rejected

const myPromise = new Promise((resolve, reject) => {
  // const user = null;
  const user = {id: 1};
  if (!user) {
    reject("something is wrong");
  } else {
    setTimeout(() => {
      resolve({name: "Mahfuz Islam"});
    }, 1000);
  }
});

myPromise
  .then((res) => console.log("found in then", res))
  .catch((err) => console.log("found in catch", err));

  const userIds =[1, 2, 3, 4, 5]
  let userData=[]

  for (let i = 0; i < userIds.length; i++) {
    const userId = userIds[i];
    userData.push(myPromise);
  }

  Promise.all(userData).then(res =>{
    console.log(res);
  })