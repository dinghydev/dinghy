import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REGION = {
  _style: {
    entity:
      'shape=mxgraph.sysml.region;align=left;verticalAlign=top;spacingTop=-3;spacingLeft=25;html=1;',
  },
  _original_width: 200,
  _original_height: 160,
}

export function Region(props: DiagramNodeProps) {
  return <Shape {...REGION} {...props} _style={extendStyle(REGION, props)} />
}
