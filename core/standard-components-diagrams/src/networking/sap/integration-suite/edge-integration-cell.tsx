import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EDGE_INTEGRATION_CELL = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Edge_Integration_Cell',
  _width: 60,
  _height: 60,
}

export function EdgeIntegrationCell(props: DiagramNodeProps) {
  return (
    <Shape
      {...EDGE_INTEGRATION_CELL}
      {...props}
      _style={extendStyle(EDGE_INTEGRATION_CELL, props)}
    />
  )
}
