import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROCESS = {
  _style: {
    entity: 'shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;',
  },
  _original_width: 120,
  _original_height: 60,
}

export function Process(props: DiagramNodeProps) {
  return <Shape {...PROCESS} {...props} _style={extendStyle(PROCESS, props)} />
}
