import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const START_2 = {
  _style: {
    entity:
      'edgeStyle=orthogonalEdgeStyle;html=1;verticalAlign=bottom;endArrow=open;endSize=8;strokeColor=#ff0000;',
  },
  _width: 1,
  _height: 90,
}

export function Start2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, START_2)} />
}
