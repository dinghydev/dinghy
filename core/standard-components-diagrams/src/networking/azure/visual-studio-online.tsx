import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VISUAL_STUDIO_ONLINE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.visual_studio_online;',
  },
  _width: 50,
  _height: 37.5,
}

export function VisualStudioOnline(props: DiagramNodeProps) {
  return (
    <Shape
      {...VISUAL_STUDIO_ONLINE}
      {...props}
      _style={extendStyle(VISUAL_STUDIO_ONLINE, props)}
    />
  )
}
