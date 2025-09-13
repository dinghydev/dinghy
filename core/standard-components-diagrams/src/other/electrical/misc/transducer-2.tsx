import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRANSDUCER_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.transducer_2',
  },
  _width: 80,
  _height: 100,
}

export function Transducer2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRANSDUCER_2}
      {...props}
      _style={extendStyle(TRANSDUCER_2, props)}
    />
  )
}
