Getting Started
Journal
Get a nice journal and a comfortable pen, and start keeping a daily journal of what you are learning every day. Writing your thoughts on a regular basis increases your ability to remember it. There are even studies that found writing is beneficial for your health.

Hardware
Up until now, you didn't have the power to destroy your machine, but within the first two weeks of attending Nashville Software School you will have that power. Go buy a backup drive RIGHT NOW and start backing up your entire hard drive.

Seriously, right now!

Browser - Google Chrome
Google Chrome is the most popular browser for web developers because of the powerful tools it provides to test code, manipulate documents, and measure performance.

Download Google Chrome, and then make it your default browser.

Online Services

GitHub
GitHub is the primary site that software developers throughout the world use to store their code, and share it with other developers. Visit the sign up page and create your own, free account.

NOTE: When creating your GitHub account, be mindful of the fact that potential employers will be viewing your profile when you apply for jobs, so keep it professional.
dbdiagram.io
Sign up on dbdiagram.io and bookmark the site.

devdocs.io
Bookmark the devdocs.io site. It contains documentation for nearly everything you will be learning during your time here at NSS.

Installations
Visual Studio Code
Visit the Visual Studio Code website to download and install the code editor. This is the editor you will be using for the next 6 months.

Git Bash (i.e. the terminal)
Later in the instructions, we will ask you to type a command into your terminal. For Windows, this is the Git Bash application.

Visit the Git Bash download page click the "Download for Windows" button, and once complete, install the software.

Windows Terminal Preview
Visit the Windows Terminal Preview download page and open it in the Microsoft Store App. This will be your default terminal which you will use to navigate your file system, and run development tools throughout the course.

Once Windows Terminal Preview is installed:

Go to the Start menu (Windows key)
Search for Windows Terminal Preview
Open Windows Terminal Preview
By default, this will open a new PowerShell terminal window. Do not use the PowerShell terminal window.
Click the down arrow ﹀ located at the top of the terminal window.
Select Git Bash from the dropdown menu to start a new Git Bash terminal window.
NOTE: Always use Git Bash, not PowerShell.
Node
Visit the Node.js site and click on the install button that has "LTS" in it. Once you download the software, install it, accepting all of the defaults along the way.

Node Packages - Web and API Servers
Open Windows Terminal Preview and start a new Git Bash terminal window.

Run the following command in the terminal to install both serve and json-server:

npm i -g serve json-server
You will be using serve and json-server to run simple servers for various purposes in this course.

Configuring Git
NOTE: This step requires your GitHub username and email.
If you have not yet registered for a GitHub account, do that first.
Watch the video on how to set up global Git configuration using your GitHub username and the email address associated with your GitHub account. This will allow you to successfully back up your code to GitHub in a few days... once we show you how to do it.

SSH Key
SSH is a technology that allows you to create a very secure connection between your computer, and a computer located somewhere else in the world. It's an acronym for Secure SHell. When you create an SSH key on your computer, it actually creates two files:

A public key file that you share with other people and computers. It is usually named id_rsa.pub.
A private key file that you never, ever, ever, ever, ever share with anyone. It is usually named id_rsa.
Creating Your SSH Key
Watch a short video for creating an SSH key in the terminal so that you an work with GitHub.

Add SSH Key to GitHub Account
Now watch the video for adding your SSH key to your GitHub account.

Command Line Interface - The Terminal
Becoming comfortable with your terminal will make you a master of the computer.

Basic Commands
cd - change directory.
pwd - print working directory; show where you are.
mkdir - make directory.
ls - list contents of a directory.
clear - clear the view.
touch - create file.
cat - read the contents of a file.
cp - copy files and directories.
mv - move files and directories.
rm - remove a single file
rm -rf - remove a directory and all of its contents
Videos to Watch
Bash Basics Part 1 of 8 | Access and Navigation
Beginner's Guide to the Bash Terminal
The Most Important Thing You'll Learn in the Command Line
Go through the CodeAcademy command line course.
Shell Scripting Tutorial
Practice: Aquarium Directory & Files
Before you start writing code for any application, you want to set up the directory structure and create some initial files on the file system first. During this first book of the NSS course, you are going to build a web page to track the inventory of a rare fish aquarium.

You can watch the Martin's Aquarium Directories and Files video that will also show you the basic terminal commands to use for this.

