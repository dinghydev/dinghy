import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_SERVICE_REQUEST = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.office.clouds.cloud_service_request;',
  },
  _width: 102,
  _height: 80,
}

export function CloudServiceRequest(props: NodeProps) {
  return (
    <Shape
      {...CLOUD_SERVICE_REQUEST}
      {...props}
      _style={extendStyle(CLOUD_SERVICE_REQUEST, props)}
    />
  )
}
