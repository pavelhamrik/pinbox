import Document, {Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps}
    }

    render() {
        return (
            <html>
            <Head>
                <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
                {/*<link rel="icon" type="image/png" href="/static/images/favicon-underscore@2x.png" sizes='32x32'/>*/}
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}

export default MyDocument;