Since all of the work you will be doing at NSS will be contained in the ~/workspace directory, you need to create a martins-aquarium subdirectory.

{home directory}
    +-- workspace
        +-- martins-aquarium
Once the directory is created, you need to create the HTML file and the CSS file. The standard name for the initial HTML for any web site is index.html. Go ahead and cd into the ~/workspace/martins-aquarium directory if you aren't there already.

Create the file with the following command.

touch index.html
Next, create a styles subdirectory and create a file named main.css in it.

Then cd .. to go up one directory level. Create another subdirectory named scripts and create a file named main.js in it.

Challenge: Creating Content in a File
NOTE: Throughout the course, you will find Challenges and Advanced Challenges. These are completely optional exercises that you can choose to do. All we ask is that you complete all of the regular practice exercises before attempting to take on a challenge.

If your instruction team has moved on to a new chapter or topics, it is far more important to work on the current practice exercises for that new topic than spending more time on a previous challenge.

During your career, you will be using powerful and extensible code editors like Visual Studio, IntelliJ, Webstorm, Eclipse, and many others to create your code. However, there are times that you want to put just a couple lines of code or a comment in a file and you don't want to fire up your powerful editor just to do that.

Read the will-written answer to a question on the Stack Exchange website and see if you can figure out how to get the following CSS code into the main.css file without using Visual Studio Code, but the echo command instead.

#fishtank {}

.fish {}

.fish__name {}
Advanced Challenge: Terminal Welcome Message
NOTE: Advanced challenges are only to be attempted once the practice exercises are complete and you feel you both (a) a solid grasp on the basic knowledge of the current topic, and (b) you have adequate time to devote to them. They are intended to be difficult to solve and you must spend time researching it before any instructor will offer guidance.

The terminal can do everything that all of your other applications you have, or ever will have, can do. There's just not a visual interface for doing it. It's all just text.

In this advanced challenge, you should research bash variables, bash aliases, and find out how to customize your zsh (.zshrc) or bash (.bashrc) intialization script to have a welcome message show up every time your launch a terminal session.

welcome message in the terminal

Helpful searches to get you started:

https://duckduckgo.com/?q=bash+my+username&ia=web
https://duckduckgo.com/?q=bash+current+day&ia=web
https://duckduckgo.com/?q=bash+display+calendar&ia=web
https://duckduckgo.com/?q=bash+script+for+beginners&ia=web
https://github.com/robbyrussell/oh-my-zsh

HTML Components
Why Are You Learning This?
Thinking of applications and web page as a collection of independent components is the foundation of modern web applications that you use all the time.

Snapchat
Instagram
Twitter
Facebook
Etsy
Pinterest
All of these applications are written by teams of software developers who define the individual components that are used throughout their application. They then write each component separately and then compose them in interesting ways and make them work together.

Visual Review of Semantic Elements
What is a component and how do HTML elements apply to the concept? Look at the image below to see an overview of semantic HTML elements and how they are intended to be used together.

semantic tags

CSS Naming Conventions
Styling components intelligently can be handled through naming your classes according to the component name. One popular convention is the BEM method.

If you were creating an HTML component that represents you, here's an example of how the code would look using HTML semantic elements and BEM class names.

<main>
    <!-- Parent biography component -->
    <article class="bio">

        <!-- Child biography component -->
        <section class="bio__name">
            <h1>Sally Forthwright</h1>
        </section>

        <!-- Child biography component -->
        <section class="bio__address">
            100 Infinity Way, Nashville
        </section>

        <!-- Child biography component -->
        <section class="bio__interests">
            <div class="interest">
                Oyster harvesting
            </div>
            <div class="interest">
                Juggling
            </div>
            <div class="interest">
                Triathlons
            </div>
        </section>

    </article>
</main>
Each of those components can be styled individually with a clear, concise name that also provides some semantic context when looking at the CSS file. Before you style them, all you have is structure as some very basic, default styles that the browser applies to your elements.



Now you can style any HTML component with a class of interest and they will all look the same.

.interest {
    border: 1px dotted crimson;
    padding: 1em;
    margin: 0.5em;
}


Grid Layout with Flexbox
Flexbox is a tool that you can use in CSS to take the structure of your HTML and apply interesting layouts for it. One of the most common layout types is a grid, and it's straightforward to do with Flexbox.

