import React from "react"

export function Introduction() {
  return (
    <div className="space-y-4 font-sans">
    

      <p className="font-light ">I love the <span className="font-semibold"> real world.</span></p>
        <div className="max-w-xl">
        <p className="font-light">
        Focused on doing great work to improve how phyiscal things are made in a digital world. Currently learning (by doing) how physical and digital products are made.
        </p>
        <br/>
        <p className="font-light">
            My formal education is in Finance/Econ from Rotman Commerce @
            <span className="font-semibold"> University of Toronto. </span> My informal education spans 
            <span className="font-semibold"> UI design,</span>
            <span className="font-semibold"> Front-end development </span> and
            <span className="font-semibold">  data-science.</span>
            
            {/* <span className="font-semibold">Next.js</span>,{" "}
            <span className="font-semibold">React</span>, and{" "}
            <span className="font-semibold">TypeScript</span> for the frontend and{" "}
            <span className="font-semibold">Django</span> for the backend. */}
        </p>
      </div>
      <p className="font-light">
        I currently work as a 
        <span className="font-semibold"> Process Engineer</span> doing warehousing analytics & project management @
        {/* <span className="font-semibold"> Analytics / Project Management</span> at{" "} */}
        <span className="font-semibold"> Procter & Gamble</span>. 
      </p>
    </div>
  )
}