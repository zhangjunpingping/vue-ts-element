const context = require.context('./', false, /\.ts$/)

const Course: any = {}
context
  .keys()
  .filter(item => item !== './index.ts')
  .forEach(item => {
    const key = item.split('.')[1].split('/')[1]
    Course[key] = context(item).default
  })
export default Course