Unfortunately, these Flexbox properties are hard to remember, so you should come back to this chapter and review them whenever you need to use Flexbox to make a grid layout.

You want those three interests to be all in the same row instead of each one being an entire row all by itself. The first thing you need to do is apply a style to the component in which all of those interests are contained. In your case, it's the <section class="bio__interests"> component.

.bio__interests {
    display: flex;  /* Display the child items in a Flex layout */
}


The display: flex property on a parent component immediately creates a row and puts all of the child elements in it. However, you're not quite done.

Add some more interests for Sally.

<div class="interest">
    Killing ants
</div>
<div class="interest">
    Melting stuff
</div>
<div class="interest">
    Coloring
</div>
<div class="interest">
    Sleeping
</div>
<div class="interest">
    Singing
</div>


The default behavior is to put all child components into a single row, so you eventually run out of room if there are too many. You need to tell the browser that you want it to figure out how many can fit in a row and to create a new row when there's no more room.

.bio__interests {
    display: flex;
    flex-wrap: wrap;  /* Let the rows wrap if there are too many */
}


Close, but you may not like that the rows are not aligned. The browser stops at figuring out how many will fit in the row. You have to provide the instructions for how to align them.

.bio__interests {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly; /* Evenly space the child elements */
}


Sooooooo close, but the boxes aren't all the same size which is distracting noise to the human brain. We find it much more pleasing when things line up evenly.

.interest {
    flex-basis: 16%;  /* Make each child element the same width */
    border: 1px dotted crimson;
    padding: 1em;
    margin: 0.5em;
}


The final touch is to center align the text in each of the interest boxes.

.interest {
    flex-basis: 16%;
    border: 1px dotted crimson;
    padding: 1em;
    margin: 0.5em;
    text-align: center; /* Center align the text in the boxes */
}


Additional References
HTML Semantic Tag Cheatsheet
CSS Tricks - Flexbox
CSS Tricks - BEM
Introduction to BEM - A front-end methodology
Practice: Coffee Houses of Nashville
The learning objective for this practice exercise is to use display:flex on a list component, and then add additional CSS properties to achieve a desired layout.

<header class="pageHeader">Coffee Houses of Nashville</header>

<section class="list">
  <article class="shop">The Jam</article>
  <article class="shop">The Well</article>
  <article class="shop">Red Bicycle</article>
  <article class="shop">Crema</article>
  <article class="shop">Frothy Monkey</article>
  <article class="shop">8th &amp; Roast</article>
  <article class="shop">Bongo Java</article>
  <article class="shop">Flatrock</article>
  <article class="shop">Fido</article>
  <article class="shop">Steadfast Coffee</article>
  <article class="shop">Dose Coffee</article>
  <article class="shop">Sam &amp; Zoes</article>
  <article class="shop">Slow Hand Coffee</article>
  <article class="shop">The Horn</article>
</section>
From that HTML, use Flexbox to achieve this layout. You don't need to add the border to each coffee house component, but you can if you like. It's been added in this example to highlight the alignment and spacing you're shooting for.

flexbox layout

Practice: Flexbox Froggie
Flexbox Froggie - online game with 24 challenges.

Practice: Congressional Representative
You're going to create an HTML component to represent a political candidate. Specifically, the representative of your Congressional district. Visit the GovTrack site link below, enter in your home address, and you'll find basic information about your representative.

GovTrack - Congressional District Map

In your HTML, create an article element that will serve as your main representative component. Give the element a unique identifier.
In this component, create a sub-component for basic information using the section element. In this section create elements for the representative's image, name, district info, and political affiliation.
Beneath the basic information, you will create a sub-component, using a section element, to list any committees the candidate is serving on.
The last component will hold links to any legislation that your representative has enacted.
Make sure you use good BEM-style class names for each element in your components. Put a comment above each component explaining what it is.

Congressional Representative UI/UX Challenge
This is an optional challenge once you meet the requirements above. Make a new directory for this challenge.

UX CONCEPT: Web pages should be designed in such a way that they are easy to scan.

How to improve scannability?

Create visual hierarchies: What is the most important information on the page? What is supportive information? Can you use bulleted lists?
Use universally accepted conventions: These may include logo/tagline position, buttons/links, social networking options, etc.
Break a page into clearly defined sections.
Make it obvious what’s clickable.
Review the page you just created. Based on the items above, identify some opportunities to improve the UI/UX. Refactor your page to improve the usability. You may add semantic tags, content, and styles.

