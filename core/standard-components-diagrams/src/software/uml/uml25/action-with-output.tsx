import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTION_WITH_OUTPUT = {
  _style: {
    entity:
      'shape=mxgraph.uml25.action;html=1;align=center;verticalAlign=middle;absoluteArcSize=1;arcSize=10;dashed=0;spacingRight=10;whiteSpace=wrap;',
  },
  _original_width: 0,
  _original_height: 60,
}

export function ActionWithOutput(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTION_WITH_OUTPUT}
      {...props}
      _style={extendStyle(ACTION_WITH_OUTPUT, props)}
    />
  )
}
