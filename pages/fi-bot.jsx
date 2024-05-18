"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import { SyncLoader } from "react-spinners";
import { Send, User } from "react-feather";
import { useState, useRef, useEffect } from "react";
import aiResponseEngine from "@/utility/aiResponseEngine";

export default function Chatbox() {
  const [userInput, setUserInput] = useState("");
  const [userConversation, setUserConversation] = useState([]);
  const [aiResponses, setAIResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat container when there's a new message
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [userConversation, aiResponses]);

  const handleGetAIResponse = async (e) => {
    e.preventDefault();
    if (userInput) {
      // Update user conversation state
      setUserConversation((prevConversation) => [
        ...prevConversation,
        userInput,
      ]);
      setUserInput("");

      setLoading(true); // Start loading

      try {
        const response = await aiResponseEngine(userInput);
        setAIResponses((prevResponses) => [...prevResponses, response]);
      } catch (error) {
        console.error("Error getting AI response:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    }
  };

  return (
    <>
      <NavBar />
      {/* Main Container */}
      <div className="w-full p-10 px-3 min-h-screen">
        {/*Chatbox Div*/}
        <div
          ref={chatContainerRef}
          className="bg-white shadow-lg rounded-lg max-w-md mx-auto bg-[url('/images/fi-bot.jpg')] bg-cover bg-no-repeat bg-center h-[80vh] flex flex-col"
        >
          {/*Chatbox Header Div*/}
          <div className="border-b-2 px-2 py-4 bg-white rounded-t-md">
            <div className="inline-flex items-center">
              <span className="ml-4 font-bold">FI Bot 🤖✨</span>
            </div>
          </div>
          <div className="overflow-y-auto h-full">
            {/*Chatbox Body Div*/}
            <div className="h-80 flex flex-col space-y-4 max-w-md px-2 mb-2 mt-2 flex-grow">
              {/* Initial AI Text */}
              <div className="flex gap-1 items-start ">
                <span className="bg-white rounded-full p-0.5">🤖</span>
                <span className="bg-green-500 px-4 py-2 text-white rounded-r-2xl rounded-bl-2xl mb-2 mt-2">
                  How can I help you?
                </span>
              </div>

              {/* Render User and AI Conversations */}
              {userConversation.map((conversation, index) => (
                <div key={index} className="flex flex-col">
                  {/* User Text */}
                  <div className="flex gap-1 items-start justify-end">
                    <span className="bg-gray-500 px-2 py-2 mt-2 mb-2 rounded-l-2xl text-white rounded-br-2xl">
                      {conversation}
                    </span>
                    <span className="bg-white rounded-full p-0.5">
                      <User size={18} />
                    </span>
                  </div>
                  {/* AI Response or Loader */}
                  <div className="flex gap-1 items-start">
                    <span className="bg-white rounded-full p-0.5">🤖</span>
                    {loading && index === userConversation.length - 1 ? (
                      <SyncLoader color="#36D7B7" size={10} />
                    ) : (
                      aiResponses[index] && (
                        <span className="bg-green-500 px-4 py-2 text-white rounded-r-2xl rounded-bl-2xl mb-2 mt-2">
                          {aiResponses[index]}
                        </span>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*Chatbox Footer Div*/}
          <form
            onSubmit={handleGetAIResponse}
            className="border-t-2 flex items-center py-4 gap-1 px-2"
          >
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Type here..."
                value={userInput}
                className="rounded-lg px-4 py-2 border-2 focus:outline-green-500 w-full"
                onChange={(e) => setUserInput(e.target.value)}
              />
            </div>
            <div className=" flex-shrink">
              <button
                type="submit"
                className="text-white p-2 rounded-full bg-green-500"
              >
                <Send
                  size={20}
                  className="transform rotate-45 relative -left-0.5"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