Background color/image - ensure the copy (text color) has good contrast and is legible. Use the Dev Tools to inspect your color choices.

dev tools

Coffee Houses UI/UX Challenge
This is an optional challenge once you meet MVP. Make a new Github branch for this challenge.

Creating visual hierarchies.

Add an address, phone number, website link, and menu link to each coffee house (you may use mock/fake data).
Each coffee house component should utilize Flexbox for the layout.
Use semantic HTML and CSS to style each coffee house component with the goal of easy scannability. Consider which semantic tags you will use for each piece of content. At a minimum, you will emphasize the name of each shop and make the links clearly clickable.
Since you are defining several styles for the coffee shop component, write the CSS in shop.css and use @import to include those styles in the main CSS file.
Background color/image - ensure the copy (text color) has good contrast and is legible. Use the Dev Tools to inspect your color choices. (see dev tool image above).

Project: Fish in my Aquarium
Let's build a couple HTML pages whose user will be an avid rare fish collector who maintains a sophisticated tank in his home. His name is Martin. Martin meets you at a local coffee shop and explains what he needs to have on his web site.

"So nice to meet you finally after all of those emails. Please, grab a chair," says Martin. He uses his leather loafer to gently nudge a chair slightly away from the table. He subtly waves his hand towards the chair in invitation.

You smile, pull the chair and out and start to slide your computer bag from your shoulder.

"Thanks, Martin."

You put your bag on the floor next to the chair and put your cup of coffee in the middle of the table, not far from Martin's. You note briefly that Martin got the largest size that the coffee shop offers, and it appears to be a latte.

"I'm glad to be able to help you build a site to track your amazing fish. When you sent me that email the other day listing all the ones that you have collected, I spent all night researching them. It was fascinating!" you exclaim.

Martin smiles widely, obviously pleased that you appreciate his achievements with his hobby.

You continue to pull your notebook and a pen out of your bag, and ask, "So you said that you wanted multiple sections on your site - one that lists the fish you currently own, and another one that lists all the places that you've visited to collect the fish..."

"Harvest the fish," Martin interjects with a forced smile.

"Sorry, where you harvested the fish." You restrain an eye roll.

You shift in your seat because the hard, wooden chairs are already becoming uncomfortable, and continue, "Is there anything you've thought of based on the example sites I sent you?"

Martin leans forward and put his hands on the table, "Actually yes. On the 'Fish Upon A Star' site, they had this content on the right side of the list of fish that explained the process of keeping the tank clean and the water at the right salinity and temperature. I'd love to have that so I can put my thoughts in there."

You take notes as he talks and make sure that you jot down the you will need an <aside> element on that page.

"All the sites had a navigation bar at the top. I'd like to have a navigation bar. Were you planning on having a navigation bar?" It's clear the way Martin places an emphasis on navigation bar that he's proud that he knows what that's called.

You smile slightly and say, "For you, I don't think it's needed since all the information is going to be on one page."

Martin frowns quickly, but recovers and says, "Hm, I suppose. Well, just make it look clean and minimal. Maybe when there is more information in the future, I can have you add another page and then I can have a navigation bar."

"Martin's been doing a little research on web stuff," you think as you pointedly write down 'Nav bar in future?' in your notes.

He patiently waits for you to finish jotting down these important notes, and then says, "Lastly, the 'Buoys and Gills' site had a part that listed travel tips for people who love to scuba and harvest fish. On the page that lists all of the out-of-the-way places I've visited, I would like to provide a few quotes to help people."

"Where would you like that to appear?" you ask briskly.

Martin responds, "Right above the list of locations."

You note that in your journal, then ask, "Ok, I just want to make sure I get this right for you. The details of each fish should include the image, the species, its length, what you named the fish, where you harvested it, and what it eats... is that all correct?"

"That sure is," he says confidently and leans back in his chair with his arms behind his head.

"Perfect!" you exclaim and then ask him if there's anything else he can think of now.

"No, I think that's enough to go on for now. Just make sure it's tasteful, since I'm fairly sure that I'll get lots of visitors to the site."

"Of course you will," you think as you smile and say, "I'll make sure all those people have a great experience on your site."

