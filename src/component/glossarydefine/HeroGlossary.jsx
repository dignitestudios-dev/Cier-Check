import React, { useContext } from 'react'
import { BsFillSearchHeartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Navbar from '../Global/Navbar'
import Navbar2 from '../Global/Navbar2'
import { ThemeContext } from '../context/ThemeContext'
import { CiSearch } from 'react-icons/ci'



const HeroGlossary = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div>

            
                
                    <div className='w-full h-[500px] Cancer-Glossary-bg horizontal-padding flex flex-col justify-center gap-3 bg-[#F460910A]'>
                        <h2 data-aos="fade-right" className='text-[40px] font-bold text-[#FFFFFF]'>Glossary of Solutions – Define, Learn, Apply</h2>
                        <p data-aos="fade-right" className='text-[#FFFFFF] text-[16px] font-[400]'>Explore our complete glossary of terms, organized from A to Z. Find clear explanations <br /> and solutions that help you understand and define exactly what you need.</p>
                        <div data-aos="fade-right" className=' w-[400px] h-[60px] rounded-[30px] px-3  text-[#FFFFFF] flex items-center gap-2 bg-[#FFCBE9]'>
                        <CiSearch className='text-[#CF1D67] w-[24px] h-[24px]' />
                     <input type="text" placeholder='Search'  className='  text-[16px] font-[400] bg-transparent placeholder:text-[#CF1D67] ' />
                        </div>
                    </div>
              
                <div className='w-full py-10 flex flex-col items-center gap-9 justify-center  horizontal-padding '>
                    
                    <div className='w-52 lg:w-full flex  justify-center gap-9  text-[24px] font-[400] flex-wrap'>
                        <a className='text-[#181818B2]' href="#A">A</a>
                        <a className='text-[#181818B2]' href="#B">B</a>
                        <a className='text-[#181818B2]' href="#C">C</a>
                        <a className='text-[#181818B2]' href="#E">E</a>
                        <a className='text-[#181818B2]' href="#F">F</a>
                        <a className='text-[#181818B2]' href="#G">G</a>
                        <a className='text-[#181818B2]' href="#H">H</a>
                        <a className='text-[#181818B2]' href="#I">I</a>
                        <a className='text-[#181818B2]' href="#J">J</a>
                        <a className='text-[#181818B2]' href="#K">K</a>
                        <a className='text-[#181818B2]' href="#L">L</a>
                        <a className='text-[#181818B2]' href="#M">M</a>
                        <a   className='text-[#181818B2]' href="#N">N</a>
                        <a   className='text-[#181818B2]' href="#O">O</a>
                        <a   className='text-[#181818B2]' href="#P">P</a>
                        <a   className='text-[#181818B2]' href="#Q">Q</a>
                        <a   className='text-[#181818B2]' href="#R">R</a>
                        <a   className='text-[#181818B2]' href="#S">S</a>
                        <a   className='text-[#181818B2]' href="#T">T</a>
                        <a   className='text-[#181818B2]' href="#U">U</a>
                        <a   className='text-[#181818B2]' href="#V">V</a>
                        <a   className='text-[#181818B2]' href="#W">W</a>
                        <a   className='text-[#181818B2]' href="#X">X</a>
                        <a   className='text-[#181818B2]' href="#Y">Y</a>
                        <a   className='text-[#181818B2]' href="#Z">Z</a>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-3 horizontal-padding '>
                    <h2 className='text-6xl font-bold' id='A'>A</h2>
                    <h4 className='text-2xl font-bold'>abdomen [AB-duh-men]</h4>
                    <p>The part of the body between the chest and the pelvis. It includes the stomach (with the lower part of the esophagus), small and large intestines, liver, gallbladder, spleen, pancreas, and other organs.</p>
                    <h4 className='text-2xl font-bold'>ablate [ab-late]</h4>
                    <p>To remove or destroy the function of an organ or body tissue. See also ablation.</p>
                    <h4 className='text-2xl font-bold'>ablation [a-BLAY-shun]</h4>
                    <p>Treatment to remove or destroy all or part of a body part or tissue. Can also be used to remove or stop the function of an organ. For example, removing the ovaries or testicles or taking medicines that stop them from making hormones would be called ablation. Besides surgery and drug treatment, other ways of ablating body tissues and tumors include extreme heat, freezing, and chemicals. Also called ablative ( ab-LAY-tive) therapy.</p>
                    <h4 className='text-2xl font-bold'>abscess [ab-SES]</h4>
                    <p>A collection of pus in tissues, organs, or other parts of the body.</p>
                    <h4>absolute risk [ab-so-loot risk]</h4>
                    <p>The likelihood a person will develop a disease (such as a type of cancer) over a certain period of time. Absolute risk is shown as a fraction or percentage. For example, in the US, the average absolute risk of a man developing colorectal cancer in his lifetime is about 4%. In other words, in a group of 100 men, about 4 will develop colorectal cancer in their lifetime.</p>
                    <h4 className='text-2xl font-bold'>acquired mutation [uh-KWY-erd myoo-TAY-shun]</h4>
                    <p>A mutation (change) in DNA that starts in one cell of the body after a person is born. This mutation is then passed on to any new cells that arise from that cell. In some cases, acquired mutations can lead to cancer. This is different from inherited mutations, which are present at birth and in almost all the cells of the body. Acquired mutations are not passed on to children.</p>
                    <h4 className='text-2xl font-bold'>actinic keratosis [ak-TIH-nik KAYR-uh-TOH-sis]</h4>
                    <p>A rough raised area of skin that can develop after a lot of sun exposure. They are benign (not cancer), but over time a few can develop into squamous cell cancer. It is often found on areas of the skin that are frequently exposed to the sun like face, scalp, neck, forearms, and the back of the hands. Also called solar keratosis.</p>
                    <h4 className='text-2xl font-bold'>active surveillance [AK-tiv ser-VAY-lents]</h4>
                    <p>Watching a patient’s condition closely without giving them any treatment. During active surveillance, certain exams and tests are done regularly. If there are changes to these test results, treatment may be recommended. Active surveillance may be part of a treatment plan for certain types of cancers like prostate cancer.</p>
                    <h4>adenocarcinoma [A-deh-noh-KAR-sih-NOH-muh]</h4>
                    <p>Cancer that starts in glandular tissue. Glandular tissue makes and secretes a substance, such as in the breast (milk) or in the gland cells of the prostate (seminal fluid).</p>
                    <h4 className='text-2xl font-bold'>adenoma [A-deh-NOH-muh]</h4>
                    <p>A benign growth (not cancer) that starts in glandular tissue. Glandular tissue makes and produces a substance. For example, glandular tissue in the ducts or lobules of the breast produce milk, and the gland cells of the prostate produce seminal fluid.</p>
                    <h4 className='text-2xl font-bold'>adenomatous polyp [ad-no-muh-tus or ad-uh-NO-muh-tus pa-lip]</h4>
                    <p>A benign (not cancer) growth of abnormal glandular cells. These can become cancer, so they are usually removed when found. For example, 3 types of adenomas that can grow in the colon are tubular, villous, and tuberovillous. In each type, the cells are arranged differently, but there is some overlap so that an adenoma can have both tubular and villous features. See also glandular cells, hyperplastic polyp, inflammatory polyp, polyp, tubular adenoma,villous adenoma.</p>
                    <h4 className='text-2xl font-bold'>adhesions [ad-HEE-zhunz]</h4>
                    <p>Scar tissue that can form after surgery or injury. If the scar tissue tightens, it may bind organs together that are normally separate. This can sometimes cause problems, for instance, if there is partial or total blockage of the intestine.</p>
                    <h4 className='text-2xl font-bold'>adjuvant therapy [ad-juh-vunt]</h4>
                    <p>Treatment used in addition to the main treatment. It usually refers to hormone therapy, chemotherapy, radiation therapy, or immunotherapy added after surgery to increase the chances of curing the disease or keeping it in check.</p>
                    <h4 className='text-2xl font-bold'>advance directive</h4>
                    <p>A legal document that tells a person’s health care provider and loved ones his or her wishes about their health care if the person later becomes unable to make decisions for him or herself. This may include whether to start or when to stop life-sustaining treatments. Another type of advance directive lets you choose a person to make decisions for you if you become unable to do it for yourself.</p>
                    <h4>advanced cancer</h4>
                    <p>Cancer that has spread from where it started (the primary site) to other parts of the body. When the cancer has grown outside the body part where it started but has not yet spread to other parts of the body, it is called locally advanced cancer. If it has spread to other parts of the body, it is called metastatic cancer.</p>
                    <h4 className='text-2xl font-bold'>aggressive cancer</h4>
                    <p>Cancer that develops, grows, or spreads quickly.</p>
                    <h4 className='text-2xl font-bold'>AJCC Staging System</h4>
                    <p>American Joint Committee on Cancer staging system helps determine how much and where the cancer is in the body using the TNM system. T describes the tumor’s size, location, and if it has grown into nearby areas. N describes the spread of cancer to nearby lymph nodes, and M describes metastasis (the spread of cancer to distant parts of the body).</p>
                    <h4 className='text-2xl font-bold'>allogeneic stem cell transplant [A-loh-jeh-NAY-ik]</h4>
                    <p>Uses bone marrow or stem cells from a donor whose tissue type closely matches the patient’s to replace blood-forming cells that have been destroyed by disease or cancer treatment. This can be from a related donor or an unrelated donor. See also stem cells.
                    </p>
                    <h4 className='text-2xl font-bold'>alopecia [al-o-PEE-shuh]
                    </h4 >
                    <p>Hair loss, which can include loss of scalp hair, body hair, eyebrows, and eyelashes as well as pubic hair. This often happens with chemotherapy treatment or radiation therapy. In most cases, the hair grows back after treatment ends.
                    </p>
                    <h4 className='text-2xl font-bold'>alpha blocker [al-fuh]
                    </h4>
                    <p>A drug that relaxes smooth muscle tissue. Alpha blockers are sometimes used to help men who have trouble passing urine because of benign prostatic hyperplasia (BPH) by improving the flow of urine and blood. See also benign prostatic hyperplasia.
                    </p>
                    <h4 className='text-2xl font-bold'>alternative medicine
                    </h4>
                    <p>An unproven or disproven therapy that is used instead of standard (proven) medical treatment. Some examples of alternative medicines are special diets, certain supplements or herbs, or high doses of vitamins. The American Cancer Society recommends that patients thinking about using any alternative therapy discuss it first with a member of their cancer care team. Some alternative therapies are known to cause harmful or even life-threatening side effects. With others, the main danger is that the patient may lose the chance to benefit from standard treatment. See also complementary therapy.
                    </p>
                    <h4 className='text-2xl font-bold'>ambulatory [AM-byou-luh-tor-ee]
                    </h4>
                    <p>Being able to walk or walking. Ambulatory care centers treat outpatients, that is, people who are not staying overnight in a hospital. Short procedures or treatments are often done in such centers.
                    </p>
                    <h4 className='text-2xl font-bold'>Amsterdam criteria [am-STIR-dam cry-TEER-ee-uh]
                    </h4>
                    <p>Criteria doctors use to identify families who might have hereditary non-polyposis colon cancer (HNPCC). Not all people who have HNPCC meet these criteria, but people who meet the criteria may want to consider genetic testing.
                    </p>
                    <h4 className='text-2xl font-bold'>analog [an-uh-log]
                    </h4>
                    <p>A substance that is similar, but not identical to another substance. For example, a man-made version of a naturally occurring substance. See also LHRH analogs.
                    </p>
                    <h4 className='text-2xl font-bold'>anastomosis [uh-NAS-toh-MOH-sis]
                    </h4>
                    <p>A procedure in which a diseased part of a tubular body structure is removed, and the ends of healthy sections are reconnected.
                    </p>
                    <h4 className='text-2xl font-bold'>androgen [AN-druh-jen]
                    </h4>
                    <p>Hormones found in males and females but with much higher levels in males; commonly called male sex hormones. The major androgen is testosterone.
                    </p>
                    <h4 className='text-2xl font-bold'>anecdotal report [an-neck-DOE-tul]
                    </h4>
                    <p>Individual or personal report, an incomplete description from one or more patients. It’s not the same as the results of a scientific study.

                    </p>
                    <h4 className='text-2xl font-bold'>anemia [uh-NEE-mee-uh]
                    </h4>
                    <p>A condition caused by a low red blood cell count.
                    </p>

                    <h4 className='text-2xl font-bold'>anesthesia [an-es-THEE-zhuh]
                    </h4>
                    <p>The loss of feeling or sensation as a result of medicines or substances to keep patients from feeling pain during surgery or other procedures.
                        <ul className=' list-disc'>
                            <li>   General anesthesia causes loss of consciousness (puts you into a deep sleep so you don’t feel pain).</li>
                            <li>  General anesthesia causes loss of consciousness</li>

                        </ul>
                    </p>
                    <h4 className='text-2xl font-bold'>anesthesiologist [an-es-thee-zee-AHL-uh-jist]
                    </h4>
                    <p>A doctor who specializes in giving drugs or other agents (like gasses) that can cause a total loss of feeling, put a patient into a deep sleep, or relieve pain, most often during surgery.
                    </p>
                    <h4 className='text-2xl font-bold'>aneuploid [AN-you-ploid]
                    </h4>
                    <p>See ploidy.
                    </p>
                    <h4 className='text-2xl font-bold'>angiogenesis [an-jee-o-JEN-uh-sis]
                    </h4>
                    <p>The formation of new blood vessels. Some cancer treatments work by blocking angiogenesis, which helps keep blood from reaching (“feeding”) the tumor.
                    </p>
                    <h4 className='text-2xl font-bold'>angiography [an-jee-AH-gruh-fee]
                    </h4>
                    <p>A test in which a contrast dye is injected directly into a blood vessel that goes to the area that is being studied. A series of x-rays are then taken to show doctors the blood vessels around a tumor.
                    </p>
                    <h4 className='text-2xl font-bold'>angiosarcoma [an-jee-o-sar-KO-muh]
                    </h4>
                    <p>Cancer that starts from cells that line blood vessels or lymph vessels.
                    </p>
                    <h4 className='text-2xl font-bold'>anorexia [an-uh-REK-see-uh]
                    </h4>
                    <p>Loss of appetite, which could be caused by either the cancer itself or treatments such as chemotherapy.
                    </p>
                    <h4 className='text-2xl font-bold'>anterior [an-teer-ee-yer]
                    </h4>
                    <p>At or near the front.
                    </p>
                    <h4 className='text-2xl font-bold'>anti-androgens [an-tee-AN-druh-jens or an-tie-AN-druh-jens]
                    </h4>
                    <p>Drugs that block the body’s ability to use androgens (male hormones). They are pills, taken up to 3 times a day. Anti-androgens are usually used along with orchiectomy (surgery) or LHRH analogs (medicines) to help treat prostate cancer.
                    </p>
                    <h4 className='text-2xl font-bold'>anti-angiogenesis agent [an-tee-an-jee-o-JEN-uh-sis or an-tie-an-jee-o-JEN-uh-sis]
                    </h4>
                    <p>A drug that stops a tumor from forming blood vessels, cutting off its blood supply.
                    </p>
                    <h4 className='text-2xl font-bold'>anti-emetic [an-tee-ih-MEH-tik or an-tie-ih-MEH-tik]
                    </h4>
                    <p>A drug that prevents or relieves nausea and vomiting.
                    </p>
                    <h4 className='text-2xl font-bold'>anti-estrogen [an-tee-ES-tro-jen or an-tie-ES-tro-jen]
                    </h4>
                    <p>Something (for example, the drug tamoxifen) that blocks cells from making estrogen. Anti-estrogens are used to treat breast cancers that depend on estrogen for growth and are being studied for use in treating other types of cancers. An anti-estrogen is a type of hormone antagonist. Also called estrogen blocker.
                    </p>
                    <h4 className='text-2xl font-bold'>antibiotic [an-tee-by-AH-tick or an-tie-by-AH-tick]
                    </h4>
                    <p>Drug used for treating infections caused by bacteria and other germs.
                    </p>
                    <h4 className='text-2xl font-bold'>antibody [AN-tih-bah-dee]
                    </h4>
                    <p>A protein made by immune system cells and released into the blood. Antibodies defend the body against foreign agents, such as bacteria and are produced in response to antigens (substances that cause the body’s immune system to respond in a specific way).. Each antibody can only work to destroy one certain antigen.
                    </p>
                    <h4 className='text-2xl font-bold'>antigen [an-tuh-jen]
                    </h4>
                    <p>A foreign substance that causes the body’s immune system to respond by making antibodies. For example, the immune system responds to antigens that are part of bacteria and viruses to help people resist infections. Certain cancer cells have antigens that can be found by lab tests. The antigens can help in diagnosing those cancers and in watching response to treatment. Other cancer cell antigens play a role in immune reactions that may help the body resist cancer.
                    </p>
                    <h4 className='text-2xl font-bold'>antimetabolites [an-tee-muh-TAB-o-lites or an-tie-muh-TAB-o-lites]
                    </h4>
                    <p>Substances that interfere with the body’s chemical processes, such as those that create proteins, such as deoxyribonucleic acid (DNA) and other chemicals needed for cell growth and reproduction. In treating cancer, antimetabolite drugs disrupt DNA production, which in turn prevents cell division and tumor growth.
                    </p>
                    <h4 className='text-2xl font-bold'>antioxidants [an-tee-OX-uh-dunts or an-tie-OX-uh-dunts]
                    </h4>
                    <p>Substances that protect cells from damage caused by the process of oxidation during metabolism. Some vitamins, such as vitamins C and E and beta-carotene are antioxidants. Antioxidants that are found in foods are thought to reduce the risk of some cancers. But taking certain antioxidants as supplements has been linked to higher cancer risk in some people.
                    </p>
                    <h4 className='text-2xl font-bold'>APC gene
                    </h4>
                    <p>A gene that helps keep cell growth balanced. Inherited changes in this gene can cause familial adenomatous polyposis (FAP) and Gardner syndrome. People who have a mutation (change) in this gene can develop hundreds of polyps in the colon.
                    </p>
                    <h4 className='text-2xl font-bold'>apheresis [a-fur-REE-sis]
                    </h4>
                    <p>A procedure that takes blood out of the body, part of the blood is removed, and the rest of the blood is infused back into the body. Called plasmapheresis if plasma is removed, leukapheresis if white blood cells are removed, or platelet pheresis when platelets are removed. Might also be called pheresis (fur-ree-sis).
                    </p>
                    <h4 className='text-2xl font-bold'>apoptosis [a-pop-TOE-sis]
                    </h4>
                    <p>Programmed cell death. Apoptosis is controlled by genes that cause cells to die at certain times, for example, when DNA is damaged. The process of apoptosis may be blocked in cancer cells. Some drugs used to treat cancer cause apoptosis.
                    </p>
                    <h4 className='text-2xl font-bold'>aromatase inhibitors
                    </h4>
                    <p>Drugs that keep the adrenal glands from making estrogens. They are used to treat hormone-sensitive breast cancer in women after menopause. Examples include anastrozole (Arimidex®), letrozole (Femara®), and exemestane (Aromasin®). Aromatase inhibitors are being tested to find out if they can also be used to reduce breast cancer risk in women after menopause.
                    </p>
                    <h4 className='text-2xl font-bold'>aspiration [asp-er-A-shun]
                    </h4>
                    <p>To suction out a liquid, gas, or tissue fragments. It could also mean to accidentally inhale food or liquids into the lungs (aspirate).
                    </p>
                    <h4 className='text-2xl font-bold'>asymptomatic [a-simp-tuh-MAT-ik]
                    </h4>
                    <p>Not having any signs or symptoms of a disease.
                    </p>
                    <h4 className='text-2xl font-bold'>ataxia-telangiectasia mutation (ATM) [a-tax-ee-yuh tel-an-jee-eck-TAY-zhuh]
                    </h4>
                    <p>An inherited mutation in a certain gene responsible for repairing damaged DNA. Ataxia-telangiectasia is a rare, inherited, progressive, degenerative disease of childhood that causes loss of muscle control, a weakened immune system, and an increased risk of cancer. If this mutation is present, the carrier may have a higher risk of several types of cancer.
                    </p>
                    <h4 className='text-2xl font-bold'>attributable risk [at-trib-ut-a-ble risk]
                    </h4>
                    <p>How much a known factor increases the risk of a disease (such as cancer). Usually given as a percentage, it compares the percentage of people who were exposed to the risk factor and developed the disease to the percentage of people who were not exposed but developed the same disease. For example, if the attributable risk of a factor for a certain type of cancer is 80%, it means that 80% of people who developed this cancer were exposed to that factor, and 20% of people who developed the cancer were not exposed.
                    </p>
                    <h4 className='text-2xl font-bold'>atypia [a-tip-ee-yuh]
                    </h4>
                    <p>Not normal; atypical. Often refers to the appearance of cancerous or pre-cancerous cells.
                    </p>
                    <h4 className='text-2xl font-bold'>atypical [a-tip-uh-kul]
                    </h4>
                    <p>Not usual; abnormal.
                    </p>
                    <h4 className='text-2xl font-bold'>autologous [aw-tahl-uh-gus]
                    </h4>
                    <p>Use of a person’s own blood or tissue in a medical procedure. For example, using a woman’s own tissue to rebuild her breast is called autologous tissue construction.
                    </p>
                    <h4 className='text-2xl font-bold'>axillary dissection [ax-ill-air-ee di-sek-shun]
                    </h4>
                    <p>Removal of the lymph nodes in the armpit (the axillary nodes). They are looked at with a microscope to see if they contain cancer.
                    </p>
                    <h2 className='text-6xl font-extrabold' id='B'>B</h2>
                    <h4 className='text-2xl font-bold'>barium sulfate [bear-ee-um sul-fate] [ab-SES]</h4>
                    <p>a substance made into a chalky liquid that is used to outline the digestive tract for x-rays. It can be taken by mouth, as part of upper gastrointestinal (GI) series, or put into the rectum as a barium enema (as part of a lower GI series). See also barium enema, gastrointestinal tract.</p>
                    <h4 className='text-2xl font-bold'>basal cell carcinoma [bay-sul or bay-zul sell car-sin-O-ma]
                    </h4>
                    <p>the most common type of skin cancer. It begins in the lowest layer of the epidermis (the outer layer of the skin), called the basal cell layer. It usually develops on sun-exposed areas, especially the head and neck. Basal cell cancer grows slowly and is not likely to spread to distant parts of the body.
                    </p>
                    <h4 className='text-2xl font-bold'>basic science
                    </h4>
                    <p>Also called pure science, provides the knowledge and background required for later research into human health problems. In cancer research, this is often lab study in fields like biochemistry, cell biology, or genetics that are not aimed at treating a specific cancer, but may be used later as part of the basis for a treatment.</p>
                    <h4 className='text-2xl font-bold'>behavioral research</h4>
                    <p>Research into what motivates people to act the way they do. The results of such research can be used to help encourage people to adopt healthy lifestyles and follow life-saving screening and treatment guidelines.</p>
                    <h4 className='text-2xl font-bold'>benign [be-nine]
                    </h4>
                    <p>Not cancer; not malignant.
                    </p>
                    <h4 className='text-2xl font-bold'>beta carotene [bay-tuh KAIR-uh-teen]
                    </h4>
                    <p>A substance found mainly in yellow and orange vegetables and fruits. It functions as an antioxidant and converts into vitamin A in the body.
                    </p>
                    <h4 className='text-2xl font-bold'>Bethesda criteria [beth-ez-duh cry-teer-ree-yuh]
                    </h4>
                    <p>Criteria that include characteristics common in people with hereditary non-polyposis colon cancer (HNPCC). Most people who meet these criteria actually do not have HNPCC, but might want to consider genetic testing for it.
                    </p>
                    <h4 className='text-2xl font-bold'>bilateral [by-lat-er-ul]
                    </h4>
                    <p>On both sides of the body; for example, bilateral breast cancer is cancer in both breasts. Compare to unilateral.
                    </p>
                    <h4 className='text-2xl font-bold'>biologic response modifiers [by-o-LA-jick re-spons MOD-uh-fie-urs]</h4>
                    <p>Substances (like the drug interferon) that boost the body’s immune system to fight against cancer. This type of treatment is sometimes called biologic therapy.
                    </p>
                    <h4 className='text-2xl font-bold'>biomarker testing [BY-o-mar-ker ]
                    </h4>
                    <p>Testing for genes, proteins, or other substances to find out if:

                        <ul className='list-disc'>
                            <li>A cancer is more likely to grow and spread</li>
                            <li>A certain treatment is likely or unlikely to be helpful</li>
                            <li>Treatment is working</li>
                            <li>A person might be at higher risk for some cancers</li>
                            <li>Someone might have a certain type of cancer (although a biopsy is typically needed to know for sure</li>
                            <li>Cancer might be returning
                            </li>
                        </ul>
                        Also called tumor testing, tumor genetic testing, tumor subtyping, and genomic testing, or genomic profiling.

                    </p>
                    <h4 className='text-2xl font-bold'>biomarkers [BY-o-mar-kers]
                    </h4>
                    <p>Genes, proteins, hormones, or other substances that can be tested for to learn important details about a cancer. They may help find cancer, check how you are responding to treatment, or watch to see if a cancer that has come back (recurred). Also called tumor markers.
                    </p>
                    <h4 className='text-2xl font-bold'>biopsy [by-op-see]
                    </h4>
                    <p>Removal of a sample of tissue or cell to see if cancer cells are present. There are several types of biopsies.
                    </p>
                    <h4 className='text-2xl font-bold'>biopsy gun [by-op-see]
                    </h4>
                    <p>An instrument used to take core biopsy samples, often used for prostate biopsies.
                    </p>
                    <h4 className='text-2xl font-bold'>bisphosphonates [bis-FAHS-fun-ates]</h4>
                    <p>Drugs that slow down the action of osteoclasts which break down bone. When cancer spreads to the bones, it can make osteoclasts overactive. Bisphosphonates can be used to help relieve pain and high calcium levels caused by cancer that has spread to bones, help slow the growth of cancer that has spread to the bones, help delay or prevent fractures, and in some cases, help strengthen bones.
                    </p>
                    <h4 className='text-2xl font-bold'>blood count
                    </h4>
                    <p>A count of the number of cells in a given sample of blood.
                    </p>
                    <h4 className='text-2xl font-bold'>body image
                    </h4>
                    <p>The way a person thinks about their body and how they think it looks to others.
                    </p>
                    <h4 className='text-2xl font-bold'>bone marrow
                    </h4>
                    <p>The soft, spongy tissue in the hollow middle of certain bones of the body. This is where new blood cells are made.
                    </p>
                    <h4 className='text-2xl font-bold'>bone marrow aspiration and biopsy [asp-er-A-shun and by-op-see]
                    </h4>
                    <p>A procedure in which a needle is put into the center of a bone, usually the hip or breast bone, to take out a small amount of bone marrow to look at with a microscope.
                    </p>
                    <h4 className='text-2xl font-bold'>bone marrow transplant
                    </h4>
                    <p>A treatment to replace stem cells that have been destroyed by high doses of chemotherapy and/or radiation therapy with healthy stem cells. The bone marrow may come from the patient (autologous) or a donor (allogeneic). Also known as a stem cell transplant.
                    </p>
                    <h4 className='text-2xl font-bold'>bone scan
                    </h4>
                    <p>An imaging test that gives important information about bones, including the location of cancer that may have spread to the bones. A small amount of radioactive contrast material (radioisotope) which is given by vein. This material settles in areas of the bone to which the cancer may be. The radioactive substance can be seen in pictures as it collects in the problem areas (“hot spots”).
                    </p>
                    <h4 className='text-2xl font-bold'>bone survey
                    </h4>
                    <p>An x-ray of all the bones of the body; it may be done when looking for cancer that has spread to the bones. Also called a skeletal survey
                    </p>
                    <h4 className='text-2xl font-bold'>brachytherapy [brake-ee-THER-uh-pee]
                    </h4>
                    <p>Internal radiation treatment that uses a radiation source that’s usually sealed in a small holder called an implant. The implant is placed in the body, very close to or inside the tumor.
                    </p>
                    <h4 className='text-2xl font-bold'>brain scan
                    </h4>
                    <p>An imaging method used to find anything that isn’t normal in the brain, including brain cancer and cancer that has spread to the brain from other places in the body. This scan can be done in an outpatient clinic. It is painless, except for the needle stick when a radioactive substance (radioisotope) is put into a vein. The radioactive substance can be seen in pictures as it collects in abnormal areas.
                    </p>
                    <h4 className='text-2xl font-bold'>BRCA1</h4>
                    <p>A gene which, when damaged (mutated), puts a person at higher risk of developing breast, ovarian, pancreatic, prostate, and other types of cancer, compared to people who do not have the mutation..
                    </p>
                    <h4 className='text-2xl font-bold'>BRCA2
                    </h4>
                    <p>A gene which, when damaged (mutated), puts a person at higher risk of developing breast, ovarian, pancreatic, prostate, and other types of cancer when compared to people who do not have the mutation
                    </p>
                    <h4 className='text-2xl font-bold'>BRCAPRO
                    </h4>
                    <p>A tool used to help health professionals estimate a woman’s breast cancer risk. It estimates breast cancer risk based on certain risk factors.
                    </p>
                    <h4 className='text-2xl font-bold'>breast specialist
                    </h4>
                    <p>A health care professional who has a dedicated interest in breast health. While he or she may have specialized knowledge in this area, medical licensing boards do not certify a specialty in breast care.
                    </p>
                    <h4 className='text-2xl font-bold'>bronchoscopy [brong-kah-skuh-pee]
                    </h4>
                    <p>A look at the bronchi in the lungs using a thin, flexible, lighted tube that goes down the throat. This instrument is called a bronchoscope.
                    </p>
                    <h2 className='text-6xl font-extrabold' id='C'>C</h2>
                    <h4 className='text-2xl font-bold'>CA 19-9
                    </h4>
                    <p>A tumor marker sometimes produced by colorectal, stomach, bile duct, and pancreatic cancers. It may also be produced in non-cancer conditions.
                    </p>
                    <h4 className='text-2xl font-bold'>cachexia [ka-kek-see-uh]
                    </h4>
                    <p>A significant loss of weight and muscle mass caused by loss of appetite and poor nutrition.
                    </p>
                    <h4 className='text-2xl font-bold'>calcifications [kals-if-ik-A-shuns]
                    </h4>
                    <p>Tiny calcium deposits within the breast, seen alone or in clusters. They are often found on a mammogram. Very small deposits may be called microcalcifications. They are a sign of changes within the breast that may need to be followed by more mammograms, or by a biopsy.
                    </p>
                    <h4 className='text-2xl font-bold'>cancer
                    </h4>
                    <p>A group of diseases in which cells in the body change and grow out of control. Most types of cancer cells form a lump, or mass called a tumor. Not all tumors are cancer. A tumor that is not cancer is called benign. A cancerous tumor is called malignant. A cancerous tumor can invade and destroy healthy tissue.
                    </p>
                    <h4 className='text-2xl font-bold'>cancer care team
                    </h4>
                    <p>The group of health care professionals who work together to find, treat, and care for people with cancer. Whether the team is linked formally or informally, there is usually one person who coordinates the team.
                    </p>
                    <h4 className='text-2xl font-bold'>cancer cell
                    </h4>
                    <p>A cell that divides and reproduces abnormally and can spread throughout the body, crowding out normal cells and tissue. Cancer cells develop because of multiple changes to certain genes.
                    </p>
                    <h4 className='text-2xl font-bold'>cancer screening tests
                    </h4>
                    <p>See screening.
                    </p>
                    <h4 className='text-2xl font-bold'>cancer surveillance
                    </h4>
                    <p>The ongoing, timely, and systematic collection and analysis of information on new cancer cases, extent of disease, screening tests, treatment, survival, and cancer deaths for public health reasons.
                    </p>
                    <h4 className='text-2xl font-bold'>cancer susceptibility genes
                    </h4>
                    <p>Genes that could increase a persons risk for some cancers if they have certain mutations Susceptibility genes are usually inherited from parent(s).
                    </p>
                    <h4 className='text-2xl font-bold'>cancer vaccine
                    </h4>
                    <p>A vaccine used to help a person’s immune system attack cancer cells. The goal is to help treat cancer or to help keep it from coming back after other treatments. But there are also some vaccines (the HPV vaccine, for example) that may actually help prevent certain cancers.
                    </p>
                    <h4 className='text-2xl font-bold'>cancer-related fatigue
                    </h4>
                    <p>an unusual and ongoing tiredness that can occur with cancer or cancer treatments. It can be overwhelming, last a long time, and interfere with everyday life. Rest does not always relieve it.
                    </p>
                    <h4 className='text-2xl font-bold'>cannula
                    </h4>
                    <p>A narrow tube. Different kinds may be used to hold tissues open during laparoscopy, or to give IV medicines and fluids.
                    </p>
                    <h4 className='text-2xl font-bold'>capsular contracture
                    </h4>
                    <p>Hardness and deformity in an area caused by scar tissue forming around an implant in the body.
                    </p>
                    <h4 className='text-2xl font-bold'>capsule formation
                    </h4>
                    <p>Scar tissue that may form around an implant as the body reacts to the foreign object.
                    </p>
                    <h4 className='text-2xl font-bold'>carcinoembryonic antigen (CEA) [car-sin-o-em-bre-ON-ic an-tuh-jin]
                    </h4>
                    <p>A substance normally found in certain fetal tissues. If found in an adult, it may suggest that a cancer, especially one starting in the digestive system, may be present. Tests for this substance may help doctors find out if a colorectal cancer has come back after treatment.
                    </p>
                    <h4 className='text-2xl font-bold'>carcinogen [car-sin-o-jin]
                    </h4>
                    <p>Any substance that causes cancer, or helps cancer grow.
                    </p>
                    <h4 className='text-2xl font-bold'>carcinoid syndrome [car-sin-oyd sin-drom]
                    </h4>
                    <p>A group of symptoms produced by carcinoid tumors that release large amounts of hormones, which cause facial flushing, wheezing, diarrhea, a fast heartbeat, and other symptoms.
                    </p>
                    <h4 className='text-2xl font-bold'>carcinoid tumor [car-sin-oyd]
                    </h4>
                    <p>Tumors that develop from neuroendocrine (nerve and endocrine) cells. They can release certain hormones which can cause symptoms such as facial flushing, wheezing, diarrhea, and a fast heartbeat.
                    </p>
                    <h4 className='text-2xl font-bold'>carcinoma [car-sin-O-ma]
                    </h4>
                    <p>A cancer that begins in the skin or the lining layer (epithelial cells) of organs.
                    </p>
                    <h4 className='text-2xl font-bold'>carcinoma in situ [car-sin-O-ma in sy-too]
                    </h4>
                    <p>An early stage of cancer when the tumor is confined to the organ where it first developed. The disease has not invaded other parts of the organ or spread to distant parts of the body. Most in situ carcinomas are highly curable.
                    </p>
                    <h4 className='text-2xl font-bold'>case manager
                    </h4>
                    <p>The member of the cancer care team who coordinates the patient’s care throughout diagnosis, treatment, and recovery, often working with the insurance company, and connecting the patient and family to resources.
                    </p>
                    <h4 className='text-2xl font-bold'>castration [cass-tray-shun]
                    </h4>
                    <p>Use of surgery, radiation, or medicine to stop the ovaries or testicles from making hormones.
                    </p>
                    <h4 className='text-2xl font-bold'>catheter [cath-it-ur]
                    </h4>
                    <p>A thin, flexible tube through which fluids enter or leave the body. For example, a tube to drain urine is called a Foley catheter and a tube used to give intravenous fluids or medicines may be called an IV catheter.
                    </p>
                    <h4 className='text-2xl font-bold'>causal association or causal link [kaw-zul]
                    </h4>
                    <p>A relationship in which one factor is thought to be responsible for or cause an outcome; for instance, smoking has a causal link to lung cancer.
                    </p>
                    <h4 className='text-2xl font-bold'>CDH1
                    </h4>
                    <p>A mutation in this gene can cause hereditary diffuse gastric cancer (a rare type of stomach cancer) to develop at an early age. Women who inherit changes in this gene also have a higher risk of lobular breast cancer.
                    </p>
                    <h4 className='text-2xl font-bold'>cell
                    </h4>
                    <p>The basic building unit of all living things. Cells replace themselves by splitting and forming new cells (this process is called mitosis). The processes that control the formation of new cells and the death of old cells are disrupted in cancer.
                    </p>
                    <h4 className='text-2xl font-bold'>cell cycle
                    </h4>
                    <p>The series of steps that a cell must go through to divide; some chemotherapy drugs work by interfering with the cell cycle.
                    </p>
                    <h4 className='text-2xl font-bold'>centimeter [SIN-tuh-me-ter]
                    </h4>
                    <p>also written as cm. Metric measure of length, 1/100 of a meter. It takes about 2½ cm to equal 1 inch. See also meter, millimeter.
                    </p>
                    <h4 className='text-2xl font-bold'>cerebrospinal fluid [suh-REE-bro-spy-nuhl]
                    </h4>
                    <p>A special clear liquid that surrounds and cushions the brain and spinal cord. Also called CSF.
                    </p>
                    <h4 className='text-2xl font-bold'>cGy
                    </h4>
                    <p>See Gray under radiation dose.
                    </p>
                    <h4 className='text-2xl font-bold'>chaplain
                    </h4>
                    <p>A member of the clergy who helps manage the spiritual needs of the patient and family and can usually address many denominations, faiths, and beliefs.
                    </p>
                    <h4 className='text-2xl font-bold'>CHEK2</h4>
                    <p>A gene that if damaged or mutated, can increase the risk of breast and other types of cancer. A damaged CHEK2 gene can be inherited.
                    </p>
                    <h4 className='text-2xl font-bold'>chemo brain [key-mo brain]
                    </h4>
                    <p>A mental change that can be defined as a decrease in mental “sharpness”, inability to remember certain things, and having trouble finishing tasks, concentrating on something, or learning new skills. It can happen at any time during the cancer journey, before or after cancer treatment.
                    </p>
                    <h4 className='text-2xl font-bold'>chemoprevention [key-mo-pre-VEN-shun]
                    </h4>
                    <p>Using drugs, chemicals, or other substances to try and lower the risk of developing cancer or of cancer coming back.
                    </p>
                    <h4 className='text-2xl font-bold'>chemotherapy [key-mo-THER-uh-pee]
                    </h4>
                    <p>The use of medicines to treat cancer. Chemotherapy may be given alone or with other treatments like surgery, radiation therapy, hormone therapy, targeted therapy, or immunotherapy. It can be given as an infusion, injection, or taken by mouth. Often called chemo.
                    </p>
                    <h4 className='text-2xl font-bold'>chromosome [KROM-uh-som]
                    </h4>
                    <p>Long strands of DNA that carry genes, the basic units of heredity. Most human cells have 23 pairs of chromosomes, one of each pair from the mother, the other from the father. Each chromosome can contain hundreds or thousands of individual genes.
                    </p>
                    <h4 className='text-2xl font-bold'>chronic inflammatory bowel disease
                    </h4>
                    <p>See inflammatory bowel disease.

                    </p>
                    <h4 className='text-2xl font-bold'>chronic obstructive pulmonary disease (COPD) [kron-ick ob-struck-tiv PULL-muh-nerr-ee]
                    </h4>
                    <p>Lung disease such as emphysema or chronic bronchitis, that harms the lungs and makes it harder to breathe. More common in people who smoke.
                    </p>
                    <h4 className='text-2xl font-bold'>chyme [kime]
                    </h4>
                    <p>the thick, nearly liquid mixture of partly digested food and digestive juices found in the stomach and small intestine.
                    </p>
                    <h4 className='text-2xl font-bold'>cirrhosis [seh-ROH-sis]
                    </h4>
                    <p>A disease in which liver cells become damaged and are replaced by scar tissue. People with cirrhosis have an increased risk of liver cancer.
                    </p>
                    <h4 className='text-2xl font-bold'>Claus model
                    </h4>
                    <p>A tool used to help health professionals estimate a woman’s breast cancer risk. It gives an estimate of breast cancer risk based on certain risk factors.
                    </p>
                    <h4 className='text-2xl font-bold'>clinical breast examination (CBE)
                    </h4>
                    <p>            </p>
                    <h4 className='text-2xl font-bold'>            </h4>
                    <p>      Often shortened to CBE. Examination of the breasts done by a health professional such as a doctor or nurse to check for lumps or other changes.
                    </p>
                    <h4 className='text-2xl font-bold'>       clinical nurse specialist (CNS)
                    </h4>
                    <p>     An advanced practice registered nurse (APN or APRN) with a master’s or doctoral degree and special certification who works closely with the entire care team, and has advanced training and clinical experience in a certain area of medical and nursing practice. Oncology CNSs have many different roles, such as direct patient or family care, supervising staff, nursing research related to cancer patients, or teaching about cancer, treatment, and side effects.
                    </p>
                    <h4 className='text-2xl font-bold'>       clinical stage
                    </h4>
                    <p>       See stage.     </p>
                    <h4 className='text-2xl font-bold'>       clinical trials
                    </h4>
                    <p>        Research studies that use human volunteers to test new drugs or other treatments to compare current, standard treatments with others that may be better. They may also test new ways to diagnose or prevent a disease.
                    </p>
                    <h4 className='text-2xl font-bold'>   colectomy [kuh-lek-tuh-me]

                    </h4>
                    <p>        surgery that removes all (total colectomy) or part (partial colectomy or hemicolectomy) of the colon. See also colon, bowel, colostomy, segmental resection, anastomosis.
                    </p>
                    <h4 className='text-2xl font-bold'>    colitis [kuh-lie-tis]
                    </h4>
                    <p>    a general term for inflammation of the large intestine (colon). Colitis can be intermittent (it comes and goes) or chronic (long-lasting, as in ulcerative colitis). See also colon, inflammatory bowel disease.
                    </p>
                    <h4 className='text-2xl font-bold'>   colonoscopy [ko-lun-AH-skuh-pee]
                    </h4>
                    <p>        A procedure that lets a doctor see inside the large intestine, including the colon, to find polyps or cancer.
                    </p>
                    <h4 className='text-2xl font-bold'>   colony-stimulating factors (CSF)
                    </h4>
                    <p> Substances that stimulate the production of blood cells in the bone marrow. CSFs are naturally produced in the body. They may be given to reduce or prevent certain side effects of chemotherapy that might be caused by not having enough blood cells. They may also be given before taking stem cells from a donor for peripheral blood stem cell transplant.
                    </p>
                    <h4 className='text-2xl font-bold'>color Doppler ultrasound

                    </h4>
                    <p>        A type of ultrasound that uses a computer to convert sounds into colors to represent blood flow within an organ. It helps make it easier for doctors to find out if cancer has spread into blood vessels.
                    </p>
                    <h4 className='text-2xl font-bold'>       combination hormone therapy
                    </h4>
                    <p>         See combined androgen blockade.
                    </p>
                    <h4 className='text-2xl font-bold'>       combined androgen blockade (CAB)
                    </h4>
                    <p>        Treatments to lower or stop the production of androgens. For example, complete blockage of androgen (male hormone) production that may include removal of the testicles plus the use of anti-androgens can be used to treat prostate cancer.
                    </p>
                    <h4 className='text-2xl font-bold'>        combined modality therapy [mo-dal-ih-tee]
                    </h4>
                    <p>           Treatments used alternately or together to get the best results. For example, surgery for cancer is often followed by chemotherapy to kill any cancer cells that may have spread from the original site.
                    </p>
                    <h4 className='text-2xl font-bold'>      comedocarcinoma [kom-id-o-car-sin-NO-muh]
                    </h4>
                    <p>     ductal carcinoma in situ that has dead or dying cancer cells in its center. See also ductal carcinoma in situ.
                    </p>
                    <h4 className='text-2xl font-bold'>       complementary therapy
                    </h4>
                    <p>     A non-standard treatment used along with standard medical treatment. Complementary methods are not cancer treatments themselves but may be used to help relieve symptoms of cancer and side effects of treatment. The use of complementary treatments may improve wellbeing and quality of life. Some examples of complementary therapies are meditation, physical activity, acupuncture, yoga, guided imagery, reflexology, and massage. Compare with alternative therapy.
                    </p>
                    <h4 className='text-2xl font-bold'>complexed PSA</h4>
                    <p>The amount of PSA (prostate-specific antigen) in the blood that is bound to other proteins (the portion of PSA that is not “free”). This test is done instead of checking the total and free PSA, and it could give the same amount of information as the other two done separately. Studies are now under way to see if this test provides the same level of accuracy. See also percent-free PSA, prostate-specific antigen.</p>

                    <h4 className='text-2xl font-bold'>concurrent treatment</h4>
                    <p>Treatment or therapy that is given at the same time as another treatment.</p>

                    <h4 className='text-2xl font-bold'>conditioning treatment</h4>
                    <p>Treatment used to destroy the bone marrow or reduce its function to prepare for a stem cell transplant. It helps kill any cancer cells in the body, helps make room for new stem cells to grow, and helps reduce the chance that the patient’s body will reject the transplanted cells.</p>

                    <h4 className='text-2xl font-bold'>conformal proton beam therapy</h4>
                    <p>See proton beam therapy.</p>

                    <h4 className='text-2xl font-bold'>conformal radiation therapy</h4>
                    <p>Radiation treatment that uses a special computer which helps shape the beams of radiation to the shape of the tumor. It also delivers the beams from several different directions rather than all going in from one angle. This cuts down the amount of exposure that any one section of healthy tissue gets by spreading out the entry points.</p>

                    <h4 className='text-2xl font-bold'>control group</h4>
                    <p>In research or clinical trials, the group that does not get the treatment being tested. In cancer research, this group most often gets standard treatment (which has already been tested and is in general use). If no standard treatment exists, the control group may get a placebo or sham treatment. Most cancer clinical trials do not use placebos unless they are given along with an active drug. It’s unethical to give someone a placebo instead of a treatment that’s known to work. Also sometimes called the comparison group.</p>

                    <h4 className='text-2xl font-bold'>conventional therapy or treatment</h4>
                    <p>See standard therapy.</p>

                    <h4 className='text-2xl font-bold'>cord blood transplant</h4>
                    <p>The use of stem cells in blood that has been taken from the placenta and umbilical cords of newborns to replace the blood-forming stem cells in patients whose own stem cells have been destroyed by radiation or chemotherapy.</p>
                    <h4 className='text-2xl font-bold'>core needle biopsy</h4>
                    <p>A procedure used to get tissue samples. The needles are wide and remove a small cylinder of tissue. A pathologist looks at these samples with a microscope to see if cancer cells are present.</p>

                    <h4 className='text-2xl font-bold'>corticosteroid [kor-tih-ko-STEER-oyd]</h4>
                    <p>Any of a number of steroid substances that come from the cortex (outer layer) of the adrenal glands. They are sometimes used as cancer treatments or to reduce nausea. They are also used to relieve pain in patients with cancer in the bone.</p>

                    <h4 className='text-2xl font-bold'>cranium [cray-nee-um]</h4>
                    <p>The bones that form the head. The part of the skull bones that enclose and protect the brain, and support the structures of the face.</p>

                    <h4 className='text-2xl font-bold'>Crohn’s disease or Crohn’s colitis [kronz]</h4>
                    <p>A type of chronic inflammatory bowel disease. In this condition, the small bowel or, less often, the colon is inflamed over a long period of time. This increases a person’s risk of developing colon cancer.</p>

                    <h4 className='text-2xl font-bold'>cryoablation [cry-o-ah-BLAY-shun]</h4>
                    <p>The use of extreme cold to freeze and kill cancer cells. Also called cryosurgery or cryotherapy.</p>

                    <h4 className='text-2xl font-bold'>cryosurgery [cry-o-SUR-juh-ree]</h4>
                    <p>See cryoablation.</p>

                    <h4 className='text-2xl font-bold'>cryotherapy [KRY-oh-THAYR-uh-pee]</h4>
                    <p>See cryoablation.</p>

                    <h4 className='text-2xl font-bold'>CT colonography</h4>
                    <p>See virtual colonoscopy.</p>
                    <h4 className='text-2xl font-bold'>CT scan, CAT scan, or computed tomography scan [toe-mahg-ruh-fee]</h4>
                    <p>An imaging test that takes many x-rays from different angles. These images are combined by a computer to make 3-dimensional (3-D) pictures of internal organs and tissues. CT scans can help doctors find cancers, show things like a tumor’s shape and size, or find out how well treatment is working.</p>

                    <h4 className='text-2xl font-bold'>CT-guided needle biopsy</h4>
                    <p>A biopsy procedure that uses a CT scan to help the doctor advance a biopsy needle toward a suspicious area or mass. The images are repeated until the doctor is sure the needle is in the tumor or mass. Tissue is then taken from it and looked at with a microscope.</p>

                    <h4 className='text-2xl font-bold'>curative treatment [kur-uh-tiv]</h4>
                    <p>Treatment aimed at completely getting rid of the cancer so that no more treatment is needed, and the cancer is not expected to come back.</p>

                    <h4 className='text-2xl font-bold'>cyst [sist]</h4>
                    <p>Pockets of tissue that can form anywhere in the body and may be filled with fluid, air, or pus. Cysts are usually not cancer.</p>

                    <h4 className='text-2xl font-bold'>cystoscopy [sis-tah-skuh-pee]</h4>
                    <p>A procedure that looks at the inside of the urethra and bladder with a thin, flexible, lighted tube called a cystoscope.</p>

                    <h4 className='text-2xl font-bold'>cytogenetics [sy-toe-juh-NET-icks]</h4>
                    <p>Tests that look for abnormal changes (mutations) in chromosomes by testing samples of tissue, bone marrow, or blood in a laboratory. Changes in certain chromosomes can be a sign of some types of cancer or genetic diseases.</p>
                    <h4 className='text-2xl font-bold'>cytokine [sy-toe-kine]</h4>
                    <p>A substance that is made by cells of the body’s immune system that can affect the immune response. Cytokines can also be made in the lab and given to people to help the body’s immune responses against cancer. See also immune system.</p>

                    <h4 className='text-2xl font-bold'>cytology [sy-tahl-uh-jee]</h4>
                    <p>The study of cells using a microscope. Also refers to tests to diagnose cancer and other diseases by looking at cells under a microscope.</p>
                    <h2 className='text-6xl font-extrabold' id='D'>D</h2>
                    <h4 className='text-2xl font-bold'>debulk [de-bulk]</h4>
                    <p>To surgically reduce the volume or amount of cancer, usually by removing all that can be safely taken out. Debulking might increase the chance that other treatments like chemotherapy or radiation therapy will kill all the tumor cells. It may also be done to relieve symptoms.</p>

                    <h4 className='text-2xl font-bold'>depot injection [dee-poe or dep-oh]</h4>
                    <p>A method of injection of a drug that allows it to enter the bloodstream slowly over time. These drugs often can be given every month or even once every few months.</p>

                    <h4 className='text-2xl font-bold'>dermatologist or dermatological oncologist [der-muh-TAHL-uh-jist]</h4>
                    <p>A doctor who specializes in skin diseases. A dermatological oncologist has specialized training in diagnosing and treating skin cancers.</p>

                    <h4 className='text-2xl font-bold'>detection</h4>
                    <p>See early detection.</p>

                    <h4 className='text-2xl font-bold'>diabetes [dai-uh-bee-teez]</h4>
                    <p>A condition that affects how the body turns food into energy. When a person has diabetes, the body does not make enough insulin or use it the way it should. This causes too much sugar to stay in the blood.</p>

                    <h4 className='text-2xl font-bold'>diagnosis [die-ug-NO-sis]</h4>
                    <p>Identifying a disease or condition by its signs or symptoms, and by using imaging tests, lab tests, or biopsy.</p>
                    <h4 className='text-2xl font-bold'>diaphragm [DIE-uh-fram]</h4>
                    <p>A dome-shaped muscle that separates the chest from the abdomen (belly). The diaphragm moves down to pull air into the lungs, and up to push it out.</p>

                    <h4 className='text-2xl font-bold'>dietary supplement</h4>
                    <p>A product, such as a vitamin, mineral, or herb, that is added to the diet with the intention to improve health, and not to diagnose, treat, cure, or prevent disease. Because dietary supplements are not legally considered drugs, their manufacturers can sell them without having to prove they are safe or effective.</p>

                    <h4 className='text-2xl font-bold'>diethylstilbestrol or DES [die-ETH-ul-still-bes-trahl]</h4>
                    <p>A man-made form of estrogen prescribed to some pregnant women between 1938 and 1971 to help prevent miscarriages or premature deliveries. It can increase risk of certain cancers for anyone who was exposed to it during gestation (as an embryo or fetus if the mother took it during pregnancy). Women who took this drug while pregnant may be at a slightly higher risk of breast cancer. It is no longer available in the United States. Also known as DES.</p>

                    <h4 className='text-2xl font-bold'>dietitian or registered dietitian [die-uh-TISH-un]</h4>
                    <p>An expert in the area of nutrition, food, and diet who has passed a national board exam. Many RDs specialize in areas like weight management, exercise science, cancer care, or cardiac rehabilitation. See also nutritionist.</p>

                    <h4 className='text-2xl font-bold'>differentiation [dif-uhr-en-she-A-shun]</h4>
                    <p>The process through which cells mature so they can do the jobs they were meant to do. It describes how much or how little cancer cells look like the normal tissue they came from. Cancer cells that are well-differentiated look more like normal cells and tend to grow and spread more slowly than poorly differentiated or undifferentiated cancer cells.</p>
                    <h4 className='text-2xl font-bold'>digital mammography</h4>
                    <p>A way of storing an x-ray picture of the breast as a computer image rather than on the usual x-ray film. Also called 3D mammogram.</p>

                    <h4 className='text-2xl font-bold'>digital rectal exam (DRE)</h4>
                    <p>An exam in which the doctor puts a lubricated, gloved finger into the rectum to feel for anything that isn’t normal. This simple test, which is generally not painful, can find some prostate and rectal cancers. Also called DRE.</p>

                    <h4 className='text-2xl font-bold'>dilation and curettage or D & C [die-lay-shun and cure-uh-TAZH]</h4>
                    <p>A procedure in which the cervix is opened slightly (dilation) so that tissue from the lining of the uterus (womb) can be removed (curettage). This is often used to get tissue for biopsy. In some cases, all of the contents of the uterus are removed. Also called a D & C.</p>

                    <h4 className='text-2xl font-bold'>dimpling</h4>
                    <p>A pucker or indentation of the skin. Dimpling on the breast might be a sign of cancer.</p>

                    <h4 className='text-2xl font-bold'>discharge</h4>
                    <p>Fluid that comes out of a part of the body.</p>

                    <h4 className='text-2xl font-bold'>discharge coordinator or planner</h4>
                    <p>Often a nurse or social worker who helps make sure patients leaving the hospital have what they need to continue their recovery at home. They also may help a patient find other places to go after leaving the hospital, such as a nursing home or rehab, where they can continue to get the care they need.</p>

                    <h4 className='text-2xl font-bold'>disease-free survival rate</h4>
                    <p>The percentage of people with a certain cancer who are still living and have no evidence of cancer at a certain period of time (usually 5 years) after treatment.</p>

                    <h4 className='text-2xl font-bold'>dissection [di-sek-shun]</h4>
                    <p>Surgery to divide, separate, or remove tissues.</p>
                    <h4 className='text-2xl font-bold'>distal</h4>
                    <p>A term used to refer to a part of the body (usually a limb) located further away from the torso than another part. Ex: the knee is distal to the hip or the ankle is distal to the knee.</p>

                    <h4 className='text-2xl font-bold'>distant cancer</h4>
                    <p>Cancer that has spread far from its original location or primary site to distant organs or lymph nodes. Sometimes called distant metastases.</p>

                    <h4 className='text-2xl font-bold'>diverticulitis [die-ver-tick-you-LIE-tis]</h4>
                    <p>Inflammation or infection of small pouches that form at weak points in the colon wall, which can cause slight bleeding, mild pain, or muscle cramps.</p>

                    <h4 className='text-2xl font-bold'>diverticulosis [die-ver-tick-you-LOW-sis]</h4>
                    <p>The presence of small sacs or pouches in the walls of the colon. These pouches can get inflamed or infected and cause diverticulitis.</p>

                    <h4 className='text-2xl font-bold'>DNA or deoxyribonucleic acid [dee-ok-see-ri-bo-noo-KLEE-ick]</h4>
                    <p>The genetic “blueprint” found in the nucleus (center) of a cell. DNA holds genetic information on cell growth, division, and function and is passed from one generation to the next. Also called DNA.</p>

                    <h4 className='text-2xl font-bold'>DNA repair</h4>
                    <p>The process of correcting the genetic mistakes made each time a cell divides. If the repair process does not go right, it can increase the chances of a person having some forms of cancer.</p>

                    <h4 className='text-2xl font-bold'>Doctor of osteopathic medicine or DO</h4>
                    <p>A doctor with a licensing and educational background much like that of a medical doctor (MD) who is specially trained to use a “whole person” approach to medicine rather than just treating specific symptoms. See also primary care physician.</p>

                    <h4 className='text-2xl font-bold'>dorsal</h4>
                    <p>Relating to the back side of the body or body part.</p>

                    <h4 className='text-2xl font-bold'>dose-dense chemotherapy</h4>
                    <p>Giving the usual doses of chemo with less time between treatments than in a standard treatment plan. For people with some types of cancer, this may lower the chance that the cancer will come back. This approach can lead to more side effects and be harder to take, so it’s not an option for everyone.</p>
                    <h4 className='text-2xl font-bold'>dosimetrist [doe-sim-uh-trist]</h4>
                    <p>A person with special training and certification who calculates and plans the correct dose of radiation therapy (the amount, rate, and how the dose is spread out) for cancer treatment and/or other diseases.</p>

                    <h4 className='text-2xl font-bold'>doubling time</h4>
                    <p>The time it takes for a cell to divide or for a group of cells to double in size. Cancer cells vary in doubling time. A cancer might be present for many years before it can be found.</p>

                    <h4 className='text-2xl font-bold'>drug resistance</h4>
                    <p>When cancer cells or other microorganisms are not affected by the drugs used to destroy them.</p>

                    <h4 className='text-2xl font-bold'>durable power of attorney for health care</h4>
                    <p>A legal document in which you appoint a person to make all your health care decisions for you if you become unable to do so for yourself in the future. This is a type of advanced directive.</p>

                    <h4 className='text-2xl font-bold'>dysphagia [dis-fay-zhe-uh]</h4>
                    <p>Trouble swallowing.</p>

                    <h4 className='text-2xl font-bold'>dysplasia [dis-play-zhuh]</h4>
                    <p>Abnormal changes of groups of cells within a tissue or organ. Dysplasia is not cancer, but the abnormal changes may sometimes lead to cancer.</p>
                    <h2 className='text-6xl font-extrabold' id='E'>E</h2>
                    <h4 className='text-2xl font-bold'>early detection</h4>
                    <p>Finding disease at an early stage, when it is easier to treat, before it has grown large or spread. Certain tests are used before a person has any symptoms to try to find cancer early.</p>

                    <h4 className='text-2xl font-bold'>edema [uh-deem-uh]</h4>
                    <p>Build-up of fluid in tissues, causing swelling.</p>

                    <h4 className='text-2xl font-bold'>efficacy [EF-ih-kuh-see]</h4>
                    <p>Effectiveness. The ability of a treatment to produce the desired result.</p>

                    <h4 className='text-2xl font-bold'>ejaculate [ih-JACK-you-late]</h4>
                    <p>To release semen during male orgasm.</p>

                    <h4 className='text-2xl font-bold'>electrocoagulation or electrofulguration [e-lek-tro-ful-ger-A-shun]</h4>
                    <p>A type of treatment that destroys cancer cells by burning with an electrical current. Also known as electrocautery.</p>

                    <h4 className='text-2xl font-bold'>embolization [em-buh-li-ZAY-shun]</h4>
                    <p>Treatment to block or reduce the blood supply to the cancer by injecting materials to block the artery that supplies blood to the tumor.</p>

                    <h4 className='text-2xl font-bold'>emesis [em-eh-sis]</h4>
                    <p>Vomit or vomiting.</p>

                    <h4 className='text-2xl font-bold'>endocavitary radiation therapy [end-oh-KAV-uh-terr-ee]</h4>
                    <p>Radiation for cancer delivered from a handheld device that is placed inside a body opening. It may be given alone or with external beam radiation therapy.</p>

                    <h4 className='text-2xl font-bold'>endocrine glands [en-duh-krin]</h4>
                    <p>Organs that release hormones into the bloodstream. The ovaries, testicles, thyroid, and adrenals are all examples of endocrine glands.</p>

                    <h4 className='text-2xl font-bold'>endocrine therapy [en-duh-krin]</h4>
                    <p>Manipulation of hormones to treat a disease or condition.</p>
                    <h4 className='text-2xl font-bold'>endocrinologist [en-duh-kruh-NAHL-uh-jist]</h4>
                    <p>A doctor who specializes in diseases related to the glands of the endocrine system, such as the thyroid, pituitary, pancreas, pineal, and adrenal glands.</p>

                    <h4 className='text-2xl font-bold'>endoscopy [en-dahs-kuh-pee]</h4>
                    <p>Inspection of the inner lining of hollow body organs or cavities using a thin, flexible, lighted tube called an endoscope.</p>

                    <h4 className='text-2xl font-bold'>enterostomal therapist [en-ter-oh-STO-mal ther-uh-pist]</h4>
                    <p>A nurse who has been trained and certified to teach people how to care for ostomies (surgically created openings such as a colostomy or urostomy) and wounds. Also called an ostomy nurse or a wound care nurse.</p>

                    <h4 className='text-2xl font-bold'>enucleation [ee-noo-klee-AY-shun]</h4>
                    <p>Surgical removal of something without cutting into it. Sometimes used to describe removal of a whole tumor; also may describe removing an entire eyeball while leaving eye muscles and other contents of the eye socket.</p>

                    <h4 className='text-2xl font-bold'>enzyme [en-zime]</h4>
                    <p>Proteins that start, help, or speed up the rate of chemical reactions in living cells.</p>

                    <h4 className='text-2xl font-bold'>epidemiology [ep-ih-deem-ee-AHL-uh-jee]</h4>
                    <p>The study of diseases in populations (large groups of people from the general population who share a common factor such as age, sex, or health condition) by collecting and analyzing statistical data. In the field of cancer, epidemiologists look at how many people have cancer; who gets certain types of cancer; and what factors (such as environment, job hazards, family patterns, and personal habits, like smoking and diet) are linked to developing cancer.</p>

                    <h4 className='text-2xl font-bold'>epidermal growth factor (EGFR) [ep-ih-DERM-uhl]</h4>
                    <p>Proteins on the surface of cells that signal them to grow and divide. Also called EGFR. Some cancer cells grow faster because they contain more growth factor receptors than normal cells. Drugs that block EGFR signals (EGFR inhibitors) can be used to treat certain types of cancer.</p>
                    <h4 className='text-2xl font-bold'>epidural anesthesia [ep-ih-DUR-uhl an-es-thee-zhuh]</h4>
                    <p>Injection of anesthetic drugs into the space around the spinal cord. This is used to numb the lower part of the body.</p>

                    <h4 className='text-2xl font-bold'>erectile dysfunction</h4>
                    <p>Not being able to have or keep an erection of the penis. Also called ED or impotence.</p>

                    <h4 className='text-2xl font-bold'>esophageal speech [eh-sof-uh-JEE-uhl]</h4>
                    <p>A special way to speak used by some people after the voice box (larynx) has been removed. With training, some people learn to swallow air into the esophagus (the tube that connects your mouth to your stomach) and force it out through their mouth. As the air passes through the throat, it will cause vibrations which, with training, can be turned into speech. This is the most basic form of speech rehabilitation. New devices and surgical techniques often make learning esophageal speech unnecessary.</p>

                    <h4 className='text-2xl font-bold'>estrogen</h4>
                    <p>A hormone found in both men and women, but at higher levels in women. Often called the female sex hormone, it is made mostly by the ovaries, and in smaller amounts by the adrenal cortex. In girls, estrogen helps to regulate puberty, such as growth of breasts. In women, estrogen levels normally cycle on a monthly schedule to regulate menstruation and prepare the body for fertilization and reproduction. Estrogen may promote the growth of cancer cells in breast, endometrial, and adrenal cancers. In men, estrogen is sometimes used to treat advanced prostate cancer by countering the action of testosterone.</p>

                    <h4 className='text-2xl font-bold'>estrogen receptor assay</h4>
                    <p>A lab test done on a sample of the cancer to see if estrogen receptors are present. The growth of normal breast cells and some breast cancers is stimulated by estrogen. Breast cancer cells without these receptors (called estrogen-receptor negative or ER-negative) are unlikely to respond to hormone therapy. Estrogen-receptor positive cancers are more likely to respond to hormone therapy.</p>
                    <h4 className='text-2xl font-bold'>estrogen therapy</h4>
                    <p>See menopausal hormone therapy.</p>

                    <h4 className='text-2xl font-bold'>etiology [ee-tee-AHL-uh-jee]</h4>
                    <p>The cause of a disease. There are many possible causes of cancer. Research is showing that both genetics (genes passed on from your parents) and lifestyle (including exposures to carcinogens) are major factors in many cancers.</p>

                    <h4 className='text-2xl font-bold'>excision [ex-sih-zhun]</h4>
                    <p>Removal by cutting the body (surgery). This can mean cutting out a tumor or cutting off a body part.</p>

                    <h4 className='text-2xl font-bold'>excisional biopsy [ex-sih-zhun]</h4>
                    <p>Surgery that cuts through the skin to remove an entire tumor so that it can be looked at in the lab for cancer.</p>

                    <h4 className='text-2xl font-bold'>explanation of benefits</h4>
                    <p>A document from the health insurance company that explains what part of a medical or health claim was paid and/or what was not.</p>

                    <h4 className='text-2xl font-bold'>external beam radiation therapy</h4>
                    <p>Radiation from a source outside the body that is focused on the cancer. It is much like getting an x-ray, but for a longer time. Also called EBRT. Compare to brachytherapy.</p>
                    <h2 className="text-6xl font-extrabold" id='F'>F</h2>

                    <h4 className='text-2xl font-bold'>false negative</h4>
                    <p>Test result implying a condition does not exist when in fact it does.</p>

                    <h4 className='text-2xl font-bold'>false positive</h4>
                    <p>Test result implying a condition exists when in fact it does not.</p>

                    <h4 className='text-2xl font-bold'>familial adenomatous polyposis (FAP) [fa-mil-e-uhl ad-no-muh-tus or ad-uh-NO-muh-tus pa-lih-PO-sis]</h4>
                    <p>An inherited condition in which many polyps form on the inner wall of the colon and rectum. A polyp is an abnormal growth on the inner lining of organs. Having FAP puts a person at an increased risk for getting colorectal cancer at an early age. FAP can also increase the risk of getting cancers of the stomach, small intestine, liver, adrenal gland, thyroid, brain, pancreas, and bile duct.</p>

                    <h4 className='text-2xl font-bold'>fascia [fash-uh]</h4>
                    <p>A sheet or thin band of fibrous tissue that covers muscles and some organs of the body.</p>

                    <h4 className='text-2xl font-bold'>fat necrosis [nuh-crow-sis]</h4>
                    <p>The death of fat cells, usually following injury. Fat necrosis is not cancer, but it can cause lumps and pulling of the tissues. When this happens in the breast, it can be confused with breast cancer.</p>
                    <h4 className='text-2xl font-bold'>fatigue [fuh-teeg]</h4>
                    <p>An extreme feeling of tiredness or lack of energy, often described as being exhausted. It can last even when a person seems to be getting enough sleep or rest. The fatigue that often comes with cancer is called cancer-related fatigue.</p>

                    <h4 className='text-2xl font-bold'>fecal immunochemical test [fee-kuhl im-you-no-KIM-uh-kuhl test]</h4>
                    <p>A test to look for hidden blood in the stool, which could be a sign of colorectal cancer. A fecal immunochemical blood test uses an antibody that binds to hemoglobin to find any blood. Also called FIT.</p>

                    <h4 className='text-2xl font-bold'>fecal occult blood test (FOBT)</h4>
                    <p>A test for hidden blood in the stool, which could be a sign of colorectal cancer.</p>

                    <h4 className='text-2xl font-bold'>feces [fee-sees]</h4>
                    <p>Solid waste matter; stool.</p>

                    <h4 className='text-2xl font-bold'>fiber, dietary</h4>
                    <p>The part of plant carbohydrates such as fruits, vegetables, whole grains, and legumes that can’t be digested. Beans, vegetables, whole grains, and fruits are examples of good sources of fiber. Links between fiber intake alone and risk of cancer are not proven, but eating these foods is still recommended because they contain other substances that may help prevent cancer. They also have other health benefits.</p>

                    <h4 className='text-2xl font-bold'>fibrocystic changes [fie-bro-SIS-tick]</h4>
                    <p>Changes in the breast that are not cancer. Symptoms might include breast lumps, swelling, and/or tenderness or pain. These symptoms tend to be worse just before the menstrual period and might change during different stages of the menstrual cycle.</p>
                    <h4 className='text-2xl font-bold'>fibrosis [fie-bro-sis]</h4>
                    <p>Formation of scar-like (fibrous) tissue anywhere in the body.</p>

                    <h4 className='text-2xl font-bold'>fine needle aspiration biopsy (FNA or FNAB) [asp-er-A-shun by-op-see]</h4>
                    <p>A procedure in which a thin needle is used to suction up (aspirate) samples to look at with a microscope.</p>

                    <h4 className='text-2xl font-bold'>first-degree relative</h4>
                    <p>A genetically related (blood-related) parent, sibling (brother or sister), or child.</p>

                    <h4 className='text-2xl font-bold'>fistula [fist-chu-luh]</h4>
                    <p>An abnormal passage, opening, or connection between two internal organs or from an internal organ to the outside of the body. A fistula can be created by surgery, or caused by injury or inflammation.</p>

                    <h4 className='text-2xl font-bold'>five-year (5-year) relative survival rate</h4>
                    <p>Five-year relative survival rates compare the number of people who are still alive 5 years after their cancer was found to the survival of others the same age who don’t have cancer. For example, if the 5-year relative survival rate for a specific stage of breast cancer is 90%, it means that women who have that cancer are, on average, about 90% as likely as women who don’t have that cancer to live for at least 5 years after being diagnosed.</p>

                    <h4 className='text-2xl font-bold'>five-year (5-year) survival rate</h4>
                    <p>The percentage of people with the same type and stage of cancer who are alive 5 years or longer after diagnosis. A five-year survival rate can’t tell how long a person will live but may help give them a better understanding of how likely it is that treatment will be successful.</p>

                    <h4 className='text-2xl font-bold'>flow cytometry [sy-tahm-uh-tree]</h4>
                    <p>Test of a sample of cells from a biopsy, cytology specimen, or blood specimen by using special antibodies and a laser beam. It is commonly used to find out the exact type of leukemia or lymphoma a person has. It can also be used to measure the amount of DNA in cancer cells.</p>
                    <h4 className='text-2xl font-bold'>fluorescent in situ hybridization or FISH [floo-res-uhnt in sy-too hi-brid-ih-ZAY-shun]</h4>
                    <p>A test that can help look at chromosomes in cells and tissues. It uses special fluorescent dyes that only attach to certain parts of chromosomes and can find specific deoxyribonucleic acid (DNA) sequences. It can be used to diagnose, evaluate prognosis (disease outlook), or look at the remission of a disease. Also called FISH.</p>

                    <h4 className='text-2xl font-bold'>follicle [fah-lick-uhl]</h4>
                    <p>A sac or pouch-like structure. There are many types and sizes of follicles in the body; for example, in the scalp, one follicle contains one hair. In the ovary, one follicle contains one egg.</p>

                    <h4 className='text-2xl font-bold'>follicular [fah-lick-yuh-ler]</h4>
                    <p>Relating to a follicle or follicles. In medicine, this might refer to a type of cell in an organ, or to a type of cancer that starts in these follicular cells.</p>

                    <h4 className='text-2xl font-bold'>fracture [frack-chur]</h4>
                    <p>A partial or complete break, usually in bone.</p>

                    <h4 className='text-2xl font-bold'>frozen section</h4>
                    <p>A very thin slice of body tissue that has been quick-frozen for the pathologist to look at with a microscope while the patient is still in surgery. This method is sometimes used when information about a tissue sample is needed during surgery to make immediate decisions. The diagnosis is confirmed in a few days by a more detailed study called a permanent section.</p>

                    <h4 className='text-2xl font-bold'>full body CT scan</h4>
                    <p>A radiology test that scans the body from the chin to below the hips. This is done to look for early signs of disease in people who have no symptoms. There are currently no proven benefits to this procedure, and it may be harmful as people are exposed to relatively high levels of radiation during the test.</p>

                    <h2 className='text-6xl font-extrabold' id='G'>G</h2>
                    <h4 className='text-2xl font-bold'>Gardner syndrome</h4>
                    <p>Gardner syndrome is an inherited condition in which polyps (abnormal growths) develop on the inner linings of the colon and rectum. Having Gardner syndrome puts a person at an increased risk for getting colorectal cancer at an early age. It can also cause benign (not cancerous) tumors of the skin, soft connective tissue, and bones; and increase the risk of other types of cancers.</p>

                    <h4 className='text-2xl font-bold'>gastric [gas-trick]</h4>
                    <p>Of or referring to the stomach.</p>

                    <h4 className='text-2xl font-bold'>gastroenterologist [gas-tro-en-ter-AHL-uh-jist]</h4>
                    <p>A doctor who specializes in diseases of the digestive (gastrointestinal or GI) tract.</p>

                    <h4 className='text-2xl font-bold'>gastrointestinal tract or GI tract [gas-tro-in-TEST-uh-nul trakt]</h4>
                    <p>Organs and structures that process and prepare food to be used for energy, and get rid of solid waste. The GI tract includes the mouth, throat, esophagus, stomach, small intestine, large intestine, rectum, and anus. Also called the GI tract or the digestive tract.</p>

                    <h4 className='text-2xl font-bold'>gene</h4>
                    <p>A piece of DNA that is passed on from parent to offspring. Genes have information on inherited traits such as hair color, eye color, and height, as well as susceptibility to certain diseases.</p>

                    <h4 className='text-2xl font-bold'>gene therapy</h4>
                    <p>An experimental type of treatment in which defective genes are replaced with normal or modified ones, or new genes are added to prevent or treat certain diseases like cancer.</p>

                    <h4 className='text-2xl font-bold'>genetic counseling</h4>
                    <p>The process of talking to people who might have a gene that makes them more likely to develop a disease. This is usually done by a specially trained health care professional. The purpose of counseling is to explore the genetic risk, if genetic tests are needed, what the genetic test results might mean, help them decide whether they wish to be tested, and support them before and after the test.</p>
                    <h4 className='text-2xl font-bold'>genetic counselor</h4>
                    <p>A specially trained health professional who helps people understand the risk of a genetic disorder and if genetic testing may be helpful based on personal and family history. The counselor also meets with people who have had genetic testing to provide information about screening options and preventive measures based on the results.</p>

                    <h4 className='text-2xl font-bold'>genetic testing</h4>
                    <p>Tests that can be done to see if a person has certain gene changes known to increase cancer risk. Such testing is not recommended for everyone, but for people with certain types of family history. Genetic counseling should be part of the genetic testing process.</p>

                    <h4 className='text-2xl font-bold'>genome [jee-nome]</h4>
                    <p>The complete set of genetic material in a cell or organism. This includes the total DNA and sometimes ribonucleic acid (RNA). It provides all the information needed for a person to function.</p>

                    <h4 className='text-2xl font-bold'>genomic testing</h4>
                    <p>Tests to see how a person’s cancer will grow and which treatment might work best. It looks at all of a person’s genes. Testing is often done on a sample of the tumor (from a biopsy or surgery) if possible, but it might also be done using a sample of blood, saliva, or other body fluids.</p>

                    <h4 className='text-2xl font-bold'>genomics [jee-nome-ics]</h4>
                    <p>The study of a person’s genetic material (genome), including DNA and RNA, and how it functions.</p>

                    <h4 className='text-2xl font-bold'>germ cell</h4>
                    <p>The reproductive cells of the body, that is, ova (eggs) in females or sperm cells in males.</p>

                    <h4 className='text-2xl font-bold'>glands</h4>
                    <p>A cell or group of cells that make and release substances to be used by the body or sent outside of it. The sweat glands are examples of organs that make and release substances.</p>
                    <h4 className='text-2xl font-bold'>glandular tissue [glan-juh-luhr tish-oo]</h4>
                    <p>Tissue that makes and secretes substances such as breast milk, semen, sweat, saliva, and others. Glandular tissue is present in many organs, including the colon, stomach, pancreas, lungs, and cervix.</p>

                    <h4 className='text-2xl font-bold'>Gleason grade</h4>
                    <p>A number between 1 and 5 that describes how much cancer cells in the prostate look like normal prostate cells. Those that look a lot like normal cells are graded 1, while those that look the least like normal cells are graded 5.</p>

                    <h4 className='text-2xl font-bold'>grade</h4>
                    <p>The grade of a cancer tells how much the cancer cells look like normal cells. A low-grade number usually means the cancer cells look more like normal cells and are slower-growing and less likely to spread. A high-grade number means the cancer cells look less like normal cells and are faster-growing and more likely to spread.</p>

                    <h4 className='text-2xl font-bold'>graft-versus-host disease (GVHD)</h4>
                    <p>A condition that results when the immune cells from a donor (usually a bone marrow or other type of stem cell transplant) attack the tissues of the person receiving the transplant.</p>

                    <h4 className='text-2xl font-bold'>gray (Gy)</h4>
                    <p>A unit for measuring radiation.</p>

                    <h4 className='text-2xl font-bold'>growth factors</h4>
                    <p>Naturally occurring proteins that make cells grow and divide. Too much growth factor production by some cancer cells helps them grow quickly. New treatments to block these growth factors are being tested in clinical trials. Other growth factors are sometimes used to help normal cells recover from side effects of chemotherapy.</p>

                    <h4 className='text-2xl font-bold'>guaiac [gwi-ack]</h4>
                    <p>A substance in the fecal occult blood test used to check for blood in a person’s stool.</p>
                    <h4 className='text-2xl font-bold'>gynecologic oncologist [guy-nuh-kuh-LA-jik on-kahl-uh-jist]</h4>
                    <p>A doctor who specializes in cancers of the female sex (reproductive) organs.</p>

                    <h4 className='text-2xl font-bold'>gynecologist [guy-nuh-KAHL-uh-jist]</h4>
                    <p>A doctor who specializes in female health issues, including sexual and reproductive function and the diseases of their reproductive organs, except diseases of the breast that require surgery.</p>

                    <h4 className='text-2xl font-bold'>gynecomastia [guy-nuh-ko-MAST-tee-uh]</h4>
                    <p>An increase in the amount of a male’s breast tissue (male breast enlargement). It can develop as a button-like or disk-like growth under the nipple and areola (the dark circle around the nipple), which can be felt and sometimes seen. It can also look like small breasts. It can be caused by hormonal changes or imbalances and certain medications.</p>
                    <h2 className="text-6xl font-extrabold" id='H'>H</h2>
                    <h4 className='text-2xl font-bold'>health care power of attorney</h4>
                    <p>See durable power of attorney for health care.</p>

                    <h4 className='text-2xl font-bold'>health disparity</h4>
                    <p>A type of preventable health difference that is closely linked with social, political, economic, and environmental disadvantage. Health disparities may occur because of race, ethnicity, sex, gender identity, sexual orientation, age, religion, disability, education, income, where people live, or other characteristics. For example, certain race and ethnic groups may have higher rates of disease, disability, and death than those in other groups because they are more likely to have problems having access to good health care, healthy food, or the latest medical treatments. Research is being done to learn more about health disparities in certain groups of people and ways to reduce them.</p>

                    <h4 className='text-2xl font-bold'>hematochezia [he-muh-toe-KEEZ-ee-uh or hem-at-uh-KEEZ-ee-uh]</h4>
                    <p>Bright red blood in the stool.</p>

                    <h4 className='text-2xl font-bold'>hematocrit [he-mat-uh-krit]</h4>
                    <p>The percentage of red blood cells in the blood. A hematocrit test can be used to check for conditions like anemia.</p>

                    <h4 className='text-2xl font-bold'>hematologist [he-muh-TAHL-uh-jist]</h4>
                    <p>A doctor who specializes in blood disorders (also called blood dyscrasias), including cancers of the blood and blood-forming tissues.</p>

                    <h4 className='text-2xl font-bold'>hematoma [he-muh-TOE-muh]</h4>
                    <p>A collection of blood outside a blood vessel caused by a leak or an injury. A bruise is an example of a hematoma.</p>

                    <h4 className='text-2xl font-bold'>hematuria [he-muh-TUR-ee-uh]</h4>
                    <p>Blood in the urine.</p>

                    <h4 className='text-2xl font-bold'>hemoglobin [HE-muh-glo-bin]</h4>
                    <p>The part of the red blood cell that carries oxygen. Hemoglobin levels can get very low in people with cancer, especially during certain kinds of treatment.</p>
                    <h4 className='text-2xl font-bold'>hemorrhoids [hem-uh-royds]</h4>
                    <p>Painful, swollen veins in the anus that might bleed.</p>

                    <h4 className='text-2xl font-bold'>hepatitis [hep-ah-tie-tis]</h4>
                    <p>Inflammation of the liver.</p>

                    <h4 className='text-2xl font-bold'>hepatologist [hep-a-TAH-loh-jist]</h4>
                    <p>A doctor who specializes in diseases of the liver and bile ducts.</p>

                    <h4 className='text-2xl font-bold'>hepatomegaly [hep-at-o-MEG-uh-lee]</h4>
                    <p>Enlargement of the liver.</p>

                    <h4 className='text-2xl font-bold'>HER-2 or human epidermal growth factor receptor 2</h4>
                    <p>A protein that is found in higher amounts in some cancers (HER-2 positive). Cancers that are HER-2 positive tend to grow faster and spread more than those that are HER-2 negative. Also called HER2 or HER2/neu.</p>

                    <h4 className='text-2xl font-bold'>hereditary cancer syndrome</h4>
                    <p>A condition in which inherited changes in genes cause a person to have a higher than normal risk for certain types of cancers.</p>

                    <h4 className='text-2xl font-bold'>hereditary non-polyposis colon cancer (HNPCC) [huh-RED-ih-ter-ee non-pah-lih-PO-sis]</h4>
                    <p>An inherited condition that greatly increases a person’s risk for developing colorectal cancer, as well as endometrial cancer (cancer of the lining of the uterus), ovarian cancer, stomach cancer, small bowel cancer, and cancer of the lining of the kidney or the ureters. People with this condition tend to develop cancer when they are young without first having many polyps. Also called Lynch syndrome.</p>

                    <h4 className='text-2xl font-bold'>hesitancy</h4>
                    <p>Trouble starting to urinate or continuing urination after it starts.</p>
                    <h4 className='text-2xl font-bold'>heterogeneous [HEH-teh-roh-JEE-nee-us]</h4>
                    <p>Having different parts or elements (e.g., cells or tissues that don’t look alike).</p>

                    <h4 className='text-2xl font-bold'>high risk</h4>
                    <p>When the chance of developing a disease such as cancer is much greater than that normally seen in the general population.</p>

                    <h4 className='text-2xl font-bold'>high-dose rate (HDR) or temporary brachytherapy [brake-ee-THER-uh-pee]</h4>
                    <p>A form of radiation treatment where a radioactive source is placed in or near a cancer for a short period of time then removed. Also called HDR brachytherapy.</p>

                    <h4 className='text-2xl font-bold'>histology [hiss-tah-luh-jee]</h4>
                    <p>The study of cells or tissues with a microscope.</p>

                    <h4 className='text-2xl font-bold'>home health nurse</h4>
                    <p>A nurse who provides care in the patient’s home, including teaching about and giving medicines and certain treatments, and checking to see if the patient needs other medical care.</p>

                    <h4 className='text-2xl font-bold'>homogeneous [home-uh-JEE-ne-us]</h4>
                    <p>Cells or tissue that look the same throughout.</p>

                    <h4 className='text-2xl font-bold'>hormone</h4>
                    <p>Proteins or substances made by glands in the body that help control how certain types of cells and organs work.</p>

                    <h4 className='text-2xl font-bold'>hormone receptor</h4>
                    <p>A protein in or on a cell that binds to a certain hormone and changes the cell’s ability to grow.</p>

                    <h4 className='text-2xl font-bold'>hormone receptor assay</h4>
                    <p>A test used to see if a breast tumor is likely to be affected by hormones or if it can be treated with hormones.</p>

                    <h4 className='text-2xl font-bold'>hormone replacement therapy (HRT)</h4>
                    <p>See menopausal hormone therapy.</p>
                    <h4 className='text-2xl font-bold'>hormone therapy</h4>
                    <p>Cancer treatment using medicines that block or alter hormones to help kill or slow the growth of cancer cells that depend on hormones. Also known as endocrine therapy.</p>

                    <h4 className='text-2xl font-bold'>hormone-dependent</h4>
                    <p>Any cancer that depends on hormones for growth, such as some breast and prostate cancers.</p>

                    <h4 className='text-2xl font-bold'>hormone-refractory</h4>
                    <p>No longer responding to hormone treatments.</p>

                    <h4 className='text-2xl font-bold'>hospice</h4>
                    <p>A special kind of care for people in the final phase of an incurable illness. Hospice focuses on quality of life for people and their caregivers who are experiencing an advanced, life-limiting illness.</p>

                    <h4 className='text-2xl font-bold'>hospice care specialists or team</h4>
                    <p>Doctors, nurses, other health care professionals, social workers, chaplains, counselors, and trained volunteers who work together in a patient and family-centered approach. The work of a hospice team focuses on the physical, emotional, or spiritual needs of patients who are nearing the end of life and are no longer in active treatment for a serious illness.</p>

                    <h4 className='text-2xl font-bold'>hospitalist</h4>
                    <p>A doctor who works only in a hospital.</p>

                    <h4 className='text-2xl font-bold'>hot flush or hot flash</h4>
                    <p>Sudden feeling of facial or body warmth, along with flushing of the skin and sweating. Caused by hormone changes of menopause or certain types of cancer treatment.</p>

                    <h4 className='text-2xl font-bold'>HPV or human papillomavirus [pap-uh-LO-muh vy-rus]</h4>
                    <p>A large group of related viruses, some of which can cause cancer. Also called human papilloma virus.</p>
                    <h4 className='text-2xl font-bold'>HPV test or human papillomavirus test [pap-uh-LO-muh vy-rus]</h4>
                    <p>Screening test used to look for cervical cancer before any symptoms occur. Might be used alone (primary HPV test) or combined with a Papanicolaou (Pap) test (co-testing).</p>

                    <h4 className='text-2xl font-bold'>hyperalimentation [hi-per-al-ih-men-TAY-shun]</h4>
                    <p>Liquid nutrition given into a vein (intravenously or IV).</p>

                    <h4 className='text-2xl font-bold'>hyperplasia [hi-per-PLAY-zhuh]</h4>
                    <p>Benign overgrowth of cells. Also known as hyperplastic.</p>

                    <h4 className='text-2xl font-bold'>hypertension [hi-per-TEN-shun]</h4>
                    <p>High blood pressure.</p>

                    <h4 className='text-2xl font-bold'>hyperthermia [hi-per-THERM-ee-uh]</h4>
                    <p>Higher body temperature than normal. Also used to describe treatments that use carefully controlled heat for medical purposes.</p>

                    <h4 className='text-2xl font-bold'>hysterectomy [hiss-ter-EK-tuh-me]</h4>
                    <p>An operation to remove the uterus.</p>
                    <h2 className="text-6xl font-extrabold" id='I'>I</h2>
                    <h4 className='text-2xl font-bold'>image cytometry</h4>
                    <p>Lab test that uses dyes that react with DNA and computers to measure the amount of DNA in cells.</p>

                    <h4 className='text-2xl font-bold'>imaging studies</h4>
                    <p>Methods used to make pictures of internal body structures. Some imaging tests used to help diagnose or stage cancer are x-rays, CT scans, magnetic resonance imaging (MRI), PET scans, and ultrasound.</p>

                    <h4 className='text-2xl font-bold'>immune system</h4>
                    <p>Cells, tissues, and organs that work together to help find and attack germs that invade the body and cause infections. The immune system may also help find some cancers.</p>

                    <h4 className='text-2xl font-bold'>immunocytochemistry [im-yuh-no-sy-toe-KEM-iss-tree]</h4>
                    <p>Lab tests that use antibodies to look for specific proteins on individual or small numbers of cells.</p>

                    <h4 className='text-2xl font-bold'>immunology [im-yuh-NAHL-uh-jee]</h4>
                    <p>Study of the immune system and how the body resists infection and certain other diseases.</p>

                    <h4 className='text-2xl font-bold'>immunosuppression [im-yuh-no-suh-PREH-shun]</h4>
                    <p>When the immune system is weak. This condition may be present at birth, or it may be caused by cancer, or cancer treatments (such as chemotherapy and radiation). It leads to a greater risk of infection.</p>
                    <h4 className='text-2xl font-bold'>immunotherapy [im-yuh-no-THER-uh-pee]</h4>
                    <p>Treatments that use the body’s immune system to fight cancer by boosting or changing how the immune system works so it can find and attack cancer cells.</p>

                    <h4 className='text-2xl font-bold'>implant</h4>
                    <p>An artificial device or tissue inserted into the body, such as breast implants during reconstructive surgery or radiation implants (internal radiation) to treat cancer. Also refers to fixing or setting securely or deeply in place.</p>

                    <h4 className='text-2xl font-bold'>impotence [im-puh-tense]</h4>
                    <p>Not being able to have or keep enough of an erection of the penis for penetration. Also called erectile dysfunction (ED).</p>

                    <h4 className='text-2xl font-bold'>in situ [in sy-too]</h4>
                    <p>In place; localized and confined to one area. Not considered cancer but can increase the risk of cancer developing later.</p>

                    <h4 className='text-2xl font-bold'>incidence [in-sih-dens]</h4>
                    <p>The number of new cases of a disease in a certain period of time.</p>

                    <h4 className='text-2xl font-bold'>incidence rate [in-sih-dens rate]</h4>
                    <p>The number of people with a disease (such as cancer) divided by the number of people at risk for the disease over a certain time period. Incidence rates may look at a specific group of people (such as those aged 65 and older). These rates are usually reported as the number of people who get a disease per 100,000 people.</p>

                    <h4 className='text-2xl font-bold'>incision [in-sih-zhun]</h4>
                    <p>A cut in the skin or other tissues made during surgery.</p>

                    <h4 className='text-2xl font-bold'>incisional biopsy</h4>
                    <p>A cut through the skin to remove a part of a tumor so that it can be examined in the lab to determine if there is cancer in the tumor.</p>

                    <h4 className='text-2xl font-bold'>inconclusive</h4>
                    <p>Uncertain finding. A result that cannot definitively determine whether a disease, condition, or gene mutation is present; it is neither positive nor negative.</p>

                    <h4 className='text-2xl font-bold'>incontinence [in-kon-tuh-nence]</h4>
                    <p>Partial or complete loss of urinary or bowel control.</p>

                    <h4 className='text-2xl font-bold'>inferior</h4>
                    <p>An anatomical term that means below another part of the body or toward the feet.</p>

                    <h4 className='text-2xl font-bold'>infertility</h4>
                    <p>Inability to conceive a child after 12 or more months of regular sexual activity, or after 6 months if the woman is more than 35 years old. This can be the result of certain types of cancer treatment.</p>

                    <h4 className='text-2xl font-bold'>inflammatory bowel disease (IBD)</h4>
                    <p>A chronic condition (either ulcerative colitis or Crohn’s disease) in which the colon is inflamed over a long period. IBD increases a person’s risk of colorectal cancer.</p>

                    <h4 className='text-2xl font-bold'>informed consent [in-FORMD kun-SENT]</h4>
                    <p>A process of communication between a person and their health care provider to provide a full explanation of the procedure or treatment, including possible risks, benefits, and alternatives. This process ensures that the person fully understands the procedure or treatment before agreeing to it.</p>

                    <h4 className='text-2xl font-bold'>infraclavicular [in-fruh-kluh-VICK-yuh-ler]</h4>
                    <p>Below the collarbone (clavicle).</p>

                    <h4 className='text-2xl font-bold'>ingest [in-jest]</h4>
                    <p>To take into the body by eating, drinking, or absorbing it.</p>

                    <h4 className='text-2xl font-bold'>inherited disease</h4>
                    <p>Illness that a person is at higher risk for because of a gene mutation passed from their parents at conception.</p>

                    <h4 className='text-2xl font-bold'>inpatient</h4>
                    <p>A person whose treatment requires them to stay in the hospital.</p>

                    <h4 className='text-2xl font-bold'>integrated PET/CT</h4>
                    <p>A scan that combines the detailed image of the CT with the ability to detect areas of increased cell activity.</p>

                    <h4 className='text-2xl font-bold'>integrative therapy</h4>
                    <p>The combined use of standard medical treatments and certain complementary methods, most often to relieve the symptoms of cancer and side effects of treatment.</p>


                    <h4 className='text-2xl font-bold'>interferon [in-ter-FEAR-on]</h4>
                    <p>A natural chemical produced by cells that helps regulate the body’s immune system, boosting activity when there is a threat, like a virus or cancer. Lab-made interferons are used to treat some types of cancer.</p>

                    <h4 className='text-2xl font-bold'>interleukins [IN-ter-loo-kins]</h4>
                    <p>A group of proteins (cytokines) that act as chemical signals between white blood cells, making them perform their assigned jobs.</p>

                    <h4 className='text-2xl font-bold'>intermittent hormone therapy</h4>
                    <p>Hormone therapy given in an on-again, off-again approach.</p>

                    <h4 className='text-2xl font-bold'>interstitial radiation therapy [in-ter-STIH-shul]</h4>
                    <p>Internal radiation treatment (brachytherapy) that places a radioactive implant into the tissue in or near the tumor.</p>

                    <h4 className='text-2xl font-bold'>intracavitary radiation therapy</h4>
                    <p>Radiation treatment in which the radioactive source is placed in a body cavity (space), such as the rectum or uterus.</p>

                    <h4 className='text-2xl font-bold'>intramuscular (IM)</h4>
                    <p>Injected into a muscle.</p>

                    <h4 className='text-2xl font-bold'>intraoperative ultrasound</h4>
                    <p>A procedure done using sound waves (ultrasound) inside the body after surgery has started. The sound waves create images on a computer. For example, the probe can be placed on the surface of the liver to see if cancer has spread inside it.</p>


                    <h4 className='text-2xl font-bold'>intravenous (IV) [in-truh-VEEN-us]</h4>
                    <p>A method of giving fluids and medicines through a needle or a thin tube (called a catheter) that is inserted into a vein.</p>

                    <h4 className='text-2xl font-bold'>intravenous pyelogram (IVP) [in-truh-VEEN-us pile-uh-gram]</h4>
                    <p>A type of x-ray procedure that uses a special dye to examine the structure and function of the urinary system (ureters, bladder, and kidneys).</p>

                    <h4 className='text-2xl font-bold'>invasive cancer</h4>
                    <p>Cancer that has grown into nearby tissues.</p>

                    <h4 className='text-2xl font-bold'>investigational</h4>
                    <p>Being studied. Often used to describe medicines or other treatments being researched in clinical trials that are not yet available to the general public.</p>
                    <h2 className="text-6xl font-extrabold" id='K'>K</h2>
                    <h4 className='text-2xl font-bold'>Kegel exercises</h4>
                    <p>Exercises to strengthen the muscles in the floor of the pelvis. These exercises may help improve muscle strength and bladder control.</p>
                    <h2 className="text-6xl font-extrabold" id='L'>L</h2>
                    <h4 className='text-2xl font-bold'>lactation [lack-tay-shun]</h4>
                    <p>Production of milk in the breast.</p>

                    <h4 className='text-2xl font-bold'>laparoscope [LAP-uh-ruh-scope]</h4>
                    <p>A narrow, lighted tube with a small camera at the end, inserted into the body through a very small cut. It allows the surgeon to see organs and lymph nodes inside the body. The lymph nodes or organs can then be removed using special surgical instruments inserted through small incisions.</p>

                    <h4 className='text-2xl font-bold'>laparoscopic surgery [lap-uh-ruh-SKAH-pick]</h4>
                    <p>Surgery using a narrow lighted tube with a camera and special long instruments inserted through several small incisions in the body.</p>

                    <h4 className='text-2xl font-bold'>laparoscopy [lap-uh-RAHS-kuh-pee]</h4>
                    <p>Examination of a body cavity with an instrument called a laparoscope.</p>

                    <h4 className='text-2xl font-bold'>lateral</h4>
                    <p>Away from the middle of the body.</p>

                    <h4 className='text-2xl font-bold'>laxative [lack-suh-tiv]</h4>
                    <p>A medicine that helps make stool (feces) easier to pass, promoting defecation to prevent or treat constipation. Laxatives work in different ways; for example, by pulling fluid into the intestine, irritating the bowel to stimulate movement, adding bulk (such as fiber), softening the stool, or lubricating it for easier passage.</p>

                    <h4 className='text-2xl font-bold'>leiomyoma [lie-o-my-O-muh]</h4>
                    <p>A benign (non-cancerous) fibrous tumor of the uterus (womb). About 40% of women have leiomyomas by age 40. They usually have no symptoms, but can cause abnormal uterine bleeding and other symptoms depending on their size and location in the uterus. Also called uterine fibroid tumor or fibroma.</p>

                    <h4 className='text-2xl font-bold'>lesion [lee-zhun]</h4>
                    <p>An area of body tissue that has been damaged by injury or disease, such as cancer.</p>

                    <h4 className='text-2xl font-bold'>leukocyte [LOO-ko-site]</h4>
                    <p>White blood cell.</p>

                    <h4 className='text-2xl font-bold'>leukocytosis [loo-ko-sy-TOE-sis]</h4>
                    <p>Having more than the usual number of white blood cells.</p>

                    <h4 className='text-2xl font-bold'>leukopenia [loo-ko-PEE-nee-uh]</h4>
                    <p>A decrease in the white blood cell count, common in people with cancer, and often a side effect of chemotherapy.</p>

                    <h4 className='text-2xl font-bold'>leukoplakia [loo-ko-PLAY-key-uh]</h4>
                    <p>White patches on the tongue or inside the cheeks. These are often pre-cancers.</p>

                    <h4 className='text-2xl font-bold'>LHRH agonists</h4>
                    <p>See luteinizing hormone-releasing hormone analogs.</p>

                    <h4 className='text-2xl font-bold'>libido [lih-be-doe]</h4>
                    <p>Sexual desire.</p>

                    <h4 className='text-2xl font-bold'>linear accelerator or linac</h4>
                    <p>A machine used for external-beam radiation therapy to treat cancer. It delivers one or more beams of radiation based on the treatment plan.</p>

                    <h4 className='text-2xl font-bold'>lipoma</h4>
                    <p>A tumor made of fatty tissue. It is not cancer.</p>

                    <h4 className='text-2xl font-bold'>living will</h4>
                    <p>A legal document that allows a person to decide what should be done if they become unable to make health care decisions on their own; a type of advance directive.</p>

                    <h4 className='text-2xl font-bold'>lobe</h4>
                    <p>A part of an organ, such as the lungs, brain, liver, and thyroid.</p>

                    <h4 className='text-2xl font-bold'>lobectomy [low-bek-tuh-me]</h4>
                    <p>Surgery to remove a lobe of an organ – usually the lung.</p>

                    <h4 className='text-2xl font-bold'>local anesthesia</h4>
                    <p>See anesthesia.</p>

                    <h4 className='text-2xl font-bold'>local excision [lo-kul eck-si-zhun]</h4>
                    <p>Surgery to remove small superficial (surface) cancers, such as those on the skin or in the colon or rectum.</p>

                    <h4 className='text-2xl font-bold'>local recurrence</h4>
                    <p>See recurrence.</p>

                    <h4 className='text-2xl font-bold'>local therapy</h4>
                    <p>Treatment that focuses on the site of the cancer, so that the rest of the body is not affected. Surgery, radiation, topical treatments, and cryotherapy are examples of local therapy.</p>

                    <h4 className='text-2xl font-bold'>localized cancer</h4>
                    <p>A cancer that is confined to the organ where it started; it has not spread to other parts of the body. Also called local cancer.</p>


                    <h4 className='text-2xl font-bold'>low-dose CT scan</h4>
                    <p>Screening test used to check for signs of lung cancer in people at higher risk for the disease.</p>

                    <h4 className='text-2xl font-bold'>low-dose rate brachytherapy [brake-ee-THER-uh-pee]</h4>
                    <p>Treatment that places pellets or seeds of radioactive material into the cancerous area. The pellets (seeds) are left in place and emit low doses of radiation for weeks or months. Often used for prostate cancer, where pellets are inserted through the skin of the perineum (behind the scrotum) into the prostate. Compare to high-dose rate brachytherapy. Also called LDR brachytherapy or permanent brachytherapy.</p>

                    <h4 className='text-2xl font-bold'>lower GI series</h4>
                    <p>A series of x-rays of the intestines taken after a barium enema is administered.</p>

                    <h4 className='text-2xl font-bold'>lumbar puncture (LP)</h4>
                    <p>A procedure that places a thin needle between the bones of the spine (vertebrae) and into the spinal canal to withdraw a small amount of spinal fluid or to administer medicine into the central nervous system (brain and spinal cord) through the spinal fluid. Also called a spinal tap.</p>

                    <h4 className='text-2xl font-bold'>lump</h4>
                    <p>Any mass or swelling in the body.</p>

                    <h4 className='text-2xl font-bold'>lupus</h4>
                    <p>A disease in which the body attacks its own tissues and organs, causing inflammation. Lupus affects many parts of the body and presents different symptoms for different individuals.</p>

                    <h4 className='text-2xl font-bold'>luteinizing hormone (LH) [LOO-tee-uh-ny-zing]</h4>
                    <p>A pituitary hormone that stimulates the testicles to produce testosterone and the ovaries to produce estrogen. Also called LH.</p>

                    <h4 className='text-2xl font-bold'>luteinizing hormone-releasing hormone analogs or LHRH analogs [LOO-tee-uh-ny-zing]</h4>
                    <p>Lab-made hormones, chemically similar to luteinizing hormone-releasing hormone (LHRH). They inhibit the body from producing the male hormone testosterone and are sometimes used to treat prostate cancer. Sometimes referred to as gonadotropin-releasing hormone (GnRH) analogs.</p>

                    <h4 className='text-2xl font-bold'>luteinizing hormone-releasing hormone antagonist [LOO-tee–uh-ny-zing]</h4>
                    <p>A type of drug thought to lower testosterone levels more quickly without worsening tumor symptoms (known as tumor flare). These drugs are also called LHRH antagonists or gonadotropin-releasing hormone (GnRH) antagonists.</p>

                    <h4 className='text-2xl font-bold'>luteinizing hormone-releasing hormone or LHRH [LOO-tee-uh-ny-zing]</h4>
                    <p>A hormone made by the hypothalamus (a tiny gland in the brain) that influences pituitary gland production of luteinizing hormone and follicle-stimulating hormone. It affects testosterone levels in men and estrogen and progesterone levels in women. Also known as LHRH or gonadotropin-releasing hormone.</p>

                    <h4 className='text-2xl font-bold'>lycopenes [lie-kuh-peenz]</h4>
                    <p>Plant compounds believed to have health-protecting qualities. Lycopenes are found in tomatoes, pink grapefruit, and watermelon. Current research suggests that a balanced diet including these foods, as well as other fruits and vegetables, is likely more beneficial than taking specific substances as dietary supplements.</p>

                    <h4 className='text-2xl font-bold'>lymph [limf]</h4>
                    <p>Clear fluid that flows through the lymphatic vessels throughout the body.</p>

                    <h4 className='text-2xl font-bold'>lymph node [limf node]</h4>
                    <p>A small bean-shaped collection of immune system tissue, such as lymphocytes, found throughout the body along lymphatic vessels. They remove cell waste, germs, and other harmful substances from lymph. Lymph nodes help fight infections and play a role in combating cancer, although cancers can spread through them. Sometimes referred to as lymph glands.</p>

                    <h4 className='text-2xl font-bold'>lymph node biopsy</h4>
                    <p>Removal of all or part of one lymph node to be examined with a microscope to determine if cancer has spread there.</p>

                    <h4 className='text-2xl font-bold'>lymph node dissection</h4>
                    <p>Removal of multiple lymph nodes. After removal, the lymph nodes are examined with a microscope to check for cancer spread. Also called lymphadenectomy.</p>

                    <h4 className='text-2xl font-bold'>lymphadenopathy [limf-A-duh-NAHpuh-thee]</h4>
                    <p>Swelling of the lymph nodes.</p>
                    <h4 className='text-2xl font-bold'>lymphedema [limf-uh-DEE-muh]</h4>
                    <p>A build-up of lymph fluid in the tissues just under the skin, causing swelling and discomfort. It most often affects the arms or legs, but can also develop in the face, neck, trunk, abdomen (belly), or genitals. This can occur when the lymph system is damaged by cancer treatment, infections, injury, or other issues. Lymphedema can develop even years after treatment and may be a lifelong problem.</p>

                    <h4 className='text-2xl font-bold'>lymphocyte [limf-o-site]</h4>
                    <p>A type of white blood cell that helps the body fight infection.</p>

                    <h4 className='text-2xl font-bold'>lymphokine [limf-o-kine]</h4>
                    <p>See cytokine.</p>

                    <h4 className='text-2xl font-bold'>lymphovascular invasion [limf-o-vasc-u-lar invasion]</h4>
                    <p>Cancer growth into the small blood vessels or lymph vessels inside or around a tumor. This doesn’t mean that the cancer has spread, but it is more likely to do so.</p>

                    <h4 className='text-2xl font-bold'>Lynch syndrome</h4>
                    <p>An inherited tendency to develop certain cancers, such as colorectal, endometrial, ovarian, stomach, small intestine, pancreas, kidney, brain, ureter, and bile duct cancers. Also called hereditary non-polyposis colorectal cancer (HNPCC).</p>

                    <h2 className="text-6xl font-extrabold" id='M'>M</h2>


                    <h4 className='text-2xl font-bold'>magnetic resonance imaging or MRI</h4>
                    <p>A method of taking cross-sectional pictures of the inside of the body. Instead of using x-rays, MRI uses strong magnets to create images. The images appear on a computer screen as well as on film. MRI is particularly useful for visualizing soft tissue parts of the body that may be difficult to see with other imaging tests. Also known as magnetic resonance, MR, or nuclear magnetic resonance (NMR) imaging.</p>

                    <h4 className='text-2xl font-bold'>malignant [muh-lig-nunt]</h4>
                    <p>Cancerous; dangerous or likely to cause death if untreated.</p>

                    <h4 className='text-2xl font-bold'>margin [mar-jin]</h4>
                    <p>In cancer surgery or biopsy, the tissue beyond the visible edge of the tumor or abnormal tissue that is removed along with the tumor or abnormality, in an effort to ensure all of the cancer is excised.</p>

                    <h4 className='text-2xl font-bold'>mass</h4>
                    <p>Any sort of lump or abnormal growth of tissue, which may or may not be cancerous.</p>

                    <h4 className='text-2xl font-bold'>medial</h4>
                    <p>An anatomical term that means toward the center of the body.</p>
                    <h4 className='text-2xl font-bold'>medical power of attorney</h4>
                    <p>See durable power of attorney for health care.</p>

                    <h4 className='text-2xl font-bold'>menarche [men-ar-key]</h4>
                    <p>The point in time when menstrual periods begin. Early menarche (before age 12) is a risk factor for some cancers.</p>

                    <h4 className='text-2xl font-bold'>menopause [men-uh-paws]</h4>
                    <p>The phase in life when ovaries stop functioning and menstruation ceases. During this time, hormone levels typically fluctuate before stabilizing at much lower levels. Menopause usually occurs in women in their late 40s or early 50s, but can also be induced suddenly by surgical removal of both ovaries (oophorectomy) or by some chemotherapy drugs that destroy ovarian function.</p>

                    <h4 className='text-2xl font-bold'>metastasis [meh-tas-tuh-sis]</h4>
                    <p>Cancer cells that spread from the primary site where they originated to other parts of the body through the lymph system or bloodstream.</p>

                    <h4 className='text-2xl font-bold'>metastasize [meh-TAS-tuh-size]</h4>
                    <p>The process by which cancer cells spread from the primary site to one or more sites elsewhere in the body, often via the lymph system or bloodstream.</p>

                    <h4 className='text-2xl font-bold'>metastatic [meh-tuh-STAT-ick]</h4>
                    <p>A term used to describe cancer that has spread from the primary site (where it started) to other structures or organs in the body.</p>

                    <h4 className='text-2xl font-bold'>microcalcifications</h4>
                    <p>See calcifications.</p>

                    <h4 className='text-2xl font-bold'>micrometastases [mike-row-muh-TAS-tuh-sis]</h4>
                    <p>An area of cancer spread that is less than 2 mm (less than 1/10 of an inch).</p>

                    <h4 className='text-2xl font-bold'>microsatellite instability [my-crow-SAT-uh-lite in-stuh-BILL-uh-tee]</h4>
                    <p>A type of gene mutation that occurs when mistakes in DNA are not repaired. Most often linked to colorectal cancer, but can be found in other cancers as well. This may assist in guiding treatment planning. Also called MSI.</p>

                    <h4 className='text-2xl font-bold'>microvascular surgery</h4>
                    <p>An operation that uses a microscope to see and connect very tiny blood vessels.</p>

                    <h4 className='text-2xl font-bold'>microwave ablation therapy</h4>
                    <p>A method of treating cancer in specific sites, such as the liver, by using heat to destroy the cells.</p>

                    <h4 className='text-2xl font-bold'>millimeter or mm</h4>
                    <p>A metric measure of length that is 1/1,000 of a meter (10 mm equals 1 centimeter, and 1,000 mm equals a meter). It takes about 25 mm (or 2.5 cm) to equal 1 inch.</p>
                    <h4 className='text-2xl font-bold'>millirem</h4>
                    <p>See radiation dose.</p>

                    <h4 className='text-2xl font-bold'>millisievert</h4>
                    <p>See radiation dose.</p>

                    <h4 className='text-2xl font-bold'>monoclonal antibodies [ma-nuh-KLO-nuhl]</h4>
                    <p>Lab-made antibodies designed to lock onto specific antigens (substances recognized by the immune system). Each monoclonal antibody is created to bind to only one antigen. They have various uses in diagnosing and treating cancer and other diseases.</p>

                    <h4 className='text-2xl font-bold'>morbidity [mor-bid-ih-tee]</h4>
                    <p>The number of people in a group who have a disease or condition.</p>

                    <h4 className='text-2xl font-bold'>morphology [mor-fol-uh-jee]</h4>
                    <p>In cancer, how cells appear under the microscope, including shape, structure, pattern, color, and other characteristics.</p>

                    <h4 className='text-2xl font-bold'>mortality [mor-tal-uh-tee]</h4>
                    <p>The rate of death from a disease within a specific group of people over a certain period of time.</p>

                    <h4 className='text-2xl font-bold'>mortality rate [mor-tal-uh-tee rate]</h4>
                    <p>Also known as death rate. This is the number of people who die from a disease, such as cancer, divided by the number of people at risk for the disease during a set time period. Mortality rates are usually reported as the number of people who will die from the disease per 100,000 people.</p>

                    <h4 className='text-2xl font-bold'>mRNA or messenger RNA</h4>
                    <p>See ribonucleic acid or RNA.</p>

                    <h4 className='text-2xl font-bold'>mucinous carcinoma [mew-sin-us car-sin-O-ma]</h4>
                    <p>A type of carcinoma formed by mucus-producing cancer cells.</p>

                    <h4 className='text-2xl font-bold'>mucositis [mew-ko-site-us]</h4>
                    <p>Inflammation of a mucous membrane, such as the lining of the mouth.</p>

                    <h4 className='text-2xl font-bold'>mucous membrane</h4>
                    <p>The moist inner lining layer of some organs and body cavities, including the mouth, throat, nose, vagina, and digestive system. Also called mucosa.</p>

                    <h4 className='text-2xl font-bold'>mucus [mew-kus]</h4>
                    <p>The thick, slippery fluid secreted by mucous glands.</p>

                    <h4 className='text-2xl font-bold'>multi-cancer early detection tests (MCED)</h4>
                    <p>Tests that look for pieces of DNA, RNA, or proteins in a person’s blood that might indicate cancer. MCED tests may help identify some types of cancer early, but these tests are still new, and further research is needed to determine their effectiveness in cancer screening.</p>

                    <h4 className='text-2xl font-bold'>multi-drug resistance (MDR)</h4>
                    <p>A condition where cancer cells change in ways that make anti-cancer drugs less effective.</p>

                    <h4 className='text-2xl font-bold'>multiple sclerosis [MUL-tih-pul skleh-ROH-sis]</h4>
                    <p>A disease that occurs when the immune system attacks nerve fibers in the brain and spinal cord, leading to symptoms such as weakness, numbness, tingling, and vision problems.</p>
                    <h4 className='text-2xl font-bold'>mutation [mew-tay-shun]</h4>
                    <p>Abnormal changes in a gene (pieces of DNA) that instruct cells on how and when to grow and divide. Most mutations do not cause cancer, but all types of cancer are thought to arise from gene mutations.</p>

                    <h4 className='text-2xl font-bold'>myeloablative treatment [my-uh-lo-uh-BLAY-tiv]</h4>
                    <p>Treatment designed to wipe out the bone marrow before a bone marrow or stem cell transplant. See also bone marrow, hematopoietic stem cell transplant, conditioning treatment.</p>

                    <h2 className='text-6xl font-extrabold' id='N'>N</h2>
                    <h4 className='text-2xl font-bold'>naturopathic doctor (ND)</h4>
                    <p>A doctor who is not a medical doctor (MD) but is trained to use therapies that focus on supporting a person’s self-healing abilities. Education and licensing of NDs varies by state.</p>

                    <h4 className='text-2xl font-bold'>necrosis [nuh-crow-sis]</h4>
                    <p>The death of one or more cells of the body. Necrotic refers to tissue that has died.</p>

                    <h4 className='text-2xl font-bold'>needle aspiration [need-ul asp-er-A-shun]</h4>
                    <p>To draw out a liquid, gas, or tissue fragments using suction. In this procedure, a needle is used to reach the cyst or tumor, and with suction, draw up (aspirate) samples to be examined under a microscope.</p>

                    <h4 className='text-2xl font-bold'>needle biopsy [need-ul by-op-see]</h4>
                    <p>Removal of fluid, cells, or tissue with a needle so that it can be looked at under a microscope. The main types of needle biopsy are fine needle aspiration (FNA) and core needle biopsy.</p>

                    <h4 className='text-2xl font-bold'>needle localization [need-ul lo-cull-ih-ZAY-shun]</h4>
                    <p>A procedure used to guide a surgical biopsy when the lump is hard to find or when there are areas that look suspicious on the x-ray but there is no distinct lump. A thin needle is placed into the area, and x-rays are taken to guide the needle to the suspicious area. The surgeon then uses the path of the needle as a guide to find the abnormal area to be removed.</p>

                    <h4 className='text-2xl font-bold'>negative</h4>
                    <p>A result from lab tests or pathology findings indicating that the change or problem being looked for was not found. For example, when the results of a biopsy are negative for cancer, it means that no cancer was found there.</p>

                    <h4 className='text-2xl font-bold'>negative margin</h4>
                    <p>See surgical margin.</p>
                    <h4 className='text-2xl font-bold'>neoadjuvant therapy [nee-o-AD-juh-vunt]</h4>
                    <p>Treatment given before the main treatment. For example, neoadjuvant hormone therapy is sometimes used to shrink a tumor before brachytherapy to make the brachytherapy more effective. Compare to adjuvant therapy.</p>

                    <h4 className='text-2xl font-bold'>neonatologist [nee-o-nay-TAHL-uh-jist]</h4>
                    <p>A doctor who specializes in the care of newborn babies (until about 6 weeks of age, but often longer for babies who were born prematurely).</p>

                    <h4 className='text-2xl font-bold'>neoplasia [nee-o-PLAY-zee-uh]</h4>
                    <p>Abnormal and uncontrolled cell growth, which can be benign (not cancer) or malignant (cancer).</p>

                    <h4 className='text-2xl font-bold'>neoplasm [NEE-o-plaz-um]</h4>
                    <p>An abnormal growth (tumor) that may be benign (not cancer) or malignant (cancer). Such a growth may be described as a neoplastic tumor.</p>

                    <h4 className='text-2xl font-bold'>nephrologist [neh-frahl-uh-jist]</h4>
                    <p>A doctor who specializes in kidney (renal) diseases.</p>

                    <h4 className='text-2xl font-bold'>neuropathy [nur-ah-puth-ee]</h4>
                    <p>See peripheral neuropathy.</p>

                    <h4 className='text-2xl font-bold'>neurosurgeon [nur-o-SUR-jun]</h4>
                    <p>A doctor who specializes in operations involving the nervous system, including the brain, spinal cord, or nerves.</p>

                    <h4 className='text-2xl font-bold'>neutropenia [new-trow-PEEN-ee-uh]</h4>
                    <p>A decrease in the number of neutrophils (white blood cells that defend against most types of infection) in the blood. The lower the number of neutrophils and the longer it stays low, the greater the risk of infection.</p>

                    <h4 className='text-2xl font-bold'>neutrophils [new-trow-fills]</h4>
                    <p>A type of white blood cell that fights bacterial infections.</p>

                    <h4 className='text-2xl font-bold'>nocturia [nok-toor-ee-uh]</h4>
                    <p>Excessive urination during the night.</p>

                    <h4 className='text-2xl font-bold'>nodal status</h4>
                    <p>Indicates whether the cancer has spread to lymph nodes (node-positive) or has not spread to lymph nodes (node-negative).</p>

                    <h4 className='text-2xl font-bold'>node</h4>
                    <p>See lymph node.</p>

                    <h4 className='text-2xl font-bold'>nodule [nod-yool]</h4>
                    <p>A small, solid lump that can be felt. This term is sometimes used to refer to a small tumor seen on x-ray.</p>

                    <h4 className='text-2xl font-bold'>non-steroidal anti-inflammatory drugs [non-steer-OYD-uhl an-tie-in-FLAM-uh-tor-ee or an-tee-in-FLAM-uh-tor-ee]</h4>
                    <p>Medications that reduce pain, inflammation, and fever. Before you take any NSAIDs, ask your doctor, pharmacist, or nurse if it’s safe for you to take it with your other medicines, and how long you can take it. Also called NSAIDs.</p>

                    <h4 className='text-2xl font-bold'>nuclear medicine</h4>
                    <p>A branch of medicine that uses radioactive substances (radioisotopes) to diagnose and treat illnesses.</p>

                    <h4 className='text-2xl font-bold'>nuclear medicine scan</h4>
                    <p>A method for finding tumors, seeing how much a cancer has spread, and checking to see if a treatment is working. Small amounts of a radioactive substance (called an isotope) are put into the bloodstream. The isotope collects in certain organs, and a special camera is used to take a picture of the organ and show areas of disease.</p>

                    <h4 className='text-2xl font-bold'>nucleus [new-klee-us]</h4>
                    <p>The center of a cell where DNA is found and where it reproduces. Studying the size and shape of a cell’s nucleus under the microscope can help pathologists tell cancer cells from non-cancer cells.</p>



                    <h4 className='text-2xl font-bold'>nulliparous [nuh-lip-uh-rus]</h4>
                    <p>Never having given birth to a child.</p>

                    <h4 className='text-2xl font-bold'>nurse anesthetist</h4>
                    <p>A nurse with an advanced degree and training in giving drugs or other agents (like gases) that cause a total loss of feeling or relieve pain, most often during surgery.</p>

                    <h4 className='text-2xl font-bold'>nurse practitioner [nurs prak-tih-shun-er]</h4>
                    <p>An advanced practice registered nurse (APN or APRN) with a master’s or doctoral degree and special certification who works closely with a doctor, helps to diagnose and manage care, and has advanced training and clinical experience in a certain area of medical and nursing practice.</p>

                    <h4 className='text-2xl font-bold'>nutritionist</h4>
                    <p>A title sometimes used interchangeably with dietitian, but educational requirements for nutritionists vary by state.</p>
                    <h2 className='text-6xl font-extrabold' id='O'>O</h2>
                    <h4 className='text-2xl font-bold'>obesity</h4>
                    <p>A certain level of overweight; in general, a body mass index (BMI) greater than 30. BMI is based on height and weight.</p>

                    <h4 className='text-2xl font-bold'>occult [uh-kult or o-kult]</h4>
                    <p>Hidden or concealed. In cancer, may refer to a cancer with an unknown primary or can refer to small amounts of blood in stool that cannot be identified without special tests.</p>

                    <h4 className='text-2xl font-bold'>occupational therapist [ok-you-PAY-shun-uhl]</h4>
                    <p>A licensed and specially trained therapist who works with people who have functional impairments or limitations to help them develop, recover, and improve the skills needed for daily living and working. They also work to prevent disability and maintain health. The practice of occupational therapy includes evaluation, treatment, and consultation.</p>

                    <h4 className='text-2xl font-bold'>off label</h4>
                    <p>The use of a drug in a way that is different from that described on the FDA-approved drug label, such as for a different disease, or given in a different way or in a different dose.</p>

                    <h4 className='text-2xl font-bold'>omentum [o-men-tum]</h4>
                    <p>A layer of fatty tissue that covers the abdomen (belly) like an apron over the stomach, intestines, and other organs.</p>

                    <h4 className='text-2xl font-bold'>oncogenes [on-kuh-jeenz]</h4>
                    <p>Mutated (changed) forms of normal genes that cause cells to grow and divide (proto-oncogenes). Oncogenes develop when proto-oncogenes mutate, resulting in cells growing out of control which can lead to cancer.</p>

                    <h4 className='text-2xl font-bold'>oncologist [on-kahl-uh-jist]</h4>
                    <p>A doctor who specializes in diagnosing and treating cancer.</p>

                    <h4 className='text-2xl font-bold'>oncology [on-kahl-o-jee]</h4>
                    <p>The branch of medicine concerned with the diagnosis and treatment of cancer.</p>

                    <h4 className='text-2xl font-bold'>oncology clinical nurse specialist [on-kahl-o-jee]</h4>
                    <p>A registered nurse with a master’s degree in oncology nursing who specializes in the care of cancer patients. Oncology nurse specialists may prepare and give treatments, monitor patients, prescribe and provide supportive care, and teach and counsel patients and their families. See also cancer care team.</p>

                    <h4 className='text-2xl font-bold'>oncology social worker [on-kahl-o-jee]</h4>
                    <p>A person with a master’s degree in social work who is an expert in coordinating and providing non-medical care to patients. The oncology social worker counsels and assists people with cancer and their families, especially in dealing with the non-medical issues that can result from cancer, such as financial problems, housing (when treatments are given at a facility away from home), and child care. See also cancer care team.</p>

                    <h4 className='text-2xl font-bold'>oncoplastic surgery</h4>
                    <p>Newer techniques that combine cancer surgery and plastic surgery techniques.</p>

                    <h4 className='text-2xl font-bold'>ophthalmologist [off-thuhl-MAHL-uh-jist]</h4>
                    <p>A doctor who specializes in eye diseases.</p>

                    <h4 className='text-2xl font-bold'>oral</h4>
                    <p>Refers to the mouth. For example, medicines taken orally are taken by mouth. Oral cancer is cancer of the mouth.</p>

                    <h4 className='text-2xl font-bold'>oral and maxillofacial surgeon [max-ill-o-FAY-shul]</h4>
                    <p>A surgeon who specializes in surgery of the mouth, jaw, and face.</p>

                    <h4 className='text-2xl font-bold'>oral contraceptives</h4>
                    <p>Birth control pills, which contain estrogen and/or a progesterone-like substance, known as progestin.</p>

                    <h4 className='text-2xl font-bold'>orthopedic surgeon [or-thuh-pee-dik]</h4>
                    <p>A surgeon who specializes in diseases and injuries of the muscles, joints, and bones (the musculoskeletal system).</p>

                    <h4 className='text-2xl font-bold'>osteoporosis [os-tee-o-puh-RO-sis]</h4>
                    <p>Thinning of bones, causing weaker bones and a higher risk for fractures (breaks in the bones). Cancer treatments can also cause osteoporosis.</p>

                    <h4 className='text-2xl font-bold'>ostomy [os-tuh-me]</h4>
                    <p>A surgical opening made from inside the body to the outside, i.e., colostomy, ileostomy, tracheostomy, or urostomy. Also called a stoma.</p>

                    <h4 className='text-2xl font-bold'>ostomy nurse</h4>
                    <p>See enterostomal therapist.</p>

                    <h4 className='text-2xl font-bold'>otolaryngologist [o-toe-lair-in-GOL-uh-jist]</h4>
                    <p>A doctor who specializes in diseases and injuries of the ear, nose, and throat. Also called an ENT (which stands for ears, nose, and throat) or a head and neck doctor.</p>

                    <h4 className='text-2xl font-bold'>outpatient</h4>
                    <p>A person being treated without staying in the hospital. Compare to inpatient. See also ambulatory.</p>

                    <h4 className='text-2xl font-bold'>ova</h4>
                    <p>Eggs (reproductive cells) released during a woman’s reproductive (fertile) years. The egg must be fertilized by a sperm to grow into a baby. The singular of ova is ovum.</p>

                    <h4 className='text-2xl font-bold'>ovarian ablation</h4>
                    <p>Treatment to lower or stop the production of estrogen by the ovaries, through removal of the ovaries, radiation therapy, hormonal therapy, or other medicines.</p>
                    <h2 className='text-6xl font-extrabold' id='P'>p</h2>
                    <h4 className='text-2xl font-bold'>p53</h4>
                    <p>An important tumor suppressor gene that normally causes damaged cells to die. When this gene is not working properly, the risk of developing many types of cancer is increased.</p>

                    <h4 className='text-2xl font-bold'>pain specialists</h4>
                    <p>Doctors, nurses, and/or pharmacists who are experts in pain control. In many places there’s a team of health professionals who are available to address pain issues.</p>

                    <h4 className='text-2xl font-bold'>palliative care or treatment [pal-ee-uh-tiv]</h4>
                    <p>Health care focused on improving quality of life by managing the symptoms of a serious illness and side effects of treatment. Can be given at any time during an illness when a person has symptoms that need to be controlled. Palliative care helps a patient feel more comfortable but does not cure the disease.</p>

                    <h4 className='text-2xl font-bold'>palliative care specialists or team [pal-ee-uh-tiv]</h4>
                    <p>Doctors, nurses, pharmacists, and other health care professionals who work together to manage symptoms, such as pain, nausea, or fatigue. A palliative care team approach can be used for any patient (of any age) who has a serious illness. Palliative care teams can and often work alongside cancer care teams to help manage side effects during and after cancer treatment. These teams are often used to help patients during any stage of cancer, from diagnosis, throughout treatment, and to the end of life.</p>

                    <h4 className='text-2xl font-bold'>palpation [pal-pay-shun]</h4>
                    <p>Using the hands to examine. A palpable mass is one that can be felt.</p>

                    <h4 className='text-2xl font-bold'>pancolitis [pan-ko-LITE-us]</h4>
                    <p>Ulcerative colitis throughout the entire colon.</p>

                    <h4 className='text-2xl font-bold'>Pap test or Pap smear</h4>
                    <p>A test in which cells are collected from the cervix and looked at using a microscope to see if cancer or pre-cancer cells are present. Testing is often done for human papillomavirus (HPV) at the same time.</p>
                    <h4 className='text-2xl font-bold'>papillary tumor [PAP-uh-lair-ee]</h4>
                    <p>Cancer cells that are arranged in tiny, finger-like projections when looked at with a microscope. This is a common feature of some tumors of the ovaries, uterus, thyroid gland, and other organs.</p>

                    <h4 className='text-2xl font-bold'>papilloma [PAP-uh-lo-muh]</h4>
                    <p>A benign (not cancer) growth.</p>

                    <h4 className='text-2xl font-bold'>pathologic stage</h4>
                    <p>See stage.</p>

                    <h4 className='text-2xl font-bold'>pathologist [path-all-uh-jist]</h4>
                    <p>A doctor who specializes in diagnosing and classifying diseases by lab tests and by looking at tissues and cells with a microscope. The pathologist determines whether a tumor is cancer, and, if it is cancer, the exact cell type (where it started) and grade (how fast it likely will grow).</p>

                    <h4 className='text-2xl font-bold'>patient or nurse navigator</h4>
                    <p>A person who guides patients and their families through complex medical systems and helps them work with the rest of the cancer care team to overcome barriers to care that may come up so they can successfully complete their treatment. Navigators can be lay people with special training and experience or health care professionals, like nurses or social workers.</p>

                    <h4 className='text-2xl font-bold'>pediatric oncologist [pee-dee-at-trick on-kahl-uh-jist]</h4>
                    <p>A doctor who specializes in caring for children and teens with cancer (sometimes up to age 21).</p>

                    <h4 className='text-2xl font-bold'>pediatrician [pee-dee-uh-TRISH-un]</h4>
                    <p>A doctor who specializes in caring for children and teens, including preventing illness, providing primary health care, and treating diseases.</p>
                    <h4 className='text-2xl font-bold'>pelvic examination [pell-vick ex-am-in-A-shun]</h4>
                    <p>An exam of a woman’s uterus and other pelvic organs. It is used to help find cancers of the reproductive organs. The doctor will look at external structures and palpate (feel) the internal organs such as the ovaries and uterus.</p>

                    <h4 className='text-2xl font-bold'>percent-free PSA (fPSA)</h4>
                    <p>The portion of prostate-specific antigen (PSA) in the blood that is not attached to blood proteins. The percentage of free PSA (fPSA) is lower in men who have prostate cancer than in men who do not. A low fPSA may suggest the need for a biopsy.</p>

                    <h4 className='text-2xl font-bold'>perforation [per-fuh-RAY-shun]</h4>
                    <p>A hole in the wall of a hollow organ, like the bladder or lung.</p>

                    <h4 className='text-2xl font-bold'>perineum [pair-uh-NEE-um]</h4>
                    <p>The area between the anus and the scrotum (in males) or the anus and the vagina (in females). This is called the perineal area.</p>

                    <h4 className='text-2xl font-bold'>perineural invasion [pair-uh-NOO-rul]</h4>
                    <p>Growth of cancer cells into areas around nerves.</p>

                    <h4 className='text-2xl font-bold'>peripheral neuropathy [peh-RIH-feh-rul noor-AH-puh-thee]</h4>
                    <p>Nerve damage which causes numbness, tingling, burning, pain, weakness, loss of ability to feel hot and cold, and cramps in different parts of the body. It usually starts in the hands or feet. It may be caused by injury, infection, disease (cancer, diabetes, kidney failure, or poor nutrition, for example), or by medicines such as chemotherapy. Also called neuropathy.</p>

                    <h4 className='text-2xl font-bold'>peritoneum [pear-i-tuh-NEE-um]</h4>
                    <p>The membrane that lines the abdomen (belly) and covers most of its organs. Peritoneal cavity refers to the area enclosed by the peritoneum.</p>

                    <h4 className='text-2xl font-bold'>permanent brachytherapy</h4>
                    <p>See low-dose rate brachytherapy.</p>

                    <h4 className='text-2xl font-bold'>permanent section</h4>
                    <p>Biopsy tissue that has been prepared to be looked at under a microscope. The tissue is soaked in formalin, processed in various chemicals, enclosed in wax, sliced very thin, attached to a microscope slide, and stained. This process takes several days. It allows a clear view of the cells in the sample so that the pathologist can see whether or not cancer is present.</p>
                    <h4 className='text-2xl font-bold'>photodynamic therapy [foe-toe-die-NAM-ick]</h4>
                    <p>A treatment that uses special drugs, sometimes called photosensitizing agents, along with light to kill cancer cells. Also called PDT.</p>

                    <h4 className='text-2xl font-bold'>photon beam radiation therapy [foe-ton]</h4>
                    <p>Standard type of radiation used for external beam radiation treatments.</p>

                    <h4 className='text-2xl font-bold'>physical therapist</h4>
                    <p>A licensed health professional, who has at least a bachelor’s degree in physical therapy, who helps examine, test, and treat physical problems, and uses exercises, heat, cold, and other methods to restore or maintain the body’s strength, mobility, and function.</p>

                    <h4 className='text-2xl font-bold'>physician assistant (PA)</h4>
                    <p>A certified and licensed medical professional with a master’s or doctoral level degree. Physician assistants practice medicine on teams with doctors and other health care professionals, providing a wide range of services. They may specialize in certain diseases or fields of medicine depending on their training and experience.</p>

                    <h4 className='text-2xl font-bold'>physiologic [fiz-ee-o-LA-jick]</h4>
                    <p>Pertaining to the processes of the body or its systems. May also be used to describe a particular body function or organ as normal.</p>

                    <h4 className='text-2xl font-bold'>phytonutrients [fie-toe-KEM-ih-kul]</h4>
                    <p>Plant compounds like carotenoids, lycopene, resveratrol, and phytosterols that are thought to have health-protecting qualities. Also called phytochemicals.</p>
                    <h4 className='text-2xl font-bold'>placebo [pluh-see-bo]</h4>
                    <p>A fake pill or treatment that may be used in studies (clinical trials) to compare the effects of a given treatment with no treatment. Placeboes are not used in studies where a proven treatment is available; instead, the new treatment is tested against the proven one.</p>

                    <h4 className='text-2xl font-bold'>plastic or reconstructive surgeon [re-kon-STRUCK-tiv]</h4>
                    <p>A surgeon who specializes in changing the way a body part looks or in rebuilding or replacing removed or injured body parts. In reconstruction (rebuilding body parts), the surgeon may use tissue from the patient or some special material with the right consistency to hold a shape or form over time. Also called a plastic and reconstructive surgeon.</p>

                    <h4 className='text-2xl font-bold'>platelet [plate-let]</h4>
                    <p>A type of blood cell that helps stop bleeding by plugging up holes in blood vessels after an injury. Chemotherapy and radiation therapy can cause a drop in the platelet count, a condition called thrombocytopenia that carries a risk of excessive bleeding.</p>
                    <h4 className='text-2xl font-bold'>pleurodesis [plu-rah-dis-sis or plur-o-DEE-sis]</h4>
                    <p>A procedure to remove fluid that has built up between the lungs and the pleura and keep it from coming back by putting a substance between the layers to fuse them together.</p>

                    <h4 className='text-2xl font-bold'>ploidy [ploy-dee]</h4>
                    <p>Number of sets of chromosomes contained in a cell. Cancers with 23 pairs of chromosomes (the same as normal cells) are called diploid (dip-loyd) and those with either more or less than that amount are aneuploid (an-you-ployd).</p>

                    <h4 className='text-2xl font-bold'>polycythemia vera [pah-lee-sy-THEME-e-uh vair-uh]</h4>
                    <p>A chronic blood disorder in which the bone marrow makes too many red blood cells, white blood cells, and platelets. This leads to a higher concentration of hemoglobin with larger amounts of red blood cells, which is the main feature of this disease. But with time, the high platelet count may become more of a problem and patients can suffer from problems with blood clots because of this and their “thickened” blood. Although it is not a true cancer, it often turns into acute myelogenous leukemia (AML) after many years.</p>

                    <h4 className='text-2xl font-bold'>polyp [pah-lip]</h4>
                    <p>An abnormal growth on the inner lining (mucous membrane) of organs such as the colon, rectum, the uterus, and the nose. Polyps may be non-cancerous (benign) or cancerous (malignant).</p>

                    <h4 className='text-2xl font-bold'>polypectomy [pah-lup-ECK-tuh-me]</h4>
                    <p>Surgery or procedure to remove a polyp.</p>

                    <h4 className='text-2xl font-bold'>population [pop-u-la-tion]</h4>
                    <p>A group of people who typically share one or more qualities, such as age, sex, or disease.</p>

                    <h4 className='text-2xl font-bold'>portography [por-tahg-ruh-fee]</h4>
                    <p>A procedure that uses computed tomography (CT) and a dye injected into the portal vein of the liver. It takes cross-sectional x-rays of the veins to find cancer that may have spread from the colon or rectum.</p>
                    <h4 className='text-2xl font-bold'>positive margin</h4>
                    <p>See surgical margin.</p>

                    <h4 className='text-2xl font-bold'>posterior [post-eer-ee-uhr]</h4>
                    <p>The back or near the back of an organ or the body.</p>

                    <h4 className='text-2xl font-bold'>poultice [pole-tiss]</h4>
                    <p>Soft paste or thick liquid that is usually heated, applied to a cloth, and placed over an inflamed or painful area. Herbs, leaves, or foods are commonly used for this in folk medicine and home remedies.</p>

                    <h4 className='text-2xl font-bold'>pre-cancerous</h4>
                    <p>Changes in cells that may, but do not always, become cancer.</p>

                    <h4 className='text-2xl font-bold'>pre-malignant</h4>
                    <p>See pre-cancerous.</p>

                    <h4 className='text-2xl font-bold'>predisposition [pre-dis-puh-ZISH-un]</h4>
                    <p>A higher likelihood of developing a certain disease. For example, people with certain mutations (changes) in their genes or a family history are more likely to get certain types of cancer.</p>

                    <h4 className='text-2xl font-bold'>prevalence [preh-vul-uns]</h4>
                    <p>The number of living people who have ever been diagnosed with cancer, including people diagnosed with cancer in the past and those who were recently diagnosed.</p>

                    <h4 className='text-2xl font-bold'>prevention</h4>
                    <p>The reduction of cancer risk by eliminating or reducing contact with things known to cause cancer, by changing conditions that contribute to cancer (such as obesity or lack of exercise), or by using medicines that interfere with cancer development. Lifestyle changes, such as quitting smoking, for example, reduce the number of people who will get lung and other cancers.</p>

                    <h4 className='text-2xl font-bold'>previvor</h4>
                    <p>A person who has a higher risk of getting cancer but hasn’t yet been diagnosed with cancer. Previvors are people who have an inherited gene (genetic) mutation, have a family history of cancer, or have other known risk factors.</p>

                    <h4 className='text-2xl font-bold'>primary care physician or provider</h4>
                    <p>The doctor a person would normally see first when a medical symptom or problem comes up. A primary care doctor could be a general practitioner, a family practice doctor, a gynecologist, a pediatrician, or an internal medicine doctor (an internist).</p>

                    <h4 className='text-2xl font-bold'>primary HPV test</h4>
                    <p>See HPV test or human papillomavirus test.</p>

                    <h4 className='text-2xl font-bold'>primary site</h4>
                    <p>The place where a cancer begins. Cancer is usually named after the organ in which it first starts. For example, cancer that starts in the breast is always breast cancer, even if it spreads (metastasizes) to other organs such as bones or lungs.</p>

                    <h4 className='text-2xl font-bold'>primary treatment or primary therapy</h4>
                    <p>The first treatment given for a cancer.</p>

                    <h4 className='text-2xl font-bold'>progesterone [pro-jes-ter-own]</h4>
                    <p>A female sex hormone released by the ovaries during every menstrual cycle to prepare the uterus (womb) for pregnancy and the breasts for milk production (lactation).</p>

                    <h4 className='text-2xl font-bold'>progesterone receptor assay</h4>
                    <p>A test done on breast cancer cells to see whether the cancer is affected by progesterone and might be sensitive to treatment with hormone therapy.</p>

                    <h4 className='text-2xl font-bold'>prognosis [prog-no-sis]</h4>
                    <p>The likely course of a disease, including the chance for recovery or of the cancer coming back.</p>

                    <h4 className='text-2xl font-bold'>progression</h4>
                    <p>Spreading or growing disease, with or without treatment.</p>

                    <h4 className='text-2xl font-bold'>prolactin</h4>
                    <p>A hormone released from the pituitary gland that prompts the breasts to produce milk.</p>

                    <h4 className='text-2xl font-bold'>proliferative [pro-lih-fer-uh-tiv]</h4>
                    <p>Rapid growth or increasing numbers of new cells.</p>

                    <h4 className='text-2xl font-bold'>prospective cohort study</h4>
                    <p>A long, ongoing research study that captures and compares years of data from a cohort (a group of people with similar traits) to learn how specific characteristics or risk factors affect the rate of developing diseases such as cancer. Prospective means data is collected before anyone has developed cancer.</p>

                    <h4 className='text-2xl font-bold'>prosthesis [pros-thee-sis]</h4>
                    <p>A man-made substitute for a missing body part. Also called a prosthetic.</p>

                    <h4 className='text-2xl font-bold'>protein [pro-teen]</h4>
                    <p>A large molecule made up of a chain of smaller units called amino acids. Proteins serve many vital functions inside and outside of the body’s cells.</p>

                    <h4 className='text-2xl font-bold'>protocol [pro-tuh-call]</h4>
                    <p>A formal outline or plan, such as a description of what treatments a patient will get and exactly when each should be given.</p>

                    <h4 className='text-2xl font-bold'>proton beam therapy</h4>
                    <p>Radiation therapy that uses protons (positively charged particles) to kill tumor cells. A benefit of this type of treatment is that it lessens radiation damage to healthy tissue near a tumor. It is used for cancers of the brain, eye, lung, head and neck, spine, and prostate.</p>

                    <h4 className='text-2xl font-bold'>proximal</h4>
                    <p>A descriptive term for a body part that is nearer to the center of the body than another part.</p>
                    <h4 className='text-2xl font-bold'>PSA density (PSAD)</h4>
                    <p>Determined by dividing the prostate-specific antigen (PSA) level by the prostate size. A higher PSAD indicates a greater likelihood of cancer.</p>

                    <h4 className='text-2xl font-bold'>PSA doubling time (PSADT)</h4>
                    <p>The length of time it takes for the prostate-specific antigen (PSA) level in the blood to double. This is sometimes useful in determining if prostate cancer is present or has come back (recurred).</p>

                    <h4 className='text-2xl font-bold'>PSA or prostate-specific antigen</h4>
                    <p>A protein made by the prostate gland that is found mostly in semen and a small amount in the blood. Blood tests for PSA levels may be used for prostate cancer screening, watching for changes in prostate cancer as part of observation or treatment, and checking to see if prostate cancer has come back after treatment is completed.</p>

                    <h4 className='text-2xl font-bold'>PSA velocity (PSAV)</h4>
                    <p>A measurement of how fast the prostate-specific antigen (PSA) level rises over time.</p>

                    <h4 className='text-2xl font-bold'>psychiatrist [sy-ky-uh-trist]</h4>
                    <p>A medical doctor specializing in the causes, treatment, and prevention of mental, emotional, and behavioral disorders. Psychiatrists provide counseling and can also prescribe medicines or other treatments.</p>

                    <h4 className='text-2xl font-bold'>psychologist [sy-koll-uh-jist]</h4>
                    <p>A health professional who has a graduate degree in psychology and training in clinical psychology. This specialist assesses a person’s mental and emotional status and provides testing and counseling services to those who may have an emotional or mental health problem.</p>

                    <h4 className='text-2xl font-bold'>psychosocial [sy-ko-SO-shul]</h4>
                    <p>The psychological and/or social aspects of health, disease, treatment, and/or rehabilitation.</p>

                    <h4 className='text-2xl font-bold'>PTEN</h4>
                    <p>A gene that normally helps control cell growth. Inherited changes in this gene cause Cowden syndrome, a rare disorder in which people are at higher risk for both non-cancer and cancer breast tumors. It is also linked to growths in the digestive tract, thyroid, uterus, and ovaries.</p>

                    <h4 className='text-2xl font-bold'>public health intervention</h4>
                    <p>Measures or steps designed to improve the health of a population. For example, interventions may use tactics at the individual, community, and system level to improve the number of people who get screened for cancer and get HPV vaccinations.</p>

                    <h4 className='text-2xl font-bold'>pulmonologist [pull-muh-NAHL-uh-jist]</h4>
                    <p>A doctor who has specialized experience and knowledge in the diagnosing and treating lung (pulmonary) conditions and diseases.</p>


                    <h2 className='text-6xl font-extrabold' id='Q'>Q</h2>
                    <h4 className='text-2xl font-bold'>quality of life</h4>
                    <p>Overall enjoyment of life, which includes a person’s sense of well-being and ability to do the things that are important to them.</p>

                    <h2 className='text-6xl font-extrabold' id='R'>R</h2>
                    <h4 className='text-2xl font-bold'>radiation</h4>
                    <p>Energy given off as electromagnetic waves or particles. It can come from natural sources, such as radon gas (from the ground) or from outer space, or be produced for a function, such as x-rays and microwaves. In medicine, radiation may be used to help identify problems (such as x-rays, CT scans) or to treat a disease, such as radiation therapy for cancer.</p>

                    <h4 className='text-2xl font-bold'>radiation dose</h4>
                    <p>The amount of radiation an object (such as human tissue) receives. Several units are used to describe radiation doses:
                        <ul>
                            <li>rad (acronym for radiation absorbed dose) — a basic unit of the amount of radiation absorbed by body tissue. The rad largely has been replaced by the gray measurement scale.</li>
                            <li>gray (abbreviated Gy) — the newer, international unit of measurement of radiation absorbed. One gray equals 100 rads.</li>
                            <li>rem (acronym for roentgen equivalent man) — — a conventional unit of radiation exposure used to express the chance that a person will have health effects based on both the dose and the type of radiation. The term has been replaced by the sievert.
                            </li>
                            <li>sievert (see-vert) — abbreviated Sv. The newer, standard international unit of radiation exposure used to express the chance that a person will have health effects based on both the dose and the type of radiation. One sievert equals 100 rem.
                            </li>
                        </ul>
                    </p>
                    <h4 className='text-2xl font-bold'>radiation oncologist [ray-dee-A-shun on-kahl-uh-jist]</h4>
                    <p>A doctor who specializes in using radiation to treat cancer. See also cancer care team.</p>

                    <h4 className='text-2xl font-bold'>radiation proctitis [ray-dee-A-shun prok-tie-tis]</h4>
                    <p>Anal and rectal irritation caused by radiation therapy to the pelvic area. Problems can include pain, frequent bowel movements, bowel urgency, bleeding, chronic burning, or rectal leakage.</p>

                    <h4 className='text-2xl font-bold'>radiation therapist [ray-dee-A-shun ther-uh-pist]</h4>
                    <p>A person with special training to use the equipment that delivers radiation therapy. This expert often helps the patient get into the right position for treatment and then actually gives the treatment.</p>

                    <h4 className='text-2xl font-bold'>radiation therapy [ray-dee-A-shun ther-uh-pee]</h4>
                    <p>Treatment with high-energy particles or rays to destroy or damage cancer cells. The radiation may be given by a machine outside the body (external radiation) or by radioactive materials placed in the tumor (brachytherapy or internal radiation). Radiation therapy can be used to shrink the cancer before surgery, to kill any remaining cancer cells after surgery, or as the main treatment. It can also be used as palliative (non-curative) treatment for advanced cancer.</p>

                    <h4 className='text-2xl font-bold'>radiation therapy nurse [ray-dee-A-shun ther-uh-pee nurse]</h4>
                    <p>A registered nurse who is an expert in the radiation therapy care of patients. This nurse may teach the patient about treatment before it starts and help manage any treatment side effects.</p>

                    <h4 className='text-2xl font-bold'>radiocontrast dye [ray-dee-o-CON-trast]</h4>
                    <p>Any material used in imaging studies such as x-rays, MRIs, and CT scans to help outline the body parts being examined. These may be injected into a vein or you could drink it. Some people can have reactions to radiocontrast dye, so before the procedure, let your doctor and the technologist know if you have any allergies or have had a reaction to radiocontrast dye. Also called dye, contrast dye, or radiocontrast medium.</p>
                    <h4 className='text-2xl font-bold'>radiofrequency ablation [ray-dee-oh-free-kwin-see uh-blay-shun]</h4>
                    <p>Treatment that uses high-energy radio waves to heat and destroy abnormal tissues. Also called RFA. A thin, needle-like probe is guided into the tumor by ultrasound or computed tomography (CT) scan. The probe releases a high-frequency current that heats and kills cancer cells. RFA is sometimes used to treat tumors in the liver and is being studied for use in other areas of the body.</p>

                    <h4 className='text-2xl font-bold'>radioisotope [ray-dee-oh-EYE-suh-tope]</h4>
                    <p>An unstable compound that releases radiation energy as it breaks down. Radioisotopes are used in imaging tests to find cancer. They may also be used to treat cancer.</p>

                    <h4 className='text-2xl font-bold'>radiologic technologist [ray-dee-uh-LAH-jick teck-nah-luh-jist]</h4>
                    <p>A health professional who positions patients for x-rays and other imaging tests, takes the images, and then develops and checks the images for quality. The films taken by the technologist are then sent to a radiologist to be read.</p>

                    <h4 className='text-2xl font-bold'>radiologist [ray-dee-AH-luh-jist]</h4>
                    <p>A doctor with special training in diagnosing diseases by interpreting (reading) x-rays and other types of imaging studies that make pictures of the inside of the body.</p>

                    <h4 className='text-2xl font-bold'>radionuclide bone scan [ray-dee-oh-NOO-klide]</h4>
                    <p>See bone scan.</p>

                    <h4 className='text-2xl font-bold'>radiopharmaceuticals [ray-dee-oh-farm-uh-SUIT-ih-kulz]</h4>
                    <p>Drugs that include radioactive elements or radioisotopes. They are given into a vein (intravenously or IV) to treat certain cancers, such as thyroid, bone, and prostate cancer, as well as bone pain related to cancer that has spread to the bones.</p>

                    <h4 className='text-2xl font-bold'>radiotherapy</h4>
                    <p>See radiation therapy.</p>
                    <h4 className='text-2xl font-bold'>randomized or randomization</h4>
                    <p>A clinical trial process that uses chance to assign participants to different groups to compare treatments. Randomization means that each person has an equal chance of being in the treatment and control (comparison) groups. This helps reduce bias in the results that might happen if, for example, the healthiest people all were assigned to a particular treatment group.</p>

                    <h4 className='text-2xl font-bold'>re-excision</h4>
                    <p>A second surgery to remove remaining cancer. This may be done if cancer cells were found at the edge of surgically removed tissue.</p>

                    <h4 className='text-2xl font-bold'>recurrence</h4>
                    <p>When a cancer that was not detectable after treatment comes back. It may come back where it first started or in a different part of the body.</p>

                    <h4 className='text-2xl font-bold'>red blood cells (RBCs)</h4>
                    <p>Blood cells that contain hemoglobin, the substance that carries oxygen to all of the cells of the body. These cells are made in the bone marrow. Low red blood cell counts, a condition called anemia, are a common side effect of many cancer treatments.</p>

                    <h4 className='text-2xl font-bold'>refractory [re-frack-tuh-re]</h4>
                    <p>No longer responsive to a certain treatment.</p>

                    <h4 className='text-2xl font-bold'>regimen [reh-juh-men]</h4>
                    <p>A treatment plan that outlines the specific doses, schedule, and length of treatment which may include different medicines as well as other methods such as radiation treatments.</p>

                    <h4 className='text-2xl font-bold'>regional involvement or regional spread</h4>
                    <p>The spread of cancer from its primary (original) site to nearby lymph nodes, organs, or tissues, but not to distant sites.</p>
                    <h4 className='text-2xl font-bold'>relative survival rate [REH-luh-tiv ser-VY-vul risk]</h4>
                    <p>The percentage of people with a disease (such as a type of cancer) who are expected to be alive after a certain period of time when compared to a similar group of people who do not have the disease. Relative survival rates help account for people who die from other causes. Relative survival rates are usually given as a percentage. For instance, if the 5-year relative survival rate of a certain type of cancer is 50%, it means that people with this cancer are half (50%) as likely to still be alive 5 years after their diagnosis, as compared to people without this cancer.</p>

                    <h4 className='text-2xl font-bold'>rem</h4>
                    <p>See radiation dose.</p>

                    <h4 className='text-2xl font-bold'>remission [re-MISH-un]</h4>
                    <p>A period of time when the cancer is responding to treatment or is under control. In a complete remission, all the signs and symptoms of cancer go away, and cancer cells can’t be found by any tests. In a partial remission, the cancer shrinks but doesn’t completely go away. A remission might not mean the cancer is cured.</p>

                    <h4 className='text-2xl font-bold'>replicate [REP-lih-kate]</h4>
                    <p>Reproduce exact copies.</p>

                    <h4 className='text-2xl font-bold'>rescue treatment</h4>
                    <p>In cancer care, procedures or treatments such as bone marrow transplant that “rescue” a patient’s immune system and blood-forming organs by stopping the actions of high-dose chemotherapy.</p>

                    <h4 className='text-2xl font-bold'>research continuum</h4>
                    <p>The full scope of research—often referred to as bench to bedside. The research can be performed in a research lab, in clinical trials, with health care providers, in health care systems, and within communities.</p>

                    <h4 className='text-2xl font-bold'>resection [re-sek-shun]</h4>
                    <p>Surgery to remove part or all of an organ, body tissue, or other structure.</p>

                    <h4 className='text-2xl font-bold'>resectoscope [re-SEK-tuh-scope]</h4>
                    <p>Thin, rigid scope with a wire loop at the end that’s used to remove abnormal tissue or tumors in the bladder or prostate. Used for transurethral resection of the prostate (TURP) and transurethral resection of bladder tumor.</p>

                    <h4 className='text-2xl font-bold'>respiratory therapist [RES-per-uh-tor-ee ther-uh-pist]</h4>
                    <p>A professional who works with people who have breathing problems. This can include breathing treatments and managing patients on ventilators (breathing machines). A CRTT or certified respiratory therapy technician may also examine the patient, collect information about lung function, and set up and maintain equipment, such as ventilators.</p>

                    <h4 className='text-2xl font-bold'>respite care [res-pit]</h4>
                    <p>Giving a regular caregiver a break (respite) by providing temporary care in a nursing home, or a hospital for a sick person who is being cared for at home.</p>

                    <h4 className='text-2xl font-bold'>response</h4>
                    <p>Improvement after treatment.</p>

                    <h4 className='text-2xl font-bold'>retrograde ejaculation [ret-tro-grade e-jack-you-LAY-shun]</h4>
                    <p>A condition in which orgasm causes semen to enter the bladder, rather than leaving the body through the penis. Most often caused by damage to valves in the bladder or nearby nerves after some operations for prostate, testicular, bladder, and colorectal cancers. Also known as a dry orgasm.</p>

                    <h4 className='text-2xl font-bold'>risk factor</h4>
                    <p>Anything that increases the chance of getting a disease such as cancer. Different cancers have different risk factors. For example, unprotected exposure to strong sunlight is a risk factor for skin cancer; smoking is a risk factor for lung, mouth, throat, and other cancers. Some risk factors, such as smoking and being inactive, can be controlled. Others, like a person’s age and gene mutations they were born with, can’t be changed.</p>


                    <h4 className='text-2xl font-bold'>RNA or ribonucleic acid [ri-bo-noo-KLEE-ick a-sid]</h4>
                    <p>A nucleic acid found in all cells that has genetic information copied from the DNA. RNA’s primary role is to convert the information that is stored in DNA into proteins. RNA also acts as a messenger (mRNA) between the DNA and ribosomes (cells responsible for making proteins).</p>

                    <h4 className='text-2xl font-bold'>RT-PCR or reverse transcription polymerase chain reaction [re-verse tran-scrip-shun puh-lim-er-ace]</h4>
                    <p>A very sensitive test (also called RT-PCR) for finding cancer-related genetic changes (mutations), such as those that happen in some cancers. It can detect very small numbers of cancer cells in blood or tissue samples that would be missed by other tests. RT-PCR looks closely at ribonucleic acid (RNA) for changes that might help determine best treatment choices and response to treatment.</p>
                    <h2 className='text-6xl font-extrabold' id='S'>S</h2>
                    <h4 className='text-2xl font-bold'>s-phase fraction</h4>
                    <p>The percentage of cells in a sample that are copying their DNA as it gets ready to divide into 2 new cells. If the S-phase fraction is high, it means that the cancer cells are dividing more rapidly.</p>

                    <h4 className='text-2xl font-bold'>saline [say-lean]</h4>
                    <p>Salt and water solution.</p>

                    <h4 className='text-2xl font-bold'>sarcoma [sar-ko–muh]</h4>
                    <p>A cancer that starts in connective tissue, such as cartilage, fat, muscle, or bone.</p>

                    <h4 className='text-2xl font-bold'>scan</h4>
                    <p>A test that makes detailed pictures of parts of internal body organs. Includes computed tomography (CT) scans, magnetic resonance imaging (MRI) scans, and nuclear medicine scans (such as bone scans and liver scans).</p>

                    <h4 className='text-2xl font-bold'>scanxiety</h4>
                    <p>Worry or concern (anxiety) that develops before, during, or after having imaging scans is called scanxiety. Scanxiety can cause different levels of distress. Some people feel very uneasy (have trouble breathing, or feel like their heart is racing), others are only a little concerned.</p>

                    <h4 className='text-2xl font-bold'>scintillation camera [sin-till-LAY-shun]</h4>
                    <p>A device used in nuclear medicine scans to detect radioactivity and make pictures that help diagnose cancer and other diseases.</p>

                    <h4 className='text-2xl font-bold'>screening</h4>
                    <p>Tests, examinations, or procedures used to find cancer in people who have no symptoms. Screening increases the chances of finding certain cancers early, when they are small, have not spread, and might be easier to treat. This is different from diagnostic testing which focuses on trying to find out the cause of a person’s symptoms.</p>
                    <h4 className='text-2xl font-bold'>second cancer</h4>
                    <p>A new, unrelated cancer that develops in people who have already had a different cancer. For example, if someone who has had breast cancer develops colorectal cancer. This is different from cancer coming back after treatment (recurrence).</p>

                    <h4 className='text-2xl font-bold'>secondary tumor</h4>
                    <p>A tumor that forms when the cancer spreads (metastasizes) from the place where it started (the primary site).</p>

                    <h4 className='text-2xl font-bold'>sedation [suh-day-shun]</h4>
                    <p>To make sleepy, calm, or relaxed. Medicines to cause sedation are often used along with medicines to numb an area for a procedure or certain types of surgery.</p>

                    <h4 className='text-2xl font-bold'>sedentary</h4>
                    <p>Not doing much physical activity while awake. Spending a lot of time sitting, reclining, or lying down. People described as sedentary tend to spend a lot of time being physically inactive.</p>

                    <h4 className='text-2xl font-bold'>segmental resection [seg-men-tuhl re-sek-shun]</h4>
                    <p>Surgery to remove part of an organ or to remove a tumor and normal tissue around it. With colon cancer, for instance, the cancer and a length of normal colon on either side of the cancer, as well as the nearby lymph nodes are removed, and the remaining sections of the colon are then reattached. In lung cancer, a section of lobe of a lung is removed. Also called segmentectomy.</p>

                    <h4 className='text-2xl font-bold'>selective estrogen receptor modulator (SERM)</h4>
                    <p>A drug used in hormone therapy that blocks estrogen from telling breast cancer cells to grow and divide. Acts like an anti-estrogen in breast cells but like an estrogen in other tissues, like the uterus and the bones. Can be used to treat women with breast cancer who have or have not gone through menopause. Tamoxifen is the most commonly used SERM.</p>
                    <h4 className='text-2xl font-bold'>semen [see-muhn]</h4>
                    <p>Fluid released during male orgasm that contains sperm and seminal fluid.</p>

                    <h4 className='text-2xl font-bold'>sentinel lymph node biopsy [sen-tin-uhl]</h4>
                    <p>Procedure used instead of routine lymph node dissection (removal) for some cancer types. Blue dye and/or a radioactive substance is injected into the tumor during surgery and the first (sentinel) node that picks up the dye is removed and biopsied. If the first node does not have cancer cells, fewer nodes are removed.</p>

                    <h4 className='text-2xl font-bold'>sex therapist</h4>
                    <p>A mental health professional such as a licensed psychiatrist, social worker, clinical nurse specialist, nurse practitioner, or psychologist with special training in counseling people about sexual changes, problems, and communication (for example, after treatment for cancer). It’s common for a sex therapist to work with both sexual partners, rather than just one person.</p>

                    <h4 className='text-2xl font-bold'>side effects</h4>
                    <p>Unwanted effects of treatment such as hair loss, low blood counts, fatigue (extreme tiredness), and rashes.</p>

                    <h4 className='text-2xl font-bold'>sievert (Sv)</h4>
                    <p>See radiation dose.</p>

                    <h4 className='text-2xl font-bold'>sigmoidoscope [sig-MOYD-uh-scope]</h4>
                    <p>A flexible, lighted tube (about the thickness of a finger) with a small video camera at the end. It is inserted through the anus, into the rectum and into the lower part of the colon. This lets the doctor see the entire rectum, but less than half of the colon to look for cancer or for polyps (small growths that can become cancer).</p>

                    <h4 className='text-2xl font-bold'>sign</h4>
                    <p>A physical change that can be seen or measured by someone else, such as fever or bleeding. Compare to symptom.</p>

                    <h4 className='text-2xl font-bold'>simulation</h4>
                    <p>A process that uses special x-ray pictures to plan radiation treatment so that the area to be treated is precisely located and marked. The radiation can then be delivered as directly as possible to the tumor while lowering effect on normal, healthy tissues.</p>

                    <h4 className='text-2xl font-bold'>smoking rate</h4>
                    <p>Number of people who smoke tobacco products (including cigarettes, cigars, pipes, or any other tobacco or nicotine product) in a defined population. For example, the smoking rate of men age 15 and older in the United States is the percentage of men who smoke out of all men in that age group in the US.</p>

                    <h4 className='text-2xl font-bold'>social determinants of health</h4>
                    <p>Conditions into which people are born, grow up, live, work, worship, and age that impact their health, functioning, and quality of life. For example, housing and neighborhoods, quality of education, level of income, available transportation, health care access and quality, and social connections.</p>

                    <h4 className='text-2xl font-bold'>social worker</h4>
                    <p>A health professional with special training in dealing with social, emotional, and environmental problems that may come with illness or disability. A social worker may help people find community resources and support services, and provide counseling and guidance to help with issues such as insurance coverage, nursing home placement, and emotional distress. An oncology social worker is an expert in coordinating and providing help for the cancer patient and family, such as counseling them and helping to manage financial problems, housing or child care issues (such as when treatments are given at a facility away from home), and coping with different types of emotional distress.</p>

                    <h4 className='text-2xl font-bold'>solar keratosis</h4>
                    <p>See actinic keratosis.</p>

                    <h4 className='text-2xl font-bold'>somatic mutation [so-mat-ick mew-tay-shun]</h4>
                    <p>A change in DNA that starts in one cell of the body at any time of life after an embryo is formed. All the cells that arise from that cell will typically have the same mutation, which in some cases can lead to cancer. Somatic mutations are not passed on to children.</p>

                    <h4 className='text-2xl font-bold'>speech therapist</h4>
                    <p>A health professional who is specially trained to work with people who have speech and swallowing problems. Speech therapists help people learn skills to communicate and also make sure that patients can safely eat and drink. Also called a speech pathologist.</p>


                    <h4 className='text-2xl font-bold'>sphincter [sfink-ter]</h4>
                    <p>A ring-like muscle that can open and close to control the passage of waste out of the body. The urethral sphincter squeezes the urethra shut and provides bladder control. There are 2 of these muscles in the anus to control stool (feces), called the external and internal anal sphincters.</p>

                    <h4 className='text-2xl font-bold'>spinal cord compression</h4>
                    <p>Any process that puts pressure on the spinal cord, or the nerves that come off it. Pressure on the spinal cord can cause pain, numbness or weakness in the legs, or stool or urine incontinence. This can occur when cancer spreads to the spine.</p>

                    <h4 className='text-2xl font-bold'>spinal tap</h4>
                    <p>See lumbar puncture.</p>

                    <h4 className='text-2xl font-bold'>spindle cell [spin-duhl sell]</h4>
                    <p>When seen with a microscope, a cell that looks like a long oval. Some types of sarcomas, melanomas, and carcinomas have this type of cell. There are also normal cells of the body that are shaped like spindles.</p>

                    <h4 className='text-2xl font-bold'>spiral CT</h4>
                    <p>A special scanner that takes cross-sectional pictures of the body in a spiral or helix pattern. Also called helical CT.</p>

                    <h4 className='text-2xl font-bold'>sputum cytology [spew-tum sy-tahl-uh-jee]</h4>
                    <p>A study of sputum (mucus you cough up from your lungs) using a microscope to see if there are cancer cells.</p>

                    <h4 className='text-2xl font-bold'>squamous cell carcinoma [skway-mus sell car-sin-O-mah]</h4>
                    <p>Cancer that begins in the squamous cells (thin, flat cells), for example, the skin or the lining of the body’s organs.</p>

                    <h4 className='text-2xl font-bold'>stage</h4>
                    <p>The size of a cancer and if and where it has spread from the primary site. A clinical stage is based on results of the physical exam, biopsy, and imaging tests. A pathologic stage is based on how the cells in the tissue samples from surgery or a biopsy look under a microscope.</p>

                    <h4 className='text-2xl font-bold'>staging</h4>
                    <p>The process of finding out how much cancer is in a person’s body and where it’s located. Different staging systems are used for different types of cancers. The TNM staging system is used the most.</p>

                    <h4 className='text-2xl font-bold'>standard of care</h4>
                    <p>Treatment or care process that medical experts accept as the appropriate treatment for a disease at a certain time.</p>

                    <h4 className='text-2xl font-bold'>standard therapy</h4>
                    <p>Treatment based on studies that show that the treatment is safe and effective in one or more types of cancer or for managing side effects of treatment. Also called conventional or mainstream treatment.</p>

                    <h4 className='text-2xl font-bold'>statistical analysis</h4>
                    <p>Series of methods used to explore and organize large amounts of data to discover patterns and trends. For example, American Cancer Society researchers use statistical analysis to identify which risk factors affect the development of cancer.</p>

                    <h4 className='text-2xl font-bold'>stem cell transplant</h4>
                    <p>See bone marrow transplant.</p>

                    <h4 className='text-2xl font-bold'>stem cells</h4>
                    <p>Cells that may mature into different types of cells. In cancer, the term usually refers to the immature blood cells (called hematopoietic stem cells) found in the bone marrow and in the blood. These stem cells can mature into all types of blood cells.</p>

                    <h4 className='text-2xl font-bold'>stenosis [steh-no-sis]</h4>
                    <p>A narrowing (stricture) of a duct or canal.</p>

                    <h4 className='text-2xl font-bold'>stent</h4>
                    <p>A very small tube or “straw-like” device put in to support and hold open a tube-shaped organ, such as a blood vessel, bile duct, or intestine.</p>

                    <h4 className='text-2xl font-bold'>stereotactic body radiation [steer-e-o-TACK-tick]</h4>
                    <p>Using stereotactic radiosurgery techniques for areas outside the brain, such as to the lung, spine, or liver.</p>

                    <h4 className='text-2xl font-bold'>stereotactic needle biopsy [steer-e-o-TACK-tick need-ul by-op-see]</h4>
                    <p>A type of needle biopsy that is useful when calcifications or a small mass can be seen on imaging tests but cannot be felt (such as in a breast) or tumors are in a location where surgery to remove them is risky (such as a brain tumor). A computer maps the location of the mass to guide the placement of the needle.</p>

                    <h4 className='text-2xl font-bold'>stereotactic radiosurgery [steer-e-o-TACK-tick ray-dee-o-SUR-jer-ee]</h4>
                    <p>External radiation treatment (not surgery) that uses special equipment to focus a large dose of radiation to a small tumor area, usually in one session. The radiation is very precisely aimed to affect nearby tissues as little as possible. This treatment is used for brain tumors and other tumors in the head.</p>
                    <h4 className='text-2xl font-bold'>sterility</h4>
                    <p>The inability to have children, which can result from some types of cancer treatment. Also called infertility.</p>

                    <h4 className='text-2xl font-bold'>sternum</h4>
                    <p>Breastbone, the flat bone where the ribs meet in the center at the front of the chest.</p>

                    <h4 className='text-2xl font-bold'>stoma [sto-muh]</h4>
                    <p>An opening made during surgery to connect a body part to the outside. Stomas may be created in the neck to allow a person to breathe (also called a tracheostomy or trach) or to allow elimination of stool or urine, such as colostomy, ileostomy, or urostomy.</p>

                    <h4 className='text-2xl font-bold'>stomatitis [sto-muh-TIE-tus]</h4>
                    <p>Inflammation, sores, or ulcers of the mouth. Stomatitis can be a side effect of some kinds of chemotherapy, radiation treatment, targeted therapy, and immunotherapy. Also known as mucositis.</p>

                    <h4 className='text-2xl font-bold'>stool</h4>
                    <p>Solid waste matter from the bowels that is eliminated through the anus. Also called feces or poop.</p>

                    <h4 className='text-2xl font-bold'>stool DNA testing</h4>
                    <p>A method to detect abnormal deoxyribonucleic acid (DNA) in cells that are shed by polyps or colorectal cancers in the large intestine and come out in the stool. This test can be helpful in screening for colorectal cancer.</p>

                    <h4 className='text-2xl font-bold'>stool softener</h4>
                    <p>A mild type of laxative that helps keep the stool from becoming hard, dry, and difficult to pass. See also laxative.</p>

                    <h4 className='text-2xl font-bold'>stress incontinence</h4>
                    <p>Leaking a small amount of urine when coughing, laughing, sneezing, lifting heavy objects, or exercising.</p>
                    <h4 className='text-2xl font-bold'>stricture [strick-chure]</h4>
                    <p>A narrowing or constriction of a tube, duct, or hollow organ like an esophagus, ureter, or urethra.</p>

                    <h4 className='text-2xl font-bold'>stroma [stro-muh]</h4>
                    <p>Connective tissue that supports organs and other structures in the body.</p>

                    <h4 className='text-2xl font-bold'>strontium-89 [stron-tee-um]</h4>
                    <p>A radioactive substance (radioisotope) used to treat bone pain from cancer that has spread to the bones. It is injected into a vein and is attracted to areas of bone containing cancer. The radiation given off by the strontium-89 kills the cancer cells and helps relieve pain.</p>

                    <h4 className='text-2xl font-bold'>superior</h4>
                    <p>Higher than another part of the body or organ; closer to the head.</p>

                    <h4 className='text-2xl font-bold'>surgeon [sur-jun]</h4>
                    <p>A doctor with special training to cut or remove tumors or parts of the body affected by a disease. A surgical oncologist is a doctor who specializes in surgery to treat cancer. A thoracic surgeon is a doctor who operates on organs in the thorax or chest, including the lungs, ribs, the sternum (breast bone), and the diaphragm (the muscle that helps breathing).</p>

                    <h4 className='text-2xl font-bold'>surgical biopsy</h4>
                    <p>Removal of tissues through an incision (open cut) so that they can be looked at under a microscope to find out if they contain cancer cells.</p>

                    <h4 className='text-2xl font-bold'>surgical margin</h4>
                    <p>Edge of the tissue removed during surgery. A negative surgical margin means that no cancer cells were found on the outer edge of the removed tissue and is considered a sign that none of the cancer was left behind. A positive surgical margin means that cancer cells are found at the outer edge of the tissue removed, so more surgery may be needed.</p>

                    <h4 className='text-2xl font-bold'>surgical oncologist</h4>
                    <p>A doctor who specializes in using surgery to treat cancer.</p>
                    <h4 className='text-2xl font-bold'>survival rate</h4>
                    <p>The percentage of people who are alive at a certain time after diagnosis. For cancer, a 5-year survival rate is often given. This does not mean that people can’t live more than 5 years, nor does it mean that those who live for 5 years are cured.</p>

                    <h4 className='text-2xl font-bold'>survivor</h4>
                    <p>Anyone who has ever been diagnosed with cancer, no matter where they are in the course of their disease. For example, someone living with cancer may be considered a survivor. Some people use the term to refer to someone who has completed cancer treatment. Others call a person a survivor if they have lived several years past a cancer diagnosis. The American Cancer Society believes that each person has the right to define their own experience with cancer and considers a cancer survivor to be anyone who describes themselves this way, from diagnosis throughout the rest of their life.</p>

                    <h4 className='text-2xl font-bold'>survivorship</h4>
                    <p>The state of being a cancer survivor, that is, having been diagnosed with cancer.</p>

                    <h4 className='text-2xl font-bold'>symptom [simp-tuhm]</h4>
                    <p>A change in the body that is noticed by the person who has it, such as pain or fatigue.</p>

                    <h4 className='text-2xl font-bold'>synchronous [sin-kruh-nus]</h4>
                    <p>Happening or existing at the same time. For example, a diagnosis of more than one primary cancer at the same time. This may be separate primary tumors of the same type of cancer (such as cancer in both breasts) or different types of cancer (such as bladder and lung cancer).</p>

                    <h4 className='text-2xl font-bold'>synergistic [sin-er-JIS-tick]</h4>
                    <p>Acting together. A synergistic agent can act together with one or more other agents to produce an effect greater than that of the sum of their individual effects. Some chemotherapy drugs act synergistically.</p>

                    <h4 className='text-2xl font-bold'>systemic disease [sis-tem-ick]</h4>
                    <p>In cancer, this means that a cancer that started in one place has spread to distant organs or structures.</p>

                    <h4 className='text-2xl font-bold'>systemic radiation therapy [sis-tem-ick]</h4>
                    <p>Radiation therapy in which a radioactive substance, such as radioactive iodine or a radioactively labeled monoclonal antibody, is swallowed or injected into the body to find and kill cancer cells.</p>

                    <h4 className='text-2xl font-bold'>systemic therapy [sis-tem-ick]</h4>
                    <p>Treatment that reaches and affects cells throughout the body; for example, chemotherapy, hormone therapy, targeted therapy, and immunotherapy.</p>
                    <h2 className='text-6xl font-extrabold' id='T'>T</h2>
                    <h4 className='text-2xl font-bold'>T-cells</h4>
                    <p>A type of immune cell (white blood cell) that plays a large role in the immune response against foreign substances such as viruses, transplanted organs and tissues, and cancer cells. T-cells recognize these foreign substances and release chemical messages called cytokines to help trigger other parts of the immune system to destroy the foreign substance. Also known as T-lymphocytes.</p>

                    <h4 className='text-2xl font-bold'>targeted therapy</h4>
                    <p>Treatment that uses drugs or other substances to identify and attack certain cancer cells. Targeted therapies tend to affect normal cells less and therefore cause fewer side effects than other cancer treatments.</p>

                    <h4 className='text-2xl font-bold'>temporary brachytherapy</h4>
                    <p>See high-dose rate brachytherapy.</p>

                    <h4 className='text-2xl font-bold'>terminal illness [ter-min-uhl]</h4>
                    <p>An illness that cannot be cured and is expected to lead to the person’s death.</p>

                    <h4 className='text-2xl font-bold'>testosterone [tes-toss-ter-own]</h4>
                    <p>Called the male hormone, it is made mostly in the testicles. It controls sex drive (libido), production of sperm, growth in certain tissues, and secondary sexual characteristics. It can also make prostate cancers grow.</p>

                    <h4 className='text-2xl font-bold'>therapy</h4>
                    <p>Any of the measures taken to treat a disease. Also called treatment.</p>

                    <h4 className='text-2xl font-bold'>thermography [thur-mog-ruh-fee]</h4>
                    <p>A method in which heat from the breast is measured and mapped. The FDA states that this method should not be used instead of mammogram for breast cancer screening or diagnosis. There is no valid research showing that thermography is an effective screening tool for any medical condition.</p>

                    <h4 className='text-2xl font-bold'>thoracic surgeon [thuh-ras-ick sur-jun]</h4>
                    <p>A doctor who operates on organs in the chest cavity. The word thoracic refers to the thorax, another name for the chest.</p>

                    <h4 className='text-2xl font-bold'>three-dimensional conformal radiation therapy (3D-CRT)</h4>
                    <p>Treatment that uses sophisticated computers to very precisely map the location of the cancer within the body. The patient may be fitted with a plastic mold much like a cast to keep them still and in the same position for each treatment so that the radiation can be more precisely aimed. This reduces the radiation effects on normal tissues and may allow higher doses of radiation to be used. Also called 3D-CRT.</p>

                    <h4 className='text-2xl font-bold'>thriver</h4>
                    <p>Someone who uses their cancer experience as an opportunity for personal growth and focuses on quality of life and living as well as possible.</p>

                    <h4 className='text-2xl font-bold'>thrombocytopenia [throm-bo-sy-toe-PEEN-ee-uh]</h4>
                    <p>A condition in which there is a decrease in the number of platelets in the blood. It can be a side effect of chemotherapy and radiation therapy and might increase the risk of bruising and bleeding.</p>
                    <h4 className='text-2xl font-bold'>tissue [tish-oo]</h4>
                    <p>A collection of cells that work together to perform a particular function.</p>

                    <h4 className='text-2xl font-bold'>TNM staging system</h4>
                    <p>The most commonly used system to stage cancers. The TNM staging system uses 3 key pieces of information.
                        <ul className='list-disc'>
                            <li>T refers to the size of the tumor</li>
                            <li>N describes whether the cancer has spread to nearby lymph nodes, and if so, how many</li>
                            <li>M shows whether the cancer has spread (metastasized) to other organs of the body</li>

                        </ul>

                        Letters or numbers after the T, N, and M give more details about each of these factors. To make this information clearer, the TNM descriptions can be grouped together into a simpler set of stages, labeled with Roman numerals (usually from I to IV). In general, the lower the number, the less the cancer has spread. A higher number means a more serious cancer. Also called AJCC staging system.
                    </p>
                    <h4 className='text-2xl font-bold'>total androgen blockade</h4>
                    <p>See combined androgen blockade.</p>

                    <h4 className='text-2xl font-bold'>toxic [tock-sick]</h4>
                    <p>Something harmful or poisonous, usually resulting in more severe side effects.</p>

                    <h4 className='text-2xl font-bold'>transfusion [trans-few-zhun]</h4>
                    <p>Blood or blood products that are given into a vein (intravenous or IV). Most blood products are taken from unrelated donors and tested for disease before use, but a person can donate their own blood ahead of time to be given during certain planned surgeries or procedures.</p>

                    <h4 className='text-2xl font-bold'>translocation [tranz-low-KAY-shun]</h4>
                    <p>Genetic material that is not in its normal place, as when DNA from one chromosome breaks off and gets attached to a different chromosome. Translocations might be responsible for diseases such as leukemia, breast cancer, schizophrenia, muscular dystrophy, and Down syndrome.</p>

                    <h4 className='text-2xl font-bold'>tumor [too-mer]</h4>
                    <p>An abnormal growth of tissue. Tumors can be benign (not cancer) or malignant (cancer).</p>

                    <h4 className='text-2xl font-bold'>tumor flare</h4>
                    <p>Temporary worsening of symptoms or tumor markers for a short time after starting treatment.</p>

                    <h4 className='text-2xl font-bold'>tumor markers</h4>
                    <p>See biomarkers.</p>

                    <h4 className='text-2xl font-bold'>tumor necrosis factor (TNF) [too-mer neck-row-sis]</h4>
                    <p>A substance given off by activated white blood cells that can cause the death of tumor cells.</p>

                    <h4 className='text-2xl font-bold'>tumor suppressor genes</h4>
                    <p>Genes that slow down cell division, repair DNA mistakes, or cause cells to die at the right time. Changes or mutations in these genes can lead to too much cell growth and development of cancer.</p>
                    <h4 className='text-2xl font-bold'>tumor volume</h4>
                    <p>Measure of the amount of cancer present.</p>
                    <h2 className='text-6xl font-extrabold' id='U'>U</h2>
                    <h4 className='text-2xl font-bold'>ulcerative colitis [ul-suh-ruh-tiv kuh-lie-tis]</h4>
                    <p>A type of inflammatory bowel disease. In this condition, the colon is inflamed over a long period of time. This increases a person’s risk of developing colon cancer, so starting colorectal cancer screening earlier and doing these tests more often is recommended.</p>

                    <h4 className='text-2xl font-bold'>ultrasound or ultrasonography [ul-truh-sound or ul-truh-son-AH-gruf-ee]</h4>
                    <p>Imaging test that uses high-frequency sound waves to show body organ structure, movement, and flow through blood vessels. The sound waves create echoes that are picked up and displayed on a computer screen.</p>

                    <h4 className='text-2xl font-bold'>umbilical cord blood transplant</h4>
                    <p>The use of stem cells taken from the umbilical cord blood of newborns to replace the blood-forming stem cells in patients whose own stem cells have been destroyed by radiation or chemotherapy.</p>

                    <h4 className='text-2xl font-bold'>unilateral [yoo-nih-LAT-uh-ruhl]</h4>
                    <p>Affecting only one side of the body. For example, unilateral breast cancer occurs in one breast only.</p>

                    <h4 className='text-2xl font-bold'>urge incontinence</h4>
                    <p>A sudden and uncontrollable urge to urinate even when the bladder is not full. This can be caused by a bladder infection or irritation from radiation therapy. Also called an overactive bladder.</p>

                    <h4 className='text-2xl font-bold'>urinary frequency</h4>
                    <p>The need to urinate (pass urine) often.</p>

                    <h4 className='text-2xl font-bold'>urinary incontinence</h4>
                    <p>Partial or complete loss of control of urination.</p>

                    <h4 className='text-2xl font-bold'>urinary retention</h4>
                    <p>Being unable to empty the bladder or unable to urinate.</p>

                    <h4 className='text-2xl font-bold'>urinary urgency</h4>
                    <p>Feeling the need to urinate (pass urine) right away.</p>

                    <h4 className='text-2xl font-bold'>urinate [YUR-uh-nate]</h4>
                    <p>To pass urine from the bladder to the outside of the body.</p>
                    <h4 className='text-2xl font-bold'>urine cytology [yur-in sy-tahl-uh-jee]</h4>
                    <p>Tests on a sample of urine to find cancer or pre-cancer cells in it. These tests can also be done on bladder washings. Bladder washings are taken by putting a salt solution into the bladder through a tube (called a catheter) and then removing the solution for testing.</p>

                    <h4 className='text-2xl font-bold'>urodynamic study [yur-o-die-NAM-ick]</h4>
                    <p>An evaluation of the function of the bladder muscle and sphincters.</p>

                    <h4 className='text-2xl font-bold'>urologist [yur-ahl-uh-jist]</h4>
                    <p>A doctor who specializes in treating problems of the urinary tract (in both sexes) and the male reproductive tract.</p>

                    <h4 className='text-2xl font-bold'>uterine fibroid tumor [yew-ter-in fi-broyd too-mer or tyoo-mer]</h4>
                    <p>A non-cancerous tumor that is made of fibrous or connective tissue. It is the most common tumor found in women. It can be in the uterine wall or protrude into the lining of the uterus. Usually there are no symptoms, but it can cause abnormal bleeding and other symptoms depending on its size and location in the uterus. Also called a fibroma.</p>
                    <h2 className='text-6xl font-extrabold' id='V'>V</h2>
                    <h4 className='text-2xl font-bold'>vaccine [vack-seen]</h4>
                    <p>A substance designed to help the immune system resist or treat a specific infection or disease. Used to prevent certain infections, such as human papillomavirus (HPV), or help the body fight a specific kind of cancer.</p>

                    <h4 className='text-2xl font-bold'>vaginal dryness and atrophy [va-juh-nuhl drai-nuhs and a-truh-fee]</h4>
                    <p>Loss of moisture and the ability of the walls of the vagina to stretch and move comfortably. Usually occurs after menopause or the decrease in estrogen because of cancer treatment. Can make intercourse difficult and sometimes painful.</p>

                    <h4 className='text-2xl font-bold'>vaginal stenosis [va-juh-nuhl steh-no-sis]</h4>
                    <p>Shortening or narrowing of the vagina because of scar tissue formation after surgery or radiation treatment.</p>

                    <h4 className='text-2xl font-bold'>vascular endothelial growth factor (VEGF) [vas-ku-lur en-doe-THEE-lee-uhl]</h4>
                    <p>A protein that helps tumors form new blood vessels to get nutrients they need to grow.</p>

                    <h4 className='text-2xl font-bold'>ventral</h4>
                    <p>The front or near the front of the body.</p>

                    <h4 className='text-2xl font-bold'>virtual colonoscopy</h4>
                    <p>Examination of the colon and rectum for polyps or masses using special imaging tests. Special computer programs use both x-rays and a CT scan to make 3-dimensional pictures of the inside of the colon and rectum.</p>

                    <h4 className='text-2xl font-bold'>virus [vy-rus]</h4>
                    <p>Very small organisms (called micro-organisms) that cause infections. Some viruses can also increase the risk for certain types of cancer, such as human papillomavirus (HPV) and cervical cancer.</p>

                    <h2 className='text-6xl font-extrabold' id='W'>W</h2>

                    <h4 className='text-2xl font-bold'>watchful waiting</h4>
                    <p>See active surveillance.</p>

                    <h4 className='text-2xl font-bold'>white blood cells (WBCs)</h4>
                    <p>Blood cells that help defend the body against infections. There are many types of white blood cells. Certain cancer treatments such as chemotherapy can reduce the number of these cells and make a person more likely to get infections.</p>

                    <h4 className='text-2xl font-bold'>wire localization [lo-cull-ih-ZAY-shun]</h4>
                    <p>A method used during a surgical biopsy when the lump is hard to find or when there is an area that looks suspicious on the x-ray. A thin, hollow needle is placed into the tissue and x-rays are taken to guide the needle to the area of concern. A fine wire is put through the center of the needle. A small hook at the end of the wire keeps it in place. The hollow needle is then removed, and the surgeon uses the path of the wire as a guide to find the abnormal area to be removed.</p>
                    New method detects early breast cancer via urine

                    <h2 className='text-6xl font-extrabold' > New method detects early breast cancer via urine</h2>
                    <h3 className='text-4xl font-extrabold'>Test identifies changes in cell metabolism, highly accurate</h3>
                    <h4 className=' '>Date:</h4>
                    <p className=' px-16'>June 11, 2015</p>

                    <h4 className=''>Source:</h4>
                    <p className=' px-16'>University of Freiburg</p>

                    <h4 className=' '>Summary:</h4>
                    <p className=' px-16'>Medical researchers have developed an approach for detecting breast cancer by means of urine samples. The method involves determining the concentration of molecules that regulate cell metabolism and that are often dysregulated in cancer cells. These molecules, referred to as microRNAs, enter into the urine over the blood. By determining the composition of microRNAs in the urine, the scientists succeeded in establishing with 91 percent accuracy whether a test subject was healthy or diseased.</p>

                    <h4 className='text-6xl font-bold'>CA 15-3</h4>

                    <h4 className='text-4xl font-bold'>Does this test have other names?</h4>

                    <p>Cancer antigen 15-3</p>

                    <h4 className='text-4xl font-bold'>What is this test?</h4>

                    <p>This test measures the amount of cancer antigen 15-3 (CA 15-3) in your blood. CA 15-3 is a substance that stimulates your body’s defense system. Some kinds of cancer cells release the CA 15-3 antigen into the blood. This test is used to monitor certain types of cancer.</p>
                    <p>Breast cancer is the cancer most likely to release CA 15-3, especially in cases where the breast cancer recurs after treatment. Antigens like CA 15-3 that provide information about cancer are called tumor markers.</p>

                    <h4 className='text-4xl font-bold'>Why do I need this test?</h4>
                    <br />
                    <p>You may need this test to monitor your body’s response to treatment for breast cancer. CA 15-3 is not used as a screening test or a diagnostic test to detect breast cancer. Some individuals with breast cancer do not have elevated levels of CA 15-3. Additionally, conditions other than breast cancer can cause a positive CA 15-3 test.</p>
                    <p>You may need this test if:
                        <ul className=' px-10 list-disc'>
                            <li>You have already been diagnosed with breast cancer and your healthcare provider wants to find out how well treatment is working.</li>
                            <li>You have already been treated for breast cancer and your healthcare provider wants to find out if your cancer has come back or spread.</li>
                        </ul>
                    </p>

                    <h4 className='text-4xl font-bold'>What other tests might I have along with this test?</h4>

                    <p>Your healthcare provider may order a test to check for another breast cancer tumor marker called CA 27-29. You may also have other blood and diagnostic tests to learn about your cancer.</p>

                    <h4 className='text-4xl font-bold'>What do my test results mean?</h4>

                    <p>Test results may vary depending on your age, gender, health history, and other factors. Your test results may differ depending on the lab used. They may not indicate a problem. Ask your healthcare provider what your test results mean for you.</p>
                    <p>CA 15-3 is measured in units per milliliter (U/mL). A normal test should be less than or equal to 30 U/mL.</p>
                    <p>It is important to know that a positive CA 15-3 blood test does not mean you have breast cancer or that your breast cancer has returned. Other conditions can also cause CA 15-3 levels to be elevated.</p>
                    <p>Noncancerous conditions of the breast, ovary, and liver can also lead to increased CA 15-3 levels.</p>
                    <p>The results of this test are evaluated alongside other clinical information. In general, increasing values may indicate disease progression or recurrence, while decreasing values may suggest disease regression.</p>

                    <h4 className='text-4xl font-bold'>How is this test done?</h4>

                    <p>The test is performed using a blood sample. A needle is used to draw blood from a vein in your arm or hand.</p>

                    <h4 className='text-4xl font-bold'>Does this test pose any risks?</h4>

                    <p>Having a blood test with a needle carries some risks, including bleeding, infection, bruising, and feeling lightheaded. When the needle pricks your arm or hand, you may feel a slight sting or pain. Afterward, the site may be sore.</p>

                    <h4 className='text-4xl font-bold'>What might affect my test results?</h4>

                    <p>Other factors aren’t likely to affect your results.</p>

                    <h4 className='text-4xl font-bold'>How do I get ready for this test?</h4>

                    <p>You don’t need to prepare for this test. Ensure your healthcare provider knows about all medicines, herbs, vitamins, and supplements you are taking, including over-the-counter medications and any illegal drugs.</p>











                </div>
        
           
            
        </div>
    )
}

export default HeroGlossary