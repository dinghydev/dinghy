import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GLOBAL_SECONDARY_INDEX = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.global_secondary_index;fillColor=#2E73B8;gradientColor=none;',
  _width: 67.5,
  _height: 66,
}

export function GlobalSecondaryIndex(props: DiagramNodeProps) {
  return <Shape {...GLOBAL_SECONDARY_INDEX} {...props} />
}
