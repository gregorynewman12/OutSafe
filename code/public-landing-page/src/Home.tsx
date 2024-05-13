import styled from "@emotion/styled";
import Carousel from "./components/Carousel.tsx";
import NavBar from "./components/NavBar.tsx";

const Home = () => {
    const images = [
        '/Screen1.jpg',
        '/Screen2.jpg',
        '/bracelet.jpg',
    ];
  return (
    <>
        <CarouselDiv>
            <Carousel images={images}/>
            <GoalDiv>
                <h2>The Goal of "CAMS"</h2>
                <ul>
                    <li>
                        Serve as an emergency communication system that will provide critical emergency messaging between school/campus/building administrators and premises occupants anywhere on campus.
                    </li>
                    <li>
                        Offer occupants a user-friendly, coded wireless transmitter and wearable wristband alert device, and timely emergency messaging to inform and protect wireless device wearers when an emergency occurs.
                    </li>
                    <li>
                        Provide campuses with multiple occupants much-needed critical time increments to safely exit a building/campus, or notify to shelter in place, where and when appropriate.
                    </li>
                    <li>
                        Eliminate the need to use a public address system that may otherwise warn a perpetrator of an impending evacuation.
                    </li>
                    <li>
                        Provide peace of mind to all occupants.
                    </li>
                </ul>
            </GoalDiv>
        </CarouselDiv>
    </>
  )
}

const CarouselDiv = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 24px;
    gap: 48px;
    padding: 0px 48px;
`

const GoalDiv = styled.div`
    h2 {
        text-align: center;
    }
    li {
        margin: 4px 0px;
    }
    background-color: #E5E3C8;
    box-shadow: 8px 5px 5px gray;
    border-radius: 6px;
`

export default Home
