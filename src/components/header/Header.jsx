import Icon from "../icon/Icon";
import Subtitle from "../subtitle/Subtitle";
import Title from "../title/Title";

function Header() {
  const links = [
    {
      image: "github",
      link: "https://github.com/Wallace-Bezerra",
      size: "50px",
    },
    {
      image: "linkedin",
      link: "https://www.linkedin.com/in/wallace-bezerra-1b305a200/",
      size: "40px"
    },
  ];
  return (
    <>
      <Title>Jogo da Velha!</Title>
      <Subtitle>Criado por Wallace Bezerra</Subtitle>
      <Icon links={links} />
    </>
  );
}

export default Header;
