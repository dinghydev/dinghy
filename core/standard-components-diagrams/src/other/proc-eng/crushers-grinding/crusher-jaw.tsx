import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CRUSHER_JAW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.crusher_(jaw);',
  },
  _width: 100,
  _height: 60,
}

export function CrusherJaw(props: DiagramNodeProps) {
  return (
    <Shape
      {...CRUSHER_JAW}
      {...props}
      _style={extendStyle(CRUSHER_JAW, props)}
    />
  )
}
