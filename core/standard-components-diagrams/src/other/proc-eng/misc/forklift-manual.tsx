import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FORKLIFT_MANUAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.forklift_(manual);',
  },
  _original_width: 140,
  _original_height: 100,
}

export function ForkliftManual(props: DiagramNodeProps) {
  return (
    <Shape
      {...FORKLIFT_MANUAL}
      {...props}
      _style={extendStyle(FORKLIFT_MANUAL, props)}
    />
  )
}
