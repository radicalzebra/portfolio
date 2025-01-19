import Side from "./Side";

export default function Languages() {
  const title = "Languages and Frameworks"
  const skills = ["React","NextJs","TailwindCss","TypeScript","NodeJs","Express","Shadcn-UI","Python","Bash","Powershell","Rest API"]
  const description = "I primarily work with React and the libraries surrounding it my frontend tools for both personal and professional projects.I also have some experience with backend technologies like NodeJS, Express, MongoDB.I am familiar with REST  architecture."
  
  return (
    <Side title={title} items={skills} description={description} />
  )
}

