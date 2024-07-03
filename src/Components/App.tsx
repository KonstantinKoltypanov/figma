import { Footer } from "./organisms/Footer/Footer";
import Header from "./organisms/Header/Header";
import { SectionEight } from "./organisms/SectionEight/SectionEight";
import { SectionFive } from "./organisms/SectionFive/SectionFive";
import { SectionFour } from "./organisms/SectionFour/SectionFour";
import { SectionOne } from "./organisms/SectionOne/SectionOne";
import { SectionSeven } from "./organisms/SectionSeven/SectionSeven";
import { SectionSix } from "./organisms/SectionSix/SectionSix";
import { SectionThree } from "./organisms/SectionThree/SectionThree";
import { SectionTwo } from "./organisms/SectionTwo/SectionTwo";
import { SectionPrice } from "./organisms/sectionPrice/SectionPrice";



export  const  App = () => {
    return (
        <>
            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionPrice />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <SectionEight />
            <Footer />
        </>
    );
};
