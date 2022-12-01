import React, {useState} from "react";

import './FilterBar.css'


function FilterBar(){
    //selected is a state variable whcih will hold value of current selected dropdown
    const [selected, setSelected] = useState('');

    //function will set different values to state variable based on dropdown selected
    const changeSelectOptionHandler = (props) => {
        setSelected(props.target.value);
    }

    
    //diff depts for diff schools
    const baruchDepts = ['Choose...','Accounting', 'Anthropology', 'Arabic', 'Find and Performing Arts', 'Arts New Media', 'Arts', 'Asian/Asian American Studies', 'Biology',
    'Black Studies','Business Administration', 'Business International', 'Business Policy', 'Business', 'Chemistry', 'Chinese', 'Computer Information Systems', 'Comparative Literature',
    'Communications','Economics','Education','English','Environmental Science','Film','Finance','French','Seminar','Hebrew','History','Insurance','Interdisciplinary Studies', 'Italian','Japanese','Journalism','Jewish Studies','Latin American/Caribbean Studies','Latin American Studies','Law','Library Science','Management','Marketing','Mathematics','Music',
    'Operations Management', 'Operations Research','Philosophy','Physics','Portuguese','Political Science','Psychology','Public Affairs','Quantitative Methods','Real Estate','Religion Studies',
    'Sociology','Spanish','Statistics','Taxation','Theater', "Women's Studies"];

    const brooklynDepts = ['Choose...', 'Accounting', 'Africana Studies', 'American Studies', 'Anthropology and Archaeology', 'Anthropology',
    'Arabic','Arts Performing', 'Art', 'Biology', 'Business Management', 'Comm Arts, Sciences and  Disorder', 'Caribbean Studies', 'Childhood, Bilingual, Spec Ed',
    'Chemistry', 'Chinese', 'Classics', 'Computer Information Systems', 'Comparative Literature', 'Communications', 'Department of Educ Services', 'Earth Science', 'Early Childhood/ Art Ed',
    'Economics', 'Education Art', 'Childhood Education', "Children's Studies", 'Education Secondary', 'Earth and  Environmental Sciences', 'English', 'English as a Second Language', 'Film', 'Finance', 'French',
    'German', 'Greek Ancient', 'General Science', 'Honors Acad Resch Colloquim', 'Hebrew', 'Health and Nutrition Science', 'History', 'Honors Colloquium', 'Honors Seminar', 'Interdisciplinary Studies', 'Italian',
    'Japanese', 'Judaic Studies', 'Kinesiology', 'Korean','Languages','Latin','Linguistics', 'Mathematics', 'Modern Languages', 'Music', 'Philosophy', 'Physics', 'Perf and  Interact Media Arts', 'Portuguese', 'Political Science',
    'Puerto Rican/Latino Study', 'Psychology','Religion','Religion Studies','Russian','Secondary Education','Science','Sociology','Spanish','Sch Psych, Couns Leadership','Study Abroad','Sustainability Studies','Theater','TV, Radio and  Emerging Media','Urban Studies','Women and Gender Studies',];
    
    const collegeOfStateIslandDepts = ["Choose...","Spanish","Social Work","Sociology","Science","Psychology","Political Science","Physics","Physical Therapy","Photography","Philosophy","Permit",
    "Nursing","Neuroscience","Music","Medical Lab Science","Mathematics","Marketing","Management","Liberal Studies", "Linguistics","Library Studies","Languages","Latin Amer/Caribbean Studi","Italian","International Studies",
    "Information System &amp; Infomatic","Honors Seminar","History","Women, Gender/Sexuality Std","Geology",
    "Geography","French","Finance","Environmental Science","Entrepreneurship","English","Engineering Science","Electrical Engineering","Education","Education Supervision &amp; Admin","Education Specialized","Education Secondary",
    "Education Physical","Education Middle School","Education Health","Education TESOL","Education Elementary","Economics",
    "Dance","Core","Communications","Community-Based Leadership","Computer Science","Computer Information Systems","Cinema Studies","Chinese","Chemistry","Business","Business Data Analytics","Biology","Autism Spectrum Disorders",
    "Astronomy","Art","Arts Dramatic","Arabic","Anthropology","American Studies","American Sign Language","Africana Studies","Accounting"];
    
    const hunterDepts = ["Choose...","Accounting", "Anthropology Culture", "Anthropology", "Anthropology Physical", "Africana/PR/Latino St", 
    "Arabic", "Gender Literature and Arts", "Arts Integrated Media", "Art Creative", "Art History", "Art Liberal Arts", "Asian/Asian American Studies", 
    "Astronomy", "Bio-Chemistry", "Biological Sciences", "Business", "Classical Culture/Archaeology", "Chemistry", "Chinese", 
    "Computer Science", "Community Health", "Comparative Literature", "Communication Science", "Counseling", "Curriculum and Teaching", "Dance", 
    "Developmental Skills", "Economics", "Education Applied Behavior", "Education Art", "Education Bilingual", "Education Chinese", 
    "Education Dance", "Education Early Childhood", "Educ English as Second Lang", "Educational Foundation", "Health And Physical Education", "Literacy Education", 
    "Education Mental Health", "Education Rehab Counseling", "Education Specialized", "Education", "English", "Feminist Thought and Theory", 
    "Film", "French", "Geology and Geography", "Geography", "Geology", "Gender and Public Policy", "German", "Geography Technology", "Greek", 
    "Graduate Social Research", "Hebrew", "History", "Honors Seminar", "Human Biology", "Humanities", "Human Rights", 
    "Independent Study", "Italian", "Japanese", "Jewish Studies", "Latin Amer/Caribbean Studi", "Labor, Migration/Globalization", 
    "Latin", "Linguistics", "Library Science", "Macaulay Honors College", "Mathematics", "Medical Lab Science", "Media Studies", 
    "Music History And Literature", "Music", "Music Performance", "Music Theory", "Nutrition and Food Science", "Nursing", 
    "Nutrition", "Philosophy", "Physical Therapy", "Physics", "Polish", "Portuguese", "Political Science", "Psychology", 
    "Public Health", "Public Policy", "Religion Studies", "Russian Area Studies", "Russian", "Science", "School of Social Work", 
    "Sexuality", "Sociology", "Social Work", "Spanish", "Statistics", "Theatre And Cinema", "Theatre And Film", "Translation", 
    "Urban Affairs", "Urban Planning", "Urban Studies", "Ukrainian", "Women/Gender Across Cultures", "Women and Gender Studies"];
    
    const johnJayDepts = ["Choose...","Accounting","Africana Studies","American Sign Language","Anthropology","Arabic",
    "Art","Biology","Chemistry","Chinese","Criminal Justice","Forensic Computing","Correction Administration","Counseling and Human Services",
    "Communications","Computer Science","Counseling","Criminal Justice","Crim Justice International","Dramatic Arts","Economics",
    "Education Physical","Education","Emergency Services Admin","English","Environmental Justice Studies","Fire Science","Forensic Science",
    "French","German","Gender Studies","History","Honors Seminar","Humanities and Justice","Humanities","Human Rights","Interdisciplinary Studies",
    "Italian","Japanese","Latin American Studies","Law","Law and Society","Literature","Macaulay Honors College",
    "Maintenance of Matriculation","Mathematics","Music","Philosophy","Physics","Portuguese","Political Science",
    "Protection Management","Psychology","Public Administration","Religion Studies","Science","Security","Sociology","Social Entrep and Innovation",
    "Social Science Research","Spanish","Statistics","Toxicology","Undergraduate Studies"];
    
    const lehmanDepts = ["Choose...","Accounting","Africana Studies","American Studies","Ancient Culture","Anthropology","Arabic",
    "Art","Art History","Astronomy","Biology","Business Administration","Business","Chemistry","Chinese","Computer Graphic Imaging",
    "Computer Information Systems","Computer Science","Dance","Dietetics/Food/Nutrition","Disability Studies","Economics",
    "Education Bilingual","Childhood Education", "Education Cooperative", "Education Counselor", "Education Early Childhood", "Leadership Education",
    "Middle and High School Educ","Education Reading","Education Specialized","English","English as a Second Language","Environmental Science",
    "Exercise Science","Film","French","Geography","Geology","Geography Physical","General Studies","Health Services Administration","Health Science",
    "History Ancient","History Modern European","History","History United States","History World","Human Rights and Peace Studies","Humanities",
    "Individualized BA Program","Interdisciplinary Studies","Italian","Journalism","Latin Amer/Caribbean Studi","Languages",
    "Lehman Scholars Program","Linguistics","Macaulay Honors College","Mathematics","Middle Eastern Studies","Media Communications","Music",
    "Natural and Social Sciences","Nursing","Philosophy","Physics","Political Science","Psychology","Recreation",
    "Rehabilitation","Sociology","Social Work","Spanish","Speech and Theatre","Speech and Voice","Theater","World Classics","Women's Studies"];
    
    const cityTechDepts = ["Choose...","Accounting","African American Studies","American Sign Language","Anthropology",
    "Arabic","Architectural Technology","Art History","Biomedical Informatics","Biological Sciences","Business Merchandising",
    "Business","Business and Tech of Fashion","Chemistry","Chinese","Computer Systems Technology",
    "Communication Design","Communications","Construction Technology","Dental Hygiene","Economics","Teacher Education","Computer Engineering Tech",
    "Mechanical Engineering Tech","Electrical Engineering Tech","Electromechanical Engg Tech","Emerging Media Technology","English",
    "English as a Second Language","Entertainment Technology","Environmental Control Tech","Environmental Science","Facilities Management",
    "French","Geography","Government","Health Services Administration","Health Science","History","Health Education","Hospitality Management",
    "Human Services","Intro to College Life","Industrial Design Technology","Languages","Latin American Studies","Law and Paralegal Studies",
    "Library Science","Mathematics Education","Maintenance of Matriculation","Marketing","Mathematics","Music","Nursing",
    "Ophthalmic Dispensing","Performing Arts","Philosophy","Physics","Psychology","Radiologic Technology","Restorative Dentistry","Social and Behavioral Sciences",
    "Sociology","Spanish","Telecommunications","Theater","Workshop"];
    
    const queensDepts = ["Choose...", "Accounting","Africana Studies","Anthropology","Arabic","Art History","Art Studio","Asian/Asian American Studies",
    "American Sign Language","Astronomy","Bio-Chemistry","Biology","Business and Liberal Arts","Business","Chemistry",
    "Chinese","Classics","Classical, Mid East/Asian Lang","Computer Science","Comparative Literature","Counselor Education",
    "Data Analysis","Dance","Design","Developmental Skills","Drama and Theatre","East Asian Studies","Economics","Education Cooperative",
    "Educ/Instructional Leadership","Education Secondary","Elementary/Early Childhood Edu","English","European Studies","Environmental Science",
    "Family/Nutrition/Exercise Sci","French","Geology","German","Greek","Greek Modern","Hebrew","History","Italian-American Studies",
    "Interdisciplinary Studies","Italian","Jazz","Jewish Studies","Korean","Languages","Latin American Studies","Labor Studies",
    "Library","Linguistics","Library Science","Mathematics","Media Studies","Music","Philosophy","Photography","Physics",
    "Portuguese","Political Science","Psychology","Religion Studies","Russian","School Psychology","SEEK","Sociology",
    "Spanish","Special Education","Student Personnel","Urban Studies","Women and Gender Studies"];
    
    const cityCollegeDepts = ['Choose...', "Women's Studies",'World Humanities','World Civilization','Weighted Instructional Units','Urban Studies','Theater','Sustainability Studies','Study Abroad','Speech','Spanish','Social Science','Sociology'
    ,'Science','Public Affairs','Psychology','Political Science','Portuguese','Physics','Philosophy','Permit','Music','Military Science/Leadership','Media','Medicine' ,'Mathematics' ,'Maintenance of Matriculation','Library Science','Latin'
    ,'Latin American Studies','Jewish Studies','Japanese','Italian','Interdisciplinary Studies' ,'International Studies','International Relations' ,'Honors Seminar','History','Hebrew','Freshman Orientation/ Seminar','French','English as a Second Language','English','Engineering Science'
    ,'Engineering','Mechanical Engineering','Electrical Engineering' ,'Civil Engineering' ,'Chemical Engineering','Biomedical Engineering','Education','Education Specialized','Education Secondary','Science Education','Education Physical','Education Mathematics'
    ,'Leadership Education','Education English','Childhood Education','Education Biomedical','Education Biology','Education Art','Economics','Earth Science','Comparative Literature','Computer Science','Computer Information Systems','Classics','Chinese'
    ,'Chemistry','Black Studies','Biology','Astronomy','Asian/Asian American Studies','Art','Architecture Landscape','Architecture','Architectural/Environ Std','Arabic','Anthropology'];
    
    const yorkDepts = ["Choose...","Accounting","Anthropology","Arabic","Fine Arts","Astronomy","Aviation Management","Bengali",
    "Biology","Biotechnology","Black Studies","Business Administration","Chemistry","Chinese","Clinical Laboratory Science","Clinical Trial Management",
    "Computer Science","Communications Technology","Creole","Cultural Diversity","Developmental Skills","Economics","Education",
    "English","English as a Second Language","Environmental Health Science","Finance","French","Geology","Gerontological Std/Services",
    "Health Science","History","Health Education","Health Prof General Core","Humanities","Interdisciplinary Studies","Italian",
    "Journalism","Marketing","Mathematics","Military Science/Leadership","Movement Science","Music","Nursing", "Occupational Therapy",
    "Physician Assistant","Physical Education","Philosophy","Physics","Pharmaceutical Science","Political Science","Puerto Rican Studies",
    "Psychology","Public Health","SEEK","Sociology","Social Work","Spanish","Spch Communication/Theat Arts","Student Development","Theater","World Literature","Writing",];


    //diff class numbers for diff depts
    const classNumber = [];



    let type = null;

    let options = null;

    if(selected === 'Baruch College'){
        type = baruchDepts;
    }
    else if(selected === 'Brooklyn College'){
        type = brooklynDepts;
    }
    else if(selected === 'College of Staten Island'){
        type = collegeOfStateIslandDepts;
    }
    else if(selected === 'Hunter College'){
        type = hunterDepts;
    }
    else if(selected === 'John Jay College'){
        type = johnJayDepts;
    }
    else if(selected === 'Lehman College'){
        type = lehmanDepts;
    }
    else if(selected === 'NY City College of Technology'){
        type = cityTechDepts;
    }
    else if(selected === 'Queens College'){
        type = queensDepts;
    }
    else if(selected === 'City College of NY'){
        type = cityCollegeDepts;
    }
    else if(selected === 'York College'){
        type = yorkDepts;
    }

    if(type) {
        options = type.map((props) => <option key={props}>{props}</option>);
    }


    return(
        
        <div className="container-fluid filters">
            
            <form className="row filter_from">
                <div className="col-3">
                    <h5>School</h5>
                    <select onChange={changeSelectOptionHandler}>
                        <option>Choose...</option>
                        <option>Baruch College</option>
                        <option>Brooklyn College</option>
                        <option>College of Staten Island</option>
                        <option>Hunter College</option>
                        <option>John Jay College</option>
                        <option>Lehman College</option>
                        <option>NY City College of Technology</option>
                        <option>Queens College</option>
                        <option>City College of NY</option>
                        <option>York College</option>
                    </select>
                </div>

                <div className="col-3">
                    <h5>Department</h5>
                    <select>
                        
                        {options}
                    </select>
                </div>
            </form>
        </div>
    )
}

export default FilterBar;