import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_STORE = {
  _style: {
    entity:
      'shape=datastore;html=1;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function DataStore(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATA_STORE)} />
}
