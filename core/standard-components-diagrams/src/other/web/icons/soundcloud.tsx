import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SOUNDCLOUD = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.soundcloud;fillColor=#F78E11;gradientColor=#F93A0E',
  _width: 102.4,
  _height: 102.4,
}

export function Soundcloud(props: DiagramNodeProps) {
  return <Shape {...SOUNDCLOUD} {...props} />
}
