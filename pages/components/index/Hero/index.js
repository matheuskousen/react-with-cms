import axios from "axios";
function Hero({ response }) {
  return (
    <div>
      <h1>Next JS </h1>
      <ul>
        <li> {JSON.stringify(response)}</li>
      </ul>
    </div>
  );
}
Hero.getInitialProps = async (ctx) => {
  try {
    var response = await axios.get("http://192.168.0.108:3000/api/hello");
    console.log(response.data.usrs);
    return { response: response.data.usrs };
  } catch (erro) {
    console.log("Deu erro", erro);
  }
};
export default Hero;
