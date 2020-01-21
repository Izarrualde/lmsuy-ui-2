const DEBUG = true;

// https://www.api.lmsuy.com
const CONFIG = {
    base_url: 'http://www.lms-api-2.local',
    endpoints: {
        sessions: {
            fetch: {
                method: 'get',
                path: '/sessions/:idSession'
            },
            fetchAll: {
                method: 'get',
                path: '/sessions'
            },
            create: {
                method: 'post',
                path: '/sessions'
            },
            update: {
                method: 'put',
                path: '/sessions/:idSession'
            },
            delete: {
                method: 'delete',
                path: '/sessions/:idSession'
            },
            calculatePoints: {
                method: 'patch',
                path: '/sessions/:idSession/calculate'
            },
            playSession: {
                method: 'get',
                path: '/sessions/:idSession/play'
            },
            stopSession: {
                method: 'get',
                path: '/sessions/:idSession/stop'
            }
        },
        rakebackAlgorithms: {
            fetchAll: {
                method: 'get',
                path: '/rakeback-algorithms'
            }
        },
        oauth: {
            oauth: {
                method: 'post',
                path: '/oauth'
            }
        },
        users: {
            fetch: {
                method: 'get',
                path: '/users/:idUser'
            },
            fetchAll: {
                method: 'get',
                path: '/users'
            },
            create: {
                method: 'post',
                path: '/users'
            },
            update: {
                method: 'put',
                path: '/users/:idUser'
            },
            delete: {
                method: 'delete',
                path: '/users/:idUser'
            }
        },
        commissions: {
            fetch: {
                method: 'get',
                path: '/sessions/:idSession/commissions/:idCommission'
            },
            fetchAll: {
                method: 'get',
                path: '/sessions/:idSession/commissions'
            },
            create: {
                method: 'post',
                path: '/sessions/:idSession/commissions'
            },
            update: {
                method: 'put',
                path: '/sessions/:idSession/commissions/:idCommission'
            },
            delete: {
                method: 'delete',
                path: '/sessions/:idSession/commissions/:idCommission'
            }
        },
        dealerTips: {
            fetchDealerTip: {
                method: 'get',
                path: '/sessions/:idSession/dealer-tips/:idDealerTip'
            },
            fetchAll: {
                method: 'get',
                path: '/sessions/:idSession/dealer-tips'
            },
            create: {
                method: 'post',
                path: '/sessions/:idSession/dealer-tips'
            },
            updateDealerTip: {
                method: 'put',
                path: '/sessions/:idSession/dealer-tips/:idDealerTip'
            },
            deleteDealerTip: {
                method: 'delete',
                path: '/sessions/:idSession/dealer-tips/:idDealerTip'
            }
        },
        serviceTips: {
            fetchServiceTip: {
                method: 'get',
                path: '/sessions/:idSession/service-tips/:idServiceTip'
            },
            fetchAll: {
                method: 'get',
                path: '/sessions/:idSession/service-tips'
            },
            create: {
                method: 'post',
                path: '/sessions/:idSession/service-tips'
            },
            updateServiceTip: {
                method: 'put',
                path: '/sessions/:idSession/service-tips/:idServiceTip'
            },
            deleteServiceTip: {
                method: 'delete',
                path: '/sessions/:idSession/service-tips/:idServiceTip'
            }
        },
        expenses: {
            fetch: {
                method: 'get',
                path: '/sessions/:idSessions/expenses/:idExpenditure'
            },
            fetchAll: {
                method: 'get',
                path: '/sessions/:idSessions/expenses'
            },
            create: {
                method: 'post',
                path: '/sessions/:idSession/expenses'
            },
            update: {
                method: 'put',
                path: '/sessions/:idSession/expenses/:idExpenditure'
            },
            delete: {
                method: 'delete',
                path: '/sessions/:idSession/expenses/:idExpenditure'
            }
        },
        userSession: {
            fetch: {
                method: 'get',
                path: '/sessions/:idSession/users-session/:idUserSession'
            },
            fetchAll: {
                method: 'get',
                path: '/sessions/:idSession/users-session'
            },
            create: {
                method: 'post',
                path: '/sessions/:idSession/users-session'
            },
            update: {
                method: 'put',
                path: '/sessions/:idSession/users-session/:idUserSession'
            },
            delete: {
                method: 'delete',
                path: '/sessions/:idSession/users-session/:idUserSession'
            },
            closeUserSession: {
                method: 'post',
                path: '/users-session/:idUserSession/close'
            }
        },
        buyins: {
            fetch: {
                method: 'get',
                path: '/sessions/:idSession/buyins/:idBuyin'
            },
            fetchAll: {
                method: 'get',
                path: '/sessions/:idSessions/buyins'
            },
            create: {
                method: 'post',
                path: '/sessions/:idSession/buyins'
            },
            update: {
                method: 'put',
                path: '/sessions/:idSession/buyins/:idBuyin'
            },
            delete: {
                method: 'delete',
                path: '/sessions/:idSession/buyins/:idBuyin'
            }
        },
        statistics: {
            commissions: {
                method: 'post',
                path: '/statistics/commissions'
            },
            dealerTips: {
                method: 'post',
                path: '/statistics/dealer-tips'
            },
            serviceTips: {
                method: 'post',
                path: '/statistics/service-tips'
            },
            expenses: {
                method: 'post',
                path: '/statistics/expenses'
            },
            totalCashin: {
                method: 'post',
                path: '/statistics/total-cashin'
            },
            hoursPlayed: {
                method: 'post',
                path: '/statistics/hours-played'
            },
            players: {
                method: 'post',
                path: '/statistics/players'
            },
            rakeRace: {
                method: 'post',
                path: '/statistics/rake-race'
            },
            tipsPerDealer: {
                method: 'post',
                path: '/statistics/tips-per-dealer'
            },
            tipsPerService: {
                method: 'post',
                path: '/statistics/tips-per-service'
            }
        }
    }
};

const STATISTIC_SELECTOR = {
    commissions: {
        idChart: 'myChartCommissions',
        div: 'commissionsDiv',
        label: 'commissions',
        key: 'dataCommissions',
        thisButton: 'Comm',
        idButton: 'filtComm:filter'
    } ,
    dealerTips: {
        idChart: 'myChartDealerTips',
        div: 'dealerTipsDiv',
        label: 'dealerTips',
        key: 'dataDealerTips',
        thisButton: 'Deal',
        idButton: 'filtDeal:filter'
    },
    serviceTips: {
        idChart: 'myChartServiceTips',
        div: 'serviceTipsDiv',
        label: 'serviceTips',
        key: 'dataServiceTips',
        thisButton: 'Serv',
        idButton: 'filtServ:filter'
    },
    expenses: {
        idChart: 'myChartExpenses',
        div: 'expensesDiv',
        label: 'expenses',
        key: 'dataExpenses',
        thisButton: 'Exp',
        idButton: 'filtExp:filter'
    },
    totalCashin: {
        idChart: 'myChartTotalCashin',
        div: 'totalCashinDiv',
        label: 'totalCashin',
        key: 'dataTotalCashin',
        thisButton: 'Cash',
        idButton: 'filtCash:filter'
    }
};

function parseRoute(path, args) {
    for (var rep in args) {
        path = path.replace(":" + rep, args[rep]);
    }

    return CONFIG.base_url + path;
}

function parseButtonId(idGeneric, filter) {
    return  idGeneric.replace(":filter", filter);
}

function debug(data) {
    if (DEBUG) {
        console.log(data);
    }
}

function showLoader() {
    $('#loader').addClass('loading');
}

function hideLoader() {
    $('#loader').removeClass('loading');
}

function getCurrentDate() {
    var currentDate = new Date(),
        date = currentDate.getFullYear() + "-" + (((currentDate.getMonth() + 1) < 10) ? "0" : "") + (currentDate.getMonth() + 1) + "-" + ((currentDate.getDate() < 10) ? "0" : "") + currentDate.getDate(),
        hour = ((currentDate.getHours() < 10) ? "0" : "") + currentDate.getHours() + ":" + ((currentDate.getMinutes() < 10) ? "0" : "") + currentDate.getMinutes();

    return {
        "date": date,
        "hour": hour
    };
}

