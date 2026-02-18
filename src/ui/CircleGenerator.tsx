import { useState } from "react";

function CircleGenerator() {
    const [radius, setRadius] = useState(12);
    const [circleCount, setCircleCount] = useState(7);
    const [color, setColor] = useState("#1178d8");

    return (
        <>
            <h1>Circle Generator</h1>
            <div className="container">
                <div className="input-box">
                    <label htmlFor="radius">
                        <p>Radius</p>
                        <p>{radius}</p>
                    </label>
                    <input
                        type="range"
                        min="10"
                        max="50"
                        value={radius}
                        onChange={(event) =>
                            setRadius(parseInt(event.target.value) || 12)
                        }
                        id="radius"
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="circle-count">
                        <p>Number of circles</p>
                        <p>{circleCount}</p>
                    </label>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={circleCount}
                        onChange={(event) =>
                            setCircleCount(parseInt(event.target.value) || 7)
                        }
                        id="circle-count"
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="color">
                        <p>Color</p>
                        <p>{color}</p>
                    </label>
                    <input
                        type="color"
                        value={color}
                        id="color"
                        onChange={(event) =>
                            setColor(event.target.value || "#1178d8")
                        }
                    />
                </div>
            </div>

            <button>Create Circle</button>
        </>
    );
}

export default CircleGenerator;
