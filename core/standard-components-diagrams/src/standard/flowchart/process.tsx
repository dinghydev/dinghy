import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROCESS = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;absoluteArcSize=1;arcSize=14;strokeWidth=2;',
  },
  _width: 60,
  _height: 60,
}

export function Process(props: DiagramNodeProps) {
  return <Shape {...PROCESS} {...props} _style={extendStyle(PROCESS, props)} />
}
