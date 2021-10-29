const express = require('express');
const app = express();
const async = require('async');
const path = require('path');
const mongoose = require('mongoose');
const post = require(path.join(__dirname, 'model/model.js'));

let obj = [];
console.log(typeof(obj));

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        post.find(function(err, doc){
            if (err) {
                console.log(err);
            }
            doc.forEach(element => {
                obj.push(element);
            });
            console.log(obj);
            return resolve;
        });
    });
  }

 async function base(){
    arr=await resolveAfter2Seconds(10);
 }

// post.find(function(err, doc){
//     if (err) {
//         console.log(err);
//     }
//     doc.forEach(element => {
//         obj.push(element);
//     });
//     console.log(obj);
// });

console.log(obj);


