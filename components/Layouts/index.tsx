import React, { ReactNode } from 'react'
import Head from 'next/head'

interface Props {
    children:ReactNode;
}

const Layouts: React.FC<Props> = ({children}) => {
    return (
        <>
            <Head>
                <title>Country Profile</title>
                <meta name="description" content="Building Country Profile Card" />
                <link rel="icon" href="/globe_sextant.ico" />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layouts;