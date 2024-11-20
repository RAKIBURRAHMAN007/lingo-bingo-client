import { useState } from "react";

const Card = ({ singleData }) => {
    const { word, pronunciation, meaning, part_of_speech, when_to_say, example, difficulty } = singleData;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const pronounceWord = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'es-ES';
        window.speechSynthesis.speak(utterance);
    };

    return (
        <>
            <div
                className={`bg-slate-100 p-3 rounded-md border backdrop-blur-3xl cursor-pointer`}
                onClick={() => pronounceWord(word)} 
            >
                <div
                    className={`rounded-md shadow-md h-56 p-1 backdrop-blur-3xl ${
                        difficulty === 'easy'
                            ? 'bg-green-200'
                            : difficulty === 'medium'
                            ? 'bg-yellow-200'
                            : difficulty === 'hard'
                            ? 'bg-red-200'
                            : 'bg-gray-100'
                    }`}
                >
                    <div className="rounded-md px-1 h-full text-center">
                        <h1 className="pt-8 font-bold font-mono text-xl">Word: {word}</h1>
                        <p className="font-bold font-mono md:text-xl">Meaning: {meaning}</p>
                        <p className="font-bold font-mono md:text-xl">Pronunciation: {pronunciation}</p>
                        <p className="font-bold font-mono md:text-xl">Part of Speech: {part_of_speech}</p>

                        <div className="flex justify-center mt-2">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); 
                                    toggleModal();
                                }}
                                className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                <span className="relative text-white">When to Say</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-xl font-bold mb-4">Word: {word}</h2>
                        <p className="mb-4 font-mono font-bold">Meaning: {meaning}</p>
                        <p className="mb-4 font-mono font-bold">When to Say: {when_to_say}</p>
                        <p className="mb-4 font-mono font-bold">Example: {example}</p>
                        <button
                            onClick={toggleModal}
                            className="px-4 py-2 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 text-white rounded-md hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;
