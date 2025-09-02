import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AI_PLATFORM = {
  _style: {
    entity:
      'fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _original_width: 0,
  _original_height: 60,
}

export function AiPlatform(props: DiagramNodeProps) {
  return (
    <Shape
      {...AI_PLATFORM}
      {...props}
      _style={extendStyle(AI_PLATFORM, props)}
    />
  )
}
