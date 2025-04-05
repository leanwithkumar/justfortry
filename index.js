const express = require('express')
require('dotenv').config()
const app = express();
const port = 5000;

const githubdata = {
    "login": "leanwithkumar",
    "id": 138289409,
    "node_id": "U_kgDOCD4hAQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/138289409?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/leanwithkumar",
    "html_url": "https://github.com/leanwithkumar",
    "followers_url": "https://api.github.com/users/leanwithkumar/followers",
    "following_url": "https://api.github.com/users/leanwithkumar/following{/other_user}",
    "gists_url": "https://api.github.com/users/leanwithkumar/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/leanwithkumar/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/leanwithkumar/subscriptions",
    "organizations_url": "https://api.github.com/users/leanwithkumar/orgs",
    "repos_url": "https://api.github.com/users/leanwithkumar/repos",
    "events_url": "https://api.github.com/users/leanwithkumar/events{/privacy}",
    "received_events_url": "https://api.github.com/users/leanwithkumar/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Abhay Kumar",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "codenwatch",
    "public_repos": 5,
    "public_gists": 0,
    "followers": 0,
    "following": 3,
    "created_at": "2023-07-01T08:42:58Z",
    "updated_at": "2025-04-05T07:11:32Z"
  }

app.get('/', (req, res)=>{
    res.send('hello world')
})


app.get('/github', (req, res)=>{
    res.json(githubdata)
})

app.listen(process.env.PORT, ()=>{
    console.log(`server is listening at port ${process.env.PORT}`)
})


