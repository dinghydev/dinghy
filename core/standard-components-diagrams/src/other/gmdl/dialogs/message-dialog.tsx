import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE_DIALOG = {
  _style:
    'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;whiteSpace=wrap;html=1;',
  _width: 480,
  _height: 480,
}

export function MessageDialog(props: DiagramNodeProps) {
  return <Shape {...MESSAGE_DIALOG} {...props} />
}
