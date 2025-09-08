import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const KEYBOARD = {
  _style: {
    entity:
      'dashed=0;shape=rect;fillColor=#263238;strokeColor=none;aspect=fixed;',
  },
  _original_width: 358,
  _original_height: 224,
}

export function Keyboard(props: DiagramNodeProps) {
  return (
    <Shape {...KEYBOARD} {...props} _style={extendStyle(KEYBOARD, props)} />
  )
}
