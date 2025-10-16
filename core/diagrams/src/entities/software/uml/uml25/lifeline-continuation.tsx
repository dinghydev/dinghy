import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIFELINE_CONTINUATION = {
  _style: {
    entity: 'rounded=1;dashed=0;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 200,
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
