import React, { useState, useEffect } from 'react';
import './main.css';
import confetti from 'canvas-confetti';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const days = [
    { 
        name: 'Rose Day', 
        song: '/music/rose-day.mp3', 
        text: '🌹 Roses for the most special person! Thank you so much for adding a beautiful smell to my ever monotonous life. Let\'s be honest, you are much more attractive than roses ever could be! Thank you for choosing me time and again and for never giving up on me even when I gave hundreds of reasons to...🌹' 
    },
    { 
        name: 'Propose Day', 
        song: '/music/propose-day.mp3', 
        text: '💍 Will you be mine forever? I know I\'ve asked this before and you\'ve always said yes, but since the past few months, our forever was about to end. I want to assure you that I\'m ready to make every effort to make this relationship last. You matter to me more than any of our differences. Will you be mine forever? 💍' 
    },
    { 
        name: 'Chocolate Day', 
        song: '/music/chocolate-day.mp3', 
        text: '🍫 Here\'s some sweetness for you! Your favorite might be chocolate, but mine is you. Thank you for all the chocolates, sweetness, and happiness you\'ve added to my life. Let\'s promise to always stay the sweet part of each other\'s life. 🍫' 
    },
    { 
        name: 'Teddy Day', 
        song: '/music/teddy-day.mp3', 
        text: '🧸 Cuddles for you with a teddy hug! My personal teddy. You\'re clumsy and cute like one, but your presence makes it special. Thanks for being my silly panda who makes me laugh every day. Muskurane ki wajah tum ho...🧸' 
    },
    { 
        name: 'Promise Day', 
        song: '/music/promise-day.mp3', 
        text: '🤝 I promise to always be there for you. I mean it. I\'m here to listen to all your troubles, gossips, and random talks. I promise to improve and make you feel special with actions, not just words. I love you. 🤝' 
    },
    { 
        name: 'Hug Day', 
        song: '/music/hug-day.mp3', 
        text: '🤗 Sending you the warmest hug! You\'re my safe place and my teddy bear. I can be myself and vent out anything when I\'m with you. I\'m craving a tight hug, milo jaldi! 🤗' 
    },
    { 
        name: 'Kiss Day', 
        song: '/music/kiss-day.mp3', 
        text: '💋 Sealing it with a kiss! Every kiss we\'ve shared has been special because of you. From pecks to long kisses, every moment has been magical. Thank you for your love and for understanding me. 💋' 
    }
];

const shortNote = {
    name: 'Short Note',
    song: '/music/note.mp3',
    text: '📝 Hey love! Just a little reminder that you are the best thing that has ever happened to me. No matter what comes our way, I am here for you — always. Love you endlessly! I am super grateful to have you in my life and couldnnt thank god enough for it . But listen Ik I made you cry, I made you feel bad about yourself, I made you feel alone which should have been worst nightmares for me but I did them all. Ik I cant go back and fix them all but I can definitely try to compensate in future by making you feel extra loved, most cared,and the best. Lets work on us bachha , lets work . Now is the time , later just regret . I am all in for all the things , are you? Sorrie for everything yrr, ik you hate this but now I will never ask for ILY but rather do things to make you say it yourself again and again. Actions more than words . This was my first step, hopefully you liked it. Btw check karna shayad niche apka zepto aagya hoga? Enjoy the chocolate and lets enjoy this relationship too! I love you so so much💖'
};

const DayModal = ({ isOpen, onClose, day, text, song }) => (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal" overlayClassName="overlay">
        <h2>🎉 {day} 🎉</h2>
        <p className="para">{text}</p>
        <audio controls autoPlay className="audio">
            <source src={song} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
        <button onClick={onClose} className="modal-close">Close</button>
    </Modal>
);

const MainPage = () => {
    const [modalData, setModalData] = useState({ isOpen: false, day: '', text: '', song: '' });

    useEffect(() => {
        const interval = setInterval(() => {
            confetti({
                particleCount: 200,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const openModal = (day, text, song) => {
        setModalData({ isOpen: true, day, text, song });
    };

    const closeModal = () => {
        setModalData({ ...modalData, isOpen: false });
    };

    return (
        <div className='mainPage'>
            <div className="header">
                <div className="welcome">Welcome</div>
                <div className="Madamji">Madamji</div>
                <div className="content">Which day would you like to experience?</div>
            </div>

            <div className='button-holder'>
                {days.map(({ name, text, song }) => (
                    <button 
                        key={name} 
                        className='button' 
                        onClick={() => openModal(name, text, song)}
                    >
                        {name}
                    </button>
                ))}
            </div>

            <button 
                className='Note' 
                onClick={() => openModal(shortNote.name, shortNote.text, shortNote.song)}
            >
                A short note!
            </button>

            <DayModal 
                isOpen={modalData.isOpen} 
                onClose={closeModal} 
                day={modalData.day} 
                text={modalData.text} 
                song={modalData.song} 
            />
        </div>
    );
};

export default MainPage;
