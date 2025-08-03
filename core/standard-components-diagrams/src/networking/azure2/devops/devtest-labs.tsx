import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVTEST_LABS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/DevTest_Labs.svg;strokeColor=none;',
  _width: 66,
  _height: 64,
}

export function DevtestLabs(props: DiagramNodeProps) {
  return <Shape {...DEVTEST_LABS} {...props} />
}
