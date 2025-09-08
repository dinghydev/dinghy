import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVICE_ENDPOINT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.service_endpoint;',
  },
  _original_width: 50,
  _original_height: 20,
}

export function ServiceEndpoint(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVICE_ENDPOINT}
      {...props}
      _style={extendStyle(SERVICE_ENDPOINT, props)}
    />
  )
}
