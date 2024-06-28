import React from "react";

export default function Window({ onClose }) {
    return (
        <div className="main-popup dark">
            <button onClick={onClose} className="close-button">Close</button>
            <div className="window dark">
                <div className="nft-block">
                    <img
                        src="https://moccasin-wrong-prawn-350.mypinata.cloud/ipfs/QmRz1E4UFXgFBQZLiT3HTmKpTX26ctQ47NDMFjx4LHcRjo"
                        className="window--img"
                    />
                    <div className="nft--info">
                        <h4 className="nekito">IMREXX</h4>
                        <h1 className="nft--index">IMREXX_1</h1>
                        <h4 className="traits">TRAITS</h4>
                        <div className="traits-container">
                            <span>
                                <h3 className="name-of-traits">CLOTHES</h3>
                                <p className="type-of-traits">BLACK HOODIE</p>
                            </span>
                            <span>
                                <h3 className="name-of-traits">DNA</h3>
                                <p className="type-of-traits">SHARK TEETH</p>
                            </span>
                            <span>
                                <h3 className="name-of-traits">EYES</h3>
                                <p className="type-of-traits">BLUE EYES</p>
                            </span>
                            <span>
                                <h3 className="name-of-traits">GLOVES</h3>
                                <p className="type-of-traits">BLACK HOODIE</p>
                            </span>
                            <span>
                                <h3 className="name-of-traits">HEAD GEAR</h3>
                                <p className="type-of-traits">VR</p>
                            </span>
                            <span>
                                <h3 className="name-of-traits">PANTS</h3>
                                <p className="type-of-traits">GREY LONG PANTS</p>
                            </span>
                            <span>
                                <h3 className="name-of-traits">SHOES</h3>
                                <p>BLACK SHOES</p>
                            </span>
                        </div>
                    </div>
                </div>
                <h2 className="downloads">DOWNLOADS</h2>
                <div className="download-block">
                    <div className="download-container">
                        <span>
                            <p className="download-view">PROFILE PICTURE</p>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToG8JKyYXnrEnp8slUa7XmxR1YSm5VGbn8-5wOXd1lg&s"
                            />
                        </span>
                        <span>
                            <p className="download-view">FULL VIEW</p>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToG8JKyYXnrEnp8slUa7XmxR1YSm5VGbn8-5wOXd1lg&s"
                            />
                        </span>
                        <span>
                            <p className="download-view">3D MODEL</p>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToG8JKyYXnrEnp8slUa7XmxR1YSm5VGbn8-5wOXd1lg&s"
                            />
                        </span>
                        <span>
                            <p className="download-view">T-POSE</p>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToG8JKyYXnrEnp8slUa7XmxR1YSm5VGbn8-5wOXd1lg&s"
                            />
                        </span>
                        <span>
                            <p className="download-view">TRANSPARENCY VIEW</p>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToG8JKyYXnrEnp8slUa7XmxR1YSm5VGbn8-5wOXd1lg&s"
                            />
                        </span>
                        <span>
                            <p className="download-view">ANIMATION</p>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToG8JKyYXnrEnp8slUa7XmxR1YSm5VGbn8-5wOXd1lg&s"
                            />
                        </span>
                    </div>
                    <div className="links-container">
                        <span className="opensea-link">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCZV99otJ_tW7xvb0FGlgWS9hMwM_KHZN7WG2ZCfuOg&s"
                            />
                            <p>VIEW ON OPENSEA</p>
                        </span>
                        <span className="model-preview">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLZNao7URv7gPh_stFcFjxZ7vWoCCYGKhThaBhHTRDg&s"
                            />
                            <p>MODEL PREVIEW</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
