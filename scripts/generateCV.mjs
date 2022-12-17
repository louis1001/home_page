import fs, { fdatasync } from 'fs'
import path from 'path'
import htmlToPdf from 'html-pdf-node'
import { JSDOM } from 'jsdom'
import puppeteer from 'puppeteer'

let options = {
  format: 'A4'
}

const cvHtmlPath = './dist/cv/index.html'
const content = fs.readFileSync(cvHtmlPath, 'utf8')

const dom = new JSDOM(content)

const images = dom.window.document.querySelectorAll('img')

for(let image of images) {
  const imageUrl = image.src

  const imageUrlShort = './' + path.join('dist/', imageUrl)

  const imageBitmap = fs.readFileSync(imageUrlShort)
  const asBase64 = Buffer.from(imageBitmap).toString('base64')

  image.src = 'data:image/jpg;base64,' + asBase64
}

const finalContent = dom.serialize()

console.log('Generating PDF')

const browser = await puppeteer.launch()
const page = await browser.newPage()

await page.goto('file://' + path.resolve('./dist/'))

await page.setContent(finalContent, { waitUntil: 'domcontentloaded' })

await page.pdf({
  path: 'artifacts/luis-gonzalez.pdf',
  margin: { top: '.25in', right: '.5in', bottom: '.25in', left: '.5in' },
  printBackground: true,
  format: 'A4'
})

await browser.close()
