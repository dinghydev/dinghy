import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RETURN_TO_WORK = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/ReturnToWork.svg;',
  _width: 68,
  _height: 62.32,
}

export function ReturnToWork(props: DiagramNodeProps) {
  return <Shape {...RETURN_TO_WORK} {...props} />
}
