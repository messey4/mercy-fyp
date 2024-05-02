import NavBar from "@/components/NavBar";
import Image from "next/image";
import { Send, User } from "react-feather";

export default function Chatbox() {
  return (
    <>
      <NavBar />
      {/* Main Container */}
      <div className="w-full p-10 min-h-screen">
        {/*Chatbox Div*/}
        <div className="bg-white shadow-lg rounded-lg max-w-md mx-auto  bg-[url('/images/fi-bot.jpg')] bg-cover bg-no-repeat bg-center h-[80vh] flex flex-col">
          {/*Chatbox Header Div*/}

          <div className="border-b-2 px-2 py-4">
            <div className="inline-flex items-center">
              <span className="ml-4 text-white font-bold">FI Bot 🤖✨</span>
            </div>
          </div>
          {/*Chatbox Body Div*/}

          <div className="h-80 flex flex-col space-y-4 max-w-md px-2 mb-2 mt-2 flex-grow">
            {/*Chatbox Text*/}
            <div className="flex gap-1 items-start ">
              <span className="bg-white rounded-full p-0.5">🤖</span>
              <span className="bg-green-500 px-4 py-2 text-white rounded-r-2xl rounded-bl-2xl mb-2 mt-2 ">
                How can I help you?
              </span>
            </div>
            {/*Chatbox User Text*/}

            <div className="flex gap-1 items-start justify-end">
              <span className="bg-gray-500 px-2 py-4 mt-2 mb-2 rounded-l-2xl text-white rounded-br-2xl">
                How do I upgrade my credit score?
              </span>
              <span className="bg-white rounded-full p-0.5">
                <User size={18} />
              </span>
            </div>
          </div>

          {/*Chatbox Footer Div*/}

          <div className="border-t-2 flex items-center py-4 gap-1 px-2">
            <input
              type="text"
              placeholder="Type here..."
              className="flex-1 rounded-lg px-4 py-2 border-2 focus:outline-green-500"
            />
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
        </div>
      </div>
    </>
  );
}
