import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COAXIAL_CHOKE = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.coaxial_choke;',
  _width: 300,
  _height: 50,
}

export function CoaxialChoke(props: DiagramNodeProps) {
  return <Shape {...COAXIAL_CHOKE} {...props} />
}
