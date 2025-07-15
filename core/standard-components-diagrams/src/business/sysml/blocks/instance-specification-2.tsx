import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INSTANCE_SPECIFICATION_2 = {
  _style:
    'verticalAlign=bottom;html=1;endArrow=open;endSize=12;edgeStyle=orthogonalEdgeStyle;',
  _width: 2,
  _height: 30,
}

export function InstanceSpecification2(props: DiagramNodeProps) {
  return <Shape {...INSTANCE_SPECIFICATION_2} {...props} />
}
