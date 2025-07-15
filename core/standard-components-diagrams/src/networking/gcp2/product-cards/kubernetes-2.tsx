import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KUBERNETES_2 = {
  _style:
    'shape=mxgraph.gcp2.doubleRect;fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;',
  _width: 0,
  _height: 68,
}

export function Kubernetes2(props: DiagramNodeProps) {
  return <Shape {...KUBERNETES_2} {...props} />
}
