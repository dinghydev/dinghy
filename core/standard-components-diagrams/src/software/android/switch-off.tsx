import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWITCH_OFF = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.switch_off;fillColor=#666666;sketch=0;',
  _width: 80,
  _height: 20,
}

export function SwitchOff(props: DiagramNodeProps) {
  return (
    <Shape {...SWITCH_OFF} {...props} _style={extendStyle(SWITCH_OFF, props)} />
  )
}
