import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_AUTH = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cloud_auth;',
  },
  _original_width: 60,
  _original_height: 54.6,
}

export function CloudAuth(props: DiagramNodeProps) {
  return (
    <Shape {...CLOUD_AUTH} {...props} _style={extendStyle(CLOUD_AUTH, props)} />
  )
}
