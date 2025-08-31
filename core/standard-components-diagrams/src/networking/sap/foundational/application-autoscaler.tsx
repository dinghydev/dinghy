import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_AUTOSCALER = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Application_Autoscaler',
  _width: 60,
  _height: 60,
}

export function ApplicationAutoscaler(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_AUTOSCALER}
      {...props}
      _style={extendStyle(APPLICATION_AUTOSCALER, props)}
    />
  )
}
