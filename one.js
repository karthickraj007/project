async function hello() {
  return "hello world";
}

hello()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
