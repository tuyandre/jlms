

// const Swal = require('sweetalert2');
var form = $("#studentReg");
var progressbar = $('.progress-bar');
var validator = form.validate({
    ignore: "",
    errorPlacement: function errorPlacement(error, element) {
        element.before(error);
    },
    rules: {
        idNo: {
            minlength: 4,
            required: true
            // remote: icparContext + "/studentApplication/checkID"
        },
        passport: {
            accept: "png|jpg|jpeg",
            fileSize: 2100000,
            maxImageWidth: 200,
            required: function() {
                return $('#passportPhoto').val() == '';
            }
        },
        phoneNo: {
            phoneType: true

        },
        proAttachment: {
            fileSize: 5100000,
            extension: "png|jpg|pdf|doc|docx|jpeg|zip",
            required: function() {
                return ($('#proCourse').val() != '') && ($('#professionalAttachment').val() == '');
            }

        },
        phoneNo2: {
            phoneType: true

        },
        professionalAttachment: {
            required: function() {
                return $('#proCourse').val() != '';
            }
        },

        passportPhoto: {
            required: true

        },
        bankAttachment: {
            required: true

        },
        sponsorAttachment: {
            required: true

        },
        sponsorName: {
            required: function(el) {
                return $(el).closest('form').find('.sponsor').val() != 'SelfSponsored';
            }

        },
        sponsorEmail: {
            email: true,
            required: function(el) {
                return $(el).closest('form').find('.sponsor').val() != 'SelfSponsored';
            }

        },
        sponsorContact: {
            phoneType: true,
            required: function(el) {
                return $(el).closest('form').find('.sponsor').val() != 'SelfSponsored';
            }
        },
        email: {
            required: true,
            email: true,
            remote: {
                url: icparContext + "/studentApplication/checkEmail",
                type: 'get',
                data: {
                    email: function() {
                        return $("#email").val();
                    },
                    program: function() {
                        return $("#program").val();
                    }
                }
            }
        },
        bankDepositDate: {

            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'BankDeposit';
            }

        },
        bankDepositPaymentRefNo: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'BankDeposit';
            }
        },
        accountNumber: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'BankDeposit';
            }
        },
        branch: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'BankDeposit';
            }

        },
        bankDepositorNames: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'BankDeposit';
            }

        },
        bankDepositAmount: {
            min: 15000,
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'BankDeposit';
            }

        },
        bankSlip: {
            fileSize: 5100000,
            extension: "png|jpg|pdf|doc|docx|jpeg|zip",
            required: function(el) {
                return ($('.payment').val() == 'BankDeposit') && ($('#bankAttachment').val() == '');

            }

        },
        sponsorDepositDate: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'SponsorDeposit';
            }

        },
        sponsorDepositorNames: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'SponsorDeposit';
            }

        },
        sponsorDepositAmount: {
            min: 15000,
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'SponsorDeposit';
            }

        },
        sponsorDepositAttachment: {
            fileSize: 5100000,
            extension: "png|jpg|pdf|doc|docx|jpeg|zip",
            required: function(el) {
                return ($('.payment').val() == 'SponsorDeposit') && ($('#sponsorAttachment').val() == '');
            }

        },
        sponsorDepositPaymentRefNo: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'SponsorDeposit';
            }

        },
        mobileMoneyDate: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'MobileMoneyDeposit';
            }

        },
        mobileMoneyPaymentRefNo: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'MobileMoneyDeposit';
            }

        },
        mobileMoneyDepositorNames: {
            digits: false,
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'MobileMoneyDeposit';
            }

        },
        serviceProvider: {
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'MobileMoneyDeposit';
            }

        },
        mobileMoneyPhoneNumber: {
            phoneType: true,
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'MobileMoneyDeposit';
            }

        },
        mobileMoneyAmount: {
            min: 15000,
            required: function(el) {
                return $(el).closest('form').find('.payment').val() == 'MobileMoneyDeposit';
            }

        },
        sponsorID: {
            required: function() {
                return ($('#sponsorshipType').val() == 'School') || ($('#sponsorshipType').val() == 'WorkPlace');
            }

        }

    },
    messages: {
        idNo: {
            remote: "This ID No. is already registered!",
            minlength: 'Please enter a valid ID No!'
        },
        email: {
            remote: "This email is already registered!",
            email: 'Please use a valid email address!'
        },
        passport: {
            accept: "Only jpeg, png and jpg formats are allowed!",
            fileSize: "Photo should not be greater than 2 MBs!",
            checkDim: "Max-width(600pixels) and Max-height(600pixels)",
            maxImageWidth: 'The image width should not exceed 200 pixels'
        },
        bankDepositAmount: {
            min: "Application fee should be 55000"
        },
        sponsorDepositAmount: {
            min: "Application fee should be 55000"
        },
        mobileMoneyAmount: {
            min: "Application fee should be 55000"

        },
        bankAttachment: {
            required: "Please upload your file to proceed"

        },
        sponsorAttachment: {
            required: "Please upload your file to proceed"
        },
        bankSlip: {
            fileSize: "File should be less than 5MBs",
            extension: "Only formats below are allowed!"

        },
        sponsorDepositAttachment: {
            fileSize: "File should be less than 5MBs",
            extension: "Only formats below are allowed!"

        },
        passportPhoto: {
            required: "Please upload your file to proceed!"

        },
        proAttachment: {
            required: "Please upload your file to proceed!"
        },
        professionalAttachment: {
            required: "Please upload your file to proceed!"
        }

    },
    submitHandler: function(form) {
        alert('success');
        $.ajax({
            type: $(form).attr('method'),
            url: $(form).attr('action'),
            data: $(form).serialize(),
            dataType : 'json'
        })
            .done(function (response) {
                if (response.success == 'success') {
                    alert('success');
                } else {
                    alert('fail');
                }
            });
        return false; // required to block normal submit since you used ajax



        // $(form).ajaxSubmit({
        //     beforeSubmit: function() {
        //         $("#progress-bar").width('0%');
        //     },
        //     success: function(res) {
        //         $('#loader-icon').hide();
        //         window.location = icparContext + "/studentApplication/application-success";
        //     },
        //     error: function(res) {
        //
        //         alert('An error has occured! Check your form and correct any mistakes in your data')
        //         $("#progress-bar").css({
        //             'display': 'none'
        //         })
        //     },
        //     uploadProgress: function(event, position, total, percentComplete) {
        //         $('#progress-div').css({
        //             'display': 'block'
        //         });
        //         $("#progress-bar").width(percentComplete + '%');
        //         $("#progress-bar").html('<div id="progress-status">' + 'Sending...' + percentComplete + ' %</div>');
        //     }
        //
        // });
    }
});

