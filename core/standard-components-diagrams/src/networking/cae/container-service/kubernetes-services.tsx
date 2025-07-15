import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KUBERNETES_SERVICES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Kubernetes_Services.svg;',
  _width: 50,
  _height: 37,
}

export function KubernetesServices(props: DiagramNodeProps) {
  return <Shape {...KUBERNETES_SERVICES} {...props} />
}
