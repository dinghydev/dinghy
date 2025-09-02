import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARC_KUBERNETES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Arc_Kubernetes.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
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
