import React,{Dispatch, FunctionComponent, useCallback,InputHTMLAttributes} from 'react'
import {useDropzone,} from 'react-dropzone'
import { useTranslation } from 'next-i18next';
import { useFormContext } from 'react-hook-form'
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  label?: string;
  name: string;
  onDrop:any;
  placeholder?: string;
  error?: string;
  shadow?: boolean;
  variant?: 'normal' | 'solid' | 'outline';
}
const fileinput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className = 'block',
      label,
      name,
      error,
      onDrop,
      // errorApi,
      placeholder,
      variant = 'normal',
      shadow = false,
      
      inputClassName,
      labelClassName,
      ...rest
    },
    ref
  )=>{
    // const {
      console.log("on drop++",onDrop);
      
    //   watch,
    // } = useFormContext()
    // const files: File[] = watch(name);
    // const rootClassName = cn(
    //   classes.root,
    //   {
    //     [classes.normal]: variant === 'normal',
    //     [classes.solid]: variant === 'solid',
    //     [classes.outline]: variant === 'outline',
    //   },
    //   {
    //     [classes.shadow]: shadow,
    //   },
    //   inputClassName
    // );
    
    const { t } = useTranslation();
    const {getRootProps,getInputProps,isDragReject,isDragAccept,acceptedFiles} =useDropzone({onDrop,multiple:true});
   
    return (
      <div className='p-4'>


      <div {...getRootProps()} className="h-40 w-full rounded-md cursor-pointer focus:outline-none">
        <input {...getInputProps()} 
        ref={ref}
        {...rest}
        /> 
      
        <p>Drag & Drop Files Here</p>
      </div>
      {/**/}
      </div>



    );
  }
);


export default fileinput
fileinput.displayName = 'FileInput';








