import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NSX_PUBLIC_CLOUD_GATEWAY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.nsx_public_cloud_gateway;',
  _width: 50,
  _height: 47.5,
}

export function NsxPublicCloudGateway(props: DiagramNodeProps) {
  return <Shape {...NSX_PUBLIC_CLOUD_GATEWAY} {...props} />
}
