import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PORT_2 = {
  _style:
    'fontStyle=0;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;spacingLeft=2;html=1;',
  _width: 30,
  _height: 30,
}

export function Port2(props: DiagramNodeProps) {
  return <Shape {...PORT_2} {...props} />
}
