export const nameChecker = (name: string) => {
  const trimmedName = name.trim();
  if (trimmedName.length < 5) return false;
  if (trimmedName.split(" ").length < 2) return false;
  return true;
};

export const emailChecker = (email: string) => {
  const trimmedEmail = email.trim();
  return String(trimmedEmail)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const messageChecker = (message: string) => {
  const trimmedMessage = message.trim();
  if (trimmedMessage.length > 500) return false;
  return true;
};
