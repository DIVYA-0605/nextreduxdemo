import Page from "../components/Page";


const Other = (props) => {
  return <Page title="Other Page" linkTo="/" />;
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//   const response = await fetch(
//     `https://reqres.in/api/users/${Math.floor(Math.random() * 10 + 1)}`
//   );
//   const { data } = await response.json();
//   store.dispatch(addUser(`${data.first_name} ${data.last_name}`));
//   store.dispatch(increment())
// })

export default Other;
