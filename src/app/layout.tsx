import { ReactNode } from "react";
import type { Metadata } from "next";
import Head from 'next/head';
import StyledComponentsRegistry from '../lib/registry'
import GlobalStyle from '@/styles/GlobalStyle';
import GradientCircle from "@components/GradientCircle/GradientCircle";

export const metadata: Metadata = {
     title: "Ernest Pough",
     description: "This is a Next.js project developed by Ernest Pough. It showcases proficiency in JavaScript, TypeScript, React, and npm.",
    metadataBase: new URL('https://ernestpough.dev/'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://ernestpough.dev/',
        images: [
            {
                url: '/images/thumbnail.png',
                width: 800,
                height: 600,
                alt: 'Ernest Pough',
            },
        ],
    },
};

export default function RootLayout({
   children,
}: Readonly<{
    children: ReactNode;
}>) {
    const ogImage = Array.isArray(metadata.openGraph?.images) ? metadata.openGraph.images[0] : undefined;
    const ogImageUrl = ogImage && typeof ogImage === 'object' && 'url' in ogImage ? ogImage.url.toString() : undefined;


    return (
        <html>
        <Head>
            <meta property="og:image" content={ogImageUrl} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
        <GlobalStyle />
        <StyledComponentsRegistry>
            <GradientCircle />
            {children}
        </StyledComponentsRegistry>
        </body>
        </html>
    );
}