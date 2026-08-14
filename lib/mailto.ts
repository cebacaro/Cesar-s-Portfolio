export function buildMailto({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body?: string;
}) {
  const params = new URLSearchParams();
  params.set("subject", subject);
  if (body) params.set("body", body);
  // URLSearchParams encodes spaces as "+", which mail clients show literally.
  return `mailto:${to}?${params.toString().replace(/\+/g, "%20")}`;
}