function makeAPIRequest(url, method, successCallback, errorCallback, body) {
    showLoader();
    var req = {
            method: method,
            headers: {
                "Accept": "application/json"
            }
        },
        token = window.localStorage.getItem('access_token');

    if (body !== undefined) {
        req.body = body;
    }

    if (token) {
        req.headers.Authorization="Bearer " + token;
    }
    fetch(
        url,
        req
    )
        .then(function (response) {
            hideLoader();
            successCallback(response);
        })
        .catch(function (err) {
            hideLoader();
            errorCallback(err);
        });
}

function loadView(url, method, templatePath, renderer, errorHandler) {
    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200) {
                errorHandler(response);
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                var template = twig({
                    href: templatePath,
                    async: false,
                    // The default is to load asynchronously, and call the load function
                    //   when the template is loaded.
                    load: function (template) {
                        renderer(template, data);
                    }
                });
            }).catch(errorHandler);
        },
        errorHandler
    );
}

function checkLogin() {
    debug(window.localStorage.getItem('access_token'));

    if (window.localStorage.getItem('access_token') == null) {
        $('#menuitem-sessions').addClass('disabled');
        $('#menuitem-users').addClass('disabled');
        $('#menuitem-statistics').addClass('disabled');
        $('#logout').addClass('disabled');

        $('#login-div').removeClass('hide');
    }
}

function logout() {
    window.localStorage.removeItem('access_token');
    window.location.reload();
}

function loginSubmit() {
    var url = $('#login-form').attr("action"),
        method = $('#login-form').attr("method"),
        form = new FormData(document.getElementById('login-form'));

    var errorHandler = function (err) {
        debug(err)
    };

    makeAPIRequest(
        url,
        method,
        function (response) {
            // Examine the text in the response
            response.json().then(function (data) {
                if (response.status !== 200 && response.status !== 201) {
                    alert(data.detail);
                    return;
                }

                alert(data.access_token);

                // save token in localstorage
                window.localStorage.setItem('access_token', data.access_token);

                // CLOSE FORM
                $('#login-div').html('');

                // ENABLE BUTTONS
                $('#menuitem-sessions').removeClass('disabled');
                $('#menuitem-users').removeClass('disabled');
                $('#menuitem-statistics').removeClass('disabled');
                $('#logout').removeClass('disabled');
            });
        },
        errorHandler,
        form
    );
}

function fetchSessions() {
    $('.nav-link.active').removeClass('active');
    $('#menuitem-sessions').addClass('active');
    $('#forms').html('');
    $('#statistics').html('');

    var url = parseRoute(CONFIG.endpoints.sessions.fetchAll.path, {}),
        method = CONFIG.endpoints.sessions.fetchAll.method,
        errorHandler = function (err) {
            debug('Fetch Error :-S', err);
        };

    loadView(
        url,
        method,
        'templates/sessions-list.twig',
        function (template, data) {
            var output = template.render({
                sessions: data._embedded.sessions
            });
            debug(data);
            $('#main').html(output);
        },
        errorHandler
    );
}

function deleteSession(idSession) {
    var url = parseRoute(CONFIG.endpoints.sessions.delete.path, {
            "idSession": idSession
        }),
        method = CONFIG.endpoints.sessions.delete.method,
        errorHandler = function (err) {
            debug(err)
        };

    if (! confirm("¿Está seguro que desea eliminar la sesión?")) {
        return;
    }

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 204) {
                // examine the response
                response.json().then(function (data) {
                    alert(data.detail);
                    errorHandler(response);
                });
                return;
            }

            alert('Session eliminada exitosamente');
            fetchSessions();
        },
        errorHandler
    );
}

function calculatePoints(idSession) {
    var url = parseRoute(CONFIG.endpoints.sessions.calculatePoints.path, {
            "idSession": idSession
        }),
        method = CONFIG.endpoints.sessions.calculatePoints.method,
        errorHandler = function (err) {
            debug(err)
        };

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200) {
                // examine the response
                response.json().then(function (data) {
                    alert(data.detail);
                    errorHandler(response);
                });
                return;
            }

            alert('puntos cargados');
            fetchSessions();
        },
        errorHandler
    );
}

function revisionSession(idSession) {
    var url = parseRoute(CONFIG.endpoints.sessions.fetch.path, {
            "idSession": idSession
        }),
        method = CONFIG.endpoints.sessions.fetch.method;

    loadView(
        url,
        method,
        'templates/revision-session.twig',
        function (template, data) {
            var output = template.render({
                title: 'Revision de sesión',
                action: url,
                idSession: idSession,
                session: data
            });
            debug(data);
            $('#forms').html(output);
        },
        function (err) {
            debug('Fetch Error :-S', err);
        }
    );
}

function fetchUsers() {
    $('.nav-link.active').removeClass('active');
    $('#menuitem-users').addClass('active');
    $('#forms').html('');
    $('#statistics').html('');

    var url = parseRoute(CONFIG.endpoints.users.fetchAll.path, {}),
        method = CONFIG.endpoints.users.fetchAll.method,
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    loadView(
        url,
        method,
        'templates/users-list.twig',
        function (template, data) {
            var output = template.render({
                users: data._embedded.users
            });
            $('#main').html(output);
        },
        errorHandler
    );
}

function deleteUser(idUser) {
    var url = parseRoute(CONFIG.endpoints.users.delete.path, {
            "idUser": idUser
        }),
        method = CONFIG.endpoints.users.delete.method,
        errorHandler = function (err) {
            debug(err)
        };

    if (! confirm("¿Está seguro que desea eliminar el usuario?")) {
        return;
    }

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 204) {
                // examine the response
                response.json().then(function (data) {
                    alert(data.detail);
                    errorHandler(response);
                });
                return;
            }

            alert('Usuario eliminado exitosamente');
            fetchUsers();
        },
        errorHandler
    );
}

function fetchBuyins(idSession, countSeatedPlayers, sessionDate) {
    $('#forms').html('');
    var url = parseRoute(CONFIG.endpoints.buyins.fetchAll.path, {
            "idSession": idSession
        }),
        method = CONFIG.endpoints.buyins.fetchAll.method,
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    loadView(
        url,
        method,
        'templates/buyins-list.twig',
        function (template, data) {
            debug(data);
            var output = template.render({
                buyins: data._embedded.buyins,
                idSession: idSession,
                sessionDate: sessionDate,
                countSeatedPlayers: countSeatedPlayers
            });
            $('#main').html(output);
        },
        errorHandler
    );
}

function deleteBuyin(idSession, idBuyin) {
    var url = parseRoute(CONFIG.endpoints.buyins.delete.path, {
            "idBuyin": idBuyin,
            "idSession": idSession
        }),
        method = CONFIG.endpoints.buyins.delete.method,
        errorHandler = function (err) {
            debug(err)
        };

    if (! confirm("¿Está seguro que desea eliminar el buyin?")) {
        return;
    }

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 204) {
                // examine the response
                response.json().then(function (data) {
                    alert(data.detail);
                    errorHandler(response);
                });
                return;
            }

            alert('Buyin eliminado exitosamente.');
            fetchBuyins(idSession);
        },
        errorHandler
    );
}

function fetchCommissions(idSession, commissionTotal, sessionDate) {
    $('#forms').html('');
    var url = parseRoute(CONFIG.endpoints.commissions.fetchAll.path, {
            "idSession": idSession
        }),
        method = CONFIG.endpoints.commissions.fetchAll.method,
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    loadView(
        url,
        method,
        'templates/commissions-list.twig',
        function (template, data) {
            var output = template.render({
                commissions: data._embedded.commissions,
                sessionDate: sessionDate,
                idSession: idSession,
                commissionTotal: commissionTotal
            });

            debug(data);
            $('#main').html(output);
        },
        errorHandler
    );
}

function deleteCommission(idSession, idCommission) {
    var url = parseRoute(CONFIG.endpoints.commissions.delete.path, {
            "idCommission": idCommission,
            "idSession": idSession
        }),
        method = CONFIG.endpoints.commissions.delete.method,
        errorHandler = function (err) {
            debug(err)
        };

    if (! confirm("¿Está seguro que desea eliminar la comisión?")) {
        return;
    }

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 204) {
                // examine the response
                response.json().then(function (data) {
                    alert(data.detail);
                    errorHandler(response);
                });
                return;
            }

            alert('Comisión eliminada exitosamente.');
            fetchCommissions(idSession);
            debug(data);
        },
        errorHandler
    );
}

