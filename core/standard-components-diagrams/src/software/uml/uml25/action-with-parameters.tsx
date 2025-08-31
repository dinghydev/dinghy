import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTION_WITH_PARAMETERS = {
  _style: {
    entity:
      'shape=mxgraph.uml25.actionParams;html=1;align=center;verticalAlign=top;absoluteArcSize=1;arcSize=10;dashed=0;spacingLeft=10;spacingTop=5;whiteSpace=wrap;',
  },
  _width: 150,
  _height: 50,
}

export function ActionWithParameters(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTION_WITH_PARAMETERS}
      {...props}
      _style={extendStyle(ACTION_WITH_PARAMETERS, props)}
    />
  )
}
