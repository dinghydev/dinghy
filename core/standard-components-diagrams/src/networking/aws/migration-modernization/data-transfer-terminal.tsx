import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_TRANSFER_TERMINAL = {
  _style: {
    entity:
      'sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#01A88D;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.data_transfer_terminal;',
  },
  _width: 60,
  _height: 60,
}

export function DataTransferTerminal(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_TRANSFER_TERMINAL}
      {...props}
      _style={extendStyle(DATA_TRANSFER_TERMINAL, props)}
    />
  )
}
