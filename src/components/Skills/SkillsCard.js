import React from "react";

const SkillsCard = ({skill}) => {
    return(
        <div>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
        </div>
    )
}

export default SkillsCard