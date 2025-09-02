import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INSTANCE_SPECIFICATION_2 = {
  _style: {
    entity:
      'verticalAlign=bottom;html=1;endArrow=open;endSize=12;edgeStyle=orthogonalEdgeStyle;',
  },
  _original_width: 2,
  _original_height: 30,
}

export function InstanceSpecification2(props: DiagramNodeProps) {
  return (
    <Shape
      {...INSTANCE_SPECIFICATION_2}
      {...props}
      _style={extendStyle(INSTANCE_SPECIFICATION_2, props)}
    />
  )
}
