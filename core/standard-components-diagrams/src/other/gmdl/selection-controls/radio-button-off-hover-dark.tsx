import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RADIO_BUTTON_OFF_HOVER_DARK = {
  _style:
    'dashed=0;labelPosition=right;align=left;shape=mxgraph.gmdl.radiobutton;strokeColor=#ffffff;fillColor=none;strokeWidth=2;aspect=fixed;sketch=0;html=1;',
  _width: 0,
  _height: 16,
}

export function RadioButtonOffHoverDark(props: DiagramNodeProps) {
  return <Shape {...RADIO_BUTTON_OFF_HOVER_DARK} {...props} />
}
