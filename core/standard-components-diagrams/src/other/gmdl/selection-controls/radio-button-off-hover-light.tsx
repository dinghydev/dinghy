import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RADIO_BUTTON_OFF_HOVER_LIGHT = {
  _style:
    'dashed=0;labelPosition=right;align=left;shape=mxgraph.gmdl.radiobutton;strokeColor=#666666;fillColor=none;strokeWidth=2;aspect=fixed;sketch=0;html=1;',
  _width: 0,
  _height: 16,
}

export function RadioButtonOffHoverLight(props: DiagramNodeProps) {
  return (
    <Shape
      {...RADIO_BUTTON_OFF_HOVER_LIGHT}
      {...props}
      _style={extendStyle(RADIO_BUTTON_OFF_HOVER_LIGHT, props)}
    />
  )
}
