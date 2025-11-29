import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCHEDULER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.scheduler;pointerEvents=1;',
  },
  _original_width: 40,
  _original_height: 50,
}

export function Scheduler(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SCHEDULER)} />
}
