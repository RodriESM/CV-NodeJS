const { Router } = require('express');
const { deleteProfile, updateProfile, addProfile, getProfileById,
   getHobbiesByProfileId, getAptitudesByProfileId, getInteresesByProfileId,
   getExperienciesByProfileId, getEstudiosByProfileId, getAllProfiles, home } = require('../controllers/profile');

const router = Router();

  router.get('/', home);
  
  // Endpoint to retrieve all profiles
  router.get('/profiles', getAllProfiles );
  
  // Endpoint to retrieve all estudios
  router.get('/estudios/:id', getEstudiosByProfileId);
  
  // Endpoint to retrieve all experiencias
  router.get('/experiencias/:id', getExperienciesByProfileId);
  
  // Endpoint to retrieve all intereses
  router.get('/intereses/:id', getInteresesByProfileId);
  
  // Endpoint to retrieve all aptitudes
  router.get('/aptitudes/:id', getAptitudesByProfileId);
  
  
  // Endpoint to retrieve all hobbies
  router.get('/hobbies/:id', getHobbiesByProfileId);
  
  
  // Endpoint to retrieve a specific profile by ID
  router.get('/profiles/:id', getProfileById);
  
  // Endpoint to create a new profile
  router.post('/profiles', addProfile);
  
  
  // Endpoint to update an existing profile
  router.put('/profiles/:id', updateProfile);
  
  
  // Endpoint to delete an existing profile
  router.delete('/profiles/:id', deleteProfile);


  module.exports = router;