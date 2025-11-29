import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOT_DOT = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.dot-dot;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 37,
  _height: 8,
}

export function DotDot(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOT_DOT)} />
}
