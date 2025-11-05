import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APP_PART = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.app_part;',
  },
  _original_width: 46,
  _original_height: 45,
}

export function AppPart(props: NodeProps) {
  return (
    <Shape {...APP_PART} {...props} _style={extendStyle(APP_PART, props)} />
  )
}
