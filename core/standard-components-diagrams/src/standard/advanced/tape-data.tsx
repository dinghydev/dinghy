import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TAPE_DATA = {
  _style: 'shape=tapeData;whiteSpace=wrap;html=1;perimeter=ellipsePerimeter;',
  _width: 80,
  _height: 80,
}

export function TapeData(props: DiagramNodeProps) {
  return <Shape {...TAPE_DATA} {...props} />
}
