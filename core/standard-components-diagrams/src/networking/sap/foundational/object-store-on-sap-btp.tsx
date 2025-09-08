import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OBJECT_STORE_ON_SAP_BTP = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Object_Store_on_SAP_BTP',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ObjectStoreOnSapBtp(props: DiagramNodeProps) {
  return (
    <Shape
      {...OBJECT_STORE_ON_SAP_BTP}
      {...props}
      _style={extendStyle(OBJECT_STORE_ON_SAP_BTP, props)}
    />
  )
}
