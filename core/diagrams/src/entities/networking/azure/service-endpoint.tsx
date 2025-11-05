import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVICE_ENDPOINT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.service_endpoint;',
  },
  _width: 50,
  _height: 20,
}

export function ServiceEndpoint(props: NodeProps) {
  return (
    <Shape
      {...SERVICE_ENDPOINT}
      {...props}
      _style={extendStyle(SERVICE_ENDPOINT, props)}
    />
  )
}
