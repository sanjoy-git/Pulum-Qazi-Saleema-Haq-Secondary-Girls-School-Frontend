import * as React from 'react';

import {
  toast,
  ToastWrapper
} from 'keep-react'


export interface IToastNoticeProps {
  text:string;
}


function ToastNotice({text}: IToastNoticeProps) {

  React.useEffect(() => {
    toast.success(text);
  }, [])

  return (
    <div className=' '>
      <ToastWrapper
        richColors={true}
        toastOptions={{
          classNames: {
            title: 'text-body-3 font-medium',
            toast: 'rounded-xl shadow-large',
            description: 'text-body-4 font-normal',
          },
        }}
      />
    </div>
  );
}

export default ToastNotice;
