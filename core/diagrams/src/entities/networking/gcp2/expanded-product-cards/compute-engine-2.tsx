import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPUTE_ENGINE_2 = {
  _style: {
    entity:
      'shape=mxgraph.gcp2.doubleRect;fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;',
  },
  _width: 0,
  _height: 78,
}

export function ComputeEngine2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COMPUTE_ENGINE_2)} />
}
