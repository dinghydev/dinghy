import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PIN = {
  _style:
    'verticalLabelPosition=top;shadow=0;dashed=0;align=center;html=1;verticalAlign=bottom;strokeWidth=1;shape=mxgraph.mockup.misc.pin;fillColor2=#00dd00;fillColor3=#004400;strokeColor=#006600;',
  _width: 10,
  _height: 25,
}

export function Pin(props: DiagramNodeProps) {
  return <Shape {...PIN} {...props} />
}
