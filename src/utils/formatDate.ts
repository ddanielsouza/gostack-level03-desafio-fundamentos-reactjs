const formatDate = (date: string | Date): string => {
  const dateObject: Date = date instanceof Date ? date : new Date(date);
  return dateObject.toLocaleDateString('pt-BR');
  // const sliceZeroDigits = (number: number): string => `00${number}`.slice(-2);

  // const day = sliceZeroDigits(dateObject.getDate());
  // const month = sliceZeroDigits(dateObject.getMonth() + 1);
  // const year = dateObject.getFullYear();

  // return `${day}/${month}/${year}`;
};

export default formatDate;
