import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRANSDUCER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.transducer',
  },
  _original_width: 70,
  _original_height: 60,
}

export function Transducer(props: DiagramNodeProps) {
  return (
    <Shape {...TRANSDUCER} {...props} _style={extendStyle(TRANSDUCER, props)} />
  )
}