function fetchUsersSession(idSession) {
    $('#forms').html('');
    var url = parseRoute(CONFIG.endpoints.userSession.fetchAll.path, {
            "idSession": idSession
        }),
        method = CONFIG.endpoints.userSession.fetchAll.method,
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    loadView(
        url,
        method,
        'templates/userssession-list.twig',
        function (template, data) {
            debug(data);
            var output = template.render({
                usersSession: data._embedded.users_session,
                idSession: idSession
            });
            $('#main').html(output);

            debug(data)
        },
        errorHandler
    );
}

function deleteUserSession(idSession, idUserSession) {
    var url = parseRoute(CONFIG.endpoints.userSession.delete.path, {
            "idUserSession": idUserSession,
            "idSession": idSession
        }),
        method = CONFIG.endpoints.userSession.delete.method,
        errorHandler = function (err) {
            debug(err)
        };

    if (! confirm("¿Está seguro que desea eliminar el usuario d la sesión?")) {
        return;
    }

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 204) {
                // examine the response
                response.json().then(function (data) {
                    alert(data.detail);
                    errorHandler(response);
                });
                return;
            }

            alert('Usuario eliminado existosamente de la sesión.')
            fetchUsersSession(idSession);
        },
        errorHandler
    );
}

function fetchExpenses(idSession) {
    $('#forms').html('');
    var url = parseRoute(CONFIG.endpoints.expenses.fetchAll.path, {
            "idSession": idSession
        }),
        method = CONFIG.endpoints.expenses.fetchAll.method,
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    loadView(
        url,
        method,
        'templates/expenses-list.twig',
        function (template, data) {
            var output = template.render({
                expenses: data._embedded.expenses,
                idSession: idSession
            });
            $('#main').html(output);
        },
        errorHandler
    );
}

function deleteExpenditure(idSession, idExpenditure) {
    var url = parseRoute(CONFIG.endpoints.expenses.delete.path, {
            "idExpenditure": idExpenditure,
            "idSession": idSession
        }),
        method = CONFIG.endpoints.expenses.delete.method,
        errorHandler = function (err) {
            debug(err)
        };

    if (! confirm("¿Está seguro que desea eliminar el item?")) {
        return;
    }

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 204) {
                // examine the response
                response.json().then(function (data) {
                    alert(data.detail);
                    errorHandler(response);
                });
                return;
            }

            alert('Gasto eliminado exitosamente.')
            fetchExpenses(idSession);
        },
        errorHandler
    );
}

async function fetchServiceTips(template, dataDealerTips, sessionDate, idSession) {
    makeAPIRequest(
        parseRoute(CONFIG.endpoints.serviceTips.fetchAll.path, {
            "idSession": idSession
        }),
        CONFIG.endpoints.serviceTips.fetchAll.method,
        async function (response) {

            // Examine the text in the response
            const service = await response.json();
            var output = template.render(
                {
                    dealerTips: dataDealerTips._embedded.dealer_tips,
                    serviceTips: service._embedded.service_tips,
                    sessionDate: sessionDate,
                    idSession: idSession
                }
            );

            $('#main').html(output);
        },
        function (err) {
            debug(err)
        },
    )
}

function fetchDealerTips(idSession, sessionDate) {
    $('#forms').html('');
    var url = parseRoute(CONFIG.endpoints.dealerTips.fetchAll.path, {
            "idSession": idSession
        }),
        method = CONFIG.endpoints.dealerTips.fetchAll.method,
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    loadView(
        url,
        method,
        'templates/tips-list.twig',
        function (template, data) {
            let serviceTips;
            fetchServiceTips(template, data, sessionDate, idSession).then(r => serviceTips);
        },
        errorHandler
    );
}

function deleteDealerTip(idSession, idDealerTip) {
    var url = parseRoute(CONFIG.endpoints.dealerTips.deleteDealerTip.path, {
            "idDealerTip": idDealerTip,
            "idSession": idSession
        }),
        method = CONFIG.endpoints.dealerTips.deleteDealerTip.method,
        errorHandler = function (err) {
            debug(err)
        };

    if (! confirm("¿Está seguro que desea eliminar el dealer tip?")) {
        return;
    }

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 204) {
                // examine the response
                response.json().then(function (data) {
                    alert(data.detail);
                    errorHandler(response);
                });
                return;
            }

            alert('DealerTip eliminado exitosamente.')
            fetchDealerTips(idSession);
        },
        errorHandler
    );
}

function deleteServiceTip(idSession, idServiceTip) {
    var url = parseRoute(CONFIG.endpoints.serviceTips.deleteServiceTip.path, {
            "idServiceTip": idServiceTip,
            "idSession": idSession
        }),
        method = CONFIG.endpoints.serviceTips.deleteServiceTip.method,
        errorHandler = function (err) {
            debug(err)
        };

    if (! confirm("¿Está seguro que desea eliminar el service tip?")) {
        return;
    }

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 204) {
                // examine the response
                response.json().then(function (data) {
                    alert(data.detail);
                    errorHandler(response);
                });
                return;
            }

            alert('ServiceTip eliminado exitosamente.')
            fetchDealerTips(idSession);
        },
        errorHandler
    );
}

function suggestedDate(sessionDate) {
    var now = getCurrentDate(),
        now_date = moment(now.date),
        session_date = moment(sessionDate);

    if (now_date.diff(session_date, 'days') > 2) {
        return sessionDate.substring(0, 10) + "T" + sessionDate.substring(11, 16);
    }

    return now["date"] + "T" + now["hour"];
}

function updateCommission(idSession, idCommission) {
    var url = parseRoute(CONFIG.endpoints.commissions.fetch.path, {
            "idCommission": idCommission,
            "idSession": idSession
        }),
        method = CONFIG.endpoints.commissions.fetch.method,
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    loadView(
        url,
        method,
        'templates/commission-form.twig',
        function (template, data) {
            var output = template.render({
                title: 'Editar Comisión',
                action: parseRoute(CONFIG.endpoints.commissions.update.path, {
                    "idCommission": idCommission,
                    "idSession": idSession
                }),
                method: CONFIG.endpoints.commissions.update.method,
                buttonName: 'Editar',
                idSession: idSession
            });
            debug(data);
            $('#main').html('');
            $('#forms').html(output);
            $('#id').val(data.id);
            $('#idSession').val(data.idSession);
            $('#commission').val(data.commission);
            $('#hour').val(data.hour.date.substr(0, 10) + 'T' + data.hour.date.substr(11, 5));
            $('#commission').focus();
        },
        errorHandler
    );
}

function commissionSubmit(idSession) {
    var url = $('#commissions-form').attr("action"),
        method = $('#commissions-form').attr("method"),
        form = new FormData(document.getElementById('commissions-form')),
        errorHandler = function (err) {
            debug(err)
        };

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200 && response.status !== 201) {
                errorHandler(response);

                // Examine the text in the response
                response.json().then(function (data) {
                    alert(data.detail);
                });
                return;
            }

            // CLOSE FORM
            $('#forms').html('');
            // UPDATE TABLE
            if (response.status == 200) {
                alert('Comisión actualizada exitosamente.');
            }

            if (response.status == 201) {
                alert('Comisión agregada exitosamente.');
            }

            fetchCommissions(idSession);
            debug(data);

        },
        errorHandler,
        form
    );
}

function addCommission(idSession, sessionDate) {
    var template = twig({
        href: 'templates/commission-form.twig',
        async: false,
        // The default is to load asynchronously, and call the load function
        //   when the template is loaded.
        load: function (tpl) {
            var now = getCurrentDate(),
                url = parseRoute(CONFIG.endpoints.commissions.create.path, {
                    "idSession": idSession
                }),
                method = CONFIG.endpoints.commissions.create.method,
                output = tpl.render({
                    idSession: idSession,
                    sessionDate: sessionDate,
                    session: null,
                    title: 'Agregar comisión',
                    action: url,
                    method: method,
                    buttonName: 'Agregar'
                });
            $('#main').html('');
            $('#forms').html(output);
            $('#idSession').val(idSession);
            $('#hour').val(suggestedDate(sessionDate));
            $('#commission').focus();
        }
    });
}

