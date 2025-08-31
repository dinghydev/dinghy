import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_STORE = {
  _style: {
    entity: 'shape=datastore;whiteSpace=wrap;html=1;',
  },
  _width: 60,
  _height: 60,
}

export function DataStore(props: DiagramNodeProps) {
  return (
    <Shape {...DATA_STORE} {...props} _style={extendStyle(DATA_STORE, props)} />
  )
}
