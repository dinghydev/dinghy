import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION_FRONTEND_SERVICE = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Application_Frontend_Service',
  _width: 50,
  _height: 50,
}

export function ApplicationFrontendService(props: DiagramNodeProps) {
  return <Shape {...APPLICATION_FRONTEND_SERVICE} {...props} />
}
