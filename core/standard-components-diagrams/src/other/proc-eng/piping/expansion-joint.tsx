import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXPANSION_JOINT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.expansion_joint;',
  },
  _original_width: 50,
  _original_height: 20,
}

export function ExpansionJoint(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXPANSION_JOINT}
      {...props}
      _style={extendStyle(EXPANSION_JOINT, props)}
    />
  )
}
