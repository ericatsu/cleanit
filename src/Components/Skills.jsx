import { Button } from "../elements/ButtonElements"
import {
    InfoContainer, InfoWrapper, InfoRow,
    Column1, TextWrapper, TopLine, Heading, Subtitle,
    BtnWrap, Column2, ImgWrap, Img
} from "../elements/AboutElements"
import skills from "../assets/images/skills.svg"

const Skills = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, point1,point2,point3, buttonLabel, img, alt, primary, dark, dark2 }) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{point1}</Subtitle>
                            <Subtitle darkText={darkText}>{point2}</Subtitle>
                            <Subtitle darkText={darkText}>{point3}</Subtitle>
                            <BtnWrap>
                                <Button to='Quote'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={skills} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default Skills
