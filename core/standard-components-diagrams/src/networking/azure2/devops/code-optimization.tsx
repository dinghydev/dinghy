import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CODE_OPTIMIZATION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/Code_Optimization.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
