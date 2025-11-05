import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MILL_ROLLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.mill_(roller);',
  },
  _width: 100,
  _height: 60,
}

export function MillRoller(props: NodeProps) {
  return (
    <Shape
      {...MILL_ROLLER}
      {...props}
      _style={extendStyle(MILL_ROLLER, props)}
    />
  )
}