function updateBuyin(idSession, idBuyin) {
    var url = parseRoute(CONFIG.endpoints.buyins.fetch.path, {
            "idBuyin": idBuyin,
            "idSession": idSession
        }),
        method = CONFIG.endpoints.buyins.fetch.method,
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    loadView(
        url,
        method,
        'templates/buyin-form.twig',
        function (template, data) {
            var output = template.render({
                buyin: data,
                title: 'Editar Buyin',
                action: parseRoute(CONFIG.endpoints.buyins.update.path, {
                    "idBuyin": idBuyin
                }),
                buttonName: 'Editar',
                idSession: idSession
            });

            $('#main').html('');
            $('#forms').html(output);
            $('#id').val(data.id);
            $('#idSession').val(data.idSession);
            $('#idUserSession').val(data._embedded.userSession.id);
            $('#amountCash').val(data.amountCash);
            $('#amountCredit').val(data.amountCredit);
            $('#approved').val(data.isApproved);
            $('#currency').val(data.currency);
            $('#hour').val(data.hour.date.substr(0, 10) + 'T' + data.hour.date.substr(11, 5));
            $('#amountCash').focus();
        },
        errorHandler
    );
}

function buyinSubmit(idSession) {
    var url = $('#buyins-form').attr("action"),
        method = $('#buyins-form').attr("method"),
        form = new FormData(document.getElementById('buyins-form')),
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    makeAPIRequest(
        url,
        method,
        function (response) {
            // Examine the text in the response
            if (response.status !== 200 && response.status !== 201) {
                // errorHandler(response);
                response.json().then(function (data) {
                    alert(data.detail);
                });
                return;
            }

            // CLOSE FORM
            $('#forms').html('');
            if (response.status == 200) {
                alert('Buyin actualizado exitosamente.');
            }

            if (response.status == 201) {
                alert('Buyin agregado exitosamente.');
            }

            // UPDATE TABLE
            fetchBuyins(idSession);

            // print ticket
            debug(data);
            printTicket(data);
            debug(data);

        },
        errorHandler,
        form
    );
}

function printTicket(data) {
    debug(data);
    var template = twig({
        href: 'templates/buyin-ticket.twig',
        async: false,
        // The default is to load asynchronously, and call the load function
        //   when the template is loaded.
        load: function (template) {
            var output = template.render({
                name: data._embedded.userSession._embedded.user.name,
                lastname: data._embedded.userSession._embedded.user.lastname,
                amountCredit: data.amountCredit,
                hour: data.hour.date.substr(11, 5)
            });

            $('#ticket').html(output);
        }
    });

    $('#ticket').removeClass('hide').addClass('show');
    // hidden list of buyins
    $('#main').removeClass('show').addClass('hide');
    $('#breadcrumbs').addClass('hide');
    $('#menu').addClass('hide');
}

function closeTicket() {
    // hidden list of buyins
    $('#ticket').removeClass('show').addClass('hide');

    $('#main').removeClass('hide').addClass('show');
    $('#breadcrumbs').removeClass('hide');
    $('#menu').removeClass('hide');
}

function addBuyin(button, idSession, sessionDate) {
    if ($(button).hasClass("button-disabled")) {
        return;
    }

    var template = twig({
        href: 'templates/buyin-formAdd.twig',
        async: false,
        // The default is to load asynchronously, and call the load function
        //   when the template is loaded.
        load: function (tpl) {

            var url = parseRoute(CONFIG.endpoints.buyins.create.path, {
                    "idSession": idSession
                }),
                method = CONFIG.endpoints.buyins.create.method,
                output = tpl.render({
                    idSession: idSession,
                    sessionDate: sessionDate,
                    session: null,
                    title: 'Agregar Buyin',
                    action: url,
                    buttonName: 'Agregar'
                });
            $('#forms').html(output);
            $('#idSession').val(idSession);
            // $('#hour').val(now["date"] + "T" + now["hour"]);
            $('#hour').val(suggestedDate(sessionDate));
            $('#approved').val(1);
            $('#currency').val(1);
            $('#amountCash').focus();
            var url_usersSession = parseRoute(CONFIG.endpoints.userSession.fetchAll.path, {
                "idSession": idSession
            }),
                method_fetchAll = CONFIG.endpoints.userSession.fetchAll.method,
                loadUsers = function () {
                    makeAPIRequest(
                        url_usersSession,
                        method_fetchAll,
                        function (response) {
                            if (response.status !== 200) {
                                // si falla fetch usuarios hay que reintentarlo con un max retries
                                //loadUsers();
                                return;
                            }

                            // Examine the text in the response
                            response.json().then(function (data) {
                                data._embedded.users_session.forEach(function (item) {
                                    debug(item);
                                    if (item.end == null) {
                                        $('#idUserSession').append('<option value="' + item.id + '">' + item._embedded.user.name + ' ' + item._embedded.user.lastname + '</option>');
                                    }
                                });
                            });
                        },
                        function (err) {
                            debug(err)
                        },
                    );
                };
            loadUsers();
        }
    });
}

function updateExpenditure(idSession, idExpenditure) {
    var url = parseRoute(CONFIG.endpoints.expenses.fetch.path, {
            "idExpenditure": idExpenditure,
            "idSession": idSession
        }),
        method = CONFIG.endpoints.expenses.fetch.method,
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    loadView(
        url,
        method,
        'templates/expenditure-form.twig',
        function (template, data) {
            var output = template.render({
                expenditure: data,
                title: 'Editar Gasto',
                action: parseRoute(CONFIG.endpoints.expenses.update.path, {
                    "idSession": idSession,
                    "idExpenditure": idExpenditure
                }),
                method: CONFIG.endpoints.expenses.update.method,
                buttonName: 'Editar',
                idSession: idSession
            });

            $('#main').html('');
            $('#forms').html(output);
            $('#id').val(data.id);
            $('#idSession').val(data.idSession);
            $('#description').val(data.description);
            $('#amount').val(data.amount);
            $('#description').focus();
        },
        errorHandler
    );
}

function expenditureSubmit(idSession) {
    var url = $('#expenses-form').attr("action"),
        method = $('#expenses-form').attr("method"),
        form = new FormData(document.getElementById('expenses-form')),
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200 && response.status !== 201) {
                errorHandler(response);
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                // CERRAR EL FORMULARIO
                $('#forms').html('');
                if (response.status == 200) {
                    alert('Gasto actualizado exitosamente.');
                }

                if (response.status == 201) {
                    alert('Gasto agregado exitosamente.');
                }
                // ACTUALIZAR LA TABLA
                fetchExpenses(idSession);
            });
        },
        errorHandler,
        form
    );
}

function addExpenditure(idSession) {
    var template = twig({
        href: 'templates/expenditure-form.twig',
        async: false,
        // The default is to load asynchronously, and call the load function
        //   when the template is loaded.
        load: function (tpl) {
            var url = parseRoute(CONFIG.endpoints.expenses.create.path, {
                    "idSession": idSession
                }),
                method = CONFIG.endpoints.expenses.create.method,
                output = tpl.render({
                    idSession: idSession,
                    session: null,
                    title: 'Agregar Gasto',
                    action: url,
                    method: method,
                    buttonName: 'Agregar'
                });
            $('#main').html('');
            $('#forms').html(output);
            $('#idSession').val(idSession);
        }
    });
}

function updateDealerTip(idSession, idDealerTip) {
    var url = parseRoute(CONFIG.endpoints.dealerTips.fetchDealerTip.path, {
            "idDealerTip": idDealerTip,
            "idSession": idSession
        }),
        method = CONFIG.endpoints.dealerTips.fetchDealerTip.method,
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    loadView(
        url,
        method,
        'templates/dealerTip-form.twig',
        function (template, data) {
            var output = template.render({
                dealerTip: data.dealerTip,
                title: 'Editar Dealer Tip',
                onSubmit: 'dealerTipSubmit',
                action: parseRoute(CONFIG.endpoints.dealerTips.updateDealerTip.path, {
                    "idDealerTip": idDealerTip,
                    "idSession": idSession
                }),
                method: CONFIG.endpoints.dealerTips.updateDealerTip.method,
                buttonName: 'Editar',
                idSession: idSession
            });

            $('#main').html('');
            $('#forms').html(output);
            $('#id').val(data.id);
            $('#idSession').val(idSession);
            $('#hour').val(data.hour.date.substr(0, 10) + 'T' + data.hour.date.substr(11, 5));
            $('#dealerTip').val(data.dealerTip);
            $('#dealerTip').focus();
        },
        errorHandler
    );
}

