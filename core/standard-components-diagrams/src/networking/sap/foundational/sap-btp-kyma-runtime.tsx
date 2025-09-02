import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_BTP_KYMA_RUNTIME = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_BTP,_Kyma_runtime',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapBtpKymaRuntime(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_BTP_KYMA_RUNTIME}
      {...props}
      _style={extendStyle(SAP_BTP_KYMA_RUNTIME, props)}
    />
  )
}
