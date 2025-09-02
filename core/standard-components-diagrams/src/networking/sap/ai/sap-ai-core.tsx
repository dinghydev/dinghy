import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_AI_CORE = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_AI_Core',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapAiCore(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_AI_CORE}
      {...props}
      _style={extendStyle(SAP_AI_CORE, props)}
    />
  )
}
