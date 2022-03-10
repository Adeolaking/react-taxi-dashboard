import NavBar from "./navBar";
import styled from "styled-components";
import Analytics from "./analytics";
import FAQ from "./Faq";
import Earnings from "./Earnings";
import Transfer from "./transfer";
import Profile from "./profile";





export default function Dashboard (){

    return(
        <Section>
           <NavBar/>
            <div className="grid">
                <div className="row__one">
                    <Analytics/>
                    <FAQ/>
                </div>
                <div className="row__two">
                   <Earnings/>
                   <Transfer/>
                   <Profile/>
                </div>
            </div>
        </Section>
    );
}

const Section =styled.section`
        height: 100vh;
        width: 100%;
        padding: 2rem;
        margin-left: 18vw;
        .grid{
            display: flex;
            flex-direction: column;
            height: 100%;
            gap: 1rem;
            margin-top: 2rem;
            .row__one{
                display: grid;
                grid-template-column: repeat(2, 1fr);
                height: 50%;
                gap: 1rem;
            }
            .row__two{
                display: grid;
                grid-template-column: repeat(3, 1fr);
                gap: 1rem;
                height: 50%;
            }

        }
`