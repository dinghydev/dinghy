import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACCESS_CARD = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.access_card;',
  _width: 55.5,
  _height: 75,
}

export function AccessCard(props: DiagramNodeProps) {
  return <Shape {...ACCESS_CARD} {...props} />
}
