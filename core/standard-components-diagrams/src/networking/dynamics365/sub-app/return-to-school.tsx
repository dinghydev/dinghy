import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RETURN_TO_SCHOOL = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/ReturnToSchool.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 66.60000000000001,
}

export function ReturnToSchool(props: DiagramNodeProps) {
  return (
    <Shape
      {...RETURN_TO_SCHOOL}
      {...props}
      _style={extendStyle(RETURN_TO_SCHOOL, props)}
    />
  )
}
