import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_BUILD_WORK_ZONE_STANDARD_EDITION = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Build_Work_Zone_-_Standard_Edition',
  _width: 60,
  _height: 60,
}

export function SapBuildWorkZoneStandardEdition(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_BUILD_WORK_ZONE_STANDARD_EDITION}
      {...props}
      _style={extendStyle(SAP_BUILD_WORK_ZONE_STANDARD_EDITION, props)}
    />
  )
}
