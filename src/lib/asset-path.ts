const PUBLIC_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  if (!path) {
    return path;
  }

  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (!PUBLIC_BASE_PATH) {
    return normalized;
  }

  if (
    normalized === PUBLIC_BASE_PATH ||
    normalized.startsWith(`${PUBLIC_BASE_PATH}/`)
  ) {
    return normalized;
  }

  return `${PUBLIC_BASE_PATH}${normalized}`;
}
