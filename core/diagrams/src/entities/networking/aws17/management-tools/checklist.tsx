import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHECKLIST = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.checklist;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 55.5,
  _original_height: 64.5,
}

export function Checklist(props: NodeProps) {
  return (
    <Shape {...CHECKLIST} {...props} _style={extendStyle(CHECKLIST, props)} />
  )
}
