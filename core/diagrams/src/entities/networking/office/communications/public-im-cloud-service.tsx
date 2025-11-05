import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PUBLIC_IM_CLOUD_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.public_im_cloud_service;',
  },
  _original_width: 60,
  _original_height: 58,
}

export function PublicImCloudService(props: NodeProps) {
  return (
    <Shape
      {...PUBLIC_IM_CLOUD_SERVICE}
      {...props}
      _style={extendStyle(PUBLIC_IM_CLOUD_SERVICE, props)}
    />
  )
}
