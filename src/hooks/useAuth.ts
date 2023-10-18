import { auth } from "@/lib/firebase";
import { TUser } from "@/types";
import { useEffect, useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState<TUser>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user as TUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return user;
}
