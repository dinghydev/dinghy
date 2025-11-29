import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_SERVICE_MANAGER = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Service_Manager',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapServiceManager(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SAP_SERVICE_MANAGER)} />
}
