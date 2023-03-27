const mongoose = require('mongoose');

const { Schema } = mongoose;

const profileSchema = new mongoose.Schema({
  "_id": Schema.Types.ObjectId,
  "value": {
    "nombre": String,
    "apellido": String,
    "apellido2": String,
    "email": String,
    "tlf": String,
    "estudios": [Schema.Types.ObjectId],
    "experiencias": [Schema.Types.ObjectId],
    "intereses": [Schema.Types.ObjectId],
    "hobbies": [Schema.Types.ObjectId],
    "aptitudes": [Schema.Types.ObjectId],
    "idiomas": [String],
    "direccion": String,
    "fechaNacimiento": Date,
    "descripcion": String,
    "permisoCirculacion": [String],
    "rrss": [
      {
        "nombre": String,
        "url": String
      }
    ]
  }
});

const estudioSchema = new mongoose.Schema({
  titulo: String,
  habilidades: [String],
  centro: {
    nombre: String,
    url: String
  },
  fecha: String
});

const experienciaSchema = new mongoose.Schema({
  titulo: String,
  habilidades: [String],
  centro: {
    nombre: String,
    url: String
  },
  fecha: String
});

const interesSchema = new mongoose.Schema({
  nombre: String
});

const hobbySchema = new mongoose.Schema({
  nombre: String,
  datos: [String]
});

const Perfil = mongoose.model('Perfil', profileSchema);
const Estudio = mongoose.model('Estudio', estudioSchema);
const Experiencia = mongoose.model('Experiencia', experienciaSchema);
const Interes = mongoose.model('Interes', interesSchema);
const Hobby = mongoose.model('Hobby', hobbySchema);

module.exports = {
    Perfil,
    Estudio,
    Experiencia,
    Interes,
    Hobby
};