You both shake hands and you head back home to start work on the site.

Goal
Use index.html to build a web page that lists fish, quotes, harvesting locations, and fish/tank care tips on the right side of the page. You will accomplish it by first decomposing the site into smaller components, and using tools like https://sketchboard.io/ to wireframe the layout.

The more time you spend in the design stage, the less code you need to write.

Developer Vocabulary
Vocabulary: Imagine a chair. Now imagine that you have to write a poem or other paper about the chair you have in your mind. How would you describe it? It could be a tall, white chair. It could be uncomfortable. You could say when you purchased it. When you describe something, you often list its properties. A property of something is just a specific feature of that thing. In the short description above, here are the properties of the chair you were imagining.

Height
Color
Comfort level
Date of purchase
Discussion Points
What are the components?
What do you think the layout of the site should be?
What are the properties of each fish that you will be representing in your HTML?
What are the properties of the fish care tips that Martin wants on the side?
What are the properties of the locations Martin has visited?
What should be the class names for each?
Which semantic tags should you use?
How can we use Flexbox to build a better layout of fish and locations?
Which CSS files should be created? Consider the @import keyword to modularize your styling.
Time to Build
Your instruction team will lead the class through the construction of the this site. You may follow along, or you can just close your computer and watch what gets built and offer your suggestions.

Git and Github Basics
Why Are You Learning This?
As a professional developer, you will be working on a team. Modern software development is a team sport, not an individual one. Team members need the ability to write code independently, but then merge their individual code together when it's time to release a version of the software.

Git is the tool to allow a developer to work on an independent branch of the code base, and then merge in the work of others.

Github is a tool which allows you to easily share your code with other people, regardless of where they are located.

Configure Git on Your Machine
You'll need to set a name and email in your global git config file. This makes it easy to know who committed those changes!

username and email

First use the following command, but instead of typing Your Github User Name, enter your Github username for your account.

git config --global user.name "Your Github User Name"
Then use the following command, but instead of typing email@example.com, enter the email address you used when you created your Github account.

git config --global user.email "email@example.com"
Creating a Git Repository for Aquarium
Navigate to your project directory
cd ~/workspace/martins-aquarium
Type in the git init command
You now have a git repository
The magic is the .git directory that gets created when the git init command is executed. To see this directory you can use ls -la, which shows hidden files and directories. Operating systems will not show files and directories that begin with a period by default. They are considered hidden, or system assets.

Making Your First Commit
Workflow to Remember
This is the process you will be following thousands of times while you are here at NSS. You tell git to track changes first, then you commit those changes, and then upload your changes to Github.

git add --all
git commit -m "Message about commit"
git push origin master
Commit Aquarium
Time to make your first commit on your aquarium project. Make sure you are in ~/workspace/martins-aquarium and then tell git that you want to track all of your files.

git add --all
git status
Then tell git that you are ready to commit all of your code to the historical records that it keeps about your project.

git commit -m "My first version of my aquarium code"
Beginner Hint! If you accidentally type git commit and hit enter without the -m and the message, you'll be taken to a screen that will make you feel like Alice through the looking glass. If this happens, for now just come see an instructor and we'll get you back to reality safely.

git status
Now you can create a Github repository where you will upload your code.

Backing Up and Sharing Code on Github
Github is a software as a service (SAAS) that allows you to back up your repository to the cloud and share it with other software developers. Note that it is not the same thing as git, which is an application you are running locally on your machine. Github and git are made to talk to each other, but they are separate entities.

Pushing to Github
When you are ready to share your code with your teammates, or the general public, you can push your repository to Github. Think of Github as an external drive you plug into your laptop to use as backup. Instead of it backing up the entire hard drive, you will back things up, one project at a time, only when you want to.

The first thing you need to do is create a new repository on Github's platform that you will use to backup the code on your laptop.

Create Github Repo
Log into your Github account.
Click the + sign in the top right corner.
Choose "New repository".
In the "Repository name" field, enter in nss-aquarium.
Scroll down and click the green "Create Repository" button.
Copy the repository's connection string. 
Follow the second set of instructions. 
Now that the code has successfully been backed up, go back to your browser, and refresh the page. You will see that your remote repository backup now has your aquarium HTML, JavaScript and CSS files in it.

