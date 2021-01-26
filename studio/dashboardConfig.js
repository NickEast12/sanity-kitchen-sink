export default {
  widgets: [
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
                  buildHookId: '60107293b50a451d559f379d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-za2ej7oa',
                  apiId: 'f19f23e4-8575-49d8-92c2-6a5544ce2cb1'
                },
                {
                  buildHookId: '60107293f8344f20929e47ef',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mz4n7vmm',
                  apiId: '5a4e3368-5146-464a-90bd-9e85dad1166b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NickEast12/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mz4n7vmm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
