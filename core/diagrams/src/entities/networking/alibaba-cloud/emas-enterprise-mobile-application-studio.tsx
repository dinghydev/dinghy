import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EMAS_ENTERPRISE_MOBILE_APPLICATION_STUDIO = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.emas_enterprise_mobile_application_studio;',
  },
  _original_width: 43.199999999999996,
  _original_height: 41.699999999999996,
}

export function EmasEnterpriseMobileApplicationStudio(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, EMAS_ENTERPRISE_MOBILE_APPLICATION_STUDIO)}
    />
  )
}
