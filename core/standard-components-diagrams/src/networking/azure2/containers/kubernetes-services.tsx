import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KUBERNETES_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/containers/Kubernetes_Services.svg;strokeColor=none;',
  _width: 68,
  _height: 60,
}

export function KubernetesServices(props: DiagramNodeProps) {
  return <Shape {...KUBERNETES_SERVICES} {...props} />
}
