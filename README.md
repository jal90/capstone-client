# Mechanic Mate 1.0

An app to help you keep track of maintenance on your vehicles.

Log in and create a vehicle with some basic information, then create many 'works' for that vehicle, which will log the type of work, and the date and mileage during which it happened.

#### Live site: https://jal90.github.io/capstone-client/

#### API repo: https://github.com/jal90/capstone-api

#### Server: https://jal90-capstone-api.herokuapp.com/
<br>

###### Tech used: Ember JS Handlebars Node Grunt Git

### Future iterations may include:
*  Download a PDF of your list
*  Add a price to a work, to log cost of parts/labor
*  Add columns for part names/brands - no more guessing
    which brand/size filter is the one that fits your vehicle.
*  Create work histories under one header, ex: instead of seeing multiple works
    called 'oil change', seeing one work called oil change that displays an entire history of past oil changes. This would de-clutter the main UI (yet would require re-working entire database, and would not be friendly to the pricing option, because price is usually logged for many works together, so an oil change might only be a fraction of the cost. This would require users to look at itimized receipts.)
*  Auto-updating of mileage. Ex: if you log a work with a higher mileage than your
    vehicle mileage, give a user a non-intrusive warning that their vehicle mileage
    is out of date. OR give them the option to have the vehicle mileage update
    if they log a work with higher mileage. That way they'd never have to manually
    update vehicle mileage after logging new works.
*  Add a footer, and have a mailto link that opens in a new window.
* Add option to send emails/alerts for upcoming maintenance, to help users be pre-emptive with their maintenance.
* Create maintenance boilerplate - basic works that most vehicles will need, to save users from having to create all columns from scratch.
* Adding pictures to site, so users can upload images of their vehicles, or the vehicles' maintenance sheets for reference.

Process:
  Started with user stories to get an idea of what the app would do.
  Then did ERD, since I needed to know what my page would be rendering.
  Then made detailed (for me) Wireframes that showed all the key elements of the page
  After that, coded one route/component at a time, sending data down and actions up,
  debugging each feature before moving to the next.
My problem solving strategy included being active on the issue queue, thorough experimentation,
  and a lot of time spent on the Ember docs website and stackoverflow.com

Wireframes and ERDs: https://imgur.com/a/tCHWP

![alt text](https://i.imgur.com/XQObi5H.png "Splash page")

Got regex for mileage helper from https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript


### User stories:
As a user I want to log in and see my vehicles.  Want to be able to create one

Want to see vehicle mileage, make model year, then maintenance data like last oil change, last valve clearance check, etc etc, by creating new fields with name of work, date and mileage.
