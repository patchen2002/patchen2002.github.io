import LinkedInLogo from "./assets/linkedin_png.png" 
import GitHubLogo from "./assets/github_png.png" 
import EmailLogo from "./assets/email_png.png" 
import HeadShot from "./assets/headshot_circle.png"
import StablerLogo from "./assets/stabler_logo.png"
import RiskLogo from "./assets/risk_logo.png"
import MyJournalLogo from "./assets/myjournal_logo.png"
import BigRedTalksLogo from "./assets/bigredtalks_logo.png"
import SynonymFinderLogo from "./assets/synonymfinder_logo.png"

function App() {
  return (
    <div>
      <div className="flex justify-center text-center items-center h-screen bg-plat">
        <div>
          <p className="text-5xl font-bold text-redw fade-in">CS @ Cornell University</p>
          <p className="text-9xl font-bold text-coffee p-8 fade-in">PATRICK CHEN</p>
          <p className="text-5xl font-bold text-redw fade-in">Software Engineer</p>
          <div className="flex justify-center">
            <a href="https://www.linkedin.com/in/patrick-chen-34b9b1205/" target="_blank" rel="noreferrer"><img
            className="transition ease-in-out duration-700 opacity-40 h-16 w-16 m-8 fade-in-image hover:opacity-100" 
            src={LinkedInLogo}
            alt="LinkedIn Logo"
            ></img></a>
            <a href="https://github.com/patchen2002" target="_blank" rel="noreferrer"><img
            className="transition ease-in-out duration-700 opacity-40 h-16 w-16 m-8 fade-in-image hover:opacity-100" 
            src={GitHubLogo}
            alt="GitHub Logo"
            ></img></a>
            <a href="mailto:pchen2002@gmail.com"><img
            className="transition ease-in-out duration-700 opacity-40 h-16 w-16 m-8 fade-in-image hover:opacity-100" 
            src={EmailLogo}
            alt="Email Logo"
            ></img></a>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center items-center h-screen border-b border-plat">
        <div>
          <p className="text-2xl text-redw">About Me</p>
          <p className="text-7xl font-bold text-coffee p-5">A Quick Introduction</p>
          <img
            className="h-44 w-44 mx-auto my-4" 
            src={HeadShot}
            alt="Headshot"
            ></img>
            <div>
              <p className="text-charc text-xl my-6 mx-16">My name is Patrick Chen, and welcome to my portfolio! I am currently a rising senior at Cornell Univeristy pursuing a major in 
              CS and a minor in Math. I am interested in many different areas of software engineering, specifically full stack development, machine learning, and algorithm development. When I am not 
              coding, I love to weightlift, cook, and eat what I cook. </p>
            </div>
        </div>
      </div>
      <div className="flex justify-center text-center">
        <div className="py-24 border-b border-plat w-screen">
          <p className="text-2xl text-redw">The Important Stuff</p>
          <p className="text-7xl font-bold text-coffee p-5">Work Experience</p>
            <div>
              <p className="text-charc text-6xl my-8">Capital One</p>
              <p className="text-charc text-xl">Software Engineer Intern</p>
              <p className="text-charc text-xl">June 2023-August 2023</p>
              <p className="text-charc text-6xl my-8">Pegasystems</p>
              <p className="text-charc text-xl">Software Engineer Intern</p>
              <p className="text-charc text-xl">May 2022-August 2022</p>
              <p className="text-charc text-6xl my-8">U4Ea</p>
              <p className="text-charc text-xl">Software Engineer Intern</p>
              <p className="text-charc text-xl">December 2021-January 2022</p>
            </div>
        </div>
      </div>
      <div className="flex justify-center text-center">
        <div className="py-24 w-screen">
          <p className="text-2xl text-redw">Some Cool Things I Made</p>
          <p className="text-7xl font-bold text-coffee p-5">Projects</p>
            <div>
              <div className="flex items-center justify-center h-full mx-auto">
                <div>
                  <a href="https://github.com/erichuang27/stabler_coin" target="_blank" rel="noreferrer"><img
                  className="transition ease-in-out duration-500 h-44 w-44 mx-12 my-6 hover:opacity-60" 
                  src={StablerLogo}
                  alt="Stabler Coin Logo"
                  ></img></a>
                </div>
                <div className="w-1/2">
                    <p className="text-3xl font-bold text-charc">Stabler Coin</p>
                    <p className="text-charc">May 2022</p>
                    <p className="text-charc">Stabler Coin is an over-collateralized, decentralized, and diversified stablecoin. 
                    Stabler originated from the Cornell Fintech Club x Avalanche Hackathon. React.js and TailwindCSS were used 
                    for the frontend and Solidity was used for the backend.
                    </p>
                </div>
              </div>
              <div className="flex items-center justify-center h-full mx-auto">
                <div>
                  <img
                  className="h-44 w-44 mx-12 my-6" 
                  src={RiskLogo}
                  alt="Risk Logo"
                  ></img>
                </div>
                <div className="w-1/2">
                    <p className="text-3xl font-bold text-charc">Risk</p>
                    <p className="text-charc">May 2022</p>
                    <p className="text-charc">This is a terminal line version of the board game Risk coded in OCaml. 
                    Allows for local play with up to four players. Has all the functionality, such as initialize, attack, fortify, and cards.
                    </p>
                </div>
              </div>
              <div className="flex items-center justify-center h-full mx-auto">
                <div>
                  <a href="https://github.com/patchen2002/My-Journal" target="_blank" rel="noreferrer"><img
                  className="transition ease-in-out duration-500 h-44 w-44 mx-12 my-6 hover:opacity-60" 
                  src={MyJournalLogo}
                  alt="My Journal Logo"
                  ></img></a>
                </div>
                <div className="w-1/2">
                    <p className="text-3xl font-bold text-charc">My Journal</p>
                    <p className="text-charc">April 2022</p>
                    <p className="text-charc">My Journal is a web application that allows users to create their own journal entries. 
                    They can then decide whether to make the journal entries public or private. 
                    Other users can then view shared posts. Created alone using the MERN stack.
                    </p>
                </div>
              </div>
              <div className="flex items-center justify-center h-full mx-auto">
                <div>
                  <a href="https://github.com/connorjchen/BigRedTalks" target="_blank" rel="noreferrer"><img
                  className="transition ease-in-out duration-500 h-44 w-44 mx-12 my-6 hover:opacity-60" 
                  src={BigRedTalksLogo}
                  alt="Big Red Talks Logo"
                  ></img></a>
                </div>
                <div className="w-1/2">
                    <p className="text-3xl font-bold text-charc">Big Red Talks</p>
                    <p className="text-charc">January 2022</p>
                    <p className="text-charc">BigRedTalks is a live chatroom that works only for verified Cornell students who are on campus. 
                    Worked as one of four programmers on this app. Created the backend using Node.js, MongoDB, Express.js, MongoDB Atlas, and Mongoose. 
                    Deployed using Heroku.
                    </p>
                </div>
              </div>
              <div className="flex items-center justify-center h-full mx-auto">
                <div>
                  <a href="https://github.com/patchen2002/Synonym-Finder" target="_blank" rel="noreferrer"><img
                  className="transition ease-in-out duration-500 h-44 w-44 mx-12 my-6 hover:opacity-60" 
                  src={SynonymFinderLogo}
                  alt="Synonym Finder Logo"
                  ></img></a>
                </div>
                <div className="w-1/2">
                    <p className="text-3xl font-bold text-charc">Synonym Finder</p>
                    <p className="text-charc">December 2021</p>
                    <p className="text-charc">Synonym Finder is a Python program where users can input multiple words/phrases and it will generate a list of synonyms. 
                    Created using Tkinter and BeautifulSoup.
                    </p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-plat">
        <p className="text-charc p-4">Made by Patrick Chen</p>
      </div>
    </div>
  );
}

export default App;