import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DELAY = {
  _style: {
    entity: 'shape=delay;whiteSpace=wrap;html=1;',
  },
  _width: 80,
  _height: 40,
}

export function Delay(props: DiagramNodeProps) {
  return <Shape {...DELAY} {...props} _style={extendStyle(DELAY, props)} />
}
