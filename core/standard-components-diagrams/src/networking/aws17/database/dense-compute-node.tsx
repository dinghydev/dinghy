import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DENSE_COMPUTE_NODE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.dense_compute_node;fillColor=#2E73B8;gradientColor=none;',
  _width: 55.5,
  _height: 63,
}

export function DenseComputeNode(props: DiagramNodeProps) {
  return (
    <Shape
      {...DENSE_COMPUTE_NODE}
      {...props}
      _style={extendStyle(DENSE_COMPUTE_NODE, props)}
    />
  )
}
