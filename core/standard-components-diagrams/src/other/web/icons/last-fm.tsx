import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LAST_FM = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.last.fm;fillColor=#F33543;gradientColor=#BD0E11',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function LastFm(props: DiagramNodeProps) {
  return <Shape {...LAST_FM} {...props} _style={extendStyle(LAST_FM, props)} />
}
