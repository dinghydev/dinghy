import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLUTCH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.clutch;pointerEvents=1;',
  },
  _original_width: 100,
  _original_height: 20,
}

export function Clutch(props: DiagramNodeProps) {
  return <Shape {...CLUTCH} {...props} _style={extendStyle(CLUTCH, props)} />
}
