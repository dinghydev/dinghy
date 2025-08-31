import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOUDSPEAKER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.loudspeaker;',
  },
  _width: 25,
  _height: 50,
}

export function Loudspeaker(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOUDSPEAKER}
      {...props}
      _style={extendStyle(LOUDSPEAKER, props)}
    />
  )
}
