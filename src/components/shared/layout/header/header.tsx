import React from "react";
import "./header.css";

type Props = {};
type State = {};

const Logo = () => <div className="relative block p-4 lg:p-6 text-xl text-blue-600 font-bold">Logo</div>;

const HoverableTitle = () =>
    <div className="w-full text-white mb-8">
        <h2 className="font-bold text-2xl">Main Hero Message for the menu section</h2>
        <p>Sub-hero message, not too long and not too short. Make it just right!</p>
    </div>;

type HoverableSegment = {
    image: string
    heading: string;
    paragraph: string;
}
const HoverableSegment = (props: HoverableSegment) =>
    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
        <div className="flex items-center">
            <svg className="h-8 mb-3 mr-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20">
                <path d={props.image}/>
            </svg>
            <h3 className="font-bold text-xl text-white text-bold mb-2">{props.heading}</h3>
        </div>
        <p className="text-gray-100 text-sm">{props.paragraph}</p>
        <div className="flex items-center py-3">
            <svg className="h-6 pr-3 fill-current text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
            </svg>
            <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
        </div>
    </ul>;


type Hoverable = {
    title: string
    background?: string;
    children: any;
}
const Hoverable = (props: Hoverable) =>
    <li className={`hoverable hover:${props.background} hover:text-white`}>
        <a href="#"
           className={`relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:${props.background} hover:text-white`}>
            {props.title}
        </a>
        <div className={`p-6 mega-menu mb-16 sm:mb-0 shadow-xl ${props.background}`}>
            <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                <HoverableTitle/>
                {props.children}
            </div>
        </div>
    </li>;

type Example = {
    amount?: number
}

const Example = (props: Example) => {
    const one =
        <HoverableSegment
            image={"M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"}
            heading={"Heading 1"}
            paragraph={"Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires."}/>;
    const two =
        <HoverableSegment
            image={"M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"}
            heading={"Heading 2"}
            paragraph={"Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling."}/>;
    const three = <HoverableSegment
        image={"M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"}
        heading={"Heading 3"}
        paragraph={"This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience."}/>;
    const four = <HoverableSegment
        image={"M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"}
        heading={"Heading 4"}
        paragraph={"This is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity."}/>;
    switch (props.amount) {
        case 1:
            return <>{one}</>;
        case 2:
            return <>{one}{two}</>;
        case 3:
            return <>{one}{two}{three}</>;
        default:
            return <>{one}{two}{three}{four}</>;
    }
};

class Header extends React.Component<Props, State> {
    render() {

        return (
            <header className="bg-gray-200 font-sans leading-normal tracking-normal">
                <nav className="relative bg-white border-b-2 border-gray-300 text-gray-900">
                    <div className="container mx-auto flex justify-between">
                        <Logo/>
                        <ul className="flex">
                            <Hoverable title={"Hover 1"} background={"bg-blue-800"}>
                                <Example amount={1}/>
                            </Hoverable>
                            <Hoverable title={"Hover 2"} background={"bg-red-800"}>
                                <Example amount={2}/>
                            </Hoverable>
                            <Hoverable title={"Hover 3"} background={"bg-yellow-800"}>
                                <Example amount={3}/>
                            </Hoverable>
                            <Hoverable title={"Hover 4"} background={"bg-purple-800"}>
                                <Example/>
                            </Hoverable>
                            <Hoverable title={"Hover 5"} background={"bg-green-800"}>
                                <Example/>
                            </Hoverable>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}


export default Header;

