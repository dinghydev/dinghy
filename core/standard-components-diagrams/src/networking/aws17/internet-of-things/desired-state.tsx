import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DESIRED_STATE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.desired_state;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 63,
}

export function DesiredState(props: DiagramNodeProps) {
  return (
    <Shape
      {...DESIRED_STATE}
      {...props}
      _style={extendStyle(DESIRED_STATE, props)}
    />
  )
}
