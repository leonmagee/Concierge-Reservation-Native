var api = {
    getReservations() {
        /**
         * Should I get all data, or create endpoints specific for concierge ids
         * and restaurants???
         */
        var url = `https://conciergereservation.com/wp-json/cr/reservations`;
        return fetch(url).then((res) => res.json());
    },
    getRestaurants() {
        var url = 'https://conciergereservation.com/wp-json/cr/restaurants';
        return fetch(url).then((res) => res.json());
    },
    postReservations(reservation_data) {

        var username = 'leonmagee';
        var password = 'G5waB0NrQ9LxPy7wx5ngw';
        var url = 'https://conciergereservation.com/wp-json/wp/v2/reservation';

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

    postUsers() {
        var username = 'leonmagee';
        var password = 'G5waB0NrQ9LxPy7wx5ngw';
        var url = 'https://conciergereservation.com/wp-json/cr/users_info';

        return fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + btoa(username + ":" + password),
                    'Content-Type': 'application/json',
                    'cache-control': 'no-cache',
                },
            }
        ).then((res) => res.json())
            .catch((err) => {
                console.log('error: ', err);
            });

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
    },

    sendPromotionEmail(data) {
        console.log(data);

        let username = 'leonmagee';
        let password = 'G5waB0NrQ9LxPy7wx5ngw';
        let url = 'https://www.conciergereservation.com/wp-json/cr/email';

        return fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + btoa(username + ":" + password),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        ).then((res) => res.json())
            .catch((err) => {
                console.log('error: ', err);
            });

    }
}


module.exports = api;