function updateServiceTip(idSession, idServiceTip) {
    var url = parseRoute(CONFIG.endpoints.serviceTips.fetchServiceTip.path, {
            "idServiceTip": idServiceTip,
            "idSession": idSession
        }),
        method = CONFIG.endpoints.serviceTips.fetchServiceTip.method,
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    loadView(
        url,
        method,
        'templates/serviceTip-form.twig',
        function (template, data) {
            var output = template.render({
                serviceTip: data.serviceTip,
                title: 'Editar Service Tip',
                onSubmit: 'serviceTipSubmit',
                action: parseRoute(CONFIG.endpoints.serviceTips.updateServiceTip.path, {
                    "idServiceTip": idServiceTip,
                    "idSession": idSession
                }),
                method: CONFIG.endpoints.serviceTips.updateServiceTip.method,
                buttonName: 'Editar',
                idSession: idSession
            });

            $('#main').html('');
            $('#forms').html(output);
            $('#id').val(data.id);
            $('#idSession').val(idSession);
            $('#hour').val(data.hour.date.substr(0, 10) + 'T' + data.hour.date.substr(11, 5));
            $('#serviceTip').val(data.serviceTip);
            $('#serviceTip').focus();
        },
        errorHandler
    );
}

function serviceTipSubmitForAdd(idSession, form, successCallback, errorCallback) {
    var url = parseRoute(CONFIG.endpoints.serviceTips.create.path, {
            "idSession": idSession
        }),
        method = CONFIG.endpoints.serviceTips.create.method,
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200 && response.status !== 201) {
                debug('service ttip no success');
                errorHandler(response);

                // Examine the text in the response
                response.json().then(function (data) {
                    alert(data.detail);
                });

                return;
            }

            alert('Service tip agregado exitosamente.');

            if (successCallback) {
                successCallback(response);
            }
        },
        errorCallback,
        form
    );
}

function dealerTipSubmitForAdd(idSession) {
    var url = $('#tips-form').attr("action"),
        method = $('#tips-form').attr("method"),
        form = new FormData(document.getElementById('tips-form')),
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200 && response.status !== 201) {
                errorHandler(response);

                // Examine the text in the response
                response.json().then(function (data) {
                    alert(data.detail);
                });

                return;
            }

            serviceTipSubmitForAdd(idSession, form, response, errorHandler);
            // Examine the text in the response
            response.json().then(function (data) {
                // CERRAR EL FORMULARIO
                $('#forms').html('');
                // ACTUALIZAR LA TABLA
                alert('Dealer tip agregado exitosamente.');
                fetchDealerTips(idSession);
                debug(data);
            });
        },
        errorHandler,
        form
    );
}

function tipSubmit(idSession) {
    var url = $('#tips-form').attr("action"),
        method = $('#tips-form').attr("method"),
        form = new FormData(document.getElementById('tips-form')),
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200 && response.status !== 201) {
                errorHandler(response);
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                // CLOSE FORM
                $('#forms').html('');
                // UPDATE TABLE
                fetchDealerTips(idSession);
                debug(data);
            });
        },
        errorHandler,
        form
    );
}

function dealerTipSubmit(idSession) {
    var url = $('#dealerTips-form').attr("action"),
        method = $('#dealerTips-form').attr("method"),
        form = new FormData(document.getElementById('dealerTips-form')),
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200 && response.status !== 201) {
                errorHandler(response);

                // Examine the text in the response
                response.json().then(function (data) {
                    alert(data.detail);
                });

                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                // CLOSE FORM
                $('#forms').html('');
                // UPDATE TABLE
                alert('Dealer tip actualizado exitosamente.');
                fetchDealerTips(idSession);
                debug(data);
            });
        },
        errorHandler,
        form
    );
}

function serviceTipSubmit(idSession) {
    var url = $('#serviceTips-form').attr("action"),
        method = $('#serviceTips-form').attr("method"),
        form = new FormData(document.getElementById('serviceTips-form')),
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200 && response.status !== 201) {
                errorHandler(response);

                // Examine the text in the response
                response.json().then(function (data) {
                    alert(data.detail);
                });

                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                // CLOSE FORM
                $('#forms').html('');
                // UPDATE TABLE
                alert('Service tip actualizado exitosamente.');
                fetchDealerTips(idSession);
                debug(data);
            });
        },
        errorHandler,
        form
    );
}

function addTips(idSession, sessionDate) {
    var template = twig({
        href: 'templates/tips-form.twig',
        async: false,
        // The default is to load asynchronously, and call the load function
        //   when the template is loaded.
        load: function (tpl) {
            var url = parseRoute(CONFIG.endpoints.dealerTips.create.path, {
                    "idSession": idSession
                }),
                method = CONFIG.endpoints.dealerTips.create.method,
                output = tpl.render({
                    idSession: idSession,
                    sessionDate: sessionDate,
                    session: null,
                    title: 'Agregar Tips',
                    onSubmit: 'dealerTipSubmitForAdd',
                    action: url,
                    method: method,
                    buttonName: 'Agregar'
                });

            $('#main').html('');
            $('#forms').html(output);
            $('#idSession').val(idSession);
            $('#hour').val(suggestedDate(sessionDate));
        }
    });
}

function updateUserSession(button, idSession, idUserSession) {
    if ($(button).hasClass("button-disabled")) {
        return;
    }

    var url = parseRoute(CONFIG.endpoints.userSession.fetch.path, {
            "idUserSession": idUserSession,
            "idSession": idSession
        }),
        method = CONFIG.endpoints.userSession.fetch.method;

    loadView(
        url,
        method,
        'templates/usersession-form.twig',
        function (template, data) {
            var output = template.render({
                userSession: data,
                title: 'Editar Usuario',
                action: parseRoute(CONFIG.endpoints.userSession.update.path, {
                    "idUserSession": idUserSession,
                    "idSession": idSession
                }),
                method: CONFIG.endpoints.userSession.update.method,
                buttonName: 'Editar',
                idSession: idSession
            });

            debug(data);
            $('#main').html('');
            $('#forms').html(output);
            $('#id').val(data.id);
            $('#idUser').val(data._embedded.user.id);
            $('#idSession').val(idSession);
            $('#points').val(data.accumulatedPoints);
            $('#isApproved').val(data.isApproved);

            // if isset start, show
            $('#start').val(data.start.date.substr(0, 10) + 'T' + data.start.date.substr(11, 5));
            $('#minimum_minutes').val(data.minimumMinutes);
            $('#cashout').val(data.cashout);

            if (data.end) {
                $('#end').val(data.end.date.substr(0, 10) + 'T' + data.end.date.substr(11, 5));
            }

            $('#usersession-form').addClass('active-player');

        },
        function (err) {
            debug('Fetch Error :-S', err);
        }
    );
}

function closeUserSession(button, idSession, idUserSession) {
    if ($(button).hasClass("button-disabled")) {
        return;
    }

    var url = parseRoute(CONFIG.endpoints.userSession.fetch.path, {
            "idSession": idSession,
            "idUserSession": idUserSession
        }),
        method = CONFIG.endpoints.userSession.fetch.method;

    loadView(
        url,
        method,
        'templates/usersession-form.twig',
        function (template, data) {
            debug(data);
            var now = getCurrentDate(),
                output = template.render({
                    userSession: data._embedded.users_session,
                    title: 'Cerrar sessión de usuario',
                    action: parseRoute(CONFIG.endpoints.userSession.closeUserSession.path, {
                        "idUserSession": idUserSession
                    }),
                    method: CONFIG.endpoints.userSession.closeUserSession.method,
                    buttonName: 'Enviar',
                    idSession: idSession
                });

            $('#main').html('');
            $('#forms').html(output);
            $('#id').val(data.id);
            $('#idUser').val(data._embedded.user.id);
            $('#cashout').val(data.cashout);
            $('#end').val(now["date"] + "T" + now["hour"]);
            $('#cashout').focus();
            $('#start').val(data.start.date.substr(0, 10) + 'T' + data.start.date.substr(11, 5));
            $('#minimum_minutes').val(data.minimumMinutes);
            // $('#usersession-form').addClass('active-player');
        },
        function (err) {
            debug('Fetch Error :-S', err);
        }
    );
}

function userSessionSubmit(idSession) {
    var url = $('#usersession-form').attr("action"),
        method = $('#usersession-form').attr("method"),
        form = new FormData(document.getElementById('usersession-form')),
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200 && response.status !== 201) {
                errorHandler(response);
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                // CLOSE FORM
                $('#forms').html('');

                if (response.status == 200) {
                    alert('Usuario de sesión actualizado exitosamente.');
                }

                if (response.status == 201) {
                    alert('Usuario agregado exitosamente a la sesión.');
                }
                // UPDATE TABLE
                fetchUsersSession(idSession);
                debug(data);
            });
        },
        errorHandler,
        form
    );
}

