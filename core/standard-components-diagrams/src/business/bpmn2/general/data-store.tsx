import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_STORE = {
  _style:
    'shape=datastore;html=1;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;',
  _width: 100,
  _height: 100,
}

export function DataStore(props: DiagramNodeProps) {
  return <Shape {...DATA_STORE} {...props} />
}
