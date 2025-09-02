import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWITCH_ON = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.switch_on;fillColor=#666666;sketch=0;',
  },
  _original_width: 80,
  _original_height: 20,
}

export function SwitchOn(props: DiagramNodeProps) {
  return (
    <Shape {...SWITCH_ON} {...props} _style={extendStyle(SWITCH_ON, props)} />
  )
}
