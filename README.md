# NextMeal
<!--
# nextmeal
Nextmeal is a mobile application built using ionic for the client mobile application and node for an  api backend. 

#Project Current Phrase 
Not even pre-aphla yet

#Page Last Updated
4/2/2015

#Project Requirements
This project require several tools. Most are easy to obtain 
<ul>
	<li><a href="https://nodejs.org/">Node Js</a></li>
	<li><a href="https://www.npmjs.com/">Npm(Usually comes with Node JS</a></li>
	<li><a href="http://ionicframework.com/getting-started/">Ionic Framework</a></li>
	<li><a href="https://www.mongodb.org/">MongoDB</a></li>

</ul>
#Installation and Running 
<p style="margin-bottom: 0in; line-height: 100%">Backend</p>
<ol>
	<li><p style="margin-bottom: 0in; line-height: 100%">Download the
	Repository 
	</p>
	<li><p style="margin-bottom: 0in; line-height: 100%">Navigate to
	./nextmeal/backend</p>
	<li><p style="margin-bottom: 0in; line-height: 100%">Run “npm
	install”</p>
	<li><p style="margin-bottom: 0in; line-height: 100%">Add file named: configuration.js to ./config 
	The config file should look like this 
	<pre>
	// config/database.js
module.exports = {
    'url' :'mongodb://address/nextmeal' ,
    'googleApiKey' :'YOUR GOOGLE KEY'
};
	</pre>
	
	</p>

	<li><p style="margin-bottom: 0in; line-height: 100%">
	You will need to set up your google public place key and your own mongo db
	</p>
	
	<li><p style="margin-bottom: 0in; line-height: 100%">Run “node
	app.js”<br>Feel free to use automation engines such as nodemon<br><br>
	</p>
</ol>
<p style="margin-bottom: 0in; line-height: 100%">Backend
Documentation</p>
<ol>
	<li value="1"><p style="margin-bottom: 0in; line-height: 100%">Download
	the Repository 
	</p>
	<li><p style="margin-bottom: 0in; line-height: 100%"><a name="__DdeLink__1_600563462"></a>
	Navigate to ./nextmeal/api_doc</p>
	<li><p style="margin-bottom: 0in; line-height: 100%">Run “npm
	install”</p>
	<li><p style="margin-bottom: 0in; line-height: 100%">Run “node
	start”</p>
	<li><p style="margin-bottom: 0in; line-height: 100%">Open up a
	browser to the requested port<br><br>
	</p>
</ol>
<p style="margin-bottom: 0in; line-height: 100%">Backend Test</p>
<ol>
	<li value="1"><p style="margin-bottom: 0in; line-height: 100%">Download
	the Repository 
	</p>
	<li><p style="margin-bottom: 0in; line-height: 100%"><a name="__DdeLink__1_6005634621"></a>
	Navigate to ./nextmeal/backend</p>
	<li><p style="margin-bottom: 0in; line-height: 100%">Run “mocha”<br>If
	you don't have mocha, run “sudo npm install mocha -g”</p>
</ol>
#Current Tasks
Back-end: Write an api template
Front-end: ???

Completed Tasks
<ul>
	<li>Build a node project template</li>
	<li>Set up db config</li>
	<li>Build Ionic project template </li>
</ul>


#The Idea
Currently when people go out to eat, menus can be cluttered with many opinions that might not relevant  to customer. Many times people would just rather see options that are relevant to them. For example, if some have diary issues, it  would be interesting if there was an  unobtrusive app that could show all the menu items that had products without milk.  People should be able to interact with the application when their  in the restaurant of interest.
node
#The Focus
As so called developers, we wanted focus on a several main points 
<ul>
	<li>A minimalistic and clean application</li>
	<li>Primary Mobile focus but secondary web base interface</li>
	<li>Unobtrusive design </li>
</ul>

#Development Techniques and Technologies 
There two main parts this project: the backend and app. The backend will be built using Node js. It will handle the calls between the clients app and retrieving relevant information from google location api and our own foods database. Mongo will be used as our database system. The client mobile application will be built using ionic. It will leverage the gps data to determine the restaurants in the location. Mysql lite library will be used to store information on the user preferences. 
-->
