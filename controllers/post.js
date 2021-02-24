
const Post= require("../models/post")

exports.getPosts = (req,res)=> {

    const posts= Post.find().select("_id title body")
    .then(posts => res.status(400).json({
        posts: posts
    }))
    .catch(err=> console.log(err));
    // res.json({
    // plans: [{title:"first page"},{title:"second page"}]
//});
}


exports.createPost = (req,res) =>{

    const post= new Post(req.body);
    // console.log("creating post: ",req.body);
    // post.save((err,result)=>{
    //     if(err)
    //     {
    //         return res.status(400).json({
    //             error: err
    //         });
    //     }
    //     return res.status(200).json({
    //         res: result
    //     });
    // })
    post.save()
    .then((result)=>{
        res.status(200).json({
            post: result
        })
    })
}