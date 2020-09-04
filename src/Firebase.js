import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "authDomain",
  databaseURL: "databaseURL",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId",
  measurementId: "measurementId"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// 保存
export const saveData = async (inputText) => {
  await db.collection("todos").add({
    text: inputText,
    status: false,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });
}

// 更新-text
export const updateDataText = async (id, text) => {
  await db.collection("todos").doc(id).update({
    text: text
  });
}

// 更新-status
export const updateDataStatus = async (id, status) => {
  await db.collection("todos").doc(id).update({
    status: !status,
  });
}

// 削除
export const deleteData = async (id) => {
  await db.collection("todos").doc(id).delete();
}