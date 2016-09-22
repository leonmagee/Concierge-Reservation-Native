var api = {
    getBios(username) {
        username = username.toLowerCase().trim();
        var url = `https://api.github.com/users/${username}`;
        return fetch(url).then((res) => res.json());
    },
    getRepos(username) {
        username = username.toLowerCase().trim();
        var url = `https://api.github.com/users/${username}/repos`;
        return fetch(url).then((res) => res.json());
    },
    getReservations(restaurant) {
       var url = `http://conciergereservation.com/wp-json/cr/reservations`;
        return fetch(url).then((res) => res.json());
    },
    getRestaurants() {
        var url = 'https://conciergereservation.com/wp-json/cr/restaurants';
        //return fetch(url).then((res) => { return res.json() });
        //return fetch(url);
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


    }
}

module.exports = api;