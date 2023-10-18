import { TAuthAction, TAuthState, TUser } from "@/types/auth";

const authReducer = (state: TAuthState, action: TAuthAction): TAuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        authenticated: true,
        user: action.payload.user,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        authenticated: false,
        user: null,
        loading: false,
      };
    case "POPULATE":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        } as TUser,
      };
    case "STOP_LOADING":
      return {
        ...state,
        loading: false,
      };
    default:
      throw new Error("Unknown action type");
  }
};

export default authReducer;
