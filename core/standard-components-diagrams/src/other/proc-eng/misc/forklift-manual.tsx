import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FORKLIFT_MANUAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.forklift_(manual);',
  },
  _width: 140,
  _height: 100,
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
