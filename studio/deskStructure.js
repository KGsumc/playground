// import React from 'react'
// import {SEOPane} from 'sanity-plugin-seo-pane'

// export const defaultDocumentNodeResolver = (S) =>
//   S.document().views([
//     S.view
//   .component(SEOPane)
//   .options({
//     // Retrieve the keywords and synonyms at the given dot-notated strings
//     keywords: `seo.keywords`,
//     synonyms: `seo.synonyms`,
//     // url: (doc) => resolveProductionUrl(doc),
//     url: async(doc) => client.fetch ({id: doc._id}),

//     // Alternatively, specify functions (may be async) to extract values
//     // keywords: doc => doc.seo?.keywords,
//     // synonyms: async(doc) => client.fetch('some query to get synonyms', {id: doc._id}),
//     // url: async(doc) => client.fetch('some query to construct a url with refs', {id: doc._id})
//   })
//   .title('SEO')
//   ])


export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
        S.listItem()
        .title('Blogs')
        .child(
          S.list()
            // Sets a title for our new list
            .title('Blogs')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title('Blog Posts')
                .child(
                     S.documentList()
                     .title('All Posts')
                     .filter('_type == "post"')
                ),
              S.listItem()
                .title('Author')
                .child(
                  S.documentList()
                  .title('Authors')
                  .filter('_type == "author"')
                ),
              S.listItem()
                .title('Categories')
                .child(
                  S.documentList()
                  .title('Categories')
                  .filter('_type == "category"')
                ),
            ])
        ),
        S.divider(),
       
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) => ![
          'post', 
          'author', 
          'category',
          'capabilitiesSection',
          'logo',
          'missionSection',
          'navigation',
          'storySection',
          'heroSection',
          'focusSection',
          'connectionSection',
          'processSection',
          'formImage',
          'sectionTitle',
          'promotion'
        ].includes(listItem.getId())
      ),
      S.divider(),
    ])