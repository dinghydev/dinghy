import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KUBERNETES_FLEET_MANAGER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Kubernetes_Fleet_Manager.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function KubernetesFleetManager(props: DiagramNodeProps) {
  return <Shape {...KUBERNETES_FLEET_MANAGER} {...props} />
}
