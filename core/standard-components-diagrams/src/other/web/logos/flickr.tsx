import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLICKR = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.flickr',
  },
  _original_width: 71.2,
  _original_height: 31.200000000000003,
}

export function Flickr(props: DiagramNodeProps) {
  return <Shape {...FLICKR} {...props} _style={extendStyle(FLICKR, props)} />
}
