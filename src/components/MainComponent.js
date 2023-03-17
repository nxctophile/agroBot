import React, {useRef, useEffect} from 'react'
import TopBar from './TopBar';

function MainComponent(props) {
  const sendBoxRef = useRef(null);
  useEffect(() => {
    const sendBox = sendBoxRef.current;
    sendBox.addEventListener("keydown", (event) => {
      if (event.keyCode === 13) {
        props.initFunction();
      }
    })
  }, [props, props.initFunction]);
  return (
    <div id="MainSectionContainer">
        <section id="MainSection">
          <TopBar
          deleteAll={props.deleteAll}
          toggleMode={props.toggleMode}
          />
          <div id="emptyChat">
            <img alt="Greeting Bot" src="https://static.wixstatic.com/media/14401c_20a0b437b6f344198294dab55e277af0~mv2.gif"/>
          </div>
          <div id="deletedChat">
            <img alt="Messages Deleted" src="https://cdn.dribbble.com/users/592004/screenshots/2953817/___.gif"/>
            All messages are deleted.
          </div>
            <div id="responseContainer">
                {props.bubbles.map((element, index) => {
                  const bubbleClass = element.side === 'client' ? 'bubble client' : 'bubble server' && element.side === 'delete' ? 'bubble delete' : 'bubble server';
                  return (
                    <div className={bubbleClass} key={index}>
                      {element.response}
                    </div>
                  );
                })}
                {props.responseLoading && 
                  <div id="responseLoading">
                    <img alt="Response is loading" src="https://chatbot.rediff.com/public/typing.gif"/>
                  </div>
                }

              <div id="bottom"></div>
            </div>
            <div id="sendBoxContainer">
                <input placeholder='Type a message or query...' id="sendBox" type="text" ref={sendBoxRef}/>
                  <i onClick={props.initFunction} id="sendButton" className="fa-regular fa-paper-plane"></i>
            </div>
        </section>
    </div>
  )
}

export default MainComponent;
