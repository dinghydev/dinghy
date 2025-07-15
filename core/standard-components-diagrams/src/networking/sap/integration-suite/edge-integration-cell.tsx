import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EDGE_INTEGRATION_CELL = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Edge_Integration_Cell',
  _width: 50,
  _height: 50,
}

export function EdgeIntegrationCell(props: DiagramNodeProps) {
  return <Shape {...EDGE_INTEGRATION_CELL} {...props} />
}
