import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DENSE_STORAGE_NODE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.dense_storage_node;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 55.5,
  _original_height: 63,
}

export function DenseStorageNode(props: DiagramNodeProps) {
  return (
    <Shape
      {...DENSE_STORAGE_NODE}
      {...props}
      _style={extendStyle(DENSE_STORAGE_NODE, props)}
    />
  )
}
