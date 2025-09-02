import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CITEULIKE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.citeulike;fillColor=#ACD65E;gradientColor=#2E3618',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Citeulike(props: DiagramNodeProps) {
  return (
    <Shape {...CITEULIKE} {...props} _style={extendStyle(CITEULIKE, props)} />
  )
}
