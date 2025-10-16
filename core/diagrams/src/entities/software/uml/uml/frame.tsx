import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FRAME = {
  _style: {
    entity: 'shape=umlFrame;whiteSpace=wrap;html=1;pointerEvents=0;',
  },
  _width: 300,
  _height: 200,
}

export function Frame(props: DiagramNodeProps) {
  return <Shape {...FRAME} {...props} _style={extendStyle(FRAME, props)} />
}
