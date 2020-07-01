import React from 'react'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css';

export const MemoryGame = ({ showRodal, setShowRodal }) => {

    return (
        <Rodal visible={showRodal} onClose={() => setShowRodal(false)} measure="%" width={70} height={100}>

            <iframe
                title="React native code"
                src="https://snack.expo.io/@bardolph/memorygame?platform=ios"
                style={{
                    overflow: "hidden",
                    background: "#fafafa",
                    border: "1px solid rgba(0,0,0,.08)",
                    borderRadius: "4px",
                    height: "725px",
                    width: "100%",
                    margin: "auto",
                    marginTop: "20px",
                }}
            ></iframe>
        </Rodal>
    )
}


