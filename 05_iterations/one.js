// const arr= [1,2,3,4,5,6];
// for (const val in arr ) {
   
//       console.log(val);  
//     }

    //Map
    const map=new Map()
    map.set('in','india')
    map.set('usa','united states')
    map.set( 'france', 'paris')
    for (const [key , value] of map) {
        console.log(key ,':-' , value );
    }
    const myobject={
        'game1':'Nfs',
        'game2': 'spiderman'
    }
    // for (const [key , value] of myobject) {
    //     console.log(key ,':-' , value );
    // }