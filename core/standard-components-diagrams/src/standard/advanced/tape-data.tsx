import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_DATA = {
  _style: {
    entity: 'shape=tapeData;whiteSpace=wrap;html=1;perimeter=ellipsePerimeter;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function TapeData(props: DiagramNodeProps) {
  return (
    <Shape {...TAPE_DATA} {...props} _style={extendStyle(TAPE_DATA, props)} />
  )
}
