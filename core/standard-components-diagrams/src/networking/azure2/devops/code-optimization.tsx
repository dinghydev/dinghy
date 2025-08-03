import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CODE_OPTIMIZATION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/Code_Optimization.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function CodeOptimization(props: DiagramNodeProps) {
  return <Shape {...CODE_OPTIMIZATION} {...props} />
}
