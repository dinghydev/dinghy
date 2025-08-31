import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARC_KUBERNETES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Arc_Kubernetes.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ArcKubernetes(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARC_KUBERNETES}
      {...props}
      _style={extendStyle(ARC_KUBERNETES, props)}
    />
  )
}
