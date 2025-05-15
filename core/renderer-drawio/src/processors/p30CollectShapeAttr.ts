import type { DrawioContext, DrawioNodeTree } from '../types.ts'
import * as base from '@reactiac/base-components'

const defaultGroupRootStyle: base.Props = {
  align: 'center',
  strokeColor: 'none',
}

const defaultGroupIconStyle: base.Props = {
  shape: 'mxgraph.aws4.group',
  align: 'left',
  spacingLeft: 30,
}

const defaultGroupTextStyle: base.Props = {
  align: 'center',
  spacingLeft: 5,
  spacingRight: 5,
  spacingBottom: 5,
}

const defaultElementIconStyle: base.Props = {
  shape: 'mxgraph.aws4.resourceIcon',
  fillColor: '#000000',
  verticalLabelPosition: 'bottom',
  verticalAlign: 'top',
  align: 'center',
  aspect: 'fixed',
}

const defaultElementBoxStyle: base.Props = {
  rounded: 1,
  whiteSpace: 'wrap',
  verticalAlign: 'middle',
  align: 'center',
}

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
  let defaultStyle: base.Props
  if (_diagram.flags.isEntity) {
    if (style.resIcon || style.shape) {
      defaultStyle = defaultElementIconStyle
      _diagram.flags.isTextOutside = true
    } else {
      defaultStyle = defaultElementBoxStyle
    }
  } else {
    if (_props._level === 1) {
      defaultStyle = defaultGroupRootStyle
    } else if (style.grIcon) {
      defaultStyle = defaultGroupIconStyle
    } else {
      defaultStyle = defaultGroupTextStyle
    }
  }
  _diagram.element.style = {
    ...defaultStyle,
    ...style,
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
