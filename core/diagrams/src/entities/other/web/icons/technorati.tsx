import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TECHNORATI = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.technorati;fillColor=#99EC92;gradientColor=#288925',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Technorati(props: DiagramNodeProps) {
  return (
    <Shape {...TECHNORATI} {...props} _style={extendStyle(TECHNORATI, props)} />
  )
}
