// IIFE --> Immediately invoked function expression
(function(){
    function Start()
    {
        console.log("App Started");
        let deleteButtons = document.querySelectorAll('.btn-danger');
        for(button of deleteButtons)
        {
            button.addEventListener('click',(event)=>{
                if(!confirm("Are you sure of the following action?"))
                {
                    event.preventDefault();
                    window.location.assign('/todolist');
                }
            });
        }
    }
    window.addEventListener("load", Start);

})();