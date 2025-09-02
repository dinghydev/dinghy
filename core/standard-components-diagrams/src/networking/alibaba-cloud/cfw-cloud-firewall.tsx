import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CFW_CLOUD_FIREWALL = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cfw_cloud_firewall;',
  },
  _original_width: 55.5,
  _original_height: 39,
}

export function CfwCloudFirewall(props: DiagramNodeProps) {
  return (
    <Shape
      {...CFW_CLOUD_FIREWALL}
      {...props}
      _style={extendStyle(CFW_CLOUD_FIREWALL, props)}
    />
  )
}
