import style from "./Icon.module.css";

function Icon({ links }) {
  return (
    <div className={style.iconContainer}>
      {links.map(({ link, image, size }) => {
        return (
          <a className={style.link} href={link} target="_blank">
            <img src={`/icons/${image}.svg`} alt="" width={size} />
          </a>
        );
      })}
    </div>
  );
}

export default Icon;
