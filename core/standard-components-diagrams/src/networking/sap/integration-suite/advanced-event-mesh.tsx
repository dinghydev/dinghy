import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADVANCED_EVENT_MESH = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Integration_Suite_-_Advanced_Event_Mesh',
  },
  _width: 60,
  _height: 60,
}

export function AdvancedEventMesh(props: DiagramNodeProps) {
  return (
    <Shape
      {...ADVANCED_EVENT_MESH}
      {...props}
      _style={extendStyle(ADVANCED_EVENT_MESH, props)}
    />
  )
}