function addUserSession(idSession) {
    // cargo el template de form
    var template = twig({
        href: 'templates/usersession-formAdd.twig',
        async: false,
        // The default is to load asynchronously, and call the load function
        //   when the template is loaded.
        load: function (tpl) {
            var url = parseRoute(CONFIG.endpoints.userSession.create.path, {
                    "idSession": idSession
                }),
                output = tpl.render({
                    idSession: idSession,
                    session: null,
                    title: 'Agregar Usuario',
                    action: url,
                    buttonName: 'Agregar'
                });

            $('#main').html('');
            $('#forms').html(output);
            $('#idSession').val(idSession);
            $('#approved').val(1);
            $('#point').val(0);
            var url_users = parseRoute(CONFIG.endpoints.users.fetchAll.path, {}),
                method_fetchAll = CONFIG.endpoints.users.fetchAll.method,

             loadUsers = function () {
                makeAPIRequest(
                    url_users,
                    method_fetchAll,
                    function (response) {
                        if (response.status !== 200) {
                            // si falla fetch usuarios hay que reintentarlo con un max retries
                            //loadUsers();
                            return;
                        }

                        // Examine the text in the response
                        response.json().then(function (data) {
                            data._embedded.users.forEach(function (item) {
                                $('#users_id').append('<option value="' + item.id + '">' + item.name + ' ' + item.lastname + '</option>');
                            });
                        });
                    },
                    function (err) {
                        debug(err)
                    },
                );
            };
            loadUsers();
        }
    });
}

function updateUser(idUser) {
    var url = parseRoute(CONFIG.endpoints.users.fetch.path, {
            "idUser": idUser
        }),
        method = CONFIG.endpoints.users.fetch.method,
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    loadView(
        url,
        method,
        'templates/user-form.twig',
        function (template, data) {
            var output = template.render({
                user: data,
                title: 'Editar Usuario',
                action: parseRoute(CONFIG.endpoints.users.update.path, {
                    "idUser": idUser
                }),
                method: CONFIG.endpoints.users.update.method,
                buttonName: 'Editar'
            });

            $('#main').html('');
            $('#forms').html(output);
            $('#id').val(data.id);
            $('#lastname').val(data.lastname);
            $('#firstname').val(data.name);
            $('#username').val(data.username);
            $('#email').val(data.email);
            $('#multiplier').val(data.multiplier);
            $('#password').val(data.password);
            $('#active').val(data.active);
            $('#sessions').val(data.sessions);
            $('#points').val(data.points);
            $('#results').val(data.results);
            $('#cashin').val(data.cashin);
            $('#hours').val(data.hours);
            $('#active').val(data.isActive);
        },
        errorHandler
    );
}

function userSubmit() {
    var url = $('#users-form').attr("action"),
        method = $('#users-form').attr("method"),

        form = new FormData(document.getElementById('users-form')),
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200 && response.status !== 201) {
                errorHandler(response);
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                // CLOSE FORM
                $('#forms').html('');
                if (response.status == 200) {
                    alert('usuario actualizado exitosamente.');
                }

                if (response.status == 201) {
                    alert('Usuario agregado exitosamente.');
                }
                // UPDATE TABLE
                fetchUsers();
            });
        },
        errorHandler,
        form
    );
}

function addUser() {
    var template = twig({
        href: 'templates/user-form.twig',
        async: false,
        // The default is to load asynchronously, and call the load function
        //   when the template is loaded.
        load: function (tpl) {
            var url = parseRoute(CONFIG.endpoints.users.create.path, {}),
                method = CONFIG.endpoints.users.create.method,
                output = tpl.render({
                    title: 'Agregar Usuario',
                    action: url,
                    method: method,
                    buttonName: 'Agregar'
                });
            $('#main').html('');
            $('#forms').html(output);
            $('#active').val(1);
            $('#sessions').val(0);
            $('#points').val(0);
            $('#results').val(0);
            $('#cashin').val(0);
            $('#hours').val(0);
        }
    });
}

function playSession(idSession) {
    var url = parseRoute(CONFIG.endpoints.sessions.playSession.path, {
            "idSession": idSession
        }),
        method = CONFIG.endpoints.sessions.playSession.method,
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200) {
                errorHandler(response);
                return;
            }
            fetchSessions();
        },
        errorHandler
    );
}

function stopSession(idSession) {
    var url = parseRoute(CONFIG.endpoints.sessions.stopSession.path, {
            "idSession": idSession
        }),
        method = CONFIG.endpoints.sessions.stopSession.method,
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200) {
                errorHandler(response);
                return;
            }
            fetchSessions();
        },
        errorHandler
    );
}

function updateSession(idSession) {
    var url = parseRoute(CONFIG.endpoints.sessions.fetch.path, {
            "idSession": idSession
        }),
        method = CONFIG.endpoints.sessions.fetch.method;

    loadView(
        url,
        method,
        'templates/session-form.twig',
        function (template, data) {
            var output = template.render({
                session: data,
                title: 'Editar Sesión',
                action: parseRoute(CONFIG.endpoints.sessions.update.path, {
                    "idSession": idSession
                }),
                method: CONFIG.endpoints.sessions.update.method,
                buttonName: 'Editar',
                idSession: idSession
            });

            debug(data);
            $('#main').html('');
            $('#forms').html(output);
            $('#id').val(data.id);
            $('#idSession').val(data.idSession);
            $('#description').val(data.description);
            $('#title').val(data.title);
            $('#date').val(data.date.date.substr(0, 10));
            $('#start_at').val(data.startTime.date.substr(0, 10) + 'T' + data.startTime.date.substr(11, 5));
            if (data.startTimeReal != null) {
                $('#real_start_at').val(data.startTimeReal.date.substr(0, 10) + 'T' + data.startTimeReal.date.substr(11, 5));
            }
            if (data.endTime != null) {
                $('#end_at').val(data.endTime.date.substr(0, 10) + 'T' + data.endTime.date.substr(11, 5));
            }
            $('#minimum_user_session_minutes').val(data.minimumUserSessionMinutes);

            // $('.inactive-data').attr("disabled",true);
            $(".form :input, .inactive-data :input").attr("disabled","true");

            var url = parseRoute(CONFIG.endpoints.rakebackAlgorithms.fetchAll.path, {}),
                method = CONFIG.endpoints.rakebackAlgorithms.fetchAll.method,
                errorHandler = function (err) {
                    debug('Fetch Error :-S', err)
                },

                loadAlgorithms = function () {
                    makeAPIRequest(
                        url,
                        method,
                        function (response) {
                            if (response.status !== 200) {
                                return;
                            }

                            // Examine the text in the response
                            response.json().then(function (data) {
                                debug(data);
                                Object.values(data.algorithmsNames).forEach(function (item) {
                                    debug(item);
                                    $('#rakeback_class').append('<option value="' + item + '">' + item + '</option>');
                                });
                                $('#rakeback_namespace').val(data.namespace);
                            });
                        },
                        errorHandler,
                    );
                };
            loadAlgorithms();
        },
        function (err) {
            debug('Fetch Error :-S', err);
        }
    );
}

function sessionSubmit() {
    var url = $('#sessions-form').attr("action"),
        method = $('#sessions-form').attr("method"),
        form = new FormData(document.getElementById('sessions-form')),
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        };

    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200 && response.status !== 201) {
                errorHandler(response);
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                // CLOSE FORM
                $('#forms').html('');
                if (response.status == 200) {
                    alert('Sesión actualizada exitosamente.');
                }

                if (response.status == 201) {
                    alert('Sesión agregada exitosamente.');
                }
                // UPDATE TABLE
                fetchSessions();
            });
        },
        errorHandler,
        form
    );
}

function addSession() {
    var template = twig({
        href: 'templates/session-form.twig',
        async: false,
        // The default is to load asynchronously, and call the load function
        //   when the template is loaded.
        load: function (tpl) {
            var now = getCurrentDate(),
                url = parseRoute(CONFIG.endpoints.sessions.create.path, {}),
                method = CONFIG.endpoints.sessions.create.method,
                output = tpl.render({
                    title: 'Agregar Sesión',
                    action: url,
                    method: method,
                    buttonName: 'Agregar'
                });
            $('#main').html('');
            $('#forms').html(output);
            $('#date').val(now["date"]);
            $('#start_at').val(now["date"] + "T" + now["hour"]);
            $('#minimum_user_session_minutes').val(240);
            $('#real_hour').addClass('inactive-data');
            $('#end_session').addClass('inactive-data');

            var url_alg = parseRoute(CONFIG.endpoints.rakebackAlgorithms.fetchAll.path, {}),
                method_alg = CONFIG.endpoints.rakebackAlgorithms.fetchAll.method,
                errorHandler = function (err) {
                    debug('Fetch Error :-S', err)
                },
                loadAlgorithms = function () {
                    makeAPIRequest(
                        url_alg,
                        method_alg,
                        function (response) {
                            if (response.status !== 200) {
                                return;
                            }

                            // Examine the text in the response
                            response.json().then(function (data) {
                                debug(data);
                                Object.values(data.algorithmsNames).forEach(function (item) {
                                    debug(item);
                                    $('#rakeback_class').append('<option value="' + item + '">' + item + '</option>');
                                });
                                $('#rakeback_namespace').val(data.namespace);
                            });
                        },
                        errorHandler,
                    );
                };
            loadAlgorithms();
        }
    });
}

