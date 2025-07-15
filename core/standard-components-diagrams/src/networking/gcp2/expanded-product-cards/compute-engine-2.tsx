import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPUTE_ENGINE_2 = {
  _style:
    'shape=mxgraph.gcp2.doubleRect;fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;',
  _width: 0,
  _height: 78,
}

export function ComputeEngine2(props: DiagramNodeProps) {
  return <Shape {...COMPUTE_ENGINE_2} {...props} />
}
