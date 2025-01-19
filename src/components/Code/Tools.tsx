import Side from "./Side";

export default function Tools() {
  const title = "Languages and Frameworks"
  const tools =  ["Git","Github","Splunk","Zeek","Snort","Wireshark","MITRE","OSINT","Linux"]
  const description = "I use Git for version control and have experience with GitHub. I monitor and analyze security events using Splunk, Zeek, Snort, and Wireshark. I apply threat intelligence frameworks like MITRE and leverage OSINT for investigations. I work with Linux for system administration and development tasks."  
  
  return (
    <Side title={title} items={tools} description={description} />
  )
}
