import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROPERTY_2 = {
  _style: {
    entity:
      'verticalAlign=bottom;html=1;endArrow=none;edgeStyle=orthogonalEdgeStyle;strokeWidth=2;',
  },
  _width: 160,
  _height: 0,
}

export function Property2(props: NodeProps) {
  return (
    <Shape {...PROPERTY_2} {...props} _style={extendStyle(PROPERTY_2, props)} />
  )
}
