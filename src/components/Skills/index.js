import React from "react";
import { SkillsArray } from "./SkillsArray";
import SkillsCard from "./SkillsCard";

const Skills = () => {

    const skillsData = SkillsArray

    // return(
    //     <div className="col-4">
    //         <h2>Skills:</h2>
    //         <div className="container">
    //             <div className="row">
    //                 {skillsData.map((item) => {
    //                     return(
    //                         <div className="col">
    //                             {item.list.map((skill) => {
    //                                 return(
    //                                     <SkillsCard skill={skill}/>
    //                                 )
    //                             })}
    //                         </div>
    //                     )
    //                 })}
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Skills;