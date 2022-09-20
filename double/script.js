//a test to see how I can get two layer deep data displayed and stored (yes, seriously)
window.onload = function(){
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const channel = fragment.get('user');
    let toFlow = ''
    const cunter2 = document.getElementById("clues");

    //window.onload channel follower display
    if(channel != null){
        store.collection('c').where("channel", "==", channel).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                toFlow = doc.id;
                const followerIndex = store.collection('c').doc(toFlow).collection('followers').get().then(snap => {
                    cunter2.innerText = `Followers: ${snap.size}`;
                })
            })
        })
    }
    document.title = `Double, A 2-Level Deep Data Collection Test`
}

//the below was a test displayed in the discord channel #utube-general
function follow(){
    const counter = document.getElementById("counter");
    const cunter2 = document.getElementById("clues");
    const theFlower = 'someIDvalue'
    const newFlower = auth.currentUser.uid;
    let size = ''

    // get the amount of followers
    const followerIndex = store.collection('c').doc(theFlower).collection('followers').get().then(snap => {
        size = snap.size;
    })
    //check if following (doesn't work btw)
    if(newFlower in store.collection('c').doc(theFlower).collection('followers').get()){
        console.log('already following');
    }else{
        //otherwise follow
        store.collection('c').doc(theFlower).get().then((doc) => {
            cunter2.innerText = `${doc.data().followers}`
            store.collection('c').doc(theFlower).collection('followers').doc(newFlower).set({
                isFollowing: 'true'
            }).then(cunter2.innerText = `Real Followers: ${size}`)
        })
    }
    let index = parseFloat(counter.innerText) + 1;
    counter.innerText = index;
}