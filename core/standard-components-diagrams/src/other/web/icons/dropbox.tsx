import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DROPBOX = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.dropbox;fillColor=#0BAAFE;gradientColor=#0080E6',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Dropbox(props: DiagramNodeProps) {
  return <Shape {...DROPBOX} {...props} _style={extendStyle(DROPBOX, props)} />
}
