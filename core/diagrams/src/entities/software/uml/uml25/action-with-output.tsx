import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTION_WITH_OUTPUT = {
  _style: {
    entity:
      'shape=mxgraph.uml25.action;html=1;align=center;verticalAlign=middle;absoluteArcSize=1;arcSize=10;dashed=0;spacingRight=10;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 60,
}

export function ActionWithOutput(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ACTION_WITH_OUTPUT)} />
}
