import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARC_KUBERNETES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Arc_Kubernetes.svg;',
  _width: 68,
  _height: 68,
}

export function ArcKubernetes(props: DiagramNodeProps) {
  return <Shape {...ARC_KUBERNETES} {...props} />
}
