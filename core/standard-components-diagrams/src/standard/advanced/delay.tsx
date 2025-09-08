import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DELAY = {
  _style: {
    entity: 'shape=delay;whiteSpace=wrap;html=1;',
  },
  _original_width: 80,
  _original_height: 40,
}

export function Delay(props: DiagramNodeProps) {
  return <Shape {...DELAY} {...props} _style={extendStyle(DELAY, props)} />
}
