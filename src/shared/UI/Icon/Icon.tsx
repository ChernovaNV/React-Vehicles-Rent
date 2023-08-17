
import  './Icon.scss'

interface IconProps {
    className?: string
    Svg: React.FC<React.SVGProps<SVGElement>>;
}

export const Icon: React.FC<IconProps> = ({className, Svg, ...otherProps}:IconProps) => {

  const classNames = [
    'Icon', 
    className
].join(" ");
    
  return <Svg className={classNames} {...otherProps}/>
}
