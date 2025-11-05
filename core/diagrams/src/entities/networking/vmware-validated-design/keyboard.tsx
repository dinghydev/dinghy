import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KEYBOARD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.keyboard;',
  },
  _width: 50,
  _height: 35.5,
}

export function Keyboard(props: NodeProps) {
  return (
    <Shape {...KEYBOARD} {...props} _style={extendStyle(KEYBOARD, props)} />
  )
}
