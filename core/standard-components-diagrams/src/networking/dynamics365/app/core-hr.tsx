import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CORE_HR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/CoreHR.svg;',
  _width: 68,
  _height: 68,
}

export function CoreHr(props: DiagramNodeProps) {
  return <Shape {...CORE_HR} {...props} />
}
