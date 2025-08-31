import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PERISTALTIC = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.peristaltic;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 60,
  _height: 69,
}

export function Peristaltic(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERISTALTIC}
      {...props}
      _style={extendStyle(PERISTALTIC, props)}
    />
  )
}
