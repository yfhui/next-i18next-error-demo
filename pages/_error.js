import { useRouter } from 'next/router'

export default function Custom500(props) {
    console.log("rendering react 500 page")
    const { locale } = useRouter();
    console.log("client locale",locale);

    return (
        <div>error</div>
    );
}

export const getStaticProps = async ({ req, res, query, locale }) => {
    console.log("rendering 500",locale);
    return { props: {} };
}