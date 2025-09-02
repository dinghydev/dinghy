import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLOCK_NAMESPACE_CONTAINMENT_2 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;verticalAlign=bottom;endArrow=none;rounded=0;',
  },
  _original_width: 2,
  _original_height: 70,
}

export function BlockNamespaceContainment2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BLOCK_NAMESPACE_CONTAINMENT_2}
      {...props}
      _style={extendStyle(BLOCK_NAMESPACE_CONTAINMENT_2, props)}
    />
  )
}
