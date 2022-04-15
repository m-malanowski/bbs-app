import "./src/index.scss"

import Layout from "./src/components/layout";

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};