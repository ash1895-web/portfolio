import style from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <div className={style.text}>
          <h1>Aseer Ansari</h1>
          <p>Front-end Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
