import React, { useState } from 'react';
import Window from './Window';
import WalletConnection from './WalletConnection'

const imageUrl = 'https://moccasin-wrong-prawn-350.mypinata.cloud/ipfs/Qmbh4YcNiQiJuZLAWSNjkhbtbPiC3y6Hsdg2rap7Zqo1Tp';

export default function Showcase() {
    const [showMain, setShowMain] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    const images = new Array(21).fill(imageUrl)

    const handleImageClick = (image) => {
        setSelectedImage(image)
        setShowMain(true)
    };

    const closeMain = () => {
        setShowMain(false)
    };

    return (
        <div className="hub dark">
            <div className="drops-downs">
                <a href="https://twitter.com/yourtwitter" target='_blank'>
                    <img src="https://i.pinimg.com/564x/b8/17/dc/b817dcb4b8c95e088f113e5b9dcaad7c.jpg" alt="Twitter Logo" />
                </a>
                <a href="https://instagram.com/yourinstagram" target='_blank'>
                    <img src="https://i.pinimg.com/564x/cd/da/26/cdda26fe0f0ef1638c394ead911ec6ad.jpg" alt="Instagram Logo" />
                </a>
                <a href="https://discord.com/invite/yourdiscord" target='_blank'>
                    <img src="https://i.pinimg.com/564x/85/e9/d7/85e9d74f125bb82aa4be2478ce02bbd4.jpg" alt="Discord Logo" />
                </a>
                <p>GALLERY</p>
                <p>WORLD</p>
                <p>MORE</p>
                <p>BUY</p>
            </div>
            <WalletConnection />
            <h2>#IMREXX SHOWCASE</h2>
            <p className="hub-description">We're excited to give you a sneak peek into our exclusive NFT collection, soon to be launched on the Meter Mainnet. Click on an image for more details.</p>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="hub-image"
                    onClick={() => handleImageClick(image)}
                />
            ))}
            {showMain && (
                <Window onClose={closeMain} />
            )}
        </div>
    )
}