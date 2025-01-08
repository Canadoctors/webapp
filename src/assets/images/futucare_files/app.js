var Engine = Engine || {};

Engine = (function () {
    "use strict";

    var _addValidationRules = function (rules) {
        for (var item in rules) {
            $('#' + item).rules('add', rules[item]);
        }
    };

    var _removeValidationRules = function (rules) {
        for (var item in rules) {
            $('#' + item).rules('remove');
        }
    };

    var _emptyToNull = function (input) {
        if (input) {
            return input;
        }

        return null;
    }

    var _getAbsoluteUrl = function () {
        var anchor;

        return function (url) {
            if (!anchor) anchor = document.createElement("a");
            anchor.href = url;

            return anchor.href;
        };
    };

    var _displayNotification = function (message, messagetype, isHtml) {
        if (messagetype === 'success') {
            if (isHtml) {
                swal.fire({ type: "success", title: "Oficina del Contralor de Puerto Rico", html: message, timer: 5000, showConfirmButton: false });
            } else {
                swal.fire({ type: "success", title: "Oficina del Contralor de Puerto Rico", text: message, timer: 5000, showConfirmButton: false });
            }
        }
        else if (messagetype === 'error') {
            if (isHtml) {
                swal.fire({ type: "error", title: "Oficina del Contralor de Puerto Rico", html: message, timer: 5000, showConfirmButton: false });
            } else {
                swal.fire({ type: "error", title: "Oficina del Contralor de Puerto Rico", text: message, timer: 5000, showConfirmButton: false });
            }
        }
        else if (messagetype === 'warning') {
            swal.fire({ type: "warning", title: "Oficina del Contralor de Puerto Rico", text: message, timer: 5000, showConfirmButton: false });
        }
        else if (messagetype === 'info') {
            swal.fire({ type: "info", title: "Oficina del Contralor de Puerto Rico", text: message, timer: 5000, showConfirmButton: false });
        }
        else {
            swal.fire({ type: "info", title: "Oficina del Contralor de Puerto Rico", text: message, timer: 5000, showConfirmButton: false });
        }
    };

    var _displayAjaxMessages = function (response, onSuccess) {
        if (response.Success) {
            _displayNotification(response.Message, "success");
            if (typeof onSuccess === "function") {
                onSuccess();
            }
        } else {
            if (response.Validations) {
                var message = "<ul>";
                Object.keys(response.Validations).forEach(function (key) {
                    message += "<li>" + response.Validations[key] + "</li>";
                });
                message += "</ul>";
                _displayNotification(message, "error");
            } else {
                _displayNotification(response.Message, "error");
            }
        }
    };

    var _initAjax = function () {
        $.ajaxSetup({
            error: function (xhr, textStatus, errorThrown) {
                try {
                    var message = "";

                    if (xhr.status === 0) {
                        return;
                    }
                    else if (xhr.status === 403) {
                        message = "No tienes suficientes permisos para solicitar este recurso.";
                    }
                    else if (xhr.status === 404) {
                        message = "Lo sentimos, pero el recurso solicitado no existe.";
                    }
                    else if (xhr.status === 500) {
                        message = "Lo sentimos, pero un error ha ocurrido y estamos trabajando para solucionarlo.";
                    }
                    else if (xhr.status === 401) {
                        window.location.href = "/account/signin";
                        return;
                    }
                    else if (textStatus === "parsererror") {
                        message = "Lo sentimos, pero el recurso no pudo ser analizado.";
                    }
                    else if (textStatus === "timeout") {
                        message = "Lo sentimos, pero no pudo completarse el recurso solicitado dentro del periodo establecido.";
                    }
                    else if (textStatus === "abort") {
                        message = "Lo sentimos, pero el recurso solicitado fue abortado.";
                    }
                    else {
                        try {
                            message = JSON.parse(xhr.responseText);
                        } catch (ex) {
                            message = "Lo sentimos, pero un error ha ocurrido: " + textStatus + ": " + errorThrown + ". Estamos trabajando para solucionarlo.";
                        }
                    }

                    _displayNotification(message, "error");
                }
                catch (err) {
                    _displayNotification("Unhandled exception", "error");
                }
            }
        });
    };

    var _initPlugins = function () {
        // Select2
        if ($.fn.select2) {
            $.fn.select2.defaults.set("theme", "bootstrap");
            $.fn.select2.defaults.set('minimumInputLength', 3);
            $.fn.select2.defaults.set('maximumInputLength', 50);
            $.fn.select2.defaults.set('delay', 250);
            $.fn.select2.defaults.set('language', 'es');
        }

        // DataTables
        if ($.fn.dataTable) {
            $.extend(true, $.fn.dataTable.defaults, {
                "ordering": true,
                "autoWidth": false,
                "pagingType": "simple_numbers",
                "processing": false,
                "paging": true,
                "searching": false,
                "deferRender": true,
                "serverSide": true,
                "responsive": {
                    details: {
                        type: "column"
                    }
                },
                "language": {
                    "paginate": {
                        "first": "Primera",
                        "last": "Última",
                        "next": "Siguiente",
                        "previous": "Anterior"
                    },
                    "aria": {
                        "sortAscending": ": activar para ordenar la columna ascendentemente",
                        "sortDescending": ": activar para ordenar la columna descendentemente"
                    },
                    "emptyTable": "No hay información disponible",
                    "zeroRecords": "No se encontraron registros que coincidan",
                    "infoFiltered": "",
                    "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    "infoEmpty": "Se encontraron 0 registros",
                    "processing": "Buscando <i class='fa fa-spinner fa-spin'></i>",
                    "search": "Buscar:",
                    "lengthMenu": "Mostrar _MENU_ registros"
                }
            });

            $.extend(true, $.fn.dataTable.ext.classes, {
                sProcessing: "dataTables_processing panel panel-info"
            });

            $.fn.dataTable.Buttons.defaults.dom.container.className = 'dt-buttons btn-overlap btn-group btn-overlap';
        }

        // jQuery Validation
        if ($.validator) {
            $.validator.setDefaults({
                ignore: "",
                ignoreTitle: true,
                focusInvalid: false,
                onfocusout: false,
                onkeyup: false,
                onclick: false,
                errorClass: "help-block text-danger",
                errorElement: "div",
                highlight: function (e) {
                    $(e).closest(".form-group").removeClass("info").addClass("error");
                },
                success: function (e) {
                    $(e).closest(".form-group").removeClass("error");
                    $(e).remove();
                },
                errorPlacement: function (error, element) {
                    if (element.is("input[type=checkbox]") || element.is("input[type=radio]")) {
                        var controls = element.closest('div[class*="col-"]');
                        if (controls.find(':checkbox,:radio').length > 1) {
                            controls.append(error);
                        } else {
                            error.insertAfter(element.nextAll('.lbl:eq(0)').eq(0));
                        }
                    }
                    else if (element.is("[class*='select2']")) {
                        error.insertAfter(element.siblings('[class*="select2-container"]:eq(0)'));
                    }
                    else if (element.is("[class*='chosen-select']")) {
                        error.insertAfter(element.siblings('[class*="chosen-container"]:eq(0)'));
                    }
                    else error.insertAfter(element);
                }
            });

            //$.extend($.validator.messages, {
            //    required: "Este campo es obligatorio.",
            //    remote: "Por favor, rellena este campo.",
            //    email: "Por favor, escribe una dirección de correo válida",
            //    url: "Por favor, escribe una URL válida.",
            //    date: "Por favor, escribe una fecha válida.",
            //    dateISO: "Por favor, escribe una fecha (ISO) válida.",
            //    number: "Por favor, escribe un número entero válido.",
            //    digits: "Por favor, escribe sólo dígitos.",
            //    creditcard: "Por favor, escribe un número de tarjeta válido.",
            //    equalTo: "Por favor, escribe el mismo valor de nuevo.",
            //    accept: "Por favor, escribe un valor con una extensión aceptada.",
            //    maxlength: $.validator.format("Por favor, no escribas más de {0} caracteres."),
            //    minlength: $.validator.format("Por favor, no escribas menos de {0} caracteres."),
            //    rangelength: $.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
            //    range: $.validator.format("Por favor, escribe un valor entre {0} y {1}."),
            //    max: $.validator.format("Por favor, escribe un valor menor o igual a {0}."),
            //    min: $.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
            //});

            $.validator.addMethod("dateUS", function (value, element) {
                var check = false;
                var re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
                if (re.test(value)) {
                    var adata = value.split('/');
                    var mm = parseInt(adata[0], 10);
                    var dd = parseInt(adata[1], 10);
                    var yyyy = parseInt(adata[2], 10);
                    var xdata = new Date(yyyy, mm - 1, dd);
                    if ((xdata.getFullYear() == yyyy) && (xdata.getMonth() == mm - 1) && (xdata.getDate() == dd))
                        check = true;
                    else
                        check = false;
                } else
                    check = false;

                return this.optional(element) || check;
            }, "Ingresar una fecha en el formato mm/dd/yyyy");
        }

        // Bootbox
        if (bootbox) {
            bootbox.setDefaults({
                locale: "es",
                backdrop: "static",
                animate: true,
                className: null,
                closeButton: true,
                show: true,
                container: "body"
            });
        }

        if ($.blockUI) {
            $.blockUI.defaults.css.border = "none";
            $.blockUI.defaults.css.padding = "15px";
            $.blockUI.defaults.css.backgroundColor = "#000";
            $.blockUI.defaults.css.opacity = ".6";
            $.blockUI.defaults.baseZ = 2000;
            $.blockUI.defaults.message = "<i class='fa fa-circle-o-notch fa-spin fa-2x' style='color:white;'></i>";
        }
    };

    var _init = function () {
        _initAjax();
        _initPlugins();

        $("a.select-language").on("click", function (evt) {
            Cookies.set("AppContratos.SelectedLanguage", $(this).data("culture"));

            location.reload();

            evt.preventDefault();
        });
    };

    return {
        init: _init,
        displayNotification: _displayNotification,
        getAbsoluteUrl: _getAbsoluteUrl,
        emptyToNull: _emptyToNull,
        addValidationRules: _addValidationRules,
        removeValidationRules: _removeValidationRules,
        displayAjaxMessages: _displayAjaxMessages
    };
})();

$(function () {
    Engine.init();
});