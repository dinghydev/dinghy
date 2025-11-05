import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHECKLIST = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#E7157B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.checklist;',
  },
  _original_width: 66,
  _original_height: 78,
}

export function Checklist(props: NodeProps) {
  return (
    <Shape {...CHECKLIST} {...props} _style={extendStyle(CHECKLIST, props)} />
  )
}
