import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KUBERNETES_FLEET_MANAGER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Kubernetes_Fleet_Manager.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function KubernetesFleetManager(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, KUBERNETES_FLEET_MANAGER)} />
  )
}
