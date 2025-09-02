import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_BUILD_WORK_ZONE_ADVANCED_EDITION = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Build_Work_Zone_-_Advanced_Edition',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapBuildWorkZoneAdvancedEdition(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_BUILD_WORK_ZONE_ADVANCED_EDITION}
      {...props}
      _style={extendStyle(SAP_BUILD_WORK_ZONE_ADVANCED_EDITION, props)}
    />
  )
}
