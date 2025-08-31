import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FRAME = {
  _style: 'shape=umlFrame;whiteSpace=wrap;html=1;pointerEvents=0;',
  _width: 300,
  _height: 200,
}

export function Frame(props: DiagramNodeProps) {
  return <Shape {...FRAME} {...props} _style={extendStyle(FRAME, props)} />
}
