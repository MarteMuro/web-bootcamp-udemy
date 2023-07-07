let input = prompt("what would yuo like to do?");
const todos=[];
while (input !=='quit'&& input !=='q'  ) {
    if( input ==='list') {
        console.log('************start****************');
        for(let i = 0; i < todos.length;i++) {
          console.log(todos[i],'to do' );
        }
        console.log('++++++++++++++end+++++++++++++++');
    } else if(input === 'new') {
        const newTodo = prompt('Ok, what is the new ToDo');
        todos.push(newTodo);
        console.log( `${newTodo} added to the List`)
    }else if (input=== 'delete') {
        const index = prompt('Enter an index to delete:');
        parseInt(index);
        const deleted = todos.splice(index,1);

        console.log(' index number to delete is',index,'Data deleteed is:',deleted);
       

    }
     input = prompt("what would yuo like to do?");
};
console.log('Ok, you quit the app');