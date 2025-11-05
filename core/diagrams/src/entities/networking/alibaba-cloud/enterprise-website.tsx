import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ENTERPRISE_WEBSITE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.enterprise_website;',
  },
  _original_width: 53.1,
  _original_height: 41.4,
}

export function EnterpriseWebsite(props: NodeProps) {
  return (
    <Shape
      {...ENTERPRISE_WEBSITE}
      {...props}
      _style={extendStyle(ENTERPRISE_WEBSITE, props)}
    />
  )
}
