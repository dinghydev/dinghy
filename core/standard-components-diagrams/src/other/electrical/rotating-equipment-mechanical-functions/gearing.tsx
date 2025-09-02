import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GEARING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.gearing;pointerEvents=1;',
  },
  _original_width: 100,
  _original_height: 64,
}

export function Gearing(props: DiagramNodeProps) {
  return <Shape {...GEARING} {...props} _style={extendStyle(GEARING, props)} />
}
