import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DPDT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.dpdt3;elSwitchState=1;',
  },
  _original_width: 58,
  _original_height: 62,
}

export function Dpdt(props: DiagramNodeProps) {
  return <Shape {...DPDT} {...props} _style={extendStyle(DPDT, props)} />
}
