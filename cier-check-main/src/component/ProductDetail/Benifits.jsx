import React, { useState } from 'react';

const Benifits = () => {
    const [activeDiv, setActiveDiv] = useState(1);

    const handleToggle = (divNumber) => {
        setActiveDiv(activeDiv === divNumber ? 1 : divNumber);
    };

    return (
        <div>
            <div className='w-full flex items-center justify-between px-28'>
                <button className='text-3xl font-bold ' onClick={() => handleToggle(1)}>Benefits 1</button>
                <button className='text-3xl font-bold' onClick={() => handleToggle(2)}>Benefits 2</button>
                <button className='text-3xl font-bold' onClick={() => handleToggle(3)}>Benefits 3</button>
            </div>
            <div className='w-[180vh] border mx-auto ' />

            {activeDiv === 1 && (
                <div className='px-12 py-10'>
                    <h3 className='py-8 text-xl font-bold'>PROACTIV 3-STEP SYSTEM</h3>
                    <ul className='text-2xl'>
                        <li>This Proactiv 3-Step System revolutionized the treatment of acne</li>
                        <li>Each step builds on the step before, attacking the acne cycle to clear current blemishes and help prevent new ones from forming</li>
                        <li>The Proactiv 3-Step System features advanced micro-crystal benzoyl peroxide—designed to work faster and gentler than ever before</li>
                    </ul>
                </div>
            )}

            {activeDiv === 2 && (
                <div className='px-12 py-10 '>
                    <h3 className='py-8 text-xl font-bold'>ACNE BODY WASH</h3>
                    <ul className='text-2xl'>
                        <li>This Proactiv 3-Step System revolutionized the treatment of acne</li>
                        <li>Each step builds on the step before, attacking the acne cycle to clear current blemishes and help prevent new ones from forming</li>
                        <li>The Proactiv 3-Step System features advanced micro-crystal benzoyl peroxide—designed to work faster and gentler than ever before</li>
                    </ul>
                    <h3 className='py-8 text-xl font-bold'>ACNE BODY WASH</h3>
                    <ul className='text-2xl'>
                        <li>This Proactiv 3-Step System revolutionized the treatment of acne</li>
                        <li>Each step builds on the step before, attacking the acne cycle to clear current blemishes and help prevent new ones from forming</li>
                        <li>The Proactiv 3-Step System features advanced micro-crystal benzoyl peroxide—designed to work faster and gentler than ever before</li>
                    </ul>
                    <h3 className='py-8 text-xl font-bold'>ACNE BODY WASH</h3>
                    <ul className='text-2xl'>
                        <li>This Proactiv 3-Step System revolutionized the treatment of acne</li>
                        <li>Each step builds on the step before, attacking the acne cycle to clear current blemishes and help prevent new ones from forming</li>
                        <li>The Proactiv 3-Step System features advanced micro-crystal benzoyl peroxide—designed to work faster and gentler than ever before</li>
                    </ul>
                </div>
            )}

            {activeDiv === 3 && (
                <div className='px-12 py-10'>
                    <h3 className='py-8 text-xl font-bold'>Blackhead Dissolving Gel</h3>
                    <ul className='text-2xl'>
                        <li>This Proactiv 3-Step System revolutionized the treatment of acne</li>
                        <li>Each step builds on the step before, attacking the acne cycle to clear current blemishes and help prevent new ones from forming</li>
                        <li>The Proactiv 3-Step System features advanced micro-crystal benzoyl peroxide—designed to work faster and gentler than ever before</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Benifits;
