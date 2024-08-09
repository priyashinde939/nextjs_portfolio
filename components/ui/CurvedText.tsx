import React from 'react'
import ReactCurvedText from 'react-curved-text';


const CurvedText = () => {
    return (
        <ReactCurvedText width={300}
            height={300}
            cx={150}
            cy={150}
            rx={100}
            ry={100}
            startOffset={0}
            reversed={true}
            text='SED CONDIMENTUM MUS AUGUE LUCTUS SED CONDIMENTUM MUS AUGUE'
            textPathProps={{"fill": "#ffffff"}}
            textProps={{ style: { fontSize: 20.5, transform: "rotate(0deg)", fontFamily:"Gravis" } }}
            svgProps={{"className":"animate-spinSlow absolute top-0 bottom-10"}} />
    );
};

export default CurvedText;