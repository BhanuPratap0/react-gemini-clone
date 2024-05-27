/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

const Sidebar = () => {


    const [extended, setExtended] = useState(false);
    const {newChat, onSent, prevPrompt, setRecentPrompt } = useContext(Context);

    const loadPrompt = async(prompt) =>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(!extended)} className='menu' src={assets.menu_icon} />
                <div onClick={()=> newChat()} className="new-chat">
                    <img src={assets.plus_icon} />
                    {extended && <p>New Chat</p>}
                </div>
                {extended && <div className="recent">
                    <p className='recent-title' > Recent</p>
                    {prevPrompt.length!=0 && prevPrompt.map((item, index) => {
                        return(
                            <div onClick={()=> loadPrompt(item)} className="recent-entry">
                                <img src={assets.message_icon} alt="" />
                                <p>{item}</p>
                            </div>
                        )
                    })}

                </div>}
            </div>
            <div className="bottom">
                <div className="botom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended && <p>Help</p>}
                </div>
                <div className="botom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended && <p>Activity</p>}
                </div>
                <div className="botom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended && <p>Settings</p>}
                </div>
            </div>
        </div>
    )
}

export default Sidebar