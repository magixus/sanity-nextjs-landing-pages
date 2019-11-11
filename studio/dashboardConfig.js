export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc92779cf99757a2a49ec5d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yjh3on93',
                  apiId: 'ec319342-8891-4100-83e1-a1a4822fe12d'
                },
                {
                  buildHookId: '5dc927791b2a544642ac9f12',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-i3124d8d',
                  apiId: 'e6600e4c-67af-4310-9b88-491b0379a436'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magixus/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-i3124d8d.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
