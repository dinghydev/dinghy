import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_BTP_CLOUD_FOUNDRY_RUNTIME = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_BTP,_Cloud_Foundry_runtime',
  _width: 60,
  _height: 60,
}

export function SapBtpCloudFoundryRuntime(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_BTP_CLOUD_FOUNDRY_RUNTIME}
      {...props}
      _style={extendStyle(SAP_BTP_CLOUD_FOUNDRY_RUNTIME, props)}
    />
  )
}
