const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in...
    console.log('user is signed in', user.uid);
  } else {
    // User is signed out...
    console.log('user is signed out');
  }
});

useEffect(() => {
  return () => {
    unsubscribe(); // Unsubscribe when component unmounts
  };
}, []);