
const skills = [
    "Python",
    "Java",
    "C#",
    "ASP.NET",
    "MySQL",
    "Express",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Git",
]

const GenerateSkillPills = () =>{
    return(
        <>
            {skills.map((skill) => {
                <h4>
                    {skill}
                </h4>
            })}
        </>
    )
}

const Banner = () => {
    return(
        <div className="banner">
            
            {/* Info */}
            <div className="banner_info">
                {/* Profile: Img/Name */}
                <div className="info_profile">
                    <div className="profile_img_container">
                        <img src="./logos/profile_logo.jpeg" className="profile_img"/>
                    </div>
                    <div className="profile_name">
                        <h1>Parth Gajjar</h1>
                        <h3>Software Engineer</h3>
                    </div>
                </div>

                {/* Socials */}
                <div className="info_socials">
                    
                    <div className="social_pill">
                        <a href="https://www.linkedin.com/in/parth-gajjar09/">
                            <img className="social_pill_icon" src="#"/>
                            <p>LinkedIn</p>
                        </a>
                    </div>
                    
                    <div className="social_pill">
                    <a href="https://github.com/ghostp13409">
                        <img className="social_pill_icon" src="#"/>
                        <p>GitHub</p>
                    </a>
                    </div>
                    <div className="social_pill">
                    <a href="https://leetcode.com/u/ghostp134/">
                        <img className="social_pill_icon" src="#"/>
                        <p>LeetCode</p>
                    </a>
                    </div>
                    <div className="social_pill">
                    <a href="https://secure.plum.io/en/p/JtxPo7fSBtszN9pAfC9Emw">
                        <img className="social_pill_icon" src="#"/>
                        <p>Plum.io</p>
                    </a>
                    </div>
                </div>
            </div>

            {/* Skills */}
            <div className="banner_skills">
                <h4>ReactJS</h4>
                <h4>NodeJS</h4>
                <h4>ExpressJS</h4>
                <h4>MongoDB</h4>
                <h4>Python</h4>
                <h4>Java</h4>
                <h4>HTML/CSS</h4>
                <h4>JavaScript</h4>
                <h4>MySQL</h4>
                <h4>DSA</h4>
            </div>
        </div>

    )
}

export default Banner;

// Socials
{/* <div className="banner_social_pill">
<a href="#">
    <img className="social_pill_icon" src="#"/>
    <p>LinkedIn</p>
</a>
</div>
<div className="banner_social_pill">
<a href="#">
    <img className="social_pill_icon" src="#"/>
    <p>GitHub</p>
</a>
</div>
<div className="banner_social_pill">
<a href="#">
    <img className="social_pill_icon" src="#"/>
    <p>LeetCode</p>
</a>
</div>
<div className="banner_social_pill">
<a href="#">
    <img className="social_pill_icon" src="#"/>
    <p>Plum.io</p>
</a>
</div>
</div> */}

// Extra 

{/* <div className="banner_info">
                <div className="banner_img_container">
                    <img src="./logos/profile_logo.jpeg" className="banner_img"/>
                </div>
                <div className="banner_text">
                    <h1>Parth <br />
                        Gajjar</h1>
                    <h3>Software Engineer</h3>
                    <div className="banner_skills">
                        <h4>ReactJS</h4>
                        <h4>NodeJS</h4>
                        <h4>ExpressJS</h4>
                        <h4>MongoDB</h4>
                        <h4>Python</h4>
                        <h4>Java</h4>
                        <h4>HTML/CSS</h4>
                        <h4>JavaScript</h4>
                        <h4>MySQL</h4>
                        <h4>DSA</h4>
                    </div>
                </div>
</div> */}