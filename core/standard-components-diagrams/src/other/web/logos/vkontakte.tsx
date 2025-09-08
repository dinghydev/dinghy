import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VKONTAKTE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.vkontakte;fillColor=#4C75A3;strokeColor=none',
  },
  _original_width: 70.4,
  _original_height: 40,
}

export function Vkontakte(props: DiagramNodeProps) {
  return (
    <Shape {...VKONTAKTE} {...props} _style={extendStyle(VKONTAKTE, props)} />
  )
}
