import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AI_BUILDER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/AIBuilder.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function AiBuilder(props: DiagramNodeProps) {
  return (
    <Shape {...AI_BUILDER} {...props} _style={extendStyle(AI_BUILDER, props)} />
  )
}
