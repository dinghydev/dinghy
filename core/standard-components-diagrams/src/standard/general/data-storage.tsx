import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_STORAGE = {
  _style: {
    entity: 'shape=dataStorage;whiteSpace=wrap;html=1;fixedSize=1;',
  },
  _width: 100,
  _height: 80,
}

export function DataStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_STORAGE}
      {...props}
      _style={extendStyle(DATA_STORAGE, props)}
    />
  )
}
