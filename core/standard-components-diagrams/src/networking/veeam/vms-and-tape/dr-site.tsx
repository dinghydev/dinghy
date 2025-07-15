import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DR_SITE = {
  _style:
    'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.dr_site;',
  _width: 44.8,
  _height: 44.8,
}

export function DrSite(props: DiagramNodeProps) {
  return <Shape {...DR_SITE} {...props} />
}
