import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_DIGITAL_ASSISTANT = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Digital_Assistant',
  },
  _width: 60,
  _height: 60,
}

export function SapDigitalAssistant(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_DIGITAL_ASSISTANT}
      {...props}
      _style={extendStyle(SAP_DIGITAL_ASSISTANT, props)}
    />
  )
}
