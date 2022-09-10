import { pathEqual } from "path-equal"

export default function(req, res, next) {
  const redirects = [
    {
      from: "/work",
      to: "/work/innotest"
    }
  ]

  const redirect = redirects.find(r => pathEqual(r.from, req.url))

  if (redirect) {
    res.writeHead(301, {Location: redirect.to})
    res.end()
  } else {
    next()
  }
}
