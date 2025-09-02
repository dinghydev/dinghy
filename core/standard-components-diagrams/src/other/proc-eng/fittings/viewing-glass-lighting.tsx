import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIEWING_GLASS_LIGHTING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.viewing_glass_(lighting);',
  },
  _original_width: 100,
  _original_height: 100,
}

export function ViewingGlassLighting(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIEWING_GLASS_LIGHTING}
      {...props}
      _style={extendStyle(VIEWING_GLASS_LIGHTING, props)}
    />
  )
}