form.steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    stepsOrientation: "vertical",
    onStepChanging: function(event, currentIndex, newIndex) {
        // Allways allow previous action even if the current form is not valid!
        if (currentIndex > newIndex) {
            return true;
        }

        if (currentIndex < newIndex) {
            form.find(".body:eq(" + newIndex + ") label.error").remove();
            form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
        }
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
    },

    onFinishing: function(event, currentIndex) {
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
    },
    onFinished: function(event, currentIndex) {
        // const Swal = require('sweetalert2')
        // alert('success');
        var form = $(this);
        $("#progress-bar").width('0%');
        $.ajax({
            type: $(form).attr('method'),
            url: $(form).attr('action'),
            data: $(form).serialize(),
            dataType : 'json'
        })
            .done(function (response) {
                console.log(response);
                if (response.success == 'success') {
                    alert('Your Registration Completed Succfull, Check Your Email or Phone SMS');
                    // Swal.fire({
                    //     position: 'center',
                    //     icon: 'success',
                    //     title: 'Your Registration Completed Succfull, Check Your Email or Phone SMS',
                    //     showConfirmButton: false,
                    //     timer: 2500
                    // });
                    window.location="/jdd-portal/Student/home";
                    // window.location="/jdd-portal/Student/home";
                } else {
                    alert('Your Registration not  Completed, Please try Again');
                    // Swal.fire({
                    //     position: 'center',
                    //     icon: 'warning',
                    //     title: 'Your Registration not  Completed, Please try Again',
                    //     showConfirmButton: false,
                    //     timer: 2500
                    // });
                }
            });
        return false;
        form.submit();
    }
});