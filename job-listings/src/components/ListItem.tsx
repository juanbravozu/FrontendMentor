import classNames from "classnames";
import Image from "next/image";
import { FC, ReactNode, useMemo } from "react";

interface ListItemProps {
  img: string;
  altText: string;
  modifier?: string;
  className?: string;
}

const ListItem: FC<ListItemProps> = ({
  className,
  modifier,
  img,
  altText
}) => {
  const classes = useMemo(
    () => classNames('list-item', {[`list-item--${modifier}`]: !!modifier}, className),
    [className, modifier]
  );

  return (
    <li className={classes}>
      <Image 
        className="list-item__image" 
        src={img} 
        alt={altText} 
        width={100}
        height={100}/>
    </li>
  )
}

export default ListItem;