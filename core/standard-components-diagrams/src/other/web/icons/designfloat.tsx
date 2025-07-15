import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DESIGNFLOAT = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.designfloat;fillColor=#247BE0;gradientColor=#0A1F42',
  _width: 102.4,
  _height: 102.4,
}

export function Designfloat(props: DiagramNodeProps) {
  return <Shape {...DESIGNFLOAT} {...props} />
}
