import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CYLINDER_STACK = {
  _style: {
    entity:
      'shape=cylinder3;whiteSpace=wrap;html=1;boundedLbl=1;backgroundOutline=1;size=15;lid=0;',
  },
  _width: 60,
  _height: 80,
}

export function CylinderStack(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CYLINDER_STACK)} />
}
