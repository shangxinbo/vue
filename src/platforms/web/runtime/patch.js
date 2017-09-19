/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)
/*
moudles like
[{create,update,desctory,remove,activate}]
nodeOps like
{
    createElement:function,
    createElementNS:function,
    createTextNode:function,
    createComment:function,
    insertBefore:function,
    nextSibling:function,
    parentNode:function,
    removeChild:function,
    setAttribute:function
    ……
}
*/
export const patch: Function = createPatchFunction({ nodeOps, modules })
