import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WHATSAPP = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.whatsapp;fillColor=#00E676;strokeColor=#dddddd',
  _width: 74.4,
  _height: 74.8,
}

export function Whatsapp(props: DiagramNodeProps) {
  return <Shape {...WHATSAPP} {...props} />
}
