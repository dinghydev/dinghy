import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TEMPLATE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.template;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 55.5,
  _original_height: 64.5,
}

export function Template(props: DiagramNodeProps) {
  return (
    <Shape {...TEMPLATE} {...props} _style={extendStyle(TEMPLATE, props)} />
  )
}
