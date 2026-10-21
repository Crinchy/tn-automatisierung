/** Replaces each {placeholder} in the template with its value; unknown placeholders stay as written. */
export default function interpolate(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (placeholder, name: string) => {
    const value = values[name];

    if (value === undefined) {
      return placeholder;
    }

    return String(value);
  });
}
