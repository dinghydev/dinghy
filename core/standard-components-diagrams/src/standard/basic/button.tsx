import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUTTON = {
  _style:
    'labelPosition=center;verticalLabelPosition=middle;align=center;html=1;shape=mxgraph.basic.button;dx=10;whiteSpace=wrap;',
  _width: 100,
  _height: 60,
}

export function Button(props: DiagramNodeProps) {
  return <Shape {...BUTTON} {...props} />
}
