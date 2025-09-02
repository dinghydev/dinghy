import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_DATASPHERE = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Datasphere',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapDatasphere(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_DATASPHERE}
      {...props}
      _style={extendStyle(SAP_DATASPHERE, props)}
    />
  )
}
