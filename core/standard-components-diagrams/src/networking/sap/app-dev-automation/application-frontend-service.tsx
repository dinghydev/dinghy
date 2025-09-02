import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_FRONTEND_SERVICE = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Application_Frontend_Service',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ApplicationFrontendService(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_FRONTEND_SERVICE}
      {...props}
      _style={extendStyle(APPLICATION_FRONTEND_SERVICE, props)}
    />
  )
}
