import Image from "next/image";

export default function Chatbox() {
  return (
    <>
      {/* Main Container */}
      <div className="w-full p-10">
        {/*Chatbox Div*/}
        <div className="bg-white shadow-lg rounded-lg max-w-md mx-auto">
          {/*Chatbox Header Div*/}

          <div className="border-b-2 px-2 py-4">
            <div className="inline-flex items-center">
                <Image src="/images/bot.PNG" alt="logo" className="w-8" width={100} height={100}/>
                <span className="ml-4">ChatBot</span>
            </div>
          </div>
          {/*Chatbox Body Div*/}

          <div className="h-80 flex flex-col space-y-4 max-w-md px-2 mb-2 mt-2 ">

            {/*Chatbox Text*/}
                <div className="flex flex-col items-start ">
                    <span className="bg-green-500 px-4 py-2 text-white rounded-b-xl rounded-tl-xl mb-2 mt-2 ">How can I help you?</span>
                </div>
            {/*Chatbox User Text*/}

            <div className="flex flex-col items-end">
                <span className="bg-gray-500 px-2 py-4 mt-2 mb-2 rounded-b-xl text-white rounded-tr-xl">How do I upgrade my credit score?</span>
            </div>
          </div>

          {/*Chatbox Footer Div*/}

          <div className="border-t-2 flex items-center py-4 px-2 ">

            <input type="text" placeholder="Type here..." className="flex-1 rounded-lg px-4 py-2 border-2"/>
            <button type="submit" className="relative right-16">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}
