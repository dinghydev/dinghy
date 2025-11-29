import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BLOCK_NAMESPACE_CONTAINMENT_2 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;verticalAlign=bottom;endArrow=none;rounded=0;',
  },
  _width: 2,
  _height: 70,
}

export function BlockNamespaceContainment2(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, BLOCK_NAMESPACE_CONTAINMENT_2)}
    />
  )
}
