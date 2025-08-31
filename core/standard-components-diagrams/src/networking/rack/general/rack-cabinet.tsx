import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RACK_CABINET = {
  _style: {
    group:
      'strokeColor=#666666;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rackGeneral.rackCabinet3;fillColor2=#f4f4f4;container=1;collapsible=0;childLayout=rack;allowGaps=1;marginLeft=9;marginRight=9;marginTop=21;marginBottom=22;textColor=#666666;numDisp=off;',
    entity: {
      strokeColor: '#666666',
    },
  },
}

export function RackCabinet(props: DiagramNodeProps) {
  return (
    <Shape
      {...RACK_CABINET}
      {...props}
      _style={extendStyle(RACK_CABINET, props)}
    />
  )
}
