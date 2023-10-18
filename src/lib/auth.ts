import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import message from "@/utils/message";
import { auth } from "./firebase";

export const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    message.success("Authentication successful 🎉");
  } catch (error) {
    console.error(error);
    message.error("Incorrect Email/Password ❌");
  }
};
export const signUp = async (email: string, password: string, name: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName: name });
    message.success("Signup successful!");
  } catch (error) {
    message.error("Failed signup ❌");
  }
};
export const logout = async () => {
  try {
    await signOut(auth);
    message.success("Logout successful! 🎉");
  } catch (error) {
    message.error("Couldn't sign out ❌");
  }
};
