import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HEALTH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.health;',
  },
  _original_width: 60,
  _original_height: 50.4,
}

export function Health(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HEALTH)} />
}