function chargeAmount(id, amount) {
    $('#' + id).val(amount);
}

function rotationDate() {
    $('.show-column .day').toggleClass('hide-me');
    $('.show-column .date').toggleClass('hide-me');
}

function rotationTitle() {
    $('.show-column .title').toggleClass('hide-me');
    $('.show-column .descrip').toggleClass('hide-me');
}

function rotationSeats() {
    $('.show-column .seats').toggleClass('hide-me');
    $('.show-column .seats-history').toggleClass('hide-me');
}

function requestStatistics () {
    $('.nav-link.active').removeClass('active');
    $('#menuitem-statistics').addClass('active');
    var template = twig({
        href: 'templates/statistics-form.twig',
        async: false,
        // The default is to load asynchronously, and call the load function
        //   when the template is loaded.
        load: function (tpl) {
            var output = tpl.render({
            });
            $('#main').html('');
            $('#statistics').html('');
            $('#forms').html(output);
        }
    });

}

function generateDataOfPeriod(start, end) {
    // generate initialized data
    const dateStart = moment(start);
    const dateEnd = moment(end);
    const years = {};

    for (var i = dateStart; i <= dateEnd; i.add(1, 'month') ) {
        if (! years.hasOwnProperty(i.format('YYYY'))) {
            years[i.format('YYYY')] = {};
        }

        years[i.format('YYYY')][i.format('MMMM')] = 0;
    }

    return years;
}

function generateDaysOfWeeks() {
    var days = {};
    moment.weekdays().forEach(function(day) {
        days[day] = {
            count: 0,
            total: 0
        };
    });

    return days;
}

function configureButtons(buttonInactive, thisButton) {
    $('#filt'+thisButton+'BySession').prop('disabled', false).removeClass('button-disabled');
    $('#filt'+thisButton+'ByMonth').prop('disabled', false).removeClass('button-disabled');
    $('#filt'+thisButton+'ByDay').prop('disabled', false).removeClass('button-disabled');
    $('#filt'+thisButton+'ByDayAverage').prop('disabled', false).removeClass('button-disabled');

    $('#' + buttonInactive).prop('disabled', true).addClass('button-disabled');
}

function filterAndRender(entity, filter) {
    window['display'+ filter](STATISTIC_SELECTOR[entity].idChart, STATISTIC_SELECTOR[entity].div, STATISTIC_SELECTOR[entity].label, STATISTIC_SELECTOR[entity].key);
    configureButtons(parseButtonId(STATISTIC_SELECTOR[entity].idButton, filter), STATISTIC_SELECTOR[entity].thisButton);
}

function displayBySession(idChart, div, label, key) {
    $('#' + idChart).remove();
    $('#' + div).append("<canvas id='"+idChart+"'> </canvas>");

    var ctx = document.getElementById(idChart),
        totals = [],
        dates = [];

    statisticsResponse[key].forEach(function (item) {
        totals.push(item.total);
        dates.push(item.startTimeReal.date.substr(0, 10).replace(/-/g, '/'));
    });

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dates,
            datasets: [{
                label: '#' + label,
                data: totals,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function displayByMonth(idChart, div, label, key) {
    var list = generateDataOfPeriod(statisticsResponse.interval.from, statisticsResponse.interval.end);

    // loadDataOfPeriod
    statisticsResponse[key].forEach(function (item) {
        debug(item.total);
        list[moment(item.startTimeReal.date).format('YYYY')][moment(item.startTimeReal.date).format('MMMM')] += parseFloat(item.total);
    });

    $('#' + idChart).remove();
    $('#' + div).append("<canvas id='"+idChart+"'></canvas>");
    var ctx = document.getElementById(idChart),
        totals = [],
        months = [];

    for (var year in list) {
        if (list.hasOwnProperty(year)) {
            debug(year);
            for (var month in list[year]) {
                if (list[year].hasOwnProperty(month)) {
                    totals.push(list[year][month]);
                    months.push(month+ '-' + year);
                }
            }
        }
    }

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: '#' + label,
                data: totals,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function displayByDay(idChart, div, label, key) {
    var days = generateDaysOfWeeks();

    // loadDataOfPeriod
    statisticsResponse[key].forEach(function (item) {
        days[moment(item.startTimeReal.date).format('dddd')]['count']++; //+= parseFloat(item.total);
        days[moment(item.startTimeReal.date).format('dddd')]['total'] += parseFloat(item.total);
    });

    $('#' + idChart).remove();
    $('#' + div).append("<canvas id='"+idChart+"'></canvas>");

    var ctx = document.getElementById(idChart),
        totals = [],
        daysOfWeek = [];

    for (var day in days) {
        if (days.hasOwnProperty(day)) {
            totals.push(days[day]['total']);
            daysOfWeek.push(day + '(' + days[day]['count'] + ')');
        }
    }

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: daysOfWeek,
            datasets: [{
                label: '#' + label,
                data: totals,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function displayByDayAverage(idChart, div, label, key) {
    var days = generateDaysOfWeeks();

    // loadDataOfPeriod
    statisticsResponse[key].forEach(function (item) {
        days[moment(item.startTimeReal.date).format('dddd')]['count']++; //+= parseFloat(item.total);
        days[moment(item.startTimeReal.date).format('dddd')]['total'] += parseFloat(item.total);
    });

    $('#' + idChart).remove();
    $('#' + div).append("<canvas id='"+idChart+"'></canvas>");

    var ctx = document.getElementById(idChart),
        average = [],
        daysOfWeek = [];

    for (var day in days) {
        if (days.hasOwnProperty(day)) {
            average.push(days[day]['count'] > 0 ? days[day]['total']/days[day]['count']: 0);
            daysOfWeek.push(day);
        }
    }

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: daysOfWeek,
            datasets: [{
                label: '#' + label,
                data: average,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

/*
function displayTotalCashinByMonth(data) {
    debug(data);
    var list = generateDataOfPeriod(data.interval.from, data.interval.end);

    // loadDataOfPeriod
    data.dataTotalCashin.forEach(function (item) {
        debug(item.total);
        list[moment(item.startTimeReal.date).format('YYYY')][moment(item.startTimeReal.date).format('MMMM')] += parseFloat(item.total);
    });
    debug('list'); debug(list);

    // render graphic
    $('#myChartTotalCashin').remove();
    $('#filtCashByMonth').prop('disabled', true).addClass('button-disabled');
    $('#filtCashBySession').prop('disabled', false).removeClass('button-disabled');

    $('#totalCashinDiv').append("<canvas id='myChartTotalCashin'></canvas>");
    var ctx = document.getElementById('myChartTotalCashin'),
        totals = [],
        months = [];

    for (var year in list) {
        if (list.hasOwnProperty(year)) {
            debug(year);
            for (var month in list[year]) {
                if (list[year].hasOwnProperty(month)) {
                    debug(month);
                    totals.push(list[year][month]);
                    months.push(month+ '-' + year);
                }
            }
        }
    }

    debug(totals); debug(months);

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: '# TotalCashinByMonth',
                data: totals,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

 */

var statisticsResponse = {};

function loadCommissionsData(url, method, form, successHandler, errorHandler) {
    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200 && response.status !== 201) {
                errorHandler(response);

                // Examine the text in the response
                response.json().then(function (data) {
                    alert(data.detail);
                });
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                statisticsResponse.dataCommissions =  data.data;
                successHandler();
            });
        },
        errorHandler,
        form
    );
}

function loadDealerTipsData (url, method, form, successHandler, errorHandler) {
    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200 && response.status !== 201) {
                errorHandler(response);

                // Examine the text in the response
                response.json().then(function (data) {
                    alert(data.detail);
                });
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                statisticsResponse.dataDealerTips = data.data;
                successHandler();
            });
        },
        errorHandler,
        form
    );
}

function loadServiceTipsData(url, method, form, successHandler, errorHandler) {
    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200 && response.status !== 201) {
                errorHandler(response);

                // Examine the text in the response
                response.json().then(function (data) {
                    alert(data.detail);
                });
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                statisticsResponse.dataServiceTips = data.data;
                successHandler();
            });
        },
        errorHandler,
        form
    );
}

