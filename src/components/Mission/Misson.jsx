import React from 'react';

const Misson = () => {
    return (
        <div className="bg-base-200 collapse">
            <input type="checkbox" className="peer" />
            <div
                className="collapse-title bg-[#9660ea] text-white text-xl font-bold text-center peer-checked:bg-[#9660ea] peer-checked:text-secondary-content">
                Click to See Our Goal & Mission
            </div>
            <div
                className="collapse-content bg-[#9660ea] text-primary-content peer-checked:bg-[#9660ea] peer-checked:text-secondary-content">
                <div>
                    <p className="text-xl leading-relaxed text-white mt-4">
                        <span className="font-semibold font-mono">Goal:</span>
                    </p>
                    <p className="text-lg leading-relaxed text-white font-mono">
                        To create a fun and interactive language learning platform designed to help users improve their vocabulary and communication skills in a chosen language.
                    </p>
                    <p className="text-lg leading-relaxed text-white mt-2 font-mono">
                        Learning new vocabulary can be challenging. Lingo Bingo’s mission is to simplify the process by offering a fun, structured, and engaging environment for users to master new words and phrases in a new language.
                    </p>
                    <p className="text-xl leading-relaxed text-white  mt-4 font-mono">
                        <span className="font-semibold">Overcoming Vocabulary Learning Challenges:</span>
                    </p>
                    <p className="text-lg leading-relaxed text-white mt-2 font-mono">
                        By offering interactive lessons, Lingo Bingo transforms vocabulary learning into an engaging experience. Users can explore different lessons, practice pronunciation, and understand the usage of words through real-life examples.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Misson;