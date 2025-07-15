import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BLOCK_NAMESPACE_CONTAINMENT_2 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;verticalAlign=bottom;endArrow=none;rounded=0;',
  _width: 2,
  _height: 70,
}

export function BlockNamespaceContainment2(props: DiagramNodeProps) {
  return <Shape {...BLOCK_NAMESPACE_CONTAINMENT_2} {...props} />
}
