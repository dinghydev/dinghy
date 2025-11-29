import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CYLINDER = {
  _style: {
    entity:
      'shape=cylinder3;whiteSpace=wrap;html=1;boundedLbl=1;backgroundOutline=1;size=15;',
  },
  _width: 60,
  _height: 80,
}

export function Cylinder(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CYLINDER)} />
}
