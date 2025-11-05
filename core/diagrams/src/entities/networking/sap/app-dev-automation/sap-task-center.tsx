import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_TASK_CENTER = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Task_Center',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapTaskCenter(props: NodeProps) {
  return (
    <Shape
      {...SAP_TASK_CENTER}
      {...props}
      _style={extendStyle(SAP_TASK_CENTER, props)}
    />
  )
}
