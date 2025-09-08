import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARDUINO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.arduino;fillColor=#36868D;strokeColor=none',
  },
  _original_width: 67.4,
  _original_height: 32,
}

export function Arduino(props: DiagramNodeProps) {
  return <Shape {...ARDUINO} {...props} _style={extendStyle(ARDUINO, props)} />
}
