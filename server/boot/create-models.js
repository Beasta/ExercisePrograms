module.exports = function(app){
  app.dataSources.mysqlDs.automigrate('Program', function(err){
     if (err) throw err;
      
         app.models.Program.create([
               {name: 'Back Recovery', details: 'Recover from back surgery'},
               {name: 'ACL Recover', details: 'Recover from ACL surgery'},
               {name: 'Weight Management', details: 'Lose weight'},
             ], function(err, programs) {
               if (err) throw err;
               console.log('Models created: \n', programs);
         });
  });
  app.dataSources.mysqlDs.automigrate('Exercise', function(err){
     if (err) throw err;
         app.models.Exercise.create([
              {name: 'situps', details: 'get on the ground and situp', programId: 1},
              {name: 'situps', details: 'get on the ground and situp', programId: 3},
              {name: 'running', details: 'run on the treadmill', programId: 3}              
             ], function(err, programs) {
               if (err) throw err;
               console.log('Models created: \n', programs);
         });
  });
};
