import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLEXIBLE_HOSE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.flexible_hose;pointerEvents=1;',
  },
  _original_width: 50,
  _original_height: 25,
}

export function FlexibleHose(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLEXIBLE_HOSE}
      {...props}
      _style={extendStyle(FLEXIBLE_HOSE, props)}
    />
  )
}
