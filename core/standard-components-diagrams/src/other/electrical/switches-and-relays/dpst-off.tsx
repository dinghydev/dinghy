import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DPST_OFF = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.dpst2;elSwitchState=off;',
  },
  _width: 75,
  _height: 39,
}

export function DpstOff(props: DiagramNodeProps) {
  return (
    <Shape {...DPST_OFF} {...props} _style={extendStyle(DPST_OFF, props)} />
  )
}
