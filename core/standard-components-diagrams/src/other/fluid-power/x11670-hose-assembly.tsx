import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11670_HOSE_ASSEMBLY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11670;points=[[0,0.1,0],[1,0.1,0],[0.037,0,0],[0.963,0,0]]',
  },
  _width: 40.06,
  _height: 13.36,
}

export function X11670HoseAssembly(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11670_HOSE_ASSEMBLY}
      {...props}
      _style={extendStyle(X11670_HOSE_ASSEMBLY, props)}
    />
  )
}
