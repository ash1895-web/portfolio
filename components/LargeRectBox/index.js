import Image from "next/image";

import style from "./largerectbox.module.css";

const largeRectBox = ({
  title,
  titleColor,
  description,
  descriptionColor,
  frontBgColor,
  backBgColor,
  icon,
  imageSrc,
}) => {

  const backgroundStyling = frontBgColor ? `${frontBgColor}` : `url(${imageSrc}) center/cover no-repeat`

  const frontStyling = {
    background: backgroundStyling,
    color: `${titleColor}`,
  };

  const backStyling = {
    backgroundColor: `${backBgColor}`,
    color: `${descriptionColor}`,
  };

  return (
    <div className={style.card}>
      <div className={style.front} style={frontStyling}>
        {icon && title ? (
          <>
            <Image src={icon} width={50} height={50} alt='icon'/>
            <p>{title}</p>
          </>
        ) : null}

        {icon && !title ? (
          <>
            <Image src={icon} width={100} height={100} alt='icon'/>
          </>
        ) : null}

        {!icon && title ? (
          <>
            <p>{title}</p>
          </>
        ) : null}
      </div>
      <div className={style.back} style={backStyling}>{description}</div>
    </div>
  );
};

export default largeRectBox;
