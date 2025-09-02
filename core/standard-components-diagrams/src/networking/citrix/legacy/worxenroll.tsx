import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORXENROLL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.worxenroll;fillColor=#386510;gradientColor=#C6CF2B;gradientDirection=south;',
  },
  _original_width: 38,
  _original_height: 38,
}

export function Worxenroll(props: DiagramNodeProps) {
  return (
    <Shape {...WORXENROLL} {...props} _style={extendStyle(WORXENROLL, props)} />
  )
}
