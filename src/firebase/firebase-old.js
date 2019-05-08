import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDs2syxUTEGzyeuHQaYq_ASWs3wKbfNHOA",
    authDomain: "expensify-5a6a8.firebaseapp.com",
    databaseURL: "https://expensify-5a6a8.firebaseio.com",
    projectId: "expensify-5a6a8",
    storageBucket: "expensify-5a6a8.appspot.com",
    messagingSenderId: "632643249023"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

//   database.ref().set({
//       name: 'Tomer Gilboa',
//       age: 33,
//       job: 'Software Developer',
//       location: {
//           city: 'NYC',
//           country: 'USA'
//       }
//   }).then(() =>{
//       console.log('Data is saved');
//   }).catch((e)=> {
//       console.log('This failed', e);
//   });

// //   database.ref().set('This is my data.');
// database.ref('age').set(27);
// database.ref('location/city').set('Brooklyn');

// database.ref('attributes').set({
//     height: 180,
//     weight: '75KG'
// });

// database.ref('isSingle').
// remove()
// .then(() => {
//     console.log('Data was removed');
// }).catch((e) => {
//     console.log('Did not remove data', e);
// });

// database.ref('isSingle').set(null); // == Remove

// database.ref().update({
//     name: 'Tomer G',
//     age: 25,
//     job: 'Freelancer',
//     isSingle: null,
//     'location/city': 'Brooklyn'
// });

// database.ref()
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val(); 
//     console.log(val)
// }).catch((e) => {
//     console.log('Failed', e)
// });



// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('error', e);
// });

// setTimeout(()=> {
//     database.ref('age').set(41);
// }, 3500);

// setTimeout(()=> {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(()=> {
//     database.ref('age').set(34);
// }, 10500);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is ${val.age}`);
// }, (e) => {
//     console.log('error', e);
// });

// database.ref('notes').push({
//     title: 'Topics',
//     body: 'Code'
// })

// database.ref('notes/-Le7VRke8ZNJL3L7_XUt').remove();

// database.ref('expenses').push({
//     description: 'Rent',
//     amount: 500,
//     createdAt: 10
// });

// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// }, (e) => {
//     console.log('error', e);
// });


// Child  Removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// Child Changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// Child Added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});