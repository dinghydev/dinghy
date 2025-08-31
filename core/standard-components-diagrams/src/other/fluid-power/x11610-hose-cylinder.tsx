import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11610_HOSE_CYLINDER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11610;points=[[0,0.5,0]]',
  },
  _width: 93.38,
  _height: 38.14,
}

export function X11610HoseCylinder(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11610_HOSE_CYLINDER}
      {...props}
      _style={extendStyle(X11610_HOSE_CYLINDER, props)}
    />
  )
}
