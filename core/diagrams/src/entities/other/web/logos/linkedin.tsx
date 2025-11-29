import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LINKEDIN = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.linkedin;fillColor=#0095DB;gradientColor=#006391',
  },
  _original_width: 57.400000000000006,
  _original_height: 60.6,
}

export function Linkedin(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LINKEDIN)} />
}
