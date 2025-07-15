import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AI_BUILDER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/AIBuilder.svg;',
  _width: 68,
  _height: 68,
}

export function AiBuilder(props: DiagramNodeProps) {
  return <Shape {...AI_BUILDER} {...props} />
}
