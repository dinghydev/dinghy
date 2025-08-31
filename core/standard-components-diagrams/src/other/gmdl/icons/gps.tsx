import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GPS = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.gps;strokeColor=#737373;fillColor=#737373;shadow=0;strokeWidth=2;sketch=0;',
  },
  _width: 20,
  _height: 20,
}

export function Gps(props: DiagramNodeProps) {
  return <Shape {...GPS} {...props} _style={extendStyle(GPS, props)} />
}
