import { typeActions } from '~/utils/typeActions'

const { actions, types } = typeActions('example', {
  counter: () => ({ }),
  setCounter: () => ({ }),
})

export {
  actions,
  types,
}
