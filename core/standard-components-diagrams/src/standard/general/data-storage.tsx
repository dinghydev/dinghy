import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_STORAGE = {
  _style: {
    entity: 'shape=dataStorage;whiteSpace=wrap;html=1;fixedSize=1;',
  },
  _original_width: 100,
  _original_height: 80,
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
