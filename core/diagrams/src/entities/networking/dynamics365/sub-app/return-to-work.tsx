import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RETURN_TO_WORK = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/ReturnToWork.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62.32,
}

export function ReturnToWork(props: NodeProps) {
  return (
    <Shape
      {...RETURN_TO_WORK}
      {...props}
      _style={extendStyle(RETURN_TO_WORK, props)}
    />
  )
}
