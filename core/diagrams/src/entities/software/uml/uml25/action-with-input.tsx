import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTION_WITH_INPUT = {
  _style: {
    entity:
      'shape=mxgraph.uml25.action;html=1;align=center;verticalAlign=middle;absoluteArcSize=1;arcSize=10;dashed=0;spacingLeft=10;flipH=1;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 40,
}

export function ActionWithInput(props: NodeProps) {
  return (
    <Shape
      {...ACTION_WITH_INPUT}
      {...props}
      _style={extendStyle(ACTION_WITH_INPUT, props)}
    />
  )
}
