import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLICKR = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.flickr',
  },
  _width: 71.2,
  _height: 31.200000000000003,
}

export function Flickr(props: NodeProps) {
  return <Shape {...FLICKR} {...props} _style={extendStyle(FLICKR, props)} />
}
