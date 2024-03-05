const $ = window.$;
// export function loadTree() {
//   const trees = $('[data-widget="treeview"]');
//          trees.Treeview('init');

// }
// export function ngOnInit() {
//     $(document).ready(() => {
//       const trees= $('[data-widget="tree"]');
//       trees.tree();
//     });
//   }

// import * as $ from 'jquery';
export function loadTreeview() {
    $('[data-widget="treeview"]').each(function () {
        if ($(this).data('treeview-init') === undefined) {
            $(this).Treeview('init');
            $(this).data('treeview-init', true);
        }
    });
}