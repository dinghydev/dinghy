import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VISUAL_STUDIO_ONLINE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.visual_studio_online;',
  _width: 50,
  _height: 37.5,
}

export function VisualStudioOnline(props: DiagramNodeProps) {
  return <Shape {...VISUAL_STUDIO_ONLINE} {...props} />
}
