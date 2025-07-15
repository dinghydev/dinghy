import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AUDIOBOO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.audioboo;fillColor=#EB35CF;gradientColor=#8C0E35',
  _width: 102.4,
  _height: 102.4,
}

export function Audioboo(props: DiagramNodeProps) {
  return <Shape {...AUDIOBOO} {...props} />
}
