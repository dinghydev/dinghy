import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MILL_ROLLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.mill_(roller);',
  },
  _original_width: 100,
  _original_height: 60,
}

export function MillRoller(props: DiagramNodeProps) {
  return (
    <Shape
      {...MILL_ROLLER}
      {...props}
      _style={extendStyle(MILL_ROLLER, props)}
    />
  )
}
