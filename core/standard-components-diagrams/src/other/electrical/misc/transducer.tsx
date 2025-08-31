import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRANSDUCER = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.transducer',
  _width: 70,
  _height: 60,
}

export function Transducer(props: DiagramNodeProps) {
  return (
    <Shape {...TRANSDUCER} {...props} _style={extendStyle(TRANSDUCER, props)} />
  )
}
