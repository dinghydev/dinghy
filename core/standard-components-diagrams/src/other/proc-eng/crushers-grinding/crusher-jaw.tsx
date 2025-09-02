import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CRUSHER_JAW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.crusher_(jaw);',
  },
  _original_width: 100,
  _original_height: 60,
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
