var _a;
var experienceData = [];
var projectsArr = [];
console.log("resume builder");
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    var _a;
    e.preventDefault();
    // getting element by id 
    // personal informations
    var usernameUrlElement = document.getElementById('usernameurl');
    var pictureElement = document.getElementById('profilePicture');
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    // personal informations
    // education
    var matricEducation = document.getElementById("matric");
    var intermediateEducation = document.getElementById("intermediate");
    var graduationEducation = document.getElementById("graduation");
    var mastersEducation = document.getElementById("masters");
    // education
    // skills
    var skillsElement = document.getElementById("skills");
    // skills
    // experience
    var experienceTitle = document.getElementById("experience-title");
    var experienceDuration = document.getElementById("workduration");
    var experience = document.getElementById("des-experience");
    // about field description
    var aboutTitleElement = document.getElementById("about-title");
    var aboutDescriptionElement = document.getElementById("about-description");
    // experience
    // projects
    var projectTitleElement = document.getElementById("project-title");
    var projectDetialsElement = document.getElementById("project-details");
    // certificates
    var addressElement = document.getElementById("address");
    var certificatesElement = document.getElementById("certificates");
    var hobiesElement = document.getElementById("hobies");
    var langaugeElement = document.getElementById("languages");
    // add data into array 
    //  experience data  array
    function addExperienceData(expTitle, expDuration, expDescription) {
        var expData = {
            title: expTitle,
            duration: expDuration,
            description: expDescription
        };
        experienceData.push(expData);
    }
    addExperienceData(experienceTitle.value, experienceDuration.value, experience.value);
    //  projects data array
    function addProjectData(projTitle, projDescription) {
        var projData = {
            title: projTitle,
            description: projDescription
        };
        projectsArr.push(projData);
    }
    addProjectData(projectTitleElement.value, projectDetialsElement.value);
    console.log(experienceData, "experince data array");
    console.log(projectsArr, "experince data array");
    if (pictureElement
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
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var educationMetric = matricEducation.value;
        var educationInter = intermediateEducation.value;
        var educationGraduation = graduationEducation.value;
        var educationMasters = mastersEducation.value;
        var skills = skillsElement.value;
        var titleExperience = experienceTitle.value;
        var durationExperience = experienceDuration.value;
        var descriptionExperience = experience.value;
        var projecttitle = projectTitleElement.value;
        var projectDetails = projectDetialsElement.value;
        var abouttitle = aboutTitleElement.value;
        var aboutDescription = aboutDescriptionElement.value;
        var address = addressElement.value;
        var certifications = certificatesElement.value;
        var hobies = hobiesElement.value;
        var langauges = langaugeElement.value;
        var urlByUsername = usernameUrlElement.value;
        // unique path 
        var uniquePath = "resume/".concat(urlByUsername.replace(/\s+/g, '_'), "index.html");
        // picture file
        var pictureFile = (_a = pictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var pictureFileURL = pictureFile ? URL.createObjectURL(pictureFile) : " ";
        // resume output
        var certificates = certifications.split(",");
        var skillsArr = skills.split(",");
        var hobbyArr = hobies.split(",");
        var languageArr = langauges.split(",");
        var resumeOutput = "\n       <style> \n         body{\n\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    padding: 0;\n    margin: 20px;\n    background-color:#f0f4f8;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh; /* Full viewport height */\n   \n}  \n.image-div{\n    max-height: 300px;\n    max-width: 300px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    \n}\n.image{\n    width: 250px;\n     height: 250px;\n    border-radius: 50%;\n    object-fit: cover;\n    object-position: top;\n    border:5px #f0f4f8 solid;\n \n}\n.left-side{\n     \n    padding-left: 2rem;\n    max-width: 33%;\n    background-color: black;\n}\n\n.left-side h2{\n    color: floralwhite;\n    \n    font-size: 26px;\n     \n }\n.left-side h3{\n    text-align: left ;\n    font-size: 23px;\n    margin-bottom: -0.5rem;\n    color: white;\n     \n}\n.contacts-resume hr{\n    border:  1px solid white;\n}\n\n.contacts-resume{\n    padding-bottom: 1rem;\n}\n.contacts-resume p{\n font-size: 20px;\n  color: rgb(222, 219, 219);\n  font-weight: 600;\n  margin-bottom: -5px; \n}\n.contacts-resume p span{\n font-size: 18px;\n  color: rgb(255, 255, 255);\n  font-weight: 600;\n  padding: 1px;\n  \n}\n.resume-skills h3{\n    font-size: 23px;\n}\n.resume-skills ul li{\n    font-size: 18px;\n    line-height: 0.7rem;\n    color: white;\n   }\n.resume-skills hr{\n    border:  2px solid whitesmoke;\n}\n\n.resume-hobbies  h3{\n    font-size: 23px;\n   }\n\n   .resume-hobbies ul li{\n    font-size: 18px;\n    line-height: 0.7rem;\n    color: white;\n   }\n   .resume-hobbies hr{\n    border:  2px solid whitesmoke;\n}\n\n.certificates-resume hr{\n    border:  2px solid whitesmoke;\n}\n\n   .certificates-resume p{\n    font-size: 18px;\n     color: rgb(222, 219, 219);\n     font-weight: 600;\n     margin-bottom: -5px; \n     line-height: 0.7rem;\n\n   }\n/* RSEUME RIGHT SIDE */\n.right-side{\n    max-width: calc(100% - 33%);\n    width: 100%;\n    background-color: white;\n    display: flex ;\n    justify-content: flex-start;\n    padding-left: 1.5rem;\n    padding-right: 5px;\n}\n\n.right-side h2{\n    padding: 5px;\n   font-size:45px;\n   color: black;\n   text-align: center;\n   padding-bottom: 5px;\n   \n   \n}\n \n.about-resume h3{\n  font-size: 30px;\n  margin-bottom: -10px;\n  text-align: center;\n  \n  \n}\n.about-resume p{\n  font-size: 16px;\n  line-height: 1.2rem;\n  letter-spacing: 0.8px;\n   \n  \n  \n  \n}\n\n.resume-experience h3{\n    font-size: 25px;\n    display: inline;\n    margin-right: 4rem;\n    \n}\n.resume-experience span{\n    font-size: 18px;\n    text-align: right;\n    \n  \n}\n/* rpojects */\n.psojects hr{\n    border:  1px solid black;\n}\n.projects-details h3{\n     font-size: 25px;\n     margin-bottom: -5px;\n     \n}\n.projects-details p{\n     font-size: 16px;\n     line-height: 1.2rem;\n     letter-spacing: 0.8px;\n     \n}\n\n.langauges hr{\n    border: 1px solid black\n}\n.langauges ul{\n    display: flex ;\n   gap: 4rem;\n}\n\n/* resume ouitput */\n#resumeOutput{\n    display: flex;\n   \n    max-width: 1000px;\n    margin:auto;\n    background-color: #89cce3a0;\n    border-radius: 8px;\n    box-shadow: 0px 4px 8px rgb(0, 0, 0,0.7);\n    padding: 30px;\n}\n \n \n \n.resumeMain{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height:100%;\n    width: calc(100% -200px);\n    background: rgb(1, 1, 48);\n    color: white;\n}\n    .container{\n    display: flex;\n    justify-content: center;\n    max-width: 1000px;\n    width:100%\n    align-items: center;\n\n    }\n         \n       </style>\n     <div class=\"container\" >\n         \n              <div class=\"left-side\">\n               <div style=\"width :100% \">\n            <div class=\"image-div\">\n            ".concat(pictureFileURL ? "<img src=\"".concat(pictureFileURL, "\" alt=\"Profile Picture\" class=\"image\">") : "<img src=\"".concat('profie.jpeg', "\" alt=\"Profile Picture\" class=\"image\">"), "\n           </div>\n            <h2>Muhammad Ismail</h2>\n            \n            <div class=\"contacts-resume\"> \n                <h3>Contacts</h3>\n                <hr>\n                <p>Address: <span class=\"editable\">").concat(address, " </span></p>\n                <p>Phone: <span class=\"editable\">").concat(phone, "</span></p>\n                <p>Gmail: <span class=\"editable\">").concat(email, "</span></p>\n            \n            </div>\n            \n            <div class=\"contacts-resume\">\n                <h3>Education</h3>\n                <hr>\n                <p class=\"editable\">Matric: <span class=\"editable\">").concat(educationMetric, " </span></p>\n                <p class=\"editable\">Intermediate: <span class=\"editable\">").concat(educationInter, "</span></p>\n                <p class=\"editable\">Graduation: <span class=\"editable\">").concat(educationGraduation, "</span></p>\n                <p class=\"editable\">Masters: <span class=\"editable\">").concat(educationMasters, "</span></p>\n            </div>\n\n           \n            <div class=\"certificates-resume\">\n                <h3> Certifications</h3>\n                <hr>\n                ").concat(certificates.map(function (cert) { return ("<p class=\"editable\">  ".concat(cert, " </p>")); }), "\n                \n                \n            </div>\n            \n             <div class=\"resume-skills\">\n                <h3 class=\"editable\">Skills</h3>\n                <hr>\n                <ul>\n                ").concat(skillsArr && skillsArr.map(function (skill) { return ("<li class=\"editable\"> ".concat(skill, "</li>")); }), "\n  \n            </ul>\n             </div>\n         \n             <div class=\"resume-hobbies\">\n                <h3 class=\"editable\">Hobbies</h3>\n                <hr>\n                <ul>\n                ").concat(hobbyArr && hobbyArr.map(function (hobby) { return ("<li class=\"editable\"> ".concat(hobby, "</li>")); }), "\n            </ul>\n             </div>\n         </div>\n     </div>\n     \n\n     <div class=\"right-side\">\n       <div style=\"width :100% \">\n             <div id=\"download-link\">\n                <h2 class=\"editable\">").concat(name_1, "</h2>\n                <div class=\"about-resume\">\n                    <h3 class=\"editable\">").concat(abouttitle, "</h3>\n                    <p class=\"editable\">").concat(aboutDescription, "</p>\n                </div>\n                <hr>\n                <h3>WORK EXPERIENCE</h3>\n                <hr>\n                <!-- experiences -->\n                <div class=\"resume-experience\">\n                              ").concat(experienceData && experienceData.map(function (experience) { return (" <div> <h3 class=\"editable\">".concat(experience.title, "</h3> <span>").concat(experience.duration, "</span></div>\n                    <p class=\"editable\">").concat(experience.description, "</p>")); }), "\n                \n                </div>\n                <!-- projects -->\n                 <div class=\"psojects\">\n                    <hr>\n                 <h3>MY  PROJECTS</h2>\n                    <hr>\n                    <div class=\"projects-details\" >\n                            ").concat(projectsArr && projectsArr.map(function (project) { return ("   <h3 class=\"editable\">".concat(project.title, "</h3>\n                              <p class=\"editable\">").concat(project.description, "</p>")); }), "\n                       \n                    </div>\n                 </div>\n                 \n                    <div class=\"langauges\">\n                        <hr>\n                        <h3>LANGUAGES</h3>\n                        <hr>\n                        <ul>\n                        ").concat(languageArr && languageArr.map(function (lang) { return (" <li  class=\"editable\">".concat(lang, "</li>")); }), "\n                          \n                           \n                        </ul>\n                    </div>\n             </div>\n             </div>\n         </div>\n</div>\n</div>\n \n");
        // download link
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset:utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Click here to download your resume.';
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            var targetDiv = resumeOutputElement.querySelector('#download-link');
            if (targetDiv)
                targetDiv.prepend(downloadLink);
        }
        editData();
    }
    else {
        console.error("Its looks like any field is empty .Please fill out all fields");
    }
});
function editData() {
    var editableElement = document.querySelectorAll('.editable');
    editableElement.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var vurrValue = currentElement.textContent || " ";
            // replacing content
            if (currentElement.tagName === 'P' || currentElement.tagName === "SPAN" || currentElement.tagName === "H2" || currentElement.tagName === "H3") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = vurrValue;
                input_1.classList.add('edit-inputs');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
