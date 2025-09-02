import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROLE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.role;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 94.5,
  _original_height: 79.5,
}

export function Role(props: DiagramNodeProps) {
  return <Shape {...ROLE} {...props} _style={extendStyle(ROLE, props)} />
}
