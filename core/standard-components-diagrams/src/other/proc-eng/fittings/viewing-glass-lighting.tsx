import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIEWING_GLASS_LIGHTING = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.viewing_glass_(lighting);',
  _width: 100,
  _height: 100,
}

export function ViewingGlassLighting(props: DiagramNodeProps) {
  return <Shape {...VIEWING_GLASS_LIGHTING} {...props} />
}
