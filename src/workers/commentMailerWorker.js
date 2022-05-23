const queue = require('../config/queue');
const {newCommentMailer} = require('../mailers/comment_mailers');


queue.process('email',function(job,done){
    console.log('Email worker started !!!',job.data);
    newCommentMailer(job.data);
    done();
    
})
