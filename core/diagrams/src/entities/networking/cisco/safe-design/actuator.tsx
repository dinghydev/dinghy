import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTUATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#A153A0;verticalAlign=top;align=center;pointerEvents=1;shape=mxgraph.cisco_safe.design.actuator;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function Actuator(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ACTUATOR)} />
}
