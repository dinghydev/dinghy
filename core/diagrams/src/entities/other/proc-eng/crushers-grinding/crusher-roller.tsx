import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CRUSHER_ROLLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.crusher_(roller);',
  },
  _width: 100,
  _height: 60,
}

export function CrusherRoller(props: DiagramNodeProps) {
  return (
    <Shape
      {...CRUSHER_ROLLER}
      {...props}
      _style={extendStyle(CRUSHER_ROLLER, props)}
    />
  )
}
