import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BIOHAZARD = {
  _style:
    'shape=mxgraph.signs.safety.biohazard;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 106,
  _height: 97,
}

export function Biohazard(props: DiagramNodeProps) {
  return <Shape {...BIOHAZARD} {...props} />
}
