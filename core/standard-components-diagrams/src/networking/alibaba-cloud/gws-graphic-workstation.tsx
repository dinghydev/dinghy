import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GWS_GRAPHIC_WORKSTATION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.gws_graphic_workstation;',
  },
  _width: 47.400000000000006,
  _height: 47.400000000000006,
}

export function GwsGraphicWorkstation(props: DiagramNodeProps) {
  return (
    <Shape
      {...GWS_GRAPHIC_WORKSTATION}
      {...props}
      _style={extendStyle(GWS_GRAPHIC_WORKSTATION, props)}
    />
  )
}
