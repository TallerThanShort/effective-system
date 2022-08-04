auth.onAuthStateChanged(user => {
    if(user){
      store.collection('c').get().then(snapshot => {
      setupUI(user);
    }, err => {
      window.alert(err.message)
    });
    } else{
        window.alert('nonauth')
    }
})
