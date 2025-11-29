import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MERGE_NODE = {
  _style: {
    entity:
      'shape=rhombus;html=1;verticalLabelPosition=top;verticalAlignment=bottom;',
  },
  _width: 200,
  _height: 80,
}

export function MergeNode(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MERGE_NODE)} />
}
