import React from 'react'
import './Faq.css'

const faqAkagera = () => {
    return (
        <div className="faq-akagera">
            <div className="faq-akagera-panel">
            <div className="faq-akagera-panel-level-title">
                <h1>General asked Questions</h1>
            </div>
                <div className="faq-akagera-item">
                    <h1> Who do I contact if I have problems with the Host Family?  </h1>
                    <p> Akagera & Rhein® Aupair Service works with selected and trustworthy partner agencies in every host country. The partner agencies are the interface between the Aupairs and the Host Families. You get the contact details of our partner and a contact person after the matching succeed. If you have any problems with the Host Family, or another problem you can contact this contact person at any time. Akagera & Rhein® Aupair Service will also stay in contact with you after you leave the country. </p>
                </div>

                <div  className="faq-akagera-item">
                        <h1>When should I apply? </h1>
                        <p>Ideally, your application should be received thought this online platform by activating your profile 3 to 4 months before the desired departure. During the whole year.  </p>
                </div>

                <div  className="faq-akagera-item">
                        <h1> How long should an au pair stay last? </h1>
                        <p>The minimum stay in all host countries is 6 months. Unfortunately, we cannot arrange stays of less than 6 months. You have the best placement chances if you can stay in your Host Family for a whole year.</p>
                </div>

                <div  className="faq-akagera-item">
                        <h1> How expensive is a language course? </h1>
                        <p>Unfortunately, we cannot answer that across the board. The cost of the language course depends on many factors, for example the host country, the type of language school you have, the type and level of your course, the duration of the language course and the number of hours you want.</p>
                </div>

                <div  className="faq-akagera-item">
                        <h1>   Do you also accept male applicants? </h1>
                        <p>Of cause! Placement as an Aupair is generally possible for boys and girls. However, the placement of male applicants is more difficult, as most families want a female Aupair for their children. If you would like to apply as a male applicant, we look forward to receiving your application and will try to find you successfully. However, we cannot promise a placement and ask you to submit your application to us well in advance of your desired departure so that we have enough time to search. </p>
                </div>
                <div  className="faq-akagera-item">
                        <h1>    Do I have to be a non-smoker?  </h1>
                        <p>No. However, very many families do not accept a smoking Aupair. As a smoker, you will in most cases at least have to undertake to never smoke in the presence of the children. We strongly recommend that you quit smoking before your stay. </p>
                </div>


               

              

                <div  className="faq-akagera-more">
                    Read more
                </div>
            </div>
           

            <div className="faq-akagera-panel-level">

                <div className="faq-akagera-panel-level-title">
                <h1 style={{color:'red'}}>Aupar Asked Questions</h1>
                    {/* <p>GER (European standard) identifies different grids of language levels and skills. </p> */}
                </div>

                <div className="faq-akagera-panel-level-title">
                    <h1 style={{color:'red'}}>Host Family Asked Questions</h1>
                    {/* <p>GER (European standard) identifies different grids of language levels and skills. </p> */}
                </div>


                {/* <div className="faq-panel-level">  
                    <div className="faq-akagera-item-level">
                        <h1>A1 - BEGINNER </h1>
                        <p> Can understand and use common, everyday expressions, as well as very simple statements aimed at meeting concrete needs. Can introduce himself or others, can ask a person question about himself ... Can communicate in a simple way if the interlocutor speaks slowly and clearly and is cooperative. </p>
                    </div>

                    <div  className="faq-akagera-item-level">
                        <h1>A2 - ELEMENTARY  </h1>
                        <p>Can understand isolated sentences and frequently used expressions relating to areas of daily life (such as personal and family information, shopping, work, close environment). Can communicate in simple and routine situations that only require a simple and direct exchange of information related to familiar and well-known topics ...  </p>
                    </div>
                    <div  className="faq-akagera-item-level">
                            <h1>  B1 - INDEPENDENT   </h1>
                            <p>Can understand the essentials provided that typical, clear language is used and that these are familiar topics related to work, school, leisure etc. Can cope with most situations encountered while traveling. Can express themselves in a simple and coherent manner on familiar topics and in their areas of interest. Can relate experiences or an event, dreams, and hopes, can describe a goal and briefly give reasons and explanations for opinions or plans.  </p>
                    </div>
                </div>

                <div className="faq-panel-level">

                    <div  className="faq-akagera-item-level">
                            <h1>B2 - ADVANCED  </h1>
                            <p>Can understand the essential content of concrete and abstract topics in a complex text. Can also include technical discussions in their area of ​​specialty. Can communicate with a degree of spontaneity and fluency such that a conversation with a native speaker is stress-free for either. Can express himself in a clear and detailed manner on a wide variety of subjects, give an opinion on a topical subject and explain the advantages and disadvantages of different possibilities.  </p>
                    </div>

                    <div  className="faq-akagera-item-level">
                            <h1>C1 - EXPERIENCED  </h1>
                            <p>Can understand a wide variety of longer, more demanding texts and recognize their implicit meanings. Can express himself spontaneously and fluently without giving the impression of searching for words too much. Can express himself in an efficient and flexible manner in the context of his training and studies, his professional or social life. Can express himself on complex subjects in a clear, detailed, and structured manner while mastering all the means relating to speech.   </p>
                    </div>

                    <div  className="faq-akagera-item-level">
                            <h1>C2 - EXPERIENCED  </h1>
                            <p>Can understand almost without difficulty everything he / she reads or hears. Can summarize information from a variety of written and oral sources and reproduce it in a coherent manner while stating specific reasons and explanations. Can express himself spontaneously, fluently, and precisely, and can distinguish fine nuances relating to complex subjects.  </p>
                    </div>
                </div>
            </div>

            <div className="faq-akagera-panel">
                <div className="faq-akagera-item">
                    <h1>What is the difference between an A1.1 and A1.2 course? </h1>
                    <p>The level 1 language course is a beginner's course. It is called A1. 
                        The A1 course is subdivided into an A1.1 course (1st part) and another A1.2 (2nd part). 
                    </p>
                
                </div>

                <div className="faq-akagera-item">
                    <h1>How long does a module last? </h1>
                    <p>From 4 weeks per intermediate level, and 12 for a complete level. </p>
                </div>


                <div className="faq-akagera-item">
                    <h1>How many minutes does a unit of a course last? </h1>
                    <p>1 hour of lesson unit is 45 minutes. </p>
                </div>

                <div className="faq-akagera-item">
                    <h1>Is that possible to start with A2 language course without having taken an A1 course at your academy? </h1>
                    <p>If you wish to register in A2 course without visit the A1 module at our academy, you will need to present a satisfactory certificate of an A1 course delivered by another recognized language institution and pass a written and oral test with Akagera & Rhein® Language Academy. 
                        At the end of this test, with a satisfactory result, it will be possible to register for A2 course.  </p>
                </div>
                
                <div  className="faq-akagera-more">
                    More
                </div>
                */}
            </div>
        </div> 
    )
}
export default faqAkagera