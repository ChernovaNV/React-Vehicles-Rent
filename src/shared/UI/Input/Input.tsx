import React, {ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState} from 'react';

import './Input.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HtmlInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    placeholder?: string;
    type?: string;
    autoFocus?: boolean;
    id?:string;
    readonly?:boolean;
}

export const Input: React.FC<InputProps> = memo(({
    className, 
    value = '',
    placeholder, 
    type = 'text', 
    // id,
    readonly,
    autoFocus,
    onChange,
    ...otherProps
}: InputProps) => {
    
    const classNames = [
      'Input', 
      className
    ].join(" ");

    const [isFocused, setIsFocused] = useState(false)

    const ref = useRef<HTMLInputElement>(null)
  
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value)
    }
  
    const onBlur = () => {
      setIsFocused(false)
    }
  
    const onFocus = () => {
      setIsFocused(true)
    }

    useEffect(() => {
      if (autoFocus) {
        setIsFocused(true)
        ref.current?.focus()
      }
    }, [autoFocus])

    return (
        <input 
            type={type}
            value={value}
            onChange={onChangeHandler}
            className={classNames}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={ref}
            readOnly={readonly}
            placeholder={placeholder}
            {...otherProps}
        />
    );
});

 