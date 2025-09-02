import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11970_IN_LINE_PARTICLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11970;points=[[0,0.29,0],[1,0.145,0],[0.893,1,0]]',
  },
  _original_width: 177.28,
  _original_height: 64.66,
}

export function X11970InLineParticle(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11970_IN_LINE_PARTICLE}
      {...props}
      _style={extendStyle(X11970_IN_LINE_PARTICLE, props)}
    />
  )
}
