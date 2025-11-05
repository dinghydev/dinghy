import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEB_CONFERENCING = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.web_conferencing;',
  },
  _original_width: 60,
  _original_height: 56,
}

export function WebConferencing(props: NodeProps) {
  return (
    <Shape
      {...WEB_CONFERENCING}
      {...props}
      _style={extendStyle(WEB_CONFERENCING, props)}
    />
  )
}
