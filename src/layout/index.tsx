import React from 'react'
import { Helmet } from "react-helmet";
import Header from './header';
type Props = {
  title: string,
  children: JSX.Element|JSX.Element[],
};

const Layout = (
  { title, children }: Props
) => {
  return (
    <div className='flex flex-col items-center min-h-screen justify-between relative overflow-x-hidden overflow-y-hidden bg-main'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="w-full flex flex-col gap-16">
        {children}
      </main>
    </div>
  )
}

export default Layout