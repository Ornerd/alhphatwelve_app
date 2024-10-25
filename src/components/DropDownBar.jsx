import React from "react";
import SingleChevron from "./IconsSVG/SingleChevron";

const DropdownBar = ({defaultValue, otherOptions}) => {
    return (
        <button className={`drop-down-bar`}>
            <select className={`cursor-pointer absolute z-10 left-0 bg-transparent w-full h-full`}>
            <option value='select' selected>{defaultValue}</option>
            {/* {otherOptions.map((otherOption, index) => {
                return (
                    <option key={index}>{otherOption.name}</option>
                )
            }
            )} */}
            </select>
            <div>
                <SingleChevron/>
            </div>
        </button>
    )
}

export default DropdownBar;