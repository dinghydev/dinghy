import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SWITCH_OFF = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.switch_off;fillColor=#666666;sketch=0;',
  },
  _original_width: 80,
  _original_height: 20,
}

export function SwitchOff(props: DiagramNodeProps) {
  return (
    <Shape {...SWITCH_OFF} {...props} _style={extendStyle(SWITCH_OFF, props)} />
  )
}
