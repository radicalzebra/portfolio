import SectionsContainer from "../SectionsContainer"
import HeaderLabel from "../HeaderLabel"
import Languages from "./Languages"
import Tools from "./Tools"

export default function CodeSection() {
  return (
    <SectionsContainer id={"code"}>
     <HeaderLabel text={"skills"}/>

     <main className="flex justify-between items-start bg-red-40 ">
      <Languages/>
      <Tools/>
     </main>

    </SectionsContainer>
  )
}

