import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DENSE_COMPUTE_NODE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.dense_compute_node;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 55.5,
  _original_height: 63,
}

export function DenseComputeNode(props: NodeProps) {
  return (
    <Shape
      {...DENSE_COMPUTE_NODE}
      {...props}
      _style={extendStyle(DENSE_COMPUTE_NODE, props)}
    />
  )
}
