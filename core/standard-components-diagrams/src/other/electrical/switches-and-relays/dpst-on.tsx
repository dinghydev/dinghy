import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DPST_ON = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.dpst2;elSwitchState=on;',
  },
  _original_width: 75,
  _original_height: 39,
}

export function DpstOn(props: DiagramNodeProps) {
  return <Shape {...DPST_ON} {...props} _style={extendStyle(DPST_ON, props)} />
}
