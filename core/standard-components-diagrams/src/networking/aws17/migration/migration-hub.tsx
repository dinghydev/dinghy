import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MIGRATION_HUB = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.migration_hub_2;fillColor=#ABABAB;gradientColor=none;pointerEvents=1',
  },
  _original_width: 114,
  _original_height: 121.5,
}

export function MigrationHub(props: DiagramNodeProps) {
  return (
    <Shape
      {...MIGRATION_HUB}
      {...props}
      _style={extendStyle(MIGRATION_HUB, props)}
    />
  )
}
