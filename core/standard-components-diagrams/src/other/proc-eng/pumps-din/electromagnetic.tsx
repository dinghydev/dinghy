import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELECTROMAGNETIC = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_din.electromagnetic;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 60,
  _height: 60,
}

export function Electromagnetic(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELECTROMAGNETIC}
      {...props}
      _style={extendStyle(ELECTROMAGNETIC, props)}
    />
  )
}
