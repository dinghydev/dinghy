import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DETENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.detent;pointerEvents=1;',
  },
  _original_width: 100,
  _original_height: 8,
}

export function Detent(props: DiagramNodeProps) {
  return <Shape {...DETENT} {...props} _style={extendStyle(DETENT, props)} />
}
