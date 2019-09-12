import { typeActions } from '~/utils/typeActions'

const { actions, types } = typeActions('feed', {
  setLoading: (loading) => ({ meta: { loading } }),
  setError: (error) => ({ meta: { error } }),
  getFeed: (pageNumber, shouldRefresh = false) => ({
    meta: {
      pageNumber,
      shouldRefresh,
    },
  }),
  setFeed: (data, shouldRefresh = false, totalPage) => ({
    payload: data,
    meta: {
      shouldRefresh,
      totalPage,
    },
  }),
})

export {
  actions,
  types,
}
