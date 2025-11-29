import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SKYROCK = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.skyrock;fillColor=#009AFF;strokeColor=none',
  },
  _original_width: 67.8,
  _original_height: 70.4,
}

export function Skyrock(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SKYROCK)} />
}
