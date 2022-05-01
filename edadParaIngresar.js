swal({
    
    title: "Type your name: ", 
    content: "input",
    

    })
    .then((value) => {
    swal(`Welcome ${value}! :D`,);
        return 0;
});