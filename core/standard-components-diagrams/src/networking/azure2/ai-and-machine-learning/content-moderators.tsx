import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTENT_MODERATORS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Content_Moderators.svg;',
  _width: 68,
  _height: 62.8,
}

export function ContentModerators(props: DiagramNodeProps) {
  return <Shape {...CONTENT_MODERATORS} {...props} />
}
