// ./deskStructure.js
// import {SEOPane} from 'sanity-plugin-seo-pane'


export const myStructure = (S) =>
  S.list()
    .title('Base')
    .items([...S.documentTypeListItems().reverse()])

//   S.view
//   .component(SEOPane)
//   .options({
//     // Retrieve the keywords and synonyms at the given dot-notated strings
//     keywords: `seo.keywords`,
//     synonyms: `seo.synonyms`,
//     url: (doc) => resolveProductionUrl(doc),

//     // Alternatively, specify functions (may be async) to extract values
//     // keywords: doc => doc.seo?.keywords,
//     // synonyms: async(doc) => client.fetch('some query to get synonyms', {id: doc._id}),
//     // url: async(doc) => client.fetch('some query to construct a url with refs', {id: doc._id})
//   })
//   .title('SEO')