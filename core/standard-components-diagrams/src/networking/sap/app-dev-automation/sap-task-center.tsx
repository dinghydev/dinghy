import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_TASK_CENTER = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Task_Center',
  },
  _width: 60,
  _height: 60,
}

export function SapTaskCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_TASK_CENTER}
      {...props}
      _style={extendStyle(SAP_TASK_CENTER, props)}
    />
  )
}
