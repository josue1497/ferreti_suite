export default function () {
  return [{
    title: 'Dashboard',
    to: {
      name: 'blog-overview',
    },
    htmlBefore: '<i class="material-icons">edit</i>',
    htmlAfter: '',
  }, {
    title: 'Categorias',
    htmlBefore: '<i class="material-icons">vertical_split</i>',
    to: {
      name: 'blog-posts',
    },
  },
  {
    title: 'Lista de Artículos',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'tables',
    },
  }, {
    title: 'Reportes',
    htmlBefore: '<i class="material-icons">note_add</i>',
    to: {
      name: 'add-new-post',
    },
  },
  // {
  //   title: 'Forms & Components',
  //   htmlBefore: '<i class="material-icons">view_module</i>',
  //   to: {
  //     name: 'components-overview',
  //   },
  // },
   {
    title: 'Perfil',
    htmlBefore: '<i class="material-icons">person</i>',
    to: {
      name: 'user-profile-lite',
    },
  },
  // {
  //   title: 'Errors',
  //   htmlBefore: '<i class="material-icons">error</i>',
  //   to: {
  //     name: 'errors',
  //   },
  // }
];
}
