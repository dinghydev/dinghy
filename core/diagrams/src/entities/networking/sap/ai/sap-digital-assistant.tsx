import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_DIGITAL_ASSISTANT = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Digital_Assistant',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapDigitalAssistant(props: NodeProps) {
  return (
    <Shape
      {...SAP_DIGITAL_ASSISTANT}
      {...props}
      _style={extendStyle(SAP_DIGITAL_ASSISTANT, props)}
    />
  )
}
