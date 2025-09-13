import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11020_CARTRIDGE_FOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11020;points=[[0.33,1,0],[1,0.5,0]]',
  },
  _width: 56.06,
  _height: 93.2,
}

export function X11020CartridgeFor(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11020_CARTRIDGE_FOR}
      {...props}
      _style={extendStyle(X11020_CARTRIDGE_FOR, props)}
    />
  )
}
