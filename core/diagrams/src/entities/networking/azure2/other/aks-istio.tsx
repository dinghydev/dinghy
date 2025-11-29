import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AKS_ISTIO = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/AKS_Istio.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function AksIstio(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AKS_ISTIO)} />
}
