import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_CLOUD_ALM = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Cloud_ALM',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapCloudAlm(props: NodeProps) {
  return (
    <Shape
      {...SAP_CLOUD_ALM}
      {...props}
      _style={extendStyle(SAP_CLOUD_ALM, props)}
    />
  )
}
