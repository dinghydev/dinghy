import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUDFORMATION = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.cloudformation;fillColor=#759C3E;gradientColor=none;',
  _width: 76.5,
  _height: 93,
}

export function Cloudformation(props: DiagramNodeProps) {
  return <Shape {...CLOUDFORMATION} {...props} />
}
