import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOZENGE_STATE_SUBTLE = {
  _style:
    'dashed=0;html=1;rounded=1;strokeColor=#DFE1E6;fontSize=12;align=center;fontStyle=1;strokeWidth=2;fontColor=#42526E',
  _width: 70,
  _height: 20,
}

export function LozengeStateSubtle(props: DiagramNodeProps) {
  return <Shape {...LOZENGE_STATE_SUBTLE} {...props} />
}
