import React, { useState } from 'react'
import { languagesType } from '../../../assets/TsType/TypeScriptTypes'
import { BsCheckCircle } from "react-icons/bs";


export default function LanguagesDropdownMenu() {
    const [languages, setLanguages] = useState<languagesType>([
        { id: 1, img: "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-400.png", name: "Arabic", selected:true},
        { id: 2, img: "https://vectorflags.s3.amazonaws.com/flags/bd-square-01.png", name: "Bangali", selected:false},
        { id: 3, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png", name: "German", selected:false},
        { id: 4, img: "https://vectorflags.s3.amazonaws.com/flags/es-square-01.png", name: "Spanish", selected:false},
        { id: 5, img: "https://www.countryflags.com/wp-content/uploads/italy-flag-png-xl.png", name: "Italy", selected:false}
    ])
    const imgStyle: React.CSSProperties = {
        width: "22px",
        height: "22px",
        display: "block",
        objectFit: "cover",
        borderRadius: "50px"
    }

    const selectedChange = (selectedItem:number) => {
        const languageSelectValue = Object.values(languages).map((language) => language.selected);
        console.log(languageSelectValue)
    }
    return (
        <>
            {languages.map((language) =>
                    <div 
                    className={`languageContainer mb-1 p-2 d-flex justify-content-between align-items-center text-muted rounded ${language.selected && `bg-primary bg-opacity-10`}`} 
                    role="button" key={language.name}
                    onClick={() => selectedChange(language.id)}
                    >
                        <div className="languageInfo d-flex align-items-center">
                            <img src={language.img} alt="" style={imgStyle} />
                            <small className='m-0 ps-2 fw-semibold'>{language.name}</small>
                        </div>
                        {language.selected && <BsCheckCircle />}
                    </div>
            )}
        </>
    )
}
