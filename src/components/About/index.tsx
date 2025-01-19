import SectionsContainer from "../SectionsContainer";
import Answer from "./Answer";
import Question from "./Question";

export default function AboutSection() {
  return (
    <SectionsContainer id={"about"}>
      <main className="flex justify-between gap-10">
         <Question/>
         <Answer/>
      </main>
    </SectionsContainer>
  )
}
