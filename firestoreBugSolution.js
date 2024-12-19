The problem was solved by implementing more robust error handling and verifying the success of the write operation. Instead of relying solely on the promise resolution, we explicitly check the `writeTime` property of the returned document snapshot to confirm the successful write.  If `writeTime` is undefined, it signals a failure.  Also, using `set()` instead of `add()` when you have a predetermined document ID ensures predictable behaviour.

```javascript
db.collection('myCollection').doc('myDoc').set(myData).then(docRef => {
  if (docRef.writeTime) {
    console.log('Data written successfully!');
  } else {
    console.error('Data write failed!');
  }
}).catch(error => {
  console.error('Error writing data:', error);
});
```