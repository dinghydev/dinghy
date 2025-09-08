import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SAP_BUSINESS_ACCELERATOR_HUB = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Business_Accelerator_Hub',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapBusinessAcceleratorHub(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_BUSINESS_ACCELERATOR_HUB}
      {...props}
      _style={extendStyle(SAP_BUSINESS_ACCELERATOR_HUB, props)}
    />
  )
}
