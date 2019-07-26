import cheerio = require('cheerio')
import fs = require('fs')

const enum ContentType {
  Input = 'input',
  Output = 'output'
}

interface TestCase {
  type: ContentType
  number: string
  content: string
}

export function parseBodyAndSaveTestCases(body: string) {
  parseHTMLBody(body, saveTestCase)
}

function parseHTMLBody(body: string, cb: (testCase: TestCase) => void) {
  const $ = cheerio.load(body)

  const title = $('title').text()
  console.log(`* Title: ${title}`)

  const match = body.match(/userScreenName\s*=\s*"(.*)"/)
  if (match) {
    console.log(`* Login: ${match[1]}`)
  } else {
    console.log('* Login: Guest access')
  }

  $('#task-statement .part').each(function (this: any) {
    const $el = $(this)
    const title = $el.find('h3').text()
    const match = title.match(/(入力例|出力例)\s+(\d+)/i)
    if (!match) return

    const type = match[1] === '入力例' ? ContentType.Input : ContentType.Output
    const number = match[2]
    const content = $el.find('pre').text().trim() + '\n'
    cb({type, number, content})
  })
}

export function saveTestCase(testCase: TestCase) {
  const filename = `${testCase.type}${testCase.number}`
  console.log(`* Write ${filename}`)
  fs.writeFileSync(filename, testCase.content)
}
