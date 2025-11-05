import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLICATION_AUTOSCALER = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Application_Autoscaler',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ApplicationAutoscaler(props: NodeProps) {
  return (
    <Shape
      {...APPLICATION_AUTOSCALER}
      {...props}
      _style={extendStyle(APPLICATION_AUTOSCALER, props)}
    />
  )
}
