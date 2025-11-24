import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];
  const collectionRef = collection(db, "users", userId, "items");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return items;
}

export async function addItem(userId, item) {
  const collectionRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(collectionRef, item);
  return docRef.id;
}
