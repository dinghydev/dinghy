import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROPERTIES = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.properties;',
  },
  _original_width: 50,
  _original_height: 49,
}

export function Properties(props: DiagramNodeProps) {
  return (
    <Shape {...PROPERTIES} {...props} _style={extendStyle(PROPERTIES, props)} />
  )
}
