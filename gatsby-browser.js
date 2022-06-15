const React = require('react');
const Layout = require('./src/components/layout').default;
const transitionDelay = 1500

exports.shouldUpdateScroll = ({
                                  routerProps: {location},
                                  getSavedScrollPosition
                              }) => {
    if (location.action === "PUSH") {
        window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
    } else {
        window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)

        // const savedPosition = getSavedScrollPosition(location)
        // window.setTimeout(
        //     () => window.scrollTo(...(savedPosition || [0, 0])),
        //     transitionDelay
        // )
    }
    return false
}

// exports.onRouteUpdate = ({location, prevLocation}) => {
//     console.log("new pathname", location.pathname)
//     console.log("old pathname", prevLocation ? prevLocation.pathname : null)
// }


exports.wrapPageElement = ({element}) => {
    const newElement = React.cloneElement(
        element,  // I18nextProvider
        element.props,
        React.cloneElement(
            element.props.children,  // I18nextContext.Provider
            element.props.children.props,
            React.createElement(
                Layout,
                undefined,
                // element.props.children,
                element.props.children.props.children,
            ),
        ),
    );
    return newElement;
};