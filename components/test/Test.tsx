import "../../css/helpers.scss";
import * as Scrollytelling from "@/lib/scrollytelling-client";


export const Test = () => {
    return (
        <Scrollytelling.Root
        start="top bottom"
        end="bottom top"
        scrub={1}
        >
        <div className="flex flex-grid items-center justify-center bg-slate-900 h-60vh"> 
            <Scrollytelling.Parallax
            tween={{
                start: 0,
                end: 100,
                movementY: {value:60, unit:"px"}
            }}
            >
                <div className=" h-20 w-20 relative rounded-full bg-blue-500">
                    <h1 style={{fontFamily:'blackExpanded', color:'red'}}
                    >Hello</h1>
                </div>

            </Scrollytelling.Parallax>
            <div>
                <h1 style={{fontFamily:'black'}}
                >Pinned text</h1>
            </div>
        </div>
        </Scrollytelling.Root>
    );
};

