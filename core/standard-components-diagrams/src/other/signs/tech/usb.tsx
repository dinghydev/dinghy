import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USB = {
  _style:
    'shape=mxgraph.signs.tech.usb;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 43,
  _height: 98,
}

export function Usb(props: DiagramNodeProps) {
  return <Shape {...USB} {...props} />
}
