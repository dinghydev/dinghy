import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AKS_ISTIO = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/AKS_Istio.svg;',
  _width: 68,
  _height: 68,
}

export function AksIstio(props: DiagramNodeProps) {
  return <Shape {...AKS_ISTIO} {...props} />
}
