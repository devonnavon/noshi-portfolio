export default function (context) {
  // go tell the store to update the page
  context.store.commit('updatePage', context.route.name)
  if(context.params.case!=undefined) context.store.commit('updateCase', context.params.case)
}
