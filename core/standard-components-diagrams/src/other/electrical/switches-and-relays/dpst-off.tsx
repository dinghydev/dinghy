import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DPST_OFF = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.dpst2;elSwitchState=off;',
  },
  _original_width: 75,
  _original_height: 39,
}

export function DpstOff(props: DiagramNodeProps) {
  return (
    <Shape {...DPST_OFF} {...props} _style={extendStyle(DPST_OFF, props)} />
  )
}
