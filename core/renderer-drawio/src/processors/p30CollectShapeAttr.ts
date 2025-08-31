import type { DrawioContext, DrawioNodeTree } from '../types.ts'
import * as base from '@diac/base-components'

function mergeElement({ _props }: DrawioNodeTree) {
  let { _diagram } = _props
  const shapeAttributes = _diagram.flags.isEntity
    ? _diagram.entity
    : _diagram.group
  if (shapeAttributes) {
    const { geometry, ...element } = shapeAttributes
    if (geometry) {
      _diagram = base.deepMerge({ geometry }, _diagram)
    }
    if (element) {
      _diagram = base.deepMerge({ element }, _diagram)
    }
  }

  const style = _diagram.element.style
  if (_diagram.flags.isEntity) {
    if (style.resIcon || style.shape) {
      _diagram.flags.isTextOutside = true
    }
  } else {
    if (_props._level === 1) {
      // root element styles
      style.strokeColor ??= 'none'
      _diagram.dimension.margin.top = 0
      _diagram.dimension.margin.bottom = 0
      _diagram.dimension.margin.left = 0
      _diagram.dimension.margin.right = 0
    }
  }

  _props._diagram = _diagram
}

function collectShapeAttr(node: DrawioNodeTree) {
  mergeElement(node)
  node._children.map((child: DrawioNodeTree) => collectShapeAttr(child))
}

export const p30CollectShapeAttr = ({ rootNode }: DrawioContext) => {
  collectShapeAttr(rootNode)
}
