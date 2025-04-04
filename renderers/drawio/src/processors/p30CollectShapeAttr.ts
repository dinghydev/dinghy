import type { DrawioContext, DrawioNodeTree, DrawioProps } from '../types.ts'
import { mergician } from 'mergician'
import type { Props } from '@reactiac/base-components'

const defaultGroupRootStyle: Props = {
  align: 'center',
  strokeColor: 'none',
}

const defaultGroupIconStyle: Props = {
  shape: 'mxgraph.aws4.group',
  align: 'left',
  spacingLeft: 30,
}

const defaultGroupTextStyle: Props = {
  align: 'center',
  spacingLeft: 5,
  spacingRight: 5,
  spacingBottom: 5,
}

const defaultElementIconStyle: Props = {
  shape: 'mxgraph.aws4.resourceIcon',
  fillColor: '#000000',
  verticalLabelPosition: 'bottom',
  verticalAlign: 'top',
  align: 'center',
  aspect: 'fixed',
}

const defaultElementBoxStyle: Props = {
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
    const configs = []
    if (geometry) {
      configs.push({ geometry })
    }
    if (element) {
      configs.push({ element: element })
    }
    configs.push(_diagram)
    _diagram = mergician({
      onCircular({ srcVal, targetVal }: { srcVal: any; targetVal: any }) {
        return { ...targetVal, ...srcVal }
      },
    })(...configs) as DrawioProps
  }

  const style = _diagram.element.style
  let defaultStyle: Props
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
