import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VKONTAKTE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.vkontakte;fillColor=#5F94CC;gradientColor=#39587A',
  _width: 102.4,
  _height: 102.4,
}

export function Vkontakte(props: DiagramNodeProps) {
  return (
    <Shape {...VKONTAKTE} {...props} _style={extendStyle(VKONTAKTE, props)} />
  )
}
