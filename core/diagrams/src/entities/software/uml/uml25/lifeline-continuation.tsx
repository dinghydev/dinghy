import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIFELINE_CONTINUATION = {
  _style: {
    entity: 'rounded=1;dashed=0;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 200,
}

export function LifelineContinuation(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LIFELINE_CONTINUATION)} />
}
