let name = 'Bryan'

function adjustName () {
  name = 'Steve'
  return name
}

adjustName()

const bryan = {
  firstname: 'Bryan',
  lastname: 'Smith',
  age: 29,
  tattoos: {
    has: true,
    count: 5
  }
}

function tattooUpdater(obj){
  let message = ''
  if(obj.tattoos.has){
    obj.tattoos.count++
    message = `enjoy your new tattoo`
    return message
  }
  message = `don't get a tattoo`
  return message
}
tattooUpdater(bryan)