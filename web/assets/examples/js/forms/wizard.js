/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */


(function(document, window, $) {
  'use strict';

  var Site = window.Site;

  $(document).ready(function($) {
    Site.run();
  });

  // Example Wizard Form
  // -------------------
  (function() {
    // set up formvalidation
    // 
    $('#pasoContactoForm').formValidation({
      framework: 'bootstrap',
      fields:{
        contactoNombre:{
          validators:{
            notEmpty:{
              message: 'Es necesario conocer quién será el encargado del proyecto, coloque su nombre.'
            },
            regexp: {
              regexp: /^[a-zA-Z| ]+$/,
              message: 'El nombre sólo puede contener carateres alfabeticos'
            }
          }
        },
        contactoTelefono:{
          validators:{
            notEmpty:{
              message: 'Mantenernos en contacto es muy importante, escriba un número teléfonico donde podamos localizarte.'
            },
            stringLength: {
              min: 7,
              max: 17,
              message: 'El número debe contener entre 7 y 15 digitos.'
            },
            regexp: {
              regexp: /^[0-9\-]+$/,
              message: 'El télefono sólo puede contener numeros y guiones'
            }
          }
        },
        contactoCorreo:{
          validators:{
            notEmpty:{
              message: 'Escriba un correo electrónico dónde podamos enviarte mensaje escritos.'
            }
          }
        },
        paquete:{
          validators:{
            notEmpty:{
              message: 'Deseamos conocer cuál es el paquete contratado.'
            }
          }
        }
      },
      err: {
        clazz: 'text-help'
      },
      row: {
        invalid: 'has-danger'
      }
    })


    $('#pasoEmpresaForm').formValidation({
      framework: 'bootstrap',
      fields:{
        razonSocial:{
          validators:{
            notEmpty:{
              message: 'El nombre oficial de su empresa, confirma su nombre legal.'
            },
            regexp: {
              regexp: /^[a-zA-Z| ]+$/,
              message: 'El nombre de razón social sólo puede contener carateres alfabeticos'
            }
          }
        },
        nombreComercial:{
          validators:{
            notEmpty:{
              message: 'Coloque su nombre comercial para identificar su persona física o jurídica.'
            },
            regexp: {
              regexp: /^[a-zA-Z| ]+$/,
              message: 'El nombre comercial sólo puede contener carateres alfabeticos'
            }
          }
        },
        giroNegocio:{
          validators:{
            notEmpty:{
              message: 'El giro del negocio es necesario para conocer el tipo de servicio que ofrece.'
            },
            regexp: {
              regexp: /^[a-zA-Z| ]+$/,
              message: 'El giro del negocio sólo puede contener carateres alfabeticos'
            }
          }
        },
        cliente1:{
          validators:{
            notEmpty:{
              message: 'Conocer a sus clientes, permite conocer un mejor enfoque de su proyecto.'
            },
            regexp: {
              regexp: /^[a-zA-Z| ]+$/,
              message: 'El cliente sólo puede contener carateres alfabeticos'
            }
          }
        },
        cliente2:{
          validators:{
            regexp: {
              regexp: /^[a-zA-Z| ]+$/,
              message: 'El cliente sólo puede contener carateres alfabeticos'
            }
          }
        },
        cliente3:{
          validators:{
            regexp: {
              regexp: /^[a-zA-Z| ]+$/,
              message: 'El cliente sólo puede contener carateres alfabeticos'
            }
          }
        },
        cliente4:{
          validators:{
            regexp: {
              regexp: /^[a-zA-Z| ]+$/,
              message: 'El cliente sólo puede contener carateres alfabeticos'
            }
          }
        },
        objetivo1:{
          validators:{
            notEmpty:{
              message: 'Sus objetivos dan la pauta a proporcionale lo que usted necesita.'
            },
            regexp: {
              regexp: /^[a-zA-Z| |0-9]+$/,
              message: 'El objetivo sólo puede contener carateres alfabeticos y números'
            }
          }
        },
        objetivo2:{
          validators:{
            notEmpty:{
              message: 'El objetivo define una meta y deseamos ayudarte a llegar a ella.'
            },
            regexp: {
              regexp: /^[a-zA-Z| |0-9]+$/,
              message: 'El objetivo sólo puede contener carateres alfabeticos y números'
            }
          }
        },
        objetivo3:{
          validators:{
            regexp: {
              regexp: /^[a-zA-Z| |0-9]+$/,
              message: 'El objetivo sólo puede contener carateres alfabeticos y números'
            }
          }
        },
        objetivo4:{
          validators:{
            regexp: {
              regexp: /^[a-zA-Z| |0-9]+$/,
              message: 'El objetivo sólo puede contener carateres alfabeticos y números'
            }
          }
        },
        nombre1:{
          validators:{
            notEmpty:{
              message: 'Conocer su competencia nos ayuda a mejorar los servicios que usted ofrece.'
            },
            regexp: {
              regexp: /^[a-zA-Z| ]+$/,
              message: 'El nombre sólo puede contener carateres alfabeticos'
            }
          }
        },
        nombre2:{
          validators:{
            regexp: {
              regexp: /^[a-zA-Z| ]+$/,
              message: 'El nombre sólo puede contener carateres alfabeticos'
            }
          }
        },
        nombre3:{
          validators:{
            regexp: {
              regexp: /^[a-zA-Z| ]+$/,
              message: 'El nombre sólo puede contener carateres alfabeticos'
            }
          }
        }
      },
      err: {
        clazz: 'text-help'
      },
      row: {
        invalid: 'has-danger'
      }
    })

    $('#pasoIdentidadForm').formValidation({
      framework: 'bootstrap',
      fields:{
        slogan:{validators:{
          notEmpty:{
              message: 'El slogan es la frase ingeniosa que ha creado.'
          },
          regexp: {
              regexp: /^[a-zA-Z| ]+$/,
              message: 'Formato invalido, sólo puede contener carateres alfabeticos'
          }
        }},
        rsFacebook:{validators:{
          regexp: {
              regexp: /^\/[a-zA-Z|0-9|\.|\-]+$/,
              message: 'Formato invalido, sólo puede contener carateres alfabeticos, puntos, guiones y numeros'
          }
        }},
        rsTwitter:{validators:{
          regexp: {
              regexp: /^\@[a-zA-Z|0-9|\-]+$/,
              message: 'Formato invalido, sólo puede contener carateres alfabeticos, puntos, guiones y numeros'
          }
        }},
        rsGooglePlus:{validators:{
          regexp: {
              regexp: /^\/[a-zA-Z|0-9|\-|\.]+$/,
              message: 'Formato invalido, sólo puede contener carateres alfabeticos, puntos, guiones y numeros'
          }
        }},
        colorPrimario:{validators:{
          stringLength: {
              min: 4,
              max: 7,
              message: 'Formato invalido, debe tener al menos 3 carateres'
          },
          regexp: {
              regexp: /^\#[a-fA-F|0-9|]+$/,
              message: 'Formato invalido, sólo puede contener carateres(A-F) y numeros'
          }
        }},
        colorSecundario:{validators:{
          stringLength: {
              min: 4,
              max: 7,
              message: 'Formato invalido, debe tener al menos 3 carateres'
          },
          regexp: {
              regexp: /^\#[a-fA-F|0-9|]+$/,
              message: 'Formato invalido, sólo puede contener carateres(A-F) y numeros'
          }
        }},
        colorComplemento1:{validators:{
          stringLength: {
              min: 4,
              max: 7,
              message: 'Formato invalido, debe tener al menos 3 carateres'
          },
          regexp: {
              regexp: /^\#[a-fA-F|0-9|]+$/,
              message: 'Formato invalido, sólo puede contener carateres(A-F) y numeros'
          }
        }},
        colorComplemento2:{validators:{
          stringLength: {
              min: 4,
              max: 7,
              message: 'Formato invalido, debe tener al menos 3 carateres'
          },
          regexp: {
              regexp: /^\#[a-fA-F|0-9|]+$/,
              message: 'Formato invalido, sólo puede contener carateres(A-F) y numeros'
          }
        }}
      },
      err: {
        clazz: 'text-help'
      },
      row: {
        invalid: 'has-danger'
      }
    })

    $('#pasoSeccionesF').formValidation({
      framework: 'bootstrap',
      fields:{
        content:{
          validators:{
            notEmpty:{
              message: 'Debe teclear el contenido que desea que aparezca en ésta sección.'
            }
          }
        }
      },
      err: {
        clazz: 'text-help'
      },
      row: {
        invalid: 'has-danger'
      }
    })
    /*$('#exampleAccountForm').formValidation({
      framework: 'bootstrap',
      fields: {
        username: {
          validators: {
            notEmpty: {
              message: 'The username is required'
            },
            stringLength: {
              min: 6,
              max: 30,
              message: 'The username must be more than 6 and less than 30 characters long'
            },
            regexp: {
              regexp: /^[a-zA-Z0-9_\.]+$/,
              message: 'The username can only consist of alphabetical, number, dot and underscore'
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: 'The password is required'
            },
            different: {
              field: 'username',
              message: 'The password cannot be the same as username'
            }
          }
        }
      },
      err: {
        clazz: 'text-help'
      },
      row: {
        invalid: 'has-danger'
      }
    });

    $("#exampleBillingForm").formValidation({
      framework: 'bootstrap',
      fields: {
        number: {
          validators: {
            notEmpty: {
              message: 'The credit card number is required'
            }
            // creditCard: {
            //   message: 'The credit card number is not valid'
            // }
          }
        },
        cvv: {
          validators: {
            notEmpty: {
              message: 'The CVV number is required'
            }
            // cvv: {
            //   creditCardField: 'number',
            //   message: 'The CVV number is not valid'
            // }
          }
        }
      },
      err: {
        clazz: 'text-help'
      },
      row: {
        invalid: 'has-danger'
      }
    }); */

    // init the wizard
    var defaults = Plugin.getDefaults("wizard");
    var options = $.extend(true, {}, defaults, {
      buttonsAppendTo: '.panel-body'
    });

    var wizard = $("#exampleWizardForm").wizard(options).data('wizard');

    // setup validator
    // http://formvalidation.io/api/#is-valid
    // 
    wizard.get('#pasoContacto').setValidator(function(){
      var fv = $('#pasoContactoForm').data('formValidation')
      fv.validate()

      if(!fv.isValid()){
        return false
      }
      insertaContacto()
      return true
    })

    wizard.get('#pasoEmpresa').setValidator(function(){
      var fv = $('#pasoEmpresaForm').data('formValidation')
      fv.validate()

      if(!fv.isValid()){
        return false
      }
      insertaEmpresa()
      return true
    })

    wizard.get('#pasoIdentidad').setValidator(function(){
      var fv = $('#pasoIdentidadForm').data('formValidation')
      fv.validate()

      if(!fv.isValid()){
        return false
      }
      insertaIdentidad()
      return true
    })
    /*wizard.get("#exampleAccount").setValidator(function() {
      var fv = $("#exampleAccountForm").data('formValidation');
      fv.validate();

      if (!fv.isValid()) {
        return false;
      }

      return true;
    });

    wizard.get("#exampleBilling").setValidator(function() {
      var fv = $("#exampleBillingForm").data('formValidation');
      fv.validate();

      if (!fv.isValid()) {
        return false;
      }

      return true;
    }); */
  })();


  // Example Wizard Form Container
  // -----------------------------
  // http://formvalidation.io/api/#is-valid-container
  (function() {
    var defaults = Plugin.getDefaults("wizard");
    var options = $.extend(true, {}, defaults, {
      onInit: function() {
        $('#exampleFormContainer').formValidation({
          framework: 'bootstrap',
          fields: {
            username: {
              validators: {
                notEmpty: {
                  message: 'The username is required'
                }
              }
            },
            password: {
              validators: {
                notEmpty: {
                  message: 'The password is required'
                }
              }
            },
            number: {
              validators: {
                notEmpty: {
                  message: 'The credit card number is not valid'
                }
              }
            },
            cvv: {
              validators: {
                notEmpty: {
                  message: 'The CVV number is required'
                }
              }
            }
          },
          err: {
            clazz: 'text-help'
          },
          row: {
            invalid: 'has-danger'
          }
        });
      },
      validator: function() {
        var fv = $('#exampleFormContainer').data('formValidation');

        var $this = $(this);

        // Validate the container
        fv.validateContainer($this);

        var isValidStep = fv.isValidContainer($this);
        if (isValidStep === false || isValidStep === null) {
          return false;
        }

        return true;
      },
      onFinish: function() {
        // $('#exampleFormContainer').submit();
      },
      buttonsAppendTo: '.panel-body'
    });

    $("#exampleWizardFormContainer").wizard(options);
  })();

  // Example Wizard Pager
  // --------------------------
  (function() {
    var defaults = Plugin.getDefaults("wizard");

    var options = $.extend(true, {}, defaults, {
      step: '.wizard-pane',
      templates: {
        buttons: function() {
          var options = this.options;
          var html = '<div class="btn-group btn-group-sm btn-group-flat">' +
            '<a class="btn btn-default" href="#' + this.id + '" data-wizard="back" role="button">' + options.buttonLabels.back + '</a>' +
            '<a class="btn btn-success btn-outline pull-xs-right" href="#' + this.id + '" data-wizard="finish" role="button">' + options.buttonLabels.finish + '</a>' +
            '<a class="btn btn-default btn-outline pull-xs-right" href="#' + this.id + '" data-wizard="next" role="button">' + options.buttonLabels.next + '</a>' +
            '</div>';
          return html;
        }
      },
      buttonLabels: {
        next: '<i class="icon md-chevron-right" aria-hidden="true"></i>',
        back: '<i class="icon md-chevron-left" aria-hidden="true"></i>',
        finish: '<i class="icon md-check" aria-hidden="true"></i>'
      },

      buttonsAppendTo: '.panel-actions'
    });

    $("#exampleWizardPager").wizard(options);
  })();

  // Example Wizard Progressbar
  // --------------------------
  (function() {
    var defaults = Plugin.getDefaults("wizard");

    var options = $.extend(true, {}, defaults, {
      step: '.wizard-pane',
      onInit: function() {
        this.$progressbar = this.$element.find('.progress-bar').addClass('progress-bar-striped');
      },
      onBeforeShow: function(step) {
        step.$element.tab('show');
      },
      onFinish: function() {
        this.$progressbar.removeClass('progress-bar-striped').addClass('progress-bar-success');
      },
      onAfterChange: function(prev, step) {
        var total = this.length();
        var current = step.index + 1;
        var percent = (current / total) * 100;

        this.$progressbar.css({
          width: percent + '%'
        }).find('.sr-only').text(current + '/' + total);
      },
      buttonsAppendTo: '.panel-body'
    });

    $("#exampleWizardProgressbar").wizard(options);
  })();

  // Example Wizard Tabs
  // -------------------
  (function() {
    var defaults = Plugin.getDefaults("wizard");
    var options = $.extend(true, {}, defaults, {
      step: '> .nav > li > a',
      onBeforeShow: function(step) {
        step.$element.tab('show');
      },
      classes: {
        step: {
          //done: 'color-done',
          error: 'color-error'
        }
      },
      onFinish: function() {
        alert('finish');
      },
      buttonsAppendTo: '.tab-content'
    });

    $("#exampleWizardTabs").wizard(options);
  })();

  // Example Wizard Accordion
  // ------------------------
  (function() {
    var defaults = Plugin.getDefaults("wizard");
    var options = $.extend(true, {}, defaults, {
      step: '.panel-title[data-toggle="collapse"]',
      classes: {
        step: {
          //done: 'color-done',
          error: 'color-error'
        }
      },
      templates: {
        buttons: function() {
          return '<div class="panel-footer">' + defaults.templates.buttons.call(this) + '</div>';
        }
      },
      onBeforeShow: function(step) {
        step.$pane.collapse('show');
      },

      onBeforeHide: function(step) {
        step.$pane.collapse('hide');
      },

      onFinish: function() {
        alert('finish');
      },

      buttonsAppendTo: '.panel-collapse'
    });

    $("#exampleWizardAccordion").wizard(options);
  })();

})(document, window, jQuery);
