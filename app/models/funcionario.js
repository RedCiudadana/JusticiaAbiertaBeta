import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  nombre: attr(),
  fotoUrl: attr(),
  profesion: attr(),
  educacion: attr(),
  fechaNacimiento: attr(),
  lugarNacimiento: attr(),
  cargoNombreCompleto: attr(),
  cargoNombreCorto: attr(),
  email: attr(),
  fb: attr(),
  tw: attr(),
  direccion: attr(),
  telefono: attr(),
  biografia: attr(),
  desempenio: attr(),
  historialPolitico: attr(),

  institucion: belongsTo('institucion'),
  partidoPostulante: belongsTo('partido'),
  partidoActual: belongsTo('partido'),

  fotoFuncionario: Ember.computed('fotoUrl', function() {
    if (this.get('fotoUrl')) {
      return this.get('fotoUrl');
    }

    return 'images/magistrados/Congreso/Magistrado.jpg';
  }),

  institucionSelector: Ember.computed('institucion', function() {
    if (!this.get('institucion')) {
      return;
    }

    return this.get('institucion').get('selector');
  })
});