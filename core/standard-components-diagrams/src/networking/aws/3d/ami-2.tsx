import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AMI_2 = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.ami2;aspect=fixed;fillColor=#FF9900;strokeColor=#ffffff;',
  _width: 74,
  _height: 50,
}

export function Ami2(props: DiagramNodeProps) {
  return <Shape {...AMI_2} {...props} />
}
