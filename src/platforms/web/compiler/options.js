/* @flow */

import {
  isPreTag,
  mustUseProp,
  isReservedTag,
  getTagNamespace
} from '../util/index'

import modules from './modules/index'
import directives from './directives/index'
import { genStaticKeys } from 'shared/util'
import { isUnaryTag, canBeLeftOpenTag } from './util'

export const baseOptions: CompilerOptions = {
  expectHTML: true,
  modules,     // klass, style
  directives,  // model(v-model), html(v-html),text(v-text)
  isPreTag,    // 是否是pre 标签
  isUnaryTag,  // 是否是单标签 比如img, input
  mustUseProp, // 需要使用props 绑定的属性，比如value,selected
  canBeLeftOpenTag, // 可以不闭合的标签，比如td，tr
  isReservedTag,  // 是否是保留标签，html标签和svg标签
  getTagNamespace, // 获取明明空间，svg和math
  staticKeys: genStaticKeys(modules)   // 静态关键词，包括 staticClass,staticStyle
}
