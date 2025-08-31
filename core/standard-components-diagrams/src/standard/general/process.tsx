import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROCESS = {
  _style: {
    entity: 'shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;',
  },
  _width: 120,
  _height: 60,
}

export function Process(props: DiagramNodeProps) {
  return <Shape {...PROCESS} {...props} _style={extendStyle(PROCESS, props)} />
}
