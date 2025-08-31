import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CALL_BUTTONS = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iCallButtons;',
  _width: 174,
  _height: 229.99999999999997,
}

export function CallButtons(props: DiagramNodeProps) {
  return (
    <Shape
      {...CALL_BUTTONS}
      {...props}
      _style={extendStyle(CALL_BUTTONS, props)}
    />
  )
}
