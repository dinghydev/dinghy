import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MAIL = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.misc.mail2;strokeColor=#999999;',
  _width: 100,
  _height: 60,
}

export function Mail(props: DiagramNodeProps) {
  return <Shape {...MAIL} {...props} />
}
