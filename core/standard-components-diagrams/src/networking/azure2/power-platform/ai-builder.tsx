import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AI_BUILDER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/AIBuilder.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function AiBuilder(props: DiagramNodeProps) {
  return (
    <Shape {...AI_BUILDER} {...props} _style={extendStyle(AI_BUILDER, props)} />
  )
}
