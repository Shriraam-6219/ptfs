async function commentCode() {
    return new Promise((commentPosted)=>{
        commentPosted("Comment posted successfully");
    })
}

async function likeCode() {
    return new Promise((commentPosted)=>{
        commentPosted("Like this post");
    })
}

async function dislikeCode() {
    return new Promise((commentPosted)=>{
        commentPosted("Disliked this post");
    })
}

async function createPost(){
    var post = new Promise((cPost) => {
        cPost("Post created successfully");
    })
    var[post,comment,like] = await Promise.all([post,commentCode(),likeCode()]);
    console.log(posts);
    console.log(comment);
    console.log(like);
}

createPost();