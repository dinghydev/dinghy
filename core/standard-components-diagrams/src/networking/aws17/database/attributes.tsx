import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ATTRIBUTES = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.attributes;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 63,
  _original_height: 66,
}

export function Attributes(props: DiagramNodeProps) {
  return (
    <Shape {...ATTRIBUTES} {...props} _style={extendStyle(ATTRIBUTES, props)} />
  )
}
