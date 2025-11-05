import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INSTANCE_SPECIFICATION_2 = {
  _style: {
    entity:
      'verticalAlign=bottom;html=1;endArrow=open;endSize=12;edgeStyle=orthogonalEdgeStyle;',
  },
  _width: 2,
  _height: 30,
}

export function InstanceSpecification2(props: NodeProps) {
  return (
    <Shape
      {...INSTANCE_SPECIFICATION_2}
      {...props}
      _style={extendStyle(INSTANCE_SPECIFICATION_2, props)}
    />
  )
}
