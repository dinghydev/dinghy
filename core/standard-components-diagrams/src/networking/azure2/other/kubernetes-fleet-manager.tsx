import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KUBERNETES_FLEET_MANAGER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Kubernetes_Fleet_Manager.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function KubernetesFleetManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...KUBERNETES_FLEET_MANAGER}
      {...props}
      _style={extendStyle(KUBERNETES_FLEET_MANAGER, props)}
    />
  )
}
