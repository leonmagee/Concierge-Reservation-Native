var api = {
    getReservations(restaurant) {
        var url = `http://conciergereservation.com/wp-json/cr/reservations`;
        return fetch(url).then((res) => res.json());
    },
    getRestaurants() {
        var url = 'https://conciergereservation.com/wp-json/cr/restaurants';
        return fetch(url).then((res) => res.json());
        // fetch(url)
        //     .then(function(res){
        //         return res.json();
        //     })
        //     .then(function(jsonRes){
        //         //var jsonResults = jsonRes;
        //         console.log('The Response', jsonRes);
        //         return jsonRes;
        //
        //     })
        //     .catch(function(err){
        //         console.log('error', err);
        //     });
    },
    postReservations() {

        console.log('working at first at least...');
        var data = {title: 'my fun title', excerpt: 'funny excerpt', content: 'some content', status: 'publish'};
        /**
         * try this again with login and url info for current live https site...
         */
        //var username = 'testuser';
        //var password = '*s5mxOA077kn0u5H#1t194C1';
        var username = 'leonmagee';
        var password = 'G5waB0NrQ9LxPy7wx5ngw';
        var cr_api_key = 'lRrOiQGgN1Oq';
        var cr_api_secret = 'jj5ArQTDPij8oY41WPfGbRbim7JiHOL8zQnaGOJfrJVG5aO9';
        //var url = 'http://www.meetup-info.dev/wp-json/wp/v2/posts';
        var url = 'https://conciergereservation.com/wp-json/wp/v2/posts';
        //var url = `https://conciergereservation.com/wp-json/wp/v2/posts?api_key={cr_api_key}`;
        //var url = 'http://www.conciergereservation.dev/wp-json/cr/reservations';
        // Client Key	omW04d1ugmEN
        // Client Secret	5R3hZqXyLNlsOByCtyAK1CsgSbHk8TFJWaJ9B4QNXMWnh62p'

        // return fetch(url, {
        //         method: "POST",
        //         headers: {
        //             //'Authorization': 'Basic ' + btoa(username + ":" + password),
        //             //'Authorization': 'Basic ' + btoa("leonmagee:G5waB0NrQ9LxPy7wx5ngw"),
        //             'Authorization': 'OAuth',
        //             //'Authorization': 'Basic ' + btoa("xxxxx:xxxx"),
        //             'Content-Type': 'application/x-www-form-urlencoded'
        //             //'Accept': 'application/json',
        //             //'Origin': '',
        //             //'Content-Type': 'application/json'
        //             //'Content-Type': 'text/plain'
        //             //'Content-Type': 'application/json; charset=UTF-8',
        //             //'crossDomain' : true
        //         },
        //         body: JSON.stringify(data)
        //     }
        // ).then((res) => res.json());

        return fetch(url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Origin': '',
                    'Host': 'https://conciergereservation.com'
                },
                body: JSON.stringify({
                    'client_id': 'lRrOiQGgN1Oq',
                    'client_secret': 'jj5ArQTDPij8oY41WPfGbRbim7JiHOL8zQnaGOJfrJVG5aO9',
                    'grant_type': 'client_credentials'
                })
            }
        ).then((res) => {
            console.log('awesome', res)
        });

        //
        // var obj = {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'Origin': '',
        //         'Host': 'api.producthunt.com'
        //     },
        //     body: JSON.stringify({
        //         'client_id': '(API KEY)',
        //         'client_secret': '(API SECRET)',
        //         'grant_type': 'client_credentials'
        //     })
        // }


        // fetch('https://onesignal.com/api/v1/notifications', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         'app_id': '(API KEY)',
        //         'contents': {"en": "English Message"},
        //         'app_ids': ["APP IDS"],
        //         'data': {'foo': 'bar'}
        //     })
        // }).then((response) => {
        //     console.log(response)
        // }).catch((error){
        //     console.log(error)
        // })


        // fetch('URL_GOES_HERE', {
        //     method: 'post',
        //     headers: {
        //         'Authorization': 'Basic ' + btoa('username:password'),
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     body: 'A=1&B=2'
        // });

        //method: 'POST',

        // data: data,
        // crossDomain: true,
        // beforeSend: function (xhr) {
        //     xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password));
        // },
        // success: function (response) {
        //     console.log(response);
    }
}

module.exports = api;