import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KEYBOARD = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.keyboard',
  },
  _width: 50,
  _height: 30,
}

export function Keyboard(props: DiagramNodeProps) {
  return (
    <Shape {...KEYBOARD} {...props} _style={extendStyle(KEYBOARD, props)} />
  )
}
