import { type PropsWithChildren } from 'react';

export default function SectionsContainer({children,id}:PropsWithChildren<{id:string}>) {
  return (
    <div id={id} className="px-16">
      {children}
    </div>
  )
}
