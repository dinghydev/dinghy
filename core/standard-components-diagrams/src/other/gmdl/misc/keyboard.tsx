import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KEYBOARD = {
  _style:
    'dashed=0;shape=rect;fillColor=#263238;strokeColor=none;aspect=fixed;',
  _width: 358,
  _height: 224,
}

export function Keyboard(props: DiagramNodeProps) {
  return <Shape {...KEYBOARD} {...props} />
}
