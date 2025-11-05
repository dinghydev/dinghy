import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LINKEDIN = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.linkedin;fillColor=#0095DB;gradientColor=#006391',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Linkedin(props: NodeProps) {
  return (
    <Shape {...LINKEDIN} {...props} _style={extendStyle(LINKEDIN, props)} />
  )
}
