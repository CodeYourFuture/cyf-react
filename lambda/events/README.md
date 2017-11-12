### User Stories
 - As a mentor, i need to view the date and location of upcoming events so that i can schedule my attendance
 - As a mentor, I need to login via github
 - As a mentor, I need to sign up to an event so that CYF will know I am attending
 - As a mentor, I need to see what subjects / part of syllabus will be covered in the event so that I can be sure I am ready to teach it.

 - As an organiser, I need to create an event for a city so that mentors can sign up and get details of the class
 - As an organiser, I need to be able to see which mentors will be attending

Github api has teams for mentors and students already, so we could use that

 - Location - Red Badger (inc googlemap)
 - City  - London
 - Class  - September 2017 (Class 3)
 - Date  - Sunday 12th November 2017
 - Mentors - Matt, Kash, Mishal
 - Sponsors - Github, Red Badger
 - Details - Js Core 1 topics etc

### Serverless
 - sls invoke --function create --path mocks/create-event.json
 - sls invoke --function get --path mocks/get-event.json
 - sls invoke --function list --path mocks/list-event.json
 - sls invoke --function update --path mocks/update-event.json
 - sls invoke --function delete --path mocks/delete-event.json

## Notes from Kash...
### Current issues
 - Course organisers are not certain who definitely available each Sunday
 - Mentors are not sure which Sunday needs support more, as sometimes too many mentors show up
 - Current version at the events page has some basic functionality but lacks design/UX
 - Current version lists all events in one list, without any filters for different cities etc

### MVP
 - Anyone can view upcoming events in any of the cities, who is coming and sign up
 - Have an admin view to confirm who is a mentor/ who can add events (should be solved by Github auth?)

### Ideal / Future
 - Be able to have a course page where you can see all the modules and who is leading them and how many volunteers have committed
 - Send thank you for attending + feedback form to all those who attended a class
 - Be able to get a report of which mentors lead/attended which modules, be able to send them feedback form. Could tie attendanc to mentors page so that it is easy for students and coaches to see profiles of mentors
 - Keep attendance of students and be able to get feedback from students who attended a class
 - Student Profiles for mentors to be able to get to understand a students background and what prior experience they have to better mentor them.

### Reference
Codebar sign-up process: the first UI is a bit confusing but the overall process it’s very straightforward

