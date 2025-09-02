import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERRUPTIBLE_ACTIVITY_REGION = {
  _style: {
    entity:
      'html=1;align=center;verticalAlign=top;rounded=1;absoluteArcSize=1;arcSize=20;dashed=1;whiteSpace=wrap;',
  },
  _original_width: 200,
  _original_height: 100,
}

export function InterruptibleActivityRegion(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERRUPTIBLE_ACTIVITY_REGION}
      {...props}
      _style={extendStyle(INTERRUPTIBLE_ACTIVITY_REGION, props)}
    />
  )
}
