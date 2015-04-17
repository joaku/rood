/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

 'use strict';

 var Thing = require('../api/thing/thing.model');
 var User = require('../api/user/user.model');
 var Exercise = require('../api/exercise/exercise.model');
 var Apptype = require('../api/apptype/apptype.model');
 var Parttype = require('../api/parttype/parttype.model');
 var Rutine = require('../api/rutine/rutine.model');

 Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    _id: '553062b619e974c01aebedf4',
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
    console.log('finished populating users');
  }
  );
});


var id_pullup = "552b167820466d48338286c5";
Exercise.find({}).remove(function() {
  Exercise.create({
    _id: id_pullup,
    name: 'Pull up',
    url_animation: 'http://media2.giphy.com/media/8KrhxtEsrdhD2/giphy.gif',
    active: true,
  }, {
    name: 'Push up',
    url_animation: 'http://cdn.osxdaily.com/wp-content/uploads/2013/07/dancing-banana.gif',
    active: true,
  }, {
    name: 'Plank',
    active: true,
  }, function() {
    console.log('finished populating exercises');
  }
  );
});


/* Applications */

var id_repeatition = "552b1dd266100f193872ea88";
var id_time = "552b1dd266800f193872ea88";
var id_isometric = "552b9dd266100f193872ea88";
Apptype.find({}).remove(function() {
  Apptype.create({
    _id: id_repeatition,
    name: 'Repeatition',
  }, {
    _id: id_time,
    name: 'Time',
  }, {
    _id: id_isometric,
    name: 'Isometric',
  }, function() {
    console.log('finished populating application types');
  }
  );
});

/* Part Types */
var id_warming = "552b1dd266100f193875ea88";
var id_develop = "552b1dd266800f193876ea88";
var id_calm = "552b9dd266100f193877ea88";
Parttype.find({}).remove(function() {
  Parttype.create({
    _id: id_warming,
    name: 'Warming'
  }, {
    _id: id_time,
    name: 'Develop'
  }, {
    _id: id_calm,
    name: 'Back to Calm'
  }, function() {
    console.log('finished populating part types');
  }
  );
});


Rutine.find({}).remove(function() {
  Rutine.create({
    name: "FRAN",
    user: "553062b619e974c01aebedf4",
    parts: [{
      parttype: id_warming,
      applications: [
      {
        order: 1,
        application: {
          name: 'Fast Pull up',
          exercise: id_pullup,
          type: id_repeatition,
          total_type: 10,
          single_duration: 1000,
          active: true,
        }
      },
      {
        order: 2,
        application: {
          name: 'Soft Pull up',
          exercise: id_pullup,
          type: id_isometric,
          total_type: 12,
          single_duration: 1500,
          active: true,
        }
      } 
      ]
    },
    {
      parttype: id_develop,
      applications: [
      {
        order: 1,
        application: {
          name: 'Soft Pull up',
          exercise: id_pullup,
          type: id_isometric,
          total_type: 12,
          single_duration: 1500,
          active: true,
        }
      },{
        order: 2,
        application: {
          name: 'Slow Pull up',
          exercise: id_pullup,
          type: id_repeatition,
          total_type: 10,
          single_duration: 2000,
          active: true,
        }
      } 
      ]
    },
    {
      parttype: id_calm,
      applications: [
      {
        order: 1,
        application: {
          name: 'Slow Pull up',
          exercise: id_pullup,
          type: id_repeatition,
          total_type: 10,
          single_duration: 2000,
          active: true,
        }
      },{
        order: 2,
        application: {
          name: 'Soft Pull up',
          exercise: id_pullup,
          type: id_isometric,
          total_type: 12,
          single_duration: 1500,
          active: true,
        }
      } 
      ]
    }]
  }
  , function() {
    console.log('finished populating rutines');
  }
  );
});
