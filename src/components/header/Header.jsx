import Icon from "../icon/Icon";
import Subtitle from "../subtitle/Subtitle";
import Title from "../title/Title";
import styles from "./Header.module.css"

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
      <div className={styles.iconContainer}>

        {links.map(({ image, link, size }, index) => {
          return (
            <Icon
              key={`Icon-key:${index}`}
              iconName={image}
              link={link}
              size={size}
            />
          )
        })}

      </div>
    </>
  );
}

export default Header;
