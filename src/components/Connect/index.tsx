import SectionsContainer from '../SectionsContainer'
import HeaderLabel from '../HeaderLabel'
import BigHeader from './BigHeader'

export default function ConnectSection() {
  const github = "https://github.com/radicalzebra"
  const linkedin = "https://www.linkedin.com/in/arshad-faiyaz-6052a1200/"
  const gmail = "https://mail.google.com/mail/?view=cm&fs=1&to=ourself786@gmail.com"
  return (
    <SectionsContainer id={"connect"}>
      <HeaderLabel text={"Get in touch with me"}/>

      <BigHeader 
       hiddenText={"Connect with me on Linkedin & let's grow our professional network together"}
       bigText={"Linkedin"}
       link={linkedin}
      />

      <BigHeader 
       hiddenText={"Send me an email & let's talk about your project and anything else"}
       bigText={"Gmail"}
       link={gmail}
      />

      <BigHeader 
       hiddenText={"Check out my projects on Github & let's collaborate on something"}
       bigText={"Github"}
       link={github}
      />
    </SectionsContainer>
  )
}
