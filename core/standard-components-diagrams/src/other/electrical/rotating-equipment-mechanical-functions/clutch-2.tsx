import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLUTCH_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.clutch_2;pointerEvents=1;',
  },
  _original_width: 90,
  _original_height: 60,
}

export function Clutch2(props: DiagramNodeProps) {
  return (
    <Shape {...CLUTCH_2} {...props} _style={extendStyle(CLUTCH_2, props)} />
  )
}
