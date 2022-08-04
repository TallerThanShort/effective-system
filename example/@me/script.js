auth.onAuthStateChanged(user) => {
    const maestro = document.getElementById("master-div");
    
    if(user){
      store.collection('c').doc(user.uid).get().then(doc => {
      const lava = doc.data()
      maestro.innerHTML = `<p>Editing ${lava.username}'s Profile</p><hr><input type="url" placeholder="pfp"></input><input type="url" placeholder="banner"></input><input disabled="true" type="text" placeholder="${lava.username}"></input><hr><button onclick="updata()">Save</button><button onclick="location.href='https://common-codes.github.io/OpenSource-uTube/c/#user=${lava.username}';">Return to Channel</button>`;
    }, err => {
      window.alert(err.message)
    });
    } else{
        maestro.innerHTML = `<h2 style="color: crimson;">You Must First Log In To Zoo That</h2>`;
    }
})
