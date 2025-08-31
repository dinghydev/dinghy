import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INSTAGRAM = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.instagram;fillColor=#6FC0E4;gradientColor=#1E305B',
  },
  _width: 60,
  _height: 60,
}

export function Instagram(props: DiagramNodeProps) {
  return (
    <Shape {...INSTAGRAM} {...props} _style={extendStyle(INSTAGRAM, props)} />
  )
}
