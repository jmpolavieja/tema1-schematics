import { Rule, SchematicContext, Tree, template, apply, url, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema as ServiceSchema } from './schema';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function httpService(_options: ServiceSchema): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    // Obtener la carpeta donde está el template
    const srcTemplate = url('./templates');

    // Parametrizamos el template con las opciones recibidas
    const srcParametrizeTemplate = apply(srcTemplate, [
      template({
        ..._options, ...strings
      })
    ]);

    tree = mergeWith(srcParametrizeTemplate)(tree, _context) as Tree;

    return tree;
  };
}
