import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SKYPE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.skype;fillColor=#2AACE2;strokeColor=none',
  },
  _original_width: 77.60000000000001,
  _original_height: 78.80000000000001,
}

export function Skype(props: DiagramNodeProps) {
  return <Shape {...SKYPE} {...props} _style={extendStyle(SKYPE, props)} />
}
