import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWITCH_ON = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.switch_on;fillColor=#666666;sketch=0;',
  },
  _width: 80,
  _height: 20,
}

export function SwitchOn(props: DiagramNodeProps) {
  return (
    <Shape {...SWITCH_ON} {...props} _style={extendStyle(SWITCH_ON, props)} />
  )
}
