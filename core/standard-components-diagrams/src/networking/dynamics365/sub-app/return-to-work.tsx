import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RETURN_TO_WORK = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/ReturnToWork.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 62.32,
}

export function ReturnToWork(props: DiagramNodeProps) {
  return (
    <Shape
      {...RETURN_TO_WORK}
      {...props}
      _style={extendStyle(RETURN_TO_WORK, props)}
    />
  )
}
