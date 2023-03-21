import classNames from "classnames";
import Link from "next/link";
import { FC, ReactNode, useMemo } from "react";

interface TagProps {
  href: string;
  children?: ReactNode;
  modifier?: string;
  className?: string;
}

const Tag: FC<TagProps> = ({
  href,
  children,
  className,
  modifier,
  ...props
}: TagProps) => {
  const classes = useMemo(
    () => classNames('tag', {[`tag--${modifier}`]: !!modifier}, className), 
    [className, modifier]);

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  )
}

export default Tag;