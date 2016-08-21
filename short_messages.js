 function getShortMessages(messages) {
        var filtered = messages.filter(function(msg){
           if (msg.message.length < 50){
               return msg;
           }
        });
        console.log(filtered);
        var shortMessages = filtered.map(function(msg){
            return msg.message;
        });
        
        return shortMessages;
    }
    
    module.exports = getShortMessages