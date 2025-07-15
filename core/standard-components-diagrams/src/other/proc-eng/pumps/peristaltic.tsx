import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PERISTALTIC = {
  _style:
    'shape=mxgraph.pid.pumps.peristaltic;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 69,
}

export function Peristaltic(props: DiagramNodeProps) {
  return <Shape {...PERISTALTIC} {...props} />
}
