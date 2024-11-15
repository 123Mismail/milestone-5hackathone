

let experienceData:any=[];
let projectsArr:any=[];
console.log("resume builder")
document.getElementById("resumeForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  // getting element by id 
  // personal informations
  const usernameUrlElement=document.getElementById('usernameurl') as HTMLInputElement;
  const pictureElement=document.getElementById('profilePicture') as HTMLInputElement;
  const nameElement = document.getElementById("name") as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const phoneElement = document.getElementById("phone") as HTMLInputElement;
  // personal informations
  // education
  const matricEducation = document.getElementById(
    "matric"
  ) as HTMLInputElement;
  const intermediateEducation = document.getElementById(
    "intermediate"
  ) as HTMLInputElement;
  const graduationEducation = document.getElementById(
    "graduation"
  ) as HTMLInputElement;
  const mastersEducation = document.getElementById(
    "masters"
  ) as HTMLInputElement;

    // education
// skills
    const skillsElement = document.getElementById("skills") as HTMLInputElement;
// skills
    // experience
  const experienceTitle = document.getElementById(
    "experience-title"
  ) as HTMLInputElement;
  const experienceDuration = document.getElementById(
    "workduration"
  ) as HTMLInputElement;
  const experience = document.getElementById(
    "des-experience"
  ) as HTMLInputElement;
  // about field description

  const aboutTitleElement = document.getElementById(
    "about-title"
  ) as HTMLInputElement;
  const aboutDescriptionElement = document.getElementById(
    "about-description"
  ) as HTMLInputElement;

// experience

// projects
const projectTitleElement = document.getElementById(
  "project-title"
) as HTMLInputElement;
const projectDetialsElement = document.getElementById(
  "project-details"
) as HTMLInputElement;
 
// certificates
  const addressElement = document.getElementById("address") as HTMLInputElement;
  const certificatesElement = document.getElementById(
    "certificates"
  ) as HTMLInputElement;
  const hobiesElement = document.getElementById(
    "hobies"
  ) as HTMLInputElement;
 const langaugeElement= document.getElementById(
  "languages"
) as HTMLInputElement;

// add data into array 

//  experience data  array
function addExperienceData(expTitle,expDuration,expDescription){
  const expData:any={
    title: expTitle,
    duration:expDuration,
    description:expDescription
  };
  experienceData.push(expData)
}
addExperienceData(experienceTitle.value,experienceDuration.value,experience.value);

//  projects data array
function addProjectData(projTitle,projDescription){
  const projData:any={
    title: projTitle,
    description:projDescription
  };
  projectsArr.push(projData)
}
addProjectData(projectTitleElement.value,projectDetialsElement.value);
console.log(experienceData,"experince data array");
console.log(projectsArr,"experince data array");

   
  if ( 
    pictureElement 
    // usernameUrlElement&&
    // nameElement &&
    // emailElement &&
    // phoneElement &&
    // matricEducation  &&
    // intermediateEducation &&
    // graduationEducation&&
    // mastersEducation&&
    // skillsElement &&
    // addressElement &&
    // certificatesElement &&
    // langaugeElement &&
    // hobiesElement
  ) {
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const educationMetric = matricEducation.value;
    const educationInter = intermediateEducation.value;
    const educationGraduation = graduationEducation.value;
    const educationMasters = mastersEducation.value;
    const skills = skillsElement.value;
    const titleExperience= experienceTitle.value;
    const durationExperience= experienceDuration.value;
    const descriptionExperience= experience.value;
    const projecttitle=projectTitleElement.value;
    const projectDetails=projectDetialsElement.value;
    const abouttitle= aboutTitleElement.value;
    const aboutDescription =aboutDescriptionElement.value;
    const address = addressElement.value;
    const certifications = certificatesElement.value;
    const hobies=hobiesElement.value;
    const langauges=langaugeElement.value;
    const urlByUsername=usernameUrlElement.value;
    
    // unique path 

    const uniquePath=`resume/${urlByUsername.replace(/\s+/g, '_')}index.html`
    // picture file

    const pictureFile=pictureElement.files?.[0];
    const pictureFileURL=pictureFile ? URL.createObjectURL(pictureFile) : " ";

    // resume output
    
      const certificates=certifications.split(",");
      const skillsArr=skills.split(",")
      const hobbyArr=hobies.split(",");
      const languageArr=langauges.split(",")


      
    const resumeOutput = `
       <style> 
         body{

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 0;
    margin: 20px;
    background-color:#f0f4f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* Full viewport height */
   
}  
.image-div{
    max-height: 300px;
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    
}
.image{
    width: 250px;
     height: 250px;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
    border:5px #f0f4f8 solid;
 
}
.left-side{
     
    padding-left: 2rem;
    max-width: 33%;
    background-color: black;
}

.left-side h2{
    color: floralwhite;
    
    font-size: 26px;
     
 }
.left-side h3{
    text-align: left ;
    font-size: 23px;
    margin-bottom: -0.5rem;
    color: white;
     
}
.contacts-resume hr{
    border:  1px solid white;
}

.contacts-resume{
    padding-bottom: 1rem;
}
.contacts-resume p{
 font-size: 20px;
  color: rgb(222, 219, 219);
  font-weight: 600;
  margin-bottom: -5px; 
}
.contacts-resume p span{
 font-size: 18px;
  color: rgb(255, 255, 255);
  font-weight: 600;
  padding: 1px;
  
}
.resume-skills h3{
    font-size: 23px;
}
.resume-skills ul li{
    font-size: 18px;
    line-height: 0.7rem;
    color: white;
   }
.resume-skills hr{
    border:  2px solid whitesmoke;
}

.resume-hobbies  h3{
    font-size: 23px;
   }

   .resume-hobbies ul li{
    font-size: 18px;
    line-height: 0.7rem;
    color: white;
   }
   .resume-hobbies hr{
    border:  2px solid whitesmoke;
}

.certificates-resume hr{
    border:  2px solid whitesmoke;
}

   .certificates-resume p{
    font-size: 18px;
     color: rgb(222, 219, 219);
     font-weight: 600;
     margin-bottom: -5px; 
     line-height: 0.7rem;

   }
/* RSEUME RIGHT SIDE */
.right-side{
    max-width: calc(100% - 33%);
    width: 100%;
    background-color: white;
    display: flex ;
    justify-content: flex-start;
    padding-left: 1.5rem;
    padding-right: 5px;
}

.right-side h2{
    padding: 5px;
   font-size:45px;
   color: black;
   text-align: center;
   padding-bottom: 5px;
   
   
}
 
.about-resume h3{
  font-size: 30px;
  margin-bottom: -10px;
  text-align: center;
  
  
}
.about-resume p{
  font-size: 16px;
  line-height: 1.2rem;
  letter-spacing: 0.8px;
   
  
  
  
}

.resume-experience h3{
    font-size: 25px;
    display: inline;
    margin-right: 4rem;
    
}
.resume-experience span{
    font-size: 18px;
    text-align: right;
    
  
}
/* rpojects */
.psojects hr{
    border:  1px solid black;
}
.projects-details h3{
     font-size: 25px;
     margin-bottom: -5px;
     
}
.projects-details p{
     font-size: 16px;
     line-height: 1.2rem;
     letter-spacing: 0.8px;
     
}

.langauges hr{
    border: 1px solid black
}
.langauges ul{
    display: flex ;
   gap: 4rem;
}

/* resume ouitput */
#resumeOutput{
    display: flex;
   
    max-width: 1000px;
    margin:auto;
    background-color: #89cce3a0;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgb(0, 0, 0,0.7);
    padding: 30px;
}
 
 
 
.resumeMain{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:100%;
    width: calc(100% -200px);
    background: rgb(1, 1, 48);
    color: white;
}
    .container{
    display: flex;
    justify-content: center;
    max-width: 1000px;
    width:100%
    align-items: center;

    }
         
       </style>
     <div class="container" >
         
              <div class="left-side">
               <div style="width :100% ">
            <div class="image-div">
            ${pictureFileURL ? `<img src="${pictureFileURL}" alt="Profile Picture" class="image">`: `<img src="${'profie.jpeg'}" alt="Profile Picture" class="image">`}
           </div>
            <h2>Muhammad Ismail</h2>
            
            <div class="contacts-resume"> 
                <h3>Contacts</h3>
                <hr>
                <p>Address: <span class="editable">${address} </span></p>
                <p>Phone: <span class="editable">${phone}</span></p>
                <p>Gmail: <span class="editable">${email}</span></p>
            
            </div>
            
            <div class="contacts-resume">
                <h3>Education</h3>
                <hr>
                <p class="editable">Matric: <span class="editable">${educationMetric} </span></p>
                <p class="editable">Intermediate: <span class="editable">${educationInter}</span></p>
                <p class="editable">Graduation: <span class="editable">${educationGraduation}</span></p>
                <p class="editable">Masters: <span class="editable">${educationMasters}</span></p>
            </div>

           
            <div class="certificates-resume">
                <h3> Certifications</h3>
                <hr>
                ${  certificates.map((cert)=>(
                  `<p class="editable">  ${cert} </p>`
                ))}
                
                
            </div>
            
             <div class="resume-skills">
                <h3 class="editable">Skills</h3>
                <hr>
                <ul>
                ${ skillsArr && skillsArr.map((skill)=>(
                           `<li class="editable"> ${skill}</li>`
                ))}
  
            </ul>
             </div>
         
             <div class="resume-hobbies">
                <h3 class="editable">Hobbies</h3>
                <hr>
                <ul>
                ${hobbyArr && hobbyArr.map((hobby)=>(
                  `<li class="editable"> ${hobby}</li>`
                ))}
            </ul>
             </div>
         </div>
     </div>
     

     <div class="right-side">
       <div style="width :100% ">
             <div id="download-link">
                <h2 class="editable">${name}</h2>
                <div class="about-resume">
                    <h3 class="editable">${abouttitle}</h3>
                    <p class="editable">${aboutDescription}</p>
                </div>
                <hr>
                <h3>WORK EXPERIENCE</h3>
                <hr>
                <!-- experiences -->
                <div class="resume-experience">
                              ${experienceData && experienceData.map((experience)=>(
                               ` <div> <h3 class="editable">${experience.title}</h3> <span>${experience.duration}</span></div>
                    <p class="editable">${experience.description}</p>`
                              ))}
                
                </div>
                <!-- projects -->
                 <div class="psojects">
                    <hr>
                 <h3>MY  PROJECTS</h2>
                    <hr>
                    <div class="projects-details" >
                            ${projectsArr && projectsArr.map((project)=>(
                           `   <h3 class="editable">${project.title}</h3>
                              <p class="editable">${project.description}</p>`
                            ))}
                       
                    </div>
                 </div>
                 
                    <div class="langauges">
                        <hr>
                        <h3>LANGUAGES</h3>
                        <hr>
                        <ul>
                        ${
                          languageArr && languageArr.map((lang)=>(
                           ` <li  class="editable">${lang}</li>`
                          ))
                        }
                          
                           
                        </ul>
                    </div>
             </div>
             </div>
         </div>
</div>
</div>
 
`;

 

// download link
const downloadLink=document.createElement('a');
downloadLink.href='data:text/html;charset:utf-8,' + encodeURIComponent(resumeOutput);
downloadLink.download=uniquePath;
downloadLink.textContent='Click here to download your resume.';
  
const resumeOutputElement = document.getElementById("resumeOutput");
if (resumeOutputElement) {
  resumeOutputElement.innerHTML = resumeOutput;
  const targetDiv = resumeOutputElement.querySelector('#download-link')
  if(targetDiv)
  targetDiv.prepend(downloadLink)
}

    editData();
  } else {
    console.error(
      "Its looks like any field is empty .Please fill out all fields"
    );
  } 

  
  
 
});

function editData(){
  const editableElement=document.querySelectorAll('.editable');

  editableElement.forEach(element=>{
    element.addEventListener('click',()=>{
       const currentElement=element as HTMLElement;
       const vurrValue=currentElement.textContent || " ";

// replacing content
if(currentElement.tagName ==='P' || currentElement.tagName==="SPAN"|| currentElement.tagName==="H2" || currentElement.tagName==="H3"){

 const input=document.createElement("input")
 input.type="text"
 input.value=vurrValue
 input.classList.add('edit-inputs')

input.addEventListener('blur',()=>{
  currentElement.textContent=input.value;
  currentElement.style.display='inline';
  input.remove();
})

 
currentElement.parentNode?.insertBefore(input,currentElement);
input.focus();

}

    })
  })


}



