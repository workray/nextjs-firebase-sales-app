export type TUser = {
  email: string;
  uid: string;
  name?: string;
} | null;

export type TAuthState = {
  authenticated: boolean;
  user: TUser;
  loading: boolean;
};
export type TAuthAction =
  | { type: "LOGIN"; payload: { user: TUser } }
  | { type: "POPULATE"; payload: TUser }
  | { type: "LOGOUT" }
  | { type: "START_LOADING" }
  | { type: "STOP_LOADING" };

export type TAuthDispatch = React.Dispatch<TAuthAction>;
