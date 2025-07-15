import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARCHIVE_TIER = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.archive_tier;',
  _width: 44.8,
  _height: 44.8,
}

export function ArchiveTier(props: DiagramNodeProps) {
  return <Shape {...ARCHIVE_TIER} {...props} />
}