Practice: Backup Exercise
Create a Github repository for the Congressional Representative exercise, and push up that code.
Create a Github repository for the Coffee Houses exercise, and push up that code.
When you are done, you should have three new repositories in your Github account.

Aquarium
Coffee Houses
Congressional Representative
Tip: If you have any issues getting your code onto Github, see a member of your instructional team immediately so that you have a backup of your code. Pushing your code to Github is not optional. It's a required part of this program.

The Github Workflow
Your instruction team will show you the Github workflow interactively on their own aquarium repository. They will demonstrate how to work on an independent branch of code, push the code to Github for a teammate to review, and then get the code merged into the main branch - almost always called the main branch.

The checklist below is for you. You will use it during the practice exercise, and you will use it for your first few group projects until you learn it by heart.

Group Project Github Workflow
Tip: Remember that the curly braces below should not be typed by you. They indicate that you should place your own value there.

Everyone clone the same repository
Each person create a branch
git checkout -b {your initials}-fish
Add your fish component to the HTML
Add, commit, push branch
git add --all
git commit -m "Added Herbert the goldfish"
git push origin {your initials}-fish
When you feel your work is complete, go to Github and create a Pull Request (PR)
Teammate decides to verify your PR and fetches your branch
git fetch --all
git checkout {your initials}-fish
Teammate runs code in browser to verify it works
Teammate approves PR by giving you a thumb's up
Your merge your branch on Github by visiting your Pull Request page and clicking the big, green button.
Teammates pull main when they feel like it but before they submit their PR
git checkout main
git pull origin main
git checkout {their initials}-fish
When another teammate is ready to submit a pull request, they merge main into their branch, and push.
git merge main
# Fix merge conflicts, if any
Repeat steps 4-9
Specific Workflows
Your Feature Branch is Ready for Review
Make sure all your code is committed
git commit -m "A good commit message"
Make sure you have the latest code on the main branch.
git merge main
Push the code in your branch to Github
git push origin <branch name here without brackets>
Create a Pull Request on Github.
Informative title
A description that explains how your teammate can test your code
Tell your teammates that your pull request is ready to be reviewed
Reviewing a Teammates Branch
Get reference to teammate's branch
git fetch --all
Switch to teammates's branch
git checkout <branch name>
Review and test the code as described in the pull request
If the code all works and the syntax is good, then go to Github and approve the pull request.
If the code does not work or has lazy/incorrect syntax, then go to Github and leave a respectful and descriptive command on the pull request and request that the teammate make changes.
Teammate has Reviewed Code and Approved the Pull Request
Go to your pull request on Github and press the button to merge your branch.
When the merge is complete, click the button to delete the branch.
Tell your teammates that there is a new, updated main branch.
The main Branch is Updated
Do you need the new code for your branch?
If yes, continue with the following steps
If no, keep working until you are ready for a pull request on your branch.
Make sure all of your code is committed
git add --all
git commit -m "Good commit message"
Switch to the main branch
git checkout main
Get the latest code pulled to your machine
git pull origin main
Switch back to your branch
git checkout <your branch>
Merge the latest code into your branch
git merge main

Automated Fish Making Machine
You wake up on a lazy Sunday morning, rub your eyes, and reach for your phone to read the morning news and check the weather forecast. After you enter in your passcode, a list of notifications is waiting for you - including one from Martin.

You decide to read that later.

After a shower, a cup of coffee and some fruit, you open your laptop and decide to read Martin's email.

"GOOD NEWS!" the email starts. You raise your eyebrows involuntarily and continue to read.

"Bob Valentine, another fish harvester here in town has decided to hang it up. He's got arthritis and hurt his knee pretty bad last year, so diving isn't really an option for him any more. He has decided to give his entire inventory of fish to me! It's very exciting.

I need you to add all of the fish in the attached Microsoft Excel spreadsheet to the site. I need to visit my equipment dealer today - 'A Little Bit Flounder Now' - and decide on a new tank.

Email me back as soon as you're done, and I'll send payment."

You click on the attached spreadsheet and are shocked at the number of fish that Martin is inheriting. There's over 150 fish in here. Honestly, you don't know how Martin manages to house and feed the number of fish he currently has, let alone these new ones. He must have help, you imagine.

After a couple minutes of satisfying your curiosity about his new fish stock, it suddenly hits you that you now have to add 158 new fish HTML elements to the site.

