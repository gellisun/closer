export const host = "http://localhost:8000";
export const baseRoute = `${host}/api/auth`;
export const messagesRoute = `${host}/api/messages`;

export const signinRoute = `${baseRoute}/signin`;
export const loginRoute = `${baseRoute}/login`;
export const logoutRoute = `${baseRoute}/logout`;
export const setAvatarRoute = `${baseRoute}/setavatar`;
export const allUsersRoute = `${baseRoute}/allusers`;
export const sendMessageRoute = `${messagesRoute}/addmessage`;
export const getMessagesRoute = `${messagesRoute}/getmessage`;