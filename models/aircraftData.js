var mongoose = require('mongoose');

var ClimbSchema = new mongoose.Schema({
	weight: Number,
	vfriFlap5: Number,
	vfriFlap510: Number,
	vfriFlap15: Number,
	vclimb: Number
});

mongoose.model('ClimbData', ClimbSchema, 'ClimbData');

var TakeoffSchema = new mongoose.Schema({
   weight: Number,
   altitude0VR: Number,
   altitude0V2: Number,
   altitude2000VR: Number,
   altitude2000V2: Number,
   altitude4000VR: Number,
   altitude4000V2: Number,
   altitude6000VR: Number,
   altitude6000V2: Number,
   altitude8000VR: Number,
   altitude8000V2: Number,
   altitude10000VR: Number,
   altitude10000V2: Number
});

mongoose.model('TakeoffData', TakeoffSchema, 'TakeoffData');

var LandingSchema = new mongoose.Schema({
	weight: Number,
	vApp: Number,
	vRef: Number,
	vGA: Boolean,
});

mongoose.model('LandingData', LandingSchema, 'LandingData');