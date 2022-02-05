import { FooterContainer, FooterWrap, FooterLinksContainer,
FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,
FooterLink, SocialMedia, SocialIcons, SocialMediaWrap,
SocialLogo, WebsiteRights, SocialIconLink } from '../elements/FooterElements';
import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaGithub} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
        <FooterWrap>
        <FooterLinksContainer> 
            <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                            <FooterLink to="/HireMe">How I Work</FooterLink>
                            <FooterLink to="/HireMe">Testimonals</FooterLink>
                            <FooterLink to="/HireMe">Resume</FooterLink>
                            <FooterLink to="/HireMe">Partners</FooterLink>
                            <FooterLink to="/HireMe">Terms of Services</FooterLink>                        
                            </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Support</FooterLinkTitle>
                            <FooterLink to="/HireMe">Support Request</FooterLink>
                            <FooterLink to="/HireMe">Contact</FooterLink>
                            <FooterLink to="https://paypal.me/eric380418?locale.x=en_US">PayPal</FooterLink>
                        </FooterLinkItems>
            </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Me</FooterLinkTitle>
                            <FooterLink to="https://wa.me/0570448184">WhatsApp</FooterLink>
                            <FooterLink to="https://t.me/les_ter">Telegram</FooterLink>
                            <FooterLink to="/">Mail</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="https://www.linkedin.com/in/eric-atsu-4065681b4/">LinkedIn</FooterLink>
                            <FooterLink to="https://github.com/ericatsu">GitHub</FooterLink>
                            <FooterLink to="//www.twitter.com/1LeS_Ter">Twitter</FooterLink>
                            <FooterLink to="//www.youtube.com/channel/UCZvhEk5BETiadTJY4CdxIIQ">YouTube</FooterLink>
                            <FooterLink to="https://www.instagram.com/1les_ter/">Instagram</FooterLink>
                            <FooterLink to="/">Twitch</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                    lester
                </SocialLogo>
                <WebsiteRights>lester © {new Date().getFullYear()}
                
                  All Rights Reserved.</WebsiteRights>
                <SocialIcons>
                        <SocialIconLink href='//www.linkedin.com/in/eric-atsu-4065681b4/' target="_blank" aria-label="LinkedIn">
                      <FaLinkedin />
                  </SocialIconLink>
                        <SocialIconLink href='//www.github.com/ericatsu' target="_blank" aria-label="GitHub">
                      <FaGithub />
                  </SocialIconLink>
                        <SocialIconLink href='//www.twitter.com/1LeS_Ter' target="_blank" aria-label="Twitter">
                      <FaTwitter />
                  </SocialIconLink>
                        <SocialIconLink href='//www.youtube.com/channel/UCZvhEk5BETiadTJY4CdxIIQ' target="_blank" aria-label="YouTube">
                      <FaYoutube />
                  </SocialIconLink>
                        <SocialIconLink href='https://t.co/GpR3XOwvMC?amp=1' target="_blank" aria-label="Instagram">
                      <FaInstagram />
                  </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
        </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
