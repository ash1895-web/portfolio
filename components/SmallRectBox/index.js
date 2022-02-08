import Image from "next/image";
import Link from "next/link"
import style from "./smallrectbox.module.css";

const smallRectBox = ({
  title,
  titleColor,
  description,
  descriptionLinkExternal,
  descriptionLink,
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

  const linkStyling = {
    color: `${descriptionColor}`
  }

  return (
    <div className={style.card}>
      <div className={style.front} style={frontStyling}>
        {icon && title ? (
          <>
            <Image src={icon} width={50} height={50} alt='icon'/>
            <p>{title}</p>
          </>
        ) : null}

        {
          icon && !title ? (
            <>
              <Image src={icon} width={100} height={100} alt='icon'/>
            </>
          ) : null
        }

        {
          !icon && title ? (
            <>
              <p>{title}</p>
            </>
          ): null
        }

      </div>
      <div className={style.back} style={backStyling}>
        {descriptionLinkExternal ? 
        <a style={linkStyling} target="_blank" rel="noreferrer noopener" href={descriptionLinkExternal}>{description}</a>
         : <Link href={descriptionLink}>{description}</Link>}
      </div>
    </div>
  );
};

export default smallRectBox;
