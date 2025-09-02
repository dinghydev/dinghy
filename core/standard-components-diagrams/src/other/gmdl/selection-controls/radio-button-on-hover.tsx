import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RADIO_BUTTON_ON_HOVER = {
  _style: {
    entity:
      'dashed=0;labelPosition=right;align=left;shape=mxgraph.gmdl.radiobutton;strokeColor=#009587;fillColor=#009587;strokeWidth=2;aspect=fixed;sketch=0;html=1;',
  },
  _original_width: 0,
  _original_height: 16,
}

export function RadioButtonOnHover(props: DiagramNodeProps) {
  return (
    <Shape
      {...RADIO_BUTTON_ON_HOVER}
      {...props}
      _style={extendStyle(RADIO_BUTTON_ON_HOVER, props)}
    />
  )
}
