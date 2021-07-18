let id: number = parseInt(window.localStorage.getItem('idMax') || '0') || 0
// let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0
function createId(): number {
  id++
  window.localStorage.setItem('idMax', id.toString())
  return id
}
export default createId
