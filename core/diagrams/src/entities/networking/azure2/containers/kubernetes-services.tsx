import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KUBERNETES_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/containers/Kubernetes_Services.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60,
}

export function KubernetesServices(props: NodeProps) {
  return (
    <Shape
      {...KUBERNETES_SERVICES}
      {...props}
      _style={extendStyle(KUBERNETES_SERVICES, props)}
    />
  )
}
