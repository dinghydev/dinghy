import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLANGE_IN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.flange_in;pointerEvents=1;',
  },
  _original_width: 10,
  _original_height: 20,
}

export function FlangeIn(props: DiagramNodeProps) {
  return (
    <Shape {...FLANGE_IN} {...props} _style={extendStyle(FLANGE_IN, props)} />
  )
}
