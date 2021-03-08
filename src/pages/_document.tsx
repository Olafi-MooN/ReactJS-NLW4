import document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument  extends document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;700&display=swap" rel="stylesheet"/> 
                    <link rel="shortcut icon" href="download/public/favicon.png" type="image/x-icon"/>
                </Head>
                <body>
                    <Main />
                    <NextScript/>
                </body>
            </Html>
        )
    }
}