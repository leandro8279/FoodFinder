export default function auth(state, { type, payload }) {
  switch (type) {
    case "RETRIEVE_TOKEN":
      return {
        ...state,
        userToken: payload.token,
        isLoading: false,
      };
    case "LOGIN":
      return {
        ...state,
        userName: payload.id,
        userToken: payload.token,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        userName: null,
        userToken: null,
        isLoading: false,
      };
    case "REGISTER":
      return {
        ...state,
        userName: payload.id,
        userToken: payload.token,
        isLoading: false,
      };
  }
}
