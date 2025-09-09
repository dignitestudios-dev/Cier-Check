import React, { useState } from "react";

const Benifits = () => {
  const [activeDiv, setActiveDiv] = useState(1);

  const handleToggle = (divNumber) => {
    setActiveDiv(activeDiv === divNumber ? 1 : divNumber);
  };

  return (
    <div>
      <div className="w-full flex flex-col items-center  justify-center gap-5   pb-10 px-4 md:px-8 lg:px-16 xl:px-32  ">
        <div className="w-full flex flex-col lg:flex-row gap-9  items-start  lg:items-center lg:justify-between ">
          <button
            className="text-3xl font-bold "
            onClick={() => handleToggle(1)}
          >
            Benefits 1
          </button>
          {activeDiv === 1 && (
            <div className="lg:hidden block">
              <h3 className="py-8 text-xl font-bold">PROACTIV 3-STEP SYSTEM</h3>
              <ul className="text-base flex flex-col items-start gap-2">
                <li>
                  This Proactiv 3-Step System revolutionized the treatment of
                  acne
                </li>
                <li>
                  Each step builds on the step before, attacking the acne cycle
                  to clear current blemishes and help prevent new ones from
                  forming
                </li>
                <li>
                  The Proactiv 3-Step System features advanced micro-crystal
                  benzoyl peroxide—designed to work faster and gentler than ever
                  before
                </li>
              </ul>
            </div>
          )}
          <button
            className="text-3xl font-bold"
            onClick={() => handleToggle(2)}
          >
            Benefits 2
          </button>
          {activeDiv === 2 && (
            <div className="lg:hidden ">
              <h3 className="py-8 text-xl font-bold">ACNE BODY WASH</h3>
              <ul className="text-base flex flex-col items-start gap-2">
                <li>
                  This Proactiv 3-Step System revolutionized the treatment of
                  acne
                </li>
                <li>
                  Each step builds on the step before, attacking the acne cycle
                  to clear current blemishes and help prevent new ones from
                  forming
                </li>
                <li>
                  The Proactiv 3-Step System features advanced micro-crystal
                  benzoyl peroxide—designed to work faster and gentler than ever
                  before
                </li>
              </ul>
              <h3 className="py-8 text-xl font-bold">ACNE BODY WASH</h3>
              <ul className="text-base flex flex-col items-start gap-2">
                <li>
                  This Proactiv 3-Step System revolutionized the treatment of
                  acne
                </li>
                <li>
                  Each step builds on the step before, attacking the acne cycle
                  to clear current blemishes and help prevent new ones from
                  forming
                </li>
                <li>
                  The Proactiv 3-Step System features advanced micro-crystal
                  benzoyl peroxide—designed to work faster and gentler than ever
                  before
                </li>
              </ul>
              <h3 className="py-8 text-xl font-bold">ACNE BODY WASH</h3>
              <ul className="text-base flex flex-col items-start gap-2">
                <li>
                  This Proactiv 3-Step System revolutionized the treatment of
                  acne
                </li>
                <li>
                  Each step builds on the step before, attacking the acne cycle
                  to clear current blemishes and help prevent new ones from
                  forming
                </li>
                <li>
                  The Proactiv 3-Step System features advanced micro-crystal
                  benzoyl peroxide—designed to work faster and gentler than ever
                  before
                </li>
              </ul>
            </div>
          )}
          <button
            className="text-3xl font-bold"
            onClick={() => handleToggle(3)}
          >
            Benefits 3
          </button>
          {activeDiv === 3 && (
            <div className="lg:hidden">
              <h3 className="py-8 text-xl font-bold">
                Blackhead Dissolving Gel
              </h3>
              <ul className="text-base flex flex-col items-start gap-2">
                <li>
                  This Proactiv 3-Step System revolutionized the treatment of
                  acne
                </li>
                <li>
                  Each step builds on the step before, attacking the acne cycle
                  to clear current blemishes and help prevent new ones from
                  forming
                </li>
                <li>
                  The Proactiv 3-Step System features advanced micro-crystal
                  benzoyl peroxide—designed to work faster and gentler than ever
                  before
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="w-[175vh] border  " />

        <div className="w-full lg:flex flex-col hidden ">
          {activeDiv === 1 && (
            <div className="lg:block">
              <h3 className="py-8 text-xl font-bold">
                PROACTIV 3-STEP SYSTEM111
              </h3>
              <ul className="text-base flex flex-col items-start gap-2">
                <li>
                  This Proactiv 3-Step System revolutionized the treatment of
                  acne
                </li>
                <li>
                  Each step builds on the step before, attacking the acne cycle
                  to clear current blemishes and help prevent new ones from
                  forming
                </li>
                <li>
                  The Proactiv 3-Step System features advanced micro-crystal
                  benzoyl peroxide—designed to work faster and gentler than ever
                  before
                </li>
              </ul>
            </div>
          )}

          {activeDiv === 2 && (
            <div className=" xl:block">
              <h3 className="py-8 text-xl font-bold">ACNE BODY WASH222</h3>
              <ul className="text-base flex flex-col items-start gap-2">
                <li>
                  This Proactiv 3-Step System revolutionized the treatment of
                  acne
                </li>
                <li>
                  Each step builds on the step before, attacking the acne cycle
                  to clear current blemishes and help prevent new ones from
                  forming
                </li>
                <li>
                  The Proactiv 3-Step System features advanced micro-crystal
                  benzoyl peroxide—designed to work faster and gentler than ever
                  before
                </li>
              </ul>
              <h3 className="py-8 text-xl font-bold">ACNE BODY WASH</h3>
              <ul className="text-base flex flex-col items-start gap-2">
                <li>
                  This Proactiv 3-Step System revolutionized the treatment of
                  acne
                </li>
                <li>
                  Each step builds on the step before, attacking the acne cycle
                  to clear current blemishes and help prevent new ones from
                  forming
                </li>
                <li>
                  The Proactiv 3-Step System features advanced micro-crystal
                  benzoyl peroxide—designed to work faster and gentler than ever
                  before
                </li>
              </ul>
              <h3 className="py-8 text-xl font-bold">ACNE BODY WASH</h3>
              <ul className="text-base flex flex-col items-start gap-2">
                <li>
                  This Proactiv 3-Step System revolutionized the treatment of
                  acne
                </li>
                <li>
                  Each step builds on the step before, attacking the acne cycle
                  to clear current blemishes and help prevent new ones from
                  forming
                </li>
                <li>
                  The Proactiv 3-Step System features advanced micro-crystal
                  benzoyl peroxide—designed to work faster and gentler than ever
                  before
                </li>
              </ul>
            </div>
          )}

          {activeDiv === 3 && (
            <div className=" xl:block">
              <h3 className="py-8 text-xl font-bold">
                Blackhead Dissolving Gel333
              </h3>
              <ul className="text-base flex flex-col items-start gap-2">
                <li>
                  This Proactiv 3-Step System revolutionized the treatment of
                  acne
                </li>
                <li>
                  Each step builds on the step before, attacking the acne cycle
                  to clear current blemishes and help prevent new ones from
                  forming
                </li>
                <li>
                  The Proactiv 3-Step System features advanced micro-crystal
                  benzoyl peroxide—designed to work faster and gentler than ever
                  before
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Benifits;
