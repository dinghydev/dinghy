import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WHATSAPP = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.whatsapp;fillColor=#4FE238;gradientColor=#138709',
  _width: 102.4,
  _height: 102.4,
}

export function Whatsapp(props: DiagramNodeProps) {
  return <Shape {...WHATSAPP} {...props} />
}
