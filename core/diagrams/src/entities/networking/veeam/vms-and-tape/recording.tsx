import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RECORDING = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.recording;',
  },
  _original_width: 36,
  _original_height: 36,
}

export function Recording(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RECORDING)} />
}
