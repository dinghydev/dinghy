import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const KEYBOARD = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.keyboard_(letters);sketch=0;',
  },
  _original_width: 175,
  _original_height: 120,
}

export function Keyboard(props: DiagramNodeProps) {
  return (
    <Shape {...KEYBOARD} {...props} _style={extendStyle(KEYBOARD, props)} />
  )
}
