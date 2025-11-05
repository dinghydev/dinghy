import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BLOCK_NAMESPACE_CONTAINMENT = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;endSize=12;endArrow=sysMLPackCont;elbow=horizontal;rounded=0;align=left;verticalAlign=middle',
  },
  _width: 1,
  _height: 70,
}

export function BlockNamespaceContainment(props: NodeProps) {
  return (
    <Shape
      {...BLOCK_NAMESPACE_CONTAINMENT}
      {...props}
      _style={extendStyle(BLOCK_NAMESPACE_CONTAINMENT, props)}
    />
  )
}
