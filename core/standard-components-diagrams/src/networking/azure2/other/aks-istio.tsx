import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AKS_ISTIO = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/AKS_Istio.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function AksIstio(props: DiagramNodeProps) {
  return (
    <Shape {...AKS_ISTIO} {...props} _style={extendStyle(AKS_ISTIO, props)} />
  )
}
