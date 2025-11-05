import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KEYBOARD = {
  _style: {
    entity:
      'dashed=0;shape=rect;fillColor=#263238;strokeColor=none;aspect=fixed;',
  },
  _width: 358,
  _height: 224,
}

export function Keyboard(props: NodeProps) {
  return (
    <Shape {...KEYBOARD} {...props} _style={extendStyle(KEYBOARD, props)} />
  )
}
