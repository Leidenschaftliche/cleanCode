

function display(library)
{
    const length=library.length
    for(let i=0;i<length;++i)
    {
        const lib_i=library[i]
        const author=lib_i.author;
        const title=lib_i.title;
        const readingStatus=lib_i.readingStatus;
        console.log(` author: '${author}'\n title: '${title}'\n readingStatus: '${readingStatus}'`)
        console.log("------------------------\n")
    }

}


function main()
{

const library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];
 
 display(library)  
}

main()


