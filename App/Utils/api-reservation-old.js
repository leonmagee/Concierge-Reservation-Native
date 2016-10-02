var api = {
    getReservations() { // need to sort by concierge ID...
        var url = `https://conciergereservation.com/wp-json/cr/reservations`;
        return fetch(url).then((res) => res.json());
    },
    getRestaurants() {
        var url = 'https://conciergereservation.com/wp-json/cr/restaurants';
        return fetch(url).then((res) => res.json());
    },
    postReservations(reservation_data) {

        console.log(reservation_data);

        // credentials for https://conciergereservation.com
        // safer to use OAuth, not sure how to set up...
        var username = 'leonmagee';
        var password = 'G5waB0NrQ9LxPy7wx5ngw';
        var url = 'https://conciergereservation.com/wp-json/wp/v2/reservation';
        //var url = `http://conciergereservation.com/wp-json/cr/reservations`;

        return fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + btoa(username + ":" + password),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reservation_data)
            }
        ).then((res) => res.json());
    },

    postReservationsMeta(id, reservation_data_meta) {

        var username = 'leonmagee';
        var password = 'G5waB0NrQ9LxPy7wx5ngw';
        var url = `https://conciergereservation.com/wp-json/acf/v2/post/${id}`;

        console.log('url: ', url);

        return fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + btoa(username + ":" + password),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reservation_data_meta)
            }
        ).then((res) => res.json());
    }
}



module.exports = api;