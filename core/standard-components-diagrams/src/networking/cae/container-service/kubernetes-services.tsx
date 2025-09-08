import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const KUBERNETES_SERVICES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Kubernetes_Services.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 37,
}

export function KubernetesServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...KUBERNETES_SERVICES}
      {...props}
      _style={extendStyle(KUBERNETES_SERVICES, props)}
    />
  )
}
