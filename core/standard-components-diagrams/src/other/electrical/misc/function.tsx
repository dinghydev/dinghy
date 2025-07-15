import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FUNCTION = {
  _style:
    'shape=mxgraph.electrical.abstract.function;html=1;shadow=0;dashed=0;align=center;strokeWidth=1;fontSize=24',
  _width: 50,
  _height: 50,
}

export function Function(props: DiagramNodeProps) {
  return <Shape {...FUNCTION} {...props} />
}
