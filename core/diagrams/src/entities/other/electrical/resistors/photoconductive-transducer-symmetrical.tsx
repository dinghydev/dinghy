import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PHOTOCONDUCTIVE_TRANSDUCER_SYMMETRICAL = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.symmetrical_photoconductive_transducer;',
  },
  _width: 100,
  _height: 40,
}

export function PhotoconductiveTransducerSymmetrical(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, PHOTOCONDUCTIVE_TRANSDUCER_SYMMETRICAL)}
    />
  )
}
