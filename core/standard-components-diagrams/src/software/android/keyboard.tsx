import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const KEYBOARD = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.keyboard;sketch=0;',
  },
  _original_width: 185,
  _original_height: 100,
}

export function Keyboard(props: DiagramNodeProps) {
  return (
    <Shape {...KEYBOARD} {...props} _style={extendStyle(KEYBOARD, props)} />
  )
}
