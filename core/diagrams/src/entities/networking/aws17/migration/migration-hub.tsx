import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MIGRATION_HUB = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.migration_hub_2;fillColor=#ABABAB;gradientColor=none;pointerEvents=1',
  },
  _width: 114,
  _height: 121.5,
}

export function MigrationHub(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MIGRATION_HUB)} />
}
