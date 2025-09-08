import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SOUNDCLOUD = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.soundcloud;fillColor=#FE4600;strokeColor=none',
  },
  _original_width: 73.4,
  _original_height: 32.6,
}

export function Soundcloud(props: DiagramNodeProps) {
  return (
    <Shape {...SOUNDCLOUD} {...props} _style={extendStyle(SOUNDCLOUD, props)} />
  )
}
