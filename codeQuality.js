// level {1/2/3}
async function getUsers() {
    let userProfile = {
        user: “”,
        profile: “”,
        posts: “”
    };

    await Promise.all(getUser(), getProfile(), getPosts())
        .then(
            res => {
                userProfile = {
                    user: res[0],
                    profile: res[1],
                    posts: res[2]
                };

            }
        )
        .catch(
            error => {
                console.log(error);
            }
        )
}
