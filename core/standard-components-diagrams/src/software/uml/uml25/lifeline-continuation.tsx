import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIFELINE_CONTINUATION = {
  _style: {
    entity: 'rounded=1;dashed=0;whiteSpace=wrap;html=1;',
  },
  _original_width: 0,
  _original_height: 200,
}

export function LifelineContinuation(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIFELINE_CONTINUATION}
      {...props}
      _style={extendStyle(LIFELINE_CONTINUATION, props)}
    />
  )
}
