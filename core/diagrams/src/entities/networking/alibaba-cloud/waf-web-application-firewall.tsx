import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WAF_WEB_APPLICATION_FIREWALL = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.waf_web_application_firewall;',
  },
  _original_width: 49.199999999999996,
  _original_height: 43.199999999999996,
}

export function WafWebApplicationFirewall(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, WAF_WEB_APPLICATION_FIREWALL)}
    />
  )
}
