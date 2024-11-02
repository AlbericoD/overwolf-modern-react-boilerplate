/**
 * Pauses the execution for the specified number of milliseconds.
 * @param ms The number of milliseconds to sleep.
 * @example await sleep(1000);
 * @returns A promise that resolves after the specified delay.
 */
const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Combines multiple class names into a single string.
 * @param classes The class names to combine.
 * @example const className = classNames('foo', 'bar');
 * @returns A string containing the combined class names.
 */
const classNames = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

/**
 * Formats a date input into a string representation.
 * @param input The date input to format. It can be a string or a number.
 * @example const formattedDate = formatDate(Date.now());
 * @returns A formatted string representation of the date.
 */
function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Formats a date input into a relative time representation.
 * @param input The date input to format. It can be a string or a number.
 * @example const relativeTime = fromNow(Date.now());
 * @returns A string representing the relative time from the input date.
 */
function fromNow(input: string | number): string {
  const date = new Date(input);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (seconds < 60) {
    return "now";
  } else if (minutes < 60) {
    return `${minutes}m`;
  } else if (hours < 24) {
    return `${hours}h`;
  } else {
    return formatDate(input);
  }
}

/**
 * Generates a random number between the specified minimum and maximum values (inclusive).
 * @param min The minimum value of the range.
 * @param max The maximum value of the range.
 * @example const randomNumber = random(1, 10);
 * @returns A random number between the minimum and maximum values.
 */
const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Creates a throttled version of the provided function that limits the rate at which it can be called.
 * @param func The function to throttle.
 * @param delay The minimum delay (in milliseconds) between function invocations.
 * @example const throttled = throttle(() => console.log('Hello World!'), 1000);
 * @returns A throttled version of the function.
 */
function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return function (...args: Parameters<T>) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      func(...args);
      lastCall = now;
    }
  };
}

/**
 * Normalizes a name by encoding and decoding it using URI components.
 * @param name The name to normalize.
 * @example const name = normalizeName('Hello%20World!');
 * @returns The normalized name.
 */
const normalizeName = (name: string) => {
  try {
    const nameNormalize = decodeURIComponent(encodeURIComponent(name));
    return nameNormalize;
  } catch (error) {
    // console.info("no formatting required [UTF8 or ISO]");
    return name;
  }
};

/**
 * Safely parses a JSON string into a JavaScript object.
 * @param data The JSON string to parse.
 * @example const parsedJSON = parseSafeJSON<MyInterface>('{"foo":"bar"}');
 * @returns The parsed JavaScript object, or null if parsing fails.
 */
const parseSafeJSON = <T>(data: string = ""): T | null => {
  try {
    if (data === "") return null; // Return null for empty data
    return JSON.parse(data) as T;
  } catch (error) {
    console.error("Failed to parse JSON:", JSON.stringify(error));
    return null;
  }
};

const isDev = process.env.NODE_ENV === "development";

export {
  classNames,
  formatDate,
  random,
  throttle,
  normalizeName,
  parseSafeJSON,
  sleep,
  isDev,
  fromNow,
};
