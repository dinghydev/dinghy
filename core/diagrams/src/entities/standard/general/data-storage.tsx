import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_STORAGE = {
  _style: {
    entity: 'shape=dataStorage;whiteSpace=wrap;html=1;fixedSize=1;',
  },
  _width: 100,
  _height: 80,
}

export function DataStorage(props: NodeProps) {
  return (
    <Shape
      {...DATA_STORAGE}
      {...props}
      _style={extendStyle(DATA_STORAGE, props)}
    />
  )
}
