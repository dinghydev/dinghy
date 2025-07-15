import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CS_MARS = {
  _style:
    'shape=mxgraph.cisco.misc.cs-mars;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 75,
  _height: 50,
}

export function CsMars(props: DiagramNodeProps) {
  return <Shape {...CS_MARS} {...props} />
}
