import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_STORAGE = {
  _style: 'shape=dataStorage;whiteSpace=wrap;html=1;fixedSize=1;',
  _width: 100,
  _height: 80,
}

export function DataStorage(props: DiagramNodeProps) {
  return <Shape {...DATA_STORAGE} {...props} />
}