function loadExpensesData(url, method, form, successHandler, errorHandler) {
    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200 && response.status !== 201) {
                errorHandler(response);

                // Examine the text in the response
                response.json().then(function (data) {
                    alert(data.detail);
                });
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                statisticsResponse.dataExpenses= data.data;
                successHandler();
            });
        },
        errorHandler,
        form
    );
}

function loadTotalCashinData(url, method, form, successHandler, errorHandler) {
    makeAPIRequest(
        url,
        method,
        function (response) {
            if (response.status !== 200 && response.status !== 201) {
                errorHandler(response);

                // Examine the text in the response
                response.json().then(function (data) {
                    alert(data.detail);
                });
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                statisticsResponse.dataTotalCashin= data.data;
                successHandler();
            });
        },
        errorHandler,
        form
    );
}

function statisticsSubmit() {
      var form = new FormData(document.getElementById('statistics-form')),
        errorHandler = function (err) {
            debug('Fetch Error :-S', err)
        },
        urlCommissions = parseRoute(CONFIG.endpoints.statistics.commissions.path, {}),
        methodCommissions = CONFIG.endpoints.statistics.commissions.method,
        urlDealerTips = parseRoute(CONFIG.endpoints.statistics.dealerTips.path, {}),
        methodDealerTips = CONFIG.endpoints.statistics.dealerTips.method,
        urlServiceTips = parseRoute(CONFIG.endpoints.statistics.serviceTips.path, {}),
        methodServiceTips = CONFIG.endpoints.statistics.serviceTips.method,
        urlExpenses = parseRoute(CONFIG.endpoints.statistics.expenses.path, {}),
        methodExpenses = CONFIG.endpoints.statistics.expenses.method,
        urlTotalCashin = parseRoute(CONFIG.endpoints.statistics.totalCashin.path, {}),
        methodTotalCashin = CONFIG.endpoints.statistics.totalCashin.method,
        urlHoursPlayed = parseRoute(CONFIG.endpoints.statistics.hoursPlayed.path, {}),
        methodHoursPlayed = CONFIG.endpoints.statistics.hoursPlayed.method,
        urlPlayers = parseRoute(CONFIG.endpoints.statistics.players.path, {}),
        methodPlayers = CONFIG.endpoints.statistics.players.method,
        urlRakeRace = parseRoute(CONFIG.endpoints.statistics.rakeRace.path, {}),
        methodRakeRace = CONFIG.endpoints.statistics.rakeRace.method,
        urlTipsPerDealer = parseRoute(CONFIG.endpoints.statistics.tipsPerDealer.path, {}),
        methodTipsPearDealer = CONFIG.endpoints.statistics.tipsPerDealer.method,
        urlTipsPerService = parseRoute(CONFIG.endpoints.statistics.tipsPerService.path, {}),
        methodTipsPerService = CONFIG.endpoints.statistics.tipsPerService.method;

    var interval = $('#statistics-form').serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});

    statisticsResponse.interval = interval;

    $('#forms').html('');
    $('#main').html('');

    loadCommissionsData(urlCommissions, methodCommissions, form, function() {
        $('#statistics').append(
            "<div class='widget' id='commissionsDiv' </div> " +
            "<button type=\"button\" class=\"btn btn-primary\" id='filtCommBySession' onclick='filterAndRender(\"commissions\", \"BySession\")'>bySession</button>" +
            "<button type=\"button\" class=\"btn btn-success\" id='filtCommByMonth' onclick='filterAndRender(\"commissions\", \"ByMonth\")'>byMonth</button>" +
            "<button type=\"button\" class=\"btn btn-warning\" id='filtCommByDay' onclick='filterAndRender(\"commissions\", \"ByDay\")'>byDay</button>" +
            "<button type=\"button\" class=\"btn btn-danger\" id='filtCommByDayAverage' onclick='filterAndRender(\"commissions\", \"ByDayAverage\")'>byDayAverage</button>"
        );
        filterAndRender('commissions', 'BySession');
    }, errorHandler);

    loadDealerTipsData(urlDealerTips, methodDealerTips, form, function () {
        $('#statistics').append(
            "<div class='widget' id='dealerTipsDiv' </div> " +
            "<button type=\"button\" class=\"btn btn-primary\" id='filtDealBySession' onclick='filterAndRender(\"dealerTips\", \"BySession\")'>bySession</button>" +
            "<button type=\"button\" class=\"btn btn-success\" id='filtDealByMonth' onclick='filterAndRender(\"dealerTips\", \"ByMonth\")'>byMonth</button>" +
            "<button type=\"button\" class=\"btn btn-warning\" id='filtDealByDay' onclick='filterAndRender(\"dealerTips\", \"ByDay\")'>byDay</button>" +
            "<button type=\"button\" class=\"btn btn-danger\" id='filtDealByDayAverage' onclick='filterAndRender(\"dealerTips\", \"ByDayAverage\")'>byDayAverage</button>"
        );
        filterAndRender('dealerTips', 'BySession');
    }, errorHandler);

    loadServiceTipsData(urlServiceTips, methodServiceTips, form, function () {
        $('#statistics').append(
            "<div class='widget' id='serviceTipsDiv' </div> " +
            "<button type=\"button\" class=\"btn btn-primary\" id='filtServBySession' onclick='filterAndRender(\"serviceTips\", \"BySession\")'>bySession</button>" +
            "<button type=\"button\" class=\"btn btn-success\" id='filtServByMonth' onclick='filterAndRender(\"serviceTips\", \"ByMonth\")'>byMonth</button>" +
            "<button type=\"button\" class=\"btn btn-warning\" id='filtServByDay' onclick='filterAndRender(\"serviceTips\", \"ByDay\")'>byDay</button>" +
            "<button type=\"button\" class=\"btn btn-danger\" id='filtServByDayAverage' onclick='filterAndRender(\"serviceTips\", \"ByDayAverage\")'>byDayAverage</button>"
        );
        filterAndRender('serviceTips', 'BySession');
    }, errorHandler);

    loadExpensesData(urlExpenses, methodExpenses, form, function () {
        $('#statistics').append(
            "<div class='widget' id='expensesDiv' </div> " +
            "<button type=\"button\" class=\"btn btn-primary\" id='filtExpBySession' onclick='filterAndRender(\"expenses\", \"BySession\")'>bySession</button>" +
            "<button type=\"button\" class=\"btn btn-success\" id='filtExpByMonth' onclick='filterAndRender(\"expenses\", \"ByMonth\")'>byMonth</button>" +
            "<button type=\"button\" class=\"btn btn-warning\" id='filtExpByDay' onclick='filterAndRender(\"expenses\", \"ByDay\")'>byDay</button>" +
            "<button type=\"button\" class=\"btn btn-danger\" id='filtExpByDayAverage' onclick='filterAndRender(\"expenses\", \"ByDayAverage\")'>byDayAverage</button>"
        );
        filterAndRender('expenses', 'BySession');
    }, errorHandler);


    loadTotalCashinData(urlTotalCashin, methodTotalCashin, form, function () {
        $('#statistics').append(
            "<div class='widget' id='totalCashinDiv' </div> " +
            "<button type=\"button\" class=\"btn btn-primary\" id='filtCashBySession' onclick='filterAndRender(\"totalCashin\", \"BySession\")'>bySession</button>" +
            "<button type=\"button\" class=\"btn btn-success\" id='filtCashByMonth' onclick='filterAndRender(\"totalCashin\", \"ByMonth\")'>byMonth</button>" +
            "<button type=\"button\" class=\"btn btn-warning\" id='filtCashByDay' onclick='filterAndRender(\"totalCashin\", \"ByDay\")'>byDay</button>" +
            "<button type=\"button\" class=\"btn btn-danger\" id='filtCashByDayAverage' onclick='filterAndRender(\"totalCashin\", \"ByDayAverage\")'>byDayAverage</button>"
        );
        filterAndRender('totalCashin', 'BySession');
    }, errorHandler);

}