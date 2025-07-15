import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KEYBOARD = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.keyboard;sketch=0;',
  _width: 185,
  _height: 100,
}

export function Keyboard(props: DiagramNodeProps) {
  return <Shape {...KEYBOARD} {...props} />
}
