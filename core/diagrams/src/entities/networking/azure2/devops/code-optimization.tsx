import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CODE_OPTIMIZATION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/Code_Optimization.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function CodeOptimization(props: DiagramNodeProps) {
  return (
    <Shape
      {...CODE_OPTIMIZATION}
      {...props}
      _style={extendStyle(CODE_OPTIMIZATION, props)}
    />
  )
}
