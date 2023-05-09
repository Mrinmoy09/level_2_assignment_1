const checkTypeString = (data: unknown): void => {
  if (typeof data === "string") {
    console.log(data);
  } else {
    console.error("Type is not valid");
  }
};

checkTypeString("I LOVE BANGLADESH");
checkTypeString(4135464);
checkTypeString(true);
