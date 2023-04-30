/**
 *
 * @param value
 * @returns
 */
export default function stringToArgs(value: string) {
  const parts = value.split(" ");

  return parts
    .map((part) => {
      if (part === " ") return undefined;
      return part.replace(/[\'\"]/gi, "").trim();
    })
    .filter((item) => item !== undefined) as string[];
}
