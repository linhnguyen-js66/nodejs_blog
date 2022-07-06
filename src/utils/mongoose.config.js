export const formatArraytoObject = (mongooses) => {
  return mongooses.map((item) => item.toObject());
};
export const formatObject = (mongooses) => {
    return mongooses ? mongooses.toObject() : mongooses;
}