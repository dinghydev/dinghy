import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_ROLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.web_role;',
  },
  _original_width: 50,
  _original_height: 40,
}

export function WebRole(props: DiagramNodeProps) {
  return (
    <Shape {...WEB_ROLE} {...props} _style={extendStyle(WEB_ROLE, props)} />
  )
}
