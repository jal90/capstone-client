Mechanic Mate

An app to help you keep track of maintenance on your vehicles
Log in and create a vehicle with some basic information, then create
many 'works' for that vehicle, which will log the type of work, and the date
and mileage during which it happened.

Live site: https://jal90.github.io/capstone-client/
API repo: https://github.com/jal90/capstone-api
Server: https://jal90-capstone-api.herokuapp.com/

Tech used: Ember JS Handlebars Node Grunt Git

Future iterations may include:
  Download a PDF of your works list
  Add a price to a work, to log cost of parts/labor
  Create work histories under one header, ex: instead of seeing multiple works
    called 'oil change', seeing one work called oil change that displays the date
    and mileage of the most recent oil change, yet you could click on oil change
    and see an entire history of past oil changes. This would de-clutter the main UI
  Auto-updating of mileage. Ex: if you log a work with a higher mileage than your
    vehicle mileage, give a user a non-intrusive warning that their vehicle mileage
    is out of date. OR give them the option to have the vehicle mileage update
    if they log a work with higher mileage. That way they'd never have to manually
    update vehicle mileage after logging new works.
  Add a footer, and have a mailto link that opens in a new window rather than redirecting
    away from the page.

Process:
  Started with user stories to get an idea of what the app would do.
  Then did ERD, since I needed to know what my page would be rendering.
  Then made detailed (for me) Wireframes that showed all the key elements of the page
  After that, coded one route/component at a time, sending data down and actions up,
  debugging each feature before moving to the next.
My problem solving strategy included being active on the issue queue, thorough experimentation,
  and a lot of time spent on the Ember docs website and stackoverflow.com

Wireframes and ERDs: https://imgur.com/a/tCHWP

![alt text](https://i.imgur.com/t22xTJS.png "Vehicles view")

Got regex for mileage helper from https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript

User stories:
As a user I want to log in and see my vehicles.  Want to be able to create one

Want to see vehicle mileage, make model year, then maintenance data like last oil change, last valve clearance check, etc etc, by creating new fields with name of work, date and mileage.

Nice to have: want to be able to import images. Pics for my vehicles, and also a pic of the maintenance sheet for reference

many more nice to haves:

also log "next oil change at:" etc. With a target mileage and date
then if user logs current mileage above any 'next maintenance' or if they date goes by a message will pop up

As user, want to catalog any work I paid for. if oil change cost $20 that's easy. But more often, several things will be billed together.
as user want to catalog what brand + part I used. No more wondering which oil filter I put in

Have some work stuff seeded for potential columns like oil change and valves,
so that as a user I don't need to create all this boilerplate for all of my vehicles.