"There's got to be a way to automate this," you mumble to yourself. "What if he adds another 100 fish in a month... I'll be writing fish HTML for the rest of my life!"

Luckily, there is a way to automate this entire process, so that software developers don't have to manually write the same HTML, and the same JavaScript over, and over, and over again when new data is created.

Object Representation of Things
The first step in the process is defining an object in code that represent each fish. That's the main purpose of an object - representing real-world things in code.

Before you figure out how to represent a fish, let's look at how you might represent a menu item in a restaurant as an object in code. How about a menu item at a fast food restaurant. What are some common properties of the menu items?

Name of food
Type of food (sandwich, fries, dessert, etc..)
Size
Temperature (is it hot or cold food)
Ok, given those common properties, how would you represent a hamburger as an object?

const hamburger = {
    name: "Whopper",
    type: "Sandwich",
    size: "Large",
    temperature: "Hot"
}
In this object, name, type, size, and temperature are the keys. "Whopper", "Sandwich", "Large", and "Hot" are the value of those keys. Together, those values make up the state of the hamburger object.

How about some fried potatoes?

const fries = {
    name: "French fries",
    type: "Vegetable",
    size: "Medium",
    temperature: "Hot"
}
"French fries", "Vegetable", "Medium", and "Hot" are the value of the keys. Together, those values make up the state of the fries object.

Representing the Fish
Your job is to define what a JavaScript object would look like. What keys should you create on each fish object? Each fish will have the same keys, but the state of each will be different - meaning the keys will have different values.

Create a new JavaScript module in your application named database.js. In that module, create objects to represent the state of Martin's fish that you had previously hard-coded in the HTML. You are going to place all of the objects in an array - a collection of fish.

workspace/martins-aquarium/scripts/database.js

/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            size: 3
        }
    ]
}
Tip: Some confusion and some bugs at this point are natural. You will likely forget some punctuation like commas and curly braces. If you want to discuss your ideas or bugs with the instruction team, you should visit one of them.

Concept Checking Questions
What is the data type of the database variable?
What is the data type of the fish property?
What is the data type of the name property?
What is the data type of the size property?
What data types will the fish array contain?

Automating Martin's Website
Now that you have a module whose responsibility is to maintain the state of your application, now you need to convert that raw data into HTML representations and render them in the browser. In this chapter you will automate the creation of the HTML list of fish from the objects in your fish collection, so that you never have to copy/paste the HTML directly when a fish dies, or a fish is added.

Remove Hard-Coded HTML
Open index.html and delete the <section class="fishList"> element and all of the children fish elements.

Defining the List Component
Next, create a module, place the following code in it and update the code to make the correct import from the database module.

This module exports a function as well. This one returns a newly constructed string that is filled with HTML syntax. The HTML will be a visual representation of the fish object for a person to see in the web browser.

workspace/martins-aquarium/scripts/FishList.js

// Import the function that returns a copy of the fish array
import {} from ''

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = invokeTheRightFunctionHere()

    // Start building a string filled with HTML syntax
    const htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}
Rendering the List in Main Module
Since we want the fish to be immediately rendered when the page loads, then that falls within the responsibility of the main.js module. Import the list component into main and invoke the component function.

workspace/martins-aquarium/scripts/FishList.js

// Import the FishList function from the correct module
import {} from ''

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector("insert selector here")


parentHTMLElement.innerHTML = FishList()
Your First Dynamic Content
Now refresh your browser again and all of your fish should be back in the browser.

dynamically rendered fish components

CONGRATULATIONS!!
You just took your first step towards being a web application developer. You took data in a raw format of arrays and objects, converted the data into HTML representations, and then displayed those in the browser for people to enjoy.

Information Organization
In the following exercises, you are going to building module and components for tips, and locations. You need to separate all of those modules into sub-directories so that you don't end up with dozens of JavaScript files all in one directory. It's confusing.

In the scripts directory, create the fish, tips, and locations sub-directories and move all of your current files for automating fish into their scripts/fish directory.

This will have the side effect of changing how you import the modules, since their path has changed. You will need to clean up all of your import paths.

Automate Martin's Tips
Create a new property in your database, and a tip list component to automate the rendering of Martin's fish care tips.

Automate Martin's Locations
Create a new property in your database, and a location list component, to automate the rendering of Martin's locations.