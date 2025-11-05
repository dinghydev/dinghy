import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOCK = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.clock;',
  },
  _original_width: 45,
  _original_height: 45,
}

export function Clock(props: NodeProps) {
  return <Shape {...CLOCK} {...props} _style={extendStyle(CLOCK, props)} />
}
