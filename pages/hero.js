import axios from "axios";
function Hero({ response }) {
  return (
    <div>
      <ul>
        {response.map((item) => (
          <li key={item.name}>
            {item.name} {item.bairro}
          </li>
        ))}
      </ul>
    </div>
  );
}
Hero.getInitialProps = async (ctx) => {
  console.log("Teste");
  try {
    var response = await axios.get("http://192.168.0.108:3000/api/hello");
    console.log(response.data.usrs);
    return { response: response.data.usrs };
  } catch (erro) {
    console.log("Deu erro", erro);
  }
};
export default Hero;
