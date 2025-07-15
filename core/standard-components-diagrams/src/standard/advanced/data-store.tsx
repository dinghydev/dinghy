import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_STORE = {
  _style: 'shape=datastore;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 60,
}

export function DataStore(props: DiagramNodeProps) {
  return <Shape {...DATA_STORE} {...props} />
}
