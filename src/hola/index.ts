import { Rule, SchematicContext, Tree, url, template, apply, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema } from "./schema";


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function hola(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    //Obtenemos el nombre del saludo
    // const nombre = _options.nombre;

    // tree.create('hola.js', `console.log('Hola ${nombre}!')`);

    // Obtener la plantilla
    const srcTemplate = url('./templates');

    // Aplicar la plantilla pasándole las opciones y los helpers de strings
    // strings nos va a dar las funcionalidades de: classify(), decamelcase(), dashify(), etc.
    const srcParametrizeTemplate = apply(srcTemplate, [
      template(
        {..._options, ...strings}
      )
    ]);

    // Integrarlo en  nuestro arbol virtual:
    tree = mergeWith(srcParametrizeTemplate)(tree, _context) as Tree;


    return tree;
  };
}
