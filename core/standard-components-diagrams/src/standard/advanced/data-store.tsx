import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_STORE = {
  _style: {
    entity: 'shape=datastore;whiteSpace=wrap;html=1;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function DataStore(props: DiagramNodeProps) {
  return (
    <Shape {...DATA_STORE} {...props} _style={extendStyle(DATA_STORE, props)} />
  )
}
