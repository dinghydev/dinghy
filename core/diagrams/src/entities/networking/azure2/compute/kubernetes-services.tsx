import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KUBERNETES_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Kubernetes_Services.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60,
}

export function KubernetesServices(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, KUBERNETES_SERVICES)} />
}
