const maestro = document.getElementById("master-div");

const setupUI = (user) => {
  if(user){
    store.collection('c').doc(user.uid).get().then(doc => {
      const html = `<p>Editing ${lava.username}'s Profile</p><hr><input type="url" placeholder="pfp"></input><input type="url" placeholder="banner"></input><input disabled="true" type="text" placeholder="${lava.username}"></input><hr><button onclick="updata()">Save</button><button onclick="location.href='https://common-codes.github.io/OpenSource-uTube/c/#user=${lava.username}';">Return to Channel</button>`;
      maestro.innerHTML = html;
    })
  } else {
    maestro.innerHTML = '<h5 style="color: crimson;">Log In</h5>'
    console.log('no auth @ script');
  }
}
