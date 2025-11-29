import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VAPP_RUNNING = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vapp_running;',
  },
  _original_width: 36,
  _original_height: 36,
}

export function VappRunning(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VAPP_RUNNING)} />
}
