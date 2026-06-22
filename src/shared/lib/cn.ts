type ClassNameValue = false | null | string | undefined;

export function cn(...classNames: ClassNameValue[]): string {
  return classNames.filter(Boolean).join(' ');
}
