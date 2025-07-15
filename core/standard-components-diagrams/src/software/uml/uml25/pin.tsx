import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PIN = {
  _style:
    'fontStyle=0;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;spacingLeft=2;html=1;points=[[0,0.5],[1,0.5]];fillColor=strokeColor;',
  _width: 30,
  _height: 30,
}

export function Pin(props: DiagramNodeProps) {
  return <Shape {...PIN} {...props} />
}
