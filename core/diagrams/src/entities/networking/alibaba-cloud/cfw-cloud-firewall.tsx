import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CFW_CLOUD_FIREWALL = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cfw_cloud_firewall;',
  },
  _width: 55.5,
  _height: 39,
}

export function CfwCloudFirewall(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CFW_CLOUD_FIREWALL)} />
}
