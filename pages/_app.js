import { appWithTranslation } from 'next-i18next'
import App from "next/app";
import React from 'react';

const MyApp = ({ Component, pageProps }) => {
    // React.useEffect(() => {
    //     // Remove the server-side injected CSS.
    //     const jssStyles = document.querySelector("#jss-server-side");
    //     if (jssStyles) {
    //         jssStyles.parentElement.removeChild(jssStyles);
    //     }
    // }, []);
    return (<Component {...pageProps} />)
}

MyApp.getInitialProps = async (appCtx) => {
    console.log("_app.js1")
    const appProps = await App.getInitialProps(appCtx);
    console.log("_app.js2")
   
    return {
        ...appProps,
    };
};

export default appWithTranslation(MyApp)
