let seq = 0

const generateId = () => {
  seq = (seq + 1) % 100000
  return `${Date.now()}${seq.toString().padStart(5, '0')}`
}

module.exports = { generateId }
