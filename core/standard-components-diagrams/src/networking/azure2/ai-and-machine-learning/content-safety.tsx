import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTENT_SAFETY = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Content_Safety.svg;',
  _width: 68,
  _height: 68,
}

export function ContentSafety(props: DiagramNodeProps) {
  return <Shape {...CONTENT_SAFETY} {...props} />
}
