window.onload = function(){
    if(auth.user != null){
      store.collection('c').get().then(snapshot => {
      setupUI(user);
    }, err => {
      window.alert(err.message)
    });
    } else{
        window.alert('nonauth')
    }
}
