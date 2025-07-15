import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PHOTOCONDUCTIVE_TRANSDUCER_SYMMETRICAL = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.symmetrical_photoconductive_transducer;',
  _width: 100,
  _height: 40,
}

export function PhotoconductiveTransducerSymmetrical(props: DiagramNodeProps) {
  return <Shape {...PHOTOCONDUCTIVE_TRANSDUCER_SYMMETRICAL} {...props} />
}
