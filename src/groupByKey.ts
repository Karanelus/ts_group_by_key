type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(object: T[], key: keyof T): GroupsMap<T> {
  const finalObject: GroupsMap<T> = {};

  object.forEach((el) => {
    const keyValue = el[key];

    if (keyValue !== undefined && keyValue !== null) {
      const keyString = String(keyValue);

      if (!finalObject.hasOwnProperty(keyString)) {
        finalObject[keyString] = [];
      }

      finalObject[keyString].push(el);
    }
  });

  return finalObject;
}
