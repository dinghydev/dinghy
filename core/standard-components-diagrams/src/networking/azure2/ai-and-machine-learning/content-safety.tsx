import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTENT_SAFETY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Content_Safety.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function ContentSafety(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTENT_SAFETY}
      {...props}
      _style={extendStyle(CONTENT_SAFETY, props)}
    />
  )
}
