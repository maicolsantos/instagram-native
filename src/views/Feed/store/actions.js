import { typeActions } from '~/utils/typeActions'

const { actions, types } = typeActions('feed', {
  getFeed: () => ({ }),
  setFeed: (data) => ({ payload: data }),
})

export {
  actions,
  types,
}
