export default function getUrlLastSegment(): string {
  const parts = window.location.pathname.split('/');
  const lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash

  return lastSegment || '';
}
