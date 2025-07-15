import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SOUNDCLOUD = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.soundcloud;fillColor=#FE4600;strokeColor=none',
  _width: 73.4,
  _height: 32.6,
}

export function Soundcloud(props: DiagramNodeProps) {
  return <Shape {...SOUNDCLOUD} {...props} />
}
