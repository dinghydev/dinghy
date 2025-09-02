import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PHOTOCONDUCTIVE_TRANSDUCER_SYMMETRICAL = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.symmetrical_photoconductive_transducer;',
  },
  _original_width: 100,
  _original_height: 40,
}

export function PhotoconductiveTransducerSymmetrical(props: DiagramNodeProps) {
  return (
    <Shape
      {...PHOTOCONDUCTIVE_TRANSDUCER_SYMMETRICAL}
      {...props}
      _style={extendStyle(PHOTOCONDUCTIVE_TRANSDUCER_SYMMETRICAL, props)}
    />
  )
}
