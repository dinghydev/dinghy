import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_2FTVM_RUNNING = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.2ftvm_running;',
  },
  _original_width: 68,
  _original_height: 62,
}

export function Component2ftvmRunning(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, COMPONENT_2FTVM_RUNNING)} />
  )
}
