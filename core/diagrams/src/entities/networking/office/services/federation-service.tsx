import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FEDERATION_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.federation_service;',
  },
  _original_width: 58,
  _original_height: 59,
}

export function FederationService(props: NodeProps) {
  return (
    <Shape
      {...FEDERATION_SERVICE}
      {...props}
      _style={extendStyle(FEDERATION_SERVICE, props)}
    />
  )
}
