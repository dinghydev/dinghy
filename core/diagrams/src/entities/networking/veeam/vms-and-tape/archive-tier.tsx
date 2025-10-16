import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARCHIVE_TIER = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.archive_tier;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function ArchiveTier(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARCHIVE_TIER}
      {...props}
      _style={extendStyle(ARCHIVE_TIER, props)}
    />
  )
}
