const http = new easyHTTP;

// //get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, post){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(post);
//     }
// })

// Create Data

// const data = {
//   title: 'Custom Post',
//   body: 'This is a custom post'
// };

// // //create post
// // http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
// //     if(err){
// //         console.log(err);
// //     } else {
// //         console.log(post);
// //     }
// // })

// //Update Post 
// http.put('https://jsonplaceholder.typicode.com/posts/4', data, function(err, post){
//     if (err){
//         console.log(err);
//     } else{
//         console.log(post);
//     }
// })

// Post Deleted 
 http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
     if(err){
         console.log(err);
     } else {
         console.log(post);
     }
 })