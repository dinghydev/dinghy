import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_STORE = {
  _style: {
    entity:
      'shape=datastore;html=1;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;',
  },
  _width: 60,
  _height: 60,
}

export function DataStore(props: DiagramNodeProps) {
  return (
    <Shape {...DATA_STORE} {...props} _style={extendStyle(DATA_STORE, props)} />
  )
}
