import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UCS_C_SERIES_SERVER = {
  _style: {
    entity:
      'sketch=0;points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=ucs_c_series_server;fillColor=#FAFAFA;strokeColor=#005073;',
  },
  _width: 60,
  _height: 25,
}

export function UcsCSeriesServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...UCS_C_SERIES_SERVER}
      {...props}
      _style={extendStyle(UCS_C_SERIES_SERVER, props)}
    />
  )
}
