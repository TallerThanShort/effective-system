auth.onAuthStateChanged(user) => {
    const maestro = document.getElementById("master-div");
    
    if(user){
      store.collection('c').get().then(snapshot => {
      setupUI(snapshot.docs, user);
    }, err => {
      window.alert(err.message)
    });
    } else{
        console.log('no auth lmao');
    }
})
