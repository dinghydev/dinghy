import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLICATION_WEB = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.application_web;',
  },
  _original_width: 56,
  _original_height: 49,
}

export function ApplicationWeb(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, APPLICATION_WEB)} />
}
