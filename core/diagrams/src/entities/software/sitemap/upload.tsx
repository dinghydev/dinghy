import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const UPLOAD = {
  _style: {
    entity:
      'html=1;whiteSpace=wrap;strokeColor=none;fillColor=#0079D6;labelPosition=center;verticalLabelPosition=middle;verticalAlign=top;align=center;fontSize=12;outlineConnect=0;spacingTop=-6;fontColor=#FFFFFF;sketch=0;shape=mxgraph.sitemap.upload;',
  },
  _width: 120,
  _height: 70,
}

export function Upload(props: NodeProps) {
  return <Shape {...UPLOAD} {...props} _style={extendStyle(UPLOAD, props)} />
}
