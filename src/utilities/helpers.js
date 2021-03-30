

export function formatUrl(title) {
  return `/games/${title.toLowerCase().replaceAll(' ', '-')}`
}

