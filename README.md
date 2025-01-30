# Firebase onAuthStateChanged Unsubscribe Issue
This repository demonstrates a common issue encountered when using Firebase's `onAuthStateChanged` function within a React component's `useEffect` hook.  Improper handling of the unsubscribe function can lead to memory leaks and unexpected behavior.

The `authBug.js` file shows the problematic code, while `authBugSolution.js` provides a corrected implementation.

## Problem
The original code fails to properly unsubscribe from the `onAuthStateChanged` listener when the component unmounts. This can result in the listener continuing to run even after the component is no longer needed, potentially leading to memory leaks and unexpected behavior.

## Solution
The solution demonstrates the correct way to unsubscribe using a cleanup function within the `useEffect` hook's return statement.  This ensures that the listener is always properly removed when the component is unmounted.