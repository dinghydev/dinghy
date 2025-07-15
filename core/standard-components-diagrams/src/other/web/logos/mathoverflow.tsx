import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MATHOVERFLOW = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.mathoverflow;fillColor=#656463;gradientColor=#F28711;gradientDirection=east',
  _width: 59,
  _height: 48.2,
}

export function Mathoverflow(props: DiagramNodeProps) {
  return <Shape {...MATHOVERFLOW} {...props} />
}
