class UserSession {
    static instance = new UserSession();

    Verification = async token => {
        try {
            await fetch(`https://integrative-django.herokuapp.com/users/verified/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({'token': token}),
            });
        } catch (err) {
            console.log('Token Err', err);
            throw Error(err);
        }
    };

}

export default UserSession;