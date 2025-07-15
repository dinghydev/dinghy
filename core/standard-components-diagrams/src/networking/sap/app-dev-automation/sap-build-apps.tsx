import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SAP_BUILD_APPS = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Build_Apps',
  _width: 50,
  _height: 50,
}

export function SapBuildApps(props: DiagramNodeProps) {
  return <Shape {...SAP_BUILD_APPS} {...props} />
}
