$(document).ready(() => {
    
    $('#practiceForm').submit((event) => {
        event.preventDefault();
        const formData = {
            title: $('#title').val(),
            body: $('#body').val()
        };

        $.post(
            'https://jsonplaceholder.typicode.com/posts',
            formData,
            (data) => {
                console.log(data);
            }
        );
    });
    
    
    
});