function shortenAddress(address: string) {
  const addressStart = address.substring(0, 3);
  const addressEnd = address.substring(address.length - 4, address.length);

  return `${addressStart}..${addressEnd}`;
}

export default shortenAddress;
