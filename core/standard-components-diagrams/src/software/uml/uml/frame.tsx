import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FRAME = {
  _style: {
    entity: 'shape=umlFrame;whiteSpace=wrap;html=1;pointerEvents=0;',
  },
  _original_width: 300,
  _original_height: 200,
}

export function Frame(props: DiagramNodeProps) {
  return <Shape {...FRAME} {...props} _style={extendStyle(FRAME, props)} />
}
