import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SAP_BUILD_PROCESS_AUTOMATION = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Build_Process_Automation',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapBuildProcessAutomation(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_BUILD_PROCESS_AUTOMATION}
      {...props}
      _style={extendStyle(SAP_BUILD_PROCESS_AUTOMATION, props)}
    />
  )
}
