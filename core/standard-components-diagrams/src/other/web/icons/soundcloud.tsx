import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOUNDCLOUD = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.soundcloud;fillColor=#F78E11;gradientColor=#F93A0E',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Soundcloud(props: DiagramNodeProps) {
  return (
    <Shape {...SOUNDCLOUD} {...props} _style={extendStyle(SOUNDCLOUD, props)} />
  )
}
