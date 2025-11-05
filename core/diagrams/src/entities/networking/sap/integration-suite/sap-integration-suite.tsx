import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_INTEGRATION_SUITE = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Integration_Suite',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapIntegrationSuite(props: NodeProps) {
  return (
    <Shape
      {...SAP_INTEGRATION_SUITE}
      {...props}
      _style={extendStyle(SAP_INTEGRATION_SUITE, props)}
    />
  )
}
