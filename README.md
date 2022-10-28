# TechPrep_Project

[Change to your Project Name]


Team Members and Roles
Justin John 
justinj9805@gmail.com
GitHub: https://github.com/JustinJ9805
School: CUNY Hunter College
Edward Fuentes
edwardfuentes588@gmail.com
GitHub: https://github.com/edwardfue
School: CUNY Lehman College 
Yevgeniy Kizhner
yevgeniy.kizhner@gmail.com
GitHub: https://github.com/wanderer1599
School: Brooklyn College


Overview
On top of going into crippling debt to pay for a degree, students are expected to dish out hundreds and hundreds of dollars over the course of 4 years on textbooks that will see very little use, if any at all.  We are aiming to create an ecommerce site which would allow people to buy and sell their used textbooks or even loan it out! 
Our users consist of college students so they will act as both buyers and sellers. As a seller, they will be able to create listings for textbooks including the condition and pictures of the book. Buyers will be able to browse through listings to find the book they are looking for and are able to filter by area, condition, edition number, etc. Sellers will also have the option to loan the book out for the semester instead if they don’t wish to sell it- much similar to selling, it would still require a listing and noting of any existing damage. 


Goals
Allow guests to create accounts to have full access to the site

Must Haves:: 
	Allow users to create accounts to gain full access to site and complete purchase or create listing
	Be able to create listings for sales or loans
	Be able to filter by college and class to find required books/notes
	Be able to search for book by author, title, isbn
	
Nice to Haves:: 
	Allow users (buyers and sellers) to review each other - did the buyer return a loan in a worse condition? Did the seller sell an item that did not meet expectations?
	Allow bookstores access as well and allow them to sell pdf versions of books they are allowed to sell and any other pertinent info (such as codes needed for software)
	Expand outside CUNY schools and allow others to use the platform as well- allow listings for notes to be filtered by college and class number
	Payment processing(? - might be hard lol)


Non-goals
List out things that you agreed won’t be goals this semester. You can’t solve every problem
Lets see what happens lol
Technical Architecture
List of Pages
Login Page /login
Signup Page /signup
Home page
Purchase page
Search page
Page for students to sell their own used textbooks to other students
...


//Mockups of each page//

Add pictures and diagrams of the pages you wish to build. Annotate them and make google docs comments on them to discuss technical aspects of each page


//API Routes//

List api routes and what you expect to send and receive to each route

GET /api/zip/:zipCode
search for zip code in our db
send back json with zip data { cityName: "xyz", state: "NY", … }
send 404 if zipcode not found
POST /api/blogs
expects json with title and body keys

Database Models

List database models/tables and associations you need.

3rd Party API’s

List any 3rd party api integrations. Where will this be added (page or api route) and how will they be used
Milestones/Meeting Notes
Demo Night is December 14, what do you plan to accomplish at specific milestones? (adjust dates so it works for your team)

Milestone 1: Oct 6
first round of page mockups (be specific about which pages)
Design api routes necessary
Milestone 2: Oct 20


Milestone 3: November 3


Milestone 4: November 17


Milestone 5: December 1


Milestone 6: December 8
Deploy beta version
Demo Night: December 14
Add mock data to database
Add stock images
Polish css
Complete about-us section 

Open Questions
List any questions and decision points that the team was not able to answer. Maybe list the hardest part of the application.

Research and track possible solutions for a later decision
