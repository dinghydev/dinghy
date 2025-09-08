import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACCESS_CARD = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.access_card;',
  },
  _original_width: 55.5,
  _original_height: 75,
}

export function AccessCard(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACCESS_CARD}
      {...props}
      _style={extendStyle(ACCESS_CARD, props)}
    />
  )
}
