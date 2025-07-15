import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KEYBOARD = {
  _style:
    'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.keyboard_(letters);sketch=0;',
  _width: 175,
  _height: 120,
}

export function Keyboard(props: DiagramNodeProps) {
  return <Shape {...KEYBOARD} {...props} />
}
