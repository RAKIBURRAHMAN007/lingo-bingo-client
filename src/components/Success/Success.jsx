import React from 'react';
import CountUp from 'react-countup';

const Success = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-5xl font-bold  '>Our Success</h1>
                <p className=' text-center font-mono pt-4 opacity-70'>Lingo Bingo’s success is reflected in our 1,250 registered users, actively <br />engaging with lessons, vocabulary, and tutorials to master languages.</p>

            </div>
            <div className="md:flex space-y-2 justify-center w-11/12 mx-auto gap-8 mt-12">
                <div className="card w-full md:w-80 bg-white shadow-xl border border-gray-200 rounded-lg">
                    <div className="card-body text-center">
                        <h2 className="text-xl font-semibold text-purple-600">Users</h2>
                        <div className="text-4xl font-bold text-purple-800">
                            <CountUp start={0} end={1250} duration={7} />
                        </div>
                        <p className="text-gray-700 mt-4">Total Users Registered</p>
                    </div>
                </div>

                <div className="card w-full md:w-80 bg-white shadow-xl border border-gray-200 rounded-lg">
                    <div className="card-body text-center">
                        <h2 className="text-xl font-semibold text-purple-600">Lessons</h2>
                        <div className="text-4xl font-bold text-purple-800">
                            <CountUp start={0} end={20} duration={7} />
                        </div>
                        <p className="text-gray-700 mt-4">Total Lessons Available</p>
                    </div>
                </div>


                <div className="card w-full md:w-80 bg-white shadow-xl border border-gray-200 rounded-lg">
                    <div className="card-body text-center">
                        <h2 className="text-xl font-semibold text-purple-600">Vocabulary</h2>
                        <div className="text-4xl font-bold text-purple-800">
                            <CountUp start={0} end={550} duration={7} />
                        </div>
                        <p className="text-gray-700 mt-4">Total Vocabulary Words</p>
                    </div>
                </div>


                <div className="card w-full md:w-80 bg-white shadow-xl border border-gray-200 rounded-lg">
                    <div className="card-body text-center">
                        <h2 className="text-xl font-semibold text-purple-600">Tutorials</h2>
                        <div className="text-4xl font-bold text-purple-800">
                            <CountUp start={0} end={50} duration={7} />
                        </div>
                        <p className="text-gray-700 mt-4">Total Tutorials Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;
