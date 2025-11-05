import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_GRAPH = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Integration_Suite_-_SAP_Graph',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapGraph(props: NodeProps) {
  return (
    <Shape {...SAP_GRAPH} {...props} _style={extendStyle(SAP_GRAPH, props)} />
  )
}
