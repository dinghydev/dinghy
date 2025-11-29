import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_BUILD_WORK_ZONE_STANDARD_EDITION = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Build_Work_Zone_-_Standard_Edition',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapBuildWorkZoneStandardEdition(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, SAP_BUILD_WORK_ZONE_STANDARD_EDITION)}
    />
  )
}
