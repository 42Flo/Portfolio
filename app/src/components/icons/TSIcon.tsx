import { SVGProps } from 'react';

export default function TSIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 14 14"
      {...props}
    >
      <path
        d="M1 7v6h12V1H1v6zm7.36-.21v.538H6.811v4.922H5.547V7.328H4V6.25h4.36v.54zm3.046-.474c.192.037.408.089.483.117l.127.051v.586c0 .324-.01.586-.02.586-.009 0-.107-.051-.22-.112-.421-.24-1.096-.328-1.509-.207a.894.894 0 0 0-.319.193c-.112.108-.135.173-.135.347 0 .187.023.239.178.384.098.094.464.31.82.487.75.37 1.13.685 1.303 1.074.155.347.16 1.078.01 1.406-.141.31-.45.624-.755.769-.647.305-1.702.333-2.527.06l-.295-.098v-1.303l.234.169c.305.22.699.356 1.111.384.413.029.717-.047.905-.225.117-.107.14-.168.14-.346 0-.343-.196-.52-1.003-.915-.712-.351-.937-.51-1.148-.82-.469-.68-.328-1.72.3-2.194.534-.407 1.42-.557 2.32-.393Z"/>
    </svg>
  )
}
