import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TELEPRESENCE_ENDPOINT_TWIN_DATA_DISPLAY = {
  _style: {
    entity:
      'sketch=0;points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=telepresence_endpoint_twin_data_display;fillColor=#FAFAFA;strokeColor=#005073;',
  },
  _original_width: 64,
  _original_height: 50,
}

export function TelepresenceEndpointTwinDataDisplay(props: DiagramNodeProps) {
  return (
    <Shape
      {...TELEPRESENCE_ENDPOINT_TWIN_DATA_DISPLAY}
      {...props}
      _style={extendStyle(TELEPRESENCE_ENDPOINT_TWIN_DATA_DISPLAY, props)}
    />
  )
}
