import style from "./Icon.module.css";

function Icon({ link, iconName, size } ) {
  return (
    <a className={style.link} href={link} target="_blank">
      <img src={`/icons/${iconName}.svg`} alt="" width={size} />
    </a>
  );
}

export default Icon;
