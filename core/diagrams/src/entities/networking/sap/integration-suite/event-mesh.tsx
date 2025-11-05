import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EVENT_MESH = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Integration_Suite_-_Event_Mesh',
  },
  _original_width: 50,
  _original_height: 50,
}

export function EventMesh(props: NodeProps) {
  return (
    <Shape {...EVENT_MESH} {...props} _style={extendStyle(EVENT_MESH, props)} />
  )
}
