var Tabletop = require('tabletop');
var jsonfile = require('jsonfile');

var spreadsheet = 'https://docs.google.com/spreadsheets/d/1DnOk0jXyC-bGPG1uSUvi94tJ9zJWSBNEZWaVUYtg3LI/pubhtml';

var tabletop = Tabletop.init({
  key: spreadsheet,
  callback: function(sheets, tabletop) {
    var funcionarios = sheets['funcionario'].elements;
    var instituciones = sheets['institucion'].elements;
    var partidos = sheets['partido'].elements;
    var comisiones = sheets['comision'].elements;
    var distritos = sheets['distrito'].elements;

    var resultObject = {'data': []};

    funcionarios.forEach(function(funcionario) {

      // Considerar instituciones
      var institucion = instituciones.filter(function(institucion) {
        return institucion.id === funcionario.institucion;
      });

      if (institucion) {
        funcionario.institucion = institucion[0];
      }

      // Considerar partido postulante
      var partidoPostulante = partidos.filter(function(partido) {
        return partido.id === funcionario.partidoPostulante;
      });

      if (partidoPostulante) {
        funcionario.partidoPostulante = partidoPostulante[0];
      }

      // Considerar partido actual
      var partidoActual = partidos.filter(function(partido) {
        return partido.id === funcionario.partidoActual;
      });

      if (partidoActual) {
        funcionario.partidoActual = partidoActual[0];
      }

      // Considerar comisión
      var comision = comisiones.filter(function(comision) {
        return comision.id === funcionario.comision;
      });

      if (comision) {
        funcionario.comision = comision[0];
      }

      // Considerar comisión dos
      var comision2 = comisiones.filter(function(comision2) {
        return comision2.id === funcionario.comision2;
      });

      if (comision2) {
        funcionario.comision2 = comision2[0];
      }

      // Considerar comisión tres
      var comision3 = comisiones.filter(function(comision3) {
        return comision3.id === funcionario.comision3;
      });

      if (comision3) {
        funcionario.comision3 = comision3[0];
      }

      // Considerar distritos
      var distrito = distritos.filter(function(distrito) {
        return distrito.id === funcionario.distrito;
      });

      if (distrito) {
        funcionario.distrito = distrito[0];
      }

      resultObject.data.push(funcionario);
    });

    var file = 'public/data/denormalized-data-congreso.json';
    jsonfile.spaces = 4;
    jsonfile.writeFileSync(file, resultObject);

    return;
  }
});
